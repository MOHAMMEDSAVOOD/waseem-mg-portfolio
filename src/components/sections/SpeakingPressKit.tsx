import React, { useState } from 'react';
import { Mic, Download, Copy, Check, FileText } from 'lucide-react';
import { SPEAKING_TOPICS } from '../../data/speakingData';
import { BRAND } from '../../data/brandData';

export const SpeakingPressKit: React.FC = () => {
  const [copiedBio, setCopiedBio] = useState(false);

  const bioText = `${BRAND.name} is a Bengaluru-based entrepreneur, founder of Top Selling Property, and leader associated with Essotto Private Limited—a diversified business group operating across real estate platforms, corporate media, digital creator studios, hospitality, and AI labs.`;

  const handleCopyBio = () => {
    navigator.clipboard.writeText(bioText);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 3000);
  };

  return (
    <section className="py-24 bg-[#070707] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Speaking */}
        <div className="space-y-8">
          <div className="text-left space-y-3 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-slate-500" />
              <span className="text-xs font-mono-tag tracking-[0.25em] text-slate-400 uppercase">
                SPEAKING & KEYNOTES
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Executive Keynotes & <span className="text-red-600 font-serif-accent italic font-normal text-4xl sm:text-5xl">Workshops.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Available for keynote speeches, panel discussions, and guest lectures on entrepreneurship, ecosystem architecture, PropTech innovation, and leadership frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SPEAKING_TOPICS.map((topic) => (
              <div key={topic.id} className="p-6 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-red-600/30 transition-all text-left flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[9px] font-mono-tag uppercase tracking-wider text-red-500 font-bold px-2 py-0.5 rounded bg-red-600/10 border border-red-600/20">
                    {topic.duration}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white">{topic.title}</h3>
                  <span className="text-xs font-mono-tag text-slate-400 block">
                    Target: {topic.targetAudience}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">{topic.description}</p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[9px] font-mono-tag uppercase text-slate-400 font-bold block">
                    KEY TAKEAWAYS
                  </span>
                  {topic.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-red-500 font-bold">•</span>
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Kit */}
        <div className="p-8 rounded-xl bg-[#0e0e0e] border border-white/10 space-y-8 text-left">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2 text-red-500 text-xs font-mono-tag uppercase font-bold mb-1">
                <FileText className="w-4 h-4" />
                <span>PRESS KIT & BRAND ASSETS</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                Official Media Kit for Events & Press
              </h3>
            </div>

            <button
              onClick={handleCopyBio}
              className="px-4 py-2 rounded-lg bg-red-600/10 hover:bg-red-600/20 border border-red-600/30 text-red-400 font-mono-tag text-xs font-bold flex items-center gap-2 transition-all"
            >
              {copiedBio ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedBio ? 'BIO COPIED!' : 'COPY EXECUTIVE BIO'}</span>
            </button>
          </div>

          <div className="p-4 rounded-lg bg-black/60 border border-white/5 text-xs text-slate-300 leading-relaxed font-mono-tag">
            <span className="text-slate-500 block mb-1">OFFICIAL SUMMARY:</span>
            "{bioText}"
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Executive Photography', label: 'High-Res Pack (PNG)' },
              { title: 'Essotto Brand Assets', label: 'Logos & Monogram (SVG)' },
              { title: 'Group Corporate Dossier', label: 'PDF Report (2026)' },
              { title: 'Speaker Overview Sheet', label: 'Topic Summary (PDF)' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-xs text-white block">{item.title}</span>
                  <span className="text-[9px] font-mono-tag text-slate-400">{item.label}</span>
                </div>
                <Download className="w-4 h-4 text-red-500" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
