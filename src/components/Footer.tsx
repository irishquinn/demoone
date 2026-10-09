import React from 'react';

interface Props {
  onOpenBooking: () => void;
}

export const Footer: React.FC<Props> = ({ onOpenBooking }) => {
  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 py-16 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="text-xl font-extrabold tracking-tight text-white inline-block">
              Vektor<span className="text-amber-400 font-mono">.Press</span>
            </a>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Vektor Press is a high-performance WordPress engineering agency. We architect custom Gutenberg block themes, scalable WooCommerce storefronts, and headless Next.js platforms with guaranteed Core Web Vitals speed.
            </p>
            <div className="text-xs text-neutral-300">
              San Francisco · London · Zurich
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white">
              Capabilities
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Custom Themes & Plugins</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">WooCommerce Enterprise</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Core Web Vitals Optimization</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Headless WP & Next.js</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Multisite & Cloud Migrations</a></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white">
              Start a Conversation
            </div>
            <p className="text-xs text-neutral-400">
              Ready to replace your slow, bloated WordPress site with a sub-second revenue engine?
            </p>
            <div>
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-amber-400 font-semibold transition-colors cursor-pointer"
              >
                Schedule Architecture Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Quiet copyright & legal line */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div>
            © {new Date().getFullYear()} Vektor Press Engineering Studio. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span>WordPress is a registered trademark of the WordPress Foundation.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
