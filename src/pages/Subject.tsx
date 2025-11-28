// Mock course data  
const MOCK_COURSES: Record<string, any> = {
  "mathematics": {
    id: 1,
    name: "Mathematics",
    slug: "mathematics",
    icon: "🔢",
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
    icon: "💻",
    description: "Learn programming and algorithms",
    courses: [
      { id: 3, subject_id: 2, title: "Python Basics", slug: "python-basics", description: "Get started with Python programming", thumbnail: null, duration_hours: 8, order_index: 1 },
      { id: 4, subject_id: 2, title: "Data Structures", slug: "data-structures", description: "Master essential data structures", thumbnail: null, duration_hours: 12, order_index: 2 },
    ]
  },
  "finance-investing": {
    id: 3,
    name: "Finance & Investing",
    slug: "finance-investing",
    icon: "💰",
    description: "Understanding markets and investments",
    courses: [
      { id: 5, subject_id: 3, title: "Stock Market Basics", slug: "stock-market-basics", description: "Learn how the stock market works", thumbnail: null, duration_hours: 6, order_index: 1 },
    ]
  },
  "physics": {
    id: 4,
    name: "Physics",
    slug: "physics",
    icon: "⚛️",
    description: "Explore the laws of nature",
    courses: [
      { id: 6, subject_id: 4, title: "Classical Mechanics", slug: "classical-mechanics", description: "Understanding motion and forces", thumbnail: null, duration_hours: 14, order_index: 1 },
    ]
  },
};

import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';

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
            <span className="text-4xl">{subject.icon || '📚'}</span>
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
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration_hours} hours</span>
                    </div>
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
