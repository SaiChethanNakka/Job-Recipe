import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

interface HeroProps {
  isAuthed: boolean;
}

const Hero: React.FC<HeroProps> = ({ isAuthed }) => {
  const navigate = useNavigate();

  const scrollToTools = () => {
    const el = document.getElementById('tools-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 bg-stone-50">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-brand-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm ring-1 ring-stone-200 mb-8 animate-fade-in">
          <Sparkles size={14} className="text-brand-500" />
          <span>New: AI Interview Simulation</span>
        </div>

        <h1 className="max-w-4xl mx-auto text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl md:text-6xl lg:text-7xl mb-6 animate-slide-up">
          Your personalized path to being <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">market-ready.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-600 mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Stop guessing. Evaluate your skills against real market data, identify critical gaps, create a custom roadmap, and transform your career trajectory with AI-powered guidance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {!isAuthed && (
            <button
              onClick={() => navigate('/auth')}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-all hover:bg-brand-700 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              Get started for free
              <ChevronRight size={16} className="ml-2" />
            </button>
          )}
          
          <button
            onClick={scrollToTools}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-stone-700 shadow-sm ring-1 ring-stone-200 transition-all hover:bg-stone-50 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-stone-300"
          >
            Explore tools
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
