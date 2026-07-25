import React from 'react';
import { X, ExternalLink, ShieldCheck, CheckCircle2, Milestone, Sparkles } from 'lucide-react';
import type { Company } from '../../types/ecosystem';

interface CompanyModalProps {
  company: Company | null;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const CompanyModal: React.FC<CompanyModalProps> = ({
  company,
  onClose,
  onNavigateContact,
}) => {
  if (!company) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c12] border border-white/[0.12] rounded-3xl shadow-2xl overflow-y-auto z-10 p-6 md:p-10 animate-in zoom-in-95 duration-200 text-left">
        <div className="flex items-start justify-between mb-8 pb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-600 to-red-950 flex items-center justify-center font-mono-data font-black text-xl text-white shadow-lg shadow-rose-950/60 border border-rose-500/30">
              {company.logoText}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white">
                  {company.name}
                </h3>
                <span className="px-2.5 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 font-mono-data text-[10px] font-bold uppercase">
                  {company.statusLabel}
                </span>
              </div>
              <p className="text-sm text-slate-400 font-medium mt-0.5">{company.tagline}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full bg-white/[0.05] hover:bg-white/[0.1] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="text-xs font-mono-data uppercase tracking-wider text-rose-400 font-bold block mb-2">
                Executive Overview & Origin
              </span>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {company.fullStory}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-xs font-mono-data uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Corporate Mission
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">{company.mission}</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-xs font-mono-data uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Long-Term Vision
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">{company.vision}</p>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono-data uppercase tracking-wider text-rose-400 font-bold block mb-3">
                Core Services & Platform Offerings
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {company.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-200 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono-data uppercase tracking-wider text-slate-400 font-bold block mb-3 flex items-center gap-1.5">
                <Milestone className="w-4 h-4 text-rose-400" />
                <span>Strategic Horizon & Future Roadmap</span>
              </span>
              <div className="space-y-2">
                {company.futureRoadmap.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 text-xs text-slate-300"
                  >
                    <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-mono-data text-[10px] font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-4">
              <span className="text-xs font-mono-data uppercase tracking-wider text-rose-400 font-bold block">
                Verified Scale & Performance
              </span>

              <div className="space-y-3">
                {company.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/[0.05]">
                    <span className="font-heading font-extrabold text-2xl text-white block">
                      {m.value}
                    </span>
                    <span className="text-[11px] font-mono-data text-slate-400">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] font-mono-data text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Associated with Essotto Private Limited</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={company.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-rose-950/50"
              >
                <span>Visit Company Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  onClose();
                  onNavigateContact();
                }}
                className="w-full py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>Partner or Enquire with {company.shortName}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
