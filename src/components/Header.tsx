import React from 'react';

interface Props {
  onOpenBooking: () => void;
  onNavigateHome?: () => void;
}

export const Header: React.FC<Props> = ({ onOpenBooking, onNavigateHome }) => {
  return (
    <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateHome) onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors"
          >
            Vektor<span className="text-amber-400 font-mono">.Press</span>
          </a>

          {/* Zone 2: 4–5 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a
              href="#services"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Portfolio
            </a>
            <a
              href="#performance"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Benchmark
            </a>
            <a
              href="#calculator"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Estimator
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm active:scale-95"
            >
              Schedule Discovery Call
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
