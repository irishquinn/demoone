import React, { useState } from 'react';
import { topWordPressServices } from '../data/servicesData';
import { ServiceItem } from '../types';
import { 
  Check, 
  ArrowRight, 
  Search, 
  Zap, 
  Layers, 
  ShieldCheck, 
  Gauge, 
  ShoppingCart, 
  RefreshCw 
} from 'lucide-react';

interface Props {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<Props> = ({ onSelectServiceForBooking }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(topWordPressServices[0].id);

  const activeService = topWordPressServices.find((s) => s.id === selectedServiceId) || topWordPressServices[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'custom-theme-plugin':
        return <Layers className="w-5 h-5 text-amber-400" />;
      case 'woocommerce-enterprise':
        return <ShoppingCart className="w-5 h-5 text-amber-400" />;
      case 'speed-optimization':
        return <Gauge className="w-5 h-5 text-amber-400" />;
      case 'headless-wordpress':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'enterprise-migration':
        return <RefreshCw className="w-5 h-5 text-amber-400" />;
      case 'security-hardening':
      default:
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-900/40 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
            Top Searched Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineered WordPress Services
          </h2>
          <p className="mt-3 text-base text-neutral-400 leading-relaxed">
            These are the 6 highest-demand WordPress engineering specializations worldwide. We execute each with strict adherence to VIP code standards, zero third-party bloat, and guaranteed performance.
          </p>
        </div>

        {/* 6 Services Grid / Interactive Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 6 Services Directory */}
          <div className="lg:col-span-5 space-y-3">
            {topWordPressServices.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedServiceId(service.id);
                    }
                  }}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-800/90 border-amber-400/80 shadow-md ring-1 ring-amber-400/30'
                      : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono text-amber-400 font-bold">
                        {service.number}.
                      </span>
                      <span className="text-sm font-bold text-white tracking-tight">
                        {service.title}
                      </span>
                    </div>
                    {getServiceIcon(service.id)}
                  </div>

                  <p className="text-xs text-neutral-400 line-clamp-1 pl-6">
                    {service.tagline}
                  </p>

                  <div className="mt-2 pl-6 flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                    <Search className="w-3 h-3 text-amber-400/70" />
                    <span>Search intent: "{service.searchQuery}"</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Deep-Dive for Selected Service */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800/80 pb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                  <span>Service {activeService.number}</span>
                  <span>·</span>
                  <span className="text-neutral-400">{activeService.monthlySearches}</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {activeService.title}
                </h3>
              </div>

              {/* Quantified Impact Badge */}
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-right shrink-0">
                <div className="text-2xl font-extrabold text-amber-400 font-mono tabular-nums">
                  {activeService.impactMetric.value}
                </div>
                <div className="text-[10px] text-neutral-400 max-w-[130px] leading-tight">
                  {activeService.impactMetric.label}
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {activeService.description}
            </p>

            {/* Key Outcomes */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Key Strategic Benefits
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeService.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Concrete Deliverables */}
            <div className="border-t border-neutral-800/80 pt-6">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                What We Deliver
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <span className="text-amber-400 font-mono text-[10px] mt-0.5">✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Action */}
            <div className="border-t border-neutral-800/80 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {activeService.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelectServiceForBooking(activeService.title)}
                className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>Scope {activeService.title.split(' ')[0]} Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
