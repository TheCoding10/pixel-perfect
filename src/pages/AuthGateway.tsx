import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { useAuth } from "../hooks/useAuth";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { AuthNavbar } from "../components/AuthNavbar";
import mathMascot from "@/assets/math-mascot.png";
import physicsMascot from "@/assets/physics-mascot.png";
import csMascot from "@/assets/cs-mascot.png";
import financeMascot from "@/assets/finance-mascot.png";
export function AuthGateway() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      await signup(username, email, password);
      navigate("/dashboard");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Signup failed";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AuthNavbar />
      <div
        className="flex-1 flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url(/assets/auth-background.png)",
        }}
      >
      {/* Content Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Logo and Branding */}
        <div className="hidden lg:flex flex-col items-start justify-center">
          <img
            src="/assets/mascot-logo.png"
            alt="MemoLearning Mascot"
            className="w-64 h-64 object-contain mb-8"
          />
          <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-2">
            Memo<br />
            Learning
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            Learn Smarter. Achieve More.
          </p>
        </div>

        {/* Right Side - Auth Card */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            {/* Mobile Logo */}
            <div className="lg:hidden flex flex-col items-center mb-6">
              <img
                src="/assets/mascot-logo.png"
                alt="MemoLearning Mascot"
                className="w-24 h-24 object-contain mb-4"
              />
            </div>

            {/* Tabs */}
            <div className="flex gap-8 mb-8 border-b">
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
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-teal-600 rounded-t-full"></div>
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
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-teal-600 rounded-t-full"></div>
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
                <div className="space-y-3 mb-8">
                  <button className="w-full border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
                    <img
                      src="/assets/google-logo.png"
                      alt="Google"
                      className="w-5 h-5"
                    />
                    <span className="text-gray-900 font-medium">
                      Continue with Google
                    </span>
                  </button>
                  <button className="w-full border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
                    <img
                      src="/assets/apple-logo.png"
                      alt="Apple"
                      className="w-5 h-5 object-contain"
                    />
                    <span className="text-gray-900 font-medium">
                      Continue with Apple
                    </span>
                  </button>
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

                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                    {error}
                  </div>
                )}

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <Label htmlFor="login-email" className="text-gray-900 font-medium">
                      Email address
                    </Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        className="pl-12 py-3 rounded-xl border-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="login-password" className="text-gray-900 font-medium">
                      Password
                    </Label>
                    <div className="relative mt-2">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                        className="pl-12 pr-12 py-3 rounded-xl border-gray-300"
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
                      <Label htmlFor="remember" className="text-gray-700 cursor-pointer">
                        Remember me
                      </Label>
                    </div>
                    <button
                      type="button"
                      className="text-teal-600 hover:text-teal-700 font-medium text-sm"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl font-semibold text-lg"
                  >
                    {loading ? "Logging in..." : "Log in"}
                  </Button>
                </form>
              </div>
            ) : (
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Create your account
                </h2>

                {/* Social Login Buttons */}
                <div className="space-y-3 mb-8">
                  <button className="w-full border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
                    <img
                      src="/assets/google-logo.png"
                      alt="Google"
                      className="w-5 h-5"
                    />
                    <span className="text-gray-900 font-medium">
                      Continue with Google
                    </span>
                  </button>
                  <button className="w-full border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
                    <img
                      src="/assets/apple-logo.png"
                      alt="Apple"
                      className="w-5 h-5 object-contain"
                    />
                    <span className="text-gray-900 font-medium">
                      Continue with Apple
                    </span>
                  </button>
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

                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                    {error}
                  </div>
                )}

                {/* Signup Form */}
                <form onSubmit={handleSignup} className="space-y-6">
                  <div>
                    <Label htmlFor="signup-username" className="text-gray-900 font-medium">
                      Username
                    </Label>
                    <div className="relative mt-2">
                      <Input
                        id="signup-username"
                        type="text"
                        placeholder="Choose a username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={loading}
                        className="py-3 rounded-xl border-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="signup-email" className="text-gray-900 font-medium">
                      Email address
                    </Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        className="pl-12 py-3 rounded-xl border-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="signup-password" className="text-gray-900 font-medium">
                      Password
                    </Label>
                    <div className="relative mt-2">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                        className="pl-12 pr-12 py-3 rounded-xl border-gray-300"
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

                  <div>
                    <Label htmlFor="signup-confirm-password" className="text-gray-900 font-medium">
                      Confirm Password
                    </Label>
                    <div className="relative mt-2">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="signup-confirm-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        disabled={loading}
                        className="pl-12 pr-12 py-3 rounded-xl border-gray-300"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl font-semibold text-lg"
                  >
                    {loading ? "Creating account..." : "Create account"}
                  </Button>
                </form>
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

      {/* Courses Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-12" style={{ fontFamily: 'serif' }}>
            Courses
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mathematics Card */}
            <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center text-center">
              <img src={mathMascot} alt="Mathematics mascot" className="w-32 h-32 object-contain mb-4" />
              <h3 className="text-orange-500 font-bold text-lg uppercase tracking-wide mb-3">
                Mathematics
              </h3>
              <p className="text-gray-700 text-sm mb-6">
                Master math from fundamentals to advanced topics with step-by-step lessons, practice problems, and instant feedback.
              </p>
              <Button 
                onClick={() => navigate("/subject/mathematics")}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-lg uppercase text-sm"
              >
                Start Learning
              </Button>
            </div>

            {/* Physics Card */}
            <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center text-center">
              <img src={physicsMascot} alt="Physics mascot" className="w-32 h-32 object-contain mb-4" />
              <h3 className="text-orange-500 font-bold text-lg uppercase tracking-wide mb-3">
                Physics
              </h3>
              <p className="text-gray-700 text-sm mb-6">
                Learn physics intuitively through visual explanations, real-world examples, and guided problem solving.
              </p>
              <Button 
                onClick={() => navigate("/subject/physics")}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-lg uppercase text-sm"
              >
                Start Learning
              </Button>
            </div>

            {/* Computer Science Card */}
            <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center text-center">
              <img src={csMascot} alt="Computer Science mascot" className="w-32 h-32 object-contain mb-4" />
              <h3 className="text-orange-500 font-bold text-lg uppercase tracking-wide mb-3">
                Computer Science
              </h3>
              <p className="text-gray-700 text-sm mb-6">
                Build strong programming and computer science foundations through interactive lessons, projects, and challenges.
              </p>
              <Button 
                onClick={() => navigate("/subject/computer-science")}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-lg uppercase text-sm"
              >
                Start Learning
              </Button>
            </div>

            {/* Finance & Investing Card */}
            <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center text-center">
              <img src={financeMascot} alt="Finance mascot" className="w-32 h-32 object-contain mb-4" />
              <h3 className="text-orange-500 font-bold text-lg uppercase tracking-wide mb-3">
                Finance & Investing
              </h3>
              <p className="text-gray-700 text-sm mb-6">
                Understand money, markets, and investing strategies with clear explanations and real-world applications.
              </p>
              <Button 
                onClick={() => navigate("/subject/finance-investing")}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-lg uppercase text-sm"
              >
                Start Learning
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
