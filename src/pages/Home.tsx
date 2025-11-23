// Mock data for subjects
const MOCK_SUBJECTS = [
  { id: 1, name: "Mathematics", slug: "mathematics", description: "Master fundamental to advanced math concepts", icon: "🔢" },
  { id: 2, name: "Computer Science", slug: "computer-science", description: "Learn programming and algorithms", icon: "💻" },
  { id: 3, name: "Finance & Investing", slug: "finance-investing", description: "Understanding markets and investments", icon: "💰" },
  { id: 4, name: "Physics", slug: "physics", description: "Explore the laws of nature", icon: "⚛️" },
];

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { Zap, BarChart3, BookOpen, Mail, Lock, Eye, EyeOff } from 'lucide-react';
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
  const { isAuthenticated, user, login } = useAuth();
  const navigate = useNavigate();
  
  // Login form state
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    // Mock data - in real app would fetch from /api/subjects
    setTimeout(() => {
      setSubjects(MOCK_SUBJECTS);
      setLoading(false);
    }, 300);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setFormLoading(true);

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch {
      setError("Invalid email or password");
    } finally {
      setFormLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to signup page
    navigate("/signup");
  };

  // Always show the landing page design on home route
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-300 relative overflow-hidden">
      {/* Floating decorative elements - circles and rounded squares */}
      <div className="absolute top-12 left-8 w-24 h-24 bg-cyan-300/40 rounded-3xl"></div>
      <div className="absolute top-8 left-32 w-16 h-16 bg-white/20 rounded-full"></div>
      <div className="absolute top-32 left-12 w-20 h-20 bg-white/30 rounded-full"></div>
      <div className="absolute top-20 left-4 w-12 h-12 bg-cyan-200/30 rounded-xl"></div>
      
      <div className="absolute top-4 right-96 w-8 h-8 bg-white/30 rounded-lg"></div>
      <div className="absolute top-32 right-64 w-16 h-16 bg-white/20 rounded-full"></div>
      
      <div className="absolute bottom-32 left-32 w-32 h-32 bg-white/25 rounded-full"></div>
      <div className="absolute bottom-20 left-12 w-20 h-20 bg-cyan-200/30 rounded-2xl"></div>
      <div className="absolute bottom-48 left-48 w-12 h-12 bg-white/20 rounded-full"></div>
      
      <div className="absolute top-48 right-12 w-28 h-28 bg-white/20 rounded-full"></div>
      <div className="absolute top-72 right-32 w-24 h-24 bg-cyan-200/25 rounded-3xl"></div>
      <div className="absolute bottom-32 right-24 w-20 h-20 bg-yellow-200/30 rounded-full"></div>
      <div className="absolute bottom-64 right-48 w-16 h-16 bg-white/25 rounded-2xl"></div>
      
      {/* Star shapes */}
      <div className="absolute top-2 right-1/3 text-white text-4xl opacity-80">✦</div>
      <div className="absolute top-16 left-48 text-white text-3xl opacity-70">✦</div>
      <div className="absolute bottom-48 left-64 text-white text-2xl opacity-60">✦</div>
      
      {/* Header - kept exactly as is */}
      <header className="border-b border-white/30 bg-white/20 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src="/assets/memolearning-logo.png" alt="MemoLearning" className="h-8 w-8" />
              <h1 className="text-3xl font-bold text-gray-900">MemoLearning</h1>
            </Link>
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="outline" className="border-gray-300 bg-white/50">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Updated to match reference exactly */}
      <div className="relative z-10 flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Mascot and Branding */}
          <div className="flex flex-col items-center lg:items-start justify-center space-y-6">
            <img
              src="/assets/mascot-logo.png"
              alt="MemoLearning Mascot"
              className="w-72 h-72 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
            />
            <div className="text-center lg:text-left">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-2">
                Memo<br />Learning
              </h1>
              <p className="text-xl lg:text-2xl text-gray-800 font-medium">
                Learn Smarter. Achieve More.
              </p>
            </div>
          </div>

          {/* Right Side - Auth Card with Tabs */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-[#FFFBF5] rounded-3xl shadow-2xl p-8 md:p-10">
              {/* Tabs */}
              <div className="flex gap-8 mb-8 border-b border-gray-200">
                <button
                  onClick={() => {
                    setActiveTab("login");
                    setError("");
                  }}
                  className={`pb-3 font-medium text-lg transition-colors relative ${
                    activeTab === "login"
                      ? "text-teal-600 font-semibold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Log in
                  {activeTab === "login" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600"></div>
                  )}
                </button>
                <button
                  onClick={() => {
                    setActiveTab("signup");
                    setError("");
                  }}
                  className={`pb-3 font-medium text-lg transition-colors relative ${
                    activeTab === "signup"
                      ? "text-teal-600 font-semibold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Sign up
                  {activeTab === "signup" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600"></div>
                  )}
                </button>
              </div>

              {/* Content */}
              {activeTab === "login" ? (
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">
                    Welcome back
                  </h2>

                  {/* Social Login Buttons */}
                  <div className="space-y-3 mb-6">
                    <button className="w-full border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors bg-white">
                      <img
                        src="https://www.gstatic.com/firebaseapp/v8.10.1/images/firebaseui/idp_logos/google.png"
                        alt="Google"
                        className="w-5 h-5"
                      />
                      <span className="text-gray-900 font-medium">
                        Continue with Google
                      </span>
                    </button>
                    <button className="w-full border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors bg-white">
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
                  </div>

                  {/* Divider */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-[#FFFBF5] text-gray-600">Or</span>
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Login Form */}
                  <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                      <Label htmlFor="login-email" className="text-gray-900 font-medium text-sm mb-2 block">
                        Email address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={formLoading}
                          className="pl-12 py-3 rounded-xl border-gray-300 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="login-password" className="text-gray-900 font-medium text-sm mb-2 block">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="login-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          disabled={formLoading}
                          className="pl-12 pr-12 py-3 rounded-xl border-gray-300 bg-white"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="remember"
                          checked={rememberMe}
                          onCheckedChange={(checked) =>
                            setRememberMe(checked as boolean)
                          }
                        />
                        <Label htmlFor="remember" className="text-gray-700 cursor-pointer text-sm">
                          Remember me
                        </Label>
                      </div>
                      <button
                        type="button"
                        className="text-gray-700 hover:text-gray-900 text-sm"
                      >
                        Forgot password?
                      </button>
                    </div>

                    <Button
                      type="submit"
                      disabled={formLoading}
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl font-semibold text-lg shadow-lg"
                    >
                      {formLoading ? "Logging in..." : "Log in"}
                    </Button>
                  </form>
                </div>
              ) : (
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">
                    Create your account
                  </h2>

                  {/* Social Login Buttons */}
                  <div className="space-y-3 mb-6">
                    <button className="w-full border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors bg-white">
                      <img
                        src="https://www.gstatic.com/firebaseapp/v8.10.1/images/firebaseui/idp_logos/google.png"
                        alt="Google"
                        className="w-5 h-5"
                      />
                      <span className="text-gray-900 font-medium">
                        Continue with Google
                      </span>
                    </button>
                    <button className="w-full border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors bg-white">
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
                  </div>

                  {/* Divider */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-[#FFFBF5] text-gray-600">Or</span>
                    </div>
                  </div>

                  {/* Signup redirect button */}
                  <Button
                    onClick={() => navigate("/signup")}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl font-semibold text-lg shadow-lg"
                  >
                    Create account
                  </Button>
                </div>
              )}

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
