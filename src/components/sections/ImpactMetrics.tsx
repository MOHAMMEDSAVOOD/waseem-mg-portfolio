import React from 'react';
import { Building, Users, Globe, Layers } from 'lucide-react';
import { BRAND } from '../../data/brandData';

export const ImpactMetrics: React.FC = () => {
  return (
    <section className="py-24 bg-[#070707] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-slate-500" />
            <span className="text-xs font-mono-tag tracking-[0.25em] text-slate-400 uppercase">
              ECOSYSTEM FOOTPRINT
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Ecosystem Anchors & <span className="text-red-600 font-serif-accent italic font-normal text-4xl sm:text-5xl">Key Pillars.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Essotto builds sustainable, connected business entities anchored in high-value industries across South India.
          </p>
        </div>

        {/* Impact Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/10 space-y-3 hover:border-red-600/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-600">
              <Building className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono-tag uppercase text-red-500 font-bold block">
              FLAGSHIP VENTURE
            </span>
            <h3 className="font-heading font-bold text-lg text-white">Top Selling Property</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Real estate marketing & advisory platform connecting developers, buyers, and channel partner networks.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/10 space-y-3 hover:border-red-600/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-600">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono-tag uppercase text-red-500 font-bold block">
              PARENT HOLDING GROUP
            </span>
            <h3 className="font-heading font-bold text-lg text-white">Essotto Private Limited</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Diversified parent group providing governance, capital allocation, and media infrastructure.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/10 space-y-3 hover:border-red-600/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-600">
              <Globe className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono-tag uppercase text-red-500 font-bold block">
              HEADQUARTERS
            </span>
            <h3 className="font-heading font-bold text-lg text-white">Bengaluru, India</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Headquartered in India's technology capital, driving real estate and tech innovation.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/10 space-y-3 hover:border-red-600/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-600">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono-tag uppercase text-red-500 font-bold block">
              5 OPERATING SECTORS
            </span>
            <h3 className="font-heading font-bold text-lg text-white">Connected Ecosystem</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Real Estate, Media & TV, Creator Hub, Hospitality & Venues, and AI Platform Labs.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
