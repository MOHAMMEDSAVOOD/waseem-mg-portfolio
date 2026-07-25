import React, { useState } from 'react';
import { BookOpen, ArrowUpRight, Clock, User } from 'lucide-react';
import { ARTICLES } from '../../data/insightsData';
import type { Article } from '../../types/ecosystem';

export const InsightsHub: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section className="py-24 bg-[#070707] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-slate-500" />
            <span className="text-xs font-mono-tag tracking-[0.25em] text-slate-400 uppercase">
              EXECUTIVE INSIGHTS
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Thought Leadership & <span className="text-red-600 font-serif-accent italic font-normal text-4xl sm:text-5xl">Intelligence.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            High-signal essays on business strategy, connected ecosystem architecture, real estate PropTech trends, and founder decision frameworks.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="p-6 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-red-600/40 transition-all cursor-pointer group flex flex-col justify-between space-y-4 text-left"
            >
              <div className="space-y-3">
                {article.image && (
                  <div className="w-full aspect-video rounded-lg overflow-hidden mb-3 border border-white/10">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between text-xs font-mono-tag text-slate-400">
                  <span className="text-red-500 font-bold uppercase">{article.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white group-hover:text-red-500 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tag text-slate-400">
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3 text-red-500" />
                  <span>{article.author}</span>
                </span>
                <span className="text-red-500 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  READ ESSAY <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Reader */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
            <div className="fixed inset-0" onClick={() => setSelectedArticle(null)} />
            <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-10 z-10 text-left space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono-tag text-red-500 font-bold">
                  {selectedArticle.category} • {selectedArticle.date}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 rounded-full bg-white/5 text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <h2 className="font-heading font-bold text-2xl md:text-3xl text-white">
                {selectedArticle.title}
              </h2>

              <div className="prose prose-invert max-w-none text-slate-300 text-sm md:text-base leading-relaxed space-y-4 whitespace-pre-line">
                {selectedArticle.content}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
