const search = document.getElementById("search");
const results = document.getElementById("results");
const searchInfo = document.getElementById("searchInfo");
const topButton = document.getElementById("topButton");
const allTab = document.getElementById("all-tab");
const favsTab = document.getElementById("favs-tab");
const favCountBadge = document.getElementById("favCount");

let currentView = 'all';
let itemsToShow = 50;

let favorites = JSON.parse(localStorage.getItem("library_favorites")) || [];

function toggleFavorite(title) {
    const index = favorites.indexOf(title);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(title);
    }
    localStorage.setItem("library_favorites", JSON.stringify(favorites));
    updateFavBadge();
    render(search.value, false);
}

function updateFavBadge() {
    favCountBadge.textContent = favorites.length;
}

function render(query = "", resetPagination = true) {
    if (resetPagination) {
        itemsToShow = 50;
    }

    results.innerHTML = "";
    
    let entries = [...database];
    if (currentView === 'favorites') {
        entries = entries.filter(item => favorites.includes(item.title));
    }

    const cleanQuery = query.trim().toLowerCase();
    if (cleanQuery !== "") {
        entries = entries.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(cleanQuery);
            const typeMatch = item.type.toLowerCase().includes(cleanQuery);
            const bodyMatch = item.latex.toLowerCase().includes(cleanQuery);
            
            return titleMatch || typeMatch || bodyMatch;
        });
    }

    searchInfo.textContent = `Showing ${Math.min(itemsToShow, entries.length)} of ${entries.length} entry/entries`;

    if (entries.length === 0) {
        results.innerHTML = `<div class="alert alert-warning text-center">No entries found.</div>`;
        return;
    }
    
    const visibleEntries = entries.slice(0, itemsToShow);

    visibleEntries.forEach(entry => {
        const itemIdentifier = entry.title;
        const isFav = favorites.includes(itemIdentifier);

        const div = document.createElement("div");
        div.className = "card shadow-sm mb-4 position-relative";

        
        const displaysAsUnnamed = !entry.title || entry.title.trim() === "" || entry.title.toLowerCase() === "unnamed";
                
        const titleMarkup = displaysAsUnnamed 
            ? `<h3 class="card-title h5 text-muted fst-italic mb-3 style-math-block">Unnamed</h3>`
            : `<h3 class="card-title h5 fw-bold mb-3 style-math-block">${entry.title}</h3>`;
        
        let safeContent = entry.latex;
        
        safeContent = safeContent.replace(/\\newline/g, "<br>");
        safeContent = safeContent.replace(/\\medskip/g, '<div class="my-3"></div>');
        safeContent = safeContent.replace(/\\bigskip/g, '<div class="my-4"></div>');
        safeContent = safeContent.replace(/\\textit\{([\s\S]*?)\}/g, "<i>$1</i>");
        safeContent = safeContent.replace(/\\textbf\{([\s\S]*?)\}/g, "<strong>$1</strong>");

        safeContent = safeContent.replace(/\\begin\{rcases\*?\}([\s\S]*?)\\end\{rcases\*?\}/g, (match) => {
            return `$$${match}$$`;
        });
        
        const looseEnvPattern = /\\begin\{(align\*?|equation\*?)\}([\s\S]*?)\\end\{\1\}/g;
        safeContent = safeContent.replace(looseEnvPattern, (match, envName, body) => {
            
            let cleanBody = body.replace(/\$\$/g, "");
            return `$$\\begin{aligned}${cleanBody}\\end{aligned}$$`;
        });

        safeContent = safeContent.replace(/\$\$\s*\$\$/g, "$$");

        div.innerHTML = `
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <span class="badge bg-primary text-uppercase px-2 py-1 rounded-pill">${entry.type}</span>
                    <button class="btn btn-link p-0 text-danger border-0 fav-btn" data-title="${itemIdentifier}" style="font-size: 1.3rem; line-height: 1;">
                        <i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}"></i>
                    </button>
                </div>

                ${titleMarkup}

                <div class="card-text text-secondary mb-3 fs-6 style-math-block">
                    ${safeContent}
                </div>
            </div>
        `;

        div.querySelector(".fav-btn").addEventListener("click", (e) => {
            e.preventDefault();
            toggleFavorite(itemIdentifier);
        });

        results.appendChild(div);
    });
    
    if (entries.length > itemsToShow) {
        const loadMoreContainer = document.createElement("div");
        loadMoreContainer.className = "text-center my-4";
        
        const loadMoreBtn = document.createElement("button");
        loadMoreBtn.className = "btn btn-outline-primary px-4";
        loadMoreBtn.innerText = "Load More Content";
        loadMoreBtn.addEventListener("click", () => {
            itemsToShow += 25;
            render(search.value, false); 
        });

        loadMoreContainer.appendChild(loadMoreBtn);
        results.appendChild(loadMoreContainer);
    }
    
    if (window.renderMathInElement) {
        renderMathInElement(results, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true}
            ],
            throwOnError: false
        });
    }
}

search.addEventListener("input", e => {
    render(e.target.value);
});

allTab.addEventListener("click", () => {
    allTab.classList.add("active");
    favsTab.classList.remove("active");
    currentView = 'all';
    render(search.value);
});

favsTab.addEventListener("click", () => {
    favsTab.classList.add("active");
    allTab.classList.remove("active");
    currentView = 'favorites';
    render(search.value);
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

updateFavBadge();
render();