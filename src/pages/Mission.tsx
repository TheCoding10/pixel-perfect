import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const MissionPage = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('mission');

  useEffect(() => {
    // Handle hash navigation on load
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['mission', 'problem', 'philosophy', 'how-it-works', 'who-we-serve', 'vision'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sidebarLinks = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'problem', label: 'The Problem' },
    { id: 'philosophy', label: 'Our Philosophy' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'who-we-serve', label: 'Who We Serve' },
    { id: 'vision', label: 'Vision & Commitment' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight text-gray-900">MemoLearning</span>
          <Link 
            to="/" 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Learning
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Our Mission</h1>
          <p className="text-gray-500">Last updated: December 2025</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="lg:sticky lg:top-28 space-y-1">
            {sidebarLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-3 py-2 rounded transition-all ${
                  activeSection === link.id
                    ? 'text-blue-600 font-semibold border-l-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Article Content */}
        <article className="max-w-2xl space-y-16">
          {/* Mission Section */}
          <section id="mission" className="scroll-mt-28">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Redefining How the World Learns STEM</h2>
            <p className="text-blue-600 mb-6 text-lg">
              MemoLearning is an educational technology platform built on one core belief: 
              Everyone is capable of mastering complex subjects when learning is designed the right way.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to democratize STEM education by transforming traditionally difficult 
              subjects—such as mathematics, physics, computer science, and finance—into 
              structured, intuitive, and motivating learning experiences that anyone can access, anywhere.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We exist to replace confusion with clarity, intimidation with confidence, and passive 
              memorization with real understanding.
            </p>
          </section>

          {/* Problem Section */}
          <section id="problem" className="scroll-mt-28">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">The Problem We're Solving</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              STEM subjects are among the most powerful tools for understanding the world—yet for 
              millions of learners, they remain inaccessible. Traditional education often fails to 
              meet students where they are.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Courses move too fast, leaving gaps in foundational understanding.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Feedback is delayed or non-existent, making it hard to know what to improve.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Content is often presented without context, making it feel abstract and irrelevant.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Many learners develop math anxiety or a fixed mindset early on, which follows them for life.</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-6 leading-relaxed">
              The result? Bright minds give up on subjects they could have mastered—not because they lacked 
              ability, but because the system wasn't designed for them.
            </p>
          </section>

          {/* Philosophy Section */}
          <section id="philosophy" className="scroll-mt-28">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Philosophy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At MemoLearning, we believe that learning should be:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Active, not passive</h3>
                <p className="text-gray-600">You don't learn math by watching someone else solve problems—you learn by doing.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Structured and sequential</h3>
                <p className="text-gray-600">Every concept builds on previous ones. Skipping steps leads to confusion.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Personalized and adaptive</h3>
                <p className="text-gray-600">Everyone starts from a different place. Good learning meets you where you are.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Motivating and rewarding</h3>
                <p className="text-gray-600">Progress should feel visible. Small wins matter.</p>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="scroll-mt-28">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">How It Works</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our platform combines proven learning science with intelligent technology:
            </p>
            <div className="space-y-4 text-gray-600">
              <p><strong className="text-gray-900">Spaced Repetition:</strong> We help you remember what you learn by reviewing concepts at optimal intervals.</p>
              <p><strong className="text-gray-900">Active Recall:</strong> Interactive exercises that challenge you to retrieve knowledge, strengthening memory.</p>
              <p><strong className="text-gray-900">Instant Feedback:</strong> Know immediately whether you're on the right track.</p>
              <p><strong className="text-gray-900">Adaptive Pathways:</strong> The platform adjusts to your progress, focusing on areas that need more attention.</p>
            </div>
          </section>

          {/* Who We Serve Section */}
          <section id="who-we-serve" className="scroll-mt-28">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Who We Serve</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              MemoLearning is built for anyone ready to master challenging subjects:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>• High school and university students preparing for exams</li>
              <li>• Self-learners exploring new fields</li>
              <li>• Professionals upskilling in quantitative domains</li>
              <li>• Educators looking for structured supplemental materials</li>
            </ul>
          </section>

          {/* Vision Section */}
          <section id="vision" className="scroll-mt-28">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Vision & Commitment</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We envision a world where no one is held back by poor instruction or lack of access. 
              Where every learner—regardless of background—has the tools to build real mastery in the 
              subjects that shape our future.
            </p>
            <p className="text-blue-600 font-semibold text-lg">
              MemoLearning is committed to making this vision a reality—one concept, one lesson, 
              one learner at a time.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};
