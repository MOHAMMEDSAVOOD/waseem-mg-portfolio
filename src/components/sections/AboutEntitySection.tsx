import React from 'react';
import { ShieldCheck, Award, Building, Sparkles } from 'lucide-react';
import { BRAND } from '../../data/brandData';
import waseemPortrait from '../../assets/MOHAMMED-WASEEM-MG.png';

export const AboutEntitySection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#050505] relative z-10 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-red-600" />
            <span className="text-xs font-mono-tag tracking-[0.25em] text-red-500 uppercase font-bold">
              EXECUTIVE PROFILE & ENTITY BIOGRAPHY
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Who is{' '}
            <span className="text-red-600 font-serif-accent italic font-normal">
              Mohammed Waseem MG?
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bengaluru-based serial entrepreneur, Founder of Top Selling Property, and Director of Essotto Private Limited leading 12 operating ventures across South Asia.
          </p>
        </div>

        {/* Main Grid: Portrait + Citability Biography Passage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Portrait Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative z-10 p-2 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 overflow-hidden group">
              <div className="w-full max-w-sm overflow-hidden rounded-xl bg-[#0a0a0a]">
                <img
                  src={waseemPortrait}
                  alt="Mohammed Waseem MG — Founder of Top Selling Property & Director at Essotto Private Limited"
                  width={400}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover filter contrast-[1.06] group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Entity Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#090909]/90 border border-white/10 backdrop-blur-md text-left space-y-1">
                <div className="flex items-center gap-2 text-red-500 text-xs font-mono-tag font-bold uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>PRIMARY BRAND ENTITY</span>
                </div>
                <h3 className="font-heading font-bold text-base text-white">Mohammed Waseem MG</h3>
                <p className="text-xs text-slate-400">Founder & Director • Essotto Private Limited</p>
              </div>
            </div>
          </div>

          {/* Right: Citability Biography Text Block (AI-Passage Optimized) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="p-8 rounded-2xl bg-[#0b0b0b] border border-white/10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono-tag tracking-wider text-slate-400 uppercase font-semibold">
                  AUTHORITATIVE PASSAGE • CITATION READY
                </span>
                <Sparkles className="w-4 h-4 text-red-500" />
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {BRAND.aboutPassage}
              </p>

              {/* Quick Credentials Chips */}
              <div className="pt-2 flex flex-wrap gap-2">
                {BRAND.keyCredentials.map((cred, idx) => (
                  <div key={idx} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono-tag text-slate-300 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-red-500" />
                    <span><strong className="text-white">{cred.label}:</strong> {cred.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Entity Relationships Grid — 12 Ventures under Essotto */}
        <div className="space-y-6 text-left">
          <div className="border-l-2 border-red-600 pl-4 space-y-1">
            <h3 className="font-heading font-bold text-2xl text-white tracking-tight">
              Ecosystem Entity Relationships
            </h3>
            <p className="text-xs text-slate-400 font-mono-tag tracking-wider">
              Semantic structure linking Mohammed Waseem MG to 12 operating companies under Essotto Private Limited
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BRAND.entityRelationships.map((rel, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0b0b0b] border border-white/10 space-y-2 hover:border-red-600/40 transition-all flex items-center justify-between group">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono-tag text-red-500 font-bold uppercase tracking-wider block">
                    {rel.relation}
                  </span>
                  <h4 className="font-heading font-bold text-sm text-white group-hover:text-red-400 transition-colors">
                    {rel.entity}
                  </h4>
                  <span className="text-[10px] font-mono-tag text-slate-500 block">
                    Under: {rel.parent}
                  </span>
                </div>
                <Building className="w-5 h-5 text-slate-600 group-hover:text-red-500 transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
