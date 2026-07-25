import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../../data/brandData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First FAQ open by default

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#070707] relative z-10 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-red-600" />
            <span className="text-xs font-mono-tag tracking-[0.25em] text-red-500 uppercase font-bold">
              FREQUENTLY ASKED QUESTIONS • FAQ
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Everything You Need to Know About{' '}
            <span className="text-red-600 font-serif-accent italic font-normal">
              Mohammed Waseem MG & Essotto
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Clear, authoritative answers about Mohammed Waseem MG, Top Selling Property, Essotto Private Limited, and our 12 connected ventures in Whitefield, Bengaluru.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="max-w-4xl mx-auto space-y-4 text-left">
          {BRAND.faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#0d0d0d] border-red-600/50 shadow-[0_0_30px_rgba(220,38,38,0.15)]'
                    : 'bg-[#0a0a0a] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-red-600 text-white' : 'bg-white/5 text-slate-400'
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-red-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-white/5 font-sans animate-fadeIn">
                    <p className="pl-11">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Schema Sync Badge */}
        <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10 max-w-xl mx-auto flex items-center justify-center gap-3 text-xs font-mono-tag text-slate-400">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Synchronized with <strong>Schema.org FAQPage</strong> for Zero-Click Search Snippets</span>
        </div>

      </div>
    </section>
  );
};
