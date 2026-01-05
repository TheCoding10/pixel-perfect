import { useEffect } from "react";
import { Link } from "react-router-dom";

export function PrivacyPolicyPage() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Simple scrollspy logic
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('aside a');
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
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
    <div className="bg-white min-h-screen" style={{ fontFamily: "'Nunito', sans-serif", color: '#1a1a1a' }}>
      <style>{`
        .card {
          border: 1px solid #ebebeb;
          border-radius: 8px;
          transition: border-color 0.2s ease;
        }
        .card:hover {
          border-color: #cccccc;
        }
        .btn-brilliant {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          font-weight: 700;
          border-radius: 6px;
          transition: all 0.15s ease-in-out;
          text-transform: none;
          cursor: pointer;
          border: 2px solid transparent;
        }
        .btn-primary {
          background-color: #1a1a1a;
          color: white;
        }
        .btn-primary:hover {
          background-color: #404040;
        }
        .btn-outline {
          background-color: transparent;
          border: 2px solid #e5e5e5;
          color: #1a1a1a;
        }
        .btn-outline:hover {
          border-color: #1a1a1a;
          background-color: #f9f9f9;
        }
        .mascot-box {
          background-color: #f0f0f0;
          border: 1px solid #e5e5e5;
          border-radius: 12px;
        }
        .data-point {
          border-left: 3px solid #1a1a1a;
          padding-left: 1rem;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 py-4">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold text-xl">M</div>
            <span className="text-xl font-extrabold tracking-tight text-black">MemoLearning</span>
          </div>
          <Link to="/" className="btn-brilliant btn-primary text-sm">
            Back to Learning
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        
        {/* Sidebar Navigation */}
        <aside className="hidden md:block w-64 flex-shrink-0 sticky top-28 h-fit">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Privacy Policy</h3>
          <ul className="space-y-4" id="sidebar">
            <li><a href="#welcome" className="block text-gray-500 hover:text-black transition-colors font-bold">Welcome</a></li>
            <li><a href="#who-we-are" className="block text-gray-500 hover:text-black transition-colors font-bold">1. Who We Are</a></li>
            <li><a href="#collection" className="block text-gray-500 hover:text-black transition-colors font-bold">2. Information We Collect</a></li>
            <li><a href="#usage" className="block text-gray-500 hover:text-black transition-colors font-bold">3. How We Use Data</a></li>
            <li><a href="#ai-ml" className="block text-gray-500 hover:text-black transition-colors font-bold">4. AI & Machine Learning</a></li>
            <li><a href="#cookies" className="block text-gray-500 hover:text-black transition-colors font-bold">5. Cookies</a></li>
            <li><a href="#sharing" className="block text-gray-500 hover:text-black transition-colors font-bold">6. Sharing Info</a></li>
            <li><a href="#safety" className="block text-gray-500 hover:text-black transition-colors font-bold">7-9. Security & Kids</a></li>
            <li><a href="#rights" className="block text-gray-500 hover:text-black transition-colors font-bold">10-13. Legal Rights</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold mb-2 text-black tracking-tight">Privacy Policy</h1>
            <p className="text-gray-400 font-medium">Last updated: December 2025</p>
          </header>

          {/* Intro Section */}
          <section id="welcome" className="card bg-white p-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="mascot-box p-4 flex-shrink-0">
                <span className="text-3xl">🛡️</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Your data, handled with care.</h2>
                <p className="text-lg leading-relaxed text-gray-600 mb-6">
                  This Privacy Policy explains how we collect, use, store, share, and protect your information when you use our websites, applications, and services. We've written this to be readable, but it is intentionally detailed so you understand exactly what happens to your data.
                </p>
                <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-semibold text-sm">
                  By using MemoLearning, you agree to this Privacy Policy.
                </div>
              </div>
            </div>
          </section>

          {/* 1. Who We Are */}
          <section id="who-we-are" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-black">1. Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Welcome to MemoLearning ("MemoLearning," "we," "us," or "our"). MemoLearning is an educational technology platform designed to help people learn through:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="card p-5 bg-white text-center">
                <span className="block text-2xl mb-2">📝</span>
                <span className="font-bold text-sm text-black">Interactive lessons & quizzes</span>
              </div>
              <div className="card p-5 bg-white text-center">
                <span className="block text-2xl mb-2">🔥</span>
                <span className="font-bold text-sm text-black">Progress tracking & streaks</span>
              </div>
              <div className="card p-5 bg-white text-center">
                <span className="block text-2xl mb-2">🤖</span>
                <span className="font-bold text-sm text-black">AI-powered tutoring</span>
              </div>
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-6 italic">We are not a school, not an accredited institution, and not a testing authority.</p>
          </section>

          {/* 2. Information We Collect */}
          <section id="collection" className="mb-16 border-t border-gray-100 pt-12">
            <h2 className="text-2xl font-bold mb-6 text-black">2. Information We Collect</h2>
            <p className="text-lg text-gray-600 mb-8">We collect information in three main ways: what you provide, what is collected automatically, and what we get from third parties.</p>

            <div className="space-y-10">
              <div className="data-point">
                <h3 className="font-bold text-black text-xl mb-3">2.1 Information You Provide Directly</h3>
                <p className="text-gray-600 mb-4">When you create an account or use MemoLearning, you may provide:</p>
                <ul className="space-y-4 text-gray-600">
                  <li><strong>Account Information:</strong> Email address, Username or display name, and Password (stored in encrypted/hashed form).</li>
                  <li><strong>Learning Information:</strong> Lesson answers, quiz results, scores, streaks, XP, achievements, and learning preferences.</li>
                  <li><strong>Communications:</strong> Messages sent through the platform, emails, support requests, feedback, or surveys.</li>
                </ul>
              </div>

              <div className="data-point">
                <h3 className="font-bold text-black text-xl mb-3">2.2 Information We Collect Automatically</h3>
                <ul className="space-y-4 text-gray-600">
                  <li><strong>Device & Technical Data:</strong> Device type, OS, browser, app version, IP address (location estimate), language, and time zone.</li>
                  <li><strong>Usage Data:</strong> Pages viewed, features used, time spent on lessons, interaction patterns (clicks/navigation), and error logs.</li>
                </ul>
              </div>

              <div className="data-point">
                <h3 className="font-bold text-black text-xl mb-3">2.3 Information From Third Parties</h3>
                <p className="text-gray-600 mb-4">If you sign up or log in using <strong>Google</strong> or <strong>Apple</strong>, we receive your email and a unique account identifier. We do not receive your passwords from these providers.</p>
              </div>
            </div>
          </section>

          {/* 3. How We Use Information */}
          <section id="usage" className="mb-16 bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-black">3. How We Use Your Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-black mb-2">3.1 Provide and Operate</h3>
                <p className="text-gray-600 text-sm">Create and manage accounts, deliver lessons/quizzes, track achievements, and enable AI tutoring.</p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">3.2 Improve the Platform</h3>
                <p className="text-gray-600 text-sm">Analyze usage trends, improve lesson quality, enhance AI explanations, and develop new features.</p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">3.3 Personalize Learning</h3>
                <p className="text-gray-600 text-sm">Recommend lessons, adjust difficulty, and optimize learning paths based on your progress.</p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">3.4 Communicate</h3>
                <p className="text-gray-600 text-sm">Send account notifications, support responses, and product updates.</p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6 text-center">
              <p className="text-black font-extrabold uppercase tracking-tighter">We do not sell your personal data.</p>
            </div>
          </section>

          {/* 4. AI and Machine Learning Use */}
          <section id="ai-ml" className="mb-16 bg-black rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-yellow-400">✦</span> 4. AI and Machine Learning Use
            </h2>
            <p className="text-gray-300 mb-6">MemoLearning uses AI to analyze anonymized patterns, improve feedback, and personalize content.</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                <p className="text-gray-300 text-sm"><strong>AI responses can be wrong.</strong> They are meant to help you learn, not replace teachers or experts.</p>
              </div>
              <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                <p className="text-gray-300 text-sm"><strong>Not for profiling.</strong> AI systems are not used for advertising profiling or tracking.</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Whenever possible, AI training uses aggregated or anonymized data.</p>
          </section>

          {/* 5. Cookies */}
          <section id="cookies" className="mb-16">
            <h2 className="text-2xl font-bold mb-4 text-black">5. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We use cookies to keep you logged in, remember preferences, measure performance, and analyze usage. You can manage cookies in your browser, but some features may break if disabled.
            </p>
          </section>

          {/* 6. Sharing Information */}
          <section id="sharing" className="mb-16 border-t border-gray-100 pt-12">
            <h2 className="text-2xl font-bold mb-6 text-black">6. How We Share Information</h2>
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-bold text-black mb-2">6.1 Service Providers</h3>
                <p className="text-gray-600 text-sm">Trusted partners for cloud hosting, analytics, authentication, and payment processing are required to protect your data.</p>
              </div>
              <div className="card p-6">
                <h3 className="font-bold text-black mb-2">6.2 Legal and Safety Reasons</h3>
                <p className="text-gray-600 text-sm">We share info if required to comply with laws, protect user safety, prevent fraud, or enforce our Terms.</p>
              </div>
              <div className="card p-6">
                <h3 className="font-bold text-black mb-2">6.3 Business Transfers</h3>
                <p className="text-gray-600 text-sm">In a merger or sale, user data may be transferred. We will notify users when required by law.</p>
              </div>
            </div>
          </section>

          {/* 7-9. Children, Retention, Security */}
          <section id="safety" className="mb-16 space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-black">7. Children and Student Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                MemoLearning is not intended for children under 13. If we discover we've collected data from a child under 13 without parental consent, we will delete it promptly.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-black">8. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain info while your account is active or as needed for legal obligations. If you delete your account, we delete or anonymize personal data.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-black">9. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We use encryption and secure servers. However, no system is completely secure—you use MemoLearning at your own risk.
              </p>
            </div>
          </section>

          {/* 10-13. Legal Rights */}
          <section id="rights" className="mb-16 border-t border-gray-100 pt-12">
            <h2 className="text-2xl font-bold mb-4 text-black">10. Your Rights and Choices</h2>
            <p className="text-gray-600 mb-6">You may have the right to access, correct, or request deletion of your data. Contact us to exercise these rights.</p>
            
            <h2 className="text-2xl font-bold mb-4 text-black">11. International Users</h2>
            <p className="text-gray-600 mb-8">We operate from the U.S. By using the service, you agree your info may be transferred to and processed in the U.S.</p>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-black">12. California Privacy Rights</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                <li>Right to know what data we collect</li>
                <li>Right to request deletion</li>
                <li>Right to opt out of certain uses</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-black">13. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 italic">We may update this policy. Changes will be posted here. Continued use means acceptance of the updated policy.</p>
          </section>

          {/* Footer */}
          <footer className="mt-20 pt-12 border-t border-gray-100 text-center">
            <div className="inline-block mb-10">
              <h2 className="text-2xl font-bold text-black mb-6">Questions about your data?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:privacy@memolearning.com" className="btn-brilliant btn-primary">
                  Contact Privacy Team
                </a>
                <Link to="/" className="btn-brilliant btn-outline">
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
