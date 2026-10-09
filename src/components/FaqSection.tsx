import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Do you use visual page builders like Elementor, Divi, or WP Bakery?',
      answer: 'Never. Page builders inject megabytes of nested DIVs, inline scripts, and render-blocking CSS that inevitably destroy Google Core Web Vitals. We engineer bespoke Full-Site Editing (FSE) themes and custom React Gutenberg blocks. Your marketing team gets full drag-and-drop editorial freedom with zero performance penalty.'
    },
    {
      question: 'Will our company own 100% of the code, or are we locked into your agency?',
      answer: 'You own 100% of the source code, custom plugins, database structures, and design assets from day one. We deliver clean, commented Git repositories with automated deployment scripts and full documentation. Any competent WordPress engineer can maintain your site without proprietary locks.'
    },
    {
      question: 'Can our non-technical marketing team easily edit pages and publish content?',
      answer: 'Yes. In fact, our custom block suites are much easier to use than bloated builders. We restrict the editor controls to your exact brand typography, color palettes, and spacing rules. Marketers cannot accidentally break layout responsiveness, and content changes take seconds.'
    },
    {
      question: 'How do you guarantee a sub-0.5s load time and 95+ Core Web Vitals score?',
      answer: 'Speed is baked into our foundational architecture, not slapped on as a caching plugin afterthought. We implement server-level Redis object caching, asynchronous asset loading, WebP/AVIF next-gen compression, clean database schema indexing, and strict Cloudflare edge caching.'
    },
    {
      question: 'How do you handle site migrations without losing SEO traffic or experiencing downtime?',
      answer: 'We build and test your complete new platform on a private staging replica. Before launch, we perform automated crawls with Screaming Frog to generate a 1:1 redirect map for every legacy URL, preserving your organic Google ranking equity. The final cutover takes seconds via DNS routing with zero downtime.'
    },
    {
      question: 'What is your warranty and post-launch SLA coverage?',
      answer: 'Every project comes with an ironclad 60-day post-launch warranty that covers all bug fixes, responsive adjustments, and performance verification. We also provide monthly maintenance SLAs covering automated off-site backups, WordPress core updates, security patches, and emergency 2-hour response times.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-neutral-900/40 relative border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
            Objection Handling & Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-neutral-400 leading-relaxed">
            Everything you need to know about our engineering standards, code ownership, and migration safety.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-neutral-800 rounded-xl bg-neutral-950 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <span className="text-base font-bold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-neutral-300 leading-relaxed border-t border-neutral-900 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
