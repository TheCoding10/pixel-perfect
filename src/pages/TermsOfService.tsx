import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function TermsOfServicePage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("welcome");

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Scrollspy logic
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      let current = 'welcome';
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
          current = section.getAttribute('id') || 'welcome';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSidebarLinkClass = (sectionId: string) => {
    const baseClass = "block px-3 py-2 rounded-md text-sm transition-all";
    if (activeSection === sectionId) {
      return `${baseClass} text-blue-600 font-semibold border-l-2 border-blue-600`;
    }
    return `${baseClass} text-gray-600 hover:text-blue-600 hover:bg-slate-50`;
  };

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold tracking-tight">MemoLearning</span>
          </Link>
          <div className="flex items-center space-x-4 text-sm font-medium">
            <button 
              onClick={() => navigate('/')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Learning
            </button>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="pt-32 pb-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">Terms of Service</h1>
          <p className="text-gray-500 text-lg">Last updated: December 2025</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        
        {/* Sidebar Navigation */}
        <aside className="md:w-64 flex-shrink-0">
          <div className="sticky top-28 space-y-1">
            <a href="#welcome" className={getSidebarLinkClass("welcome")}>Welcome</a>
            <a href="#eligibility" className={getSidebarLinkClass("eligibility")}>Who Can Use Memo</a>
            <a href="#responsibility" className={getSidebarLinkClass("responsibility")}>Your Responsibility</a>
            <a href="#ai-terms" className={getSidebarLinkClass("ai-terms")}>AI & Content</a>
            <a href="#ownership" className={getSidebarLinkClass("ownership")}>Ownership</a>
            <a href="#legal" className={getSidebarLinkClass("legal")}>The Legal Stuff</a>
            <a href="#contact" className={getSidebarLinkClass("contact")}>Questions?</a>
          </div>
        </aside>

        {/* Content Area */}
        <article className="flex-1 max-w-2xl text-gray-800 leading-relaxed">
          
          <section id="welcome" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Hi 👋 Welcome to MemoLearning.</h2>
            <p className="mb-6 text-lg font-medium text-blue-600 leading-snug">
              These Terms explain what you can expect from us and what we expect from you. We've written them in plain language on purpose.
            </p>
            <div className="space-y-4 text-gray-600">
              <p>By using MemoLearning, you agree to these Terms. If you don't agree, please don't use the app or website.</p>
              <div className="p-6 border border-blue-100 bg-blue-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">What is MemoLearning?</h4>
                <p className="text-sm mb-4">MemoLearning is an educational platform that helps people learn subjects like math, science, computer science, and finance through:</p>
                <ul className="text-sm space-y-1 pl-4">
                  <li className="flex items-start mb-3">
                    <span className="text-blue-600 font-bold mr-2">→</span>
                    Interactive lessons and quizzes
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="text-blue-600 font-bold mr-2">→</span>
                    Gamification (XP, streaks, progress)
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="text-blue-600 font-bold mr-2">→</span>
                    AI-powered tutors and explanations
                  </li>
                </ul>
                <p className="text-xs mt-4 text-gray-500 font-medium italic">We are not a school, university, or certification authority.</p>
              </div>
            </div>
          </section>

          <section id="eligibility" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Who can use MemoLearning?</h2>
            <p className="mb-4 text-gray-600">To use our services, you must meet these requirements:</p>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-blue-600 font-bold mr-3">13+</span>
                <span className="text-sm text-gray-700">You must be 13 years or older.</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-blue-600 font-bold mr-3">18-</span>
                <span className="text-sm text-gray-700">Under 18s must have permission from a parent or guardian.</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span className="text-sm text-gray-700">You must be allowed by law to use online services.</span>
              </div>
            </div>
          </section>

          <section id="responsibility" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Your Account & Responsibility</h2>
            <div className="space-y-6 text-gray-600">
              <div>
                <h4 className="font-bold text-gray-900 mb-2 underline decoration-blue-200 underline-offset-4">Safety First</h4>
                <p>You're responsible for keeping your login information safe and for anything that happens under your account. If someone else uses your account because you didn't protect it, that's on you.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 underline decoration-blue-200 underline-offset-4">Responsible Learning</h4>
                <p className="mb-2">We want a healthy community. Please don't:</p>
                <ul className="pl-5 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">→</span>
                    Cheat, exploit, or game the system
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">→</span>
                    Try to hack, scrape, or reverse engineer the platform
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">→</span>
                    Copy or resell our content
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">→</span>
                    Harass other users
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="ai-terms" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">AI & Your Content</h2>
            <div className="space-y-6">
              <div className="p-5 border-l-4 border-amber-400 bg-amber-50 rounded-r-xl">
                <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">About AI on Memo</h4>
                <p className="text-sm text-gray-700 mb-2">AI explanations are here to help you learn, but remember:</p>
                <ul className="text-xs space-y-1 text-gray-600">
                  <li>• AI responses can be wrong.</li>
                  <li>• They don't replace teachers or experts.</li>
                  <li>• Double-check important info; we aren't liable for AI output.</li>
                </ul>
              </div>
              <div className="text-gray-600">
                <h4 className="font-bold text-gray-900 mb-2">Your Submissions</h4>
                <p>You still own your answers, messages, and feedback. By posting them, you give us permission to store and use them to improve MemoLearning. We may use anonymized data to train our AI features.</p>
              </div>
            </div>
          </section>

          <section id="ownership" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Content</h2>
            <p className="text-gray-600 mb-4">Everything on MemoLearning — including lessons, quizzes, visual design, branding, and AI systems — belongs to MemoLearning or our licensors.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-gray-100 rounded-lg text-center">
                <p className="text-xs font-bold text-gray-400 uppercase">You Can</p>
                <p className="text-sm text-green-600 font-medium">Learn personally</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg text-center">
                <p className="text-xs font-bold text-gray-400 uppercase">You Cannot</p>
                <p className="text-sm text-red-600 font-medium">Sell or copy it</p>
              </div>
            </div>
          </section>

          <section id="legal" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">The Legal Stuff</h2>
            <div className="space-y-6 text-sm text-gray-600">
              <div>
                <h4 className="font-bold text-gray-900">No Promises</h4>
                <p>MemoLearning is provided "as is." We don't guarantee learning outcomes or that the site will never have bugs or downtime. We do our best — but no promises.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Termination</h4>
                <p>We can suspend or terminate accounts if these Terms are violated, the platform is abused, or we're required by law. You can stop using Memo whenever you want.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Limited Liability</h4>
                <p>To the extent allowed by law, we aren't responsible for unexpected damages or lost progress. Our total liability won't exceed what you paid us in the past 12 months.</p>
              </div>
            </div>
          </section>

          <section id="contact" className="mb-24 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Questions?</h2>
            <p className="mb-8 text-gray-600">If these Terms change, we'll post updates here. Your continued use means you accept the changes.</p>
            
            <div className="border border-gray-200 p-8 rounded-2xl text-center shadow-sm">
              <p className="text-lg mb-4 font-semibold text-gray-900">We're happy to help.</p>
              <div className="space-y-2">
                <p className="text-blue-600 font-medium">support@memolearning.com</p>
                <p className="text-gray-500 text-sm">https://memolearning.com</p>
              </div>
            </div>
          </section>

        </article>
      </main>
    </div>
  );
}
