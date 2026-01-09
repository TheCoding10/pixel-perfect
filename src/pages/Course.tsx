// Mock lesson data
const MOCK_LESSONS: Record<string, any> = {
  "algebra-1": {
    id: 1,
    course_id: 1,
    title: "Algebra 1",
    slug: "algebra-1",
    description: "Foundation of algebraic concepts",
    thumbnail: null,
    duration_hours: 10,
    lessons: [
      { id: 1, course_id: 1, title: "Foundations", slug: "foundations", description: "Building blocks of algebra", video_url: null, duration_seconds: 1800, order_index: 1 },
      { id: 2, course_id: 1, title: "Solving Linear Equations", slug: "solving-linear-equations", description: "Master solving linear equations", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 3, course_id: 1, title: "Solving and Graphing Linear Inequalities", slug: "linear-inequalities", description: "Understanding and graphing inequalities", video_url: null, duration_seconds: 2000, order_index: 3 },
      { id: 4, course_id: 1, title: "Linear Functions", slug: "linear-functions", description: "Explore linear functions and their graphs", video_url: null, duration_seconds: 2200, order_index: 4 },
      { id: 5, course_id: 1, title: "Systems of Linear Equations & Inequalities", slug: "systems-linear", description: "Solving systems of equations and inequalities", video_url: null, duration_seconds: 2400, order_index: 5 },
      { id: 6, course_id: 1, title: "Exponents & Exponential Functions", slug: "exponents", description: "Understanding exponents and exponential functions", video_url: null, duration_seconds: 2100, order_index: 6 },
      { id: 7, course_id: 1, title: "Polynomials", slug: "polynomials", description: "Working with polynomial expressions", video_url: null, duration_seconds: 2300, order_index: 7 },
      { id: 8, course_id: 1, title: "Factoring", slug: "factoring", description: "Factoring techniques and applications", video_url: null, duration_seconds: 2200, order_index: 8 },
      { id: 9, course_id: 1, title: "Quadratic Functions & Equations", slug: "quadratics", description: "Understanding quadratic functions and equations", video_url: null, duration_seconds: 2500, order_index: 9 },
      { id: 10, course_id: 1, title: "Rational Expressions & Equations", slug: "rational-expressions", description: "Working with rational expressions", video_url: null, duration_seconds: 2400, order_index: 10 },
      { id: 11, course_id: 1, title: "Radicals & Radical Functions", slug: "radicals", description: "Understanding radicals and radical functions", video_url: null, duration_seconds: 2300, order_index: 11 },
    ]
  },
  "geometry": {
    id: 2,
    course_id: 2,
    title: "Geometry",
    slug: "geometry",
    description: "Shapes, angles, and spatial reasoning",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 4, course_id: 2, title: "Foundations of Geometry", slug: "foundations-geometry", description: "Fundamental geometric concepts", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 5, course_id: 2, title: "Logic & Proof", slug: "logic-proof", description: "Mathematical reasoning and proofs", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 6, course_id: 2, title: "Parallel & Perpendicular Lines", slug: "parallel-perpendicular-lines", description: "Properties of parallel and perpendicular lines", video_url: null, duration_seconds: 2200, order_index: 3 },
      { id: 7, course_id: 2, title: "Triangle Geometry", slug: "triangle-geometry", description: "Properties and theorems of triangles", video_url: null, duration_seconds: 2400, order_index: 4 },
      { id: 8, course_id: 2, title: "Coordinate Geometry", slug: "coordinate-geometry", description: "Geometry on the coordinate plane", video_url: null, duration_seconds: 2300, order_index: 5 },
      { id: 9, course_id: 2, title: "Quadrilaterals & Polygons", slug: "quadrilaterals-polygons", description: "Properties of quadrilaterals and polygons", video_url: null, duration_seconds: 2200, order_index: 6 },
      { id: 10, course_id: 2, title: "Similarity", slug: "similarity", description: "Similar figures and proportions", video_url: null, duration_seconds: 2100, order_index: 7 },
      { id: 11, course_id: 2, title: "Trigonometry (Basic)", slug: "basic-trigonometry", description: "Introduction to trigonometry", video_url: null, duration_seconds: 2400, order_index: 8 },
      { id: 12, course_id: 2, title: "Circles", slug: "circles", description: "Circle properties and theorems", video_url: null, duration_seconds: 2200, order_index: 9 },
      { id: 13, course_id: 2, title: "Area & Perimeter", slug: "area-perimeter", description: "Calculating area and perimeter", video_url: null, duration_seconds: 2000, order_index: 10 },
      { id: 14, course_id: 2, title: "Volume", slug: "volume", description: "Calculating volume of 3D shapes", video_url: null, duration_seconds: 2100, order_index: 11 },
      { id: 15, course_id: 2, title: "Transformations", slug: "transformations", description: "Geometric transformations", video_url: null, duration_seconds: 2200, order_index: 12 },
    ]
  },
  "algebra-2": {
    id: 3,
    course_id: 3,
    title: "Algebra 2",
    slug: "algebra-2",
    description: "Advanced algebraic techniques",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 7, course_id: 3, title: "Foundations & Review", slug: "foundations-review", description: "Review of foundational algebra concepts and skills", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 8, course_id: 3, title: "Functions & Graphs", slug: "functions-graphs", description: "Understanding functions, their properties, and graphical representations", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 9, course_id: 3, title: "Polynomials", slug: "polynomials", description: "Operations with polynomials, factoring, and polynomial equations", video_url: null, duration_seconds: 2800, order_index: 3 },
      { id: 10, course_id: 3, title: "Rational Expressions & Functions", slug: "rational-expressions", description: "Working with rational expressions, equations, and functions", video_url: null, duration_seconds: 2600, order_index: 4 },
      { id: 11, course_id: 3, title: "Quadratic Functions", slug: "quadratic-functions", description: "Quadratic equations, graphs, and applications", video_url: null, duration_seconds: 2700, order_index: 5 },
      { id: 12, course_id: 3, title: "Exponential & Logarithmic Functions", slug: "exponential-logarithmic", description: "Exponential and logarithmic functions, equations, and applications", video_url: null, duration_seconds: 3000, order_index: 6 },
      { id: 13, course_id: 3, title: "Sequences & Series", slug: "sequences-series", description: "Arithmetic and geometric sequences and series", video_url: null, duration_seconds: 2500, order_index: 7 },
      { id: 14, course_id: 3, title: "Radical Functions & Expressions", slug: "radical-functions", description: "Radical expressions, equations, and functions", video_url: null, duration_seconds: 2400, order_index: 8 },
      { id: 15, course_id: 3, title: "Probability & Statistics (Algebra 2 Level)", slug: "probability-statistics", description: "Probability, data analysis, and statistical concepts", video_url: null, duration_seconds: 2600, order_index: 9 },
      { id: 16, course_id: 3, title: "Trigonometry (Intro Level)", slug: "trigonometry-intro", description: "Introduction to trigonometric functions and their applications", video_url: null, duration_seconds: 2800, order_index: 10 },
    ]
  },
  "trigonometry": {
    id: 4,
    course_id: 4,
    title: "Trigonometry",
    slug: "trigonometry",
    description: "Study of triangles and trigonometric functions",
    thumbnail: null,
    duration_hours: 10,
    lessons: [
      { id: 10, course_id: 4, title: "Trigonometric Ratios", slug: "trig-ratios", description: "Sine, cosine, tangent; right-triangle definitions; solving right triangles", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 11, course_id: 4, title: "Unit Circle", slug: "unit-circle", description: "Radians, unit circle values, reference angles, and quadrants", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 12, course_id: 4, title: "Trigonometric Identities", slug: "trig-identities", description: "Pythagorean identities, reciprocal identities, quotient identities, and simplifying expressions", video_url: null, duration_seconds: 2500, order_index: 3 },
      { id: 13, course_id: 4, title: "Graphs of Trigonometric Functions", slug: "trig-graphs", description: "Sine, cosine, tangent graphs; amplitude, period, phase shift, vertical shift", video_url: null, duration_seconds: 2800, order_index: 4 },
      { id: 14, course_id: 4, title: "Inverse Trigonometric Functions", slug: "inverse-trig", description: "Arcsin, arccos, arctan; domains, ranges, and solving equations", video_url: null, duration_seconds: 2600, order_index: 5 },
      { id: 15, course_id: 4, title: "Trigonometric Equations", slug: "trig-equations", description: "Solving basic and advanced trig equations; general solutions; restricted solutions", video_url: null, duration_seconds: 2700, order_index: 6 },
      { id: 16, course_id: 4, title: "Law of Sines and Law of Cosines", slug: "law-sines-cosines", description: "Solving non-right triangles; ambiguous case (SSA)", video_url: null, duration_seconds: 2500, order_index: 7 },
      { id: 17, course_id: 4, title: "Trigonometric Applications", slug: "trig-applications", description: "Modeling periodic behavior, harmonic motion, bearings, heights & distances", video_url: null, duration_seconds: 2800, order_index: 8 },
      { id: 18, course_id: 4, title: "Polar Coordinates & Complex Numbers (Trig Form)", slug: "polar-complex", description: "Plotting in polar form, converting between forms, De Moivre's Theorem", video_url: null, duration_seconds: 3000, order_index: 9 },
      { id: 19, course_id: 4, title: "Advanced Trigonometric Identities", slug: "advanced-trig-identities", description: "Sum & difference formulas, double-angle, half-angle, product-to-sum", video_url: null, duration_seconds: 2900, order_index: 10 },
    ]
  },
  "precalculus": {
    id: 5,
    course_id: 5,
    title: "Precalculus",
    slug: "precalculus",
    description: "Preparation for calculus concepts",
    thumbnail: null,
    duration_hours: 14,
    lessons: [
      { id: 13, course_id: 5, title: "Functions and Graphs", slug: "functions-graphs", description: "Understanding functions, transformations, domains, ranges, intercepts, and graph behavior", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 14, course_id: 5, title: "Sequences and Series", slug: "sequences-series", description: "Arithmetic and geometric sequences, sigma notation, partial sums", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 15, course_id: 5, title: "Introduction to Limits", slug: "intro-limits", description: "Concept of limits, one-sided limits, continuity, preparing for Calculus I", video_url: null, duration_seconds: 3000, order_index: 3 },
      { id: 16, course_id: 5, title: "Polynomial Functions", slug: "polynomial-functions", description: "End behavior, zeros, factorization, graphing, multiplicity, division", video_url: null, duration_seconds: 2800, order_index: 4 },
      { id: 17, course_id: 5, title: "Rational Functions", slug: "rational-functions", description: "Asymptotes, holes, intercepts, graphing techniques", video_url: null, duration_seconds: 2600, order_index: 5 },
      { id: 18, course_id: 5, title: "Exponential & Logarithmic Functions", slug: "exp-log-functions", description: "Laws of logs, natural logarithm, exponential equations, applications to growth/decay", video_url: null, duration_seconds: 2900, order_index: 6 },
      { id: 19, course_id: 5, title: "Trigonometric Functions", slug: "trig-functions", description: "Unit circle, radians, graphs of sine/cosine/tangent, identities", video_url: null, duration_seconds: 2700, order_index: 7 },
      { id: 20, course_id: 5, title: "Inverse Trigonometric Functions", slug: "inverse-trig-functions", description: "Arcsin, arccos, arctan, solving equations involving inverse trig", video_url: null, duration_seconds: 2500, order_index: 8 },
      { id: 21, course_id: 5, title: "Trigonometric Equations & Identities", slug: "trig-equations-identities", description: "Advanced identities, sum/difference, double-angle, solving trig equations", video_url: null, duration_seconds: 2800, order_index: 9 },
      { id: 22, course_id: 5, title: "Systems of Equations & Inequalities", slug: "systems-equations", description: "Linear systems, substitution/elimination, nonlinear systems, inequalities", video_url: null, duration_seconds: 2600, order_index: 10 },
      { id: 23, course_id: 5, title: "Matrices & Determinants", slug: "matrices-determinants", description: "Matrix operations, inverses, solving systems using matrices", video_url: null, duration_seconds: 2700, order_index: 11 },
      { id: 24, course_id: 5, title: "Vectors in 2D and 3D", slug: "vectors-2d-3d", description: "Vector addition, scalar multiplication, dot product, direction angles", video_url: null, duration_seconds: 2500, order_index: 12 },
      { id: 25, course_id: 5, title: "Parametric Equations", slug: "parametric-equations", description: "Parameterizing curves, converting between parametric and Cartesian forms", video_url: null, duration_seconds: 2400, order_index: 13 },
      { id: 26, course_id: 5, title: "Polar Coordinates & Complex Numbers", slug: "polar-complex-numbers", description: "Plotting polar graphs, converting forms, Euler's formula, De Moivre's theorem", video_url: null, duration_seconds: 2800, order_index: 14 },
    ]
  },
  "calculus-1": {
    id: 6,
    course_id: 6,
    title: "Calculus I",
    slug: "calculus-1",
    description: "Introduction to limits, derivatives, and integrals",
    thumbnail: null,
    duration_hours: 15,
    lessons: [
      { id: 16, course_id: 6, title: "Limits & Continuity", slug: "limits-continuity", description: "Understanding limits and continuity", video_url: null, duration_seconds: 3000, order_index: 1 },
      { id: 17, course_id: 6, title: "The Derivative", slug: "the-derivative", description: "Introduction to derivatives", video_url: null, duration_seconds: 3300, order_index: 2 },
      { id: 18, course_id: 6, title: "Applications of Derivatives", slug: "applications-derivatives", description: "Real-world applications of derivatives", video_url: null, duration_seconds: 3600, order_index: 3 },
      { id: 19, course_id: 6, title: "Integrals", slug: "integrals", description: "Introduction to integrals", video_url: null, duration_seconds: 3600, order_index: 4 },
    ]
  },
  "calculus-2": {
    id: 7,
    course_id: 7,
    title: "Calculus II",
    slug: "calculus-2",
    description: "Advanced integration and series",
    thumbnail: null,
    duration_hours: 15,
    lessons: [
      { id: 19, course_id: 7, title: "Advanced Integration Techniques", slug: "advanced-integration-techniques", description: "Advanced integration methods", video_url: null, duration_seconds: 3000, order_index: 1 },
      { id: 20, course_id: 7, title: "Applications of Integration", slug: "applications-integration", description: "Real-world applications of integration", video_url: null, duration_seconds: 3200, order_index: 2 },
      { id: 21, course_id: 7, title: "Sequences", slug: "sequences", description: "Understanding sequences", video_url: null, duration_seconds: 2800, order_index: 3 },
      { id: 22, course_id: 7, title: "Infinite Series", slug: "infinite-series", description: "Convergence and divergence", video_url: null, duration_seconds: 3300, order_index: 4 },
      { id: 23, course_id: 7, title: "Power Series", slug: "power-series", description: "Working with power series", video_url: null, duration_seconds: 3000, order_index: 5 },
      { id: 24, course_id: 7, title: "Taylor & Maclaurin Series", slug: "taylor-maclaurin-series", description: "Taylor and Maclaurin series", video_url: null, duration_seconds: 3000, order_index: 6 },
    ]
  },
  "multivariable-calculus": {
    id: 8,
    course_id: 8,
    title: "Multivariable Calculus",
    slug: "multivariable-calculus",
    description: "Calculus in multiple dimensions",
    thumbnail: null,
    duration_hours: 16,
    lessons: [
      { id: 22, course_id: 8, title: "Vectors and Geometry of Space", slug: "vectors-geometry-space", description: "Fundamentals of 3D coordinate systems, vectors, dot and cross products, lines, planes, and quadric surfaces", video_url: null, duration_seconds: 3000, order_index: 1 },
      { id: 23, course_id: 8, title: "Multivariable Functions", slug: "multivariable-functions", description: "Functions of several variables, limits, continuity, level curves, and level surfaces", video_url: null, duration_seconds: 2800, order_index: 2 },
      { id: 24, course_id: 8, title: "Partial Derivatives", slug: "partial-derivatives", description: "Partial derivatives, directional derivatives, gradient vector, tangent planes, chain rule, and optimization with Lagrange multipliers", video_url: null, duration_seconds: 3200, order_index: 3 },
      { id: 25, course_id: 8, title: "Multiple Integrals", slug: "multiple-integrals", description: "Double and triple integrals over various regions, polar/cylindrical/spherical coordinates, and applications", video_url: null, duration_seconds: 3600, order_index: 4 },
      { id: 26, course_id: 8, title: "Vector Fields", slug: "vector-fields", description: "Understanding vector fields, divergence, curl, and potential functions", video_url: null, duration_seconds: 2700, order_index: 5 },
      { id: 27, course_id: 8, title: "Line Integrals", slug: "line-integrals", description: "Scalar and vector line integrals, conservative fields, path independence, and the fundamental theorem for line integrals", video_url: null, duration_seconds: 3000, order_index: 6 },
      { id: 28, course_id: 8, title: "Surface Integrals", slug: "surface-integrals", description: "Parametric surfaces, surface area, surface integrals for scalar and vector fields, and flux", video_url: null, duration_seconds: 3300, order_index: 7 },
      { id: 29, course_id: 8, title: "Integral Theorems", slug: "integral-theorems", description: "Green's Theorem, Stokes' Theorem, and the Divergence Theorem", video_url: null, duration_seconds: 3000, order_index: 8 },
    ]
  },
  "linear-algebra": {
    id: 9,
    course_id: 9,
    title: "Linear Algebra",
    slug: "linear-algebra",
    description: "Vectors, matrices, and linear transformations",
    thumbnail: null,
    duration_hours: 14,
    lessons: [
      { id: 30, course_id: 9, title: "Vectors and Matrices", slug: "vectors-matrices", description: "Introduction to vectors, matrices, matrix operations, and vector spaces", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 31, course_id: 9, title: "Systems of Linear Equations", slug: "linear-systems", description: "Gaussian elimination, row-reduction, echelon forms, and solution types", video_url: null, duration_seconds: 3000, order_index: 2 },
      { id: 32, course_id: 9, title: "Determinants", slug: "determinants", description: "Properties of determinants, cofactor expansion, and applications", video_url: null, duration_seconds: 2800, order_index: 3 },
      { id: 33, course_id: 9, title: "Vector Spaces", slug: "vector-spaces", description: "Subspaces, span, linear independence, basis, dimension, and null/column spaces", video_url: null, duration_seconds: 3200, order_index: 4 },
      { id: 34, course_id: 9, title: "Linear Transformations", slug: "linear-transformations", description: "Mappings between vector spaces, kernels, ranges, and matrix representations", video_url: null, duration_seconds: 3000, order_index: 5 },
      { id: 35, course_id: 9, title: "Eigenvalues and Eigenvectors", slug: "eigenvalues-eigenvectors", description: "Understanding eigenvalues, eigenvectors, diagonalization, and applications", video_url: null, duration_seconds: 3300, order_index: 6 },
      { id: 36, course_id: 9, title: "Orthogonality and Least Squares", slug: "orthogonality-least-squares", description: "Inner products, orthogonal sets, Gram–Schmidt, QR factorization, and least squares problems", video_url: null, duration_seconds: 3100, order_index: 7 },
      { id: 37, course_id: 9, title: "Diagonalization & Spectral Theory", slug: "diagonalization-spectral-theory", description: "Diagonalization criteria, spectral theorem for symmetric matrices", video_url: null, duration_seconds: 2900, order_index: 8 },
      { id: 38, course_id: 9, title: "Applications of Linear Algebra", slug: "applications-linear-algebra", description: "Markov chains, differential equations, computer graphics, machine learning, and more", video_url: null, duration_seconds: 3000, order_index: 9 },
    ]
  },
  "intro-to-computer-science": {
    id: 10,
    course_id: 10,
    title: "Intro to Computer Science",
    slug: "intro-to-computer-science",
    description: "Foundations of computing",
    thumbnail: null,
    duration_hours: 8,
    lessons: [
      { id: 50, course_id: 10, title: "What is Computer Science?", slug: "what-is-cs", description: "Overview of the field", video_url: null, duration_seconds: 1800, order_index: 1 },
      { id: 51, course_id: 10, title: "Binary & Data Representation", slug: "binary-data", description: "How computers store information", video_url: null, duration_seconds: 2100, order_index: 2 },
      { id: 52, course_id: 10, title: "Introduction to Algorithms", slug: "intro-algorithms", description: "Basic algorithmic thinking", video_url: null, duration_seconds: 2400, order_index: 3 },
      { id: 53, course_id: 10, title: "Hardware & Computer Architecture", slug: "hardware-architecture", description: "How computers work internally", video_url: null, duration_seconds: 2200, order_index: 4 },
      { id: 54, course_id: 10, title: "Operating Systems & Software", slug: "operating-systems", description: "How your computer organizes and manages everything", video_url: null, duration_seconds: 2300, order_index: 5 },
      { id: 55, course_id: 10, title: "Networking & the Internet", slug: "networking-internet", description: "How computers communicate", video_url: null, duration_seconds: 2400, order_index: 6 },
      { id: 56, course_id: 10, title: "Databases & Information Storage", slug: "databases-storage", description: "How computers store and organize data", video_url: null, duration_seconds: 2200, order_index: 7 },
      { id: 57, course_id: 10, title: "Cybersecurity Basics", slug: "cybersecurity-basics", description: "Staying safe and understanding digital threats", video_url: null, duration_seconds: 2100, order_index: 8 },
      { id: 58, course_id: 10, title: "Artificial Intelligence (Overview)", slug: "ai-overview", description: "Introduction to AI & machine learning", video_url: null, duration_seconds: 2500, order_index: 9 },
      { id: 59, course_id: 10, title: "Careers in Computer Science", slug: "careers-cs", description: "Explore different CS paths", video_url: null, duration_seconds: 2000, order_index: 10 },
    ]
  },
  "intro-to-programming": {
    id: 11,
    course_id: 11,
    title: "Intro to Programming",
    slug: "intro-to-programming",
    description: "Learn programming fundamentals",
    thumbnail: null,
    duration_hours: 10,
    lessons: [
      { id: 60, course_id: 11, title: "Variables & Data Types", slug: "variables-data-types", description: "Storing and manipulating data", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 61, course_id: 11, title: "Control Flow", slug: "control-flow", description: "If statements and loops", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 62, course_id: 11, title: "Functions", slug: "functions", description: "Writing reusable code", video_url: null, duration_seconds: 2700, order_index: 3 },
      { id: 63, course_id: 11, title: "Lists & Arrays", slug: "lists-arrays", description: "Working with collections of data", video_url: null, duration_seconds: 2300, order_index: 4 },
      { id: 64, course_id: 11, title: "Strings & Text Processing", slug: "strings-text", description: "Handling text data", video_url: null, duration_seconds: 2200, order_index: 5 },
      { id: 65, course_id: 11, title: "Debugging & Error Handling", slug: "debugging-errors", description: "How to fix code", video_url: null, duration_seconds: 2500, order_index: 6 },
      { id: 66, course_id: 11, title: "Program Design & Pseudocode", slug: "program-design", description: "Thinking like a programmer", video_url: null, duration_seconds: 2400, order_index: 7 },
    ]
  },
  "python": {
    id: 12,
    course_id: 12,
    title: "Python",
    slug: "python",
    description: "Master Python programming",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 70, course_id: 12, title: "Python Syntax", slug: "python-syntax", description: "Learn Python syntax basics", video_url: null, duration_seconds: 2000, order_index: 1 },
      { id: 71, course_id: 12, title: "Lists and Dictionaries", slug: "lists-dictionaries", description: "Python data structures", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 72, course_id: 12, title: "File Handling", slug: "file-handling", description: "Reading and writing files", video_url: null, duration_seconds: 2100, order_index: 3 },
      { id: 73, course_id: 12, title: "Control Flow", slug: "control-flow-python", description: "Conditionals and branching", video_url: null, duration_seconds: 2200, order_index: 4 },
      { id: 74, course_id: 12, title: "Loops", slug: "loops-python", description: "For and while loops", video_url: null, duration_seconds: 2300, order_index: 5 },
      { id: 75, course_id: 12, title: "Functions", slug: "functions-python", description: "Writing reusable code", video_url: null, duration_seconds: 2400, order_index: 6 },
      { id: 76, course_id: 12, title: "Python Strings", slug: "python-strings", description: "String manipulation", video_url: null, duration_seconds: 2100, order_index: 7 },
      { id: 77, course_id: 12, title: "Advanced Data Structures", slug: "advanced-data-structures", description: "Sets, tuples, and more", video_url: null, duration_seconds: 2500, order_index: 8 },
      { id: 78, course_id: 12, title: "Error Handling & Debugging", slug: "error-handling-debugging", description: "Try/except and debugging", video_url: null, duration_seconds: 2300, order_index: 9 },
      { id: 79, course_id: 12, title: "Object-Oriented Programming (OOP)", slug: "oop-python", description: "Classes and objects", video_url: null, duration_seconds: 2700, order_index: 10 },
      { id: 80, course_id: 12, title: "Modules & Libraries", slug: "modules-libraries", description: "Using external packages", video_url: null, duration_seconds: 2200, order_index: 11 },
      { id: 81, course_id: 12, title: "Python Projects", slug: "python-projects", description: "Build real projects", video_url: null, duration_seconds: 3000, order_index: 12 },
    ]
  },
  "javascript": {
    id: 13,
    course_id: 13,
    title: "JavaScript",
    slug: "javascript",
    description: "Web development with JavaScript",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 59, course_id: 13, title: "JavaScript Basics", slug: "js-basics", description: "Variables, types, and operators", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 60, course_id: 13, title: "DOM Manipulation", slug: "dom-manipulation", description: "Interacting with web pages", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 61, course_id: 13, title: "Async JavaScript", slug: "async-js", description: "Promises and async/await", video_url: null, duration_seconds: 3000, order_index: 3 },
    ]
  },
  "object-oriented-programming": {
    id: 14,
    course_id: 14,
    title: "Object-Oriented Programming (OOP)",
    slug: "object-oriented-programming",
    description: "Design patterns and OOP principles",
    thumbnail: null,
    duration_hours: 10,
    lessons: [
      { id: 62, course_id: 14, title: "Classes and Objects", slug: "classes-objects", description: "Creating and using classes", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 63, course_id: 14, title: "Inheritance", slug: "inheritance", description: "Extending classes", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 64, course_id: 14, title: "Polymorphism and Encapsulation", slug: "polymorphism-encapsulation", description: "OOP principles", video_url: null, duration_seconds: 2400, order_index: 3 },
    ]
  },
  "data-structures": {
    id: 15,
    course_id: 15,
    title: "Data Structures",
    slug: "data-structures",
    description: "Essential data structures",
    thumbnail: null,
    duration_hours: 14,
    lessons: [
      { id: 65, course_id: 15, title: "Arrays and Linked Lists", slug: "arrays-linked-lists", description: "Linear data structures", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 66, course_id: 15, title: "Stacks and Queues", slug: "stacks-queues", description: "LIFO and FIFO structures", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 67, course_id: 15, title: "Trees and Graphs", slug: "trees-graphs", description: "Non-linear data structures", video_url: null, duration_seconds: 3000, order_index: 3 },
    ]
  },
  "algorithms": {
    id: 16,
    course_id: 16,
    title: "Algorithms",
    slug: "algorithms",
    description: "Algorithm design and analysis",
    thumbnail: null,
    duration_hours: 14,
    lessons: [
      { id: 68, course_id: 16, title: "Sorting Algorithms", slug: "sorting-algorithms", description: "Bubble, merge, quick sort", video_url: null, duration_seconds: 3000, order_index: 1 },
      { id: 69, course_id: 16, title: "Searching Algorithms", slug: "searching-algorithms", description: "Binary search and more", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 70, course_id: 16, title: "Dynamic Programming", slug: "dynamic-programming", description: "Optimization techniques", video_url: null, duration_seconds: 3300, order_index: 3 },
    ]
  },
  "computer-systems-architecture": {
    id: 17,
    course_id: 17,
    title: "Computer Systems & Architecture",
    slug: "computer-systems-architecture",
    description: "How computers work",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 71, course_id: 17, title: "CPU Architecture", slug: "cpu-architecture", description: "How processors work", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 72, course_id: 17, title: "Memory Hierarchy", slug: "memory-hierarchy", description: "Cache, RAM, and storage", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 73, course_id: 17, title: "Assembly Language", slug: "assembly-language", description: "Low-level programming", video_url: null, duration_seconds: 3000, order_index: 3 },
    ]
  },
  "operating-systems": {
    id: 18,
    course_id: 18,
    title: "Operating Systems",
    slug: "operating-systems",
    description: "OS concepts and design",
    thumbnail: null,
    duration_hours: 14,
    lessons: [
      { id: 74, course_id: 18, title: "Process Management", slug: "process-management", description: "Processes and threads", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 75, course_id: 18, title: "Memory Management", slug: "memory-management", description: "Virtual memory and paging", video_url: null, duration_seconds: 3000, order_index: 2 },
      { id: 76, course_id: 18, title: "File Systems", slug: "file-systems", description: "Storage organization", video_url: null, duration_seconds: 2400, order_index: 3 },
    ]
  },
  "databases": {
    id: 19,
    course_id: 19,
    title: "Databases",
    slug: "databases",
    description: "Database design and SQL",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 77, course_id: 19, title: "Relational Databases", slug: "relational-databases", description: "Tables, keys, and relations", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 78, course_id: 19, title: "SQL Fundamentals", slug: "sql-fundamentals", description: "Queries and commands", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 79, course_id: 19, title: "Database Design", slug: "database-design", description: "Normalization and modeling", video_url: null, duration_seconds: 3000, order_index: 3 },
    ]
  },
  "computer-networks": {
    id: 20,
    course_id: 20,
    title: "Computer Networks",
    slug: "computer-networks",
    description: "Networking fundamentals",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 80, course_id: 20, title: "Network Layers", slug: "network-layers", description: "OSI and TCP/IP models", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 81, course_id: 20, title: "Protocols", slug: "protocols", description: "HTTP, TCP, UDP, and more", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 82, course_id: 20, title: "Network Security", slug: "network-security", description: "Encryption and firewalls", video_url: null, duration_seconds: 3000, order_index: 3 },
    ]
  },
  "software-engineering": {
    id: 21,
    course_id: 21,
    title: "Software Engineering",
    slug: "software-engineering",
    description: "Building quality software",
    thumbnail: null,
    duration_hours: 14,
    lessons: [
      { id: 83, course_id: 21, title: "Software Development Life Cycle", slug: "sdlc", description: "Planning and methodology", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 84, course_id: 21, title: "Version Control", slug: "version-control", description: "Git and collaboration", video_url: null, duration_seconds: 2100, order_index: 2 },
      { id: 85, course_id: 21, title: "Testing and QA", slug: "testing-qa", description: "Unit and integration testing", video_url: null, duration_seconds: 2700, order_index: 3 },
    ]
  },
  "programming-languages-compilers": {
    id: 22,
    course_id: 22,
    title: "Programming Languages & Compilers",
    slug: "programming-languages-compilers",
    description: "Language design and compilation",
    thumbnail: null,
    duration_hours: 14,
    lessons: [
      { id: 86, course_id: 22, title: "Lexical Analysis", slug: "lexical-analysis", description: "Tokenization and scanning", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 87, course_id: 22, title: "Parsing", slug: "parsing", description: "Syntax analysis", video_url: null, duration_seconds: 3000, order_index: 2 },
      { id: 88, course_id: 22, title: "Code Generation", slug: "code-generation", description: "From AST to machine code", video_url: null, duration_seconds: 3300, order_index: 3 },
    ]
  },
  "theory-of-computation": {
    id: 23,
    course_id: 23,
    title: "Theory of Computation",
    slug: "theory-of-computation",
    description: "Computational theory fundamentals",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 89, course_id: 23, title: "Automata Theory", slug: "automata-theory", description: "Finite automata and languages", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 90, course_id: 23, title: "Turing Machines", slug: "turing-machines", description: "Computability theory", video_url: null, duration_seconds: 3000, order_index: 2 },
      { id: 91, course_id: 23, title: "Complexity Theory", slug: "complexity-theory", description: "P vs NP and beyond", video_url: null, duration_seconds: 2700, order_index: 3 },
    ]
  },
  "classical-mechanics": {
    id: 11,
    course_id: 11,
    title: "Classical Mechanics",
    slug: "classical-mechanics",
    description: "Understanding motion and forces",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 82, course_id: 11, title: "Mathematical Foundations", slug: "mathematical-foundations", description: "Essential math for physics", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 83, course_id: 11, title: "Kinematics", slug: "kinematics", description: "Motion in one and two dimensions", video_url: null, duration_seconds: 2500, order_index: 2 },
      { id: 84, course_id: 11, title: "Newtonian Dynamics", slug: "newtonian-dynamics", description: "Forces and motion", video_url: null, duration_seconds: 2700, order_index: 3 },
      { id: 85, course_id: 11, title: "Work and Energy", slug: "work-and-energy", description: "Energy conservation and work", video_url: null, duration_seconds: 2600, order_index: 4 },
      { id: 86, course_id: 11, title: "Momentum and Collisions", slug: "momentum-collisions", description: "Conservation of momentum", video_url: null, duration_seconds: 2500, order_index: 5 },
      { id: 87, course_id: 11, title: "Rotational Motion", slug: "rotational-motion", description: "Angular kinematics and dynamics", video_url: null, duration_seconds: 2800, order_index: 6 },
      { id: 88, course_id: 11, title: "Oscillations", slug: "oscillations", description: "Simple harmonic motion", video_url: null, duration_seconds: 2400, order_index: 7 },
      { id: 89, course_id: 11, title: "Gravitation", slug: "gravitation", description: "Newton's law of gravitation", video_url: null, duration_seconds: 2500, order_index: 8 },
      { id: 90, course_id: 11, title: "Non-Inertial Frames", slug: "non-inertial-frames", description: "Accelerating reference frames", video_url: null, duration_seconds: 2600, order_index: 9 },
      { id: 91, course_id: 11, title: "Advanced Classical Mechanics", slug: "advanced-classical-mechanics", description: "Lagrangian and Hamiltonian mechanics", video_url: null, duration_seconds: 3000, order_index: 10 },
    ]
  },
  "electricity-magnetism": {
    id: 12,
    course_id: 12,
    title: "Electricity & Magnetism",
    slug: "electricity-magnetism",
    description: "Electric and magnetic phenomena",
    thumbnail: null,
    duration_hours: 14,
    lessons: [
      { id: 92, course_id: 12, title: "Mathematical & Conceptual Foundations", slug: "math-conceptual-foundations", description: "Essential math and concepts for E&M", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 93, course_id: 12, title: "Electrostatics", slug: "electrostatics", description: "Charges, fields, and Coulomb's law", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 94, course_id: 12, title: "Electric Potential", slug: "electric-potential", description: "Voltage and potential energy", video_url: null, duration_seconds: 2500, order_index: 3 },
      { id: 95, course_id: 12, title: "Electric Current & Circuits", slug: "electric-current-circuits", description: "Current, resistance, and Ohm's law", video_url: null, duration_seconds: 3000, order_index: 4 },
      { id: 96, course_id: 12, title: "Magnetism", slug: "magnetism", description: "Magnetic fields and forces", video_url: null, duration_seconds: 2700, order_index: 5 },
      { id: 97, course_id: 12, title: "Electromagnetic Induction", slug: "electromagnetic-induction", description: "Faraday's law and inductance", video_url: null, duration_seconds: 2800, order_index: 6 },
      { id: 98, course_id: 12, title: "AC Circuits", slug: "ac-circuits", description: "Alternating current and impedance", video_url: null, duration_seconds: 2600, order_index: 7 },
      { id: 99, course_id: 12, title: "Maxwell's Equations", slug: "maxwells-equations", description: "The laws of electromagnetism", video_url: null, duration_seconds: 3000, order_index: 8 },
      { id: 100, course_id: 12, title: "Electromagnetic Waves", slug: "electromagnetic-waves", description: "Light and radiation", video_url: null, duration_seconds: 2700, order_index: 9 },
      { id: 101, course_id: 12, title: "Advanced / Upper-Level Topics", slug: "advanced-upper-level", description: "Relativistic and advanced E&M", video_url: null, duration_seconds: 3000, order_index: 10 },
    ]
  },
  "waves-oscillations": {
    id: 13,
    course_id: 13,
    title: "Waves & Oscillations",
    slug: "waves-oscillations",
    description: "Study of wave behavior and motion",
    thumbnail: null,
    duration_hours: 10,
    lessons: [
      { id: 102, course_id: 13, title: "Oscillatory Motion", slug: "oscillatory-motion", description: "Introduction to oscillations", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 103, course_id: 13, title: "Simple Harmonic Motion", slug: "simple-harmonic-motion", description: "SHM fundamentals and equations", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 104, course_id: 13, title: "Physical Systems in SHM", slug: "physical-systems-shm", description: "Pendulums, springs, and more", video_url: null, duration_seconds: 2500, order_index: 3 },
      { id: 105, course_id: 13, title: "Energy in Oscillations", slug: "energy-oscillations", description: "Kinetic and potential energy exchange", video_url: null, duration_seconds: 2400, order_index: 4 },
      { id: 106, course_id: 13, title: "Damped and Driven Oscillations", slug: "damped-driven-oscillations", description: "Resonance and damping effects", video_url: null, duration_seconds: 2800, order_index: 5 },
      { id: 107, course_id: 13, title: "Introduction to Waves", slug: "intro-waves", description: "Basic wave concepts", video_url: null, duration_seconds: 2400, order_index: 6 },
      { id: 108, course_id: 13, title: "Wave Properties and Description", slug: "wave-properties-description", description: "Wavelength, frequency, and amplitude", video_url: null, duration_seconds: 2500, order_index: 7 },
      { id: 109, course_id: 13, title: "Superposition and Interference", slug: "superposition-interference", description: "Wave combinations and patterns", video_url: null, duration_seconds: 2600, order_index: 8 },
      { id: 110, course_id: 13, title: "Standing Waves", slug: "standing-waves", description: "Nodes, antinodes, and resonance", video_url: null, duration_seconds: 2500, order_index: 9 },
      { id: 111, course_id: 13, title: "Waves in Physical Systems", slug: "waves-physical-systems", description: "Waves on strings and in air", video_url: null, duration_seconds: 2400, order_index: 10 },
      { id: 112, course_id: 13, title: "Sound Waves", slug: "sound-waves", description: "Properties and behavior of sound", video_url: null, duration_seconds: 2700, order_index: 11 },
      { id: 113, course_id: 13, title: "Sound Phenomena", slug: "sound-phenomena", description: "Beats, harmonics, and acoustics", video_url: null, duration_seconds: 2500, order_index: 12 },
      { id: 114, course_id: 13, title: "Doppler Effect and Shock Waves", slug: "doppler-shock-waves", description: "Frequency shifts and sonic booms", video_url: null, duration_seconds: 2600, order_index: 13 },
    ]
  },
  "thermodynamics": {
    id: 14,
    course_id: 14,
    title: "Thermodynamics",
    slug: "thermodynamics",
    description: "Heat, energy, and entropy",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 115, course_id: 14, title: "Temperature and Thermal Properties", slug: "temperature-thermal-properties", description: "Temperature scales and thermal properties of matter", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 116, course_id: 14, title: "Heat and Thermal Energy", slug: "heat-thermal-energy", description: "Heat transfer and thermal energy concepts", video_url: null, duration_seconds: 2500, order_index: 2 },
      { id: 117, course_id: 14, title: "Heat Transfer", slug: "heat-transfer", description: "Conduction, convection, and radiation", video_url: null, duration_seconds: 2600, order_index: 3 },
      { id: 118, course_id: 14, title: "Ideal Gases and Kinetic Theory", slug: "ideal-gases-kinetic-theory", description: "Gas laws and molecular motion", video_url: null, duration_seconds: 2700, order_index: 4 },
      { id: 119, course_id: 14, title: "The First Law of Thermodynamics", slug: "first-law-thermodynamics", description: "Energy conservation in thermodynamic systems", video_url: null, duration_seconds: 2800, order_index: 5 },
      { id: 120, course_id: 14, title: "Thermodynamic Processes and Cycles", slug: "thermodynamic-processes-cycles", description: "Isothermal, adiabatic, and cyclic processes", video_url: null, duration_seconds: 2700, order_index: 6 },
      { id: 121, course_id: 14, title: "Heat Engines", slug: "heat-engines", description: "Efficiency and Carnot cycle", video_url: null, duration_seconds: 2600, order_index: 7 },
      { id: 122, course_id: 14, title: "Refrigerators and Heat Pumps", slug: "refrigerators-heat-pumps", description: "Cooling systems and coefficients of performance", video_url: null, duration_seconds: 2500, order_index: 8 },
      { id: 123, course_id: 14, title: "The Second Law of Thermodynamics", slug: "second-law-thermodynamics", description: "Entropy and irreversibility", video_url: null, duration_seconds: 2800, order_index: 9 },
      { id: 124, course_id: 14, title: "Entropy", slug: "entropy", description: "Statistical interpretation and calculations", video_url: null, duration_seconds: 2700, order_index: 10 },
      { id: 125, course_id: 14, title: "Entropy and Energy Availability", slug: "entropy-energy-availability", description: "Free energy and available work", video_url: null, duration_seconds: 2600, order_index: 11 },
      { id: 126, course_id: 14, title: "The Third Law of Thermodynamics", slug: "third-law-thermodynamics", description: "Absolute zero and entropy limits", video_url: null, duration_seconds: 2400, order_index: 12 },
    ]
  },
  "optics": {
    id: 15,
    course_id: 15,
    title: "Optics",
    slug: "optics",
    description: "Light and optical phenomena",
    thumbnail: null,
    duration_hours: 10,
    lessons: [
      { id: 127, course_id: 15, title: "Nature of Light", slug: "nature-of-light", description: "Dual nature and properties of light", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 128, course_id: 15, title: "Reflection", slug: "reflection", description: "Laws of reflection and applications", video_url: null, duration_seconds: 2300, order_index: 2 },
      { id: 129, course_id: 15, title: "Refraction", slug: "refraction", description: "Snell's law and light bending", video_url: null, duration_seconds: 2500, order_index: 3 },
      { id: 130, course_id: 15, title: "Dispersion and Optical Materials", slug: "dispersion-optical-materials", description: "Prisms and material properties", video_url: null, duration_seconds: 2400, order_index: 4 },
      { id: 131, course_id: 15, title: "Mirrors", slug: "mirrors", description: "Plane and curved mirror optics", video_url: null, duration_seconds: 2600, order_index: 5 },
      { id: 132, course_id: 15, title: "Thin Lenses", slug: "thin-lenses", description: "Lens equations and image formation", video_url: null, duration_seconds: 2700, order_index: 6 },
      { id: 133, course_id: 15, title: "Optical Instruments", slug: "optical-instruments", description: "Microscopes, telescopes, and cameras", video_url: null, duration_seconds: 2500, order_index: 7 },
      { id: 134, course_id: 15, title: "Wave Nature of Light", slug: "wave-nature-of-light", description: "Light as electromagnetic waves", video_url: null, duration_seconds: 2400, order_index: 8 },
      { id: 135, course_id: 15, title: "Interference", slug: "interference", description: "Young's experiment and constructive/destructive interference", video_url: null, duration_seconds: 2600, order_index: 9 },
      { id: 136, course_id: 15, title: "Diffraction", slug: "diffraction", description: "Single slit and diffraction gratings", video_url: null, duration_seconds: 2500, order_index: 10 },
      { id: 137, course_id: 15, title: "Polarization", slug: "polarization", description: "Polarized light and applications", video_url: null, duration_seconds: 2400, order_index: 11 },
      { id: 138, course_id: 15, title: "Thin-Film Interference", slug: "thin-film-interference", description: "Interference in thin films and coatings", video_url: null, duration_seconds: 2300, order_index: 12 },
      { id: 139, course_id: 15, title: "Resolution and Optical Limits", slug: "resolution-optical-limits", description: "Rayleigh criterion and diffraction limits", video_url: null, duration_seconds: 2400, order_index: 13 },
    ]
  },
  "modern-physics": {
    id: 16,
    course_id: 16,
    title: "Modern Physics",
    slug: "modern-physics",
    description: "Relativity and atomic physics",
    thumbnail: null,
    duration_hours: 14,
    lessons: [
      { id: 140, course_id: 16, title: "Why Classical Physics Failed", slug: "why-classical-physics-failed", description: "Limitations of classical mechanics and electromagnetism", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 141, course_id: 16, title: "Foundations of Special Relativity", slug: "foundations-of-special-relativity", description: "Einstein's postulates and the Lorentz transformation", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 142, course_id: 16, title: "Relativistic Effects", slug: "relativistic-effects", description: "Time dilation and length contraction", video_url: null, duration_seconds: 2600, order_index: 3 },
      { id: 143, course_id: 16, title: "Energy, Momentum, and Mass–Energy Equivalence", slug: "energy-momentum-mass-energy", description: "E=mc² and relativistic dynamics", video_url: null, duration_seconds: 2800, order_index: 4 },
      { id: 144, course_id: 16, title: "Quantization of Light", slug: "quantization-of-light", description: "Planck's hypothesis and blackbody radiation", video_url: null, duration_seconds: 2500, order_index: 5 },
      { id: 145, course_id: 16, title: "Photoelectric Effect and Photons", slug: "photoelectric-effect-photons", description: "Einstein's explanation of light as particles", video_url: null, duration_seconds: 2600, order_index: 6 },
      { id: 146, course_id: 16, title: "Wave–Particle Duality", slug: "wave-particle-duality", description: "de Broglie wavelength and matter waves", video_url: null, duration_seconds: 2400, order_index: 7 },
      { id: 147, course_id: 16, title: "Atomic Structure", slug: "atomic-structure", description: "Bohr model and spectral lines", video_url: null, duration_seconds: 2700, order_index: 8 },
      { id: 148, course_id: 16, title: "Introduction to Quantum Mechanics", slug: "intro-quantum-mechanics", description: "Wave functions and the Schrödinger equation", video_url: null, duration_seconds: 2800, order_index: 9 },
      { id: 149, course_id: 16, title: "Nuclear and Particle Physics", slug: "nuclear-particle-physics", description: "Radioactivity, fission, fusion, and fundamental particles", video_url: null, duration_seconds: 3000, order_index: 10 },
    ]
  },
  "quantum-mechanics": {
    id: 17,
    course_id: 17,
    title: "Quantum Mechanics",
    slug: "quantum-mechanics",
    description: "Quantum theory fundamentals",
    thumbnail: null,
    duration_hours: 16,
    lessons: [
      { id: 47, course_id: 17, title: "Foundations of Quantum Theory", slug: "foundations-quantum-theory", description: "Historical development and key experiments", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 48, course_id: 17, title: "Mathematical Foundations", slug: "mathematical-foundations", description: "Linear algebra and Hilbert spaces", video_url: null, duration_seconds: 3000, order_index: 2 },
      { id: 49, course_id: 17, title: "Quantum States & Measurement", slug: "quantum-states-measurement", description: "State vectors and observables", video_url: null, duration_seconds: 2800, order_index: 3 },
      { id: 50, course_id: 17, title: "Schrödinger Equation", slug: "schrodinger-equation", description: "The fundamental equation of quantum mechanics", video_url: null, duration_seconds: 3300, order_index: 4 },
      { id: 51, course_id: 17, title: "Exactly Solvable Systems", slug: "exactly-solvable-systems", description: "Particle in a box, harmonic oscillator", video_url: null, duration_seconds: 3200, order_index: 5 },
      { id: 52, course_id: 17, title: "Quantum Tunneling & Scattering", slug: "quantum-tunneling-scattering", description: "Barrier penetration and scattering theory", video_url: null, duration_seconds: 2900, order_index: 6 },
      { id: 53, course_id: 17, title: "Uncertainty & Quantum Limits", slug: "uncertainty-quantum-limits", description: "Heisenberg uncertainty principle", video_url: null, duration_seconds: 2600, order_index: 7 },
      { id: 54, course_id: 17, title: "Spin & Angular Momentum", slug: "spin-angular-momentum", description: "Intrinsic spin and orbital angular momentum", video_url: null, duration_seconds: 3100, order_index: 8 },
      { id: 55, course_id: 17, title: "Hydrogen Atom", slug: "hydrogen-atom", description: "Solving the hydrogen atom problem", video_url: null, duration_seconds: 3400, order_index: 9 },
      { id: 56, course_id: 17, title: "Approximation Methods", slug: "approximation-methods", description: "Perturbation theory and variational methods", video_url: null, duration_seconds: 3200, order_index: 10 },
      { id: 57, course_id: 17, title: "Identical Particles", slug: "identical-particles", description: "Fermions, bosons, and exchange symmetry", video_url: null, duration_seconds: 2800, order_index: 11 },
      { id: 58, course_id: 17, title: "Quantum Entanglement & Foundations", slug: "quantum-entanglement-foundations", description: "EPR paradox and Bell inequalities", video_url: null, duration_seconds: 3000, order_index: 12 },
      { id: 59, course_id: 17, title: "Advanced & Modern Topics", slug: "advanced-modern-topics", description: "Quantum computing and quantum information", video_url: null, duration_seconds: 3300, order_index: 13 },
    ]
  },
  "personal-finance": {
    id: 24,
    course_id: 24,
    title: "Personal Finance",
    slug: "personal-finance",
    description: "Manage your money effectively",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 100, course_id: 24, title: "What Is Personal Finance?", slug: "what-is-personal-finance", description: "Introduction to personal finance fundamentals", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 101, course_id: 24, title: "Money Mindset & Financial Behavior", slug: "money-mindset", description: "Understanding your relationship with money", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 102, course_id: 24, title: "Income & Paychecks", slug: "income-paychecks", description: "Understanding how you earn money", video_url: null, duration_seconds: 2100, order_index: 3 },
      { id: 103, course_id: 24, title: "Budgeting Basics", slug: "budgeting-basics", description: "Creating and maintaining a budget", video_url: null, duration_seconds: 2400, order_index: 4 },
      { id: 104, course_id: 24, title: "Tracking Spending", slug: "tracking-spending", description: "Monitor and manage your expenses", video_url: null, duration_seconds: 2100, order_index: 5 },
      { id: 105, course_id: 24, title: "Saving Money", slug: "saving-money", description: "Building good saving habits", video_url: null, duration_seconds: 2400, order_index: 6 },
      { id: 106, course_id: 24, title: "Emergency Funds", slug: "emergency-funds", description: "Preparing for unexpected expenses", video_url: null, duration_seconds: 2100, order_index: 7 },
      { id: 107, course_id: 24, title: "Banking Basics", slug: "banking-basics", description: "Understanding bank accounts and services", video_url: null, duration_seconds: 2400, order_index: 8 },
      { id: 108, course_id: 24, title: "Credit Cards", slug: "credit-cards", description: "Using credit cards responsibly", video_url: null, duration_seconds: 2100, order_index: 9 },
      { id: 109, course_id: 24, title: "Credit Scores & Credit Reports", slug: "credit-scores-reports", description: "Building and maintaining good credit", video_url: null, duration_seconds: 2400, order_index: 10 },
      { id: 110, course_id: 24, title: "Loans & Debt", slug: "loans-debt", description: "Understanding different types of loans", video_url: null, duration_seconds: 2100, order_index: 11 },
      { id: 111, course_id: 24, title: "Debt Repayment Strategies", slug: "debt-repayment", description: "Effective methods to pay off debt", video_url: null, duration_seconds: 2400, order_index: 12 },
      { id: 112, course_id: 24, title: "Investing Basics", slug: "investing-basics", description: "Introduction to investing principles", video_url: null, duration_seconds: 2100, order_index: 13 },
      { id: 113, course_id: 24, title: "Retirement & Long-Term Planning", slug: "retirement-planning", description: "Planning for your financial future", video_url: null, duration_seconds: 2400, order_index: 14 },
      { id: 114, course_id: 24, title: "Taxes, Insurance & Financial Protection", slug: "taxes-insurance", description: "Understanding taxes and protecting your assets", video_url: null, duration_seconds: 2100, order_index: 15 },
    ]
  },
  "financial-literacy-budgeting": {
    id: 25,
    course_id: 25,
    title: "Financial Literacy & Budgeting",
    slug: "financial-literacy-budgeting",
    description: "Build strong financial foundations",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 200, course_id: 25, title: "What Is Financial Literacy?", slug: "what-is-financial-literacy", description: "Understanding financial literacy fundamentals", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 201, course_id: 25, title: "How Money Works in Everyday Life", slug: "how-money-works", description: "Practical money concepts", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 202, course_id: 25, title: "Needs vs Wants", slug: "needs-vs-wants", description: "Distinguishing essential from optional", video_url: null, duration_seconds: 2100, order_index: 3 },
      { id: 203, course_id: 25, title: "Money Mindset & Spending Behavior", slug: "money-mindset-spending", description: "Understanding your spending habits", video_url: null, duration_seconds: 2400, order_index: 4 },
      { id: 204, course_id: 25, title: "Income Basics (Earning Money)", slug: "income-basics", description: "How you earn money", video_url: null, duration_seconds: 2100, order_index: 5 },
      { id: 205, course_id: 25, title: "Understanding Paychecks", slug: "understanding-paychecks", description: "Reading and understanding your paycheck", video_url: null, duration_seconds: 2400, order_index: 6 },
      { id: 206, course_id: 25, title: "Fixed vs Variable Expenses", slug: "fixed-vs-variable-expenses", description: "Categorizing your expenses", video_url: null, duration_seconds: 2100, order_index: 7 },
      { id: 207, course_id: 25, title: "How Budgeting Actually Works", slug: "how-budgeting-works", description: "The mechanics of budgeting", video_url: null, duration_seconds: 2400, order_index: 8 },
      { id: 208, course_id: 25, title: "Popular Budgeting Methods (50/30/20, Zero-Based)", slug: "budgeting-methods", description: "Different budgeting approaches", video_url: null, duration_seconds: 2100, order_index: 9 },
      { id: 209, course_id: 25, title: "Creating a Simple Budget", slug: "creating-simple-budget", description: "Build your first budget", video_url: null, duration_seconds: 2400, order_index: 10 },
      { id: 210, course_id: 25, title: "Tracking Spending", slug: "tracking-spending", description: "Monitor your expenses effectively", video_url: null, duration_seconds: 2100, order_index: 11 },
      { id: 211, course_id: 25, title: "Adjusting a Budget Over Time", slug: "adjusting-budget", description: "Refining your budget as life changes", video_url: null, duration_seconds: 2400, order_index: 12 },
      { id: 212, course_id: 25, title: "Common Money Mistakes Beginners Make", slug: "common-money-mistakes", description: "Avoid these financial pitfalls", video_url: null, duration_seconds: 2100, order_index: 13 },
      { id: 213, course_id: 25, title: "Building Healthy Financial Habits", slug: "healthy-financial-habits", description: "Develop lasting money skills", video_url: null, duration_seconds: 2400, order_index: 14 },
    ]
  },
  "behavioral-finance": {
    id: 26,
    course_id: 26,
    title: "Behavioral Finance",
    slug: "behavioral-finance",
    description: "Psychology of financial decisions",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 106, course_id: 26, title: "Rational vs Irrational Decision-Making", slug: "rational-vs-irrational-decision-making", description: "Understanding how we make financial choices", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 107, course_id: 26, title: "Cognitive Biases in Finance", slug: "cognitive-biases-in-finance", description: "Common thinking errors that affect money decisions", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 108, course_id: 26, title: "Loss Aversion & Risk Perception", slug: "loss-aversion-risk-perception", description: "Why losses feel worse than gains", video_url: null, duration_seconds: 2400, order_index: 3 },
      { id: 109, course_id: 26, title: "Emotional Spending & Investing", slug: "emotional-spending-investing", description: "How emotions drive financial behavior", video_url: null, duration_seconds: 2400, order_index: 4 },
      { id: 110, course_id: 26, title: "Herd Behavior & Social Influence", slug: "herd-behavior-social-influence", description: "Following the crowd in financial decisions", video_url: null, duration_seconds: 2100, order_index: 5 },
      { id: 111, course_id: 26, title: "Mental Accounting", slug: "mental-accounting", description: "How we categorize money in our minds", video_url: null, duration_seconds: 2100, order_index: 6 },
      { id: 112, course_id: 26, title: "Overconfidence & Overtrading", slug: "overconfidence-overtrading", description: "When too much confidence hurts returns", video_url: null, duration_seconds: 2400, order_index: 7 },
      { id: 113, course_id: 26, title: "Anchoring, Framing, & Reference Points", slug: "anchoring-framing-reference-points", description: "How context shapes financial decisions", video_url: null, duration_seconds: 2700, order_index: 8 },
      { id: 114, course_id: 26, title: "Short-Term Thinking vs Long-Term Thinking", slug: "short-term-vs-long-term-thinking", description: "Balancing immediate needs with future goals", video_url: null, duration_seconds: 2400, order_index: 9 },
      { id: 115, course_id: 26, title: "Behavioral Biases in Budgeting", slug: "behavioral-biases-in-budgeting", description: "Psychology traps in spending plans", video_url: null, duration_seconds: 2100, order_index: 10 },
      { id: 116, course_id: 26, title: "Behavioral Biases in Investing", slug: "behavioral-biases-in-investing", description: "Psychology traps in investment decisions", video_url: null, duration_seconds: 2400, order_index: 11 },
      { id: 117, course_id: 26, title: "How Biases Lead to Financial Mistakes", slug: "how-biases-lead-to-financial-mistakes", description: "Real-world examples of costly errors", video_url: null, duration_seconds: 2400, order_index: 12 },
      { id: 118, course_id: 26, title: "Strategies to Overcome Biases", slug: "strategies-to-overcome-biases", description: "Tools and techniques for better decisions", video_url: null, duration_seconds: 2700, order_index: 13 },
      { id: 119, course_id: 26, title: "Making Better Financial Decisions Long-Term", slug: "making-better-financial-decisions-long-term", description: "Building lasting financial decision habits", video_url: null, duration_seconds: 2400, order_index: 14 },
    ]
  },
  "stock-market-basics": {
    id: 27,
    course_id: 27,
    title: "Stock Market Basics",
    slug: "stock-market-basics",
    description: "Learn how the stock market works",
    thumbnail: null,
    duration_hours: 14,
    lessons: [
      { id: 200, course_id: 27, title: "What Is the Stock Market?", slug: "what-is-the-stock-market", description: "Introduction to stock markets and their purpose", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 201, course_id: 27, title: "Why Companies Issue Stock", slug: "why-companies-issue-stock", description: "Understanding equity financing and IPOs", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 202, course_id: 27, title: "Why People Invest in Stocks", slug: "why-people-invest-in-stocks", description: "Goals and motivations for stock investing", video_url: null, duration_seconds: 2100, order_index: 3 },
      { id: 203, course_id: 27, title: "What Is a Share? (Ownership Explained)", slug: "what-is-a-share-ownership-explained", description: "Understanding fractional ownership in companies", video_url: null, duration_seconds: 2100, order_index: 4 },
      { id: 204, course_id: 27, title: "How the Stock Market Works", slug: "how-the-stock-market-works", description: "The mechanics of buying and selling stocks", video_url: null, duration_seconds: 2400, order_index: 5 },
      { id: 205, course_id: 27, title: "Stock Exchanges (NYSE, Nasdaq, etc.)", slug: "stock-exchanges-nyse-nasdaq", description: "Major exchanges and how they operate", video_url: null, duration_seconds: 2400, order_index: 6 },
      { id: 206, course_id: 27, title: "How Stock Prices Are Determined", slug: "how-stock-prices-are-determined", description: "Factors that influence stock valuations", video_url: null, duration_seconds: 2700, order_index: 7 },
      { id: 207, course_id: 27, title: "Supply, Demand, and Market Psychology", slug: "supply-demand-market-psychology", description: "How buyer and seller behavior affects prices", video_url: null, duration_seconds: 2400, order_index: 8 },
      { id: 208, course_id: 27, title: "Types of Stocks (Common, Preferred, Growth, Value)", slug: "types-of-stocks", description: "Different categories of stocks explained", video_url: null, duration_seconds: 2700, order_index: 9 },
      { id: 209, course_id: 27, title: "Dividends & Stock Returns", slug: "dividends-stock-returns", description: "How investors earn money from stocks", video_url: null, duration_seconds: 2400, order_index: 10 },
      { id: 210, course_id: 27, title: "Market Indexes (S&P 500, Dow, Nasdaq)", slug: "market-indexes-sp500-dow-nasdaq", description: "Understanding market benchmarks", video_url: null, duration_seconds: 2400, order_index: 11 },
      { id: 211, course_id: 27, title: "Bull Markets vs Bear Markets", slug: "bull-markets-vs-bear-markets", description: "Market cycles and trends explained", video_url: null, duration_seconds: 2100, order_index: 12 },
      { id: 212, course_id: 27, title: "Volatility, Risk, and Uncertainty", slug: "volatility-risk-uncertainty", description: "Understanding market fluctuations", video_url: null, duration_seconds: 2400, order_index: 13 },
      { id: 213, course_id: 27, title: "How to Buy and Sell Stocks (Orders & Brokers)", slug: "how-to-buy-sell-stocks-orders-brokers", description: "Practical guide to trading stocks", video_url: null, duration_seconds: 2700, order_index: 14 },
      { id: 214, course_id: 27, title: "Stock Market Myths & Beginner Mistakes", slug: "stock-market-myths-beginner-mistakes", description: "Common misconceptions and how to avoid them", video_url: null, duration_seconds: 2400, order_index: 15 },
    ]
  },
  "investing-foundations": {
    id: 28,
    course_id: 28,
    title: "Investing Foundations",
    slug: "investing-foundations",
    description: "Core investing principles",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 112, course_id: 28, title: "Risk and Return", slug: "risk-return", description: "Understanding the trade-off", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 113, course_id: 28, title: "Asset Classes", slug: "asset-classes", description: "Stocks, bonds, and alternatives", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 114, course_id: 28, title: "Compound Interest", slug: "compound-interest", description: "The power of compounding", video_url: null, duration_seconds: 2100, order_index: 3 },
    ]
  },
  "etfs-index-funds": {
    id: 29,
    course_id: 29,
    title: "ETFs & Index Funds",
    slug: "etfs-index-funds",
    description: "Passive investing strategies",
    thumbnail: null,
    duration_hours: 8,
    lessons: [
      { id: 115, course_id: 29, title: "What Are ETFs?", slug: "what-are-etfs", description: "Exchange-traded funds explained", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 116, course_id: 29, title: "Index Investing", slug: "index-investing", description: "Tracking market indices", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 117, course_id: 29, title: "Choosing Funds", slug: "choosing-funds", description: "Expense ratios and selection", video_url: null, duration_seconds: 2100, order_index: 3 },
    ]
  },
  "bonds-fixed-income": {
    id: 30,
    course_id: 30,
    title: "Bonds & Fixed Income",
    slug: "bonds-fixed-income",
    description: "Understanding fixed income securities",
    thumbnail: null,
    duration_hours: 10,
    lessons: [
      { id: 118, course_id: 30, title: "Bond Basics", slug: "bond-basics", description: "How bonds work", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 119, course_id: 30, title: "Bond Pricing", slug: "bond-pricing", description: "Yields and interest rates", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 120, course_id: 30, title: "Types of Bonds", slug: "types-of-bonds", description: "Government, corporate, and municipal", video_url: null, duration_seconds: 2400, order_index: 3 },
    ]
  },
  "portfolio-building-risk-management": {
    id: 31,
    course_id: 31,
    title: "Portfolio Building & Risk Management",
    slug: "portfolio-building-risk-management",
    description: "Build and manage investment portfolios",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 121, course_id: 31, title: "Diversification", slug: "diversification", description: "Spreading risk effectively", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 122, course_id: 31, title: "Asset Allocation", slug: "asset-allocation", description: "Balancing your portfolio", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 123, course_id: 31, title: "Rebalancing", slug: "rebalancing", description: "Maintaining target allocations", video_url: null, duration_seconds: 2100, order_index: 3 },
    ]
  },
  "financial-markets-institutions": {
    id: 32,
    course_id: 32,
    title: "Financial Markets & Institutions",
    slug: "financial-markets-institutions",
    description: "How financial markets operate",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 124, course_id: 32, title: "Types of Financial Markets", slug: "types-financial-markets", description: "Capital, money, and derivatives markets", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 125, course_id: 32, title: "Financial Intermediaries", slug: "financial-intermediaries", description: "Banks, brokers, and funds", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 126, course_id: 32, title: "Market Regulation", slug: "market-regulation", description: "SEC and regulatory bodies", video_url: null, duration_seconds: 2400, order_index: 3 },
    ]
  },
  "banking-financial-institutions": {
    id: 33,
    course_id: 33,
    title: "Banking & Financial Institutions",
    slug: "banking-financial-institutions",
    description: "Understanding banking systems",
    thumbnail: null,
    duration_hours: 10,
    lessons: [
      { id: 127, course_id: 33, title: "Commercial Banking", slug: "commercial-banking", description: "How banks operate and make money", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 128, course_id: 33, title: "Central Banks", slug: "central-banks", description: "Monetary policy and the Fed", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 129, course_id: 33, title: "Investment Banking", slug: "investment-banking", description: "IPOs, M&A, and capital markets", video_url: null, duration_seconds: 2700, order_index: 3 },
      { id: 130, course_id: 33, title: "Banking Regulations", slug: "banking-regulations", description: "Basel accords and compliance", video_url: null, duration_seconds: 2100, order_index: 4 },
    ]
  },
  "real-estate-investing": {
    id: 34,
    course_id: 34,
    title: "Real Estate Investing",
    slug: "real-estate-investing",
    description: "Build wealth through real estate",
    thumbnail: null,
    duration_hours: 14,
    lessons: [
      { id: 131, course_id: 34, title: "Real Estate Fundamentals", slug: "real-estate-fundamentals", description: "Types of real estate investments", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 132, course_id: 34, title: "Rental Properties", slug: "rental-properties", description: "Cash flow and property management", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 133, course_id: 34, title: "REITs", slug: "reits", description: "Real Estate Investment Trusts", video_url: null, duration_seconds: 2100, order_index: 3 },
      { id: 134, course_id: 34, title: "Real Estate Analysis", slug: "real-estate-analysis", description: "Cap rates, NOI, and valuation", video_url: null, duration_seconds: 2700, order_index: 4 },
    ]
  },
  "crypto-digital-assets": {
    id: 35,
    course_id: 35,
    title: "Crypto & Digital Assets",
    slug: "crypto-digital-assets",
    description: "Navigate the world of cryptocurrency",
    thumbnail: null,
    duration_hours: 12,
    lessons: [
      { id: 135, course_id: 35, title: "Blockchain Basics", slug: "blockchain-basics", description: "How blockchain technology works", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 136, course_id: 35, title: "Bitcoin & Ethereum", slug: "bitcoin-ethereum", description: "Major cryptocurrencies explained", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 137, course_id: 35, title: "DeFi & NFTs", slug: "defi-nfts", description: "Decentralized finance and digital assets", video_url: null, duration_seconds: 2400, order_index: 3 },
      { id: 138, course_id: 35, title: "Crypto Security", slug: "crypto-security", description: "Wallets, keys, and safe practices", video_url: null, duration_seconds: 2100, order_index: 4 },
    ]
  },
};

import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, Play, CheckCircle } from 'lucide-react';

interface Lesson {
  id: number;
  course_id: number;
  title: string;
  slug: string;
  description: string | null;
  video_url: string | null;
  duration_seconds: number;
  order_index: number;
}

interface Course {
  id: number;
  subject_id: number;
  title: string;
  slug: string;
  description: string | null;
  thumbnail: string | null;
  duration_hours: number;
  lessons: Lesson[];
}

export function CoursePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState<Record<number, boolean>>({});

  useEffect(() => {
    // Mock data - in real app would fetch from /api/courses/${slug}
    setTimeout(() => {
      const data = MOCK_LESSONS[slug || ''];
      if (data) {
        setCourse(data);
      }
      setLoading(false);
    }, 300);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white p-4">
        <div className="container mx-auto">
          <div className="text-center text-gray-500">Loading...</div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-white p-4">
        <div className="container mx-auto">
          <div className="text-center text-gray-500">Course not found</div>
        </div>
      </div>
    );
  }

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
       {/* Header */}
       <header className="border-b border-gray-200 bg-white">
         <div className="container mx-auto px-4 py-6">
           <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
             <ArrowLeft className="h-4 w-4" />
             Back
           </button>
           <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
           {course.description && (
             <p className="mt-2 text-gray-600">{course.description}</p>
           )}
         </div>
       </header>

      {/* Lessons */}
      <main className="container mx-auto px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Lessons</h2>
        
        {course.lessons.length === 0 ? (
          <div className="text-center text-gray-500">No lessons available yet</div>
        ) : (
          <div className="space-y-4">
            {course.lessons.map((lesson, index) => (
              <Card key={lesson.id} className="overflow-hidden">
                <div className="flex items-center gap-4 p-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{lesson.title}</h3>
                    {lesson.description && (
                      <p className="text-sm text-gray-600">{lesson.description}</p>
                    )}
                    {progress[lesson.id] && (
                      <div className="mt-2 flex items-center gap-1 text-sm text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span>Completed</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    <Link to={`/lesson/${lesson.id}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Play className="h-4 w-4 mr-2" />
                        {progress[lesson.id] ? 'Review' : 'Start'}
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
