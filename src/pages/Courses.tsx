import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { AuthNavbar } from "../components/AuthNavbar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";
import {
  Calculator,
  Atom,
  Code,
  TrendingUp,
  ChevronDown,
  BookOpen,
} from "lucide-react";

interface Course {
  name: string;
  slug: string;
}

interface Subject {
  name: string;
  icon: React.ReactNode;
  color: string;
  courses: Course[];
}

const subjects: Subject[] = [
  {
    name: "Mathematics",
    icon: <Calculator className="w-6 h-6" />,
    color: "bg-blue-500",
    courses: [
      { name: "Algebra 1", slug: "algebra-1" },
      { name: "Geometry", slug: "geometry" },
      { name: "Algebra 2", slug: "algebra-2" },
      { name: "Trigonometry", slug: "trigonometry" },
      { name: "Precalculus", slug: "precalculus" },
      { name: "Calculus I", slug: "calculus-1" },
      { name: "Calculus II", slug: "calculus-2" },
      { name: "Multivariable Calculus", slug: "multivariable-calculus" },
      { name: "Linear Algebra", slug: "linear-algebra" },
    ],
  },
  {
    name: "Physics",
    icon: <Atom className="w-6 h-6" />,
    color: "bg-purple-500",
    courses: [
      { name: "Mechanics", slug: "mechanics" },
      { name: "Electromagnetism", slug: "electromagnetism" },
      { name: "Waves", slug: "waves" },
      { name: "Thermodynamics", slug: "thermodynamics" },
    ],
  },
  {
    name: "Computer Science",
    icon: <Code className="w-6 h-6" />,
    color: "bg-teal-500",
    courses: [
      { name: "Python", slug: "python" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Data Structures", slug: "data-structures" },
      { name: "Algorithms", slug: "algorithms" },
    ],
  },
  {
    name: "Finance & Investing",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "bg-emerald-500",
    courses: [
      { name: "Stock Market Basics", slug: "stock-market-basics" },
      { name: "Options", slug: "options" },
      { name: "Crypto", slug: "crypto" },
      { name: "Personal Finance", slug: "personal-finance" },
    ],
  },
];

export function CoursesPage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [openSubjects, setOpenSubjects] = useState<string[]>([]);

  const toggleSubject = (subjectName: string) => {
    setOpenSubjects((prev) =>
      prev.includes(subjectName)
        ? prev.filter((s) => s !== subjectName)
        : [...prev, subjectName]
    );
  };

  const handleCourseClick = (courseSlug: string) => {
    if (isAuthenticated) {
      navigate(`/course/${courseSlug}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AuthNavbar />
      <div
        className="flex-1 bg-cover bg-center relative"
        style={{
          backgroundImage: "url(/assets/auth-background.png)",
        }}
      >
        <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/assets/mascot-logo.png"
                alt="MemoLearning Mascot"
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Explore Courses
                </h1>
                <p className="text-gray-700 mt-1">
                  Learn smarter with MemoLearning
                </p>
              </div>
            </div>
            {!isAuthenticated && (
              <Link
                to="/"
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                Sign in to Start Learning
              </Link>
            )}
          </div>

          {/* Subjects Grid */}
          <div className="space-y-4">
            {subjects.map((subject) => (
              <Collapsible
                key={subject.name}
                open={openSubjects.includes(subject.name)}
                onOpenChange={() => toggleSubject(subject.name)}
              >
                <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div
                          className={`${subject.color} p-3 rounded-xl text-white`}
                        >
                          {subject.icon}
                        </div>
                        <div className="text-left">
                          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                            {subject.name}
                          </h2>
                          <p className="text-sm text-gray-500">
                            {subject.courses.length} courses
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                          openSubjects.includes(subject.name)
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {subject.courses.map((course) => (
                          <button
                            key={course.slug}
                            onClick={() => handleCourseClick(course.slug)}
                            className="group flex items-center gap-3 p-4 bg-gray-50 hover:bg-teal-50 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md text-left"
                          >
                            <BookOpen className="w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors" />
                            <span className="font-medium text-gray-700 group-hover:text-teal-700 transition-colors">
                              {course.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>

          {/* Bottom CTA for non-authenticated users */}
          {!isAuthenticated && (
            <div className="mt-12 text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-lg mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Ready to start learning?
                </h3>
                <p className="text-gray-600 mb-6">
                  Create a free account to access all courses and track your
                  progress.
                </p>
                <Link
                  to="/"
                  className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-md hover:shadow-lg"
                >
                  Get Started Free
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
