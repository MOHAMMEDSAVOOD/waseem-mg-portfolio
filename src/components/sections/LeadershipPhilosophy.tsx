import React from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../../data/brandData';

export const LeadershipPhilosophy: React.FC = () => {
  return (
    <section className="py-24 bg-[#070707] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-slate-500" />
            <span className="text-xs font-mono-tag tracking-[0.25em] text-slate-400 uppercase">
              LEADERSHIP & CULTURE
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Building Systems, Teams & <span className="text-red-600 font-serif-accent italic font-normal text-4xl sm:text-5xl">Future Leaders.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            "{BRAND.philosophies.leadership}"
          </p>
        </div>

        {/* Culture & Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Left: Decision Framework */}
          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/10 space-y-6">
            <div className="flex items-center gap-2 text-red-600 text-xs font-mono-tag uppercase font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>THE EXECUTIVE DECISION FRAMEWORK</span>
            </div>

            <h3 className="font-heading font-bold text-xl text-white">
              Evaluating Trade-Offs for Multi-Decadal Scale
            </h3>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 space-y-1">
                <span className="font-mono-tag text-red-500 font-bold block">1. LONG-TERM ALIGNMENT TEST</span>
                <p>Does this decision strengthen the long-term vision or merely optimize for short-term quarterly gains?</p>
              </div>

              <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 space-y-1">
                <span className="font-mono-tag text-red-500 font-bold block">2. SYSTEMIC CODIFICATION</span>
                <p>Can this operational breakthrough be automated and codified into a repeatable system for the team?</p>
              </div>

              <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 space-y-1">
                <span className="font-mono-tag text-red-500 font-bold block">3. ECOSYSTEM SYNERGY</span>
                <p>Does this agreement benefit partners, customers, and other entities within Essotto simultaneously?</p>
              </div>
            </div>
          </div>

          {/* Right: Company Culture Pillars */}
          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/10 space-y-6">
            <div className="flex items-center gap-2 text-red-600 text-xs font-mono-tag uppercase font-bold">
              <Award className="w-4 h-4" />
              <span>ESSOTTO CULTURE PILLARS</span>
            </div>

            <h3 className="font-heading font-bold text-xl text-white">
              6 Cultural Pillars of Execution
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {BRAND.companyCulture.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2 text-xs font-semibold text-white"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-red-950/20 border border-red-600/20 text-xs text-slate-300">
              <span className="font-bold text-white block mb-1">Empowering Future Leaders</span>
              <span>We provide young executives and engineering teams with high autonomy, encouraging ownership and rapid decision-making.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
