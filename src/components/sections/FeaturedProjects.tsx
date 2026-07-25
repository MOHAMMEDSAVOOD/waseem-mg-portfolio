import React from 'react';
import { PROJECTS } from '../../data/projectsData';

export const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-24 bg-[#070707] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-slate-500" />
            <span className="text-xs font-mono-tag tracking-[0.25em] text-slate-400 uppercase">
              CASE STUDIES & WORK
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            High-Impact Strategic <span className="text-red-600 font-serif-accent italic font-normal text-4xl sm:text-5xl">Platforms.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Quantitative outcomes, technical architectures, and strategic platforms built across real estate tech, broker enablement, and large-scale MICE conventions.
          </p>
        </div>

        {/* Projects Cards */}
        <div className="space-y-8">
          {PROJECTS.map((proj) => (
            <div key={proj.id} className="p-6 md:p-8 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-red-600/40 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Image */}
                <div className="lg:col-span-5 relative rounded-lg overflow-hidden aspect-video border border-white/10 group">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    width={800}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono-tag text-red-500 font-bold border border-white/10 uppercase">
                    {proj.category}
                  </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-7 space-y-4 text-left">
                  <div className="text-xs font-mono-tag text-slate-400">
                    Client / Vertical: <strong className="text-white">{proj.client}</strong> ({proj.year})
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {proj.summary}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                      <span className="text-[10px] font-mono-tag uppercase text-red-500 font-bold block mb-1">
                        STRATEGIC CHALLENGE
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">{proj.challenge}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                      <span className="text-[10px] font-mono-tag uppercase text-red-500 font-bold block mb-1">
                        ENGINEERED SOLUTION
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">{proj.solution}</p>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {proj.impactMetrics.map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded bg-black/60 border border-white/5 text-center">
                        <span className="font-heading font-extrabold text-sm sm:text-base text-white block">
                          {m.value}
                        </span>
                        <span className="text-[9px] font-mono-tag text-slate-400 block">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
