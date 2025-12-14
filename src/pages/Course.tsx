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
      { id: 7, course_id: 3, title: "Polynomials", slug: "polynomials", description: "Working with polynomials", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 8, course_id: 3, title: "Quadratic Functions", slug: "quadratic-functions", description: "Understanding quadratic functions", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 9, course_id: 3, title: "Exponential and Logarithmic Functions", slug: "exponential-logarithmic", description: "Exponential and log functions", video_url: null, duration_seconds: 3000, order_index: 3 },
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
      { id: 10, course_id: 4, title: "Trigonometric Ratios", slug: "trig-ratios", description: "Sine, cosine, and tangent", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 11, course_id: 4, title: "Unit Circle", slug: "unit-circle", description: "Understanding the unit circle", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 12, course_id: 4, title: "Trigonometric Identities", slug: "trig-identities", description: "Key trigonometric identities", video_url: null, duration_seconds: 2400, order_index: 3 },
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
      { id: 13, course_id: 5, title: "Functions and Graphs", slug: "functions-graphs", description: "Understanding functions and their graphs", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 14, course_id: 5, title: "Sequences and Series", slug: "sequences-series", description: "Arithmetic and geometric sequences", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 15, course_id: 5, title: "Introduction to Limits", slug: "intro-limits", description: "Preparing for calculus limits", video_url: null, duration_seconds: 3000, order_index: 3 },
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
      { id: 25, course_id: 9, title: "Vectors and Matrices", slug: "vectors-matrices", description: "Introduction to vectors and matrices", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 26, course_id: 9, title: "Systems of Linear Equations", slug: "linear-systems", description: "Solving systems of equations", video_url: null, duration_seconds: 3000, order_index: 2 },
      { id: 27, course_id: 9, title: "Eigenvalues and Eigenvectors", slug: "eigenvalues", description: "Understanding eigenvalues", video_url: null, duration_seconds: 3300, order_index: 3 },
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
      { id: 51, course_id: 10, title: "Binary and Data Representation", slug: "binary-data", description: "How computers store information", video_url: null, duration_seconds: 2100, order_index: 2 },
      { id: 52, course_id: 10, title: "Introduction to Algorithms", slug: "intro-algorithms", description: "Basic algorithmic thinking", video_url: null, duration_seconds: 2400, order_index: 3 },
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
      { id: 53, course_id: 11, title: "Variables and Data Types", slug: "variables-data-types", description: "Storing and manipulating data", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 54, course_id: 11, title: "Control Flow", slug: "control-flow", description: "If statements and loops", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 55, course_id: 11, title: "Functions", slug: "functions", description: "Writing reusable code", video_url: null, duration_seconds: 2700, order_index: 3 },
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
      { id: 56, course_id: 12, title: "Python Syntax", slug: "python-syntax", description: "Learn Python syntax", video_url: null, duration_seconds: 2000, order_index: 1 },
      { id: 57, course_id: 12, title: "Lists and Dictionaries", slug: "lists-dictionaries", description: "Python data structures", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 58, course_id: 12, title: "File Handling", slug: "file-handling", description: "Reading and writing files", video_url: null, duration_seconds: 2100, order_index: 3 },
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
      { id: 29, course_id: 11, title: "Kinematics", slug: "kinematics", description: "Motion in one and two dimensions", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 30, course_id: 11, title: "Newton's Laws", slug: "newtons-laws", description: "Forces and motion", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 31, course_id: 11, title: "Work, Energy, and Power", slug: "work-energy-power", description: "Energy conservation and work", video_url: null, duration_seconds: 2400, order_index: 3 },
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
      { id: 32, course_id: 12, title: "Electric Charges and Fields", slug: "electric-charges-fields", description: "Coulomb's law and electric fields", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 33, course_id: 12, title: "Electric Circuits", slug: "electric-circuits", description: "Current, resistance, and Ohm's law", video_url: null, duration_seconds: 3000, order_index: 2 },
      { id: 34, course_id: 12, title: "Magnetism", slug: "magnetism", description: "Magnetic fields and forces", video_url: null, duration_seconds: 2700, order_index: 3 },
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
      { id: 35, course_id: 13, title: "Simple Harmonic Motion", slug: "simple-harmonic-motion", description: "Oscillatory motion fundamentals", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 36, course_id: 13, title: "Wave Properties", slug: "wave-properties", description: "Wavelength, frequency, and amplitude", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 37, course_id: 13, title: "Sound Waves", slug: "sound-waves", description: "Properties of sound", video_url: null, duration_seconds: 2100, order_index: 3 },
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
      { id: 38, course_id: 14, title: "Temperature and Heat", slug: "temperature-heat", description: "Thermal energy fundamentals", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 39, course_id: 14, title: "Laws of Thermodynamics", slug: "laws-thermodynamics", description: "First and second laws", video_url: null, duration_seconds: 3000, order_index: 2 },
      { id: 40, course_id: 14, title: "Heat Engines and Entropy", slug: "heat-engines-entropy", description: "Efficiency and disorder", video_url: null, duration_seconds: 2700, order_index: 3 },
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
      { id: 41, course_id: 15, title: "Reflection and Refraction", slug: "reflection-refraction", description: "Light behavior at boundaries", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 42, course_id: 15, title: "Lenses and Mirrors", slug: "lenses-mirrors", description: "Image formation", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 43, course_id: 15, title: "Wave Optics", slug: "wave-optics", description: "Interference and diffraction", video_url: null, duration_seconds: 2400, order_index: 3 },
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
      { id: 44, course_id: 16, title: "Special Relativity", slug: "special-relativity", description: "Time dilation and length contraction", video_url: null, duration_seconds: 3000, order_index: 1 },
      { id: 45, course_id: 16, title: "Photoelectric Effect", slug: "photoelectric-effect", description: "Light as particles", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 46, course_id: 16, title: "Atomic Structure", slug: "atomic-structure", description: "Bohr model and beyond", video_url: null, duration_seconds: 2700, order_index: 3 },
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
      { id: 47, course_id: 17, title: "Wave-Particle Duality", slug: "wave-particle-duality", description: "The dual nature of matter", video_url: null, duration_seconds: 2700, order_index: 1 },
      { id: 48, course_id: 17, title: "Schrödinger Equation", slug: "schrodinger-equation", description: "The fundamental equation", video_url: null, duration_seconds: 3300, order_index: 2 },
      { id: 49, course_id: 17, title: "Quantum States and Operators", slug: "quantum-states-operators", description: "Mathematical framework", video_url: null, duration_seconds: 3000, order_index: 3 },
    ]
  },
  "personal-finance": {
    id: 24,
    course_id: 24,
    title: "Personal Finance",
    slug: "personal-finance",
    description: "Manage your money effectively",
    thumbnail: null,
    duration_hours: 8,
    lessons: [
      { id: 100, course_id: 24, title: "Income and Expenses", slug: "income-expenses", description: "Understanding cash flow", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 101, course_id: 24, title: "Savings Strategies", slug: "savings-strategies", description: "Building an emergency fund", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 102, course_id: 24, title: "Managing Debt", slug: "managing-debt", description: "Debt reduction strategies", video_url: null, duration_seconds: 2100, order_index: 3 },
    ]
  },
  "financial-literacy-budgeting": {
    id: 25,
    course_id: 25,
    title: "Financial Literacy & Budgeting",
    slug: "financial-literacy-budgeting",
    description: "Build strong financial foundations",
    thumbnail: null,
    duration_hours: 8,
    lessons: [
      { id: 103, course_id: 25, title: "Creating a Budget", slug: "creating-budget", description: "Budgeting basics", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 104, course_id: 25, title: "Tracking Spending", slug: "tracking-spending", description: "Monitor your expenses", video_url: null, duration_seconds: 1800, order_index: 2 },
      { id: 105, course_id: 25, title: "Financial Goals", slug: "financial-goals", description: "Setting and achieving goals", video_url: null, duration_seconds: 2400, order_index: 3 },
    ]
  },
  "behavioral-finance": {
    id: 26,
    course_id: 26,
    title: "Behavioral Finance",
    slug: "behavioral-finance",
    description: "Psychology of financial decisions",
    thumbnail: null,
    duration_hours: 10,
    lessons: [
      { id: 106, course_id: 26, title: "Cognitive Biases", slug: "cognitive-biases", description: "Common thinking errors", video_url: null, duration_seconds: 2400, order_index: 1 },
      { id: 107, course_id: 26, title: "Emotional Investing", slug: "emotional-investing", description: "Fear and greed in markets", video_url: null, duration_seconds: 2700, order_index: 2 },
      { id: 108, course_id: 26, title: "Rational Decision Making", slug: "rational-decision-making", description: "Overcoming biases", video_url: null, duration_seconds: 2400, order_index: 3 },
    ]
  },
  "stock-market-basics": {
    id: 27,
    course_id: 27,
    title: "Stock Market Basics",
    slug: "stock-market-basics",
    description: "Learn how the stock market works",
    thumbnail: null,
    duration_hours: 10,
    lessons: [
      { id: 109, course_id: 27, title: "What Are Stocks?", slug: "what-are-stocks", description: "Understanding equity ownership", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 110, course_id: 27, title: "How Markets Work", slug: "how-markets-work", description: "Exchanges and trading", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 111, course_id: 27, title: "Reading Stock Quotes", slug: "reading-stock-quotes", description: "Price, volume, and metrics", video_url: null, duration_seconds: 2100, order_index: 3 },
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
