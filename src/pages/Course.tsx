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
      { id: 1, course_id: 1, title: "Variables and Expressions", slug: "variables-expressions", description: "Learn about variables and expressions", video_url: null, duration_seconds: 1800, order_index: 1 },
      { id: 2, course_id: 1, title: "Solving Linear Equations", slug: "solving-linear-equations", description: "Master solving linear equations", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 3, course_id: 1, title: "Inequalities", slug: "inequalities", description: "Understanding inequalities", video_url: null, duration_seconds: 2000, order_index: 3 },
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
      { id: 4, course_id: 2, title: "Points, Lines, and Planes", slug: "points-lines-planes", description: "Fundamental geometric concepts", video_url: null, duration_seconds: 2100, order_index: 1 },
      { id: 5, course_id: 2, title: "Angles and Triangles", slug: "angles-triangles", description: "Properties of angles and triangles", video_url: null, duration_seconds: 2400, order_index: 2 },
      { id: 6, course_id: 2, title: "Circles", slug: "circles", description: "Circle properties and theorems", video_url: null, duration_seconds: 2200, order_index: 3 },
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
      { id: 16, course_id: 6, title: "Limits", slug: "limits", description: "Understanding limits", video_url: null, duration_seconds: 3000, order_index: 1 },
      { id: 17, course_id: 6, title: "Derivatives", slug: "derivatives", description: "Introduction to derivatives", video_url: null, duration_seconds: 3300, order_index: 2 },
      { id: 18, course_id: 6, title: "Integrals", slug: "integrals", description: "Introduction to integrals", video_url: null, duration_seconds: 3600, order_index: 3 },
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
      { id: 19, course_id: 7, title: "Integration Techniques", slug: "integration-techniques", description: "Advanced integration methods", video_url: null, duration_seconds: 3000, order_index: 1 },
      { id: 20, course_id: 7, title: "Infinite Series", slug: "infinite-series", description: "Convergence and divergence", video_url: null, duration_seconds: 3300, order_index: 2 },
      { id: 21, course_id: 7, title: "Taylor Series", slug: "taylor-series", description: "Taylor and Maclaurin series", video_url: null, duration_seconds: 3000, order_index: 3 },
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
      { id: 22, course_id: 8, title: "Partial Derivatives", slug: "partial-derivatives", description: "Derivatives of multivariable functions", video_url: null, duration_seconds: 3000, order_index: 1 },
      { id: 23, course_id: 8, title: "Multiple Integrals", slug: "multiple-integrals", description: "Double and triple integrals", video_url: null, duration_seconds: 3600, order_index: 2 },
      { id: 24, course_id: 8, title: "Vector Calculus", slug: "vector-calculus", description: "Line and surface integrals", video_url: null, duration_seconds: 3300, order_index: 3 },
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
  "python-basics": {
    id: 10,
    course_id: 10,
    title: "Python Basics",
    slug: "python-basics",
    description: "Get started with Python",
    thumbnail: null,
    duration_hours: 8,
    lessons: [
      { id: 28, course_id: 10, title: "Python Syntax", slug: "python-syntax", description: "Learn Python syntax", video_url: null, duration_seconds: 2000, order_index: 1 },
    ]
  },
};

import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, Play, CheckCircle, Clock } from 'lucide-react';

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
                    <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{formatDuration(lesson.duration_seconds)}</span>
                      </div>
                      {progress[lesson.id] && (
                        <div className="flex items-center gap-1 text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span>Completed</span>
                        </div>
                      )}
                    </div>
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
