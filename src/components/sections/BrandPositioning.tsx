import React from 'react';
import { Target, Compass, Layers, Zap, Award } from 'lucide-react';
import { BRAND } from '../../data/brandData';

export const BrandPositioning: React.FC = () => {
  return (
    <section className="py-24 bg-[#070707] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-slate-500" />
            <span className="text-xs font-mono-tag tracking-[0.25em] text-slate-400 uppercase">
              POSITIONING & GOVERNANCE
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Building Enterprises with{' '}
            <span className="text-red-600 font-serif-accent italic font-normal text-4xl sm:text-5xl">
              Purpose & Permanence.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Essotto builds connected business ecosystems where every venture strengthens the collective whole—solving real-world problems and creating sustainable economic value.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/10 space-y-4 text-left hover:border-red-600/40 transition-all">
            <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-600">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white">Brand Purpose</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {BRAND.purpose}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/10 space-y-4 text-left hover:border-red-600/40 transition-all">
            <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-600">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white">Long-Term Vision</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {BRAND.longTermVision}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/10 space-y-4 text-left hover:border-red-600/40 transition-all">
            <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-600">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white">Why Essotto Exists</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {BRAND.whyEssottoExists}
            </p>
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="space-y-6">
          <div className="text-left border-l-2 border-red-600 pl-4">
            <h3 className="font-heading font-bold text-2xl text-white tracking-tight">
              Core Principles
            </h3>
            <p className="text-xs text-slate-400 font-mono-tag tracking-wider mt-1">
              Guiding every venture launch and operational decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRAND.corePrinciples.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#0e0e0e] border border-white/10 space-y-3 text-left hover:border-red-600/30 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tag text-red-500 font-bold uppercase tracking-wider">
                    PRINCIPLE
                  </span>
                  <Zap className="w-4 h-4 text-slate-600" />
                </div>
                <h4 className="font-heading font-bold text-base text-white">{item.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophies Banner */}
        <div className="p-8 rounded-xl bg-[#0e0e0e] border border-red-600/30 space-y-6 text-left">
          <div className="flex items-center gap-2 text-red-600 text-xs font-mono-tag uppercase font-bold">
            <Award className="w-4 h-4" />
            <span>Foundational Philosophies</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <span className="text-[10px] font-mono-tag text-slate-400 block mb-1">BUSINESS PHILOSOPHY</span>
              <p className="text-xs font-semibold text-white leading-relaxed">
                "{BRAND.philosophies.business}"
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono-tag text-slate-400 block mb-1">LEADERSHIP PHILOSOPHY</span>
              <p className="text-xs font-semibold text-white leading-relaxed">
                "{BRAND.philosophies.leadership}"
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono-tag text-slate-400 block mb-1">DECISION-MAKING</span>
              <p className="text-xs font-semibold text-white leading-relaxed">
                "{BRAND.philosophies.decisionMaking}"
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
