import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, TrendingUp } from 'lucide-react';

interface Props {
  onOpenBooking: () => void;
  onExplorePortfolio: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<Props> = ({ 
  onOpenBooking, 
  onExplorePortfolio, 
  onOpenCalculator 
}) => {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-neutral-950">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Subtle editorial kicker without pills */}
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
            Enterprise WordPress Engineering & Modern Commerce
          </div>

          {/* Primary Headline with text-wrap: balance */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]" style={{ textWrap: 'balance' }}>
            We engineer sub-second WordPress platforms that convert traffic into revenue.
          </h1>

          {/* Concrete subheadline */}
          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate bulky page builders and fragile plugins. We architect custom Gutenberg block systems, enterprise WooCommerce storefronts, and headless Next.js platforms with a guaranteed 95+ Core Web Vitals score.
          </p>

          {/* Primary & Secondary CTA Block */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-amber-400/20 active:scale-98 cursor-pointer flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExplorePortfolio}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 font-semibold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>View 9 Case Studies</span>
            </button>

            <button
              onClick={onOpenCalculator}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-800 text-neutral-300 font-medium text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Instant Scope Calculator</span>
            </button>
          </div>

          {/* Unboxed Metadata Trust Line */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              100% Client Code Ownership
            </span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Guaranteed Sub-0.5s LCP
            </span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              Zero Bloated Builders
            </span>
          </div>
        </div>

        {/* Hero KPI Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-xs">
          <div className="p-4 border-r border-neutral-800/80 last:border-0 text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              520+
            </div>
            <div className="text-xs text-neutral-400 mt-1">WordPress Platforms Launched</div>
          </div>
          
          <div className="p-4 border-r border-neutral-800/80 last:border-0 text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums tracking-tight">
              0.38s
            </div>
            <div className="text-xs text-neutral-400 mt-1">Median Largest Contentful Paint</div>
          </div>

          <div className="p-4 border-r border-neutral-800/80 last:border-0 text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              $140M+
            </div>
            <div className="text-xs text-neutral-400 mt-1">Annual WooCommerce GMV Scaled</div>
          </div>

          <div className="p-4 text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums tracking-tight">
              99.8%
            </div>
            <div className="text-xs text-neutral-400 mt-1">5-Star Verified Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};
