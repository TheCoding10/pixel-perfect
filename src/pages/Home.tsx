// Mock data for subjects
const MOCK_SUBJECTS = [
  { id: 1, name: "Mathematics", slug: "mathematics", description: "Master fundamental to advanced math concepts", icon: "🔢" },
  { id: 2, name: "Computer Science", slug: "computer-science", description: "Learn programming and algorithms", icon: "💻" },
  { id: 3, name: "Finance & Investing", slug: "finance-investing", description: "Understanding markets and investments", icon: "💰" },
  { id: 4, name: "Physics", slug: "physics", description: "Explore the laws of nature", icon: "⚛️" },
];

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Zap, BarChart3, BookOpen } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Header } from '../components/Header';

interface Subject {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
}

export function Home() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    // Mock data - in real app would fetch from /api/subjects
    setTimeout(() => {
      setSubjects(MOCK_SUBJECTS);
      setLoading(false);
    }, 300);
  }, []);

  // Redirect authenticated users to dashboard
  if (isAuthenticated && user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header username={user.username} email={user.email} />
        
        {/* Subjects Grid for authenticated users */}
        <main className="container mx-auto px-4 py-12">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Choose a subject</h2>
          
          {loading ? (
            <div className="text-center text-gray-500">Loading subjects...</div>
          ) : subjects.length === 0 ? (
            <div className="text-center text-gray-500">No subjects available yet</div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {subjects.map((subject) => (
                <Link
                  key={subject.id}
                  to={`/subject/${subject.slug}`}
                  className="group"
                >
                  <Card className="h-full p-6 transition-all hover:shadow-lg hover:border-blue-300">
                    <div className="mb-4 text-4xl">{subject.icon || '📚'}</div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                      {subject.name}
                    </h3>
                    {subject.description && (
                      <p className="text-sm text-gray-600">{subject.description}</p>
                    )}
                    <div className="mt-4">
                      <Button
                        variant="ghost"
                        className="w-full hover:bg-blue-50"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Explore →
                      </Button>
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-yellow-100 rounded-full opacity-40 blur-2xl"></div>
      
      {/* Star shapes */}
      <div className="absolute top-1/4 right-1/4 text-yellow-300 text-3xl opacity-60">✦</div>
      <div className="absolute top-1/3 left-1/3 text-purple-300 text-2xl opacity-50">✦</div>
      <div className="absolute bottom-1/3 right-1/5 text-pink-300 text-4xl opacity-40">✦</div>
      
      {/* Header - kept exactly as is */}
      <header className="border-b border-white/50 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src="/assets/memolearning-logo.png" alt="MemoLearning" className="h-8 w-8" />
              <h1 className="text-3xl font-bold text-gray-900">MemoLearning</h1>
            </Link>
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="outline" className="border-gray-300">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Updated to match Figma */}
      <div className="relative z-10 flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Mascot and Branding */}
          <div className="flex flex-col items-center lg:items-start justify-center space-y-8">
            <img
              src="/assets/mascot-logo.png"
              alt="MemoLearning Mascot"
              className="w-64 h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
            />
            <div className="text-center lg:text-left">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4">
                Memo<br />Learning
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-700 font-medium">
                Learn Smarter. Achieve More.
              </p>
            </div>
          </div>

          {/* Right Side - Login Card (using AuthGateway component styling) */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 backdrop-blur-sm">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Welcome back
              </h2>

              {/* Social Login Buttons */}
              <div className="space-y-3 mb-8">
                <Link to="/login">
                  <button className="w-full border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
                    <img
                      src="https://www.gstatic.com/firebaseapp/v8.10.1/images/firebaseui/idp_logos/google.png"
                      alt="Google"
                      className="w-5 h-5"
                    />
                    <span className="text-gray-900 font-medium">
                      Continue with Google
                    </span>
                  </button>
                </Link>
                <Link to="/login">
                  <button className="w-full border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.05 13.5c-.91 0-1.74.46-2.25 1.13.97 1.5 1.54 3.28 1.54 5.12 0 .24-.02.48-.04.72 1.1-.7 1.8-1.9 1.8-3.25 0-2.2-1.8-4-4-4zm-12-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm12 0c-.3 0-.58.08-.85.17 1.92 1.13 3.85 3.12 3.85 6.33v2h7v-2c0-2.2-1.8-4-4-4z" />
                    </svg>
                    <span className="text-gray-900 font-medium">
                      Continue with Apple
                    </span>
                  </button>
                </Link>
              </div>

              {/* Divider */}
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-600">Or</span>
                </div>
              </div>

              {/* Quick Login Buttons */}
              <div className="space-y-3">
                <Link to="/login" className="block">
                  <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl font-semibold text-lg">
                    Log in
                  </Button>
                </Link>
                <Link to="/signup" className="block">
                  <Button variant="outline" className="w-full py-3 rounded-xl font-semibold text-lg border-gray-300">
                    Sign up
                  </Button>
                </Link>
              </div>

              {/* Footer */}
              <div className="mt-8 text-center text-sm text-gray-600">
                By continuing, you agree to our{" "}
                <a href="#" className="text-teal-600 hover:text-teal-700 font-medium">
                  Terms of Service
                </a>{" "}
                ·{" "}
                <a href="#" className="text-teal-600 hover:text-teal-700 font-medium">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
