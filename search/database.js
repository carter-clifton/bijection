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
    }
];