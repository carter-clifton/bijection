const database = [
    {
        type: "Definition",
        title: "Set",
        latex: `
A set is an unordered collection of distinct objects which are called elements. A set must be well defined.
`
    },
    {
        type: "Definition",
        title: "Well Defined",
        latex: `
A set is well defined if when given an object, you can determine if the object is in the set or not.
`
    },
    {
        type: "Definition",
        title: "Injective / One-to-one / 1-1",
        latex: `
A function $ f : A \\to B $ is injective if $ f(a) = f(b) $ forces $ a = b $.
`
    },
    {
        type: "Remark",
        title: "When is a function not injective?",
        latex: `
A function is not injective when there exists $ a, b $ with $ f(a) = f(b) $, and $ a \\neq b $.
`
    },
    {
        type: "Definition",
        title: "Surjective / Onto",
        latex: `
A function $ f : A \\to B $ is surjective if $ f(A) = B $ (Note that $ f(A) $ is the image, $ f(A) = \\left\\{ f(a) : a \\in A \\right\\} $). That is, for all $ b \\in B $, there exists $ a \\in A $ with $ f(a) = b $.
`
    },
    {
        type: "Remark",
        title: "When is a function not surjective?",
        latex: `
A function is not surjective when there exists $ b \\in B $ such that for all $ a \\in A $, $ f(a) \\neq b $.
`
    },
    {
        type: "Definition",
        title: "Image of a subset",
        latex: `
Suppose $ f : X \\to Y $, and let $ A \\subseteq X $. The image of the subset $ A $ is the set obtained by applying the function $ f $ to every element of $ A $. This is denoted by $ f(A) $.
    \\[ f(A) = \\left\\{ f(a) : a \\in A \\right\\} \\]
`
    },
    {
        type: "Definition",
        title: "Preimage of a Subset",
        latex: `
Suppose $ f : X \\to Y $, and let $ B \\subseteq Y $. The preimage of $ B $ is everything in $ X $ that gets mapped to $ B $ by $ f $. This is denoted by $ f^{-1}(B) $.
    \\[ f^{-1}(B) = \\left\\{ x \\in X : f(x) \\in B \\right\\} \\subseteq X \\]
`
    },
    {
        type: "Definition",
        title: "Bijection",
        latex: `
A function that is both injective and surjective is a bijection. This means that every element in $ A $ gets mapped to a unique element in $ B $, and everything in $ B $ has a solution in $ A $. If we have $ f : X \\to Y $, and $ f $ is a bijection, then we can define an inverse function $ f^{-1} : B \\to A $ where $ f^{-1} (b) = a \\Leftrightarrow f(a) = b $.
`
    },
    {
        type: "Definition",
        title: "Field",
        latex: `
A field is a nonempty set $ \\mathbb{F} $ along with 2 binary operations, addition ($ + $) and multiplication ($ \\cdot $), satisfying the following axioms:
    <ol>
<li>If $ a, b \\in \\mathbb{F} $, then
        \\begin{equation*}
            \\begin{rcases}
                a + b = b + a \\\\
                a \\cdot b = b \\cdot a
            \\end{rcases}
            \\text{ Operations are commutative}
        \\end{equation*}</li>
<li>If $ a, b, c \\in \\mathbb{F} $, then
        \\[ a \\cdot \\left( b + c \\right) = a \\cdot b + a \\cdot c \\qquad \\text{Distributive property} \\]</li>
<li>If $ a, b, c \\in \\mathbb{F} $, then
        \\begin{equation*}
            \\begin{rcases}
                a + \\left( b + c \\right) = \\left( a + b \\right) + c \\\\
                a \\cdot \\left( b \\cdot c \\right) = \\left( a \\cdot b \\right) \\cdot c
            \\end{rcases}
            \\text{ Operations are associative}
        \\end{equation*}</li>
<li>There are elements $ 0, 1 \\in \\mathbb{F} $ such that for all $ a \\in \\mathbb{F} $:
        \\begin{align*}
            a + 0 & = a \\qquad \\text{0 is the additive identity} \\\\
            a \\cdot 1 &= a \\qquad \\text{1 is the multiplicative identity}
        \\end{align*}</li>
<li>For each $ a \\in \\mathbb{F} $ there is $ -a \\in \\mathbb{F} $ such that:
        \\[ a + \\left( -a \\right) = 0 \\qquad \\text{Additive inverse} \\]
        For each $ a \\in \\mathbb{F} $ with $ a \\neq 0 $, there is $ a^{-1} \\in \\mathbb{F} $ such that:
        \\[ a \\cdot a^{-1} = 1 \\qquad \\text{Multiplicative inverse} \\]</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Ordered Field",
        latex: `
An ordered field is a field $ \\mathbb{F} $ along with:
    <ol start="6">
<li>There is a nonempty subset $ P \\subset \\mathbb{F} $ called the positive elements such that:
        <ol>
</li>
<li>If $ a, b \\in P $ then $ a + b \\in P $ and $ a \\cdot b \\in P $</li>
<li>If $ a \\in \\mathbb{F} $ and $ a \\neq 0 $, then $ a \\in P $ or $ -a \\in P $ but not both. (This is called order)
            \\medskip
            \\newline
            0 is its own inverse, so $ 0 = -0 $. For all $ a \\neq 0 $, $ a \\neq -a $ so $ 0 \\notin P $.</li>
</ol>
</ol>
`
    },
    {
        type: "Definition",
        title: "Order Relation",
        latex: `
Let $ \\mathbb{F} $ be an ordered field with $ a, b \\in \\mathbb{F} $. We say "$ a < b $" ($ a $ is less than $ b $) if $ b - a \\in P $, and "$ a \\leq b  $" ($ a $ is less than or equal to $ b $) if either $ a = b $ or $ a < b $.
`
    },
    {
        type: "Definition",
        title: "Absolute Value",
        latex: `
If $ \\mathbb{F} $ is an ordered field, define the absolute value function $ | \\quad | : \\mathbb{F} \\to \\mathbb{F} $.
    \\[ | x | = \\begin{cases}
        x \\quad \\ \\ \\; \\text{if } x \\geq 0 \\\\
        -x \\quad \\text{if } x < 0
    \\end{cases} \\]
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
If $ \\mathbb{F} $ is an ordered field and $ a,b \\in \\mathbb{F} $, then $ |a| \\leq b $ if and only if $ -b \\leq a \\leq b $.
`
    },
    {
        type: "Theorem",
        title: "The Triangle Inequality",
        latex: `
If $ x, y \\in \\mathbb{F} $, then
    \\[ | x + y | \\leq | x | + | y | \\]
`
    },
    {
        type: "Corollary",
        title: "Reverse Triangle Inequality",
        latex: `
\\[ \\left| \\left| x \\right| - \\left| y \\right| \\right| \\leq | x - y | \\]
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
\\[ | x - y | \\leq | x | + | y | \\]
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
\\[ | x + y | \\geq \\left| | x | - | y | \\right| \\]
`
    },
    {
        type: "Definition",
        title: "Distance Function / Metric",
        latex: `
A function $ d : \\mathbb{F} \\times \\mathbb{F} \\to \\mathbb{F} $ is called a distance function, or metric, if it satisfies:
    <ol>
<li>$ d(x, y) \\geq 0 $</li>
<li>$ d(x, y) = 0 $ if and only if $ x = y $</li>
<li>$ d(x, y) = d(y, x) $ (symmetry)</li>
<li>$ d(x, z) \\leq d(x, y) + d(y, z) $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Metric Spaces",
        latex: `
A metric space is a space that has a metric. This allows us to talk about limits and continuity in terms of the metric.
`
    },
    {
        type: "Definition",
        title: "Bounds",
        latex: `
Let $ S $ be an ordered field, and let $ A \\subseteq S $ be nonempty.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ A $ is bounded above if $ \\exists b \\in S $ such that $ \\forall x \\in A $, $ x \\leq b $. $ b $ is called an upper bound of $ A $.</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) The least upper bound of $ A $ (if it exists) is some $ b_0 \\in S $ such that $ b_0 $ is an upper bound of $ A $, and if $ b $ is any other upper bound of $ A $, then $ b_0 \\leq b $. $ b_0 $ is called the supremum of $ A $, denoted by $ \\sup (A) $.</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ A $ is bounded below if $ \\exists c \\in S $ such that $ \\forall x \\in A $, $ c \\leq x $. $ c $ is called a lower bound of $ A $.</li>
<li style="list-style-type: none; margin-left: -15px;">(iv) The greatest lower bound of $ A $ (if it exists) is some $ c_0 \\in S $ such that $ c_0 $ is a lower bound of $ A $, and if $ c $ is any other lower bound of $ A $, then $ c_0 \\geq c $. $ c_0 $ is called the infimum of $ A $, denoted by $ \\inf (A) $.</li>
<li style="list-style-type: none; margin-left: -15px;">(v) If a set is both bounded above and bounded below, the set is called bounded.</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Least Upper Bound Property",
        latex: `
Let $ S $ be an ordered field, then $ S $ has the least upper bound property if given any nonempty set, $ A \\subseteq S $ where $ A $ is bounded above, $ A $ has a least upper bound in $ S $. That is, $ \\sup(A) \\in S $ exists.
    \\medskip
    \\newline
    A set that has the least upper bound property is complete.
`
    },
    {
        type: "Theorem",
        title: "Existence and Uniqueness of $ \\mathbb{R} $",
        latex: `
There exists a unique complete ordered field, we call this field the real numbers.
    \\medskip
    \\newline
    We could relabel the elements, but the field would be isomorphic. The construction uses Dedekind cuts.
`
    },
    {
        type: "Proposition",
        title: "Uniqueness of the sup and inf",
        latex: `
If $ \\sup(A) $ or $ \\inf(A) $ of some $ A \\subseteq \\mathbb{R} $ exists, it is unique.
`
    },
    {
        type: "Theorem",
        title: "Supremum and Infimum Characterization",
        latex: `
Let $ A \\subseteq \\mathbb{R} $, $ \\sup(A) = \\alpha $ if and only if:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\alpha $ is an upper bound of $ A $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) Given any $ \\varepsilon > 0 $, $ \\sup(A) - \\varepsilon = \\alpha - \\varepsilon $ is not an upper bound of $ A $. That is, there is some $ x \\in A $ such that $ \\alpha - \\varepsilon < x $.</li>
</ol>
    Likewise, $ \\inf(A) = \\beta $ if and only if:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\beta $ is a lower bound of $ A $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) Given any $ \\varepsilon > 0 $, $ \\inf(A) + \\varepsilon = \\beta + \\varepsilon $ is not a lower bound of $ A $. That is, there is some $ x \\in A $ such that $ x < \\beta + \\varepsilon $.</li>
</ol>
`
    },
    {
        type: "Lemma",
        title: "Archimedean Principle",
        latex: `
If $ a, b \\in \\mathbb{R} $ with $ a > 0 $ then there exists a rational number $ n $ such that
    \\[ na > b \\Leftrightarrow n > \\frac{b}{a} \\]
`
    },
    {
        type: "Definition",
        title: "Dense Sets",
        latex: `
Suppose $ A $ and $ B $ are subsets of ordered fields. Then $ A $ is dense in $ B $ if for every $ x,y \\in B $ with $ x < y $, there exists $ a \\in A $ such that $ x < a < y $.
`
    },
    {
        type: "Definition",
        title: "Maximal and Minimal Elements",
        latex: `
Let $ A \\subseteq \\mathbb{R} $, $ A $ has a maximal element if there exists $ M \\in A $ such that $ x \\leq M $ for all $ x \\in A $.
    \\newline
    \\medskip
    Likewise, $ A $ has a minimal element if there exists $ m \\in A $ such that $ m \\leq x $ for all $ x \\in A $.
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
Let $ x, y \\in \\mathbb{R} $, where $ y - x > 1 $. Then, there exists a $ z \\in \\mathbb{Z} $ such that $ x < z < y $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
$ \\mathbb{Q} $ is dense in $ \\mathbb{R} $.
`
    },
    {
        type: "Definition",
        title: "Ceiling",
        latex: `
The ceiling of $ x $, denoted $ \\lceil x \\rceil $ is the integer $ n $ such that
    \\[ x \\leq n < x + 1 \\]
`
    },
    {
        type: "Definition",
        title: "Floor",
        latex: `
The floor of $ x $, denoted $ \\lfloor x \\rfloor $ is the integer $ n $ such that
    \\[ x - 1 < n \\leq x \\]
`
    },
    {
        type: "Definition",
        title: "Closed Interval",
        latex: `
A closed interval between $ a $ and $ b $ is the interval containing the endpoints $ a $ and $ b $. Denoted by:
    \\[ \\left[ a, b \\right] = \\left\\{ x : a \\leq x \\leq b \\right\\} \\]
`
    },
    {
        type: "Definition",
        title: "Open Interval",
        latex: `
An open interval between $ a $ and $ b $ is the interval that doesn't contain the endpoints $ a $ and $ b $. Denoted by:
    \\[ \\left( a, b \\right) = \\left\\{ x : a < x < b \\right\\} \\]
`
    },
    {
        type: "Definition",
        title: "Well Ordering Principle",
        latex: `
Every nonempty subset of $ \\mathbb{N} $ has a smallest element.
`
    },
    {
        type: "Definition",
        title: "Same Size",
        latex: `
Two sets have the same size if and only if there is a bijection between them.
`
    },
    {
        type: "Definition",
        title: "Equivalent Sets",
        latex: `
We define a relation on sets by $ A \\sim B $ if there exists a bijection from $ A $ to $ B $. This is an equivalence relation.
`
    },
    {
        type: "Definition",
        title: "Equivalence Relation",
        latex: `
An equivalence relation is a binary relation that satisfies:
    <ol>
<li>Reflexivity: $ A \\sim A $
        <ul>
<li>Using identity, $ i_A : A \\to A $, $ i_A(x) = x $</li>
</ul></li>
<li>Symmetry: If $ A \\sim B $, then $ B \\sim A $
        <ul>
<li>Since bijections are invertible</li>
</ul></li>
<li>Transitivity: If $ A \\sim B $, and $ B \\sim C $, then $ A \\sim C $
        <ul>
<li>By composition of bijections</li>
</ul></li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Infinite Set",
        latex: `
One way to define what it means to be an infinite set is that the set is the same as a proper subset of itself.
`
    },
    {
        type: "Definition",
        title: "Countable Sets",
        latex: `
A countable set is either finite, or is equivalent to $ \\mathbb{N} $. If $ |A| = |\\mathbb{N}| $, then we say $ A $ is countably infinite, or listable. We can write $ A = \\left\\{ a_1, a_2, a_3, \\dots \\right\\} $
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
$ | \\mathbb{R} | > | \\mathbb{N} | $
`
    },
    {
        type: "Definition",
        title: "Continuum Hypothesis",
        latex: `
There is no set whose cardinality is strictly between $ | \\mathbb{N} | $ and $ | \\mathbb{R} | $.
    \\medskip
    \\newline
    Based on the axioms of set theory, this is unprovable.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ A $ is a set and $ \\mathcal{P} \\left( A \\right) $ is the power set of $ A $, then $ | A | < | \\mathcal{P} \\left( A \\right) | $
`
    },
    {
        type: "Definition",
        title: "Sequences",
        latex: `
A sequence of real numbers is a function $ a: \\mathbb{N} \\to \\mathbb{R} $. We usually write $ a_n $ instead of $ a \\left( n \\right) $. The notation is:
    \\[ \\left\\{ a_n \\right\\}_{n = 1}^\\infty \\qquad \\text{or} \\qquad \\left\\{ a_n \\right\\} \\qquad \\text{or} \\qquad \\left( a_1, a_2, \\dots \\right) \\]
    Sometimes, we have a formula, ex. $ a_n = \\frac{1}{n} $ or $ a_n = n^2 $. Sometimes the function is recursive, ex. $ a_n = a_{n-1} + a_{n-2} $.
`
    },
    {
        type: "Definition",
        title: "Bounded Sequences",
        latex: `
$ \\left\\{ a_n \\right\\} $ is bounded if the range $ \\left\\{ a_n : a \\in \\mathbb{N} \\right\\} $ is bounded. This means there exists $ L, U \\in \\mathbb{R} $ such that
    \\[ L \\leq a_n \\leq U \\qquad \\text{for all } n \\in \\mathbb{N} \\]
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
$ \\left\\{ a_n \\right\\} $ is bounded if and only if there exists a $ C \\in \\mathbb{R} $ with $ | a_n | \\leq C $ for all $ n \\in \\mathbb{N} $.
`
    },
    {
        type: "Definition",
        title: "Convergent Sequence",
        latex: `
$ \\left( a_n \\right) $ converges to $ a \\in \\mathbb{R} $ if $ \\forall \\; \\varepsilon > 0 $ there exists $ N \\in \\mathbb{N} $ such that $ | a_n - a | < \\varepsilon $ when $ n > N $. $ a $ is called the limit of $ a_n $.
    \\begin{align*}
        | a_n - a | < \\varepsilon & \\Leftrightarrow - \\varepsilon < a_n - a < \\varepsilon \\\\
        & \\Leftrightarrow a - \\varepsilon < a_n < a + \\varepsilon \\\\
        & \\Leftrightarrow a \\in \\left( a - \\varepsilon, a + \\varepsilon \\right)
    \\end{align*}
    That is, for some $ N \\in \\mathbb{R} $ and all $ n > N $, we are far enough in the sequence to stay close within the open interval $ \\left( a - \\varepsilon, a + \\varepsilon \\right) $,
`
    },
    {
        type: "Definition",
        title: "Divergent Sequence",
        latex: `
If a sequence doesn't converge, then it diverges. There are 3 forms of this:
    <ol>
<li>$ \\left( a_n \\right) $ diverges to $ + \\infty $
        \\medskip
        \\newline
        $ \\lim_{n \\to \\infty} a_n = + \\infty $ if for all $ M \\in \\mathbb{R} $ there is some $ N \\in \\mathbb{R} $ such that $ a_n > M $ for $ n > N $. (Eventually the sequence stays bigger than $ M $).</li>
<li>$ \\left( a_n \\right) $ diverges to $ - \\infty $
        \\medskip
        \\newline
        $ \\lim_{n \\to \\infty} a_n = - \\infty $ if for all $ M \\in \\mathbb{R} $ there is some $ N \\in \\mathbb{R} $ such that $ a_n < M $ for $ n > N $. (Eventually sequence stays smaller than $ M $).</li>
<li>Limit doesn't exist
        \\medskip
        \\newline
        We need to negate the definition: $ a_n $ does not converge to $ a \\in \\mathbb{R} $ if there exists $ \\varepsilon > 0 $ such that for all $ N \\in \\mathbb{N} $.
        \\[ | a_n - a | \\geq \\varepsilon \\qquad \\text{for some } n > N \\]</li>
</ol>
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
If a sequence converges, the limit is unique.
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
If a sequence is convergent, it is bounded.
`
    },
    {
        type: "Laws",
        title: "Limit Laws",
        latex: `
Assume $ a_n \\to a $, $ b_n \\to b $, $ a,b,c \\in \\mathbb{R} $
    <ol>
<li>$ \\left( a_n + b_n \\right) \\to a + b $</li>
<li>$ \\left( a_n - b_n \\right) \\to a - b $</li>
<li>$ \\left( a_n \\cdot b_n \\right) \\to a \\cdot b $</li>
<li>$ \\left( \\frac{a_n}{b_n} \\right) \\to \\frac{a}{b} \\qquad $ provided $ b_n \\neq 0 $ for all $ n $, $ b \\neq 0 $</li>
<li>$ \\left( c \\cdot a_n \\right) \\to c \\cdot a $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Squeeze Theorem",
        latex: `
Assume $ a_n \\leq x_n \\leq b_n $ for all $ n $ and $ a_n \\to L $ and $ b_n \\to L $, then $ x_n \\to L $.
`
    },
    {
        type: "Definition",
        title: "Monotone Increasing and Monotone Decreasing",
        latex: `
A sequence $ \\left( a_n \\right) $ is monotone increasing if
    \\[ a_n \\leq a_{n + 1} \\qquad \\text{for all } n \\]
    Likewise, a sequence $ \\left( a_n \\right) $ is monotone decreasing if
    \\[ a_n \\geq a_{n + 1}  \\qquad \\text{for all } n \\]
`
    },
    {
        type: "Definition",
        title: "Monotone",
        latex: `
If a sequence $ \\left( a_n \\right) $ is either monotone increasing or monotone decreasing, we say that it is monotone.
`
    },
    {
        type: "Theorem",
        title: "Monotone Convergence Theorem (MCT)",
        latex: `
Suppose $ \\left( a_n \\right) $ is monotone. Then $ \\left( a_n \\right) $ converges if and only if it is bounded. Moreover, if $ \\left( a_n \\right) $ is increasing, then $ \\left( a_n \\right) $ either diverges to $ + \\infty $ or $ \\lim_{n \\to \\infty} a_n = \\sup \\left( \\left\\{ a_n : n \\in \\mathbb{N} \\right\\} \\right) $. If $ \\left( a_n \\right) $ is decreasing, then either it diverges to $ - \\infty $ or $ \\lim_{n \\to \\infty} a_n = \\inf \\left( \\left\\{ a_n : n \\in \\mathbb{N} \\right\\} \\right) $.
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
Suppose $ S \\subseteq \\mathbb{R} $ is bounded above. Then, there exists a sequence $ \\left( a_n \\right) $ where $ a_n \\in S $ for all $ n $ and $ \\lim_{n \\to \\infty} a_n = \\sup \\left( S \\right) $
    \\medskip
    \\newline
    Likewise if $ S $ is bounded below, there is a sequence $ \\left( b_n \\right) $ where each $ b_n \\in S $ and $ b_n \\to \\inf \\left( S \\right) $
`
    },
    {
        type: "Definition",
        title: "Subsequences",
        latex: `
Let $ \\left( a_n \\right) $ be a sequence. Let $ n_1 < n_2 < n_3 < \\dots $ be an increasing sequence of natural numbers. Then, $ a_{n_1}, a_{n_2}, a_{n_3}, \\dots $ is called a subsequence of $ \\left( a_n \\right) $ and is denoted $ a_{n_k} $.
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
A sequence converges to $ a $ if and only if every subsequence converges to $ a $. (This is useful for showing a sequence diverges).
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
If $ \\left( a_n \\right) $ has a pair of subsequences that converge to different limits, then $ \\left( a_n \\right) $ diverges.
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
If $ \\left( a_n \\right) $ is a monotone sequence that has a convergent subsequence, then $ \\left( a_n \\right) $ converges to the same limit.
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
Every sequence has a monotone subsequence.
`
    },
    {
        type: "Theorem",
        title: "Bolzano-Weierstrass",
        latex: `
Every bounded sequence has a convergent subsequence. \\textit{The idea is bounded and monotone gives convergence.}
`
    },
    {
        type: "Definition",
        title: "Cauchy Sequences",
        latex: `
A sequence $ \\left( a_n \\right) $ is Cauchy if for every $ \\varepsilon > 0 $, there exists $ N \\in \\mathbb{R} $ such that $ | a_n - a_m | < \\varepsilon $ for $ n, m > N $.
`
    },
    {
        type: "Definition",
        title: "Series",
        latex: `
The sum of infinitely many numbers is called a series.
`
    },
    {
        type: "Proposition",
        title: "$ k^\\text{th} $ Term Test",
        latex: `
If $ a_k \\not \\to 0 $, then $ \\sum_{k = 1}^\\infty a_k $ diverges.
    \\medskip
    \\newline
    Contrapositive: If $ \\sum_{k = 1}^\\infty a_k $ converges, then $ a_k \\to 0 $.
`
    },
    {
        type: "Proposition",
        title: "Geometric Series Test",
        latex: `
\\[ \\sum_{k = 0}^\\infty ar^k = \\begin{cases}
        \\frac{a}{1 - r} & \\text{if } r \\in \\left( -1, 1 \\right) \\\\
        \\text{diverges} & \\text{if } | r | \\geq 1
    \\end{cases} \\]
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
If $ a_k \\geq 0 $ for all $ k $, then $ \\sum a_k $ either converges, or diverges to $ + \\infty $.
`
    },
    {
        type: "Proposition",
        title: "Comparison Test",
        latex: `
Assume $ 0 \\leq a_k \\leq b_k $ for all $ k $.
    <ol>
<li>If $ \\sum b_k $ converges, then so does $ \\sum a_k $</li>
<li>If $ \\sum a_k $ diverges, then so does $ \\sum b_k $</li>
</ol>
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
The Harmonic Series diverges.
`
    },
    {
        type: "Proposition",
        title: "$ p $-Series",
        latex: `
$ \\sum_{k = 1}^\\infty \\frac{1}{k^p} $ converges if and only if $ p > 1 $.
`
    },
    {
        type: "Proposition",
        title: "Alternating Series Test",
        latex: `
Assume $ \\left( a_k \\right) $ is monotonically decreasing with $ a_k \\to 0 $, then
    \\[ \\sum_{k = 1}^\\infty \\left( -1 \\right)^{k + 1} a_k \\]
    converges.
    \\medskip
    \\newline
    Note: $ a_k $ is decreasing with a limit of 0, which implies each $ a_k \\geq 0 $.
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
If $ \\sum_{k = 1}^\\infty | a_k | $ converges, then $ \\sum_{k = 1}^\\infty a_k $ also converges.
`
    },
    {
        type: "Definition",
        title: "Absolute Convergence",
        latex: `
If $ \\sum_{k = 1}^\\infty | a_k | $ converges, we say $ \\sum_{k = 1}^\\infty a_k $ converges absolutely.
    \\medskip
    \\newline
    If $ \\sum_{k = 1}^\\infty a_k $ converges, but $ \\sum_{k = 1}^\\infty | a_k | $ does not, we say $ \\sum_{k = 1}^\\infty a_k $ converges conditionally.
`
    },
    {
        type: "Definition",
        title: "Continuity",
        latex: `
A function $ f: A \\to \\mathbb{R} $ is continuous at a point $ c \\in A $ if for every $ \\varepsilon > 0 $, there exists $ \\delta > 0 $ such that for all $ x \\in A $ with $ | x - c | < \\delta $ we have $ | f \\left( x \\right) - f \\left( c \\right) | < \\varepsilon $.
    \\medskip
    \\newline
    This means, for $ x \\in A $ with $ x \\in \\left( c - \\delta, c + \\delta \\right) $, we have $ f \\left( x \\right) \\in \\left( f \\left( c \\right) - \\varepsilon, f \\left( c  \\right) + \\varepsilon \\right) $. Note that we include $ x = c $
    \\medskip
    \\newline
    If $ f \\left( x \\right) $ is continuous at every point in its domain, we say it is continuous.
`
    },
    {
        type: "Definition",
        title: "Negation of Continuity at $ x = c $",
        latex: `
A function $ f \\left( x \\right) $ is not continuous at $ x = c $ if there exists $ \\varepsilon > 0 $ such that for all $ \\delta > 0 $, there exists $ x $ with $ | x - c | < \\delta $, but $ | f \\left( x \\right) - f \\left( c \\right) | \\geq \\varepsilon $
`
    },
    {
        type: "Definition",
        title: "Dirichlet Function",
        latex: `
\\[ f : \\mathbb{R} \\to \\mathbb{R}, \\quad f \\left( x \\right) = \\begin{cases}
        1 & \\text{if } x \\in \\mathbb{Q} \\\\
        0 & \\text{if } x \\notin \\mathbb{Q}
    \\end{cases} \\]
`
    },
    {
        type: "Definition",
        title: "Modified Dirichlet Function",
        latex: `
\\[ f \\left( x \\right) = \\begin{cases}
        x & \\text{if } x \\in \\mathbb{Q} \\\\
        0 & \\text{if } x \\notin \\mathbb{Q}
    \\end{cases} \\]
`
    },
    {
        type: "Definition",
        title: "Limit Point",
        latex: `
A point $ x $ is a limit point of a set $ A $ if there is a sequence of points $ a_1, a_2, a_3, \\dots $ from $ A \\setminus \\left\\{ x \\right\\} $ such that $ a_n \\to x $
    \\medskip
    \\newline
    A point $ x $ is a limit of point $ A $ iff every $ \\varepsilon $-neighbourhood of $ x $ intersects $ A $ at some point other than $ x $
`
    },
    {
        type: "Definition",
        title: "Epsilon Neighbourhood",
        latex: `
The $ \\varepsilon $-neighbourhood of $ x $ is $ \\left( x - \\varepsilon, x + \\varepsilon \\right) $ for some $ \\varepsilon > 0 $.
`
    },
    {
        type: "Definition",
        title: "Functional Limit",
        latex: `
Let $ f : A \\to \\mathbb{R} $ and $ c $ is a limit point of $ A $, then $ \\lim_{x \\to c} f \\left( x \\right) = L $ if for all $ \\varepsilon > 0 $, $ \\exists \\; \\delta > 0 $ such that for all $ x \\in A $ with $ 0 < | x - c | < \\delta $, we have $ | f \\left( x \\right) - L | < \\varepsilon $.
`
    },
    {
        type: "Definition",
        title: "Negation of Functional Limit",
        latex: `
There exists $ \\varepsilon > 0 $, such that for all $ \\delta > 0 $ there is some $ x \\in A $ with $ 0 < | x - c | < \\delta $ and $ | f \\left( x \\right) - L | \\geq \\varepsilon $.
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
$ \\lim_{x \\to c} f \\left( x \\right) $ can converge to at most 1 value. That is, if the limit exists, then it is unique.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ A \\subseteq \\mathbb{R} $, $ c $ is a limit point of $ A $, then $ \\lim_{x \\to c} f \\left( x \\right) = L $ if and only if for every sequence $ \\left( a_n \\right) $ for which each $ a_n \\in A $ with $ a_n \\neq c $ and $ a_n \\to c $, we have $ f \\left( a_n \\right) \\to L $.
`
    },
    {
        type: "Laws",
        title: "Functional Limit Laws",
        latex: `
Let $ f, g $ be functions from $ A \\subseteq \\mathbb{R} $ to $ \\mathbb{R} $, $ c $ is a limit point of $ A $, and
    \\[ \\lim_{x \\to c} f \\left( x \\right) = L \\quad \\text{and} \\quad \\lim_{x \\to c} g \\left( x \\right) = M \\]
    <ol>
<li>$ \\lim_{x \\to c} k \\cdot f \\left( x \\right) = k \\cdot L $ for any $ k \\in \\mathbb{R} $</li>
<li>$ \\lim_{x \\to c} \\left[ f \\left( x \\right) + g \\left( x \\right) \\right] = L + M $</li>
<li>$ \\lim_{x \\to c} \\left[ f \\left( x \\right) \\cdot g \\left( x \\right) \\right] = L \\cdot M $</li>
<li>$ \\lim_{x \\to c} \\left[ \\frac{f \\left( x \\right)}{g \\left( x \\right)} \\right] $ provided $ M \\neq 0 $ and $ g \\left( x \\right) \\neq 0 $ for $ x \\in A $</li>
<li>\\textit{To prove this, use the sequence limit laws}</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Squeeze Theorem for Functions",
        latex: `
For $ f, g, h : A \\to \\mathbb{R} $, $ c $ is a limit point of $ A $ and $ f \\left( x \\right) \\leq g \\left( x \\right) \\leq h \\left( x \\right) $ for all $ x \\in A $, and $ \\lim_{x \\to c} f \\left( x \\right) = L = \\lim_{x \\to c} h \\left( x \\right) $, then $ \\lim_{x \\to c} g \\left( x \\right) = L $
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
Let $ A, B \\subseteq \\mathbb{R} $, $ g : A \\to B $ is continuous at $ c $, $ f : B \\to \\mathbb{R} $ is continuous at $ g \\left( c \\right) $, then $ \\left( f \\circ g \\right) \\left( x \\right) : A \\to \\mathbb{R} $ is continuous at $ c $
`
    },
    {
        type: "Definition",
        title: "Delta Neighbourhood",
        latex: `
Given $ \\delta > 0 $, the $ \\delta $-neighbourhood of a point $ x \\in \\mathbb{R} $ is denoted by $ V_\\delta \\left( x \\right) = \\left( x - \\delta, x + \\delta \\right) = \\left\\{ y \\in \\mathbb{R} : | x - y | < \\delta \\right\\} $
`
    },
    {
        type: "Definition",
        title: "Open Set",
        latex: `
A set $ U \\subseteq \\mathbb{R} $ is open if for all $ x \\in U $, $ \\exists \\; \\delta > 0 $ such that $ \\left( x - \\delta, x + \\delta \\right) \\subseteq U $. That is, if $ \\forall \\; x \\in U $, $ \\exists \\; V_\\delta \\left( x \\right) \\subseteq U $
    \\medskip
    \\newline
    This is equivalent to saying $ U \\subseteq \\mathbb{R} $ is open if $ \\forall \\; x \\in U $, $ \\exists \\; \\delta > 0 $ such that if $ | x - y | < \\delta $, then $ y \\in U $
`
    },
    {
        type: "Proposition",
        title: "Proposition (5.3)",
        latex: `
<ol>
<li style="list-style-type: none; margin-left: -15px;">(i) If $ \\left\\{ U_\\alpha \\right\\} $ is any collection of open sets, then $ \\bigcup\\limits_\\alpha U_\\alpha $ is also an open set</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) If $ \\left\\{ U_1, U_2, \\dots, U_n \\right\\} $ is a finite collection of open sets, then $ \\bigcap\\limits_{k = 1}^n U_k $ is also an open set</li>
</ol>
    We can do arbitrary unions and finite intersections of open sets, and end up with an open set
`
    },
    {
        type: "Theorem",
        title: "Theorem (5.5)",
        latex: `
Every open set is a countable union of disjoint open intervals
`
    },
    {
        type: "Definition",
        title: "Definition (5.6)",
        latex: `
A set $ A \\subseteq \\mathbb{R} $ is closed if $ A^c $ is open.
    \\medskip
    \\newline
    This is equivalent to saying $ A $ is closed if there exists an open set $ B $ such that $ B^c = A $
`
    },
    {
        type: "Theorem",
        title: "Theorem (5.10)",
        latex: `
A set $ A $ is closed iff it contains all of its limit points
`
    },
    {
        type: "Fact",
        title: "Fact (5.11)",
        latex: `
\\[ \\left( \\bigcup_\\alpha U_\\alpha \\right)^c = \\bigcap_\\alpha U_\\alpha^c \\quad \\text{and} \\quad \\left( \\bigcap_\\alpha U_\\alpha \\right)^c = \\bigcup_\\alpha U_\\alpha^c \\]
`
    },
    {
        type: "Definition",
        title: "Topological Space",
        latex: `
A topological space is a pair $ \\left( X, \\tau \\right) $ of a set $ X $ and a collection $ \\tau $ of subsets of $ X $ (these are the opens sets) satisfying:
    <ol>
<li>Arbitrary union of open sets is open</li>
<li>Finite intersection of open sets is open</li>
<li>$ X $ and $ \\emptyset $ are open</li>
</ol>
`
    },
    {
        type: "Example",
        title: "Example (Exercise 5.7)",
        latex: `
$ x $ is a limit point of $ A $ iff every $ \\varepsilon $-neighbourhood of $ x $ intersects $ A $ at some point other than $ x $
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
<ol>
<li>If $ \\left\\{ U_1, U_2, \\dots, U_n \\right\\} $ are closed sets, then $ \\bigcup_{k = 1}^\\infty U_k $ is also closed</li>
<li>If $ \\left\\{ U_\\alpha \\right\\}_{\\alpha \\in I} $ is a collection of closed sets, then $ \\bigcap_{\\alpha \\in I} U_\\alpha $ is closed</li>
</ol>
    That is, we can do finite unions and arbitrary intersections of closed sets to get a closed set. This follows from the fact that we can do arbitrary unions and finite intersections of open sets to get an open set.
`
    },
    {
        type: "Definition",
        title: "Covers",
        latex: `
Let $ A $ be a set. The set $ \\left\\{ U_\\alpha \\right\\}_{\\alpha \\in S} $ is a cover of $ A $ if $ A \\subseteq \\bigcup_{\\alpha \\in S} U_\\alpha $
    \\medskip
    \\newline
    If each $ U_\\alpha $ is open, we say it is an open cover
    \\medskip
    \\newline
    If $ \\left\\{ U_\\alpha \\right\\}_{\\alpha \\in S} $ has a finite subset $ \\left\\{ U_\\alpha \\right\\}_{\\alpha \\in F} $ (assuming $ F \\subseteq S $) which is still a cover of $ A $, then $ \\left\\{ U_\\alpha \\right\\}_{\\alpha \\in F} $ is a finite subcover
`
    },
    {
        type: "Definition",
        title: "Compact Set",
        latex: `
A set $ A $ is compact if every open cover of $ A $ contains a finite subcover.
    \\medskip
    \\newline
    For example, $ \\left( 0, 4 \\right) $ is not compact, but $ \\left[ 0, 4 \\right] $ is.
`
    },
    {
        type: "Theorem",
        title: "Heine-Borel",
        latex: `
A set $ S \\subseteq \\mathbb{R} $ is compact iff it is closed and bounded.
`
    },
    {
        type: "Theorem",
        title: "Equivalent Forms of Continuity",
        latex: `
The following are equivalent:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ f $ is continuous at $ c $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\forall \\; \\varepsilon > 0 $, $ \\exists \\; \\delta > 0 $ such that $ \\forall \\; x \\in A $ with $ \\left| x - c \\right| < \\delta $ we have $ \\left| f \\left( x \\right) - f \\left( c \\right) \\right| < \\varepsilon $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) For any $ \\varepsilon $-neighbourhood of $ f \\left( c \\right) $ denoted by $ V_\\varepsilon \\left( f \\left( c \\right) \\right) $, there exists some $ \\delta $-neighbourhood of $ c $ denoted by $ V_\\delta \\left( c \\right) $ with the property that $ \\forall \\; x \\in A $ with $ x \\in V_\\delta \\left( c \\right) $, we have $ f \\left( x \\right) \\in V_\\varepsilon \\left( f \\left( c \\right) \\right) $</li>
<li style="list-style-type: none; margin-left: -15px;">(iv) For all sequences $ \\left( a_n \\right) $ from $ A $ which converge to $ c $ ($ \\lim_{n \\to \\infty} a_n = c $) we have $ \\left( f \\left( a_n \\right) \\right) $ converging to $ f \\left( c \\right) $.
        That is, $ \\lim_{n \\to \\infty} f \\left( a_n \\right) $ = $ f \\left( \\lim_{n \\to \\infty} a_n \\right) $</li>
<li style="list-style-type: none; margin-left: -15px;">(v) $ \\lim_{x \\to c} f \\left( x \\right) = f \\left( c \\right) $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Topological Continuity",
        latex: `
Let $ f : X \\to \\mathbb{R} $, then $ f $ is continuous if and only if for every open set $ B \\subseteq \\mathbb{R} $, $ f^{-1} \\left( B \\right) = A \\cap X $ for some open set $ A $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Suppose $ f : X \\to \\mathbb{R} $ is continuous. If $ A \\subseteq X $ is compact, then $ f \\left( A \\right) $ is compact.
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
The image of a compact set under a continuous function is bounded (and also closed) by Heine Borel.
`
    },
    {
        type: "Theorem",
        title: "Extreme Value Theorem (EVT)",
        latex: `
A continuous function on a compact set attains its sup and inf. That is, there is some $ a_0, b_0 $ in the set such that $ f \\left( a_0  \\right) = $ sup of the image, $ f \\left( b_0 \\right) = $ inf of the image.
`
    },
    {
        type: "Definition",
        title: "Interior",
        latex: `
The interior of a set $ A $, denoted by $ \\mathrm{Int} \\left( A \\right) $, is the set of points $ x $ such that there is an open neighbourhood of $ x $ that is a subset of $ A $.
`
    },
    {
        type: "Definition",
        title: "Exterior",
        latex: `
The exterior of a set $ A $, denoted by $ \\mathrm{Ext} \\left( A \\right) $, is the set of points $ x $ such that there is an open neighbourhood of $ x $ that is a subset of $ A^c $. That is, $ \\mathrm{Ext} \\left( A \\right) = \\mathrm{Int} \\left( A^c \\right) $.
`
    },
    {
        type: "Definition",
        title: "Boundary",
        latex: `
The boundary of a set $ A $, denoted by $ \\partial A $, is the set of points $ x $ such that every neighbourhood of $ x $ contains points from $ A $ and $ A^c $.
`
    },
    {
        type: "Note",
        title: "",
        latex: `
We could show that for any set $ A $,
    \\[ \\mathbb{R} = \\mathrm{Int} \\left( A \\right) \\cup \\partial A \\cup \\mathrm{Ext} \\left( A \\right) \\]
    where each of these sets are disjoint.
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
If $ f $ is continuous, and $ f \\left( c \\right) > 0 $, then there exists $ \\delta > 0 $ such that $ f \\left( x \\right) > 0 $ for all $ x \\in \\left( c - \\delta, c + \\delta \\right) $.
    \\medskip
    \\newline
    Likewise, if $ f \\left( c \\right) < 0 $, we can find $ \\delta > 0 $ such that for all $ x \\in \\left( c - \\delta, c + \\delta \\right) $ we have $ f \\left( x \\right) < 0 $.
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
If $ f $ is continuous on $ \\left[ a, b \\right] $ and $ f \\left( a \\right) $ and $ f \\left( b \\right) $ have different signs (one positive, one negative), then there is some $ c \\in \\left( a, b \\right) $ for which $ f \\left( c \\right) = 0 $.
`
    },
    {
        type: "Theorem",
        title: "Intermediate Value Theorem (IVT)",
        latex: `
If $ f $ is continuous on $ \\left[ a, b \\right] $ and $ \\alpha $ is any number between $ f \\left( a \\right) $ and $ f \\left( b \\right) $. Then there exists $ c \\in \\left( a, b \\right) $ for which $ f \\left( c \\right) = \\alpha $
`
    },
    {
        type: "Definition",
        title: "Uniform Continuity",
        latex: `
$ f : A \\to \\mathbb{R} $ is uniformly continuous if for all $ \\varepsilon > 0 $, there exists $ \\delta > 0 $ such that for all $ x, y \\in A $, $ | x - y | < \\delta $ implies $ | f \\left( x \\right) - f \\left( y \\right) | < \\varepsilon $.
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
If $ f: A \\to \\mathbb{R} $ is continuous and $ A $ is compact, then $ f $ is uniformly continuous on $ A $
`
    },
    {
        type: "Definition",
        title: "Differentiability",
        latex: `
Let $ I $ be an interval, $ f : I \\to \\mathbb{R} $, and $ c \\in I $. We say $ f $ is differentiable at $ c \\in I $ if the following limit exists
    \\[ \\lim_{x \\to c} \\frac{f \\left( x \\right) - f \\left( c \\right)}{x - c} \\]
    If $ C $ is a collection of points where $ f $ is differentiable, then the derivative of $ f $ is a function $ f' : C \\to \\mathbb{R} $, where
    \\[ f' \\left( c \\right) = \\lim_{x \\to c} \\frac{f \\left( x \\right) - f \\left( c \\right)}{x - c} \\]
`
    },
    {
        type: "Laws",
        title: "Differentiability Laws",
        latex: `
Let $ I $ be an interval, $ k \\in \\mathbb{R} $, and $ f, g : I \\to \\mathbb{R} $ where both $ f $ and $ g $ are differentiable at $ c \\in \\mathbb{R} $.
    <ol>
<li>$ \\left( f + g \\right)' \\left( c \\right) = f' \\left( c \\right) + g' \\left( c \\right) $</li>
<li>$ \\left( f - g \\right)' \\left( c \\right) = f' \\left( c \\right) - g' \\left( c \\right) $</li>
<li>$ \\left( k \\cdot f \\right)' \\left( c \\right) = k \\cdot f' \\left( c \\right) $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Product Rule",
        latex: `
$ \\left( fg \\right)' \\left( c \\right) = f' \\left( c \\right) \\cdot g \\left( c \\right) + f \\left( c \\right) \\cdot g' \\left( c \\right) $
`
    },
    {
        type: "Theorem",
        title: "Chain Rule",
        latex: `
Let $ I_1, I_2 $ be intervals, $ g: I_1 \\to I_2 $, $ f: I_2 \\to \\mathbb{R} $, $ \\left( f \\circ g \\right): I_1 \\to \\mathbb{R} $, $ g $ is differentiable at $ c \\in I_1 $, f is differentiable at $ g \\left( c \\right) \\in I_2 $, then $ f \\circ g $ is differentiable at $ c $ and $ \\left( f \\circ g \\right)' = f' \\left( g \\left( c \\right) \\right) \\cdot g' \\left( c \\right) $
`
    },
    {
        type: "Definition",
        title: "Local Minima and Maxima",
        latex: `
$ f : A \\to \\mathbb{R} $ has a local max at $ c \\in A $i f there exists $ \\delta > 0 $ such that for all $ x \\in A $ with $ | x - c | < \\delta $, we have $ f \\left( x \\right) \\leq f \\left( c \\right) $
    \\medskip
    \\newline
    Likewise, $ f $ has a local min at $ c $ if there exists $ \\delta > 0 $ such that for all $ x \\in A $ with $ | x - c | < \\delta $ we have $ f \\left( x \\right) \\geq f \\left( c \\right) $
`
    },
    {
        type: "Note",
        title: "",
        latex: `
Recall: A sequence $ \\left( S_n \\right) $ where each term $ S_n \\geq 0 $ and $ S_n \\to L $, then $ L \\geq 0 $
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
Let $ I $ be an open interval and $ f $ is differentiable at $ c \\in I $. If $ f $ has a local max or min at $ c $, then $ f' \\left( c \\right) = 0 $
`
    },
    {
        type: "Note",
        title: "Intermediate Value Property (IVP)",
        latex: `
A function has the intermediate value property on $ \\left[ a, b \\right] $ if when $ \\alpha $ is any value between $ f \\left( a \\right) $ and $ f \\left( b \\right) $ there is some $ c \\in \\left( a, b \\right) $ with $ f \\left( c \\right) = \\alpha $
`
    },
    {
        type: "Theorem",
        title: "Darboux's Theorem",
        latex: `
Let $ f $ be differentiable on $ \\left( a, b \\right) $. If $ \\alpha $ is between $ f' \\left( a \\right) $ and $ f' \\left( b \\right) $ then there exists $ c \\in \\left( a, b \\right) $ where $ f' \\left( c \\right) = \\alpha $
`
    },
    {
        type: "Theorem",
        title: "Rolle's Theorem",
        latex: `
$ f : \\left[ a, b \\right] \\to \\mathbb{R} $ is continuous on $ \\left[ a, b \\right] $ and differentiable on $ \\left( a, b \\right) $. If $ f \\left( a \\right) = f \\left( b \\right) $ then there exists $ c \\in \\left( a, b \\right) $ with $ f' \\left( c \\right) = 0 $
`
    },
    {
        type: "Theorem",
        title: "Mean Value Theorem (MVT)",
        latex: `
$ f: \\left[ a, b \\right] \\to \\mathbb{R} $ is continuous on $ \\left[ a, b \\right] $ and differentiable on $ \\left( a, b \\right) $. There exists $ c \\in \\left( a, b \\right) $ with $ f' \\left( c \\right) = \\frac{f \\left( b \\right) - f \\left( a \\right)}{b - a} $. I.e., $ f' \\left( c \\right) \\left( b - a \\right) = f \\left( b \\right) - f \\left( a \\right) $
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
Let $ I $ be an interval and $ f : I \\to \\mathbb{R} $ is differentiable. If $ f' \\left( x \\right) = 0 $ for all $ x \\in I $ then $ f $ is constant.
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
Let $ I $ be an interval, $ f, g : I \\to \\mathbb{R} $, both differentiable on $ I $. If $ f' \\left( x \\right) = g' \\left( x \\right) $ for all $ x \\in I $ then $ f \\left( x \\right) = g \\left( x \\right) + C $ for some $ c \\in \\mathbb{R} $.
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
Let $ I $ be an interval, $ f: I \\to \\mathbb{R} $, $ f $ is differentiable on $ I $
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ f $ is monotonic increasing iff $ f' \\left( x \\right) \\geq 0 $ for all $ x \\in I $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ f $ is monotonic decreasing iff $ f' \\left( x \\right) \\leq 0 $ for all $ x \\in I $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Cauchy MVT",
        latex: `
If $ f, g $ are continuous on $ \\left[ a, b \\right] $ and differentiable on $ \\left( a, b \\right) $ then there exists $ c \\in \\left( a, b \\right) $ such that
    \\[ \\left[ f \\left( b \\right) - f \\left( a \\right) \\right] \\cdot g' \\left( c \\right) = \\left[ g \\left( b \\right) - g \\left( a \\right) \\right] \\cdot f' \\left( c \\right) \\]
    Note: The MVT is a special case of the Cauchy MVT with $ g \\left( x \\right) = x $
`
    },
    {
        type: "Theorem",
        title: "L'Hôpital's Rule",
        latex: `
Suppose $ I $ is an interval containing a point $ a $ and $ f: I \\to \\mathbb{R} $ and $ g: I \\to \\mathbb{R} $ are differentiable (except possibly at $ a $) and suppose $ g' \\left( x \\right) \\neq 0 $ on $ I $. Then, if $ \\lim_{x \\to a} f \\left( x \\right) = 0 = \\lim_{x \\to a} g \\left( x \\right) $ or if $ \\lim_{x \\to a} f \\left( x \\right) = \\pm \\infty $ and $ \\lim_{x \\to a} g \\left( x \\right) = \\pm \\infty $, then
    \\[ \\lim_{x \\to a} \\frac{f \\left( x \\right)}{g \\left( x \\right)} = \\lim_{x \\to a} \\frac{f' \\left( x \\right)}{g' \\left( x \\right)} \\]
    provided the limit exists.
`
    },
    {
        type: "Definition",
        title: "Lipschitz Continuity",
        latex: `
$ f $ is called Lipschitz continuous if there exists $ K \\in \\mathbb{R} $ where $ | f \\left( x \\right) - f \\left( y \\right) | \\leq K \\cdot | x - y | $ for all $ x, y $ where $ f $ is defined.
`
    },
    {
        type: "Definition",
        title: "Contraction Mapping",
        latex: `
A contraction mapping is a Lipschitz function where $ K \\in \\left[ 0, 1 \\right) $ so $ \\left| f \\left( x \\right) - f \\left( y \\right) \\right| < \\left| x - y \\right| $.
`
    },
    {
        type: "Definition",
        title: "Iterated Function System (IFS)",
        latex: `
An iterated function system (IFS) is a set of contraction mappings.
`
    },
    {
        type: "Definition",
        title: "Partition",
        latex: `
A partition of $ \\left[ a, b \\right] $ is a finite set $ \\left\\{ x_0, x_1, \\dots, x_n \\right\\} $ such that $ x_0 = a $, $ x_n = b $, $ x_0 < x_1 < \\dots < x_n $.
    \\medskip
    \\newline
    Notion: Given a partition, the $ i^\\text{th} $ subinterval is $ \\left[ x_{i - 1}, x_i \\right] $
`
    },
    {
        type: "Definition",
        title: "",
        latex: `
\\[ m_i := \\inf \\left\\{ f \\left( x \\right) : x \\in \\left[ x_{i - 1}, x_i \\right] \\right\\} \\]
    \\[ M_i := \\sup \\left\\{ f \\left( x \\right) : x \\in \\left[ x_{i - 1}, x_i \\right] \\right\\} \\]
`
    },
    {
        type: "Definition",
        title: "Upper & Lower Sums",
        latex: `
Consider $ f : \\left[ a, b \\right] \\to \\mathbb{R} $, $ P = \\left\\{ x_0, x_1, \\dots, x_n \\right\\} $ is a partition of $ \\left[ a, b \\right] $
    \\[ U \\left( f, P \\right) = \\sum_{i = 1}^n M_i \\left( x_i - x_{i -1} \\right) \\qquad \\text{is the upper sum} \\]
    \\[ L \\left( f, P \\right) = \\sum_{i = 1}^n m_i \\left( x_i - x_{i -1} \\right) \\qquad \\text{is the lower sum} \\]
`
    },
    {
        type: "Definition",
        title: "Refinement",
        latex: `
Consider a partition $ P = \\left\\{ x_0, \\dots, x_n \\right\\} $ of $ \\left[ a, b \\right] $. A partition $ Q $ of $ \\left[ a, b \\right] $ is called a refinement of $ P $ if $ P \\subseteq Q $.
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
Let $ f : \\left[ a, b \\right] \\to \\mathbb{R} $ and $ P = \\left\\{ x_0, x_1, \\dots, x_n \\right\\} $ be a partition of $ \\left[ a, b \\right] $. If $ Q $ is a refinement of $ P $ then,
    \\[ U \\left( f, P \\right) \\geq U \\left( f, Q \\right) \\]
    \\[ L \\left( f, P \\right) \\leq L \\left( f, Q \\right) \\]
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
Let $ f : \\left[ a, b \\right] \\to \\mathbb{R} $
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(a) if $ P $ is a partition of $ \\left[ a, b \\right] $ then $ L \\left( f, P \\right) \\leq U \\left( f, P \\right) $</li>
<li style="list-style-type: none; margin-left: -15px;">(b) if $ P_1, P_2 $ are any partitions then $ L \\left( f, P_1 \\right) \\leq U \\left( f, P_2 \\right) $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Upper & Lower Integrals",
        latex: `
Let $ f : \\left[ a, b \\right] \\to \\mathbb{R} $ is a bounded function, let $ \\mathcal{P} $ be the set of all partitions of $ \\left[ a, b \\right] $. The upper integral of $ f $ is defined to be
    \\[ U \\left( f \\right) = \\inf \\left\\{ U \\left( f, P \\right) : P \\in \\mathcal{P} \\right\\} \\]
    and the lower integral is:
    \\[ L \\left( f \\right) = \\sup \\left\\{ L \\left( f, P \\right) : P \\in \\mathcal{P} \\right\\} \\]
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
Let $ f : \\left[ a, b \\right] \\to \\mathbb{R} $ be bounded with $ m \\leq f \\left( x \\right) \\leq M $ for all $ x \\in \\left[ a, b \\right] $, then
    \\[ m \\left( b - a \\right) \\leq L \\left( f \\right) \\leq U \\left( f \\right) \\leq M \\left( b - a \\right) \\]
`
    },
    {
        type: "Definition",
        title: "Darboux Integrable",
        latex: `
A bounded function $ f : \\left[ a, b \\right] \\to \\mathbb{R} $ is (Darboux) Integrable if $ L \\left( f \\right) = U \\left( f \\right) $. When this happens, we denote the common value by
    \\[ \\int_a^b f \\qquad \\text{or} \\qquad \\int_a^b f \\left( x \\right) \\, dx \\]
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
Assume a bounded function $ f : \\left[ a, b \\right] \\to \\mathbb{R} $ is integrable. If $ f \\geq 0 $ for all $ x \\in \\left[ a, b \\right] $ then
    \\[ \\int_a^b f \\left( x \\right) \\, dx \\geq 0 \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Assume $ f : \\left[ a, b \\right] \\to \\mathbb{R} $ is bounded. Then $ f $ is integrable if and only if for all $ \\varepsilon > 0 $, there exists a partition $ P_\\varepsilon $ of $ \\left[ a, b \\right] $ such that
    \\[ U \\left( f, P_\\varepsilon \\right) - L \\left( f, P_\\varepsilon \\right) < \\varepsilon \\]
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
If $ f : \\left[ a, b \\right] \\to \\mathbb{R} $ is integrable then there exists a sequence of partitions $ P_n $ of $ \\left[ a, b \\right] $ such that
    \\[ \\lim_{n \\to \\infty} \\left[ U \\left( f, P_n \\right) - L \\left( f, P_n \\right) \\right] = 0 \\]
`
    },
    {
        type: "Theorem",
        title: "Theorem (8.16)",
        latex: `
If $ f : \\left[ a, b \\right] \\to \\mathbb{R} $ is continuous, then it is integrable.
`
    },
    {
        type: "Porism",
        title: "Porism (8.18)",
        latex: `
Let $ c \\in \\left[ a, b \\right] $ and suppose $ f : \\left[ a, b \\right] \\to \\mathbb{R} $ with
    \\[ f \\left( x \\right) = \\begin{cases}
        1 & \\text{if } x \\neq c \\\\
        0 & \\text{if } x = c
    \\end{cases} \\]
    then $ f $ is integrable.
`
    },
    {
        type: "Definition",
        title: "Length of Intervals",
        latex: `
The length of an interval $ \\left[ a, b \\right] $ is $ b - a $, denoted by $ \\mathcal{L} \\left( \\left[ a, b \\right] \\right) $.
    \\medskip
    \\newline
    The length of the following intervals are also $ b - a $: $ \\left( a, b \\right) $, $ \\left( a, b \\right] $, $ \\left[ a, b \\right) $.
    \\medskip
    \\newline
    Intervals with infinity have length $ \\infty $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Assume $ f : \\left[ a, b \\right] \\to \\mathbb{R} $ is bounded, and let $ D $ be the set of points at which $ f $ is discontinuous. Then $ f $ is integrable if and only if $ D $ has measure 0.
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
Assume $ f : \\left[ a, b \\right] \\to \\mathbb{R} $ is integrable. If $ a < c < b $, then
    \\[ \\int_a^b f \\left( x \\right) \\; dx = \\int_a^c f \\left( x \\right) \\; dx + \\int_c^b f \\left( x \\right) \\; dx \\]
`
    },
    {
        type: "Proposition",
        title: "",
        latex: `
Assume $ f : \\left[ a, b \\right] \\to \\mathbb{R} $ and $ g : \\left[ a, b \\right] \\to \\mathbb{R} $ are integrable, then
    <ol>
<li>For all $ k \\in \\mathbb{R} $, $ kf $ is also integrable on $ \\left[ a, b \\right] $ and $ \\int_a^b k f \\left( x \\right) \\; dx = k \\int_a^b f \\left( x \\right) \\; dx $</li>
<li>The function $ f + g $ is also integrable on $ \\left[ a, b \\right] $ and $ \\int_a^b \\left( f + g \\right) \\left( x \\right) \\; dx = \\int_a^b f \\left( x \\right) \\; dx + \\int_a^b g \\left( x \\right) \\; dx $</li>
</ol>
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
Suppose $ f \\left( x \\right) \\leq g \\left( x \\right) $ for all $ x \\in \\left[ a, b \\right] $ where $ f, g $ are both integrable. Then,
    \\[ \\int_a^b f \\left( x \\right) \\; dx \\leq \\int_a^b g \\left( x \\right) \\; dx \\]
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
Suppose $ f : \\left[ a, b \\right] \\to \\mathbb{R} $ is integrable then $ \\left| f \\right| $ is also integrable and
    \\[ \\left| \\int_a^b f \\left( x \\right) \\; dx \\right| \\leq \\int_a^b \\left| f \\left( x \\right) \\right| \\; dx \\]
`
    },
    {
        type: "Definition",
        title: "",
        latex: `
\\[ \\int_a^a f \\left( x \\right) \\; dx = 0 \\]
    \\[ \\int_a^b f \\left( x \\right) \\; dx = - \\int_b^a f \\left( x \\right) \\; dx \\]
`
    },
    {
        type: "Proposition",
        title: "Proposition (8.31)",
        latex: `
If $ f $ is continuous on $ \\left[ a, b \\right] $, then there is some $ c \\in \\left[ a, b \\right] $ such that
    \\[ f \\left( c \\right) = \\frac{1}{b - a} \\int_a^b f \\left( x \\right) \\; dx \\]
`
    },
    {
        type: "Theorem",
        title: "Theorem (Fundamental Theorem of Calculus - FTC)",
        latex: `
<ol>
<li>If $ f : \\left[ a, b \\right] \\to \\mathbb{R} $ is integrable and $ F : \\left[ a, b \\right] \\to \\mathbb{R} $ satisfies $ F' \\left( x \\right) = f \\left( x \\right) $ for all $ x \\in \\left[ a, b \\right] $, then 
        \\[ \\int_a^b f \\left( x \\right) \\; dx = F \\left( b \\right) - F \\left( a \\right) \\]</li>
<li>Let $ g : \\left[ a, b \\right] \\to \\mathbb{R} $ be integrable and define $ G : \\left[ a, b \\right] \\to \\mathbb{R} $ by $ G \\left( x \\right) = \\int_a^x g \\left( t \\right) \\; dt $, then $ G $ is continuous. Moreover, if $ g $ is continuous then $ G $ is differentiable and $ G' \\left( x \\right) = g \\left( x \\right) $.</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Divides",
        latex: `
We say that $ a $ divides $ b $, denoted $ a \\mid b $, iff $ \\exists \\, d : a \\cdot d = b $. If $ a $ does not divide $ b $, then we write $ a \\nmid b $.
`
    },
    {
        type: "Properties",
        title: "Divides",
        latex: `
<ul>
<li>If $ a \\mid b $ and $ b \\mid c $, then $ a \\mid c $.</li>
<li>If $ a \\mid b $ and $ a \\mid c $, then $ a \\mid \\left( b + c \\right) $.</li>
<li>If $ a \\mid b $ and $ a \\mid c $, then $ a \\mid \\left( m \\cdot b + n \\cdot c \\right) $ for any integers $ m $ and $ n $.</li>
<li>If $ d \\mid a $, then $ d \\mid \\left( c \\cdot a \\right) $ for any integer $ c $.</li>
</ul>
`
    },
    {
        type: "Definition",
        title: "Greatest Common Divisor",
        latex: `
We say that $ d $ is the greatest common divisor of $ a $ and $ b $, denoted $ d = \\left( a, b \\right) = \\gcd \\left( a, b \\right) $ iff $ d \\mid a $ and $ d \\mid b $, and if $ c \\mid a $ and $ c \\mid b $, then $ c \\leq d $.
`
    },
    {
        type: "Remark",
        title: "",
        latex: `
If $ \\left( a, b \\right) = 1 $, then we will say that $ a $ and $ b $ are relatively prime.
`
    },
    {
        type: "Theorem",
        title: "Theorem (1.1)",
        latex: `
If $ \\left( a, b \\right) = d $, then $ \\left( \\frac{a}{d}, \\frac{b}{d} \\right) = 1 $.
`
    },
    {
        type: "Theorem",
        title: "Division Algorithm (1.2)",
        latex: `
Given positive integers $ a $ and $ b $, $ b \\neq 0 $, there exists unique integers $ q $ and $ r $, with $ 0 \\leq r < b $, such that:
    \\[ a = b \\cdot q + r \\]
`
    },
    {
        type: "Lemma",
        title: "Lemma (1.3)",
        latex: `
If $ a = bq + r $, then $ \\left( a, b \\right) = \\left( b, r \\right) $.
`
    },
    {
        type: "Theorem",
        title: "The Euclidean Algorithm",
        latex: `
If $ a $ and $ b $ are positive integers, $ b \\neq 0 $ and
    \\begin{align*}
        a = bq + r, & \\qquad 0 \\leq r < b \\\\
        b = r q_1 + r_1, & \\qquad 0 \\leq r_1 < r \\\\
        r = r_1 q_2 + r_2 & \\qquad 0 \\leq r_2 < r_1 \\\\
        \\vdots
    \\end{align*}
    Then for $ k $ large enough, say $ k = t $, we have that $ r_{t-1} = r_t q_{t+1} $ and $ \\left( a, b \\right) = r_t $.
`
    },
    {
        type: "Theorem",
        title: "Theorem (1.4)",
        latex: `
If $ \\left( a, b \\right) = d $, then there are integers $ x $ and $ y $ such that
    \\[ ax + by = d \\]
`
    },
    {
        type: "Corollary",
        title: "Corollary (1.1)",
        latex: `
If $ d \\mid \\left( ab \\right) $ and $ \\left( d, a \\right) = 1 $, then $ d \\mid b $.
`
    },
    {
        type: "Corollary",
        title: "Corollary (1.2)",
        latex: `
Let $ \\left( a, b \\right) = d $, and suppose that $ c \\mid a $ and $ c \\mid b $, then $ c \\mid d $.
`
    },
    {
        type: "Corollary",
        title: "Corollary (1.3)",
        latex: `
If $ a \\mid m $, $ b \\mid m $, and $ \\left( a, b \\right) = 1 $, then $ \\left( ab \\right) \\mid m $.
`
    },
    {
        type: "Definition",
        title: "Prime Numbers",
        latex: `
A prime number is an integer that is greater than 1 and has no positive divisors other than 1 and itself. An integer that is greater than 1 but is not prime is called composite. We call 1 neither a prime nor a composite number.
`
    },
    {
        type: "Lemma",
        title: "Lemma (2.1)",
        latex: `
Every integer $ n > 1 $ is divisible by a prime number.
`
    },
    {
        type: "Lemma",
        title: "Lemma (2.2)",
        latex: `
Every integer $ n > 1 $ can be written as a product of primes.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
There are infinitely many primes.
`
    },
    {
        type: "Lemma",
        title: "Lemma (2.5)",
        latex: `
If $ p \\mid \\left( a b \\right) $, then $ p \\mid a $ or $ p \\mid b $.
`
    },
    {
        type: "Lemma",
        title: "Lemma (2.6)",
        latex: `
If $ p \\mid \\left( a_1 a_2 \\dots a_k \\right) $, then $ p \\mid a_i $ for some $ i $, $ i = 1, 2, \\dots, k $.
`
    },
    {
        type: "Lemma",
        title: "Lemma (2.7)",
        latex: `
If $ q_1, q_2, \\dots, q_n $ are primes, and $ p \\mid \\left( q_1 q_2 \\dots q_k \\right) $, then $ p = q_k $ for some $ k $.
`
    },
    {
        type: "Theorem",
        title: "Fundamental Theorem of Arithmetic",
        latex: `
Any positive integer can be written as a product of primes in one and only one way.
`
    },
    {
        type: "Lemma",
        title: "Lemma (3.1)",
        latex: `
If $ x_0, y_0 $ is a solution of $ ax + by = c $, then for any integer $ t $,
    \\begin{align*}
        x & = x_0 + bt \\\\
        y & = y_0 - at
    \\end{align*}
    is also a solution.
`
    },
    {
        type: "Lemma",
        title: "Lemma (3.2)",
        latex: `
Consider the equation $ ax + by = c $. If $ \\left( a, b \\right) \\mid c $, then $ ax + by = c $ has a solution. If $ \\left( a, b \\right) \\nmid c $, then $ ax + by = c $ has no solutions.
`
    },
    {
        type: "Lemma",
        title: "Lemma (3.3)",
        latex: `
Consider the equation:
    \\[ ax + by = c \\]
    Suppose that $ \\left( a, b \\right) = 1 $ and $ \\left( x_0, y_0 \\right) $ is a solution, then:
    \\[ x = x_0 + bt, \\quad y = y_0 - at \\]
    provides all of the solutions.
`
    },
    {
        type: "Theorem",
        title: "Theorem (3.1)",
        latex: `
Consider $ ax + by = c $, if $ \\left( a, b \\right) \\mid c $, then there are infinitely many solutions of the form
    \\[ x = x_0 + \\frac{bt}{\\left( a, b \\right)}, \\quad y = y_0 - \\frac{at}{\\left( a, b \\right)} \\]
    Where $ x_0, y_0 $ is any solution, and $ t \\in \\mathbb{Z} $.
`
    },
    {
        type: "Definition",
        title: "Congruence",
        latex: `
We say that $ a $ and $ b $ are congruent to each other modulo $ m $,
    \\[ a \\equiv b \\mod m \\]
    if $ m \\mid \\left( a - b \\right) $.
`
    },
    {
        type: "Theorem",
        title: "Theorem (4.1)",
        latex: `
If $ a \\equiv b \\mod m $, then there exists $ k $ such that $ a = b + km $.
`
    },
    {
        type: "Theorem",
        title: "Theorem (4.2)",
        latex: `
There is a unique $ r $, call this the least residue modulo $ m $.
    \\[ a \\equiv r \\mod m \\]
    \\[ r \\in \\left\\{ 0, 1, 2, \\dots, m - 2, m - 1 \\right\\} \\]
`
    },
    {
        type: "Theorem",
        title: "Theorem (4.3)",
        latex: `
$ a \\equiv b \\mod m $ if and only if they have the same remainder when divided by $ m $.
`
    },
    {
        type: "Lemma",
        title: "Lemma (4.1)",
        latex: `
For integers $ a, b, c, d $, we have that:
    <ul>
<li>$ a \\equiv a \\mod m $</li>
<li>If $ a \\equiv b \\mod m $, then $ b \\equiv a \\mod m $</li>
<li>If $ a \\equiv b \\mod m $ and $ b \\equiv c \\mod m $, then $ a \\equiv c \\mod m $</li>
<li>If $ a \\equiv b \\mod m $ and $ c \\equiv d \\mod m $, then $ a + c \\equiv b + d \\mod m $</li>
<li>If $ a \\equiv b \\mod m $ and $ c \\equiv d \\mod m $, then $ ac \\equiv bd \\mod m $</li>
</ul>
`
    },
    {
        type: "Theorem",
        title: "Theorem (4.4)",
        latex: `
\\textit{This is listed as a lemma in the in-person notes.}
    \\medskip
    \\newline
    Suppose $ ab \\equiv ac \\mod m $, then if $ \\left( a, m \\right) = 1 $, then $ b \\equiv c \\mod m $.
`
    },
    {
        type: "Theorem",
        title: "Theorem (4.5)",
        latex: `
\\textit{This is listed as a lemma in the in-person notes.}
    \\medskip
    \\newline
    If $ ac \\equiv bc \\mod m $ and $ \\left( c, m \\right) = d $, then $ a \\equiv b \\mod \\frac{m}{d} $.
`
    },
    {
        type: "Definition",
        title: "Linear Congruence",
        latex: `
A linear congruence is of the form
    \\[ ax \\equiv b \\mod m \\]
    This has a solution if and only if there are integers $ x $ and $ k $ such that
    \\[ ax = b + km \\Leftrightarrow ax - km = b\\]
    These can be viewed as Diophantine equations.
    \\medskip
    \\newline
    If one integer satisfies $ ax \\equiv b \\mod m $, then there are infinitely many.
`
    },
    {
        type: "Lemma",
        title: "Lemma (5.1)",
        latex: `
If $ \\left( a, m \\right) \\nmid b $, then $ ax \\equiv b \\mod m $ has no solutions.
`
    },
    {
        type: "Lemma",
        title: "Lemma (5.2)",
        latex: `
If $ \\left( a, m \\right) = 1 $, then $ ax \\equiv b \\mod m $ has exactly one solution.
`
    },
    {
        type: "Lemma",
        title: "Lemma (5.3)",
        latex: `
Let $ d = \\left( a, m \\right) $. If $ d \\mid b $, then $ ax \\equiv b \\mod m $ has $ d $ solutions.
`
    },
    {
        type: "Theorem",
        title: "The Chinese Remainder Theorem",
        latex: `
The linear congruence system
    \\[ x \\equiv a_1 \\mod m_1, \\qquad x \\equiv a_2 \\mod m_2, \\quad \\dots \\quad, x = a_n \\mod m_n \\]
    has a unique solution modulo $ m_1 \\times m_2 \\times \\dots \\times m_n $ if for each $ \\left( m_i, m_j \\right) $, where $ i \\neq j $, $ \\left( m_i, m_j \\right) = 1 $.
`
    },
    {
        type: "Lemma",
        title: "Lemma (6.1)",
        latex: `
If $ \\left( a, m \\right) = 1 $, then the least residues of
    \\[ a, \\quad 2a, \\quad 3a, \\quad \\dots, \\quad \\left( m - 1 \\right) a \\mod m \\]
    are given by
    \\[ 1, \\quad 2, \\quad 3, \\quad \\dots, \\quad m - 1 \\]
    in some order
`
    },
    {
        type: "Theorem",
        title: "Fermat's Theorem (Little Theorem)",
        latex: `
If $ p $ is a prime, and $ \\left( a, p \\right) = 1 $, then
    \\[ a^{p-1} \\equiv 1 \\mod p \\]
`
    },
    {
        type: "Lemma",
        title: "Lemma (6.2)",
        latex: `
\\[ x^2 \\equiv 1 \\mod p \\]
    has exactly 2 solutions, $ 1 $ and $ p - 1 $.
`
    },
    {
        type: "Definition",
        title: "Modular Multiplicative Inverse",
        latex: `
The modular multiplicative inverse of an integer $ a $ is an integer $ a' $ such that
    \\[ a a' \\equiv 1 \\mod m \\]
    If $ \\left( a, p \\right) = 1 $, we know that $ ax \\equiv 1 \\mod p $ has exactly one solution. Thus, the inverses exist for each non-zero element.
`
    },
    {
        type: "Lemma",
        title: "Lemma (6.3)",
        latex: `
Let $ p $ be an odd prime, and let $ a' $ be the solution of $ ax \\equiv 1 \\mod p $, for $ a = 1, 2, \\dots, p - 1 $. Then, $ a' \\equiv b' \\mod p $ if and only if $ a \\equiv b \\mod p $. Furthermore, $ a \\equiv a' \\mod p $ if and only if $ a = 1 $ or $ a = p - 1 $.
`
    },
    {
        type: "Theorem",
        title: "Wilson's Theorem",
        latex: `
$ p $ is a prime if and only if
    \\[ \\left( p - 1 \\right)! \\equiv -1 \\mod p \\]
`
    },
    {
        type: "Definition",
        title: "",
        latex: `
Let $ n $ be a positive integer. Then, $ d(n) $ is the number of positive divisors of $ n $, including $ 1 $ and $ n $. Also, $ \\sigma (n) $ is the sum of the positive divisors of $ n $. That is,
    \\[ d(n) = \\sum_{d \\mid n} 1 \\quad \\text{and} \\quad \\sigma (n) = \\sum_{d \\mid n} d \\]
    (Note $ \\sum_{d \\mid n} $ means the sum over the positive divisors of $ n $)
`
    },
    {
        type: "Theorem",
        title: "Theorem (7.1)",
        latex: `
If $ p_1^{e_1} p_2^{e_2} \\dots p_k^{e_k} $ is the prime-power decomposition of $ n $, then we have that
    \\[ d(n) = d \\left( p_1^{e_1} \\right) \\times d \\left( p_2^{e_2} \\right) \\times \\dots \\times d \\left( p_k^{e_k} \\right) \\]
`
    },
    {
        type: "Lemma",
        title: "Lemma (7.1)",
        latex: `
If $ p $ and $ q $ are different primes, then
    \\[ \\sigma \\left( p^e q^f \\right) = \\sigma \\left( p^e \\right) \\cdot \\sigma \\left( q^f \\right) \\]
`
    },
    {
        type: "Theorem",
        title: "Theorem (7.2)",
        latex: `
If $ p_1^{e_1} p_2^{e_2} \\dots p_k^{e_k} $ is a prime-power decomposition of $ n $, then
    \\[ \\sigma \\left( n \\right) = \\sigma \\left( p_1^{e_1} \\right) \\sigma \\left( p_2^{e_2} \\right) \\dots \\sigma \\left( p_k^{e_k} \\right) \\]
`
    },
    {
        type: "Definition",
        title: "Multiplicative Functions",
        latex: `
A function $ f $, defined for the positive integers, is said to be multiplicative if and only if
    \\[ \\left( m, n \\right) = 1 \\quad \\text{implies} \\quad f \\left( mn \\right) = f \\left( m \\right) f \\left( n \\right) \\]
`
    },
    {
        type: "Theorem",
        title: "Theorem (7.3)",
        latex: `
The function $ d $ is multiplicative.
`
    },
    {
        type: "Theorem",
        title: "Theorem (7.4)",
        latex: `
The function $ \\sigma $ is multiplicative.
`
    },
    {
        type: "Theorem",
        title: "Theorem (7.5)",
        latex: `
If $ f $ is a multiplicative function and the prime power decomposition of $ n $ is $ p_1^{e_1} p_2^{e_2} \\dots p_k^{e_k} $, then
    \\[ f(n) = f \\left( p_1^{e_1} \\right) f \\left( p_2^{e_2} \\right) \\dots f \\left( p_k^{e_k} \\right) \\]
`
    },
    {
        type: "Definition",
        title: "Perfect Numbers",
        latex: `
A number is called perfect if and only if it is equal to the sum of its positive divisors, excluding itself. That is, a number is perfect if and only if
    \\[ \\sigma \\left( n \\right) = 2n \\]
`
    },
    {
        type: "Theorem",
        title: "Theorem (8.1) (Euclid)",
        latex: `
If $ 2^k - 1 $ is prime, then $ 2^{k-1} \\left( 2^k - 1 \\right) $ is perfect.
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
If $ k $ is composite, then $ 2^k - 1 $ is composite.
`
    },
    {
        type: "Theorem",
        title: "Theorem (8.2) (Euler)",
        latex: `
If $ n $ is an even perfect number, then
    \\[ n = 2^{p - 1} \\left( 2^p - 1 \\right) \\]
    for some prime $ p $ and $ 2^p - 1 $ is also prime.
`
    },
    {
        type: "Definition",
        title: "Euler's $ \\phi $ Function / Euler's Totient Function",
        latex: `
If $ m $ is a positive integer, let $ \\phi \\left( m \\right) $ denote the number of positive integers less than or equal to $ m $ and relatively prime to $ m $.
`
    },
    {
        type: "Lemma",
        title: "Lemma (9.1)",
        latex: `
If $ \\left( a, m \\right) = 1 $ and $ r_1, r_2, \\dots, r_{\\phi \\left( m \\right)} $ are the positive integers less than $ m $ and relatively prime to $ m $, then the least residues modulo $ m $ of
    \\[ ar_1, \\quad ar_2, \\quad \\dots, \\quad ar_{\\phi \\left( m \\right)} \\]
    are a permutation of
    \\[ r_1, \\quad r_2, \\dots, \\quad r_{\\phi \\left( m \\right)} \\]
`
    },
    {
        type: "Theorem",
        title: "(9.1) / Euler's Theorem",
        latex: `
If $ \\left( a, m \\right) = 1 $, then
    \\[ a^{\\phi \\left( m \\right)} \\equiv 1 \\mod m \\]
`
    },
    {
        type: "Lemma",
        title: "Lemma (9.2)",
        latex: `
For $ p $ prime, and all positive integers $ n $,
    \\[ \\phi \\left( p^n \\right) = p^{n-1} \\left( p - 1 \\right) \\]
`
    },
    {
        type: "Lemma",
        title: "Lemma (9.3)",
        latex: `
If $ \\left( a, m \\right) = 1 $ and $ a \\equiv b \\mod m $, then $ \\left( b, m \\right) = 1 $.
`
    },
    {
        type: "Corollary",
        title: "Corollary (9.1)",
        latex: `
If the least residues modulo $ m $ of $ r_1, r_2, \\dots, r_m $ are a permutation of $ 0, 1, \\dots, m - 1 $, then $ r_1, r_2, \\dots r_m $ contains exactly $ \\phi \\left( m \\right) $ elements relatively prime to $ m $.
`
    },
    {
        type: "Theorem",
        title: "Theorem (9.2)",
        latex: `
The function $ \\phi $ is multiplicative.
`
    },
    {
        type: "Theorem",
        title: "Theorem (9.3)",
        latex: `
If $ n $ has a prime power decomposition given by $ n = p_1^{e_1} p_2^{e_2} \\cdots p_k^{e_k} $. then
    \\[ \\phi \\left( n \\right) = p_1^{e_1-1} \\left( p_1 - 1 \\right) p_2^{e_2-1} \\left( p_2 - 1 \\right) \\cdots p_k^{e_k-1} \\left( p_k - 1 \\right) \\]
`
    },
    {
        type: "Corollary",
        title: "Corollary (9.2)",
        latex: `
If $ n = p_1^{e_1} p_2^{e_2} \\cdots p_k^{e_k} $, then
    \\[ \\phi \\left( n \\right) = n \\left( 1 - \\frac{1}{p_1} \\right) \\left( 1 - \\frac{1}{p_2} \\right) \\cdots \\left( 1 - \\frac{1}{p_k} \\right) \\]
`
    },
    {
        type: "Definition",
        title: "Arithmetic Functions",
        latex: `
An arithmetic function is a function whose domain is the set of positive integers.
`
    },
    {
        type: "Theorem",
        title: "Theorem (9.5)",
        latex: `
Let $ f $ be an arithmetic function for $ n \\in \\mathbb{Z} $ with $ n > 0 $. Then, consider the following arithmetic function.
    \\[ F \\left( n \\right) = \\sum_{d \\mid n} f \\left( d \\right) \\]
    If $ f $ is multiplicative, then $ F $ is multiplicative.
`
    },
    {
        type: "Theorem",
        title: "Gauss' Theorem",
        latex: `
Let $ n \\in \\mathbb{Z} $ with $ n > 0 $. Then
    \\[ \\sum_{d \\mid n} \\phi \\left( d \\right) = n \\]
`
    },
    {
        type: "Definition",
        title: "The Möbius $ \\mu $ Function",
        latex: `
If $ n \\in \\mathbb{Z} $ with $ n > 0 $, then the Möbius $ \\mu $-function, denoted $ \\mu \\left( n \\right) $, is defined as
    \\[ \\mu \\left( n \\right) = \\begin{cases}
        1 & \\text{if } n = 1 \\\\
        0 & \\text{if } p^2 \\mid n \\text{ with } p \\text{ prime} \\\\
        \\left( -1 \\right)^r & \\text{if } n = p_1 p_2 \\dots p_r \\text{ with } p_1, \\dots, p_r \\text{ distinct primes}
    \\end{cases} \\]
`
    },
    {
        type: "Theorem",
        title: "Theorem (9.6)",
        latex: `
The Möbius $ \\mu $-function is multiplicative.
`
    },
    {
        type: "Corollary",
        title: "Corollary (9.7)",
        latex: `
Let $ n \\in \\mathbb{Z} $ with $ n > 0 $. Then
    \\[ \\sum_{d \\mid n} \\mu \\left( d \\right) = \\begin{cases}
        1 & \\text{if } n = 1 \\\\
        0 & \\text{otherwise}
    \\end{cases} \\]
`
    },
    {
        type: "Theorem",
        title: "Möbius Inversion Formula",
        latex: `
Let $ f $ and $ g $ be arithmetic functions. Then
    \\[ f \\left( n \\right) = \\sum_{d \\mid n} g \\left( d \\right) \\]
    If and only if
    \\[ g \\left( n \\right) = \\sum_{d \\mid n} \\mu \\left( d \\right) f \\left( \\frac{n}{d} \\right) = \\sum_{d \\mid n} \\mu \\left( \\frac{n}{d} \\right) f \\left( d \\right) \\]
`
    },
    {
        type: "Definition",
        title: "Order",
        latex: `
The order of $ a $ modulo $ m $ is the smallest positive integer $ t $ such that
    \\[ a^t \\equiv 1 \\mod m \\]
`
    },
    {
        type: "Theorem",
        title: "Theorem (10.1)",
        latex: `
Suppose that $ \\left( a, m \\right) = 1 $ and $ a $ has order $ t $ modulo $ m $. Then, $ a^n \\equiv 1 \\mod m $ if and only if $ n $ is a multiple of $ t $.
`
    },
    {
        type: "Theorem",
        title: "Theorem (10.2)",
        latex: `
If $ \\left( a, m \\right) = 1 $ and $ a $ has order $ t $ modulo $ m $, then $ t \\mid \\phi \\left( m \\right) $.
`
    },
    {
        type: "Theorem",
        title: "Theorem (10.3)",
        latex: `
If $ p $ and $ q $ are odd primes and $ q \\mid a^p - 1 $, then $ q \\mid a - 1 $ or $ q = 2kp + 1 $ for some integer $ k $.
`
    },
    {
        type: "Corollary",
        title: "Corollary (10.1)",
        latex: `
Any divisor of $ 2^p - 1 $ is of the form $ 2kp + 1 $.
`
    },
    {
        type: "Theorem",
        title: "Theorem (10.4)",
        latex: `
If the order of $ a $ modulo $ m $ is $ t $, then $ a^r \\equiv a^s \\mod m $ if and only if $ r \\equiv s \\mod t $.
`
    },
    {
        type: "Definition",
        title: "Primitive Roots",
        latex: `
If $ a $ is the least residue and the order of $ a $ modulo $ m $ is $ \\phi \\left( m \\right) $, we will say that $ a $ is a primitive root of $ m $.
`
    },
    {
        type: "Theorem",
        title: "Theorem (10.5)",
        latex: `
If $ g $ is a primitive root of $ m $, then the least residues of
    \\[ g, \\qquad g^2, \\qquad \\dots, \\qquad g^{\\phi \\left( m \\right)} \\]
    are a permutation of the $ \\phi \\left( m \\right) $ positive integers less than $ m $ and relatively prime to $ m $.
`
    },
    {
        type: "Lemma",
        title: "Lemma (10.1)",
        latex: `
Suppose that $ a $ has order $ t $ modulo $ m $. Then $ a^k $ has order $ t $ modulo $ m $ if and only if $ \\left( k, t \\right) = 1 $.
`
    },
    {
        type: "Corollary",
        title: "Corollary (10.2)",
        latex: `
Suppose that $ g $ is a primitive root of $ p $. Then the least residue of $ g^k $ is a primitive root of $ p $ if and only if $ \\left( k, p-1 \\right) = 1 $.
`
    },
    {
        type: "Lemma",
        title: "Lemma (10.2)",
        latex: `
If $ f $ is a polynomial of degree $ n $, then
    \\[ f \\left( x \\right) \\equiv 0 \\mod p \\]
    has at most $ n $ solutions
`
    },
    {
        type: "Lemma",
        title: "Lemma (10.3)",
        latex: `
If $ d \\mid p - 1 $, then $ x^d \\equiv 1 \\mod p $ has exactly $ d $ solutions.
`
    },
    {
        type: "Theorem",
        title: "Theorem (10.6)",
        latex: `
Every prime $ p $ has $ \\phi \\left( p - 1 \\right) $ primitive roots.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
The only positive integers with primitive roots are 1, 2, 4, $ p^e $, and $ 2p^e $, where $ p $ is an odd prime.
`
    },
    {
        type: "Theorem",
        title: "Theorem (11.1)",
        latex: `
Suppose that $ p $ is an odd prime. If $ p \\nmid a $, then $ x^2 \\equiv a \\mod p $ has exactly two solutions or has no solutions.
`
    },
    {
        type: "Definition",
        title: "Quadratic Residues",
        latex: `
If $ x^2 \\equiv a \\mod m $ has a solution, then $ a $ is called a quadratic residue modulo $ m $.
    \\medskip
    \\newline
    If $ x^2 \\equiv a \\mod m $ has no solution, then $ a $ is called a quadratic non-residue modulo $ m $.
`
    },
    {
        type: "Theorem",
        title: "Euler's Criterion (11.2)",
        latex: `
If $ p $ is an odd prime and $ p \\nmid a $, then $ x^2 \\equiv a \\mod p $ has a solution or no respectively, if
    \\[ a^\\frac{p - 1}{2} \\equiv 1 \\mod p \\]
    or
    \\[ a^\\frac{p - 1}{2} \\equiv -1 \\mod p \\]
`
    },
    {
        type: "Theorem",
        title: "Theorem (11.3)",
        latex: `
The Legendre symbol has the properties:
    <ol>
<li>If $ a \\equiv b \\mod p $, then $ \\left( \\frac{a}{p} \\right) = \\left( \\frac{b}{p} \\right) $</li>
<li>If $ p \\nmid a $, then $ \\left( \\frac{a^2}{p} \\right) = 1 $</li>
<li>If $ p \\nmid a $ and $ p \\nmid b $, then $ \\left( \\frac{ab}{p} \\right) = \\left( \\frac{a}{p} \\right) \\left( \\frac{b}{p} \\right) $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Quadratic Reciprocity Theorem (11.4)",
        latex: `
If $ p $ and $ q $ are odd primes and $ p \\equiv q \\equiv 3 \\mod 4 $, then
    \\[ \\left( \\frac{p}{q} \\right) = - \\left( \\frac{q}{p} \\right) \\]
    If $ p $ and $ q $ are odd primes and $ p \\equiv 1 \\mod 4 $ or $ q \\equiv 1 \\mod 4 $, then
    \\[ \\left( \\frac{p}{q} \\right) = \\left( \\frac{q}{p} \\right) \\]
`
    },
    {
        type: "Theorem",
        title: "Theorem (11.5)",
        latex: `
If $ p $ is an odd prime, then
    \\[ \\left( - \\frac{1}{p} \\right) = 1 \\quad \\text{if} \\quad p \\equiv 1 \\mod 4 \\]
    \\[ \\left( - \\frac{1}{p} \\right) = -1 \\quad \\text{if} \\quad p \\equiv 3\\mod 4 \\]
`
    },
    {
        type: "Theorem",
        title: "Theorem (11.6)",
        latex: `
If $ p $ is an odd prime, then
    \\[ \\left( \\frac{2}{p} \\right) = 1 \\quad \\text{if} \\quad p \\equiv 1 \\mod 8 \\quad \\text{or} \\quad p \\equiv 7 \\mod 8 \\]
    \\[ \\left( \\frac{2}{p} \\right) = -1 \\quad \\text{if} \\quad p \\equiv 3 \\mod 8 \\quad \\text{or} \\quad p \\equiv 5 \\mod 8 \\]
`
    },
    {
        type: "Theorem",
        title: "Gauss's Lemma (12.1)",
        latex: `
Suppose that $ p $ is an odd prime, $ \\left( a, p \\right) = 1 $, and there are among the least residues modulo $ p $ of
    \\[ a, \\qquad 2a, \\qquad 3a, \\qquad \\dots, \\qquad \\frac{p - 1}{2} \\cdot a \\]
    Exactly $ g $ that are strictly greater than $ \\frac{p - 1}{2} $. Then,
    \\[ \\left( \\frac{a}{p} \\right) = \\left( -1 \\right)^g \\]
`
    },
    {
        type: "Lemma",
        title: "Lemma (12.1)",
        latex: `
If $ p $ and $ q $ are different odd primes, then
    \\[ \\sum_{k = 1}^\\frac{p - 1}{2} \\left[ \\frac{kq}{p} \\right] + \\sum_{k = 1}^\\frac{q - 1}{2} \\left[ \\frac{kp}{q} \\right] = \\frac{p - 1}{2} \\cdot \\frac{q - 1}{2} \\]
`
    },
    {
        type: "Theorem",
        title: "Theorem (12.4)",
        latex: `
If $ p $ and $ q $ are odd primes, then
    \\[ \\left( \\frac{p}{q} \\right) \\left( \\frac{p}{q} \\right) = \\left( -1 \\right)^{\\frac{\\left( p - 1 \\right) \\left( q - 1 \\right)}{4}} \\]
`
    },
    {
        type: "Theorem",
        title: "Theorem (12.3)",
        latex: `
If $ p $ and $ 4p + 1 $ are both primes, then 2 is a primitive root modulo $ 4p + 1 $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ p \\equiv 2 \\mod 3 $, then all $ x^3 \\equiv a \\mod p $ have solutions.
`
    },
    {
        type: "Definition",
        title: "Subspaces of $ \\mathbb{R}^n $",
        latex: `
A set $ U $ of vectors in $ \\mathbb{R}^n $ is called a subspace of $ \\mathbb{R}^n $ if it satisfies the following properties:
    <ol>
<li>The zero vector $ \\mathbf{0} \\in U $</li>
<li>If $ \\mathbf{x} \\in U $ and $ \\mathbf{y} \\in U $, then $ \\mathbf{x} + \\mathbf{y} \\in U $</li>
<li>If $ \\mathbf{x} \\in U $, then $ a \\mathbf{x} \\in U $ for all $ a \\in \\mathbb{R} $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Null Space of a Matrix",
        latex: `
The null space of an $ m \\times n $ matrix $ A $ is the set of all vectors for which multiplying by $ A $ gives 0. This is denoted:
    \\[ \\operatorname{null} A = \\left\\{ \\mathbf{x} \\in \\mathbb{R}^n \\mid A \\mathbf{x} = \\mathbf{0} \\right\\} \\]
`
    },
    {
        type: "Definition",
        title: "Image Space of a Matrix",
        latex: `
The image space of an $ m \\times n $ matrix $ A $ is the set of all vectors which can be obtained by multiplying $ A $ by a vector in $ \\mathbb{R}^n $. This is denoted:
    \\[ \\operatorname{im} A = \\left\\{ A \\mathbf{x} \\mid \\mathbf{x} \\in \\mathbb{R}^n \\right\\} \\]
`
    },
    {
        type: "Definition",
        title: "Spanning Set",
        latex: `
The set of all such linear combinations of a set of vectors $ \\mathbf{x}_i $ is called the span, and is denoted:
    \\[ \\operatorname{span} \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k \\right\\} = \\left\\{ t_1 \\mathbf{x}_1 + t_2 \\mathbf{x}_2 + \\dots + t_k \\mathbf{x}_k \\mid t_i \\in \\mathbb{R} \\right\\} \\]
    If $ V = \\operatorname{span} \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k \\right\\} $, we say $ V $ is spanned by the vectors $ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k $, or that the vectors span the space $ V $.
`
    },
    {
        type: "Theorem",
        title: "Span Theorem",
        latex: `
Let $ U = \\operatorname{span} \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k \\right\\} $ where each $ \\mathbf{x}_i \\in \\mathbb{R}^n $, then
    <ol>
<li>$ U $ is a subspace of $ \\mathbb{R}^n $ containing each $ \\mathbf{x}_i $</li>
<li>If $ W $ is a subspace of $ \\mathbb{R}^n $ and each $ \\mathbf{x}_i \\in W $, then $ U \\subseteq W $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Linear Independence in $ \\mathbb{R}^n $",
        latex: `
We call a set $ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots \\mathbf{x}_k \\right\\} $ of vectors linearly independent if:
    \\[ t_1 \\mathbf{x}_1 + t_2 \\mathbf{x}_2 + \\dots t_k \\mathbf{x}_k = \\mathbf{0} \\Longrightarrow t_1 = t_2 = \\dots = t_k = 0 \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k \\right\\} $ is an independent set of vectors in $ \\mathbb{R}^n $, then every vector in $ \\operatorname{span} \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k \\right\\} $ has a unique representation as a linear combination of the $ \\mathbf{x}_i $.
`
    },
    {
        type: "Theorem",
        title: "Independence Test",
        latex: `
To verify that a set $ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k \\right\\} $ of vectors in $ \\mathbb{R}^n $ is independent, proceed as follows:
    <ol>
<li>Set a linear combination equal to zero: $ t_1 \\mathbf{x}_1 + t_2 \\mathbf{x}_2 + \\dots + t_k \\mathbf{x}_k = \\mathbf{0} $</li>
<li>Show that $ t_i = 0 $ for each $ i $</li>
</ol>
    If some nontrivial linear combination vanishes, the vectors are not independent.
`
    },
    {
        type: "Theorem",
        title: "Inverse Theorem",
        latex: `
The following conditions are equivalent for an $ n \\times n $ matrix $ A $:
    <ol>
<li>$ A $ is invertible</li>
<li>$ A \\mathbf{x} = \\mathbf{0} \\Longrightarrow \\mathbf{x} = \\mathbf{0} $ for $ \\mathbf{x} \\in \\mathbb{R}^n $</li>
<li>$ A \\mathbf{x} = \\mathbf{b} $ has a solution $ \\mathbf{x} $ for every $ \\mathbf{b} \\in \\mathbb{R}^n $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ A $ be an $ m \\times n $ matrix and let $ \\left\\{ \\mathbf{c}_1, \\mathbf{c}_2, \\dots, \\mathbf{c}_n \\right\\} $ denote the columns of $ A $
    <ol>
<li>$ \\left\\{ \\mathbf{c}_1, \\mathbf{c}_2, \\dots, \\mathbf{c}_n \\right\\} $ is independent in $ \\mathbb{R}^m $ iff $ A \\mathbf{x} = \\mathbf{0} $ ($ \\mathbf{x} \\in \\mathbb{R}^n $) implies $ \\mathbf{x} = \\mathbf{0} $</li>
<li>$ \\mathbb{R}^m = \\operatorname{span} \\left\\{ \\mathbf{c}_1, \\mathbf{c}_2, \\dots, \\mathbf{c}_n \\right\\} $ iff $ A \\mathbf{x} = \\mathbf{b} $ has a solution $ \\mathbf{x} $ for every $ \\mathbf{b} \\in \\mathbb{R}^m $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
The following are equivalent for an $ n \\times n $ matrix $ A $:
    <ol>
<li>$ A $ is invertible</li>
<li>The columns of $ A $ are linearly independent</li>
<li>The columns of $ A $ span $ \\mathbb{R}^n $</li>
<li>The rows of $ A $ are linearly independent</li>
<li>The rows of $ A $ span the set of all $ 1 \\times n $ rows</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Fundamental Theorem",
        latex: `
Let $ U $ be a subspace of $ \\mathbb{R}^n $. If $ U $ is spanned by $ m $ vectors, and if $ U $ contains $ k $ linearly independent vectors, then $ k \\leq m $.
`
    },
    {
        type: "Definition",
        title: "Basis of $ \\mathbb{R}^n $",
        latex: `
If $ U $ is a subspace of $ \\mathbb{R}^n $, a set $ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_m \\right\\} $ of vectors in $ U $ is called a basis of $ U $ if it satisfies the two following conditions:
    <ol>
<li>$ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_m \\right\\} $ is linearly independent</li>
<li>$ U = \\operatorname{span} \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_m \\right\\} $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Invariance Theorem in $ \\mathbb{R}^n $",
        latex: `
If $ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_m \\right\\} $ and $ \\left\\{ \\mathbf{y}_1, \\mathbf{y}_2, \\dots, \\mathbf{y}_k \\right\\} $ are both bases of a subspace $ U $ of $ \\mathbb{R}^n $, then $ m = k $.
`
    },
    {
        type: "Definition",
        title: "Dimension of a Subspace of $ \\mathbb{R}^n $",
        latex: `
If $ U $ is a subspace of $ \\mathbb{R}^n $ and $ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_m \\right\\} $ is any basis of $ U $, the number $ m $ of vectors in the basis is called the dimension of $ U $. This is denoted by:
    \\[ \\dim U = m \\]
`
    },
    {
        type: "Note",
        title: "",
        latex: `
We define:
    \\[ \\dim \\left\\{ \\mathbf{0} \\right\\} = 0 \\]
    This means that $ \\left\\{ \\mathbf{0} \\right\\} $ has a basis containing no vectors. This makes sense since $ \\mathbf{0} $ cannot belong to any independent set.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ U \\neq \\left\\{ \\mathbf{0} \\right\\} $ be a subspace of $ \\mathbb{R}^n $. Then,
    <ol>
<li>$ U $ has a basis, and $ \\dim U \\leq n $</li>
<li>Any independent set in $ U $ can be enlarged (by adding vectors from any fixed basis of $ U $) to a basis of $ U $</li>
<li>Any spanning set for $ U $ can be cut down (by deleting vectors) to a basis of $ U $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ U $ be a subspace of $ \\mathbb{R}^n $ where $ \\dim U = m $ and let $ B = \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_m \\right\\} $ be a set of $ m $ vectors in $ U $. Then, $ B $ is independent iff $ B $ spans $ U $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ U \\subseteq W $ be subspaces of $ \\mathbb{R}^n $. Then,
    <ol>
<li>$ \\dim U \\leq \\dim W $</li>
<li>If $ \\dim U = \\dim W $, then $ U = W $</li>
</ol>
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
It follows from the previous theorem that if $ U $ is a subspace of $ \\mathbb{R}^n $, then $ \\dim U \\in \\left\\{ 0, 1, 2, \\dots, n \\right\\} $ and
    \\[ \\dim U = 0 \\quad \\Longleftrightarrow \\quad U = \\left\\{ \\mathbf{0} \\right\\} \\]
    \\[ \\dim U = n \\quad \\Longleftrightarrow \\quad U = \\mathbb{R}^n \\]
    The other subspaces of $ \\mathbb{R}^n $ are called proper.
`
    },
    {
        type: "Definition",
        title: "Length in $ \\mathbb{R}^n $",
        latex: `
The length of a vector $ \\mathbf{x} $, denoted $ \\lVert \\mathbf{x} \\rVert $, is defined by:
    \\[ \\lVert \\mathbf{x} \\rVert = \\sqrt{\\mathbf{x} \\cdot \\mathbf{x}} = \\sqrt{x_1^2 + x_2^2 + \\dots + x_n^2 } \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ \\mathbf{x}, \\mathbf{y}, \\mathbf{z} \\in \\mathbb{R}^n $, then:
    <ol>
<li>$ \\mathbf{x} \\cdot \\mathbf{y} = \\mathbf{y} \\cdot \\mathbf{x} $</li>
<li>$ \\mathbf{x} \\cdot \\left( \\mathbf{y} + \\mathbf{z} \\right) = \\mathbf{x} \\cdot \\mathbf{y} + \\mathbf{x} \\cdot \\mathbf{z} $</li>
<li>$ \\left( a \\mathbf{x} \\right) \\cdot \\mathbf{y} = a \\left( \\mathbf{x} \\cdot \\mathbf{y} \\right) = \\mathbf{x} \\cdot \\left( a \\mathbf{y} \\right) \\ \\forall a \\in \\mathbb{R} $</li>
<li>$ \\lVert \\mathbf{x} \\rVert^2 = \\mathbf{x} \\cdot \\mathbf{x} $</li>
<li>$ \\lVert \\mathbf{x} \\rVert \\geq 0 $, and $ \\lVert \\mathbf{x} \\rVert = 0 $ iff $ \\mathbf{x} = \\mathbf{0} $</li>
<li>$ \\lVert a \\mathbf{x} \\rVert = \\lvert a \\rvert \\lVert \\mathbf{x} \\rVert \\ \\forall a \\in \\mathbb{R} $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Cauchy Inequality",
        latex: `
If $ \\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^n $, then
    \\[ \\lvert \\mathbf{x} \\cdot \\mathbf{y} \\rvert \\leq \\lVert \\mathbf{x} \\rVert \\lVert \\mathbf{y} \\rVert \\]
    Moreover, $ \\lvert \\mathbf{x} \\cdot \\mathbf{y} \\rvert = \\lVert \\mathbf{x} \\rVert \\lVert \\mathbf{y} \\rVert $ iff one of $ \\mathbf{x} $ and $ \\mathbf{y} $ is a multiple of the other.
    \\medskip
    \\newline
    The Cauchy inequality is equivalent to $ \\left( \\mathbf{x} \\cdot \\mathbf{y} \\right)^2 \\leq \\lVert \\mathbf{x} \\rVert^2 \\lVert \\mathbf{y} \\rVert^2 $
`
    },
    {
        type: "Corollary",
        title: "Triangle Inequality",
        latex: `
If $ \\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^n $, then $ \\lVert \\mathbf{x} + \\mathbf{y} \\rVert \\leq \\lVert \\mathbf{x} \\rVert + \\lVert \\mathbf{y} \\rVert $.
`
    },
    {
        type: "Definition",
        title: "Distance in $ \\mathbb{R}^n $",
        latex: `
If $ \\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^n $, we define the distance function $ d \\left( \\mathbf{x}, \\mathbf{y} \\right) $ between $ \\mathbf{x} $ and $ \\mathbf{y} $ by
    \\[ d \\left( \\mathbf{x}, \\mathbf{y} \\right) = \\lVert \\mathbf{x} - \\mathbf{y} \\rVert \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ \\mathbf{x}, \\mathbf{y}, \\mathbf{z} \\in \\mathbb{R}^n $, we have:
    <ol>
<li>$ d \\left( \\mathbf{x}, \\mathbf{y} \\right) \\geq 0 $</li>
<li>$ d \\left( \\mathbf{x}, \\mathbf{y} \\right) = 0 \\ \\text{iff} \\ \\mathbf{x} = \\mathbf{y} $</li>
<li>$ d \\left( \\mathbf{x}, \\mathbf{y} \\right) = d \\left( \\mathbf{y}, \\mathbf{x} \\right) $</li>
<li>$ d \\left( \\mathbf{x}, \\mathbf{z} \\right) \\leq d \\left( \\mathbf{x}, \\mathbf{y} \\right) + d \\left( \\mathbf{y}, \\mathbf{z} \\right) $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Orthogonal and Orthonormal Sets in $ \\mathbb{R}^n $",
        latex: `
We say that two vectors $ \\mathbf{x} $ and $ \\mathbf{y} \\in \\mathbb{R}^n $ are orthogonal if $ \\mathbf{x} \\cdot \\mathbf{y} = 0 $. More generally, a set $ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k \\right\\} $ of vectors in $ \\mathbb{R}^n $ is called an orthogonal set if
    \\[ \\mathbf{x}_i \\cdot \\mathbf{x}_j = 0 \\ \\forall \\ i \\neq j \\quad \\text{and} \\quad \\mathbf{x}_i \\neq \\mathbf{0} \\ \\forall \\ i \\]
    Note that $ \\left\\{ \\mathbf{x} \\right\\} $ is an orthogonal set if $ \\mathbf{x} \\neq \\mathbf{0} $. A set $ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k \\right\\} $ of vectors in $ \\mathbb{R}^n $ is called orthonormal if it is orthogonal and each $ \\mathbf{x}_i $ is a unit vector.
`
    },
    {
        type: "Theorem",
        title: "Normalizing an Orthogonal Set",
        latex: `
If $ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k \\right\\} $ is an orthogonal set, then $ \\left\\{ \\frac{1}{\\lVert \\mathbf{x}_1 \\rVert} \\mathbf{x}_1, \\frac{1}{\\lVert \\mathbf{x}_2\\rVert} \\mathbf{x}_2, \\dots, \\frac{1}{\\lVert \\mathbf{x}_k \\rVert} \\mathbf{x}_k \\right\\} $ is an orthonormal set, and we say that is the result of normalizing the orthogonal set $ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k \\right\\} $.
`
    },
    {
        type: "Theorem",
        title: "Pythagoras' Theorem in $ \\mathbb{R}^n $",
        latex: `
If $ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k \\right\\} $ is an orthogonal set in $ \\mathbb{R}^n $, then
    \\[ \\lVert \\mathbf{x}_1 + \\mathbf{x}_2 + \\dots + \\mathbf{x}_k \\rVert^2 = \\lVert \\mathbf{x}_1 \\rVert^2 + \\lVert \\mathbf{x}_2 \\rVert^2 + \\dots + \\lVert \\mathbf{x}_k \\rVert^2 \\]
`
    },
    {
        type: "Theorem",
        title: "Expansion Theorem in $ \\mathbb{R}^n $",
        latex: `
Let $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_m \\right\\} $ be an orthogonal basis of a subspace $ U $ of $ \\mathbb{R}^n $. If $ \\mathbf{x} $ is any vector in $ U $, we have
    \\[ \\mathbf{x} = \\left( \\frac{\\mathbf{x} \\cdot \\mathbf{f}_1}{\\lVert \\mathbf{f}_1 \\rVert^2} \\right) \\mathbf{f}_1 + \\left( \\frac{\\mathbf{x} \\cdot \\mathbf{f}_2}{\\lVert \\mathbf{f}_2 \\rVert^2} \\right) \\mathbf{f}_2 + \\dots + \\left( \\frac{\\mathbf{x} \\cdot \\mathbf{f}_m}{\\lVert \\mathbf{f}_m \\rVert^2} \\right) \\mathbf{f}_m \\]
    The expansion of $ \\mathbf{x} $ as a linear combination of the orthogonal basis $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_m \\right\\} $ is called the Fourier expansion of $ \\mathbf{x} $ and the coefficients $ t_i = \\frac{\\mathbf{x} \\cdot \\mathbf{f}_i}{\\lVert \\mathbf{f}_i \\rVert^2 } $ are called the Fourier coefficients.
`
    },
    {
        type: "Definition",
        title: "Column and Row Space of a Matrix",
        latex: `
The column space, denoted $ \\operatorname{col} A $, of $ A $ is the subspace of $ \\mathbb{R}^m $ spanned by the columns of $ A $.
    \\medskip
    \\newline
    The row space, denoted $ \\operatorname{row} A $, of $ A $ is the subspace of $ \\mathbb{R}^n $ spanned by the rows of $ A $.
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
Let $ A $ and $ B $ denote $ m \\times n $ matrices.
    <ol>
<li>If $ A \\to B $ by elementary row operations, then $ \\operatorname{row} A = \\operatorname{row} B $</li>
<li>If $ A \\to B $ by elementary column operations, then $ \\operatorname{col} A = \\operatorname{col} B $</li>
</ol>
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
If $ R $ is a row-echelon matrix, then:
    <ol>
<li>The nonzero rows of $ R $ are a basis of $ \\operatorname{row} R $</li>
<li>The columns of $ R $ containing leading ones are a basis of $ \\operatorname{col} R $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Rank Theorem",
        latex: `
Let $ A $ denote any $ m \\times n $ matrix of rank $ r $. Then,
    \\[ \\dim \\left( \\operatorname{col} A \\right) = \\dim \\left( \\operatorname{row} A \\right) = r \\]
    Moreover, if $ A $ is carried to a row-echelon matrix $ R $ by row operations, then
    <ol>
<li>The $ r $ nonzero rows of $ R $ are a basis of $ \\operatorname{row} A $</li>
<li>If the leading $ 1 $s lie in columns $ j_1, j_2, \\dots, j_r $ of $ R $, then columns $ j_1, j_2, \\dots, j_r $ of $ A $ are a basis of $ \\operatorname{col} A $</li>
</ol>
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
If $ A $ is any matrix, then $ \\operatorname{rank} A = \\operatorname{rank} \\left( A^T \\right) $.
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
If $ A $ is an $ m \\times n $ matrix, then $ \\operatorname{rank} A \\leq m $ and $ \\operatorname{rank} A \\leq n $.
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
If $ A $ is an $ m \\times n $ matrix, $ U $ is an $ m \\times m $ invertible matrix, and $ V $ is an $ n \\times n $ invertible matrix, then:
    \\[ \\operatorname{rank} A = \\operatorname{rank} \\left( UA \\right) = \\operatorname{rank} \\left( AV \\right) \\]
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
Let $ A, U, V $ be matrices of sizes $ m \\times n $, $ p \\times m $, and $ n \\times q $ respectively.
    <ol>
<li>$ \\operatorname{col} \\left( AV \\right) \\subseteq \\operatorname{col} A $, with equality if $ V V' = I_n $ for some $ V' $</li>
<li>$ \\operatorname{row} \\left( UA \\right) \\subseteq \\operatorname{row} A $, with equality if $ U' U = I_m $ for some $ U' $</li>
</ol>
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
If $ A $ is $ m \\times n $ and $ B $ is $ n \\times m $, then $ \\operatorname{rank} \\left( AB \\right) \\leq \\operatorname{rank} A $ and $ \\operatorname{rank} \\left( AB \\right) \\leq \\operatorname{rank} B $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ A $ denote an $ m \\times n $ matrix of rank $ r $. Then,
    <ol>
<li>The $ n - r $ basic solutions to the system $ A \\mathbf{x} = \\mathbf{0} $ provided by the Gaussian algorithm are a basis of $ \\operatorname{null} A $, so $ \\dim \\left( \\operatorname{null} A \\right) = n - r $</li>
<li>The rank theorem provides a basis of $ \\operatorname{im} A = \\operatorname{col} A $, and $ \\dim \\left( \\operatorname{im} A \\right) = r $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
The following are equivalent for an $ m \\times n $ matrix $ A $:
    <ol>
<li>$ \\operatorname{rank} A = n $</li>
<li>The rows of $ A $ span $ \\mathbb{R}^n $</li>
<li>The columns of $ A $ are linearly independent in $ \\mathbb{R}^m $</li>
<li>The $ n \\times n $ matrix $ A^T A $ is invertible</li>
<li>$ CA = I_n $ for some $ n \\times m $ matrix $ C $</li>
<li>If $ A \\mathbf{x} = \\mathbf{0} $, $ \\mathbf{x} \\in \\mathbb{R}^n $, then $ \\mathbf{x} = \\mathbf{0} $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
The following are equivalent for an $ m \\times n $ matrix $ A $:
    <ol>
<li>$ \\operatorname{rank} A = m $</li>
<li>The columns of $ A $ span $ \\mathbb{R}^m $</li>
<li>The rows of $ A $ are linearly independent in $ \\mathbb{R}^n $</li>
<li>The $ m \\times m $ matrix $ A A^T $ is invertible</li>
<li>$ AC = I_m $ for some $ n \\times m $ matrix $ C $</li>
<li>The system $ A \\mathbf{x} = \\mathbf{b} $ is consistent for every $ \\mathbf{b} $ in $ \\mathbb{R}^m $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Similar Matrices",
        latex: `
If $ A $ and $ B $ are $ n \\times n $ matrices, we say that $ A $ and $ B $ are similar, and write $ A \\sim B $, if $ B = P^{-1} A P $ for some invertible matrix $ P $.
    \\medskip
    \\newline
    If $ A \\sim B $, then necessarily $ B \\sim A $. To see why, suppose that $ B = P^{-1} A P $. Then $ A = P B P^{-1} = Q^{-1} B Q $ where $ Q = P^{-1} $ is invertible. This proves the second of the following properties of similarity:
    <ol>
<li>$ A \\sim A $ for all square matrices $ A $</li>
<li>If $ A \\sim B $, then $ B \\sim A $</li>
<li>If $ A \\sim B $ and $ B \\sim C $, then $ A \\sim C $</li>
</ol>
    These properties say that the similarity relation $ \\sim $ is an equivalence relation on the set of $ n \\times n $ matrices.
`
    },
    {
        type: "Note",
        title: "",
        latex: `
Similarity is compatible with inverses, transposes and powers:
    \\[ \\text{If } A \\sim B \\text{ then } A^{-1} \\sim B^{-1}, \\quad A^T \\sim B^T, \\quad \\text{and} \\quad A^k \\sim B^k \\ \\forall \\ k \\in \\mathbb{Z}^+ \\]
`
    },
    {
        type: "Definition",
        title: "Trace of a Matrix",
        latex: `
The trace of an $ n \\times n $ matrix $ A $, denoted $ \\operatorname{tr} A $, is defined to be the sum of the main diagonal elements of $ A $. That is, if $ A = \\left[ a_{ij} \\right] $, then $ \\operatorname{tr} A = a_{11} + a_{22} + \\dots + a_{nn} $.
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
Let $ A $ and $ B $ be $ n \\times n $ matrices. Then $ \\operatorname{tr} \\left( AB \\right) = \\operatorname{tr} \\left( BA \\right) $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ A $ and $ B $ are similar $ n \\times n $ matrices, then $ A $ and $ B $ have the same determinant, rank, trace, characteristic polynomial, and eigenvalues.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ A $ be an $ n \\times n $ matrix.
    <ol>
<li>The eigenvalues $ \\lambda $ of $ A $ are the roots of the characteristic polynomial $ c_A \\left( x \\right) $ of $ A $</li>
<li>The $ \\lambda $-eigenvectors $ \\mathbf{x} $ are the nonzero solutions to the homogeneous system
        \\[ \\left( \\lambda I - A \\right) \\mathbf{x} = \\mathbf{0} \\]</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ A $ be an $ n \\times n $ matrix.
    <ol>
<li>$ A $ is diagonalizable iff $ \\mathbb{R}^n $ has a basis $ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_n \\right\\} $ consisting of eigenvectors of $ A $</li>
<li>When this is the case, the matrix $ P = \\begin{bmatrix} \\ \\mathbf{x}_1 & \\mathbf{x}_2 & \\cdots & \\mathbf{x}_n \\ \\end{bmatrix} $ is invertible and $ P^{-1} A P = \\operatorname{diag} \\left( \\lambda_1, \\lambda_2, \\dots, \\lambda_n \\right) $ where, for each $ i $, $ \\lambda_i $ is the eigenvalue of $ A $ corresponding to $ \\mathbf{x}_i $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k $ be eigenvectors corresponding to distinct eigenvalues $ \\lambda_1, \\lambda_2, \\dots, \\lambda_k $ of an $ n \\times n $ matrix $ A $. Then $ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k \\right\\} $ is a linearly independent set.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ A $ is an $ n \\times n $ matrix with $ n $ distinct eigenvalues, then $ A $ is diagonalizable.
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
Let $ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k \\right\\} $ be a linearly independent set of eigenvectors of an $ n \\times n $ matrix $ A $, extend it to a basis $ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k, \\dots, \\mathbf{x}_n \\right\\} $ of $ \\mathbb{R}^n $, and let
    \\[ P = \\begin{bmatrix} \\ \\mathbf{x}_1 & \\mathbf{x}_2 & \\cdots & \\mathbf{x}_n \\ \\end{bmatrix} \\]
    be the (invertible) $ n \\times n $ matrix with the $ \\mathbf{x}_i $ as its columns. If $ \\lambda_1, \\lambda_2, \\dots, \\lambda_k $ are the (not necessarily distinct) eigenvalues of $ A $ corresponding to $ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k $ respectively, then $ P^{-1} A P $ has block form
    \\[ P^{-1} A P = \\begin{bmatrix} \\ \\operatorname{diag} \\left( \\lambda_1, \\lambda_2, \\dots, \\lambda_k \\right) & B \\ \\\\ 0 & A_1 \\end{bmatrix} \\]
    where $ B $ has size $ k \\times \\left( n - k \\right) $ and $ A_1 $ has size $ \\left( n - k \\right) \\times \\left( n - k \\right) $.
    \\medskip
    \\newline
    Note that this lemma with $ k = n $ shows that an $ n \\times n $ matrix $ A $ is diagonalizable if $ \\mathbb{R}^n $ has a basis of eigenvectors of $ A $.
`
    },
    {
        type: "Definition",
        title: "Eigenspace of a Matrix",
        latex: `
If $ \\lambda $ is an eigenvalue of an $ n \\times n $ matrix $ A $, define the eigenspace of $ A $ corresponding to $ \\lambda $ by:
    \\[ E_\\lambda \\left( A \\right) = \\left\\{ \\mathbf{x} \\in \\mathbb{R}^n \\mid A \\mathbf{x} = \\lambda \\mathbf{x} \\right\\} \\]
    Recall the multiplicity of an eigenvalue $ \\lambda $ of $ A $ is the number of times $ \\lambda $ occurs as a root of the characteristic polynomial $ c_A \\left( x \\right) $ of $ A $. In other words, the multiplicity of $ \\lambda $ is the largest integer $ m \\geq 1 $ such that
    \\[ c_A \\left( x \\right) = \\left( x - \\lambda \\right)^m g \\left( x \\right) \\]
    for some polynomial $ g \\left( x \\right) $.
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
Let $ \\lambda $ be an eigenvalue of multiplicity $ m $ of a square matrix $ A $. Then $ \\dim \\left( E_\\lambda \\left( A \\right) \\right) \\leq m $.
`
    },
    {
        type: "Note",
        title: "",
        latex: `
When does $ \\dim \\left( E_\\lambda \\left( A \\right) \\right) = m $ for each eigenvalue $ \\lambda $? It turns out that this characterizes the diagonalizable $ n \\times n $ matrices $ A $ for which $ c_A \\left( x \\right) $ factors completely over $ \\mathbb{R} $. By this we mean that $ c_A \\left( x \\right) = \\left( x - \\lambda_1 \\right) \\left( x - \\lambda_2 \\right) \\cdots \\left( x - \\lambda_n \\right) $, where the $ \\lambda_i $ are real numbers (not necessarily distinct). In other words, every eigenvalue of $ A $ is real.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
The following are equivalent for a square matrix $ A $ for which $ c_A \\left( x \\right) $ factors completely.
    <ol>
<li>$ A $ is diagonalizable</li>
<li>$ \\dim \\left( E_\\lambda \\left( A \\right) \\right) $ equals the multiplicity of $ \\lambda $ for every eigenvalue $ \\lambda $ of the matrix $ A $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Vector Spaces",
        latex: `
A vector space consists of a nonempty set $ V $ of objects (called vectors) that can be added, multiplied by a real number, and for which certain axioms hold. If $ \\mathbf{u} $ and $ \\mathbf{v} $ are two vectors in $ V $, their sum is expressed as $ \\mathbf{u} + \\mathbf{v} $, and the scalar product of $ \\mathbf{v} $ by a real number $ a $ is denoted as $ a \\mathbf{v} $. These axioms are called vector addition and scalar multiplication, respectively. The following axioms are assumed to hold.
    \\medskip
    \\newline
    Axioms for vector addition
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) If $ \\mathbf{u} $ and $ \\mathbf{v} $ are in $ V $, then $ \\mathbf{u} + \\mathbf{v} $ is in $ V $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\mathbf{u} + \\mathbf{v} = \\mathbf{v} + \\mathbf{u} $ for all $ \\mathbf{u} $ and $ \\mathbf{v} $ in $ V $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ \\mathbf{u} + \\left( \\mathbf{v} + \\mathbf{w} \\right) = \\left( \\mathbf{u} + \\mathbf{v} \\right) + \\mathbf{w} $ for all $ \\mathbf{u} $, $ \\mathbf{v} $ and $ \\mathbf{w} $ in $ V $</li>
<li style="list-style-type: none; margin-left: -15px;">(iv) An element $ \\mathbf{0} $ in $ V $ exists such that $ \\mathbf{v} + \\mathbf{0} = \\mathbf{0} + \\mathbf{v} = \\mathbf{v} $ for every $ \\mathbf{v} $ in $ V $</li>
<li style="list-style-type: none; margin-left: -15px;">(v) For each $ \\mathbf{v} $ in $ V $, an element $ -\\mathbf{v} $ in $ V $ exists such that $ -\\mathbf{v} + \\mathbf{v} = \\mathbf{0} $ and $ \\mathbf{v} + \\left( -\\mathbf{v} \\right) = \\mathbf{0} $</li>
</ol>
    Axioms for scalar multiplication
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) If $ \\mathbf{v} $ is in $ V $, then $ a \\mathbf{v} $ is in $ V $ for all $ a $ in $ \\mathbb{R} $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ a \\left( \\mathbf{v} + \\mathbf{w} \\right) = a \\mathbf{v} + a \\mathbf{w} $ for all $ \\mathbf{v} $ and $ \\mathbf{w} $ in $ V $ and all $ a $ in $ \\mathbb{R} $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ \\left( a + b \\right) \\mathbf{v} = a \\mathbf{v} + b \\mathbf{v} $ for all $ \\mathbf{v} $ in $ V $ and all $ a $ and $ b $ in $ \\mathbb{R} $</li>
<li style="list-style-type: none; margin-left: -15px;">(iv) $ a \\left( b \\mathbf{v} \\right) = \\left( ab \\right) \\mathbf{v} $ for all $ \\mathbf{v} $ in $ V $ and all $ a $ and $ b $ in $ \\mathbb{R} $</li>
<li style="list-style-type: none; margin-left: -15px;">(v) $ 1 \\mathbf{v} = \\mathbf{v} $ for all $ \\mathbf{v} $ in $ V $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Polynomials",
        latex: `
The set $ \\mathbf{P} $ of all polynomials is a vector space with addition and scalar multiplication defined as follows for $ p \\left( x \\right) = a_0 + a_1 x + a_2 x^2 + \\dots $ and $ q \\left( x \\right) = b_0 + b_1 x + b_2 x^2 + \\dots $:
    \\[ p \\left( x \\right) + q \\left( x \\right) = \\left( a_0 + b_0 \\right) + \\left( a_1 + b_1 \\right) x + \\left( a_2 + b_2 \\right) x^2 + \\dots \\]
    \\[ a p(x) = a a_0 + \\left( a a_1 \\right) x + \\left( a a_2 \\right) x^2 + \\dots \\]
    The zero vector is the zero polynomial, and the negative of a polynomial $ p \\left( x \\right) = a_0 + a_1 x + a_2 x^2 + \\dots $ is the polynomial $ -p \\left( x \\right) = - a_0 - a_1 x - a_2 x^2 - \\dots $ obtained by negating all the coefficients.
`
    },
    {
        type: "Definition",
        title: "Polynomials of a Given Degree",
        latex: `
Given $ n \\geq 1 $, let $ \\mathbf{P}_n $ denote the set of all polynomials of degree at most $ n $, together with the zero polynomial. That is
    \\[ \\mathbf{P}_n = \\left\\{ a_0 + a_1 x + a_2 x^2 + \\dots + a_n x^n \\mid a_0, a_1, a_2, \\dots, a_n \\in \\mathbb{R} \\right\\} \\]
    Then $ \\mathbf{P}_n $ is a vector space.
`
    },
    {
        type: "Definition",
        title: "Functions over an Interval",
        latex: `
The set $ \\mathbf{F} \\left[ a , b \\right] $ of all functions on the interval $ \\left[ a, b \\right] $ is a vector space using pointwise addition ($ \\left( f + g \\right) \\left( x \\right) = f \\left( x \\right) + g \\left( x \\right) \\ \\forall x \\in \\left[ a, b \\right] $) and scalar multiplication ($ \\left( rf \\right) \\left( x \\right) = r f \\left( x \\right) \\ \\forall x \\in \\left[ a, b \\right] $). The zero function denoted $ 0 $ is the constant function defined by
    \\[ 0 \\left( x \\right) = 0 \\ \\forall x \\in \\left[ a, b \\right] \\]
    The negative of a function $ f $ is denoted $ -f $ and has action defined by
    \\[ \\left( -f \\right) \\left( x \\right) = - f \\left( x \\right) \\ \\forall x \\in \\left[ a, b \\right] \\]
`
    },
    {
        type: "Theorem",
        title: "Cancellation",
        latex: `
Let $ \\mathbf{u} $, $ \\mathbf{v} $, and $ \\mathbf{w} $ be vectors in a vector space $ V $. If $ \\mathbf{v} + \\mathbf{u} = \\mathbf{v} + \\mathbf{w} $, then $ \\mathbf{u} = \\mathbf{w} $.
`
    },
    {
        type: "Definition",
        title: "Difference",
        latex: `
We define the difference $ \\mathbf{u} - \\mathbf{v} $ of two vectors in $ V $ as
    \\[ \\mathbf{u} - \\mathbf{v} = \\mathbf{u} + \\left( -\\mathbf{v} \\right) \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ \\mathbf{u} $ and $ \\mathbf{v} $ are vectors in a vector space $ V $, the equation
    \\[ \\mathbf{x} + \\mathbf{v} = \\mathbf{u} \\]
    has one and only one solution $ \\mathbf{x} $ in $ V $ given by
    \\[ \\mathbf{x} = \\mathbf{u} - \\mathbf{v} \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ \\mathbf{v} $ denote a vector in a vector space $ V $ and let $ a $ denote a real number
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ 0 \\mathbf{v} = \\mathbf{0} $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ a \\mathbf{0} = \\mathbf{0} $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) If $ a \\mathbf{v} = \\mathbf{0} $, then either $ a = 0 $ or $ \\mathbf{v} = \\mathbf{0} $</li>
<li style="list-style-type: none; margin-left: -15px;">(iv) $ \\left( -1 \\right) \\mathbf{v} = -\\mathbf{v} $</li>
<li style="list-style-type: none; margin-left: -15px;">(v) $ \\left( -a \\right) \\mathbf{v} = - \\left( a \\mathbf{v} \\right) = a \\left( -\\mathbf{v} \\right) $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Subspaces of a Vector Space",
        latex: `
If $ V $ is a vector space, a nonempty subset $ U \\subseteq V $ is called a subspace of $ V $ if $ U $ is itself a vector space using the addition and scalar multiplication of $ V $.
`
    },
    {
        type: "Theorem",
        title: "Subspace Test",
        latex: `
A subset $ U $ of a vector space is a subspace of $ V $ if and only if it satisfies the following three conditions:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\mathbf{0} $ lies in $ U $ where $ \\mathbf{0} $ is the zero vector of $ V $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) If $ \\mathbf{u}_1 $ and $ \\mathbf{u}_2 $ are in $ U $, then $ \\mathbf{u}_1 + \\mathbf{u}_2 $ is also in $ U $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) If $ \\mathbf{u} $ is in $ U $, then $ a \\mathbf{u} $ is in $ U $ for each scalar $ a $</li>
</ol>
`
    },
    {
        type: "Note",
        title: "",
        latex: `
If $ V $ is any vector space, both $ \\left\\{ \\mathbf{0} \\right\\} $ and $ V $ are subspaces of $ V $. The vector space $ \\left\\{ \\mathbf{0} \\right\\} $ is called the zero subspace of $ V $.
`
    },
    {
        type: "Definition",
        title: "$ m \\times n $ Matrices",
        latex: `
The set $ \\mathbf{M}_{mn} $ of all $ m \\times n $ matrices is a vector space where addition and scalar multiplication are the standard definitions for matrices.
`
    },
    {
        type: "Definition",
        title: "Evaluation",
        latex: `
Suppose $ p \\left( x \\right) $ is a polynomial and $ a $ is a number. Then the number $ p \\left( a \\right) $ obtained by replacing $ x $ by $ a $ in the expression for $ p \\left( x \\right) $ is called the evaluation of $ p \\left( x \\right) $ at $ a $. If $ p \\left( a \\right) = 0 $, the number $ a $ is called a root of $ p \\left( x \\right) $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
$ \\mathbf{P}_n $ is a subspace of $ \\mathbf{P} $ for each $ n \\geq 0 $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
The subset $ \\mathbf{D} \\left[ a, b \\right] $ of all differentiable functions on $ \\left[ a, b \\right] $ is a subspace of the vector space $ \\mathbf{F} \\left[ a, b \\right] $.
`
    },
    {
        type: "Definition",
        title: "Linear Combinations and Spanning",
        latex: `
Let $ \\left\\{ \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n \\right\\} $ be a set of vectors in a vector space $ V $. As in $ \\mathbb{R}^n $, a vector $ \\mathbf{v} $ is called a linear combination of the vectors $ \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n $ if it can be expressed in the form
    \\[ \\mathbf{v} = a_1 \\mathbf{v}_1 + a_2 \\mathbf{v}_2 + \\dots + a_n \\mathbf{v}_n \\]
    where $ a_1, a_2, \\dots, a_n $ are scalars, called the coefficients of $ \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n $. The set of all linear combinations of these vectors is called their span, and is denoted by
    \\[ \\operatorname{span} \\left\\{ \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n \\right\\} = \\left\\{ a_1 \\mathbf{v}_1 + a_2 \\mathbf{v}_2 + \\dots + a_n \\mathbf{v}_n \\mid a_i \\in \\mathbb{R} \\right\\} \\]
    If it happens that $ V = \\operatorname{span} \\left\\{ \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n \\right\\} $, these vectors are called a spanning set for $ V $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ U = \\operatorname{span} \\left\\{ \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n \\right\\} $ in a vector space $ V $. Then:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ U $ is subspace of $ V $ containing each of $ \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ U $ is the "smallest" subspace containing these vectors in the sense that any subspace that contains each of $ \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n $ must contain $ U $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Linear Independence and Dependence",
        latex: `
As in $ \\mathbb{R}^n $, a set of vectors $ \\left\\{ \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n \\right\\} $ in a vector space $ V $ is called linearly independent if it satisfies the following condition:
    \\[ \\text{If } s_1 \\mathbf{v}_1 + s_2 \\mathbf{v}_2 + \\dots + s_n \\mathbf{v}_n = \\mathbf{0}, \\quad \\text{then} \\quad s_1 = s_2 = \\dots = s_n = 0 \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ \\left\\{ \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n \\right\\} $ be a linearly independent set of vectors in a vector space $ V $. If a vector $ \\mathbf{v} $ has two representations:
    \\[ \\mathbf{v} = s_1 \\mathbf{v}_1 + s_2 \\mathbf{v}_2 + \\dots + s_n \\mathbf{v}_n \\]
    \\[ \\mathbf{v} = t_1 \\mathbf{v}_1 + t_2 \\mathbf{v}_2 + \\dots + t_n \\mathbf{v}_n \\]
    as a linear combination of these vectors, then $ s_1 = t_1 $, $ s_2 = t_2 $, $ \\dots $, $ s_n = t_n $. In other words, every vector in $ V $ can be written in a unique way as a linear combination of the $ \\mathbf{v}_i $.
`
    },
    {
        type: "Theorem",
        title: "Fundamental Theorem",
        latex: `
Suppose a vector space $ V $ can be spanned by $ n $ vectors. If any set of $ m $ vectors in $ V $ is linearly independent, then $ m \\leq n $.
`
    },
    {
        type: "Definition",
        title: "Basis of a Vector Space",
        latex: `
As in $ \\mathbb{R}^n $, a set $ \\left\\{ \\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n \\right\\} $ of vectors in a vector space $ V $ is called a basis of $ V $ if it satisfies the two following conditions:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\left\\{ \\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n \\right\\} $ is linearly independent</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ V = \\operatorname{span} \\left\\{ \\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n \\right\\} $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Invariance Theorem",
        latex: `
Let $ \\left\\{ \\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n \\right\\} $ and $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_m \\right\\} $ be two bases of a vector space $ V $. Then $ n = m $.
`
    },
    {
        type: "Definition",
        title: "Dimension of a Vector Space",
        latex: `
If $ \\left\\{ \\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n \\right\\} $ is a basis of the nonzero vector space $ V $, the number $ n $ of vectors in the basis is called the dimension of $ V $, and we write
    \\[ \\dim V = n \\]
    The zero vector space $ \\left\\{ \\mathbf{0} \\right\\} $ is defined to have dimension 0:
    \\[ \\dim \\left\\{ \\mathbf{0} \\right\\} = 0 \\]
`
    },
    {
        type: "Note",
        title: "",
        latex: `
The space $ \\mathbf{M}_{mn} $ has dimension $ mn $, and one basis consists of all $ m \\times n $ matrices with exactly one entry equal to 1 and all other entries equal to 0. We call this the standard basis of $ \\mathbf{M}_{mn} $.
`
    },
    {
        type: "Note",
        title: "",
        latex: `
The space $ \\mathbf{P}_n $ has dimension $ n + 1 $. The standard basis of this space is $ \\left\\{ 1, x, x^2, \\dots, x^n \\right\\} $.
`
    },
    {
        type: "Lemma",
        title: "Independent Lemma",
        latex: `
Let $ \\left\\{ \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k \\right\\} $ be an independent set of vectors in a vector space $ V $. If $ \\mathbf{u} \\in V $ but $ \\mathbf{u} \\notin \\operatorname{span} \\left\\{ \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k \\right\\} $, then $ \\left\\{ \\mathbf{u}, \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k \\right\\} $ is also independent.
`
    },
    {
        type: "Definition",
        title: "Finite Dimensional and Infinite Dimensional Vector Spaces",
        latex: `
A vector space $ V $ is called finite dimensional if it is spanned by a finite set of vectors. Otherwise, $ V $ is called infinite dimensional.
`
    },
    {
        type: "Note",
        title: "",
        latex: `
The zero vector space $ \\left\\{ \\mathbf{0} \\right\\} $ is finite dimensional because $ \\left\\{ \\mathbf{0} \\right\\} $ is a spanning set.
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
Let $ V $ be a finite dimensional vector space. If $ U $ is any subspace of $ V $, then any independent subset of $ U $ can be enlarged to a finite basis of $ U $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ V $ be a finite dimensional vector space spanned by $ m $ vectors.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ V $ has a finite basis, and $ \\dim V \\leq m $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) Every independent set of vectors in $ V $ can be enlarged to a basis of $ V $ by adding vectors from any fixed basis of $ V $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) If $ U $ is a subspace of $ V $, then
        <ol>
</li>
<li style="list-style-type: none; margin-left: -15px;">(iv) $ U $ is finite dimensional and $ \\dim U \\leq \\dim V $</li>
<li style="list-style-type: none; margin-left: -15px;">(v) If $ \\dim U = \\dim V $ then $ U = V $</li>
</ol>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ U $ and $ W $ be subspaces of the finite dimensional space $ V $
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) If $ U \\subseteq W $, then $ \\dim U \\leq \\dim W $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) If $ U \\subseteq W $ and $ \\dim U = \\dim W $, then $ U = W $</li>
</ol>
`
    },
    {
        type: "Lemma",
        title: "Independent Lemma",
        latex: `
A set $ D = \\left\\{ \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k \\right\\} $ of vectors in a vector space $ V $ is dependent if and only if some vector in $ D $ is a linear combination of the others.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ V $ be a finite dimensional vector space. Any spanning set for $ V $ can be cut down (by deleting vectors) to a basis of $ V $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ V $ be a vector space with $ \\dim V = n $, and suppose $ S $ is a set of exactly $ n $ vectors in $ V $. Then $ S $ is independent if and only if $ S $ spans $ V $.
`
    },
    {
        type: "Definition",
        title: "Sum and Intersection",
        latex: `
If $ U $ and $ W $ are subspaces of $ V $, their sum $ U + W $ and their intersection $ U \\cap W $ are:
    \\[ U + W = \\left\\{ \\mathbf{u} + \\mathbf{w} \\mid \\mathbf{u} \\in U \\ \\text{and} \\ \\mathbf{w} \\in W \\right\\} \\]
    \\[ U \\cap W = \\left\\{ \\mathbf{v} \\mid \\mathbf{v} \\in U \\ \\text{and} \\ \\mathbf{v} \\in W \\right\\} \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Suppose that $ U $ and $ W $ are finite dimensional subspaces of a vector space $ V $. Then $ U + W $ is finite dimensional, and
    \\[ \\dim \\left( U + W \\right) = \\dim U + \\dim W - \\dim \\left( U \\cap W \\right) \\]
`
    },
    {
        type: "Definition",
        title: "Linear Transformations of Vector Spaces",
        latex: `
If $ V $ and $ W $ are two vector spaces, a function $ T : V \\to W $ is called a linear transformation if it satisfies the following axioms.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ T \\left( \\mathbf{v} + \\mathbf{v}_1 \\right) = T \\left( \\mathbf{v} \\right) + T \\left( \\mathbf{v}_1 \\right) \\ \\forall \\mathbf{v}, \\mathbf{v}_1 \\in V $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ T \\left( r \\mathbf{v} \\right) = r T ( \\mathbf{v} ) \\ \\forall \\mathbf{v} \\in V, r \\in \\mathbb{R} $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Linear Operator",
        latex: `
A linear transformation $ T : V \\to V $ is called a linear operator on $ V $.
`
    },
    {
        type: "Note",
        title: "",
        latex: `
If $ V $ and $ W $ are vector spaces, the following are linear transformations
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) Identity Operator $ V \\to V $
        \\[ 1_V : V \\to V \\ \\text{where} \\ 1_V \\left( \\mathbf{v} \\right) = \\mathbf{v} \\ \\forall \\mathbf{v} \\in V \\]</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) Zero Transformation $ V \\to W $
        \\[ 0 : V \\to W \\ \\text{where} \\ 0 \\left( \\mathbf{v} \\right) = \\mathbf{0} \\ \\forall \\mathbf{v} \\in V \\]</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) Scalar Operator $ V \\to V $
        \\[ a : V \\to V \\ \\text{where} \\ a \\left( \\mathbf{v} \\right) = a \\mathbf{v} \\ \\forall \\mathbf{v} \\in V, a \\in \\mathbb{R} \\]</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to W $ be a linear transformation
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ T \\left( \\mathbf{0} \\right) = \\mathbf{0} $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ T \\left( -\\mathbf{v} \\right) = - T \\left( \\mathbf{v} \\right) \\ \\forall \\mathbf{v} \\in V $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ T \\left( r_1 \\mathbf{v}_1 + r_2 \\mathbf{v}_2 + \\dots + r_k \\mathbf{v}_k \\right) = r_1 T ( \\mathbf{v}_1 ) + r_2 T ( \\mathbf{v}_2 ) + \\dots + r_k T ( \\mathbf{v}_k ) \\ \\forall v_i \\in V, r_i \\in \\mathbb{R}$</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Equality of Linear Transformations",
        latex: `
Two linear transformations $ T : V \\to W $ and $ S : V \\to W $ are called equal (written $ T = S $) if they have the same action, that is, $ T \\left( \\mathbf{v} \\right) = S \\left( \\mathbf{v} \\right) \\ \\forall \\mathbf{v} \\in V $
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to W $ and $ S : V \\to W $ be two linear transformations. Suppose that $ V = \\operatorname{span} \\left\\{ \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n \\right\\} $. If $ T \\left( \\mathbf{v}_i \\right) = S \\left( \\mathbf{v}_i \\right) $ for each $ i $, then $ T = S $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ V $ and $ W $ be vector spaces and let $ \\left\\{ \\mathbf{b}_1, \\mathbf{b}_2, \\dots, \\mathbf{b}_n \\right\\} $ be a basis of $ V $. Given any vectors $ \\mathbf{w}_1, \\mathbf{w}_2, \\dots, \\mathbf{w}_n $ in $ W $ (not necessarily distinct), there exists a unique linear transformation $ T : V \\to W $ satisfying $ T \\left( \\mathbf{b}_i \\right) = \\mathbf{w_i} $, for each $ i = 1, 2, \\dots, n $. In fact, the action of $ T $ is as follows:
    \\medskip
    \\newline
    Given $ \\mathbf{v} = v_1 \\mathbf{b}_1 + v_2 \\mathbf{b}_2 + \\dots + v_n \\mathbf{b}_n \\in V $, $ v_i \\in \\mathbb{R} $, then
    \\[ T \\left( \\mathbf{v} \\right) = T \\left( v_1 \\mathbf{b}_1 + v_2 \\mathbf{b}_2 + \\dots + v_n \\mathbf{b}_n \\right) = v_1 \\mathbf{w}_1 + v_2 \\mathbf{w}_2 + \\dots + v_n \\mathbf{w}_n \\]
`
    },
    {
        type: "Definition",
        title: "Kernel and Image of a Linear Transformation",
        latex: `
The kernel of $ T $ (denoted $ \\ker T $) and the image of $ T $ (denoted $ \\operatorname{im} T $ or $ T \\left( V \\right) $) are defined by
    \\[ \\ker T = \\left\\{ \\mathbf{v} \\in V \\mid T \\left( \\mathbf{v} \\right) = \\mathbf{0} \\right\\} \\]
    \\[ \\operatorname{im} T = \\left\\{ T \\left( \\mathbf{v} \\right) \\mid \\mathbf{v} \\in V \\right\\} = T \\left( V \\right) \\]
    The kernel of $ T $ is often called the nullspace of $ T $ because it consists of all vectors $ \\mathbf{v} \\in V $ satisfying the condition that $ T \\left( \\mathbf{v} \\right) = \\mathbf{0} $. The image of $ T $ is often called the range of $ T $ and consists of all vectors $ \\mathbf{w} \\in W $ of the form $ \\mathbf{w} = T \\left( \\mathbf{v} \\right) $ for some $ \\mathbf{v} \\in V $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to W $ be a linear transformation.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\ker T $ is a subspace of $ V $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\operatorname{im} T $ is a subspace of $ W $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Nullity and Rank",
        latex: `
Given a linear transformation $ T : V \\to W $:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\dim \\left( \\ker T \\right) $ is called the nullity of $ T $ and denoted as $ \\operatorname{nullity} \\left( T \\right) $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\dim \\left( \\operatorname{im} T \\right) $ is called the rank of $ T $ and denoted as $ \\operatorname{rank} \\left( T \\right) $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "One-to-one and Onto Linear Transformations",
        latex: `
Let $ T : V \\to W $ be a linear transformation.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ T $ is said to be onto if $ \\operatorname{im} T = W $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ T $ is said to be one-to-one if $ T \\left( \\mathbf{v} \\right) = T \\left( \\mathbf{v}_1 \\right) $ implies $ \\mathbf{v} = \\mathbf{v}_1 $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ T : V \\to W $ is a linear transformation, then $ T $ is one-to-one if and only if $ \\ker T = \\left\\{ \\mathbf{0} \\right\\} $.
`
    },
    {
        type: "Note",
        title: "",
        latex: `
The identity transformation $ 1_V : V \\to V $ is both one-to-one and onto for any vector space $ V $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ A $ be an $ m \\times n $ matrix, and let $ T_A : \\mathbb{R}^n \\to \\mathbb{R}^m $ be the linear transformation induced by $ A $, that is $ T_A \\left( \\mathbf{x} \\right) = A \\mathbf{x} $ for all columns $ \\mathbf{x} \\in \\mathbb{R}^n $.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ T_A $ is onto if and only if $ \\operatorname{rank} A = m $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ T_A $ is one-to-one if and only if $ \\operatorname{rank} A = n $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Dimension Theorem",
        latex: `
Let $ T : V \\to W $ be any linear transformation and assume that $ \\ker T $ and $ \\operatorname{im} T $ are both finite dimensional. Then $ V $ is also finite dimensional and
    \\[ \\dim V = \\dim \\left( \\ker T \\right) + \\dim \\left( \\operatorname{im} T \\right) \\]
    In other words, $ \\dim V = \\operatorname{nullity} \\left( T \\right) + \\operatorname{rank} \\left( T \\right) $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to W $ be a linear transformation, and let $ \\left\\{ \\mathbf{e}_1, \\dots, \\mathbf{e}_r, \\mathbf{e}_{r+1}, \\dots, \\mathbf{e}_n \\right\\} $ be a basis of $ V $ such that $ \\left\\{ \\mathbf{e}_{r+1}, \\dots, \\mathbf{e}_n \\right\\} $ is a basis of $ \\ker T $. Then $ \\left\\{ T \\left( \\mathbf{e}_1 \\right), \\dots, T \\left( \\mathbf{e}_r \\right) \\right\\} $ is a basis of $ \\operatorname{im} T $, and hence $ r = \\operatorname{rank} T $.
`
    },
    {
        type: "Definition",
        title: "Isomorphic Vector Spaces",
        latex: `
A linear transformation $ T : V \\to W $ is called an isomorphism if it is both one-to-one and onto. The vector spaces $ V $ and $ W $ are said to be isomorphic if there exists an isomorphism $ T : V \\to W $, and we write $ V \\cong W $ when this is the case.
`
    },
    {
        type: "Note",
        title: "",
        latex: `
An isomorphism $ T : V \\to W $ induces a pairing
    \\[ \\mathbf{v} \\leftrightarrow T \\left( \\mathbf{v} \\right) \\]
    between vectors $ \\mathbf{v} \\in V $ and vectors $ T \\left( \\mathbf{v} \\right) \\in W $ that preserves vector addition and scalar multiplication. Hence, as far as their vector space properties are concerned, the spaces $ V $ and $ W $ are identical except for notation.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ V $ and $ W $ are finite dimensional spaces, the following conditions are equivalent for a linear transformation $ T : V \\to W $.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ T $ is an isomorphism</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) If $ \\left\\{ \\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n \\right\\} $ is any basis of $ V $, then $ \\left\\{ T \\left( \\mathbf{e}_1 \\right), T \\left( \\mathbf{e}_2 \\right), \\dots, T \\left( \\mathbf{e}_n \\right) \\right\\} $ is a basis of $ W $.</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) There exists a basis $ \\left\\{ \\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n \\right\\} $ of $ V $ such that $ \\left\\{ T \\left( \\mathbf{e}_1 \\right), T \\left( \\mathbf{e}_2 \\right), \\dots, T \\left( \\mathbf{e}_n \\right) \\right\\} $ is a basis of $ W $.</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ V $ and $ W $ are finite dimensional vector spaces, then $ V \\cong W $ if and only if $ \\dim V = \\dim W $
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
Let $ U $, $ V $ and $ W $ denote vector spaces. Then:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ V \\cong V $ for every vector space $ V $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) If $ V \\cong W $ then $ W \\cong V $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) If $ U \\cong V $ and $ V \\cong W $, then $ U \\cong W $</li>
</ol>
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
If $ V $ is a vector space and $ \\dim V = n $, then $ V $ is isomorphic to $ \\mathbb{R}^n $.
`
    },
    {
        type: "Definition",
        title: "Coordinate Isomorphism",
        latex: `
Let $ V $ be an $ n $-dimensional vector space with basis 
    $ B = \\left\\{ \\mathbf{b}_1, \\mathbf{b}_2, \\dots, \\mathbf{b}_n \\right\\} $. The coordinate isomorphism corresponding to $ B $ is the linear transformation $ C_B : V \\to \\mathbb{R}^n $ defined by
    \\[ C_B \\left( v_1 \\mathbf{b}_1 + \\dots + v_n \\mathbf{b}_n \\right) = \\begin{bmatrix} \\ v_1 \\ \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{bmatrix} \\]
    It satisfies $ C_B \\left( \\mathbf{b}_i \\right) = \\mathbf{e}_i $ for each $ i $ and is an isomorphism.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ V $ and $ W $ have the same dimension $ n $, a linear transformation $ T : V \\to W $ is an isomorphism if it is either one-to-one or onto.
`
    },
    {
        type: "Definition",
        title: "Composition of Linear Transformations",
        latex: `
Given linear transformations $ V \\xrightarrow{T} W \\xrightarrow{S} U $, the composite $ ST : V \\to U $ of $ T $ and $ S $ is defined by
    \\[ ST \\left( \\mathbf{v} \\right) = S \\left[ T \\left( \\mathbf{v} \\right) \\right] \\ \\forall \\mathbf{v} \\in V \\]
    The operation of forming the new function $ ST $ is called composition (sometimes denoted $ S \\circ T $).
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ V \\xrightarrow{T} W \\xrightarrow{S} U \\xrightarrow{R} Z $ be linear transformations.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) The composite $ ST $ is again a linear transformation</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ T 1_V = T $ and $ 1_W T = T $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ \\left( RS \\right) T = R \\left( ST \\right) $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ V $ and $ W $ be finite dimensional vector spaces. The following conditions are equivalent for a linear transformation $ T : V \\to W $.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ T $ is an isomorphism</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) There exists a linear transformation $ S : W \\to V $ such that $ ST = 1_V $ and $ TS = 1_W $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Inverse of Linear Transformations",
        latex: `
Given an isomorphism $ T : V \\to W $, there exists another isomorphism called the inverse of $ T $, denoted by $ T^{-1} $. $ T : V \\to W $ and $ T^{-1} : W \\to V $ are related by the fundamental identities:
    \\[ T^{-1} \\left[ T \\left( \\mathbf{v} \\right) \\right] = \\mathbf{v} \\ \\forall \\mathbf{v} \\in V \\ \\text{and} \\ T \\left[ T^{-1} \\left( \\mathbf{w} \\right) \\right] = \\mathbf{w} \\ \\forall \\mathbf{w} \\in W \\]
`
    },
    {
        type: "Lemma",
        title: "Orthogonal Lemma in $ \\mathbb{R}^n $",
        latex: `
Let $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_m \\right\\} $ be an orthogonal set in $ \\mathbb{R}^n $. Given $ \\mathbf{x} \\in \\mathbb{R}^n $, write
    \\[ \\mathbf{f}_{m + 1} = \\mathbf{x} - \\frac{\\mathbf{x} \\cdot \\mathbf{f}_1}{\\lVert \\mathbf{f}_1 \\rVert^2} \\mathbf{f}_1 - \\frac{\\mathbf{x} \\cdot \\mathbf{f}_2}{\\lVert \\mathbf{f}_2 \\rVert^2} \\mathbf{f}_2 - \\dots - \\frac{\\mathbf{x} \\cdot \\mathbf{f}_m}{\\lVert \\mathbf{f}_m \\rVert^2} \\mathbf{f}_m \\]
    Then:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\mathbf{f}_{m + 1} \\cdot \\mathbf{f}_k = 0 $ for $ k = 1, 2, \\dots, m $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) If $ \\mathbf{x} \\notin \\operatorname{span} \\left\\{ \\mathbf{f}_1, \\dots, \\mathbf{f}_m \\right\\} $, then $ \\mathbf{f}_{m + 1} \\neq 0 $ and $ \\left\\{ \\mathbf{f}_1, \\dots, \\mathbf{f}_m, \\mathbf{f}_{m + 1} \\right\\} $ is an orthogonal set.</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ U $ be a subspace of $ \\mathbb{R}^n $
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) Every orthogonal subset $ \\left\\{ \\mathbf{f}_1, \\dots, \\mathbf{f}_m \\right\\} $ in $ U $ is a subset of an orthogonal basis of $ U $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ U $ has an orthogonal basis</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Gram-Schmidt Orthogonalization Algorithm in $ \\mathbb{R}^n $",
        latex: `
If $ \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_m \\right\\} $ is any basis of a subspace $ U $ of $ \\mathbb{R}^n $, construct $ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_m $ in $ U $ successively as follows:
    \\begin{align*}
        \\mathbf{f}_1 & = \\mathbf{x}_1 \\\\
        \\mathbf{f}_2 & = \\mathbf{x}_2 - \\frac{\\mathbf{x}_2 \\cdot \\mathbf{f}_1}{\\lVert \\mathbf{f}_1 \\rVert^2} \\mathbf{f}_1 \\\\
        \\mathbf{f}_3 & = \\mathbf{x}_3 - \\frac{\\mathbf{x}_3 \\cdot \\mathbf{f}_1}{\\lVert \\mathbf{f}_1 \\rVert^2} \\mathbf{f}_1 - \\frac{\\mathbf{x}_3 \\cdot \\mathbf{f}_2}{\\lVert \\mathbf{f}_2 \\rVert^2} \\mathbf{f}_2 \\\\
        \\vdots \\\\
        \\mathbf{f}_k & = \\mathbf{x}_k - \\frac{\\mathbf{x}_k \\cdot \\mathbf{f}_1}{\\lVert \\mathbf{f}_1 \\rVert^2} \\mathbf{f}_1 - \\frac{\\mathbf{x}_k \\cdot \\mathbf{f}_2}{\\lVert \\mathbf{f}_2 \\rVert^2} \\mathbf{f}_2 - \\dots - \\frac{\\mathbf{x}_k \\cdot \\mathbf{f}_{k - 1}}{\\lVert \\mathbf{f}_{k - 1} \\rVert^2} \\mathbf{f}_{k - 1} \\\\
    \\end{align*}
    for each $ k = 2, 3, \\dots m $. Then:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_m \\right\\} $ is an orthogonal basis of $ U $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\operatorname{span} \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_k \\right\\} = \\operatorname{span} \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k \\right\\} $ for each $ k = 1, 2, \\dots, m $</li>
</ol>
`
    },
    {
        type: "Remark",
        title: "",
        latex: `
Observe that the vector $ \\frac{\\mathbf{x} \\cdot \\mathbf{f}_i}{\\lVert \\mathbf{f}_i \\rVert^2} \\mathbf{f}_i $ is unchanged if a nonzero scalar multiple of $ \\mathbf{f}_i $ is used in place of $ \\mathbf{f}_i $. Hence, if a newly constructed $ \\mathbf{f}_i $ is multiplied by a nonzero scalar at some stage of the Gram-Schmidt algorithm, the subsequent $ \\mathbf{f} $'s will be unchanged. This is useful in actual calculations.
`
    },
    {
        type: "Definition",
        title: "Orthogonal Complement of a Subspace of $ \\mathbb{R}^n $",
        latex: `
If $ U $ is a subspace of $ \\mathbb{R} $, define the orthogonal complement $ U^\\perp $ of $ U $ by:
    \\[ U^\\perp = \\left\\{ \\mathbf{x} \\in \\mathbb{R}^n \\mid \\mathbf{x} \\cdot \\mathbf{y} = 0 \\ \\forall \\mathbf{y} \\in U \\right\\} \\]
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
Let $ U $ be a subspace of $ \\mathbb{R}^n $
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ U^\\perp $ is a subspace of $ \\mathbb{R}^n $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\left\\{ \\mathbf{0} \\right\\}^\\perp = \\mathbb{R}^n $ and $ \\left( \\mathbb{R}^n \\right)^\\perp = \\left\\{ \\mathbf{0} \\right\\} $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) If $ U = \\operatorname{span} \\left\\{ \\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_k \\right\\} $, then $ U^\\perp = \\left\\{ \\mathbf{x} \\in \\mathbb{R}^n \\mid \\mathbf{x} \\cdot \\mathbf{x}_i = 0 \\ \\text{for} \\ i = 1, 2, \\dots, k \\right\\} $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Projection onto a Subspace of $ \\mathbb{R}^n $",
        latex: `
Let $ U $ be a subspace of $ \\mathbb{R}^n $ with orthogonal basis $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_m \\right\\} $. If $ \\mathbf{x} \\in \\mathbb{R}^n $, the vector
    \\[ \\operatorname{proj}_U \\mathbf{x} = \\frac{\\mathbf{x} \\cdot \\mathbf{f}_1}{\\lVert \\mathbf{f}_1 \\rVert^2} \\mathbf{f}_1 + \\frac{\\mathbf{x} \\cdot \\mathbf{f}_2}{\\lVert \\mathbf{f}_2 \\rVert^2} \\mathbf{f}_2 + \\dots + \\frac{\\mathbf{x} \\cdot \\mathbf{f}_m}{\\lVert \\mathbf{f}_m \\rVert^2} \\mathbf{f}_m \\]
    is called the orthogonal projection of $ \\mathbf{x} $ on $ U $. For the zero subspace $ U = \\left\\{ \\mathbf{0} \\right\\} $, we define
    \\[ \\operatorname{proj}_{\\left\\{ \\mathbf{0} \\right\\}} \\mathbf{x} = \\mathbf{0} \\]
`
    },
    {
        type: "Theorem",
        title: "Projection Theorem in $ \\mathbb{R}^n $",
        latex: `
If $ U $ is a subspace of $ \\mathbb{R}^n $ and $ \\mathbf{x} \\in \\mathbb{R}^n $, write $ \\mathbf{p} = \\operatorname{proj}_U \\mathbf{x} $. Then:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\mathbf{p} \\in U $ and $ \\mathbf{x} - \\mathbf{p} \\in U^\\perp $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\mathbf{p} $ is the vector in $ U $ closest to $ \\mathbf{x} $ in the sense that
        \\[ \\lVert \\mathbf{x} - \\mathbf{p} \\rVert < \\lVert \\mathbf{x} - \\mathbf{y} \\rVert \\ \\forall \\mathbf{y} \\in U, \\mathbf{y} \\neq \\mathbf{p} \\]</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ U $ be a fixed subspace of $ \\mathbb{R}^n $. If we define $ T : \\mathbb{R}^n \\to \\mathbb{R}^n $ by
    \\[ T \\left( \\mathbf{x} \\right) = \\operatorname{proj}_U \\mathbf{x} \\ \\forall \\mathbf{x} \\in \\mathbb{R}^n \\]
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ T $ is a linear operator</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\operatorname{im} T = U $ and $ \\ker T = U^\\perp $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ \\dim U + \\dim U^\\perp = n $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Orthogonal Matrix Criteria",
        latex: `
The following conditions are equivalent for an $ n \\times n $ matrix $ P $.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ P $ is invertible and $ P^{-1} = P^T $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) The rows of $ P $ are orthonormal</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) The columns of $ P $ are orthonormal</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Orthogonal Matrices",
        latex: `
An $ n \\times n $ matrix $ P $ is called an orthogonal matrix if it satisfies one (and hence all) of the conditions in the "Orthogonal Matrix Criteria" theorem.
`
    },
    {
        type: "Definition",
        title: "Orthogonal Diagonalizable Matrices",
        latex: `
An $ n \\times n $ matrix $ A $ is said to be orthogonally diagonalizable when an orthogonal matrix $ P $ can be found such that $ P^{-1} AP = P^T AP $ is diagonal.
`
    },
    {
        type: "Theorem",
        title: "Principal Axes Theorem for Matrices",
        latex: `
The following conditions are equivalent for an $ n \\times n $ matrix $ A $.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ A $ has an orthonormal set of $ n $ eigenvectors</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ A $ is orthogonally diagonalizable</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ A $ is symmetric</li>
</ol>
    Since the eigenvalues of a (real) symmetric matrix are real, this theorem is sometimes called the real spectral theorem, and the set of distinct eigenvalues is called the spectrum of the matrix.
`
    },
    {
        type: "Definition",
        title: "Principal Axes",
        latex: `
A set of orthonormal eigenvectors of a symmetric matrix $ A $ is called a set of principal axes for $ A $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ A $ is an $ n \\times n $ symmetric matrix, then
    \\[ \\left( A \\mathbf{x} \\right) \\cdot \\mathbf{y} = \\mathbf{x} \\cdot \\left( A \\mathbf{y} \\right) \\]
    for all columns $ \\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^n $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ A $ is a symmetric matrix, then eigenvectors of $ A $ corresponding to distinct eigenvalues are orthogonal.
`
    },
    {
        type: "Definition",
        title: "Quadratic Forms and Principal Axes",
        latex: `
If $ A $ is symmetric and a set of orthogonal eigenvectors of $ A $ is given, the eigenvectors are called principal axes of $ A $. An expression $ q = a x_1^2 + b x_1 x_2 + c x_2^2 $ is called a quadratic form in the variables $ x_1 $ and $ x_2 $, and the graph of the equation $ q = 1 $ is called a conic in these variables.
    \\medskip
    \\newline
    If we introduce new variables $ y_1 $ and $ y_2 $ by setting $ x_1 = y_1 + y_2 $ and $ x_2 = y_1 - y_2 $, then $ q = y_1^2 - y_2^2 $, a diagonal form with no cross term $ y_1 y_2 $. Then, the $ y_1 $ and $ y_2 $ axes are called the principal axes for the conic.
`
    },
    {
        type: "Theorem",
        title: "Triangulation Theorem",
        latex: `
If $ A $ is an $ n \\times n $ matrix with $ n $ real eigenvalues, an orthogonal matrix $ P $ exists such that $ P^T AP $ is upper triangular.
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
If $ A $ is an $ n \\times n $ matrix with real eigenvalues $ \\lambda_1, \\lambda_2, \\dots, \\lambda_n $ (not necessarily distinct), then $ \\det A = \\lambda_1 \\lambda_2 \\dots \\lambda_n $ and $ \\operatorname{tr} A = \\lambda_1 + \\lambda_2 + \\dots + \\lambda_n $.
`
    },
    {
        type: "Definition",
        title: "Positive Definite Matrices",
        latex: `
A square matrix is called positive definite if it is symmetric and all its eigenvalues $ \\lambda $ are positive.
    \\medskip
    \\newline
    Since these matrices are symmetric, the principal axes theorem plays a central role in the theory.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ A $ is positive definite, then it is invertible and $ \\det A > 0 $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
A symmetric matrix $ A $ is positive definite if and only if $ \\mathbf{x}^T A \\mathbf{x} > 0 $ for every column $ \\mathbf{x} \\neq \\mathbf{0} \\in \\mathbb{R}^n $
`
    },
    {
        type: "Definition",
        title: "Principal Submatrices",
        latex: `
If $ A $ is any $ n \\times n $ matrix, let $ ^{\\left( r \\right)} A $ denote the $ r \\times r $ submatrix in the upper left corner of $ A $; that is, $ ^{\\left( r \\right)} A $ is the matrix obtained from $ A $ by deleting the last $ n - r $ rows and columns. The matrices $ ^{\\left( 1 \\right)} A, ^{\\left( 1 \\right)} A, ^{\\left( 2 \\right)} A, \\dots, ^{\\left( n \\right)} A = A $ are called the principal submatrices of $ A $.
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
If $ A $ is positive definite, so is each principal submatrix $ ^{\\left( r \\right)} A $ for $ r = 1, 2, \\dots, n $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
The following conditions are equivalent for a symmetric $ n \\times n $ matrix $ A $:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ A $ is positive definite</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\det \\left( ^{\\left( r \\right)} A \\right) > 0 $ for each $ r = 1, 2, \\dots, n $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ A = U^T U $ where $ U $ is an upper triangular matrix with positive entries on the main diagonal</li>
</ol>
    The factorization in (iii) is unique, and called the Cholesky factorization of $ A $.
`
    },
    {
        type: "Theorem",
        title: "Algorithm for the Cholesky Factorization",
        latex: `
If $ A $ is a positive definite matrix, the Cholesky factorization $ A = U^T U $ can be obtained as follows:
    <ol>
<li>Carry $ A $ to an upper triangular matrix $ U_1 $ with positive diagonal entries using row operations each of which adds a multiple of a row to a lower row</li>
<li>Obtain $ U $ from $ U_1 $ by dividing each row of $ U_1 $ by the square root of the diagonal entry in that row</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Complex Matrix",
        latex: `
A matrix $ A = \\left[ a_{ij} \\right] $ is called a complex matrix if every entry $ a_{ij} $ is a complex number.
`
    },
    {
        type: "Definition",
        title: "Complex Conjugate",
        latex: `
If $ z = a + bi $ is a complex number, the conjugate of $ z $ is also a complex number, denoted by $ \\overline{z} $, given by:
    \\[ \\overline{z} = a - bi \\]
`
    },
    {
        type: "Definition",
        title: "Conjugate Matrix",
        latex: `
If $ A $ is a complex matrix, the conjugate of $ A = \\left[ a_{ij} \\right] $ is the matrix:
    \\[ \\overline{A} = \\left[ \\overline{a}_{ij} \\right] \\]
    obtained from $ A $ by conjugating every entry.
    \\medskip
    \\newline
    The properties
    \\[ \\overline{A + B} = \\overline{A} + \\overline{B} \\quad \\text{and} \\quad \\overline{AB} = \\overline{A} \\  \\overline{B}\\]
    hold for all complex matrices of appropriate sizes.
`
    },
    {
        type: "Definition",
        title: "Standard Inner Product in $ \\mathbb{C}^n $",
        latex: `
Given $ \\mathbf{z} = \\left( z_1, z_2, \\dots, z_n \\right) $ and $ \\mathbf{w} = \\left( w_1, w_2, \\dots, w_n \\right) $ in $ \\mathbb{C}^n $, define their standard inner product by:
    \\[ \\langle \\mathbf{z}, \\mathbf{w} \\rangle = z_1 \\overline{w}_1 + z_2 \\overline{w}_2  + \\dots + z_n \\overline{w}_n  = \\mathbf{z} \\cdot \\overline{\\mathbf{w}} \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ \\mathbf{z}, \\mathbf{z}_1, \\mathbf{w}, \\mathbf{w}_1 $ denote vectors in $ \\mathbb{C}^n $, and let $ \\lambda $ denote a complex number.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\langle \\mathbf{z} + \\mathbf{z}_1, \\mathbf{w} \\rangle = \\langle \\mathbf{z}, \\mathbf{w} \\rangle + \\langle \\mathbf{z}_1, \\mathbf{w} \\rangle $ and $ \\langle \\mathbf{z}, \\mathbf{w} + \\mathbf{w_1} \\rangle = \\langle \\mathbf{z}, \\mathbf{w} \\rangle + \\langle \\mathbf{z}, \\mathbf{w}_1 \\rangle $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\langle \\lambda \\mathbf{z}, \\mathbf{w} \\rangle = \\lambda \\langle \\mathbf{z}, \\mathbf{w} \\rangle $ and $ \\langle \\mathbf{z}, \\lambda \\mathbf{w} \\rangle = \\overline{\\lambda} \\langle \\mathbf{z}, \\mathbf{w} \\rangle $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ \\langle \\mathbf{z}, \\mathbf{w} \\rangle = \\overline{\\langle \\mathbf{w}, \\mathbf{z} \\rangle} $</li>
<li style="list-style-type: none; margin-left: -15px;">(iv) $ \\langle \\mathbf{z}, \\mathbf{z} \\rangle \\geq 0 $, and $ \\langle \\mathbf{z}, \\mathbf{z} \\rangle = 0 $ iff $ \\mathbf{z} = \\mathbf{0} $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Norm and Length in $ \\mathbb{C}^n $",
        latex: `
We define the norm or length $ \\lVert \\mathbf{z} \\rVert $ of a vector $ \\mathbf{z} = \\left( z_1, z_2, \\dots, z_n \\right) \\in \\mathbb{C}^n $ by:
    \\[ \\lVert \\mathbf{z} \\rVert = \\sqrt{\\langle \\mathbf{z}, \\mathbf{z} \\rangle} = \\sqrt{\\vert z_1 \\vert^2 + \\vert z_2 \\vert^2 + \\dots + \\vert z_n \\vert^2} \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ \\mathbf{z} \\in \\mathbb{C}^n $, then:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\lVert \\mathbf{z} \\rVert \\geq 0 $ and $ \\lVert \\mathbf{z} \\rVert = 0 $ iff $ \\mathbf{z} = \\mathbf{0} $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\lVert \\lambda \\mathbf{z} \\rVert = \\vert \\lambda \\vert \\lVert \\mathbf{z} \\rVert \\ \\forall \\lambda \\in \\mathbb{C} $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Conjugate Transpose in $ \\mathbb{C}^n $",
        latex: `
The conjugate transpose $ A^H $ of a complex matrix $ A $ is defined by:
    \\[ A^H = \\left( \\overline{A} \\right)^T = \\overline{\\left( A^T \\right)} \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ A $ and $ B $ denote complex matrices, and let $ \\lambda $ be a complex number.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\left( A^H \\right)^H = A $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\left( A + B \\right)^H = A^H + B^H $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ \\left( \\lambda A \\right)^H = \\overline{\\lambda} A^H $</li>
<li style="list-style-type: none; margin-left: -15px;">(iv) $ \\left( AB \\right)^H = B^H A^H $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Hermitian Matrices",
        latex: `
A square complex matrix $ A $ is called hermitian if $ A^H = A $, or equivalently if $ \\overline{A} = A^T $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
An $ n \\times n $ complex matrix $ A $ is hermitian if and only if:
    \\[ \\langle A \\mathbf{z}, \\mathbf{w} \\rangle = \\langle \\mathbf{z}, A \\mathbf{w} \\rangle \\]
    for all n-tuples $ \\mathbf{z}, \\mathbf{w} \\in \\mathbb{C}^n $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ A $ denote a hermitian matrix.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) The eigenvalues of $ A $ are real</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) Eigenvectors of $ A $ corresponding to distinct eigenvalues are orthogonal</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Orthogonal and Orthonormal Vectors in $ \\mathbb{C}^n $",
        latex: `
As in the real case, a set of nonzero vectors $ \\left\\{ \\mathbf{z}_1, \\mathbf{z}_2, \\dots, \\mathbf{z}_m \\right\\} $ in $ \\mathbb{C}^n $ is called orthogonal if $ \\langle \\mathbf{z}_i, \\mathbf{z}_j \\rangle = 0 $ whenever $ i \\neq j $, and it is orthonormal if, in addition, $ \\lVert \\mathbf{z}_i \\rVert = 1 $ for each $ i $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
The following are equivalent for an $ n \\times n $ complex matrix $ A $.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ A $ is invertible and $ A^{-1} = A^H $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) The rows of $ A $ are an orthonormal set in $ \\mathbb{C}^n $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) The columns of $ A $ are an orthonormal set in $ \\mathbb{C}^n $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Unitary Matrices",
        latex: `
A square complex matrix $ U $ is unitary if $ U^{-1} = U^H $. Thus, a real matrix is unitary iff it is orthogonal.
`
    },
    {
        type: "Definition",
        title: "Unitary Diagonalizable",
        latex: `
An $ n \\times n $ complex matrix $ A $ is called unitarily diagonalizable if $ U^H AU $ is diagonal for some unitary matrix $ U $.
`
    },
    {
        type: "Theorem",
        title: "Schur's Theorem",
        latex: `
If $ A $ is any $ n \\times n $ complex matrix, there exists a unitary matrix $ U $ such that
    \\[ U^H AU = T \\]
    is upper triangular. Moreover, the entries on the main diagonal of $ T $ are the eigenvalues $ \\lambda_1, \\lambda_2, \\dots, \\lambda_n $ of $ A $ (including multiplicities).
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
Let $ A $ be an $ n \\times n $ complex matrix, and let $ \\lambda_1, \\lambda_2, \\dots, \\lambda_n $ denote the eigenvalues of $ A $, including multiplicities. Then,
    \\[ \\det A = \\lambda_1 \\lambda_2 \\dots \\lambda_n \\quad \\text{and} \\quad \\operatorname{tr} A = \\lambda_1 + \\lambda_2 + \\dots + \\lambda_n \\]
`
    },
    {
        type: "Theorem",
        title: "Spectral Theorem",
        latex: `
If $ A $ is hermitian, there is a unitary matrix $ U $ such that $ U^H AU $ is diagonal.
`
    },
    {
        type: "Definition",
        title: "Normal Matrix",
        latex: `
An $ n \\times n $ complex matrix $ N $ is called normal if $ N N^H = N^H N $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
An $ n \\times n $ complex matrix $ A $ is unitarily diagonalizable if and only if $ A $ is normal.
`
    },
    {
        type: "Theorem",
        title: "Cayley-Hamilton Theorem",
        latex: `
If $ A $ is an $ n \\times n $ complex matrix, then $ c_A \\left( A \\right) = 0 $; that is, $ A $ is a root of its characteristic polynomial.
`
    },
    {
        type: "Definition",
        title: "Quadratic Form",
        latex: `
A quadratic form $ q $ in the $ n $ variables $ x_1, x_2, \\dots, x_n $ is a linear combination of terms $ x_1^2, x_2^2, \\dots x_n^2 $ and cross terms $ x_1 x_2, x_1 x_3, x_2 x_3, \\dots $
`
    },
    {
        type: "Theorem",
        title: "Diagonalization Theorem",
        latex: `
Let $ q = \\mathbf{x}^T A \\mathbf{x} $ be a quadratic form in the variables $ x_1, x_2, \\dots x_n $, where $ \\mathbf{x} = \\left( x_1, x_2, \\dots x_n \\right)^T $ and $ A $ is a symmetric $ n \\times n $ matrix. Let $ P $ be an orthogonal matrix such that $ P^T AP $ is diagonal, and define new variables $ \\mathbf{y} = \\left( y_1, y_2, \\dots, y_n \\right)^T $ by:
    \\[ \\mathbf{x} = P \\mathbf{y} \\quad \\Leftrightarrow \\quad \\mathbf{y} = P^T \\mathbf{x} \\]
    If $ q $ is expressed in terms of these new variables $ y_1, y_2, \\dots, y_n $, the result is:
    \\[ q = \\lambda_1 y_1^2 + \\lambda_2 y_2^2 + \\dots + \\lambda_n y_n^2 \\]
    where $ \\lambda_1, \\lambda_2, \\dots, \\lambda_n $ are the eigenvalues of $ A $ repeated according to their multiplicities.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ q \\left( \\mathbf{x} \\right) = \\mathbf{x}^T A \\mathbf{x} $ is a quadratic form given by a symmetric matrix $ A $, then $ A $ is uniquely determined by $ q $.
`
    },
    {
        type: "Definition",
        title: "Congruent Matrices",
        latex: `
Two $ n \\times n $ matrices $ A $ and $ B $ are called congruent, written $ A \\overset{c}{\\sim} B $ if $ B = U^T AU $ for some invertible matrix $ U $. Some properties of congruence are:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ A \\overset{c}{\\sim} A $ for all $ A $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) If $ A \\overset{c}{\\sim} B $, then $ B \\overset{c}{\\sim} A $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) If $ A \\overset{c}{\\sim} B $ and $ B \\overset{c}{\\sim} C $, then $ A \\overset{c}{\\sim} C $</li>
<li style="list-style-type: none; margin-left: -15px;">(iv) If $ A \\overset{c}{\\sim} B $, then $ A $ is symmetric iff $ B $ is symmetric</li>
<li style="list-style-type: none; margin-left: -15px;">(v) If $ A \\overset{c}{\\sim} B $, then $ \\operatorname{rank} A = \\operatorname{rank} B $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Sylvester's Law of Inertia",
        latex: `
If $ A \\overset{c}{\\sim} B $, then $ A $ and $ B $ have the same number of positive eigenvalues, counting multiplicities.
`
    },
    {
        type: "Definition",
        title: "Index",
        latex: `
The index of a symmetric matrix $ A $ is the number of positive eigenvalues of $ A $. If $ q = q \\left( \\mathbf{x} \\right) = \\mathbf{x}^T A \\mathbf{x} $ is a quadratic form, the index and rank of $ q $ are defined to be the index and rank of the matrix $ A $ respectively.
`
    },
    {
        type: "Note",
        title: "Complete Diagonalization",
        latex: `
Let $ q = q \\left( \\mathbf{x} \\right) = \\mathbf{x}^T A \\mathbf{x} $ be any quadratic form in $ n $ variables, of index $ k $ and rank $ r $ where $ A $ is symmetric. We claim there are new variables $ \\mathbf{z} $ can be found so that $ q $ is completely diagonalized, that is,
    \\[ q \\left( \\mathbf{z} \\right) = z_1^2 + \\dots + z_k^2 - z_{k+1}^2 - \\dots - z_r^2 \\]
    If $ k \\leq r \\leq n $, let $ D_n \\left( k, r \\right) $ denote the $ n \\times n $ diagonal matrix whose main diagonal consists of $ k $ $ 1 $'s, followed by $ r - k $ $ -1 $'s, followed by $ n - r $ $ 0 $'s. Then we seek variables $ \\mathbf{z} $ such that:
    \\[ q \\left( \\mathbf{z} \\right) = \\mathbf{z}^T D_n \\left( k, r \\right) \\mathbf{z} \\]
    To determine $ \\mathbf{z} $, first diagonalize $ A $ as follows: Find an orthogonal matrix $ P_0 $ such that:
    \\[ P_0^T A P_0 = D = \\operatorname{diag} \\left( \\lambda_1, \\lambda_2, \\dots, \\lambda_r, 0, \\dots, 0 \\right) \\]
    is diagonal with the nonzero eigenvalues $ \\lambda_1, \\lambda_2, \\dots, \\lambda_r $ of $ A $ on the main diagonal (followed by $ n - r $ zeros). By reordering the columns of $ P_0 $, if necessary, we may assume that $ \\lambda_1, \\dots, \\lambda_k $ are positive and $ \\lambda_{k + 1}, \\dots, \\lambda_r $ are negative. This being the case, let $ D_0 $ be the $ n \\times n $ diagonal matrix:
    \\[ D_0 = \\operatorname{diag} \\left( \\frac{1}{\\sqrt{\\lambda_1}}, \\dots, \\frac{1}{\\sqrt{\\lambda_k}}, \\frac{1}{\\sqrt{-\\lambda_{k+1}}}, \\dots, \\frac{1}{\\sqrt{\\lambda_r}}, 1, \\dots, 1 \\right) \\]
    Then $ D_0^T D D_0 = D_n \\left( k, r \\right) $, so if new variables $ \\mathbf{z} $ are given by $ \\mathbf{x} = \\left( P_0 D_0 \\right) \\mathbf{z} $, we obtain:
    \\[ q \\left( \\mathbf{z} \\right) = \\mathbf{z}^T D_n \\left( k, r \\right) \\mathbf{z} = z_1^2 + \\dots + z_k^2 - z_{k+1}^2 - \\dots - z_r^2 \\]
    as required. Note that the change-of-variables matrix $ P_0 D_0 $ from $ \\mathbf{z} $ to $ \\mathbf{x} $ has orthogonal columns (in fact, scalar multiples of the columns of $ P_0 $).
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ A $ and $ B $ be symmetric $ n \\times n $ matrices, and let $ 0 \\leq k \\leq r \\leq n $.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ A $ has index $ k $ and rank $ r $ if and only if $ A \\overset{c}{\\sim} D_n \\left( k, r \\right) $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ A \\overset{c}{\\sim} B $ if and only if they have the same rank and index</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Ordered Basis",
        latex: `
An ordered basis is a basis $ \\left\\{ \\mathbf{b}_1, \\mathbf{b}_2, \\dots, \\mathbf{b}_n \\right\\} $ where the order of the vectors is taken into account.
`
    },
    {
        type: "Definition",
        title: "Coordinate Vector $ C_B \\left( \\mathbf{v} \\right) $",
        latex: `
Let $ B = \\left\\{ \\mathbf{b}_1, \\mathbf{b}_2, \\dots, \\mathbf{b}_n \\right\\} $ is an ordered basis of a vector space $ V $, and let $ \\mathbf{v} = v_1 \\mathbf{b}_1 + v_2 \\mathbf{b}_2 + \\dots + v_n \\mathbf{b}_n $. Then, the coordinate vector of $ \\mathbf{v} $ with respect to $ B $ is defined to be
    \\[ C_B \\left( \\mathbf{v} \\right) = \\left( v_1 \\mathbf{b}_1 + v_2 \\mathbf{b}_2 + \\dots + v_n \\mathbf{b}_n \\right) = \\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ \\ v_n \\ \\end{bmatrix} \\]
    Note that $ C_B \\left( \\mathbf{b}_i \\right) = \\mathbf{e}_i $ is column $ i $ of $ I_n $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ V $ has dimension $ n $ and $ B = \\left\\{ \\mathbf{b}_1, \\mathbf{b}_2, \\dots, \\mathbf{b}_n \\right\\} $ is any ordered basis of $ V $, the coordinate transformation $ C_B : V \\to \\mathbb{R}^n $ is an isomorphism. In fact, $ C^{-1}_B : \\mathbb{R}^n \\to V $ is given by:
    \\[ C^{-1}_B \\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ \\ v_n \\ \\end{bmatrix} = v_1 \\mathbf{b}_1 + v_2 \\mathbf{b}_2 + \\dots + v_n \\mathbf{b}_n \\quad \\forall \\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ \\ v_n \\ \\end{bmatrix} \\in \\mathbb{R}^n \\]
`
    },
    {
        type: "Definition",
        title: "Matrix of $ T $ corresponding to the ordered bases $ B $ and $ D $",
        latex: `
$ M_{DB} \\left( T \\right) $ of $ T : V \\to W $ for bases $ B $ and $ D $ is called the matrix of $ T $ corresponding to the ordered bases $ B $ and $ D $, we use the following notation:
    \\[ M_{DB} \\left( T \\right) = \\begin{bmatrix} \\ C_D \\left[ T \\left( \\mathbf{b}_1 \\right) \\right] & C_D \\left[ T \\left( \\mathbf{b}_2 \\right) \\right] & \\cdots & C_D \\left[ T \\left( \\mathbf{b}_n \\right) \\right] \\ \\end{bmatrix} \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to W $ be a linear transformation where $ \\dim V = n $ and $ \\dim W = m $, and let $ B = \\left\\{ \\mathbf{b}_1 \\dots, \\mathbf{b}_n \\right\\} $ and $ D $ be ordered bases of $ V $ and $ W $, respectively. Then the matrix $ M_{DB} \\left( T \\right) $ is the unique $ m \\times n $ matrix $ A $ that satisfies:
    \\[ C_D T = T_A C_B \\]
    Hence the defining property of $ M_{DB} \\left( T \\right) $ is:
    \\[ C_D \\left[ T \\left( \\mathbf{v} \\right) \\right] = M_{DB} \\left( T \\right) C_B \\left( \\mathbf{v} \\right) \\ \\forall \\mathbf{v} \\in V \\]
    The matrix $ M_{DB} \\left( T \\right) $ is given in terms of its columns by:
     \\[ M_{DB} \\left( T \\right) = \\begin{bmatrix} \\ C_D \\left[ T \\left( \\mathbf{b}_1 \\right) \\right] & C_D \\left[ T \\left( \\mathbf{b}_2 \\right) \\right] & \\cdots & C_D \\left[ T \\left( \\mathbf{b}_n \\right) \\right] \\ \\end{bmatrix} \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ V \\xrightarrow{T} W \\xrightarrow{S} U $ be linear transformations and let $ B $, $ D $, and $ E $ be finite ordered bases of $ V $, $ W $, and $ U $, respectively. Then:
    \\[ M_{EB} \\left( ST \\right) = M_{ED} \\left( S \\right) \\cdot M_{DB} \\left( T \\right) \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to W $ be a linear transformation, where $ \\dim V = \\dim W = n $. The following are equivalent:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ M_{DB} \\left( T \\right) $ is invertible for all ordered bases $ B $ and $ D $ of $ V $ and $ W $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ M_{DB} \\left( T \\right) $ is invertible for some pair of ordered bases $ B $ and $ D $ of $ V $ and $ W $</li>
</ol>
    When this is the case, $ \\left[ M_{DB} \\left( T \\right) \\right]^{-1} = M_{BD} \\left( T^{-1} \\right) $.
`
    },
    {
        type: "Definition",
        title: "Rank of a Linear Transformation",
        latex: `
The rank of a linear transformation $ T : V \\to W $ is $ \\operatorname{rank} T = \\dim \\left( \\operatorname{im} T \\right) $. Moreover, if $ A $ is any $ m \\times n $ matrix and $ T_A : \\mathbb{R}^n \\to \\mathbb{R}^m $ is the matrix transformation, then $ \\operatorname{rank} \\left( T_A \\right) = \\operatorname{rank} A $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to W $ be a linear transformation where $ \\dim V = n $ and $ \\dim W = m $. If $ B $ and $ D $ are any ordered bases of $ V $ and $ W $, then $ \\operatorname{rank} T = \\operatorname{rank} \\left[ M_{DB} \\left( T \\right) \\right] $.
`
    },
    {
        type: "Note",
        title: "",
        latex: `
If $ T : V \\to V $ is a linear operator where $ \\dim V = n $, it is possible to choose bases $ B $ and $ D $ of $ V $ such that the matrix $ M_{DB} \\left( T \\right) $ has a very simple form:
    \\[ M_{DB} \\left( T \\right) = \\begin{bmatrix} \\ I_r & 0 \\ \\\\ \\ 0 & 0 \\ \\end{bmatrix} \\]
    where $ r = \\operatorname{rank} T $.
`
    },
    {
        type: "Definition",
        title: "Matrix $ M_{B} \\left( T \\right) $ of $ T : V \\to V $ for basis $ B $",
        latex: `
If $ T : V \\to V $ is an operator on a vector space $ V $, and if $ B $ is an ordered basis of $ V $, define $ M_B \\left( T \\right) = M_{BB} \\left( T \\right) $ and call this the $ B $-matrix of $ T $.
    \\medskip
    \\newline
    Recall that if $ T : \\mathbb{R}^n \\to \\mathbb{R}^n $ is a linear operator and $ E = \\left\\{ \\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n \\right\\} $ is the standard basis of $ \\mathbb{R}^n $, then $ C_B \\left( \\mathbf{x} \\right) = \\mathbf{x} $ for every $ \\mathbf{x} \\in \\mathbb{R}^n $, so $ M_E \\left( T \\right) = \\begin{bmatrix} \\ T \\left( \\mathbf{e}_1 \\right) & T \\left( \\mathbf{e}_2 \\right) & \\cdots & T \\left( \\mathbf{e}_n \\right) \\ \\end{bmatrix} $ is the standard matrix of the operator $ T $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to V $ be an operator where $ \\dim V = n $, and let $ B $ be an ordered basis of $ V $.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ C_B \\left( T \\left( \\mathbf{v} \\right) \\right) = M_B \\left( T \\right) C_B \\left( \\mathbf{v} \\right) \\ \\forall \\mathbf{v} \\in V $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) If $ S : V \\to V $ is another operator on $ V $, then $ M_B \\left( ST \\right) = M_B \\left( S \\right) M_B \\left( T \\right) $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ T $ is an isomorphism if and only if $ M_B \\left( T \\right) $ is invertible. In this case $ M_D \\left( T \\right) $ is invertible for every ordered basis $ D $ of $ V $</li>
<li style="list-style-type: none; margin-left: -15px;">(iv) If $ T $ is an isomorphism, then $ M_B \\left( T^{-1} \\right) = \\left[ M_B \\left( T \\right) \\right]^{-1} $</li>
<li style="list-style-type: none; margin-left: -15px;">(v) If $ B = \\left\\{ \\mathbf{b}_1, \\mathbf{b}_2, \\dots, \\mathbf{b}_n \\right\\} $, then $ M_B \\left( T \\right) = \\begin{bmatrix} \\ C_B \\left[ T \\left( \\mathbf{b}_1 \\right) \\right] & C_B \\left[ T \\left( \\mathbf{b}_2 \\right) \\right] & \\cdots & C_B \\left[ T \\left( \\mathbf{b}_n \\right) \\right] \\ \\end{bmatrix} $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Change Matrix $ P_{D \\leftarrow B} $ for bases $ B $ and $ D $",
        latex: `
Define the change matrix $ P_{D \\leftarrow B} $ by:
    \\[ P_{D \\leftarrow B} = M_{DB} \\left( 1_V \\right) \\quad \\text{for any ordered bases $ B $ and $ D $ of $ V $} \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ B = \\left\\{ \\mathbf{b}_1, \\mathbf{b}_2, \\dots, \\mathbf{b}_n \\right\\} $ and $ D $ denote ordered bases of a vector space $ V $. Then the change matrix $ P_{D \\leftarrow B} $ is given in terms of its columns by:
    \\[ P_{D \\leftarrow B} = \\begin{bmatrix} \\ C_D \\left( \\mathbf{b}_1 \\right) & C_D \\left( \\mathbf{b}_2 \\right) & \\cdots & C_D \\left( \\mathbf{b}_n \\right) \\ \\end{bmatrix} \\]
    and has the property that:
    \\[ C_D \\left( \\mathbf{v} \\right) = P_{D \\leftarrow B} C_B \\left( \\mathbf{v} \\right) \\ \\forall \\mathbf{v} \\in V \\]
    Moreover, if $ E $ is another ordered basis of $ V $, we have:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ P_{B \\leftarrow B} = I_n $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ P_{D \\leftarrow B} $ is invertible and $ \\left( P_{D \\leftarrow B} \\right)^{-1} = P_{B \\leftarrow D} $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ P_{E \\leftarrow D} P_{D \\leftarrow B} = P_{E \\leftarrow B} $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Similarity Theorem",
        latex: `
Let $ B_0 $ and $ B $ be two ordered bases of a finite dimensional vector space $ V $. If $ T : V \\to V $ is any linear operator, the matrices $ M_B \\left( T \\right) $ and $ M_{B_0} \\left( T \\right) $ of $ T $ with respect to these bases are similar. More precisely,
    \\[ M_B \\left( T \\right) = P^{-1} M_{B_0} \\left( T \\right) P \\]
    where $ P = P_{{B_0} \\leftarrow B} $ is the change matrix from $ B $ to $ B_0 $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ A $ be an $ n \\times n $ matrix and let $ E $ be the standard basis of $ \\mathbb{R}^n $.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) Let $ A' $ be similar to $ A $, say $ A' = P^{-1} AP $, and let $ B $ be the ordered basis of $ \\mathbb{R}^n $ consisting of the columns of $ P $ in order. Then $ T_A : \\mathbb{R}^n \\to \\mathbb{R}^n $ is linear and:
        \\[ M_E \\left( T_A \\right) = A \\quad \\text{and} \\quad M_B \\left( T_A \\right) = A' \\]</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) If $ B $ is any ordered basis of $ \\mathbb{R}^n $, let $ P $ be the (invertible) matrix whose columns are the vectors in $ B $ in order. Then:
        \\[ M_B \\left( T_A \\right) = P^{-1} AP \\]</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Similarity Invariant",
        latex: `
A property of $ n \\times n $ matrices is similarity invariant if, whenever a given $ n \\times n $ matrix $ A $ which has the property, every matrix similar to $ A $ also has the property.
`
    },
    {
        type: "Definition",
        title: "Determinant",
        latex: `
If $ T : V \\to V $ is a linear operator on a finite dimensional space $ V $, define the determinant of $ T $ (denoted $ \\det T $) by:
    \\[ \\det T = \\det M_B \\left( T \\right), \\quad B \\ \\text{any basis of} \\ V \\]
`
    },
    {
        type: "Definition",
        title: "Trace",
        latex: `
If $ T : V \\to V $ is a linear operator on a finite dimensional space $ V $, define the trace of $ T $ (denoted $ \\operatorname{tr} T $) by:
    \\[ \\operatorname{tr} T = \\operatorname{tr} M_B \\left( T \\right), \\quad B \\ \\text{any basis of} \\ V \\]
`
    },
    {
        type: "Definition",
        title: "Characteristic Polynomial",
        latex: `
If $ T : V \\to V $ is a linear operator on a finite dimensional space $ V $, define the characteristic polynomial of $ T $ by:
    \\[ c_T \\left( x \\right) = c_A \\left( x \\right) \\ \\text{where} \\ A = M_B \\left( T \\right), \\quad B \\ \\text{any basis of} \\ V \\]
    In other words, the characteristic polynomial of an operator $ T $ is the characteristic polynomial of any matrix representing $ T $.
`
    },
    {
        type: "Definition",
        title: "Image under $ T $",
        latex: `
If $ U $ is a subspace of $ V $, write its image under $ T $ as:
    \\[ T \\left( U \\right) = \\left\\{ T \\left( \\mathbf{u} \\right) \\mid \\mathbf{u} \\in U \\right\\} \\]
`
    },
    {
        type: "Definition",
        title: "$ T $-invariant Subspace",
        latex: `
Let $ T : V \\to V $ be an operator. A subspace $ U \\subseteq V $ is called $ T $-invariant if $ T \\left( U \\right) \\subseteq U $, that is $ T \\left( \\mathbf{u} \\right) \\in U $ for every vector $ \\mathbf{u} \\in U $. Hence, $ T $ is a linear operator on the vector space $ U $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to V $ be any linear operator. Then:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\left\\{ \\mathbf{0} \\right\\} $ and $ V $ are $ T $-invariant subspaces</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) Both $ \\ker T $ and $ \\operatorname{im} T = T \\left( V \\right) $ are $ T $-invariant subspaces</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) If $ U $ and $ W $ are $ T $-invariant subspaces, so are $ T \\left( U \\right) $, $ U \\cap W $, and $ U + W $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Restriction of an Operator",
        latex: `
Let $ T : V \\to V $ be a linear operator. If $ U $ is any $ T $-invariant subspaces of $ V $, then:
    \\[ T : U \\to U \\]
    is a linear operator on the subspace $ U $, called the restriction of $ T $ to $ U $
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to V $ be a linear operator where $ V $ has dimension $ n $ and suppose that $ U $ is any $ T $-invariant subspace of $ V $. Let $ B_1 = \\left\\{ \\mathbf{b}_1, \\dots, \\mathbf{b}_k \\right\\} $ be any basis of $ U $ and extend it to a basis $ B = \\left\\{ \\mathbf{b}_1, \\dots, \\mathbf{b}_k, \\mathbf{b}_{k+1}, \\dots, \\mathbf{b}_n \\right\\} $ of $ V $ is any way. Then $ M_B \\left( T \\right) $ has the block triangular form:
    \\[ M_B \\left( T \\right) = \\begin{bmatrix} \\ M_{B_1} \\left( T \\right) & Y \\ \\\\ \\ 0 & Z \\ \\end{bmatrix} \\]
    where $ Z $ is $ \\left( n - k \\right) \\times \\left( n - k \\right) $ and $ M_{B_1} \\left( T \\right) $ is the matrix of the restriction of $ T $ to $ U $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ A $ be a block upper triangular matrix, say
    \\[ \\begin{bmatrix} \\ A_{11} & A_{12} & A_{13} & \\cdots & A_{1n} \\ \\\\ \\ 0 & A_{22} & A_{23} & \\cdots & A_{2n} \\ \\\\ \\ 0 & 0 & A_{33} & \\cdots & A_{3n} \\ \\\\ \\ \\vdots & \\vdots & \\vdots & & \\vdots \\ \\\\ \\ 0 & 0 & 0 & \\dots & A_{nn} \\ \\end{bmatrix} \\]
    where the diagonal blocks are square. Then:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\det A = \\left( \\det A_{11} \\right) \\left( \\det A_{22} \\right) \\left( \\det A_{33} \\right) \\cdots \\left( \\det A_{nn} \\right) $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ c_A \\left( x \\right) = c_{A_{11}} \\left( x \\right) c_{A_{22}} \\left( x \\right) c_{A_{33}} \\left( x \\right) \\cdots c_{A_{nn}} \\left( x \\right) $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "One Dimensional $ T $-Invariant Subspace",
        latex: `
Let $ T : V \\to V $ be a linear operator. A one dimensional subspace $ \\mathbb{R} \\mathbf{v} $, $ \\mathbf{v} \\neq 0 $, is $ T $-invariant if and only if $ T \\left( r \\mathbf{v} \\right) = r T \\left( \\mathbf{v} \\right) $ lies in $ \\mathbb{R} \\mathbf{v} $ for all $ r \\in \\mathbb{R} $. This holds if and only if $ T \\left( \\mathbf{v} \\right) $ lies in $ \\mathbb{R} \\mathbf{v} $, that is, $ T \\left( \\mathbf{v} \\right) = \\lambda \\mathbf{v} $ for some $ \\lambda \\in \\mathbb{R} $.
`
    },
    {
        type: "Definition",
        title: "Eigenvalue of an Operator",
        latex: `
A real number $ \\lambda $ is called an eigenvalue of an operator $ T : V \\to V $ if:
    \\[ T \\left( \\mathbf{v} \\right) = \\lambda \\mathbf{v} \\]
    holds for some nonzero vector $ \\mathbf{v} \\in V $. In this case, $ \\mathbf{v} $ is called an eigenvector of $ T $ corresponding to $ \\lambda $.
`
    },
    {
        type: "Definition",
        title: "Eigenspace of a Linear Operator",
        latex: `
Let $ T : V \\to V $. The subspace:
    \\[ E_\\lambda \\left( T \\right) = \\left\\{ \\mathbf{v} \\in V \\mid T \\left( \\mathbf{v} \\right) = \\lambda \\mathbf{v} \\right\\} \\]
    is called the eigenspace of $ T $ corresponding to $ \\lambda $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ A $ is an $ n \\times n $ matrix, a real number $ \\lambda $ is an eigenvalue of the matrix operator $ T_A : \\mathbb{R}^n \\to \\mathbb{R}^n $ if and only if $ \\lambda $ is an eigenvalue of the matrix $ A $. Moreover, the eigenspaces agree:
    \\[ E_\\lambda \\left( T_A \\right) = \\left\\{ \\mathbf{x} \\in \\mathbb{R}^n \\mid A \\mathbf{x} = \\lambda \\mathbf{x} \\right\\} = E_\\lambda \\left( A \\right) \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to V $ be a linear operator where $ \\dim V = n $ and let $ B $ denote any ordered basis of $ V $, and let $ C_B : V \\to \\mathbb{R}^n $ denote the coordinate isomorphism. Then:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) The eigenvalues $ \\lambda $ of $ T $ are precisely the eigenvalues of the matrix $ M_B \\left( T \\right) $ and thus are the roots of the characteristic polynomial $ c_T \\left( x \\right) $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) In this case, the eigenspaces $ E_\\lambda \\left( T \\right) $ and $ E_\\lambda \\left[ M_B \\left( T \\right) \\right] $ are isomorphic via the restriction $ C_B : E_\\lambda \\left( T \\right) \\to E_\\lambda \\left[ M_B \\left( T \\right) \\right] $</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Each eigenspace of the linear operator $ T : V \\to V $ is a $ T $-invariant subspace of $ V $.
`
    },
    {
        type: "Definition",
        title: "Direct Sum of Subspaces",
        latex: `
A vector space $ V $ is said to be the direct sum of subspaces $ U $ and $ W $ if:
    \\[ U \\cap W = \\left\\{ \\mathbf{0} \\right\\} \\quad \\text{and} \\quad U + W = V \\]
    In this case, we write $ V = U \\oplus W $. Given a subspace $ U $, any subspace $ W $ such that $ U \\oplus W $ is called a complement of $ U $ in $ V $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ U $ and $ W $ be subspaces of a finite dimensional vector space $ V $. The following three conditions are equivalent:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ V = U \\oplus W $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) Each vector $ \\mathbf{v} \\in V $ can be written uniquely in the form
        \\[ \\mathbf{v} = \\mathbf{u} + \\mathbf{w} \\quad \\text{where} \\ \\mathbf{u} \\in U, \\mathbf{w} \\in W \\]</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) If $ \\left\\{ \\mathbf{u}_1, \\dots, \\mathbf{u}_k \\right\\} $ and $ \\left\\{ \\mathbf{w}_1, \\dots, \\mathbf{w}_m \\right\\} $ are bases of $ U $ and $ W $ respectively, then $ B = \\left\\{ \\mathbf{u}_1, \\dots, \\mathbf{u}_k, \\mathbf{w}_1, \\dots, \\mathbf{w}_m \\right\\} $ is a basis of $ V $.</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to V $ be a linear operator where $ V $ has dimension $ n $. Suppose $ V = U_1 \\oplus U_2 $ where both $ U_1 $ and $ U_2 $ are $ T $-invariant. If $ B_1 = \\left\\{ \\mathbf{b}_1, \\dots, \\mathbf{b}_k \\right\\} $ and $ B_2 = \\left\\{ \\mathbf{b}_{k+1}, \\dots, \\mathbf{b}_n \\right\\} $ are  bases of $ U_1 $ and $ U_2 $ respectively, then:
    \\[ B = \\left\\{ \\mathbf{b}_1, \\dots, \\mathbf{b}_k, \\mathbf{b}_{k+1}, \\dots, \\mathbf{b}_n \\right\\} \\]
    is a basis of $ V $, and $ M_B \\left( T \\right) $ has the block diagonal form:
    \\[ M_B \\left( T \\right) = \\begin{bmatrix} \\ M_{B_1} \\left( T \\right) & 0 \\ \\\\ \\ 0 & M_{B_2} \\left( T \\right) \\ \\end{bmatrix} \\]
    where $ M_{B_1} \\left( T \\right) $ and $ M_{B_2} \\left( T \\right) $ are the matrices of the restrictions of $ T $ to $ U_1 $ and to $ U_2 $ respectively.
`
    },
    {
        type: "Definition",
        title: "Reducible Linear Operator",
        latex: `
A linear operator $ T : V \\to V $ is said to be reducible if nonzero $ T $-invariant subspaces $ U_1 $ and $ U_2 $ can be found such that $ V = U_1 \\oplus U_2 $.
`
    },
    {
        type: "Definition",
        title: "Involution",
        latex: `
Let $ T : V \\to V $ be a linear operator such that $ T^2 = 1_V $. Then, $ T $ is an involution.
`
    },
    {
        type: "Definition",
        title: "Inner Product Spaces",
        latex: `
An inner product on a real vector space $ V $ is a function that assigns a real number $ \\langle \\mathbf{v}, \\mathbf{w} \\rangle $ to every pair $ \\mathbf{v}, \\mathbf{w} $ of vectors in $ V $ in such a way that the following axioms are satisfied:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\langle \\mathbf{v}, \\mathbf{w} \\rangle $ is a real number for all $ \\mathbf{v}, \\mathbf{w} \\in V $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\langle \\mathbf{v}, \\mathbf{w} \\rangle = \\langle \\mathbf{w}, \\mathbf{v} \\rangle $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ \\langle \\mathbf{v} + \\mathbf{w}, \\mathbf{u} \\rangle = \\langle \\mathbf{v}, \\mathbf{u} \\rangle + \\langle \\mathbf{w}, \\mathbf{u} \\rangle $ for all $ \\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\in V $</li>
<li style="list-style-type: none; margin-left: -15px;">(iv) $ \\langle r \\mathbf{v}, \\mathbf{w} \\rangle = r \\langle \\mathbf{v}, \\mathbf{w} \\rangle $ for all $ \\mathbf{v}, \\mathbf{w} \\in V $ and all $ r \\in \\mathbb{R} $</li>
<li style="list-style-type: none; margin-left: -15px;">(v) $ \\langle \\mathbf{v}, \\mathbf{v} \\rangle > 0 $ for all $ \\mathbf{v} \\neq \\mathbf{0} $ in $ V $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Inner Product Space",
        latex: `
A real vector space $ V $ with an inner product $ \\langle \\ , \\ \\rangle $ is called an inner product space.
`
    },
    {
        type: "Note",
        title: "",
        latex: `
Every subspace of an inner product space is again an inner product space using the same inner product.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ A $ is any $ n \\times n $ positive definite matrix, then
    \\[ \\langle \\mathbf{x}, \\mathbf{y} \\rangle = \\mathbf{x}^T A \\mathbf{y} \\quad \\text{for all columns} \\ \\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^n \\]
    defines an inner product on $ \\mathbb{R}^n $, and every inner product on $ \\mathbb{R}^n $ arises in this way.
`
    },
    {
        type: "Note",
        title: "",
        latex: `
Just as every linear operator $ \\mathbb{R}^n \\to \\mathbb{R}^n $ corresponds to an $ n \\times n $ matrix, every inner product on $ \\mathbb{R}^n $ corresponds to a positive definite $ n \\times n $ matrix. In particular, the dot product corresponds to the identity matrix $ I_n $.
`
    },
    {
        type: "Remark",
        title: "",
        latex: `
If we refer to the inner product space $ \\mathbb{R}^n $ without specifying the inner product, we mean that the dot product is to be used.
`
    },
    {
        type: "Definition",
        title: "Norm and Distance",
        latex: `
As in $ \\mathbb{R}^n $, if $ \\langle \\ , \\ \\rangle $ is an inner product on a space $ V $, the norm $ \\lVert \\mathbf{v} \\rVert $ of a vector $ \\mathbf{v} \\in V $ is defined by:
    \\[ \\lVert \\mathbf{v} \\rVert = \\sqrt{ \\langle \\mathbf{v}, \\mathbf{v} \\rangle } \\]
    We define the distance between vectors $ \\mathbf{v} $ and $ \\mathbf{w} $ in an inner product space to be:
    \\[ d \\left( \\mathbf{v}, \\mathbf{w} \\right) = \\lVert \\mathbf{v} - \\mathbf{w} \\rVert \\]
`
    },
    {
        type: "Definition",
        title: "Unit Vector",
        latex: `
A vector $ \\mathbf{v} $ in an inner product space $ V $ is called a unit vector if $ \\lVert \\mathbf{v} \\rVert = 1 $. The set of all unit vectors in $ V $ is called the unit ball in $ V $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ \\mathbf{v} \\neq \\mathbf{0} $ is any vector in an inner product space $ V $, then $ \\frac{1}{\\lVert \\mathbf{v} \\rVert} \\mathbf{v} $ is the unique unit vector that is a positive multiple of $ \\mathbf{v} $.
`
    },
    {
        type: "Theorem",
        title: "Cauchy-Schwarz Inequality",
        latex: `
If $ \\mathbf{v} $ and $ \\mathbf{w} $ are two vectors in an inner product space $ V $, then
    \\[ \\langle \\mathbf{v}, \\mathbf{w} \\rangle^2 \\leq \\lVert \\mathbf{v} \\rVert^2 \\lVert \\mathbf{w} \\rVert^2 \\]
    Moreover, equality occurs if and only if one of $ \\mathbf{v} $ and $ \\mathbf{w} $ is a scalar multiple of the other.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ V $ is an inner product, the norm $ \\lVert \\ \\rVert $ has the following properties:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\lVert \\mathbf{v} \\rVert \\geq 0 $ for every vector $ \\mathbf{v} \\in V $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\lVert \\mathbf{v} \\rVert = 0 $ if and only if $ \\mathbf{v} = \\mathbf{0} $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ \\lVert r \\mathbf{v} \\rVert = \\vert r \\vert \\lVert \\mathbf{v} \\rVert $ for every $ \\mathbf{v} \\in V $ and every $ r \\in \\mathbb{R} $</li>
<li style="list-style-type: none; margin-left: -15px;">(iv) $ \\lVert \\mathbf{v} + \\mathbf{w} \\rVert \\leq \\lVert \\mathbf{v} \\rVert + \\lVert \\mathbf{w} \\rVert $ for all $ \\mathbf{v}, \\mathbf{w} \\in V $ (triangle inequality)</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ V $ be an inner product space.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ d \\left( \\mathbf{v}, \\mathbf{w} \\right) \\geq 0 $ for all $ \\mathbf{v}, \\mathbf{w} \\in V $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ d \\left( \\mathbf{v}, \\mathbf{w} \\right) = 0 $ if and only if $ \\mathbf{v} = \\mathbf{w} $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ d \\left( \\mathbf{v}, \\mathbf{w} \\right) = d \\left( \\mathbf{w}, \\mathbf{v} \\right) $ for all $ \\mathbf{v}, \\mathbf{w} \\in V $</li>
<li style="list-style-type: none; margin-left: -15px;">(iv) $ d \\left( \\mathbf{v}, \\mathbf{w} \\right) \\leq d \\left( \\mathbf{v}, \\mathbf{u} \\right) + d \\left( \\mathbf{u}, \\mathbf{w} \\right) $ for all $ \\mathbf{v}, \\mathbf{u}, \\mathbf{w} \\in V $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Orthogonality",
        latex: `
Two vectors $ \\mathbf{v} $ and $ \\mathbf{w} $ in an inner product space $ V $ are said to be orthogonal if
    \\[ \\langle \\mathbf{v}, \\mathbf{w} \\rangle = 0 \\]
`
    },
    {
        type: "Definition",
        title: "Orthogonal and Orthonormal Sets",
        latex: `
A set $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_n \\right\\} $ of vectors is called an orthogonal set of vectors if:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) Each $ \\mathbf{f}_i \\neq \\mathbf{0} $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\langle \\mathbf{f}_i, \\mathbf{f}_j \\rangle $ for all $ i \\neq j $</li>
</ol>
    If, in addition, $ \\lVert \\mathbf{f}_i \\rVert = 1 $ for each $ i $, the set $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_n \\right\\} $ is called an orthonormal set.
`
    },
    {
        type: "Theorem",
        title: "Pythagoras' Theorem",
        latex: `
If $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_n \\right\\} $ is an orthogonal set of vectors, then:
    \\[ \\lVert \\mathbf{f}_1 + \\mathbf{f}_2 + \\dots + \\mathbf{f}_n \\rVert^2 = \\lVert \\mathbf{f}_1 \\rVert^2 + \\lVert \\mathbf{f}_2 \\rVert^2 + \\dots + \\lVert \\mathbf{f}_n \\rVert^2 \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_n \\right\\} $ be an orthogonal set of vectors.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\left\\{ r_1 \\mathbf{f}_1, r_2 \\mathbf{f}_2, \\dots, r_n \\mathbf{f}_n \\right\\} $ is also orthogonal for any $ r_i \\neq 0 \\in \\mathbb{R} $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\left\\{ \\frac{1}{\\lVert \\mathbf{f}_1 \\rVert} \\mathbf{f}_1, \\frac{1}{\\lVert \\mathbf{f}_2 \\rVert} \\mathbf{f}_2, \\dots, \\frac{1}{\\lVert \\mathbf{f}_n \\rVert} \\mathbf{f}_n \\right\\} $ is an orthonormal set</li>
</ol>
    The process of passing from an orthogonal set to an orthonormal one is called normalizing the orthogonal set.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Every orthogonal set of vectors is linearly independent.
`
    },
    {
        type: "Theorem",
        title: "Expansion Theorem",
        latex: `
Let $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_n \\right\\} $ be an orthogonal basis of an inner product space $ V $. If $ \\mathbf{v} $ is any vector in $ V $, then:
    \\[ \\mathbf{v} = \\frac{\\langle \\mathbf{v}, \\mathbf{f}_1 \\rangle}{\\lVert \\mathbf{f}_1 \\rVert^2} \\mathbf{f}_1 + \\frac{\\langle \\mathbf{v}, \\mathbf{f}_2 \\rangle}{\\lVert \\mathbf{f}_2 \\rVert^2} \\mathbf{f}_2 + \\dots + \\frac{\\langle \\mathbf{v}, \\mathbf{f}_n \\rangle}{\\lVert \\mathbf{f}_n \\rVert^2} \\mathbf{f}_n \\]
    is the expansion of $ \\mathbf{v} $ as a linear combination of the basis vectors.
    \\medskip
    \\newline
    The coefficients $ \\frac{\\langle \\mathbf{v}, \\mathbf{f}_1 \\rangle}{\\lVert \\mathbf{f}_1 \\rVert^2} \\mathbf{f}_1, \\frac{\\langle \\mathbf{v}, \\mathbf{f}_2 \\rangle}{\\lVert \\mathbf{f}_2 \\rVert^2} \\mathbf{f}_2, \\dots, \\frac{\\langle \\mathbf{v}, \\mathbf{f}_n \\rangle}{\\lVert \\mathbf{f}_n \\rVert^2} \\mathbf{f}_n $ in the expansion theorem are sometimes called the Fourier coefficients of $ \\mathbf{v} $ with respect to the orthogonal basis $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_n \\right\\} $.
`
    },
    {
        type: "Definition",
        title: "Lagrange Polynomials",
        latex: `
Let $ a_0, a_1, \\dots, a_n $ be distinct numbers. The Lagrange polynomial corresponding to $ a_k $ is
    \\[ \\delta_k \\left( x \\right) = \\frac{\\prod_{i \\neq k} \\left( x - a_i \\right)}{\\prod_{i \\neq k} \\left( a_k - a_i \\right)} \\quad k = 0, 1, 2, \\dots, n \\]
    It satisfies the interpolation property
    \\[ \\delta_k \\left( a_i \\right) = \\begin{cases} 1, & i = k \\\\ 0, & i \\neq k \\end{cases} \\]
    with the inner product
    \\[ \\langle p \\left( x \\right), q \\left( x \\right) \\rangle = \\sum_{i = 0}^n p \\left( a_i \\right) q \\left( a_i \\right) \\]
    the set $ \\left\\{ \\delta_0, \\delta_1, \\dots, \\delta_n \\right\\} $ forms an orthonormal basis for $ \\mathbf{P}_n $.
`
    },
    {
        type: "Definition",
        title: "Lagrange Interpolation Expansion",
        latex: `
Every polynomial $ p \\left( x \\right) \\in \\mathbf{P}_n $ can be written as
    \\[ p \\left( x \\right) = \\sum_{k = 0}^n p \\left( a_k \\right) \\delta_k \\left( x \\right) \\]
    This is called the Lagrange interpolation expansion (or Lagrange interpolation formula). It reconstructs a polynomial from its values at the distinct points $ a_0, a_1, \\dots, a_n $.
`
    },
    {
        type: "Lemma",
        title: "Orthogonal Lemma",
        latex: `
Let $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_m \\right\\} $ be an orthogonal set of vectors in an inner product space $ V $, and let $ \\mathbf{v} $ be any vector not in $ \\operatorname{span} \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_m \\right\\} $. Define
    \\[ \\mathbf{f}_{m + 1} = \\mathbf{v} - \\frac{\\langle \\mathbf{v}, \\mathbf{f}_1 \\rangle}{\\lVert \\mathbf{f}_1 \\rVert^2} \\mathbf{f}_1 - \\frac{\\langle \\mathbf{v}, \\mathbf{f}_2 \\rangle}{\\lVert \\mathbf{f}_2 \\rVert^2} \\mathbf{f}_2 - \\dots - \\frac{\\langle \\mathbf{v}, \\mathbf{f}_m \\rangle}{\\lVert \\mathbf{f}_m \\rVert^2} \\mathbf{f}_m \\]
    Then $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_m, \\mathbf{f}_{m + 1} \\right\\} $ is an orthogonal set of vectors.
`
    },
    {
        type: "Theorem",
        title: "Gram-Schmidt Orthogonalization Algorithm",
        latex: `
Let $ V $ be an inner product space and let $ \\left\\{ \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n \\right\\} $ be any basis of $ V $. Define vectors $ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_n \\in V $ successively as follows: 
    \\begin{align*}
        \\mathbf{f}_1 & = \\mathbf{v}_1 \\\\
        \\mathbf{f}_2 & = \\mathbf{v}_2 - \\frac{\\langle \\mathbf{v}_2, \\mathbf{f}_1 \\rangle}{\\lVert \\mathbf{f}_1 \\rVert^2} \\mathbf{f}_1 \\\\
        \\mathbf{f}_3 & = \\mathbf{v}_3 - \\frac{\\langle \\mathbf{v}_3, \\mathbf{f}_1 \\rangle}{\\lVert \\mathbf{f}_1 \\rVert^2} \\mathbf{f}_1 - \\frac{\\langle \\mathbf{v}_3, \\mathbf{f}_2 \\rangle}{\\lVert \\mathbf{f}_2 \\rVert^2} \\mathbf{f}_2 \\\\
        \\vdots \\\\
        \\mathbf{f}_k & = \\mathbf{v}_k - \\frac{\\langle \\mathbf{v}_k, \\mathbf{f}_1 \\rangle}{\\lVert \\mathbf{f}_1 \\rVert^2} \\mathbf{f}_1 - \\frac{\\langle \\mathbf{v}_k, \\mathbf{f}_2 \\rangle}{\\lVert \\mathbf{f}_2 \\rVert^2} \\mathbf{f}_2 - \\dots - \\frac{\\langle \\mathbf{v}_k, \\mathbf{f}_{k - 1} \\rangle}{\\lVert \\mathbf{f}_{k - 1} \\rVert^2} \\mathbf{f}_{k - 1} \\\\
    \\end{align*}
    for each $ k = 2, 3, \\dots n $. Then:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_n \\right\\} $ is an orthogonal basis of $ V $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\operatorname{span} \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_k \\right\\} = \\operatorname{span} \\left\\{ \\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k \\right\\} $ for each $ k = 1, 2, \\dots, n $</li>
</ol>
    The purpose of the Gram-Schmidt algorithm is to convert a basis of an inner product space into an orthogonal basis. In particular, it shows that every finite dimensional inner product space has an orthogonal basis.
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
If $ V $ is any $ n $-dimensional inner product space, then $ V $ is isomorphic to $ \\mathbb{R}^n $ as inner product spaces. More precisely, if $ E $ is any orthonormal basis of $ V $, the coordinate isomorphism
    \\[ C_E : V \\to \\mathbb{R}^n \\ \\text{satisfies} \\ \\langle \\mathbf{v}, \\mathbf{w} \\rangle = C_E \\left( \\mathbf{v} \\right) \\cdot C_E \\left( \\mathbf{w} \\right) \\]
    for all $ \\mathbf{v}, \\mathbf{w} \\in V $.
`
    },
    {
        type: "Definition",
        title: "Orthogonal Complement",
        latex: `
Let $ U $ be a subspace of an inner product space $ V $. As in $ \\mathbb{R}^n $, the orthogonal complement $ U^\\perp $ of $ U $ in $ V $ is defined by:
    \\[ U^\\perp = \\left\\{ \\mathbf{v} \\in V \\mid \\langle \\mathbf{v}, \\mathbf{u} \\rangle = 0 \\ \\forall \\mathbf{u} \\in U \\right\\} \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ U $ be a finite dimensional subspace of an inner product space $ V $
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ U^\\perp $ is a subspace of $ V $ and $ V $ = $ U \\oplus U^\\perp $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) If $ \\dim V = n $, then $ \\dim U + \\dim U^\\perp = n $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) If $ \\dim V = n $, then $ U^{\\perp \\perp} = U $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Orthogonal Projection on a Subspace",
        latex: `
The projection on $ U $ with kernel $ U^\\perp $ is called the orthogonal projection on $ U $ (or simply the projection on $ U $) and is denoted $ \\operatorname{proj}_U : V \\to V $
`
    },
    {
        type: "Theorem",
        title: "Projection Theorem",
        latex: `
Let $ U $ be a finite dimensional subspace of an inner product space $ V $ and let $ \\mathbf{v} \\in V $
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\operatorname{proj}_U : V \\to V $ is a linear operator with image $ U $ and kernel $ U^\\perp $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\operatorname{proj}_U \\mathbf{v} \\in U $ and $ \\left( \\mathbf{v} - \\operatorname{proj}_U \\mathbf{v} \\right) \\in U^\\perp $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) If $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_m \\right\\} $ is any orthogonal basis of $ U $, then
        \\[ \\operatorname{proj}_U \\mathbf{v} = \\frac{\\langle \\mathbf{v}, \\mathbf{f}_1 \\rangle}{\\lVert \\mathbf{f}_1 \\rVert^2} \\mathbf{f}_1 + \\frac{\\langle \\mathbf{v}, \\mathbf{f}_2 \\rangle}{\\lVert \\mathbf{f}_2 \\rVert^2} \\mathbf{f}_2 + \\dots + \\frac{\\langle \\mathbf{v}, \\mathbf{f}_m \\rangle}{\\lVert \\mathbf{f}_m \\rVert^2} \\mathbf{f}_m \\]
        Note that there is no requirement that $ V $ is finite dimensional.</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Approximation Theorem",
        latex: `
Let $ U $ be a finite dimensional subspace of an inner product space $ V $. If $ \\mathbf{v} $ is any vector in $ V $, then $ \\operatorname{proj}_U \\mathbf{v} $ is the vector in $ U $ that is closest to $ \\mathbf{v} $. Here closest means that
    \\[ \\lVert \\mathbf{v} - \\operatorname{proj}_U \\mathbf{v} \\rVert < \\lVert \\mathbf{v} - \\mathbf{u} \\rVert \\]
    for all $ \\mathbf{u} \\in U, u \\neq \\operatorname{proj}_U \\mathbf{v} $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to V $ be a linear operator on a finite dimensional space $ V $. Then the following conditions are equivalent:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ V $ has a basis consisting of eigenvectors of $ T $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) There exists a basis $ B $ of $ V $ such that $ M_B \\left( T \\right) $ is diagonal</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Diagonalizable Linear Operators",
        latex: `
A linear operator $ T $ on a finite dimensional space $ V $ is called diagonalizable if $ V $ has a basis consisting of eigenvectors of $ T $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to V $ be a linear operator on an inner product space $ V $. If $ B = \\left\\{ \\mathbf{b}_1, \\mathbf{b}_2, \\dots, \\mathbf{b}_n \\right\\} $ is an orthogonal basis of $ V $, then
    \\[ M_B \\left( T \\right) = \\left[ \\frac{\\langle \\mathbf{b}_i, T \\left( \\mathbf{b}_j \\right) \\rangle}{\\lVert \\mathbf{b}_i \\rVert^2} \\right] \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ V $ be a finite dimensional inner product space. The following conditions are equivalent for a linear operator $ T : V \\to V $.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ \\langle \\mathbf{v}, T \\left( \\mathbf{v} \\right) \\rangle = \\langle T \\left( \\mathbf{v} \\right), \\mathbf{w} \\rangle $ for all $ \\mathbf{v}, \\mathbf{w} \\in V $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) The matrix of $ T $ is symmetric with respect to every orthonormal basis of $ V $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) The matrix of $ T $ is symmetric with respect to some orthonormal basis of $ V $</li>
<li style="list-style-type: none; margin-left: -15px;">(iv) There is an orthonormal basis $ B = \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_n \\right\\} $ of $ V $ such that $ \\langle \\mathbf{f}_i, T \\left( \\mathbf{f}_j \\right) \\rangle = \\langle T \\left( \\mathbf{f}_i \\right), \\mathbf{f}_j \\rangle $ holds for all $ i $ and $ j $.</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Symmetric Linear Operator",
        latex: `
A linear operator $ T $ on an inner product space $ V $ is called symmetric if $ \\langle \\mathbf{v}, T \\left( \\mathbf{w} \\right) \\rangle = \\langle T \\left( \\mathbf{v} \\right), \\mathbf{w} \\rangle $ holds for all $ \\mathbf{v}, \\mathbf{w} \\in V $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
A symmetric linear operator on a finite dimensional inner product space has real eigenvalues.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to V $ be a symmetric linear operator on an inner product space $ V $, and let $ U $ be a $ T $-invariant subspace of $ V $. Then:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) The restriction of $ T $ to $ U $ is a symmetric linear operator on $ U $</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ U^\\perp $ is also $ T $-invariant</li>
</ol>
`
    },
    {
        type: "Theorem",
        title: "Principal Axes Theorem",
        latex: `
The following conditions are equivalent for a linear operator $ T $ on a finite dimensional inner product space $ V $.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ T $ is symmetric</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ V $ has an orthogonal basis consisting of eigenvectors of $ T $</li>
</ol>
`
    },
    {
        type: "Definition",
        title: "Distance Preserving",
        latex: `
If $ V $ is an inner product space, a transformation $ S : V \\to V $ (not necessarily linear) is said to be distancing preserving if:
    \\[ \\lVert S \\left( \\mathbf{v} \\right) - S \\left( \\mathbf{w} \\right) \\rVert = \\lVert \\mathbf{v} - \\mathbf{w} \\rVert \\quad \\text{for all} \\ \\mathbf{v}, \\mathbf{w} \\in V \\]
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
Let $ V $ be an inner product space of dimension $ n $, and consider a distance preserving transformation $ S : V \\to V $. If $ S \\left( \\mathbf{0} \\right) = \\mathbf{0} $, then $ S $ is linear.
`
    },
    {
        type: "Definition",
        title: "Isometries",
        latex: `
Distance preserving linear operators are called isometries.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ V $ is a finite dimensional inner product space, then every distance preserving transformation $ S : V \\to V $ is the composite of a translation and an isometry.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to V $ be a linear operator on a finite dimensional inner product space $ V $. The following conditions are equivalent:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ T $ is an isometry ($ T $ preserves distance)</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ \\lVert T \\left( \\mathbf{v} \\right) \\rVert = \\lVert \\mathbf{v} \\rVert \\ \\forall \\mathbf{v} \\in V $ ($ T $ preserves norms)</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ \\langle T \\left( \\mathbf{v} \\right), T \\left( \\mathbf{w} \\right) \\rangle = \\langle \\mathbf{v}, \\mathbf{w} \\rangle \\ \\forall \\mathbf{v}, \\mathbf{w} \\in V $ ($ T $ preserves inner products)</li>
<li style="list-style-type: none; margin-left: -15px;">(iv) If $ \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_n \\right\\} $ is an orthonormal basis of $ V $, then $ \\left\\{ T \\left( \\mathbf{f}_1 \\right), T \\left( \\mathbf{f}_2 \\right), \\dots, T \\left( \\mathbf{f}_n \\right) \\right\\} $ is also an orthonormal basis ($ T $ preserves orthonormal bases)</li>
<li style="list-style-type: none; margin-left: -15px;">(v) $ T $ carries some orthonormal basis to an orthonormal basis</li>
</ol>
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
Let $ V $ be a finite dimensional inner product space.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) Every isometry of a finite dimensional $ V $ is an isomorphism
        <ol>
</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ 1_V : V \\to V $ is an isometry</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) The composite of two isometries of $ V $ is an isometry</li>
<li style="list-style-type: none; margin-left: -15px;">(iv) The inverse of an isometry of $ V $ is an isometry</li>
</ol>
</ol>
    The conditions in (ii) assert that the set of isometries of a finite dimensional inner product space form a group.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to V $ be an operator where $ V $ is a finite dimensional inner product space. The following conditions are equivalent.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ T $ is an isometry</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ M_B \\left( T \\right) $ is an orthogonal matrix for every orthonormal basis $ B $</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ M_B \\left( T \\right) $ is an orthogonal matrix for some orthonormal basis $ B $</li>
</ol>
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
If $ T : V \\to V $ is an isometry where $ V $ is a finite dimensional inner product space, then $ \\det T = \\pm 1 $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to V $ be an isometry on the two-dimensional inner product space $ V $. Then there are two possibilities:
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) There is an orthonormal basis $ B $ of $ V $ such that
        \\[ M_B \\left( T \\right) = \\begin{bmatrix} \\ \\cos \\theta & -\\sin \\theta \\ \\\\ \\ \\sin \\theta & \\cos \\theta \\ \\end{bmatrix}, 0 \\leq \\theta < 2 \\pi \\]</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) There is an orthonormal basis $ B $ of $ V $ such that
        \\[ M_B \\left( T \\right) = \\begin{bmatrix} \\ 1 & 0 \\\\ \\ 0 & -1 \\ \\end{bmatrix} \\]</li>
</ol>
    Furthermore, type (i) occurs if and only if $ \\det T = 1 $, and type (ii) occurs if and only if $ \\det T = -1 $.
`
    },
    {
        type: "Corollary",
        title: "",
        latex: `
An operator $ T : \\mathbb{R}^2 \\to \\mathbb{R}^2 $ is an isometry if and only if $ T $ is a rotation or a reflection.
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
Let $ T : V \\to V $ be an isometry of a finite dimensional inner product space $ V $. If $ U $ is a $ T $-invariant subspace of $ V $, then $ U^\\perp $ is also $ T $-invariant.
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
Let $ T : V \\to V $ be an isometry of the finite dimensional inner product space $ V $. If $ \\lambda $ is a complex eigenvalue of $ T $, then $ \\lvert \\lambda \\rvert = 1 $.
`
    },
    {
        type: "Lemma",
        title: "",
        latex: `
Let $ T : V \\to V $ be an isometry of the $ n $-dimensional inner product space $ V $. If $ T $ has a non-real eigenvalue, then $ V $ has a two-dimensional $ T $-invariant subspace.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to V $ be an isometry of the $ n $-dimensional inner product space $ V $. Given an angle $ \\theta $, write $ R \\left( \\theta \\right) = \\begin{bmatrix} \\ \\cos \\theta & -\\sin \\theta \\ \\\\ \\ \\sin \\theta & \\cos \\theta \\ \\end{bmatrix} $. Then there exists an orthonormal basis $ B $ of $ V $ such that $ M_B \\left( T \\right) $ has one of the following block diagonal forms, classified for convenience by whether $ n $ is odd or even:
    \\[ n = 2k + 1: \\begin{bmatrix} \\ 1 & 0 & \\cdots & 0 \\ \\\\ \\ 0 & R \\left( \\theta_1 \\right) & \\cdots & 0 \\ \\\\ \\ \\vdots & \\vdots & \\ddots & \\vdots \\ \\\\ \\ 0 & 0 & \\cdots & R \\left( \\theta_k \\right) \\ \\end{bmatrix} \\quad \\text{or} \\quad \\begin{bmatrix} \\ -1 & 0 & \\cdots & 0 \\ \\\\ \\ 0 & R \\left( \\theta_1 \\right) & \\cdots & 0 \\ \\\\ \\ \\vdots & \\vdots & \\ddots & \\vdots \\ \\\\ \\ 0 & 0 & \\cdots & R \\left( \\theta_k \\right) \\ \\end{bmatrix} \\]
    \\[ n = 2k: \\begin{bmatrix} \\ R \\left( \\theta_1 \\right) & 0 & \\cdots & 0 \\ \\\\ \\ 0 & R \\left( \\theta_2 \\right) & \\cdots & 0 \\ \\\\ \\ \\vdots & \\vdots & \\ddots & \\vdots \\ \\\\ \\ 0 & 0 & \\cdots & R \\left( \\theta_k \\right) \\ \\end{bmatrix} \\quad \\text{or} \\quad \\begin{bmatrix} \\ -1 & 0 & 0 & \\cdots & 0 \\ \\\\ \\ 0 & 1 & 0 & \\cdots & 0 \\ \\\\ \\ 0 & 0 & R \\left( \\theta_1 \\right) & \\cdots & 0 \\ \\\\ \\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\ \\\\ \\ 0 & 0 & 0 & \\cdots & R \\left( \\theta_{k - 1} \\right) \\ \\end{bmatrix} \\]
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
If $ T : \\mathbb{R}^3 \\to \\mathbb{R}^3 $ is an isometry, there are three possibilities.
    <ol>
<li style="list-style-type: none; margin-left: -15px;">(i) $ T $ is a rotation, and $ M_B \\left( T \\right) = \\begin{bmatrix} \\ 1 & 0 & 0 \\ \\\\ \\ 0 & \\cos \\theta & -\\sin \\theta \\ \\\\ \\ 0 & \\sin \\theta & \\cos \\theta \\ \\end{bmatrix} $ for some orthonormal basis $ B $.</li>
<li style="list-style-type: none; margin-left: -15px;">(ii) $ T $ is a reflection, and $ M_B \\left( T \\right) = \\begin{bmatrix} \\ 1 & 0 & 0 \\ \\\\ \\ 0 & 1 & 0 \\ \\\\ \\ 0 & 0 & 1 \\ \\end{bmatrix} $ for some orthonormal basis $ B $.</li>
<li style="list-style-type: none; margin-left: -15px;">(iii) $ T = QR = RQ $ where $ Q $ is a reflection, $ R $ is a rotation about an axis perpendicular to the fixed plane of $ Q $ and $ M_B \\left( T \\right) = \\begin{bmatrix} \\ -1 & 0 & 0 \\ \\\\ \\ 0 & \\cos \\theta & -\\sin \\theta \\ \\\\ \\ 0 & \\sin \\theta & \\cos \\theta \\ \\end{bmatrix} $ for some orthonormal basis $ B $.</li>
</ol>
    Hence, $ T $ is a rotation if and only if $ \\det T = 1 $.
`
    },
    {
        type: "Definition",
        title: "Hyperplane",
        latex: `
Let $ V $ be an $ n $-dimensional inner product space. A subspace of $ V $ of dimension $ n - 1 $ is called a hyperplane in $ V $.
`
    },
    {
        type: "Definition",
        title: "Fixed Hyperplanes and Reflection",
        latex: `
Let $ V $ be an $ n $-dimensional inner product space, and let $ Q : V \\to V $ be an isometry with matrix
    \\[ M_B \\left( Q \\right) = \\begin{bmatrix} \\ -1 & 0 \\ \\\\ \\ 0 & I_{n - 1} \\ \\end{bmatrix} \\]
    for some orthonormal basis $ B = \\left\\{ \\mathbf{f}_1, \\mathbf{f}_2, \\dots, \\mathbf{f}_n \\right\\} $. Then $ Q \\left( \\mathbf{f}_1 \\right) = -\\mathbf{f}_1 $ whereas $ Q \\left( \\mathbf{u} \\right) = \\mathbf{u} $ for each $ \\mathbf{u} \\in U = \\operatorname{span} \\left\\{ \\mathbf{f}_2, \\dots, \\mathbf{f}_n \\right\\} $. Hence $ U $ is called the fixed hyperplane of $ Q $ and $ Q $ is called reflection in $ U $. Note that each hyperplane in $ V $ is the fixed hyperplane of a (unique) reflection of $ V $.
`
    },
    {
        type: "Theorem",
        title: "",
        latex: `
Let $ T : V \\to V $ be an isometry of a finite dimensional inner product space $ V $. Then there exist isometries $ T_1, \\dots, T_k $ such that
    \\[ T = T_k T_{k - 1} \\cdots T_2 T_1 \\]
    where each $ T_i $ is either a rotation or a reflection, at most one is a reflection, and $ T_i T_j = T_j T_i $ holds for all $ i $ and $ j $. Furthermore, $ T $ is a composite of rotations if and only if $ \\det T = 1 $.
`
    }
];