import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';
import mathMascot from '@/assets/math-mascot.png';
import csMascot from '@/assets/cs-mascot.png';
import physicsMascot from '@/assets/physics-mascot.png';
import financeMascot from '@/assets/finance-mascot.png';

// Mock course data  
const MOCK_COURSES: Record<string, any> = {
  "mathematics": {
    id: 1,
    name: "Mathematics",
    slug: "mathematics",
    icon: "math-mascot",
    description: "Master fundamental to advanced math concepts",
    courses: [
      { id: 1, subject_id: 1, title: "Algebra 1", slug: "algebra-1", description: "Foundation of algebraic concepts", thumbnail: null, duration_hours: 10, order_index: 1 },
      { id: 2, subject_id: 1, title: "Geometry", slug: "geometry", description: "Shapes, angles, and spatial reasoning", thumbnail: null, duration_hours: 12, order_index: 2 },
      { id: 3, subject_id: 1, title: "Algebra 2", slug: "algebra-2", description: "Advanced algebraic techniques", thumbnail: null, duration_hours: 12, order_index: 3 },
      { id: 4, subject_id: 1, title: "Trigonometry", slug: "trigonometry", description: "Study of triangles and trigonometric functions", thumbnail: null, duration_hours: 10, order_index: 4 },
      { id: 5, subject_id: 1, title: "Precalculus", slug: "precalculus", description: "Preparation for calculus concepts", thumbnail: null, duration_hours: 14, order_index: 5 },
      { id: 6, subject_id: 1, title: "Calculus I", slug: "calculus-1", description: "Introduction to limits, derivatives, and integrals", thumbnail: null, duration_hours: 15, order_index: 6 },
      { id: 7, subject_id: 1, title: "Calculus II", slug: "calculus-2", description: "Advanced integration and series", thumbnail: null, duration_hours: 15, order_index: 7 },
      { id: 8, subject_id: 1, title: "Multivariable Calculus", slug: "multivariable-calculus", description: "Calculus in multiple dimensions", thumbnail: null, duration_hours: 16, order_index: 8 },
      { id: 9, subject_id: 1, title: "Linear Algebra", slug: "linear-algebra", description: "Vectors, matrices, and linear transformations", thumbnail: null, duration_hours: 14, order_index: 9 },
    ]
  },
  "computer-science": {
    id: 2,
    name: "Computer Science",
    slug: "computer-science",
    icon: "cs-mascot",
    description: "Learn programming and algorithms",
    courses: [
      { id: 10, subject_id: 2, title: "Intro to Computer Science", slug: "intro-to-computer-science", description: "Foundations of computing", thumbnail: null, duration_hours: 8, order_index: 1 },
      { id: 11, subject_id: 2, title: "Intro to Programming", slug: "intro-to-programming", description: "Learn programming fundamentals", thumbnail: null, duration_hours: 10, order_index: 2 },
      { id: 12, subject_id: 2, title: "Python", slug: "python", description: "Master Python programming", thumbnail: null, duration_hours: 12, order_index: 3 },
      { id: 13, subject_id: 2, title: "JavaScript", slug: "javascript", description: "Web development with JavaScript", thumbnail: null, duration_hours: 12, order_index: 4 },
      { id: 14, subject_id: 2, title: "Object-Oriented Programming (OOP)", slug: "object-oriented-programming", description: "Design patterns and OOP principles", thumbnail: null, duration_hours: 10, order_index: 5 },
      { id: 15, subject_id: 2, title: "Data Structures", slug: "data-structures", description: "Essential data structures", thumbnail: null, duration_hours: 14, order_index: 6 },
      { id: 16, subject_id: 2, title: "Algorithms", slug: "algorithms", description: "Algorithm design and analysis", thumbnail: null, duration_hours: 14, order_index: 7 },
      { id: 17, subject_id: 2, title: "Computer Systems & Architecture", slug: "computer-systems-architecture", description: "How computers work", thumbnail: null, duration_hours: 12, order_index: 8 },
      { id: 18, subject_id: 2, title: "Operating Systems", slug: "operating-systems", description: "OS concepts and design", thumbnail: null, duration_hours: 14, order_index: 9 },
      { id: 19, subject_id: 2, title: "Databases", slug: "databases", description: "Database design and SQL", thumbnail: null, duration_hours: 12, order_index: 10 },
      { id: 20, subject_id: 2, title: "Computer Networks", slug: "computer-networks", description: "Networking fundamentals", thumbnail: null, duration_hours: 12, order_index: 11 },
      { id: 21, subject_id: 2, title: "Software Engineering", slug: "software-engineering", description: "Building quality software", thumbnail: null, duration_hours: 14, order_index: 12 },
      { id: 22, subject_id: 2, title: "Programming Languages & Compilers", slug: "programming-languages-compilers", description: "Language design and compilation", thumbnail: null, duration_hours: 14, order_index: 13 },
      { id: 23, subject_id: 2, title: "Theory of Computation", slug: "theory-of-computation", description: "Computational theory fundamentals", thumbnail: null, duration_hours: 12, order_index: 14 },
    ]
  },
  "finance-investing": {
    id: 3,
    name: "Finance & Investing",
    slug: "finance-investing",
    icon: "finance-mascot",
    description: "Understanding markets and investments",
    courses: [
      { id: 24, subject_id: 3, title: "Personal Finance", slug: "personal-finance", description: "Manage your money effectively", thumbnail: null, duration_hours: 6, order_index: 1 },
      { id: 25, subject_id: 3, title: "Financial Literacy & Budgeting", slug: "financial-literacy-budgeting", description: "Build strong financial foundations", thumbnail: null, duration_hours: 6, order_index: 2 },
      { id: 26, subject_id: 3, title: "Behavioral Finance", slug: "behavioral-finance", description: "Psychology of financial decisions", thumbnail: null, duration_hours: 8, order_index: 3 },
      { id: 27, subject_id: 3, title: "Stock Market Basics", slug: "stock-market-basics", description: "Learn how the stock market works", thumbnail: null, duration_hours: 6, order_index: 4 },
      { id: 28, subject_id: 3, title: "Investing Foundations", slug: "investing-foundations", description: "Core investing principles", thumbnail: null, duration_hours: 8, order_index: 5 },
      { id: 29, subject_id: 3, title: "ETFs & Index Funds", slug: "etfs-index-funds", description: "Passive investing strategies", thumbnail: null, duration_hours: 6, order_index: 6 },
      { id: 30, subject_id: 3, title: "Bonds & Fixed Income", slug: "bonds-fixed-income", description: "Understanding fixed income securities", thumbnail: null, duration_hours: 8, order_index: 7 },
      { id: 31, subject_id: 3, title: "Portfolio Building & Risk Management", slug: "portfolio-building-risk-management", description: "Build and manage investment portfolios", thumbnail: null, duration_hours: 10, order_index: 8 },
      { id: 32, subject_id: 3, title: "Financial Markets & Institutions", slug: "financial-markets-institutions", description: "How financial markets operate", thumbnail: null, duration_hours: 10, order_index: 9 },
      { id: 33, subject_id: 3, title: "Banking & Financial Institutions", slug: "banking-financial-institutions", description: "Understanding the banking system", thumbnail: null, duration_hours: 8, order_index: 10 },
      { id: 34, subject_id: 3, title: "Real Estate Investing", slug: "real-estate-investing", description: "Investing in property and REITs", thumbnail: null, duration_hours: 8, order_index: 11 },
      { id: 35, subject_id: 3, title: "Crypto & Digital Assets", slug: "crypto-digital-assets", description: "Cryptocurrency and blockchain investing", thumbnail: null, duration_hours: 8, order_index: 12 },
    ]
  },
  "physics": {
    id: 4,
    name: "Physics",
    slug: "physics",
    icon: "physics-mascot",
    description: "Explore the laws of nature",
    courses: [
      { id: 36, subject_id: 4, title: "Classical Mechanics", slug: "classical-mechanics", description: "Understanding motion and forces", thumbnail: null, duration_hours: 14, order_index: 1 },
      { id: 37, subject_id: 4, title: "Electricity & Magnetism", slug: "electricity-magnetism", description: "Electric and magnetic phenomena", thumbnail: null, duration_hours: 14, order_index: 2 },
      { id: 38, subject_id: 4, title: "Waves & Oscillations", slug: "waves-oscillations", description: "Study of wave behavior and motion", thumbnail: null, duration_hours: 10, order_index: 3 },
      { id: 39, subject_id: 4, title: "Thermodynamics", slug: "thermodynamics", description: "Heat, energy, and entropy", thumbnail: null, duration_hours: 12, order_index: 4 },
      { id: 40, subject_id: 4, title: "Optics", slug: "optics", description: "Light and optical phenomena", thumbnail: null, duration_hours: 10, order_index: 5 },
      { id: 41, subject_id: 4, title: "Modern Physics", slug: "modern-physics", description: "Relativity and atomic physics", thumbnail: null, duration_hours: 12, order_index: 6 },
      { id: 42, subject_id: 4, title: "Quantum Mechanics", slug: "quantum-mechanics", description: "Quantum theory fundamentals", thumbnail: null, duration_hours: 14, order_index: 7 },
    ]
  },
};

interface Course {
  id: number;
  subject_id: number;
  title: string;
  slug: string;
  description: string | null;
  thumbnail: string | null;
  duration_hours: number;
  order_index: number;
}

interface Subject {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  courses: Course[];
}

export function SubjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [subject, setSubject] = useState<Subject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - in real app would fetch from /api/subjects/${slug}
    setTimeout(() => {
      const data = MOCK_COURSES[slug || ''];
      if (data) {
        setSubject(data);
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

  if (!subject) {
    return (
      <div className="min-h-screen bg-white p-4">
        <div className="container mx-auto">
          <div className="text-center text-gray-500">Subject not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
       {/* Header */}
       <header className="border-b border-gray-200 bg-white">
         <div className="container mx-auto px-4 py-6">
            <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          <div className="flex items-center gap-4">
            {subject.icon === 'math-mascot' ? (
              <img src={mathMascot} alt="Mathematics" className="h-12 w-12" />
            ) : subject.icon === 'cs-mascot' ? (
              <img src={csMascot} alt="Computer Science" className="h-12 w-12" />
            ) : subject.icon === 'physics-mascot' ? (
              <img src={physicsMascot} alt="Physics" className="h-12 w-12" />
            ) : subject.icon === 'finance-mascot' ? (
              <img src={financeMascot} alt="Finance & Investing" className="h-12 w-12" />
            ) : (
              <span className="text-4xl">{subject.icon || '📚'}</span>
            )}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{subject.name}</h1>
              {subject.description && (
                <p className="mt-1 text-gray-600">{subject.description}</p>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Courses */}
      <main className="container mx-auto px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Courses</h2>
        
        {subject.courses.length === 0 ? (
          <div className="text-center text-gray-500">No courses available yet</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subject.courses.map((course) => (
              <Link
                key={course.id}
                to={`/course/${course.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                  {course.thumbnail && (
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200" />
                  )}
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                      {course.title}
                    </h3>
                    {course.description && (
                      <p className="mb-4 text-sm text-gray-600">{course.description}</p>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
