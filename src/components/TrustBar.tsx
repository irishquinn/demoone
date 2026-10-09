import React from 'react';
import { ShieldCheck, Zap, Award, CheckCircle } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const credentials = [
    {
      title: 'WordPress VIP Standard',
      desc: 'Strict VIP code linting & architecture'
    },
    {
      title: 'Core Web Vitals 95+',
      desc: 'Sub-0.5s mobile LCP performance guarantee'
    },
    {
      title: 'Enterprise Codeable Elite',
      desc: 'Top 1% vetted WordPress architects worldwide'
    },
    {
      title: '100% Code Ownership',
      desc: 'Zero proprietary lock-in or recurring builder fees'
    }
  ];

  return (
    <div className="border-y border-neutral-900 bg-neutral-950/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {credentials.map((cred, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-400 shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-tight">
                  {cred.title}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  {cred.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
