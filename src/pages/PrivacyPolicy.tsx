import { useEffect } from "react";
import { Link } from "react-router-dom";

export function PrivacyPolicyPage() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Simple scrollspy logic
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.sidebar-link');
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active-section');
        if (link.getAttribute('href')?.includes(current)) {
          link.classList.add('active-section');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}>
      <style>{`
        .sidebar-link {
          transition: all 0.2s;
        }
        .sidebar-link:hover {
          color: #2563eb;
          background-color: #f8fafc;
        }
        .active-section {
          color: #2563eb !important;
          font-weight: 600;
          border-left: 2px solid #2563eb;
        }
        section {
          scroll-margin-top: 100px;
        }
        .policy-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 0.75rem;
        }
        .policy-item::before {
          content: "•";
          color: #2563eb;
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold tracking-tight">MemoLearning</span>
          </div>
          <div className="flex items-center space-x-4 text-sm font-medium">
            <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Back to Learning
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="pt-32 pb-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">Privacy Policy</h1>
          <p className="text-gray-500 text-lg">Last updated: December 2025</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        
        {/* Sidebar Navigation */}
        <aside className="md:w-64 flex-shrink-0">
          <div className="sticky top-28 space-y-1">
            <a href="#intro" className="sidebar-link block px-3 py-2 rounded-md text-sm text-gray-600 active-section">Introduction</a>
            <a href="#collection" className="sidebar-link block px-3 py-2 rounded-md text-sm text-gray-600">Information We Collect</a>
            <a href="#usage" className="sidebar-link block px-3 py-2 rounded-md text-sm text-gray-600">How We Use Information</a>
            <a href="#ai" className="sidebar-link block px-3 py-2 rounded-md text-sm text-gray-600">AI & Machine Learning</a>
            <a href="#sharing" className="sidebar-link block px-3 py-2 rounded-md text-sm text-gray-600">Sharing Information</a>
            <a href="#safety" className="sidebar-link block px-3 py-2 rounded-md text-sm text-gray-600">Safety & Security</a>
            <a href="#rights" className="sidebar-link block px-3 py-2 rounded-md text-sm text-gray-600">Your Rights</a>
          </div>
        </aside>

        {/* Content Area */}
        <article className="flex-1 max-w-2xl text-gray-800 leading-relaxed">
          
          <section id="intro" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Introduction</h2>
            <p className="mb-6 text-lg font-medium text-blue-600 leading-snug">
              Welcome to MemoLearning. This policy explains how we handle your information to keep your learning experience safe and secure.
            </p>
            <div className="space-y-4 text-gray-600">
              <p>We've written this to be readable, but it is intentionally detailed so you understand exactly what happens to your data. By using MemoLearning, you agree to this Privacy Policy.</p>
              <div className="p-4 bg-gray-50 border-l-4 border-gray-200 rounded-r-lg italic">
                "MemoLearning is an educational technology platform designed to help people learn through interactive lessons, progress tracking, and AI-powered tutoring."
              </div>
            </div>
          </section>

          <section id="collection" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Information We Collect</h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3 underline decoration-blue-200 underline-offset-4">1. Information You Provide Directly</h4>
                <div className="pl-5 space-y-4 text-gray-600">
                  <div>
                    <strong className="text-gray-900 block mb-1">Account Information</strong>
                    <p className="policy-item">Email address, username, and encrypted passwords.</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1">Learning Information</strong>
                    <p className="policy-item">Lesson answers, quiz results, streaks, XP, and preferences.</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1">Communications</strong>
                    <p className="policy-item">Messages, support requests, and feedback.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3 underline decoration-blue-200 underline-offset-4">2. Collected Automatically</h4>
                <p className="text-gray-600 mb-3">When you use our services, we gather:</p>
                <div className="pl-5 space-y-2 text-gray-600">
                  <p className="policy-item">Device data (OS, browser type, IP address)</p>
                  <p className="policy-item">Usage patterns (pages viewed, time spent on lessons)</p>
                  <p className="policy-item">Error logs and crash reports</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3 underline decoration-blue-200 underline-offset-4">3. Third-Party Information</h4>
                <p className="text-gray-600 mb-2">If you log in via Google or Apple, we receive:</p>
                <div className="pl-5 space-y-2 text-gray-600">
                  <p className="policy-item">Email address and a unique account identifier</p>
                  <p className="policy-item italic text-sm">We never receive your third-party account passwords.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="usage" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">How We Use Your Information</h2>
            <p className="mb-6 text-gray-600 font-semibold text-blue-600">Important: We do not sell your personal data.</p>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 border border-gray-100 rounded-xl">
                <h5 className="font-bold text-gray-900 mb-1">Operation</h5>
                <p className="text-sm text-gray-600">Managing accounts and delivering your personalized curriculum.</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-xl">
                <h5 className="font-bold text-gray-900 mb-1">Improvement</h5>
                <p className="text-sm text-gray-600">Analyzing trends to make lessons clearer and fix technical bugs.</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-xl">
                <h5 className="font-bold text-gray-900 mb-1">Personalization</h5>
                <p className="text-sm text-gray-600">Adjusting difficulty levels and optimizing your learning path.</p>
              </div>
            </div>
          </section>

          <section id="ai" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">AI and Machine Learning</h2>
            <div className="bg-blue-50 p-6 rounded-xl space-y-4">
              <p className="text-gray-700">MemoLearning uses AI to provide instant feedback and tutoring. This involves:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">✓</span> Analyzing anonymized learning patterns.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span> Improving explanations based on what helps students most.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span> Personalizing content to your specific needs.
                </li>
              </ul>
              <p className="text-xs text-gray-500 font-medium">Note: AI responses may be inaccurate and do not replace experts. AI is not used for advertising profiling.</p>
            </div>
          </section>

          <section id="sharing" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">How We Share Information</h2>
            <div className="space-y-6 text-gray-600">
              <div>
                <h4 className="font-bold text-gray-900">Service Providers</h4>
                <p>We work with trusted partners for cloud hosting, analytics, and authentication. They must protect your data.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Legal & Safety</h4>
                <p>We may share data to comply with laws, protect user safety, or prevent fraud.</p>
              </div>
            </div>
          </section>

          <section id="safety" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Safety & Security</h2>
            <div className="space-y-4 text-gray-600">
              <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                <h4 className="font-bold text-gray-900">Children's Privacy</h4>
                <p className="text-sm">MemoLearning is not intended for children under 13. If we discover data from a child under 13 without consent, we will delete it promptly.</p>
              </div>
              <p>We use encryption and secure servers to protect your data. However, no system is 100% secure—please use the services responsibly.</p>
            </div>
          </section>

          <section id="rights" className="mb-24">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Your Rights and Choices</h2>
            <p className="mb-6 text-gray-600">Depending on your location, you may have the right to access, correct, or delete your personal data.</p>
            
            <div className="space-y-4 mb-12">
              <div className="p-4 border border-gray-100 rounded-xl">
                <h5 className="font-bold text-gray-900 mb-1">Data Retention</h5>
                <p className="text-sm text-gray-600">We keep your data as long as your account is active. If you delete your account, we anonymize your data.</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-xl">
                <h5 className="font-bold text-gray-900 mb-1">California Privacy</h5>
                <p className="text-sm text-gray-600">California residents have specific rights to know what data is collected and opt-out of certain uses.</p>
              </div>
            </div>

            <div className="mt-12 py-12 border-t border-gray-100 text-center">
              <p className="text-lg font-bold text-gray-900 mb-2">Questions about your privacy?</p>
              <p className="text-gray-500">Contact our support team through the platform dashboard.</p>
            </div>
          </section>

        </article>
      </main>
    </div>
  );
}
