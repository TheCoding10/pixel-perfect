import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const CATEGORIES = [
  { name: "Mathematics", slug: "mathematics" },
  { name: "Computer Science", slug: "computer-science" },
  { name: "Finance & Investing", slug: "finance-investing" },
  { name: "Physics", slug: "physics" },
];

export function AuthNavbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isDropdownOpen]);

  const handleExplore = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogin = () => {
    navigate("/");
  };

  const handleSignup = () => {
    navigate("/");
  };

  const handleLogoClick = () => {
    navigate("/home");
  };

  const handleCategoryClick = (slug: string) => {
    setIsDropdownOpen(false);
    navigate(`/subject/${slug}`);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Section - Explore and Search */}
        <div className="flex items-center gap-6">
          {/* Explore Button with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleExplore}
              className="flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Explore
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-2">
                  <p className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase">
                    Categories
                  </p>
                  {CATEGORIES.map((category) => (
                    <button
                      key={category.slug}
                      onClick={() => handleCategoryClick(category.slug)}
                      className="w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

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

        {/* Right Section - Auth Buttons */}
        <div className="flex items-center gap-4">
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
