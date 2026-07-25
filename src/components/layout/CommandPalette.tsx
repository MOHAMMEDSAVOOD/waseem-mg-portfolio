import React, { useState, useEffect } from 'react';
import { Search, X, Building2, Briefcase, FileText, ArrowRight, Shield } from 'lucide-react';
import { COMPANIES } from '../../data/ecosystemData';
import { PROJECTS } from '../../data/projectsData';
import { ARTICLES } from '../../data/insightsData';
import type { Company } from '../../types/ecosystem';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCompany: (company: Company) => void;
  onNavigateTab: (tab: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectCompany,
  onNavigateTab,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCompanies = COMPANIES.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.tagline.toLowerCase().includes(query.toLowerCase()) ||
      c.categoryName.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredArticles = ARTICLES.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#0c0c10] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] bg-white/[0.02]">
          <Search className="w-5 h-5 text-rose-500 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Essotto companies, projects, insights, or type 'Contact'..."
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm font-medium focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg bg-white/[0.05]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {!query && (
            <div>
              <span className="text-[11px] font-mono-data uppercase tracking-wider text-slate-500 mb-2 block">
                Quick Jump
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: 'Ecosystem Matrix', tab: 'ecosystem' },
                  { label: 'Company Profiles', tab: 'companies' },
                  { label: 'Projects & Work', tab: 'projects' },
                  { label: 'Direct Enquiry', tab: 'contact' },
                ].map((item) => (
                  <button
                    key={item.tab}
                    onClick={() => {
                      onNavigateTab(item.tab);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-rose-600/20 hover:border-rose-500/30 border border-white/[0.06] text-left text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-between transition-all"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-3 h-3 text-rose-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredCompanies.length > 0 && (
            <div>
              <span className="text-[11px] font-mono-data uppercase tracking-wider text-rose-400 mb-2 block flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>Essotto Business Entities ({filteredCompanies.length})</span>
              </span>
              <div className="space-y-1.5">
                {filteredCompanies.map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => {
                      onSelectCompany(comp);
                      onClose();
                    }}
                    className="w-full p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-rose-500/30 text-left flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-950/60 border border-rose-500/30 flex items-center justify-center font-mono-data font-bold text-xs text-rose-300">
                        {comp.logoText}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-white group-hover:text-rose-400 transition-colors">
                          {comp.name}
                        </div>
                        <div className="text-xs text-slate-400 line-clamp-1">{comp.tagline}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono-data px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-400">
                      {comp.categoryName}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredProjects.length > 0 && (
            <div>
              <span className="text-[11px] font-mono-data uppercase tracking-wider text-rose-400 mb-2 block flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Case Studies & Projects ({filteredProjects.length})</span>
              </span>
              <div className="space-y-1.5">
                {filteredProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      onNavigateTab('projects');
                      onClose();
                    }}
                    className="w-full p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] text-left flex items-center justify-between group transition-all"
                  >
                    <div>
                      <div className="font-semibold text-sm text-white group-hover:text-rose-400 transition-colors">
                        {proj.title}
                      </div>
                      <div className="text-xs text-slate-400">{proj.category}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-rose-400 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredArticles.length > 0 && (
            <div>
              <span className="text-[11px] font-mono-data uppercase tracking-wider text-rose-400 mb-2 block flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Insights & Articles ({filteredArticles.length})</span>
              </span>
              <div className="space-y-1.5">
                {filteredArticles.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => {
                      onNavigateTab('insights');
                      onClose();
                    }}
                    className="w-full p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] text-left flex items-center justify-between group transition-all"
                  >
                    <div>
                      <div className="font-semibold text-sm text-white group-hover:text-rose-400 transition-colors line-clamp-1">
                        {art.title}
                      </div>
                      <div className="text-xs text-slate-400">{art.category} • {art.readTime}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-rose-400 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="px-4 py-2.5 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between text-[11px] font-mono-data text-slate-500">
          <span>Navigate with mouse or keyboard</span>
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-rose-500" />
            <span>Essotto Ecosystem HQ</span>
          </span>
        </div>
      </div>
    </div>
  );
};
