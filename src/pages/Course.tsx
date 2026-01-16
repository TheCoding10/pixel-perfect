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
      { id: 59, course_id: 13, title: "Introduction to JavaScript", slug: "introduction-to-javascript", description: "What JavaScript is and why it matters", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 60, course_id: 13, title: "JavaScript Basics & Syntax", slug: "javascript-basics-syntax", description: "Core syntax and structure", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 61, course_id: 13, title: "Variables and Data Types", slug: "variables-data-types", description: "Working with different types of data", video_url: null, duration_seconds: 2400, order_index: 3 },
      { id: 62, course_id: 13, title: "Operators and Expressions", slug: "operators-expressions", description: "Performing operations and calculations", video_url: null, duration_seconds: 2100, order_index: 4 },
      { id: 63, course_id: 13, title: "Input, Output, and the Console", slug: "input-output-console", description: "Interacting with users and debugging", video_url: null, duration_seconds: 2100, order_index: 5 },
      { id: 64, course_id: 13, title: "Control Flow (Conditionals)", slug: "control-flow-conditionals", description: "Making decisions with if/else", video_url: null, duration_seconds: 2400, order_index: 6 },
      { id: 65, course_id: 13, title: "Loops and Iteration", slug: "loops-iteration", description: "Repeating actions efficiently", video_url: null, duration_seconds: 2400, order_index: 7 },
      { id: 66, course_id: 13, title: "Functions", slug: "functions", description: "Creating reusable code blocks", video_url: null, duration_seconds: 2700, order_index: 8 },
      { id: 67, course_id: 13, title: "Arrays", slug: "arrays", description: "Storing and manipulating lists of data", video_url: null, duration_seconds: 2700, order_index: 9 },
      { id: 68, course_id: 13, title: "Objects", slug: "objects", description: "Structuring data with key-value pairs", video_url: null, duration_seconds: 2700, order_index: 10 },
      { id: 69, course_id: 13, title: "Strings and Text Processing", slug: "strings-text-processing", description: "Working with text data", video_url: null, duration_seconds: 2400, order_index: 11 },
      { id: 70, course_id: 13, title: "Errors, Debugging, and Exceptions", slug: "errors-debugging-exceptions", description: "Finding and fixing problems", video_url: null, duration_seconds: 2400, order_index: 12 },
      { id: 71, course_id: 13, title: "JavaScript in the Browser (DOM Basics)", slug: "javascript-browser-dom-basics", description: "Interacting with web pages", video_url: null, duration_seconds: 2700, order_index: 13 },
      { id: 72, course_id: 13, title: "Events and User Interaction", slug: "events-user-interaction", description: "Responding to user actions", video_url: null, duration_seconds: 2700, order_index: 14 },
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
      { id: 62, course_id: 14, title: "Why Object-Oriented Programming Exists", slug: "why-oop-exists", description: "The history and motivation behind OOP", video_url: null, duration_seconds: 2200, order_index: 1 },
      { id: 63, course_id: 14, title: "Objects and Classes", slug: "objects-and-classes", description: "Understanding the core building blocks", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 64, course_id: 14, title: "Attributes and Methods", slug: "attributes-and-methods", description: "Data and behavior in objects", video_url: null, duration_seconds: 2300, order_index: 3 },
      { id: 65, course_id: 14, title: "Creating and Using Objects", slug: "creating-using-objects", description: "Instantiation and object interaction", video_url: null, duration_seconds: 2500, order_index: 4 },
      { id: 66, course_id: 14, title: "Constructors and Initialization", slug: "constructors-initialization", description: "Setting up objects properly", video_url: null, duration_seconds: 2400, order_index: 5 },
      { id: 67, course_id: 14, title: "Encapsulation", slug: "encapsulation", description: "Data hiding and access control", video_url: null, duration_seconds: 2300, order_index: 6 },
      { id: 68, course_id: 14, title: "Inheritance", slug: "inheritance", description: "Extending and reusing classes", video_url: null, duration_seconds: 2600, order_index: 7 },
      { id: 69, course_id: 14, title: "Polymorphism", slug: "polymorphism", description: "Many forms, one interface", video_url: null, duration_seconds: 2500, order_index: 8 },
      { id: 70, course_id: 14, title: "Abstraction", slug: "abstraction", description: "Hiding complexity with abstract types", video_url: null, duration_seconds: 2400, order_index: 9 },
      { id: 71, course_id: 14, title: "Composition vs Inheritance", slug: "composition-vs-inheritance", description: "Choosing the right relationship", video_url: null, duration_seconds: 2500, order_index: 10 },
      { id: 72, course_id: 14, title: "Common OOP Design Mistakes", slug: "common-oop-design-mistakes", description: "Pitfalls to avoid in OOP", video_url: null, duration_seconds: 2300, order_index: 11 },
      { id: 73, course_id: 14, title: "OOP in Real Software", slug: "oop-in-real-software", description: "Applying OOP in production code", video_url: null, duration_seconds: 2600, order_index: 12 },
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
      { id: 73, course_id: 15, title: "Why Data Structures Matter", slug: "why-data-structures-matter", description: "The importance of organizing data efficiently", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 74, course_id: 15, title: "Abstract Data Types (ADTs)", slug: "abstract-data-types", description: "Conceptual building blocks of data structures", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 75, course_id: 15, title: "Arrays and Dynamic Arrays", slug: "arrays-dynamic-arrays", description: "Contiguous storage and resizing", video_url: null, duration_seconds: 2700, order_index: 3 },
      { id: 76, course_id: 15, title: "Linked Lists", slug: "linked-lists", description: "Node-based sequential structures", video_url: null, duration_seconds: 2700, order_index: 4 },
      { id: 77, course_id: 15, title: "Stacks", slug: "stacks", description: "Last-in, first-out data structure", video_url: null, duration_seconds: 2400, order_index: 5 },
      { id: 78, course_id: 15, title: "Queues", slug: "queues", description: "First-in, first-out data structure", video_url: null, duration_seconds: 2400, order_index: 6 },
      { id: 79, course_id: 15, title: "Hash Tables", slug: "hash-tables", description: "Fast key-value lookups", video_url: null, duration_seconds: 2700, order_index: 7 },
      { id: 80, course_id: 15, title: "Trees", slug: "trees", description: "Hierarchical data structures", video_url: null, duration_seconds: 2700, order_index: 8 },
      { id: 81, course_id: 15, title: "Binary Search Trees", slug: "binary-search-trees", description: "Ordered tree structures for searching", video_url: null, duration_seconds: 2700, order_index: 9 },
      { id: 82, course_id: 15, title: "Heaps and Priority Queues", slug: "heaps-priority-queues", description: "Efficient min/max access", video_url: null, duration_seconds: 2700, order_index: 10 },
      { id: 83, course_id: 15, title: "Graphs", slug: "graphs", description: "Networks of connected nodes", video_url: null, duration_seconds: 3000, order_index: 11 },
      { id: 84, course_id: 15, title: "Tries and Specialized Structures", slug: "tries-specialized-structures", description: "Prefix trees and domain-specific structures", video_url: null, duration_seconds: 2700, order_index: 12 },
      { id: 85, course_id: 15, title: "Choosing the Right Data Structure", slug: "choosing-right-data-structure", description: "Trade-offs and decision-making", video_url: null, duration_seconds: 2400, order_index: 13 },
      { id: 86, course_id: 15, title: "Data Structures in Real Systems", slug: "data-structures-real-systems", description: "Practical applications and examples", video_url: null, duration_seconds: 2400, order_index: 14 },
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
      { id: 87, course_id: 16, title: "What Is an Algorithm?", slug: "what-is-an-algorithm", description: "Introduction to algorithmic thinking", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 88, course_id: 16, title: "Algorithm Analysis & Big-O Notation", slug: "algorithm-analysis-big-o", description: "Measuring algorithm efficiency", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 89, course_id: 16, title: "Asymptotic Analysis", slug: "asymptotic-analysis", description: "Understanding growth rates", video_url: null, duration_seconds: 2400, order_index: 3 },
      { id: 90, course_id: 16, title: "Brute Force Algorithms", slug: "brute-force-algorithms", description: "Exhaustive search approaches", video_url: null, duration_seconds: 2400, order_index: 4 },
      { id: 91, course_id: 16, title: "Divide and Conquer", slug: "divide-and-conquer", description: "Breaking problems into subproblems", video_url: null, duration_seconds: 2700, order_index: 5 },
      { id: 92, course_id: 16, title: "Sorting Algorithms", slug: "sorting-algorithms", description: "Bubble, merge, quick sort and more", video_url: null, duration_seconds: 3000, order_index: 6 },
      { id: 93, course_id: 16, title: "Searching Algorithms", slug: "searching-algorithms", description: "Binary search and beyond", video_url: null, duration_seconds: 2400, order_index: 7 },
      { id: 94, course_id: 16, title: "Greedy Algorithms", slug: "greedy-algorithms", description: "Making locally optimal choices", video_url: null, duration_seconds: 2700, order_index: 8 },
      { id: 95, course_id: 16, title: "Dynamic Programming", slug: "dynamic-programming", description: "Optimization through memoization", video_url: null, duration_seconds: 3000, order_index: 9 },
      { id: 96, course_id: 16, title: "Recursion and Backtracking", slug: "recursion-backtracking", description: "Solving problems through recursion", video_url: null, duration_seconds: 2700, order_index: 10 },
      { id: 97, course_id: 16, title: "Graph Algorithms", slug: "graph-algorithms", description: "Traversals, shortest paths, and more", video_url: null, duration_seconds: 3000, order_index: 11 },
      { id: 98, course_id: 16, title: "Randomized Algorithms", slug: "randomized-algorithms", description: "Using randomness for efficiency", video_url: null, duration_seconds: 2400, order_index: 12 },
      { id: 99, course_id: 16, title: "Algorithm Correctness", slug: "algorithm-correctness", description: "Proving algorithms work", video_url: null, duration_seconds: 2400, order_index: 13 },
      { id: 100, course_id: 16, title: "NP-Completeness & Limits of Algorithms", slug: "np-completeness-limits", description: "Understanding computational boundaries", video_url: null, duration_seconds: 2700, order_index: 14 },
      { id: 101, course_id: 16, title: "Algorithms in Real Systems", slug: "algorithms-real-systems", description: "Practical applications and examples", video_url: null, duration_seconds: 2400, order_index: 15 },
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
      { id: 102, course_id: 17, title: "What Is Computer Architecture?", slug: "what-is-computer-architecture", description: "Introduction to computer design", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 103, course_id: 17, title: "Levels of Abstraction in Computer Systems", slug: "levels-of-abstraction", description: "From transistors to applications", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 104, course_id: 17, title: "Binary Data and Low-Level Representation", slug: "binary-data-representation", description: "How computers store information", video_url: null, duration_seconds: 2400, order_index: 3 },
      { id: 105, course_id: 17, title: "Instruction Set Architecture (ISA)", slug: "instruction-set-architecture", description: "The interface between hardware and software", video_url: null, duration_seconds: 2700, order_index: 4 },
      { id: 106, course_id: 17, title: "The CPU and the Fetch–Decode–Execute Cycle", slug: "cpu-fetch-decode-execute", description: "How processors execute instructions", video_url: null, duration_seconds: 2700, order_index: 5 },
      { id: 107, course_id: 17, title: "Registers and the Datapath", slug: "registers-datapath", description: "Data flow within the processor", video_url: null, duration_seconds: 2400, order_index: 6 },
      { id: 108, course_id: 17, title: "Memory Hierarchy", slug: "memory-hierarchy", description: "Organizing memory for performance", video_url: null, duration_seconds: 2700, order_index: 7 },
      { id: 109, course_id: 17, title: "Caches and Locality", slug: "caches-locality", description: "Fast memory access patterns", video_url: null, duration_seconds: 2700, order_index: 8 },
      { id: 110, course_id: 17, title: "Storage Systems", slug: "storage-systems", description: "HDDs, SSDs, and persistent storage", video_url: null, duration_seconds: 2400, order_index: 9 },
      { id: 111, course_id: 17, title: "Input/Output and Peripherals", slug: "input-output-peripherals", description: "Connecting to the outside world", video_url: null, duration_seconds: 2400, order_index: 10 },
      { id: 112, course_id: 17, title: "Assembly Language (Intro)", slug: "assembly-language-intro", description: "Low-level programming basics", video_url: null, duration_seconds: 2700, order_index: 11 },
      { id: 113, course_id: 17, title: "Performance and Pipelining", slug: "performance-pipelining", description: "Speeding up instruction execution", video_url: null, duration_seconds: 2700, order_index: 12 },
      { id: 114, course_id: 17, title: "Parallelism and Multicore Systems", slug: "parallelism-multicore", description: "Harnessing multiple processors", video_url: null, duration_seconds: 2700, order_index: 13 },
      { id: 115, course_id: 17, title: "Hardware Support for Operating Systems", slug: "hardware-os-support", description: "Interrupts, protection, and virtualization", video_url: null, duration_seconds: 2400, order_index: 14 },
      { id: 116, course_id: 17, title: "Computer Architecture in Real Systems", slug: "architecture-real-systems", description: "Practical applications and examples", video_url: null, duration_seconds: 2400, order_index: 15 },
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
      { id: 117, course_id: 18, title: "What Is an Operating System?", slug: "what-is-operating-system", description: "Introduction to OS fundamentals", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 118, course_id: 18, title: "OS Design Goals and Structure", slug: "os-design-structure", description: "How operating systems are organized", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 119, course_id: 18, title: "Processes", slug: "processes", description: "Program execution and management", video_url: null, duration_seconds: 2700, order_index: 3 },
      { id: 120, course_id: 18, title: "Threads", slug: "threads", description: "Lightweight processes and concurrency", video_url: null, duration_seconds: 2400, order_index: 4 },
      { id: 121, course_id: 18, title: "CPU Scheduling", slug: "cpu-scheduling", description: "Allocating processor time", video_url: null, duration_seconds: 2700, order_index: 5 },
      { id: 122, course_id: 18, title: "Synchronization and Concurrency", slug: "synchronization-concurrency", description: "Coordinating parallel execution", video_url: null, duration_seconds: 2700, order_index: 6 },
      { id: 123, course_id: 18, title: "Synchronization Primitives", slug: "synchronization-primitives", description: "Mutexes, semaphores, and monitors", video_url: null, duration_seconds: 2700, order_index: 7 },
      { id: 124, course_id: 18, title: "Deadlock", slug: "deadlock", description: "Prevention, detection, and recovery", video_url: null, duration_seconds: 2400, order_index: 8 },
      { id: 125, course_id: 18, title: "Memory Management", slug: "memory-management", description: "Allocating and organizing memory", video_url: null, duration_seconds: 2700, order_index: 9 },
      { id: 126, course_id: 18, title: "Virtual Memory", slug: "virtual-memory", description: "Paging and address translation", video_url: null, duration_seconds: 2700, order_index: 10 },
      { id: 127, course_id: 18, title: "File Systems", slug: "file-systems", description: "Storage organization and access", video_url: null, duration_seconds: 2700, order_index: 11 },
      { id: 128, course_id: 18, title: "Input/Output Systems", slug: "input-output-systems", description: "Device management and drivers", video_url: null, duration_seconds: 2400, order_index: 12 },
      { id: 129, course_id: 18, title: "Security and Protection", slug: "security-protection", description: "Access control and system security", video_url: null, duration_seconds: 2400, order_index: 13 },
      { id: 130, course_id: 18, title: "Virtualization and Containers", slug: "virtualization-containers", description: "VMs, Docker, and isolation", video_url: null, duration_seconds: 2400, order_index: 14 },
      { id: 131, course_id: 18, title: "Operating Systems in Practice", slug: "os-in-practice", description: "Real-world applications and examples", video_url: null, duration_seconds: 2400, order_index: 15 },
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
      { id: 132, course_id: 19, title: "What Is a Database?", slug: "what-is-database", description: "Introduction to databases and their purpose", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 133, course_id: 19, title: "Database Systems and DBMS", slug: "database-systems-dbms", description: "Database management system architecture", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 134, course_id: 19, title: "Data Models", slug: "data-models", description: "Conceptual, logical, and physical models", video_url: null, duration_seconds: 2400, order_index: 3 },
      { id: 135, course_id: 19, title: "Relational Databases", slug: "relational-databases", description: "Tables, keys, and relations", video_url: null, duration_seconds: 2700, order_index: 4 },
      { id: 136, course_id: 19, title: "SQL Fundamentals", slug: "sql-fundamentals", description: "Basic queries and commands", video_url: null, duration_seconds: 2700, order_index: 5 },
      { id: 137, course_id: 19, title: "Advanced SQL Queries", slug: "advanced-sql-queries", description: "Joins, subqueries, and aggregations", video_url: null, duration_seconds: 2700, order_index: 6 },
      { id: 138, course_id: 19, title: "Database Design & Schema Modeling", slug: "database-design-schema", description: "Designing effective database schemas", video_url: null, duration_seconds: 2700, order_index: 7 },
      { id: 139, course_id: 19, title: "Normalization", slug: "normalization", description: "Reducing redundancy and dependencies", video_url: null, duration_seconds: 2400, order_index: 8 },
      { id: 140, course_id: 19, title: "Indexing and Performance", slug: "indexing-performance", description: "Optimizing query execution", video_url: null, duration_seconds: 2700, order_index: 9 },
      { id: 141, course_id: 19, title: "Transactions", slug: "transactions", description: "ACID properties and transaction management", video_url: null, duration_seconds: 2400, order_index: 10 },
      { id: 142, course_id: 19, title: "Concurrency Control", slug: "concurrency-control", description: "Managing simultaneous access", video_url: null, duration_seconds: 2400, order_index: 11 },
      { id: 143, course_id: 19, title: "Recovery and Fault Tolerance", slug: "recovery-fault-tolerance", description: "Backup and crash recovery strategies", video_url: null, duration_seconds: 2400, order_index: 12 },
      { id: 144, course_id: 19, title: "NoSQL Databases", slug: "nosql-databases", description: "Document, key-value, and graph databases", video_url: null, duration_seconds: 2700, order_index: 13 },
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
      { id: 145, course_id: 20, title: "What Is a Computer Network?", slug: "what-is-computer-network", description: "Introduction to networking concepts", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 146, course_id: 20, title: "Network Models & Layering", slug: "network-models-layering", description: "OSI and TCP/IP reference models", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 147, course_id: 20, title: "Physical Layer", slug: "physical-layer", description: "Transmission media and signals", video_url: null, duration_seconds: 2400, order_index: 3 },
      { id: 148, course_id: 20, title: "Data Link Layer", slug: "data-link-layer", description: "Framing, error detection, and MAC", video_url: null, duration_seconds: 2700, order_index: 4 },
      { id: 149, course_id: 20, title: "Network Layer", slug: "network-layer", description: "IP addressing and packet forwarding", video_url: null, duration_seconds: 2700, order_index: 5 },
      { id: 150, course_id: 20, title: "Transport Layer", slug: "transport-layer", description: "TCP, UDP, and reliable delivery", video_url: null, duration_seconds: 2700, order_index: 6 },
      { id: 151, course_id: 20, title: "Application Layer", slug: "application-layer", description: "HTTP, DNS, and application protocols", video_url: null, duration_seconds: 2700, order_index: 7 },
      { id: 152, course_id: 20, title: "Addressing & Naming", slug: "addressing-naming", description: "IP addresses, DNS, and NAT", video_url: null, duration_seconds: 2400, order_index: 8 },
      { id: 153, course_id: 20, title: "Routing Algorithms", slug: "routing-algorithms", description: "Path finding and routing protocols", video_url: null, duration_seconds: 2700, order_index: 9 },
      { id: 154, course_id: 20, title: "Network Security Basics", slug: "network-security-basics", description: "Encryption, firewalls, and threats", video_url: null, duration_seconds: 2700, order_index: 10 },
      { id: 155, course_id: 20, title: "Wireless and Mobile Networks", slug: "wireless-mobile-networks", description: "Wi-Fi, cellular, and mobility", video_url: null, duration_seconds: 2400, order_index: 11 },
      { id: 156, course_id: 20, title: "Network Performance", slug: "network-performance", description: "Latency, bandwidth, and QoS", video_url: null, duration_seconds: 2400, order_index: 12 },
      { id: 157, course_id: 20, title: "Distributed Systems (Intro)", slug: "distributed-systems-intro", description: "Fundamentals of distributed computing", video_url: null, duration_seconds: 2400, order_index: 13 },
      { id: 158, course_id: 20, title: "Networks in Practice", slug: "networks-in-practice", description: "Real-world applications and examples", video_url: null, duration_seconds: 2400, order_index: 14 },
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
    duration_hours: 14,
    lessons: [
      { id: 300, course_id: 28, title: "What Is Investing? (Foundations & Purpose)", slug: "what-is-investing-foundations-purpose", description: "Understanding why and how we invest", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 301, course_id: 28, title: "Saving vs Investing", slug: "saving-vs-investing", description: "Key differences and when to use each", video_url: null, duration_seconds: 2100, order_index: 2 },
      { id: 302, course_id: 28, title: "Risk, Return, and Time Horizon", slug: "risk-return-time-horizon", description: "The fundamental investing trade-offs", video_url: null, duration_seconds: 2400, order_index: 3 },
      { id: 303, course_id: 28, title: "Compounding & Long-Term Growth", slug: "compounding-long-term-growth", description: "The power of time and reinvestment", video_url: null, duration_seconds: 2400, order_index: 4 },
      { id: 304, course_id: 28, title: "Asset Classes Explained", slug: "asset-classes-explained", description: "Stocks, bonds, real estate, and more", video_url: null, duration_seconds: 2700, order_index: 5 },
      { id: 305, course_id: 28, title: "Diversification & Portfolio Theory", slug: "diversification-portfolio-theory", description: "Spreading risk across investments", video_url: null, duration_seconds: 2400, order_index: 6 },
      { id: 306, course_id: 28, title: "Risk Tolerance vs Risk Capacity", slug: "risk-tolerance-vs-risk-capacity", description: "Understanding your personal risk profile", video_url: null, duration_seconds: 2100, order_index: 7 },
      { id: 307, course_id: 28, title: "Inflation & Purchasing Power", slug: "inflation-purchasing-power", description: "How inflation affects your money", video_url: null, duration_seconds: 2100, order_index: 8 },
      { id: 308, course_id: 28, title: "Active vs Passive Investing", slug: "active-vs-passive-investing", description: "Two approaches to building wealth", video_url: null, duration_seconds: 2400, order_index: 9 },
      { id: 309, course_id: 28, title: "Dollar-Cost Averaging", slug: "dollar-cost-averaging", description: "Consistent investing over time", video_url: null, duration_seconds: 2100, order_index: 10 },
      { id: 310, course_id: 28, title: "Market Timing vs Time in the Market", slug: "market-timing-vs-time-in-market", description: "Why staying invested matters", video_url: null, duration_seconds: 2400, order_index: 11 },
      { id: 311, course_id: 28, title: "Rebalancing & Portfolio Maintenance", slug: "rebalancing-portfolio-maintenance", description: "Keeping your portfolio on track", video_url: null, duration_seconds: 2100, order_index: 12 },
      { id: 312, course_id: 28, title: "Taxes, Fees, and Friction", slug: "taxes-fees-friction", description: "Hidden costs that impact returns", video_url: null, duration_seconds: 2400, order_index: 13 },
      { id: 313, course_id: 28, title: "Common Investing Mistakes", slug: "common-investing-mistakes", description: "Pitfalls to avoid as an investor", video_url: null, duration_seconds: 2400, order_index: 14 },
      { id: 314, course_id: 28, title: "Building Your First Investment Plan", slug: "building-your-first-investment-plan", description: "Creating a personalized strategy", video_url: null, duration_seconds: 2700, order_index: 15 },
    ]
  },
  "etfs-index-funds": {
    id: 29,
    course_id: 29,
    title: "ETFs & Index Funds",
    slug: "etfs-index-funds",
    description: "Passive investing strategies",
    thumbnail: null,
    duration_hours: 14,
    lessons: [
      { id: 400, course_id: 29, title: "What Are ETFs & Index Funds?", slug: "what-are-etfs-index-funds", description: "Introduction to passive investment vehicles", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 401, course_id: 29, title: "Why ETFs Became So Popular", slug: "why-etfs-became-popular", description: "The rise of exchange-traded funds", video_url: null, duration_seconds: 2100, order_index: 2 },
      { id: 402, course_id: 29, title: "How ETFs Work (Structure & Mechanics)", slug: "how-etfs-work-structure-mechanics", description: "Understanding ETF creation and redemption", video_url: null, duration_seconds: 2400, order_index: 3 },
      { id: 403, course_id: 29, title: "ETFs vs Mutual Funds", slug: "etfs-vs-mutual-funds", description: "Key differences and trade-offs", video_url: null, duration_seconds: 2400, order_index: 4 },
      { id: 404, course_id: 29, title: "Index Funds Explained", slug: "index-funds-explained", description: "Passive funds that track benchmarks", video_url: null, duration_seconds: 2100, order_index: 5 },
      { id: 405, course_id: 29, title: "What Is an Index? (S&P 500, Total Market, etc.)", slug: "what-is-an-index", description: "Understanding market benchmarks", video_url: null, duration_seconds: 2400, order_index: 6 },
      { id: 406, course_id: 29, title: "Expense Ratios & Costs", slug: "expense-ratios-costs", description: "How fees impact your returns", video_url: null, duration_seconds: 2100, order_index: 7 },
      { id: 407, course_id: 29, title: "Tracking Error & Fund Performance", slug: "tracking-error-fund-performance", description: "How well funds follow their index", video_url: null, duration_seconds: 2100, order_index: 8 },
      { id: 408, course_id: 29, title: "Types of ETFs (Equity, Bond, Sector, International)", slug: "types-of-etfs", description: "Different categories of ETFs", video_url: null, duration_seconds: 2400, order_index: 9 },
      { id: 409, course_id: 29, title: "Broad Market vs Thematic ETFs", slug: "broad-market-vs-thematic-etfs", description: "General vs specialized exposure", video_url: null, duration_seconds: 2100, order_index: 10 },
      { id: 410, course_id: 29, title: "Dividend ETFs & Income Strategies", slug: "dividend-etfs-income-strategies", description: "Generating income through ETFs", video_url: null, duration_seconds: 2400, order_index: 11 },
      { id: 411, course_id: 29, title: "Risk & Diversification With ETFs", slug: "risk-diversification-with-etfs", description: "Building a diversified portfolio", video_url: null, duration_seconds: 2100, order_index: 12 },
      { id: 412, course_id: 29, title: "How to Choose an ETF", slug: "how-to-choose-an-etf", description: "Selection criteria and research", video_url: null, duration_seconds: 2400, order_index: 13 },
      { id: 413, course_id: 29, title: "Common ETF Mistakes", slug: "common-etf-mistakes", description: "Pitfalls to avoid with ETF investing", video_url: null, duration_seconds: 2100, order_index: 14 },
      { id: 414, course_id: 29, title: "Building a Simple ETF Portfolio", slug: "building-simple-etf-portfolio", description: "Creating a diversified ETF strategy", video_url: null, duration_seconds: 2700, order_index: 15 },
    ]
  },
  "bonds-fixed-income": {
    id: 30,
    course_id: 30,
    title: "Bonds & Fixed Income",
    slug: "bonds-fixed-income",
    description: "Understanding fixed income securities",
    thumbnail: null,
    duration_hours: 14,
    lessons: [
      { id: 500, course_id: 30, title: "What Are Bonds & Fixed Income?", slug: "what-are-bonds-fixed-income", description: "Introduction to fixed income investing", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 501, course_id: 30, title: "Why Investors Use Bonds", slug: "why-investors-use-bonds", description: "The role of bonds in investment strategy", video_url: null, duration_seconds: 2100, order_index: 2 },
      { id: 502, course_id: 30, title: "How Bonds Work (Structure & Cash Flows)", slug: "how-bonds-work-structure-cash-flows", description: "Understanding bond mechanics and payments", video_url: null, duration_seconds: 2400, order_index: 3 },
      { id: 503, course_id: 30, title: "Bond Issuers (Government, Corporate, Municipal)", slug: "bond-issuers", description: "Different entities that issue bonds", video_url: null, duration_seconds: 2400, order_index: 4 },
      { id: 504, course_id: 30, title: "Bond Prices & Interest Rates", slug: "bond-prices-interest-rates", description: "The inverse relationship explained", video_url: null, duration_seconds: 2400, order_index: 5 },
      { id: 505, course_id: 30, title: "Yield Explained (Coupon, YTM, Current Yield)", slug: "yield-explained", description: "Understanding different yield measures", video_url: null, duration_seconds: 2700, order_index: 6 },
      { id: 506, course_id: 30, title: "Credit Risk & Credit Ratings", slug: "credit-risk-credit-ratings", description: "Evaluating bond issuer creditworthiness", video_url: null, duration_seconds: 2400, order_index: 7 },
      { id: 507, course_id: 30, title: "Interest Rate Risk & Duration", slug: "interest-rate-risk-duration", description: "How rate changes affect bond prices", video_url: null, duration_seconds: 2400, order_index: 8 },
      { id: 508, course_id: 30, title: "Inflation Risk & Real Returns", slug: "inflation-risk-real-returns", description: "Protecting purchasing power with bonds", video_url: null, duration_seconds: 2100, order_index: 9 },
      { id: 509, course_id: 30, title: "Types of Bonds (Treasuries, Munis, Corporates)", slug: "types-of-bonds", description: "Different bond categories explained", video_url: null, duration_seconds: 2400, order_index: 10 },
      { id: 510, course_id: 30, title: "Bond Funds & Bond ETFs", slug: "bond-funds-bond-etfs", description: "Pooled bond investment vehicles", video_url: null, duration_seconds: 2400, order_index: 11 },
      { id: 511, course_id: 30, title: "Role of Bonds in a Portfolio", slug: "role-of-bonds-in-portfolio", description: "Balancing risk with fixed income", video_url: null, duration_seconds: 2100, order_index: 12 },
      { id: 512, course_id: 30, title: "Active vs Passive Bond Investing", slug: "active-vs-passive-bond-investing", description: "Different approaches to bond allocation", video_url: null, duration_seconds: 2100, order_index: 13 },
      { id: 513, course_id: 30, title: "Common Bond Mistakes", slug: "common-bond-mistakes", description: "Pitfalls to avoid in fixed income", video_url: null, duration_seconds: 2100, order_index: 14 },
      { id: 514, course_id: 30, title: "Building a Simple Bond Allocation", slug: "building-simple-bond-allocation", description: "Creating a diversified bond strategy", video_url: null, duration_seconds: 2700, order_index: 15 },
    ]
  },
  "portfolio-building-risk-management": {
    id: 31,
    course_id: 31,
    title: "Portfolio Building & Risk Management",
    slug: "portfolio-building-risk-management",
    description: "Build and manage investment portfolios",
    thumbnail: null,
    duration_hours: 14,
    lessons: [
      { id: 600, course_id: 31, title: "What Is a Portfolio?", slug: "what-is-a-portfolio", description: "Understanding investment portfolios", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 601, course_id: 31, title: "Risk vs Return in Portfolio Context", slug: "risk-vs-return-portfolio-context", description: "Balancing risk and reward", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 602, course_id: 31, title: "Asset Allocation Fundamentals", slug: "asset-allocation-fundamentals", description: "Distributing investments across assets", video_url: null, duration_seconds: 2400, order_index: 3 },
      { id: 603, course_id: 31, title: "Strategic vs Tactical Asset Allocation", slug: "strategic-vs-tactical-asset-allocation", description: "Long-term vs active allocation approaches", video_url: null, duration_seconds: 2400, order_index: 4 },
      { id: 604, course_id: 31, title: "Diversification Across Asset Classes", slug: "diversification-across-asset-classes", description: "Spreading risk across investments", video_url: null, duration_seconds: 2400, order_index: 5 },
      { id: 605, course_id: 31, title: "Correlation & Portfolio Risk", slug: "correlation-portfolio-risk", description: "How assets move together", video_url: null, duration_seconds: 2400, order_index: 6 },
      { id: 606, course_id: 31, title: "Modern Portfolio Theory (MPT)", slug: "modern-portfolio-theory-mpt", description: "Foundational investment theory", video_url: null, duration_seconds: 2700, order_index: 7 },
      { id: 607, course_id: 31, title: "Efficient Frontier Explained", slug: "efficient-frontier-explained", description: "Optimal risk-return combinations", video_url: null, duration_seconds: 2400, order_index: 8 },
      { id: 608, course_id: 31, title: "Risk Tolerance & Investor Profiles", slug: "risk-tolerance-investor-profiles", description: "Understanding your risk capacity", video_url: null, duration_seconds: 2100, order_index: 9 },
      { id: 609, course_id: 31, title: "Portfolio Rebalancing Strategies", slug: "portfolio-rebalancing-strategies", description: "Maintaining target allocations", video_url: null, duration_seconds: 2400, order_index: 10 },
      { id: 610, course_id: 31, title: "Drawdowns & Downside Risk", slug: "drawdowns-downside-risk", description: "Managing portfolio losses", video_url: null, duration_seconds: 2100, order_index: 11 },
      { id: 611, course_id: 31, title: "Volatility Management Techniques", slug: "volatility-management-techniques", description: "Reducing portfolio swings", video_url: null, duration_seconds: 2400, order_index: 12 },
      { id: 612, course_id: 31, title: "Behavioral Risk & Emotional Control", slug: "behavioral-risk-emotional-control", description: "Managing investor psychology", video_url: null, duration_seconds: 2100, order_index: 13 },
      { id: 613, course_id: 31, title: "Stress Testing & Scenario Analysis", slug: "stress-testing-scenario-analysis", description: "Testing portfolio resilience", video_url: null, duration_seconds: 2400, order_index: 14 },
      { id: 614, course_id: 31, title: "Building & Maintaining a Long-Term Portfolio", slug: "building-maintaining-long-term-portfolio", description: "Creating a sustainable investment strategy", video_url: null, duration_seconds: 2700, order_index: 15 },
    ]
  },
  "financial-markets-institutions": {
    id: 32,
    course_id: 32,
    title: "Financial Markets & Institutions",
    slug: "financial-markets-institutions",
    description: "How financial markets operate",
    thumbnail: null,
    duration_hours: 14,
    lessons: [
      { id: 124, course_id: 32, title: "What Are Financial Markets?", slug: "what-are-financial-markets", description: "Introduction to financial markets and their role in the economy", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 125, course_id: 32, title: "Why Financial Markets Exist", slug: "why-financial-markets-exist", description: "Understanding the purpose and function of financial markets", video_url: null, duration_seconds: 2200, order_index: 2 },
      { id: 126, course_id: 32, title: "Types of Financial Markets", slug: "types-financial-markets", description: "Overview of different market categories", video_url: null, duration_seconds: 2400, order_index: 3 },
      { id: 127, course_id: 32, title: "Primary vs Secondary Markets", slug: "primary-vs-secondary-markets", description: "How securities are issued and traded", video_url: null, duration_seconds: 2300, order_index: 4 },
      { id: 128, course_id: 32, title: "Money Markets vs Capital Markets", slug: "money-vs-capital-markets", description: "Short-term vs long-term financing", video_url: null, duration_seconds: 2500, order_index: 5 },
      { id: 129, course_id: 32, title: "Equity Markets Explained", slug: "equity-markets-explained", description: "How stock markets function", video_url: null, duration_seconds: 2600, order_index: 6 },
      { id: 130, course_id: 32, title: "Debt Markets Explained", slug: "debt-markets-explained", description: "Understanding bond and credit markets", video_url: null, duration_seconds: 2500, order_index: 7 },
      { id: 131, course_id: 32, title: "Derivatives Markets Explained", slug: "derivatives-markets-explained", description: "Futures, options, and swaps", video_url: null, duration_seconds: 2700, order_index: 8 },
      { id: 132, course_id: 32, title: "Foreign Exchange (FX) Markets", slug: "foreign-exchange-markets", description: "Global currency trading", video_url: null, duration_seconds: 2400, order_index: 9 },
      { id: 133, course_id: 32, title: "Financial Intermediaries Overview", slug: "financial-intermediaries-overview", description: "Role of intermediaries in finance", video_url: null, duration_seconds: 2300, order_index: 10 },
      { id: 134, course_id: 32, title: "Commercial Banks & Credit Creation", slug: "commercial-banks-credit-creation", description: "How banks create money and credit", video_url: null, duration_seconds: 2500, order_index: 11 },
      { id: 135, course_id: 32, title: "Investment Banks & Capital Raising", slug: "investment-banks-capital-raising", description: "IPOs, underwriting, and advisory", video_url: null, duration_seconds: 2600, order_index: 12 },
      { id: 136, course_id: 32, title: "Central Banks & Monetary Policy", slug: "central-banks-monetary-policy", description: "How central banks influence markets", video_url: null, duration_seconds: 2700, order_index: 13 },
      { id: 137, course_id: 32, title: "Regulation & Financial Stability", slug: "regulation-financial-stability", description: "Regulatory frameworks and oversight", video_url: null, duration_seconds: 2400, order_index: 14 },
      { id: 138, course_id: 32, title: "How Financial Crises Happen", slug: "how-financial-crises-happen", description: "Understanding systemic risk and market failures", video_url: null, duration_seconds: 2800, order_index: 15 },
    ]
  },
  "banking-financial-institutions": {
    id: 33,
    course_id: 33,
    title: "Banking & Financial Institutions",
    slug: "banking-financial-institutions",
    description: "Understanding banking systems",
    thumbnail: null,
    duration_hours: 14,
    lessons: [
      { id: 139, course_id: 33, title: "What Is a Financial Institution?", slug: "what-is-financial-institution", description: "Introduction to financial institutions and their roles", video_url: null, duration_seconds: 2200, order_index: 1 },
      { id: 140, course_id: 33, title: "History of Banking", slug: "history-of-banking", description: "Evolution of banking through the ages", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 141, course_id: 33, title: "Types of Financial Institutions", slug: "types-financial-institutions", description: "Overview of different institution types", video_url: null, duration_seconds: 2300, order_index: 3 },
      { id: 142, course_id: 33, title: "Commercial Banks", slug: "commercial-banks", description: "How commercial banks serve customers", video_url: null, duration_seconds: 2500, order_index: 4 },
      { id: 143, course_id: 33, title: "How Banks Make Money", slug: "how-banks-make-money", description: "Revenue streams and profit models", video_url: null, duration_seconds: 2400, order_index: 5 },
      { id: 144, course_id: 33, title: "Fractional Reserve Banking", slug: "fractional-reserve-banking", description: "The reserve system explained", video_url: null, duration_seconds: 2600, order_index: 6 },
      { id: 145, course_id: 33, title: "Credit Creation & Lending", slug: "credit-creation-lending", description: "How banks create credit", video_url: null, duration_seconds: 2500, order_index: 7 },
      { id: 146, course_id: 33, title: "Interest Rates & the Banking System", slug: "interest-rates-banking-system", description: "How interest rates affect banking", video_url: null, duration_seconds: 2400, order_index: 8 },
      { id: 147, course_id: 33, title: "Investment Banks", slug: "investment-banks", description: "IPOs, M&A, and capital markets", video_url: null, duration_seconds: 2700, order_index: 9 },
      { id: 148, course_id: 33, title: "Central Banks & Monetary Policy", slug: "central-banks-monetary-policy", description: "Role of central banks in the economy", video_url: null, duration_seconds: 2600, order_index: 10 },
      { id: 149, course_id: 33, title: "Regulation of Financial Institutions", slug: "regulation-financial-institutions", description: "Regulatory frameworks and oversight", video_url: null, duration_seconds: 2400, order_index: 11 },
      { id: 150, course_id: 33, title: "Risk in Banking", slug: "risk-in-banking", description: "Types of banking risks and management", video_url: null, duration_seconds: 2500, order_index: 12 },
      { id: 151, course_id: 33, title: "Financial Crises & Bank Failures", slug: "financial-crises-bank-failures", description: "Causes and consequences of bank failures", video_url: null, duration_seconds: 2700, order_index: 13 },
      { id: 152, course_id: 33, title: "Modern Banking & FinTech", slug: "modern-banking-fintech", description: "Digital transformation in banking", video_url: null, duration_seconds: 2400, order_index: 14 },
      { id: 153, course_id: 33, title: "The Future of Banking", slug: "future-of-banking", description: "Trends shaping tomorrow's banks", video_url: null, duration_seconds: 2300, order_index: 15 },
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
      { id: 154, course_id: 34, title: "What Is Real Estate Investing?", slug: "what-is-real-estate-investing", description: "Introduction to real estate as an investment", video_url: null, duration_seconds: 2200, order_index: 1 },
      { id: 155, course_id: 34, title: "Why Invest in Real Estate", slug: "why-invest-real-estate", description: "Benefits and advantages of real estate", video_url: null, duration_seconds: 2300, order_index: 2 },
      { id: 156, course_id: 34, title: "Types of Real Estate Investments", slug: "types-real-estate-investments", description: "Different categories of real estate assets", video_url: null, duration_seconds: 2400, order_index: 3 },
      { id: 157, course_id: 34, title: "How Real Estate Makes Money", slug: "how-real-estate-makes-money", description: "Income generation and wealth building", video_url: null, duration_seconds: 2300, order_index: 4 },
      { id: 158, course_id: 34, title: "Residential Real Estate", slug: "residential-real-estate", description: "Investing in homes and apartments", video_url: null, duration_seconds: 2500, order_index: 5 },
      { id: 159, course_id: 34, title: "Commercial Real Estate", slug: "commercial-real-estate", description: "Office, retail, and industrial properties", video_url: null, duration_seconds: 2600, order_index: 6 },
      { id: 160, course_id: 34, title: "Real Estate Market Cycles", slug: "real-estate-market-cycles", description: "Understanding market phases and timing", video_url: null, duration_seconds: 2400, order_index: 7 },
      { id: 161, course_id: 34, title: "Location, Supply, and Demand", slug: "location-supply-demand", description: "Key factors driving property values", video_url: null, duration_seconds: 2300, order_index: 8 },
      { id: 162, course_id: 34, title: "Cash Flow vs Appreciation", slug: "cash-flow-vs-appreciation", description: "Two ways real estate builds wealth", video_url: null, duration_seconds: 2400, order_index: 9 },
      { id: 163, course_id: 34, title: "Financing Real Estate (Mortgages & Leverage)", slug: "financing-real-estate", description: "Using debt to amplify returns", video_url: null, duration_seconds: 2700, order_index: 10 },
      { id: 164, course_id: 34, title: "Operating Costs & Expenses", slug: "operating-costs-expenses", description: "Managing property expenses", video_url: null, duration_seconds: 2300, order_index: 11 },
      { id: 165, course_id: 34, title: "Risk in Real Estate Investing", slug: "risk-real-estate-investing", description: "Understanding and managing risks", video_url: null, duration_seconds: 2400, order_index: 12 },
      { id: 166, course_id: 34, title: "REITs & Real Estate Funds", slug: "reits-real-estate-funds", description: "Passive real estate investment options", video_url: null, duration_seconds: 2500, order_index: 13 },
      { id: 167, course_id: 34, title: "Common Real Estate Mistakes", slug: "common-real-estate-mistakes", description: "Pitfalls to avoid as an investor", video_url: null, duration_seconds: 2300, order_index: 14 },
      { id: 168, course_id: 34, title: "Building a Real Estate Investment Strategy", slug: "building-real-estate-strategy", description: "Creating your personalized plan", video_url: null, duration_seconds: 2600, order_index: 15 },
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
      { id: 135, course_id: 35, title: "What Is Cryptocurrency & Digital Assets", slug: "what-is-cryptocurrency-digital-assets", description: "Introduction to crypto and digital assets", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 136, course_id: 35, title: "Blockchain Basics", slug: "blockchain-basics", description: "How blockchain technology works", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 137, course_id: 35, title: "Bitcoin & Ethereum", slug: "bitcoin-ethereum", description: "Major cryptocurrencies explained", video_url: null, duration_seconds: 2400, order_index: 3 },
      { id: 138, course_id: 35, title: "Crypto Assets Beyond Coins", slug: "crypto-assets-beyond-coins", description: "Tokens, stablecoins, and other digital assets", video_url: null, duration_seconds: 2100, order_index: 4 },
      { id: 139, course_id: 35, title: "DeFi, NFTs, and Web3 Concepts", slug: "defi-nfts-web3-concepts", description: "Decentralized finance, digital collectibles, and the future web", video_url: null, duration_seconds: 2700, order_index: 5 },
      { id: 140, course_id: 35, title: "Crypto Security & Custody", slug: "crypto-security-custody", description: "Wallets, keys, and safe practices", video_url: null, duration_seconds: 2400, order_index: 6 },
      { id: 141, course_id: 35, title: "Crypto in a Long-Term Investment Strategy", slug: "crypto-long-term-investment-strategy", description: "Incorporating crypto into your portfolio", video_url: null, duration_seconds: 2100, order_index: 7 },
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
