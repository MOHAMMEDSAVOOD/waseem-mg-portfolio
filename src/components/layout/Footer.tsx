import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Globe, Share2, ExternalLink } from 'lucide-react';
import mwmgLogo from '../../assets/mwmg-logo.png';
import { BRAND } from '../../data/brandData';
import { COMPANIES } from '../../data/ecosystemData';
import type { Company } from '../../types/ecosystem';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onSelectCompany: (company: Company) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onSelectCompany }) => {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/10 pt-16 pb-12 relative z-10 text-left select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Row: Brand Logo & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          <div className="lg:col-span-5 space-y-4">
            {/* Logo */}
            <div className="flex items-center">
              <img src={mwmgLogo} alt="MWMG Logo" className="h-10 sm:h-12 w-auto object-contain" />
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Real Estate Entrepreneur & Founder of Top Selling Property. Associated with Essotto Private Limited—building category-defining companies across PropTech, media, hospitality, and AI labs.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                { label: 'LinkedIn', href: BRAND.socials.linkedin },
                { label: 'Twitter', href: BRAND.socials.twitter },
                { label: 'Instagram', href: BRAND.socials.instagram },
                { label: 'YouTube', href: BRAND.socials.youtube },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-[#0e0e0e] border border-white/10 hover:border-red-600 text-slate-400 hover:text-white font-mono-tag text-[10px] uppercase flex items-center gap-1 transition-all"
                >
                  <span>{s.label}</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Directory Column 1: Ecosystem Entities */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] font-mono-tag uppercase text-red-500 font-bold tracking-wider block">
              ESSOTTO ECOSYSTEM ENTITIES
            </span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-400">
              {COMPANIES.map((comp) => (
                <button
                  key={comp.id}
                  onClick={() => onSelectCompany(comp)}
                  className="text-left hover:text-white transition-colors truncate flex items-center gap-1 group"
                >
                  <span className="group-hover:text-red-500">•</span>
                  <span>{comp.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Directory Column 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] font-mono-tag uppercase text-red-500 font-bold tracking-wider block">
              PORTAL NAVIGATION
            </span>
            <div className="space-y-1.5 text-xs text-slate-400">
              {[
                { id: 'home', label: 'Executive Home' },
                { id: 'about', label: 'About & Governance' },
                { id: 'ecosystem', label: 'Ecosystem Matrix' },
                { id: 'projects', label: 'Case Studies & Tech' },
                { id: 'services', label: 'Strategic Services' },
                { id: 'leadership', label: 'Leadership Philosophy' },
                { id: 'insights', label: 'Executive Essays' },
                { id: 'speaking', label: 'Keynotes & Press Kit' },
                { id: 'contact', label: 'Inquiry Desk' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveTab(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="block text-left hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tag text-slate-500 pt-2">
          <span>
            © {new Date().getFullYear()} MOHAMMED WASEEM MG. ALL RIGHTS RESERVED.
          </span>
          <span>
            ASSOCIATED WITH <strong className="text-slate-300">ESSOTTO PRIVATE LIMITED</strong>
          </span>
        </div>

      </div>
    </footer>
  );
};
