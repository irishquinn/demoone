import React from 'react';
import { PortfolioItem } from '../types';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

interface Props {
  item: PortfolioItem;
  onClick: () => void;
  isHovered?: boolean;
}

export const PortfolioThumbnail300: React.FC<Props> = ({ item, onClick, isHovered }) => {
  // Generates dedicated 300x300 UI graphic mockups for each of the 9 projects
  const renderThumbnailContent = () => {
    switch (item.thumbnailSvg) {
      case 'health':
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-sky-950 to-neutral-950 p-4 flex flex-col justify-between text-left select-none relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />
            
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-sky-800/40 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-sky-400/80 tracking-wider">aura-health.io</span>
            </div>

            {/* Simulated UI Content */}
            <div className="space-y-2 py-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white tracking-tight">Patient Portal</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono">HIPAA</span>
              </div>
              <div className="bg-sky-950/60 border border-sky-500/20 rounded-lg p-2.5 space-y-1.5">
                <div className="flex justify-between text-[10px]">
                  <span className="text-slate-400">Next Intake</span>
                  <span className="text-sky-400 font-mono">Today 14:00</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-400 w-3/4 rounded-full" />
                </div>
                <div className="flex justify-between items-center pt-1 text-[9px] text-slate-400">
                  <span>Vitals Telemetry</span>
                  <span className="text-emerald-400 font-mono">0.41s LCP</span>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="border-t border-sky-800/30 pt-2 flex items-center justify-between">
              <span className="text-[10px] font-medium text-slate-300">Healthcare · Portal</span>
              <span className="text-[10px] font-mono text-sky-400">99/100 CWV</span>
            </div>
          </div>
        );

      case 'fintech':
        return (
          <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-amber-950/40 to-neutral-950 p-4 flex flex-col justify-between text-left select-none relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-amber-900/40 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-amber-400/80 tracking-wider">finovacapital.com</span>
            </div>

            <div className="space-y-2 py-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white tracking-tight">Fund LP Telemetry</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">SOC-2</span>
              </div>
              <div className="bg-neutral-900/80 border border-amber-500/20 rounded-lg p-2.5 space-y-1.5">
                <div className="flex justify-between text-[10px]">
                  <span className="text-slate-400">Fund IV Capital</span>
                  <span className="text-amber-400 font-mono tabular-nums">$1.24B AUM</span>
                </div>
                {/* Mini bar chart */}
                <div className="flex items-end gap-1 h-6 pt-1">
                  <div className="w-full bg-amber-500/30 h-2 rounded-t" />
                  <div className="w-full bg-amber-500/50 h-3 rounded-t" />
                  <div className="w-full bg-amber-500/70 h-4.5 rounded-t" />
                  <div className="w-full bg-amber-400 h-6 rounded-t" />
                </div>
              </div>
            </div>

            <div className="border-t border-amber-800/30 pt-2 flex items-center justify-between">
              <span className="text-[10px] font-medium text-slate-300">Private Equity · Portal</span>
              <span className="text-[10px] font-mono text-amber-400">+$42M Inbound</span>
            </div>
          </div>
        );

      case 'auto':
        return (
          <div className="w-full h-full bg-gradient-to-br from-neutral-950 via-zinc-900 to-rose-950/60 p-4 flex flex-col justify-between text-left select-none relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-rose-600/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-rose-900/40 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-rose-400/80 tracking-wider">velocita-motors.com</span>
            </div>

            <div className="space-y-2 py-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white tracking-tight">Velocita Hyper-GT</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono">3D WebGL</span>
              </div>
              <div className="bg-neutral-900/90 border border-rose-500/20 rounded-lg p-2.5 relative overflow-hidden">
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-slate-400">0-100 km/h</span>
                  <span className="text-rose-400 font-mono font-bold">2.1s</span>
                </div>
                <div className="flex items-center justify-center py-1">
                  <div className="w-28 h-7 border border-rose-500/40 rounded flex items-center justify-center bg-rose-950/40 text-[9px] text-rose-200">
                    Interactive 3D Config
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-rose-800/30 pt-2 flex items-center justify-between">
              <span className="text-[10px] font-medium text-slate-300">Automotive · WebGL</span>
              <span className="text-[10px] font-mono text-rose-400">98 PageSpeed</span>
            </div>
          </div>
        );

      case 'furniture':
        return (
          <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-stone-900 to-emerald-950/50 p-4 flex flex-col justify-between text-left select-none relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-emerald-900/40 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-emerald-400/80 tracking-wider">nordicform.com</span>
            </div>

            <div className="space-y-2 py-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white tracking-tight">WooCommerce 45k SKUs</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">140ms</span>
              </div>
              <div className="bg-neutral-900/90 border border-emerald-500/20 rounded-lg p-2.5 space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span className="text-slate-400">Aalborg Oak Lounge</span>
                  <span className="text-emerald-400 font-mono tabular-nums">$1,840</span>
                </div>
                <div className="flex gap-1.5 pt-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-700/80 border border-amber-600" />
                  <div className="w-3.5 h-3.5 rounded-full bg-stone-500/80 border border-stone-400" />
                  <div className="w-3.5 h-3.5 rounded-full bg-neutral-900 border border-neutral-700" />
                </div>
              </div>
            </div>

            <div className="border-t border-emerald-800/30 pt-2 flex items-center justify-between">
              <span className="text-[10px] font-medium text-slate-300">WooCommerce · D2C</span>
              <span className="text-[10px] font-mono text-emerald-400">+39% Checkout</span>
            </div>
          </div>
        );

      case 'cloud':
        return (
          <div className="w-full h-full bg-gradient-to-br from-neutral-950 via-slate-900 to-indigo-950 p-4 flex flex-col justify-between text-left select-none relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-indigo-900/40 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-indigo-400/80 tracking-wider">stratumcloud.dev</span>
            </div>

            <div className="space-y-2 py-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white tracking-tight">WP Multisite Hub</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">14 Regions</span>
              </div>
              <div className="bg-neutral-900/90 border border-indigo-500/20 rounded-lg p-2.5 font-mono text-[9px] text-indigo-300 space-y-1">
                <div className="text-slate-400">$ wp multisite sync</div>
                <div className="text-emerald-400">✓ us-east · eu-central · apac</div>
                <div className="text-slate-400">latency: 18ms Edge Cache</div>
              </div>
            </div>

            <div className="border-t border-indigo-800/30 pt-2 flex items-center justify-between">
              <span className="text-[10px] font-medium text-slate-300">Multisite · DevDocs</span>
              <span className="text-[10px] font-mono text-indigo-400">100% CWV Pass</span>
            </div>
          </div>
        );

      case 'coffee':
        return (
          <div className="w-full h-full bg-gradient-to-br from-neutral-950 via-neutral-900 to-amber-950/70 p-4 flex flex-col justify-between text-left select-none relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-amber-600/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-amber-900/40 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-amber-400/80 tracking-wider">artisanroast.com</span>
            </div>

            <div className="space-y-2 py-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white tracking-tight">Recurring Subscriptions</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">Custom Box</span>
              </div>
              <div className="bg-neutral-900/90 border border-amber-500/20 rounded-lg p-2.5 space-y-1.5">
                <div className="flex justify-between text-[10px]">
                  <span className="text-slate-400">Ethiopia Guji Washed</span>
                  <span className="text-amber-400 font-mono">Every 2 Wks</span>
                </div>
                <div className="flex gap-1 text-[8px] text-amber-200">
                  <span className="bg-amber-900/40 px-1 py-0.5 rounded">Filter Grind</span>
                  <span className="bg-amber-900/40 px-1 py-0.5 rounded">250g × 2</span>
                </div>
              </div>
            </div>

            <div className="border-t border-amber-800/30 pt-2 flex items-center justify-between">
              <span className="text-[10px] font-medium text-slate-300">Subscriptions · D2C</span>
              <span className="text-[10px] font-mono text-amber-400">+310% MRR</span>
            </div>
          </div>
        );

      case 'architecture':
        return (
          <div className="w-full h-full bg-gradient-to-br from-neutral-950 via-zinc-900 to-purple-950/60 p-4 flex flex-col justify-between text-left select-none relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-purple-900/40 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-purple-400/80 tracking-wider">kineticarch.com</span>
            </div>

            <div className="space-y-2 py-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white tracking-tight">Kinetic Spatial Gallery</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">FSE Block</span>
              </div>
              <div className="bg-neutral-900/90 border border-purple-500/20 rounded-lg p-2.5 space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span className="text-slate-400">Pavilion VII Project</span>
                  <span className="text-purple-300 font-mono">Awwwards</span>
                </div>
                <div className="w-full h-4 border border-dashed border-purple-500/30 rounded flex items-center justify-center text-[8px] text-slate-400">
                  Vector Blueprint Grid Overlay
                </div>
              </div>
            </div>

            <div className="border-t border-purple-800/30 pt-2 flex items-center justify-between">
              <span className="text-[10px] font-medium text-slate-300">Portfolio · Editorial</span>
              <span className="text-[10px] font-mono text-purple-400">840 KB Weight</span>
            </div>
          </div>
        );

      case 'organics':
        return (
          <div className="w-full h-full bg-gradient-to-br from-neutral-950 via-neutral-900 to-emerald-950 p-4 flex flex-col justify-between text-left select-none relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-emerald-600/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-emerald-900/40 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-emerald-400/80 tracking-wider">verdantorganics.com</span>
            </div>

            <div className="space-y-2 py-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white tracking-tight">B2B Wholesale / B2C</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">Zip Route</span>
              </div>
              <div className="bg-neutral-900/90 border border-emerald-500/20 rounded-lg p-2.5 space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span className="text-slate-400">Wholesale Tier Active</span>
                  <span className="text-emerald-400 font-mono">Tier 2 -25%</span>
                </div>
                <div className="text-[9px] text-slate-400">Cutoff: 18:00 for Next-Day Delivery</div>
              </div>
            </div>

            <div className="border-t border-emerald-800/30 pt-2 flex items-center justify-between">
              <span className="text-[10px] font-medium text-slate-300">WooCommerce · B2B</span>
              <span className="text-[10px] font-mono text-emerald-400">0.38s LCP</span>
            </div>
          </div>
        );

      case 'media':
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-neutral-950 via-slate-900 to-cyan-950 p-4 flex flex-col justify-between text-left select-none relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-cyan-900/40 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-cyan-400/80 tracking-wider">pulsemedia.org</span>
            </div>

            <div className="space-y-2 py-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white tracking-tight">High-Concurrency News</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">15M Visits</span>
              </div>
              <div className="bg-neutral-900/90 border border-cyan-500/20 rounded-lg p-2.5 space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span className="text-slate-400">Edge Cache Hit Ratio</span>
                  <span className="text-cyan-400 font-mono font-bold">99.4%</span>
                </div>
                <div className="text-[9px] text-slate-400 font-mono">CLS: 0.002 (Zero Shift)</div>
              </div>
            </div>

            <div className="border-t border-cyan-800/30 pt-2 flex items-center justify-between">
              <span className="text-[10px] font-medium text-slate-300">Publishing · Enterprise</span>
              <span className="text-[10px] font-mono text-cyan-400">180ms TTFB</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className="group relative w-[300px] h-[300px] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 cursor-pointer shadow-lg transition-all duration-300 hover:border-neutral-600 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 flex-shrink-0"
    >
      {/* 300x300 image / mockup container */}
      <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
        {renderThumbnailContent()}
      </div>

      {/* Interactive hover overlay */}
      <div className="absolute inset-0 bg-neutral-950/85 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-left">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-amber-400 tracking-wide uppercase">{item.industry}</span>
            <span className="text-xs text-neutral-400">{item.year}</span>
          </div>
          <h4 className="mt-2 text-base font-bold text-white tracking-tight leading-snug">
            {item.title}
          </h4>
          <p className="mt-1.5 text-xs text-neutral-300 line-clamp-2 leading-relaxed">
            {item.tagline}
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-2 mb-3 pt-2 border-t border-neutral-800">
            <div>
              <div className="text-[10px] text-neutral-400">Primary Metric</div>
              <div className="text-xs font-bold font-mono text-amber-400 tabular-nums">
                {item.metrics[0].value}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-400">CWV Speed</div>
              <div className="text-xs font-bold font-mono text-emerald-400 tabular-nums">
                {item.metrics[0].label === 'Page Load Speed' ? item.metrics[0].value : '0.38s LCP'}
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-white group-hover:text-amber-400 transition-colors">
            <span>Open Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
