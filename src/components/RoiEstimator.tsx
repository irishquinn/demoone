import React, { useState } from 'react';
import { Calculator, Clock, DollarSign, Check, ArrowRight, Sparkles } from 'lucide-react';

interface Props {
  onBookWithEstimate: (estimateSummary: string) => void;
}

export const RoiEstimator: React.FC<Props> = ({ onBookWithEstimate }) => {
  const [projectType, setProjectType] = useState<'theme' | 'woo' | 'headless' | 'speed' | 'migration'>('theme');
  const [templateCount, setTemplateCount] = useState<number>(8);
  const [hasApiSync, setHasApiSync] = useState<boolean>(true);
  const [hasMultilingual, setHasMultilingual] = useState<boolean>(false);
  const [needsSpeedGuarantee, setNeedsSpeedGuarantee] = useState<boolean>(true);

  // Calculation logic
  const calculateEstimate = () => {
    let basePrice = 6500;
    let baseWeeks = 3;

    if (projectType === 'woo') {
      basePrice = 9800;
      baseWeeks = 5;
    } else if (projectType === 'headless') {
      basePrice = 12500;
      baseWeeks = 6;
    } else if (projectType === 'speed') {
      basePrice = 3800;
      baseWeeks = 2;
    } else if (projectType === 'migration') {
      basePrice = 5500;
      baseWeeks = 3;
    }

    // Template scaling
    const templateAddon = Math.max(0, templateCount - 5) * 450;
    const templateWeeks = Math.floor(Math.max(0, templateCount - 5) / 5);

    let addonPrice = 0;
    let addonWeeks = 0;

    if (hasApiSync) {
      addonPrice += 2200;
      addonWeeks += 1;
    }
    if (hasMultilingual) {
      addonPrice += 1800;
      addonWeeks += 1;
    }
    if (needsSpeedGuarantee) {
      addonPrice += 950;
    }

    const totalMin = basePrice + templateAddon + addonPrice;
    const totalMax = Math.round(totalMin * 1.25);
    const totalWeeks = baseWeeks + templateWeeks + addonWeeks;

    return {
      priceRange: `$${totalMin.toLocaleString()} – $${totalMax.toLocaleString()}`,
      weeks: `${totalWeeks}–${totalWeeks + 1} Weeks`,
      summary: `${projectType.toUpperCase()} Project (~${totalWeeks} wks, ${totalMin}-${totalMax})`
    };
  };

  const estimate = calculateEstimate();

  return (
    <section id="calculator" className="py-24 bg-neutral-900/40 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
            Transparent Pricing & Scope
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Instant WordPress Project Estimator
          </h2>
          <p className="mt-3 text-base text-neutral-400 leading-relaxed">
            Get an instant, transparent ballpark for development timeline and investment. No hidden costs or surprise change orders.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Configurator Left */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
            {/* Project Type */}
            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                Select Project Scope
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'theme', label: 'Custom Block Theme' },
                  { id: 'woo', label: 'WooCommerce Store' },
                  { id: 'headless', label: 'Headless Next.js' },
                  { id: 'speed', label: 'Core Vitals Speed' },
                  { id: 'migration', label: 'Zero-Downtime Migration' }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id as any)}
                    className={`p-3 text-xs font-semibold rounded-lg border text-left transition-colors cursor-pointer ${
                      projectType === type.id
                        ? 'bg-amber-400/10 border-amber-400 text-amber-300'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Template Count Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Custom Page Templates & Unique Blocks
                </label>
                <span className="text-sm font-bold font-mono text-amber-400 tabular-nums">
                  {templateCount} layouts
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="25"
                value={templateCount}
                onChange={(e) => setTemplateCount(parseInt(e.target.value, 10))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-neutral-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>3 (Lean Marketing)</span>
                <span>12 (Comprehensive Brand)</span>
                <span>25+ (Enterprise Portal)</span>
              </div>
            </div>

            {/* Checkbox Options */}
            <div className="space-y-3 pt-2 border-t border-neutral-800">
              <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                Technical Capabilities
              </label>

              <div 
                onClick={() => setHasApiSync(!hasApiSync)}
                className="flex items-center justify-between p-3 rounded-lg border border-neutral-800 bg-neutral-900/60 cursor-pointer hover:bg-neutral-900"
              >
                <div>
                  <div className="text-xs font-semibold text-white">Custom API / CRM / ERP Integration</div>
                  <div className="text-[11px] text-neutral-400">Bidirectional webhook sync (Salesforce, Stripe, NetSuite)</div>
                </div>
                <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${hasApiSync ? 'bg-amber-400 border-amber-400 text-neutral-950' : 'border-neutral-700 bg-neutral-800'}`}>
                  {hasApiSync && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>

              <div 
                onClick={() => setHasMultilingual(!hasMultilingual)}
                className="flex items-center justify-between p-3 rounded-lg border border-neutral-800 bg-neutral-900/60 cursor-pointer hover:bg-neutral-900"
              >
                <div>
                  <div className="text-xs font-semibold text-white">Multisite or Multi-Language Network</div>
                  <div className="text-[11px] text-neutral-400">Localized subdomains or multi-region routing</div>
                </div>
                <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${hasMultilingual ? 'bg-amber-400 border-amber-400 text-neutral-950' : 'border-neutral-700 bg-neutral-800'}`}>
                  {hasMultilingual && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>

              <div 
                onClick={() => setNeedsSpeedGuarantee(!needsSpeedGuarantee)}
                className="flex items-center justify-between p-3 rounded-lg border border-neutral-800 bg-neutral-900/60 cursor-pointer hover:bg-neutral-900"
              >
                <div>
                  <div className="text-xs font-semibold text-white">Guaranteed 95+ Core Web Vitals SLA</div>
                  <div className="text-[11px] text-neutral-400">Sub-0.5s mobile LCP guarantee backed by service warranty</div>
                </div>
                <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${needsSpeedGuarantee ? 'bg-amber-400 border-amber-400 text-neutral-950' : 'border-neutral-700 bg-neutral-800'}`}>
                  {needsSpeedGuarantee && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>
            </div>
          </div>

          {/* Estimate Result Card Right */}
          <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-400/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl sticky top-24">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Calculated Production Estimate</span>
            </div>

            <div className="space-y-4 pt-2 border-b border-neutral-800 pb-6">
              <div>
                <div className="text-xs text-neutral-400">Estimated Investment Range</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums mt-1">
                  {estimate.priceRange}
                </div>
              </div>

              <div>
                <div className="text-xs text-neutral-400">Estimated Turnaround Timeline</div>
                <div className="text-xl font-bold text-amber-400 font-mono tracking-tight tabular-nums mt-0.5">
                  {estimate.weeks}
                </div>
              </div>
            </div>

            {/* Inclusions */}
            <div className="space-y-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% full source code and IP ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Dedicated staging environment with live client reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>60-day post-launch warranty & bug-fix coverage</span>
              </div>
            </div>

            <button
              onClick={() => onBookWithEstimate(estimate.summary)}
              className="w-full py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20"
            >
              <span>Schedule Call with This Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
