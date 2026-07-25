import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/speakingData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'ALL MEDIA' },
    { id: 'events', label: 'EXPOS & EVENTS' },
    { id: 'leadership', label: 'LEADERSHIP' },
    { id: 'office', label: 'VENUES' },
    { id: 'behind-scenes', label: 'BEHIND SCENES' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const selectedItem = GALLERY_ITEMS.find((i) => i.id === activeLightbox);

  return (
    <section className="py-24 bg-[#070707] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-slate-500" />
            <span className="text-xs font-mono-tag tracking-[0.25em] text-slate-400 uppercase">
              EXECUTIVE GALLERY
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Events, Operations & <span className="text-red-600 font-serif-accent italic font-normal text-4xl sm:text-5xl">Behind the Scenes.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Visual documentation from keynotes, Essotto boardroom sessions, Whitefield Convention Centre events, and studio recordings.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono-tag tracking-wider whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-red-600 text-white font-bold'
                  : 'bg-[#0e0e0e] text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item.id)}
              className="cursor-pointer group relative overflow-hidden aspect-video rounded-xl border border-white/10 bg-[#0e0e0e]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                width={800}
                height={450}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-between opacity-90 group-hover:opacity-100 transition-opacity">
                <div className="flex justify-end">
                  <div className="p-1.5 rounded bg-black/60 text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="text-left space-y-1">
                  <span className="text-[9px] font-mono-tag uppercase text-red-500 tracking-wider block">
                    {item.category}
                  </span>
                  <h4 className="font-heading font-bold text-sm text-white">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
            <div className="fixed inset-0" onClick={() => setActiveLightbox(null)} />
            <div className="relative max-w-4xl w-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 md:p-6 z-10 space-y-4 text-left">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">{selectedItem.title}</h3>
                  <span className="text-xs font-mono-tag text-red-500">{selectedItem.description}</span>
                </div>
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="p-1.5 rounded-full bg-white/5 text-slate-400 hover:text-white"
                  aria-label="Close image lightbox"
                >
                  ✕
                </button>
              </div>

              <div className="rounded-xl overflow-hidden aspect-video border border-white/10">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  width={1200}
                  height={675}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
