import React from 'react';
import { PortfolioItem } from '../types';
import { portfolioItems } from '../data/portfolioData';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Quote, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Calendar, 
  Building2, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { PortfolioThumbnail300 } from './PortfolioThumbnail300';

interface Props {
  item: PortfolioItem;
  onBack: () => void;
  onSelectItem: (item: PortfolioItem) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const PortfolioDetailPage: React.FC<Props> = ({ 
  item, 
  onBack, 
  onSelectItem,
  onOpenBooking 
}) => {
  // Find current index to provide next/previous navigation
  const currentIndex = portfolioItems.findIndex((p) => p.id === item.id);
  const prevItem = portfolioItems[(currentIndex - 1 + portfolioItems.length) % portfolioItems.length];
  const nextItem = portfolioItems[(currentIndex + 1) % portfolioItems.length];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800 mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Sales Overview</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectItem(prevItem)}
              className="p-2 rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors cursor-pointer"
              title={`Previous: ${prevItem.title}`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-neutral-400 tabular-nums">
              {currentIndex + 1} of {portfolioItems.length}
            </span>
            <button
              onClick={() => onSelectItem(nextItem)}
              className="p-2 rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors cursor-pointer"
              title={`Next: ${nextItem.title}`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Case Study Header */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-amber-400 uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              {item.client}
            </span>
            <span className="text-neutral-600">/</span>
            <span>{item.industry}</span>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {item.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {item.headline}
          </h1>

          <p className="text-lg text-neutral-300 max-w-3xl leading-relaxed">
            {item.tagline}
          </p>
        </div>

        {/* Visual Showcase + Key Metrics Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Left: 300x300 Graphic Hero Mockup Container */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="p-3 bg-neutral-900/90 rounded-2xl border border-neutral-800 shadow-2xl">
              <PortfolioThumbnail300 item={item} onClick={() => {}} />
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Production URL: {item.liveUrlMock}</span>
            </div>
          </div>

          {/* Right: Quantified Impact Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              Quantified Production Outcomes
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {item.metrics.map((m, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/80 space-y-1"
                >
                  <div className="text-xs text-neutral-400 font-medium">{m.label}</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tracking-tight tabular-nums">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-neutral-400 leading-snug">{m.context}</div>
                </div>
              ))}
            </div>

            {/* Quick Action Bar */}
            <div className="p-5 rounded-xl border border-amber-400/20 bg-amber-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white">Need a build of this caliber?</div>
                <div className="text-xs text-neutral-300">We replicate these Core Web Vitals standards for your platform.</div>
              </div>
              <button
                onClick={() => onOpenBooking(`Custom Build for ${item.title}`)}
                className="px-4 py-2 text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-neutral-950 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                Schedule Scope Call
              </button>
            </div>
          </div>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-4">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
              <Zap className="w-4 h-4" />
              <span>The Architectural Challenge</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {item.challenge}
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Vektor Engineered Solution</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {item.solution}
            </p>
          </div>
        </div>

        {/* Architecture & Tech Stack */}
        <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30 mb-16 space-y-6">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Technical Architecture & Modules</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {item.architecture.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-800/80 text-xs font-mono text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="border-t border-neutral-800 pt-6">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-4">
              Core Deliverables Delivered
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {item.deliverablesList.map((d, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Quote / Testimonial */}
        <div className="p-8 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-900/60 to-neutral-950 mb-16 relative">
          <Quote className="w-10 h-10 text-amber-400/20 absolute top-6 right-6" />
          <p className="text-base sm:text-lg text-neutral-200 italic leading-relaxed mb-6 max-w-3xl">
            "{item.clientQuote.quote}"
          </p>
          <div>
            <div className="text-sm font-bold text-white">{item.clientQuote.author}</div>
            <div className="text-xs text-neutral-400">
              {item.clientQuote.role} · {item.clientQuote.company}
            </div>
          </div>
        </div>

        {/* Bottom Pagination & Call to Action */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={() => onSelectItem(nextItem)}
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Next Case Study:</span>
            <span className="font-semibold text-amber-400">{nextItem.title}</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="px-4 py-2.5 rounded-lg border border-neutral-700 bg-neutral-900 text-xs font-medium text-neutral-200 hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Back to Sales Page
            </button>
            <button
              onClick={() => onOpenBooking(`Project: ${item.title}`)}
              className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold transition-colors cursor-pointer shadow-md"
            >
              Start Similar Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
