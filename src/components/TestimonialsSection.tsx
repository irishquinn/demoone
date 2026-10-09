import React from 'react';
import { Quote, Star, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Jenkins',
      role: 'Chief Technology Officer',
      company: 'Aura Health Inc.',
      metric: '+184%',
      metricLabel: 'Telehealth Intake Conversion in 90 Days',
      quote: 'We spent eighteen months fighting page speed issues and broken mobile checkout on our previous agency build. Vektor restructured our entire WordPress stack into a headless Next.js system in six weeks. Patient bookings nearly tripled immediately.',
      tag: 'Headless WordPress & Telehealth'
    },
    {
      name: 'Astrid Lindqvist',
      role: 'VP of E-Commerce',
      company: 'Nordic Form Living',
      metric: '140ms',
      metricLabel: 'Catalog Search Across 45,000 SKUs',
      quote: 'During our Black Friday promotion, our WooCommerce store handled 12,000 concurrent shopping carts with zero downtime and sub-second checkout. Our conversion rate increased by 39.4% year-over-year. Vektor is the best technical team we have ever partnered with.',
      tag: 'Enterprise WooCommerce Scaling'
    },
    {
      name: 'Marcus Vance',
      role: 'Managing Partner',
      company: 'Finova Capital Group',
      metric: 'A+ (100%)',
      metricLabel: 'Passed SOC-2 Security & Penetration Audit',
      quote: 'In institutional finance, security and speed are non-negotiable. Vektor eliminated our previous agency\'s security vulnerabilities, purged bloated plugins, and engineered bespoke Gutenberg blocks that let our IR team update quarterly financial metrics in seconds.',
      tag: 'Custom Blocks & Security Hardening'
    }
  ];

  return (
    <section className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
            Verified Client Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Tested and Proven by High-Growth Teams
          </h2>
          <p className="mt-3 text-base text-neutral-400 leading-relaxed">
            Real feedback from technical leaders and brand directors who migrated from bloated commercial themes to Vektor engineered WordPress architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400">{t.tag}</span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/80">
                  <div className="text-2xl font-extrabold text-amber-400 font-mono tracking-tight tabular-nums">
                    {t.metric}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">{t.metricLabel}</div>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-neutral-400">{t.role} · {t.company}</div>
                </div>
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
