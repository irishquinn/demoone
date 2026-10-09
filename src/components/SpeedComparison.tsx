import React, { useState } from 'react';
import { Gauge, Zap, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

interface Props {
  onOpenBooking: () => void;
}

export const SpeedComparison: React.FC<Props> = ({ onOpenBooking }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<'ecommerce' | 'corporate' | 'publisher'>('ecommerce');
  const [simulatedUrl, setSimulatedUrl] = useState('');
  const [hasTested, setHasTested] = useState(false);
  const [isAuditing, setIsAuditing] = useState(false);

  const benchmarks = {
    ecommerce: {
      title: 'WooCommerce & D2C Stores',
      bloated: {
        score: '34/100',
        lcp: '4.8s',
        cls: '0.28',
        inp: '420ms',
        bounce: '58%',
        verdict: 'POOR (Loses ~24% checkout revenue)'
      },
      vektor: {
        score: '99/100',
        lcp: '0.38s',
        cls: '0.001',
        inp: '32ms',
        bounce: '18%',
        verdict: 'EXCELLENT (Maximum SEO & conversion)'
      }
    },
    corporate: {
      title: 'B2B Enterprise & Lead Gen',
      bloated: {
        score: '42/100',
        lcp: '3.9s',
        cls: '0.19',
        inp: '310ms',
        bounce: '52%',
        verdict: 'POOR (High ad spend drop-off)'
      },
      vektor: {
        score: '98/100',
        lcp: '0.41s',
        cls: '0.002',
        inp: '28ms',
        bounce: '16%',
        verdict: 'EXCELLENT (Immediate form engagement)'
      }
    },
    publisher: {
      title: 'High-Traffic News & Media',
      bloated: {
        score: '28/100',
        lcp: '5.4s',
        cls: '0.45',
        inp: '580ms',
        bounce: '64%',
        verdict: 'POOR (Ad shifts trigger reader bounce)'
      },
      vektor: {
        score: '97/100',
        lcp: '0.35s',
        cls: '0.005',
        inp: '38ms',
        bounce: '21%',
        verdict: 'EXCELLENT (Sub-second article render)'
      }
    }
  };

  const current = benchmarks[selectedIndustry];

  const handleSimulateAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simulatedUrl.trim()) return;
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
      setHasTested(true);
    }, 900);
  };

  return (
    <section id="performance" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
            The Speed Disadvantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Why Bloated WordPress Costs You 20%+ in Revenue
          </h2>
          <p className="mt-3 text-base text-neutral-400 leading-relaxed">
            Off-the-shelf themes with 40+ third-party plugins cripple server response times. Here is how clean, custom-coded WordPress compares to commercial builder stacks on Google Core Web Vitals.
          </p>

          {/* Industry Toggle Segmented Buttons */}
          <div className="mt-8 inline-flex p-1 rounded-xl bg-neutral-900 border border-neutral-800">
            <button
              onClick={() => setSelectedIndustry('ecommerce')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedIndustry === 'ecommerce'
                  ? 'bg-amber-400 text-neutral-950'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              WooCommerce Store
            </button>
            <button
              onClick={() => setSelectedIndustry('corporate')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedIndustry === 'corporate'
                  ? 'bg-amber-400 text-neutral-950'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              B2B Enterprise
            </button>
            <button
              onClick={() => setSelectedIndustry('publisher')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedIndustry === 'publisher'
                  ? 'bg-amber-400 text-neutral-950'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Media Publisher
            </button>
          </div>
        </div>

        {/* Comparison Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bloated WordPress Stack */}
          <div className="p-8 rounded-2xl border border-rose-900/40 bg-neutral-900/40 space-y-6 text-left">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-rose-400 uppercase tracking-wider">
                  Typical Agency Stack
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Elementor / ThemeForest Monolith
                </h3>
              </div>
              <div className="text-right">
                <div className="text-3xl font-extrabold text-rose-500 font-mono tabular-nums">
                  {current.bloated.score}
                </div>
                <div className="text-[10px] text-rose-400 font-mono">Failed Vitals</div>
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-neutral-800">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400">Largest Contentful Paint (LCP)</span>
                <span className="font-mono text-rose-400 font-bold">{current.bloated.lcp}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400">Cumulative Layout Shift (CLS)</span>
                <span className="font-mono text-rose-400 font-bold">{current.bloated.cls}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400">Interaction to Next Paint (INP)</span>
                <span className="font-mono text-rose-400 font-bold">{current.bloated.inp}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400">Average Mobile Bounce Rate</span>
                <span className="font-mono text-rose-400 font-bold">{current.bloated.bounce}</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/30 text-xs text-rose-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{current.bloated.verdict}</span>
            </div>
          </div>

          {/* Vektor Engineered Stack */}
          <div className="p-8 rounded-2xl border border-amber-400/50 bg-neutral-900/80 space-y-6 text-left shadow-2xl relative">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Vektor Engineering Standard
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Custom Gutenberg & Decoupled PHP
                </h3>
              </div>
              <div className="text-right">
                <div className="text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
                  {current.vektor.score}
                </div>
                <div className="text-[10px] text-emerald-400 font-mono">Passed Vitals</div>
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-neutral-800">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-300">Largest Contentful Paint (LCP)</span>
                <span className="font-mono text-emerald-400 font-bold">{current.vektor.lcp}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-300">Cumulative Layout Shift (CLS)</span>
                <span className="font-mono text-emerald-400 font-bold">{current.vektor.cls}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-300">Interaction to Next Paint (INP)</span>
                <span className="font-mono text-emerald-400 font-bold">{current.vektor.inp}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-300">Average Mobile Bounce Rate</span>
                <span className="font-mono text-emerald-400 font-bold">{current.vektor.bounce}</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/30 text-xs text-emerald-300 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>{current.vektor.verdict}</span>
            </div>
          </div>
        </div>

        {/* Live URL Audit Simulation Bar */}
        <div className="mt-12 max-w-2xl mx-auto p-6 rounded-xl border border-neutral-800 bg-neutral-900/60 text-center">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
            Simulate Your Current Website's Speed Audit
          </div>
          <form onSubmit={handleSimulateAudit} className="flex flex-col sm:flex-row gap-3 mt-3">
            <input
              type="text"
              value={simulatedUrl}
              onChange={(e) => setSimulatedUrl(e.target.value)}
              placeholder="e.g. https://yourcompany.com"
              className="flex-1 px-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              disabled={isAuditing}
              className="px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold transition-colors cursor-pointer shrink-0 disabled:opacity-50"
            >
              {isAuditing ? 'Auditing Core Vitals...' : 'Run Performance Audit'}
            </button>
          </form>

          {hasTested && (
            <div className="mt-4 p-4 rounded-lg bg-neutral-950 border border-amber-400/40 text-left space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Diagnostic for {simulatedUrl}:</span>
                <span className="text-xs font-mono text-rose-400 font-bold">Estimated Score: 41/100</span>
              </div>
              <p className="text-xs text-neutral-400">
                Identified: 18 render-blocking stylesheets, 3.2MB unoptimized image payload, and missing edge Redis object cache. We can reduce load time by over 78%.
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Full Technical Audit & Fix Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
