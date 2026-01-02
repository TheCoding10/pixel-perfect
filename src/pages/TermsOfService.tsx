import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function TermsOfServicePage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scrollspy logic
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.sidebar-nav a');
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('text-black', 'font-extrabold');
        link.classList.add('text-gray-500');
        if (link.getAttribute('href')?.includes(current)) {
          link.classList.remove('text-gray-500');
          link.classList.add('text-black', 'font-extrabold');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 py-4">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold text-xl">M</div>
            <span className="text-xl font-extrabold tracking-tight text-black">MemoLearning</span>
          </Link>
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-md transition-all cursor-pointer bg-[#1a1a1a] text-white hover:bg-[#404040] text-sm"
          >
            Back to Learning
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        
        {/* Sidebar Navigation (Desktop) */}
        <aside className="hidden md:block w-64 flex-shrink-0 sticky top-28 h-fit sidebar-nav">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Terms & Policies</h3>
          <ul className="space-y-4">
            <li><a href="#welcome" className="block text-gray-500 hover:text-black transition-colors font-bold">Welcome</a></li>
            <li><a href="#what-is" className="block text-gray-500 hover:text-black transition-colors font-bold">What is MemoLearning?</a></li>
            <li><a href="#who-can" className="block text-gray-500 hover:text-black transition-colors font-bold">Eligibility</a></li>
            <li><a href="#account" className="block text-gray-500 hover:text-black transition-colors font-bold">Your Account</a></li>
            <li><a href="#responsibility" className="block text-gray-500 hover:text-black transition-colors font-bold">Responsible Use</a></li>
            <li><a href="#ai" className="block text-gray-500 hover:text-black transition-colors font-bold">About AI</a></li>
            <li><a href="#content" className="block text-gray-500 hover:text-black transition-colors font-bold">Ownership & Content</a></li>
            <li><a href="#limits" className="block text-gray-500 hover:text-black transition-colors font-bold">Liability & Legal</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold mb-2 text-black tracking-tight">Terms of Service</h1>
            <p className="text-gray-400 font-medium">Last updated: December 2025</p>
          </header>

          {/* Intro Card */}
          <section id="welcome" className="bg-white p-8 mb-12 border border-[#ebebeb] rounded-lg hover:border-[#cccccc] transition-colors">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="bg-[#f0f0f0] border border-[#e5e5e5] rounded-xl p-4 flex-shrink-0">
                <span className="text-3xl">👋</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Hi! Welcome to MemoLearning.</h2>
                <p className="text-lg leading-relaxed text-gray-600 mb-6">
                  These Terms explain what you can expect from us and what we expect from you when you use MemoLearning. We've written them in plain language on purpose.
                </p>
                <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-semibold text-sm">
                  By using MemoLearning, you agree to these Terms. If you don't agree, please don't use the app or website.
                </div>
              </div>
            </div>
          </section>

          {/* What is Section */}
          <section id="what-is" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-black">What is MemoLearning?</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>MemoLearning is an educational platform that helps people learn subjects like math, science, computer science, finance, and more.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="border border-[#ebebeb] rounded-lg p-5 bg-white flex items-center gap-4 hover:border-[#cccccc] transition-colors">
                  <span className="text-xl">📝</span>
                  <span className="font-bold text-black">Lessons and quizzes</span>
                </div>
                <div className="border border-[#ebebeb] rounded-lg p-5 bg-white flex items-center gap-4 hover:border-[#cccccc] transition-colors">
                  <span className="text-xl">🔥</span>
                  <span className="font-bold text-black">Gamification (XP, streaks)</span>
                </div>
                <div className="border border-[#ebebeb] rounded-lg p-5 bg-white flex items-center gap-4 hover:border-[#cccccc] transition-colors">
                  <span className="text-xl">🤖</span>
                  <span className="font-bold text-black">AI-powered tutors</span>
                </div>
                <div className="border border-[#ebebeb] rounded-lg p-5 bg-white flex items-center gap-4 hover:border-[#cccccc] transition-colors">
                  <span className="text-xl">🎓</span>
                  <span className="font-bold text-black">Self-paced learning</span>
                </div>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-6">We are not a school, university, or certification authority.</p>
            </div>
          </section>

          {/* Eligibility */}
          <section id="who-can" className="mb-16 bg-white border-t border-gray-100 pt-12">
            <h2 className="text-2xl font-bold mb-8 text-black">Who can use MemoLearning?</h2>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-black flex-shrink-0 flex items-center justify-center text-white text-sm font-bold">1</div>
                <p className="text-lg text-gray-700"><strong>Age:</strong> You must be 13 years or older.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-black flex-shrink-0 flex items-center justify-center text-white text-sm font-bold">2</div>
                <p className="text-lg text-gray-700"><strong>Minors:</strong> Have permission from a parent or guardian if you're under 18.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-black flex-shrink-0 flex items-center justify-center text-white text-sm font-bold">3</div>
                <p className="text-lg text-gray-700"><strong>Legality:</strong> Be allowed by law to use online services.</p>
              </div>
            </div>
          </section>

          {/* AI Section */}
          <section id="ai" className="mb-16 bg-black rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-yellow-400">✦</span> About AI on MemoLearning
            </h2>
            <p className="text-gray-300 mb-8 font-medium">Some explanations and tutoring features are powered by AI. That means:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                <p className="text-gray-300"><strong>AI responses can be wrong.</strong> They're meant to help you learn, not replace teachers or experts.</p>
              </div>
              <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                <p className="text-gray-300"><strong>Verification:</strong> You should verify important information elsewhere before making decisions.</p>
              </div>
            </div>
            <p className="mt-8 text-xs text-gray-500 font-bold uppercase tracking-widest">MemoLearning is not responsible for decisions you make based on AI output.</p>
          </section>

          {/* Standard Sections */}
          <div className="space-y-16 border-t border-gray-100 pt-12">
            <section id="account">
              <h2 className="text-2xl font-bold mb-4 text-black">Your account</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                You're responsible for keeping your login information safe. If someone else uses your account because you didn't protect it, that responsibility remains yours.
              </p>
            </section>

            <section id="responsibility">
              <h2 className="text-2xl font-bold mb-4 text-black">Responsible Use</h2>
              <div className="grid md:grid-cols-2 gap-3 text-gray-600">
                <div className="flex items-center gap-2"><span>✕</span> No cheating or gaming the system</div>
                <div className="flex items-center gap-2"><span>✕</span> No hacking or scraping</div>
                <div className="flex items-center gap-2"><span>✕</span> No reselling content</div>
                <div className="flex items-center gap-2"><span>✕</span> No harassment of users</div>
              </div>
            </section>

            <section id="content">
              <h2 className="text-2xl font-bold mb-6 text-black">Content & Ownership</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border border-gray-100 rounded-lg">
                  <h3 className="font-bold text-black mb-2">Your Content</h3>
                  <p className="text-gray-500 text-sm">You own what you submit. You grant us a license to use it to improve our educational models.</p>
                </div>
                <div className="p-6 border border-gray-100 rounded-lg">
                  <h3 className="font-bold text-black mb-2">Our Content</h3>
                  <p className="text-gray-500 text-sm">All intellectual property on this platform belongs to MemoLearning or its licensors.</p>
                </div>
              </div>
            </section>

            {/* Liability and Legal Section */}
            <section id="limits" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-black">We don't promise perfection</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4 italic">
                  MemoLearning is provided "as is."
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>We don't guarantee everything will always work</li>
                  <li>We don't guarantee learning outcomes</li>
                  <li>Bugs and downtime may happen</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-black">Limits on our responsibility</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  To the extent allowed by law:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>We're not responsible for indirect or unexpected damages</li>
                  <li>We're not responsible for lost progress or results</li>
                  <li>Our total liability won't exceed what you paid us (if anything) in the past 12 months</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Footer Contact */}
          <footer className="mt-20 pt-12 border-t border-gray-100 text-center">
            <div className="inline-block mb-10">
              <h2 className="text-2xl font-bold text-black mb-6">Still have questions?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@memolearning.com" 
                  className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-md transition-all cursor-pointer bg-[#1a1a1a] text-white hover:bg-[#404040]"
                >
                  Email Support
                </a>
                <Link 
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 font-bold rounded-md transition-all cursor-pointer bg-transparent border-2 border-[#e5e5e5] text-[#1a1a1a] hover:border-[#1a1a1a] hover:bg-[#f9f9f9]"
                >
                  Visit Homepage
                </Link>
              </div>
            </div>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-8 mb-12">© 2025 MemoLearning Inc. Built for curiosity.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
