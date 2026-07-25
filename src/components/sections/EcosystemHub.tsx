import React, { useState } from 'react';
import { Network, Building2, Tv, Sparkles, Hotel, Cpu, ArrowUpRight } from 'lucide-react';
import { COMPANIES } from '../../data/ecosystemData';
import type { Company } from '../../types/ecosystem';

interface EcosystemHubProps {
  onSelectCompany: (company: Company) => void;
}

export const EcosystemHub: React.FC<EcosystemHubProps> = ({ onSelectCompany }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryTabs = [
    { id: 'all', label: 'ALL', icon: <Network className="w-3.5 h-3.5" /> },
    { id: 'real-estate', label: 'REAL ESTATE', icon: <Building2 className="w-3.5 h-3.5" /> },
    { id: 'media', label: 'MEDIA & TV', icon: <Tv className="w-3.5 h-3.5" /> },
    { id: 'creator', label: 'CREATOR HUB', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'hospitality', label: 'HOSPITALITY', icon: <Hotel className="w-3.5 h-3.5" /> },
    { id: 'future', label: 'AI LABS', icon: <Cpu className="w-3.5 h-3.5" /> },
  ];

  const filteredCompanies =
    selectedCategory === 'all'
      ? COMPANIES
      : COMPANIES.filter((c) => c.category === selectedCategory);

  return (
    <section className="py-24 bg-[#070707] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-slate-500" />
            <span className="text-xs font-mono-tag tracking-[0.25em] text-slate-400 uppercase">
              BUSINESS ECOSYSTEM
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Essotto Private Limited{' '}
            <span className="text-red-600 font-serif-accent italic font-normal text-4xl sm:text-5xl lg:text-6xl">
              Ecosystem Matrix.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Connected companies across real estate tech, media, creator studios, hospitality, and AI labs. Select any venture to view details.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categoryTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono-tag tracking-wider whitespace-nowrap flex items-center gap-2 transition-all ${
                  isActive
                    ? 'bg-red-600 text-white font-bold shadow-lg shadow-red-950/50'
                    : 'bg-[#0e0e0e] text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              onClick={() => onSelectCompany(company)}
              className="p-6 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-red-600/50 transition-all cursor-pointer group flex flex-col justify-between space-y-6 text-left"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center font-mono-tag font-bold text-xs text-red-500">
                    {company.logoText}
                  </div>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400 font-mono-tag text-[9px] uppercase font-bold">
                    {company.statusLabel}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-red-500 transition-colors flex items-center justify-between">
                    <span>{company.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-red-500 transition-opacity" />
                  </h3>
                  <span className="text-[10px] font-mono-tag text-red-500 block mt-0.5 uppercase tracking-wider">
                    {company.categoryName}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {company.description}
                </p>
              </div>

              {/* Metrics Preview */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {company.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="p-2 rounded bg-black/60 border border-white/5 text-left">
                      <span className="font-heading font-bold text-xs text-white block">
                        {m.value}
                      </span>
                      <span className="text-[9px] font-mono-tag text-slate-400 block line-clamp-1">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-[10px] font-mono-tag text-slate-400 flex items-center justify-between pt-1">
                  <span>INSPECT DOSSIER</span>
                  <span className="text-red-500 font-bold group-hover:translate-x-1 transition-transform">
                    DETAILS →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
