import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export function AuthNavbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleLogin = () => {
    navigate("/");
  };

  const handleSignup = () => {
    navigate("/");
  };

  const handleLogoClick = () => {
    navigate("/home");
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Section - Courses Link and Search */}
        <div className="flex items-center gap-6">
          {/* Courses Link */}
          <Link
            to="/courses"
            className="text-lg font-semibold text-gray-700 hover:text-teal-600 transition-colors"
          >
            Courses
          </Link>

          {/* Search Bar */}
          <div className="relative hidden md:block">
            <div className="flex items-center">
              <Search className="absolute left-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Center Section - Logo */}
        <div className="flex-1 flex justify-center">
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/assets/memolearning-logo.png"
              alt="MemoLearning"
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold text-gray-900">
              MemoLearning
            </span>
          </button>
        </div>

        {/* Right Section - Auth Buttons - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4">
          {!isAuthenticated && (
            <>
              <button
                onClick={handleLogin}
                className="px-6 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition-colors"
              >
                Log in
              </button>
              <button
                onClick={handleSignup}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
