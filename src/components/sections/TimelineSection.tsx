import React from 'react';
import { Milestone } from 'lucide-react';
import { TIMELINE } from '../../data/timelineData';

export const TimelineSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#070707] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-slate-500" />
            <span className="text-xs font-mono-tag tracking-[0.25em] text-slate-400 uppercase">
              MILESTONES TIMELINE
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            The Journey of <span className="text-red-600 font-serif-accent italic font-normal text-4xl sm:text-5xl">Essotto & Waseem MG.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Key milestones from early real estate advisory operations to building a diversified group across proptech, media, hospitality, and AI labs.
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="relative border-l-2 border-red-600/30 ml-4 md:ml-8 pl-6 md:pl-10 space-y-8 text-left">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#070707] border-2 border-red-600 flex items-center justify-center group-hover:scale-125 group-hover:bg-red-600 transition-all">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              <div className="p-6 rounded-xl bg-[#0e0e0e] border border-white/10 space-y-2 hover:border-red-600/30 transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-extrabold text-2xl text-white">
                    {item.year}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-red-600/20 text-red-400 font-mono-tag text-[10px] font-bold uppercase border border-red-600/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white">
                  {item.title}
                </h3>
                <span className="text-xs font-mono-tag text-red-500 block uppercase">
                  {item.companyOrContext}
                </span>

                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
