import React from 'react';
import { ArrowRight, User, Building2, MapPin, Target } from 'lucide-react';
import waseemPortrait from '../../assets/MOHAMMED-WASEEM-MG.png';
import heroBg from '../../assets/hero-section.png';

interface HeroSectionProps {
  onNavigateTab: (tab: string) => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateTab,
  onOpenContact: _onOpenContact,
}) => {
  return (
    <section className="relative min-h-screen bg-[#050505] flex flex-col justify-between pt-28 pb-10 overflow-hidden select-none">
      
      {/* Custom Hero Section Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-90 z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Subtle Overlay to ensure high contrast and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-transparent to-[#050505]/90 pointer-events-none z-0" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: BUILDING THE FUTURE OF / REAL ESTATE & BEYOND */}
          <div className="lg:col-span-5 text-left space-y-6 z-20">
            <div>
              <span className="text-xs font-mono-tag tracking-[0.35em] text-red-600 font-semibold uppercase block mb-3">
                BUILDING THE FUTURE OF
              </span>
              <h1 className="font-serif-accent font-normal text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-[1.06]">
                REAL ESTATE <br />
                <span className="font-serif-accent font-light italic text-white/90">& BEYOND</span>
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-md">
              Entrepreneur building scalable businesses and ecosystems that create impact, opportunity, and long-term value.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => onNavigateTab('ecosystem')}
                className="px-6 py-3.5 rounded-md bg-red-600 hover:bg-red-700 text-white font-mono-tag text-xs font-bold tracking-widest flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(220,38,38,0.4)]"
              >
                <span>EXPLORE VENTURES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigateTab('about')}
                className="px-6 py-3.5 rounded-md border border-white/20 hover:border-red-600 text-slate-300 hover:text-white font-mono-tag text-xs font-bold tracking-widest flex items-center gap-2 transition-all hover:bg-white/5"
              >
                <span>ABOUT ME</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Center Column: Executive Portrait Expanded Showcase */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center py-2 z-10">
            
            {/* Soft Crimson Glow */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-red-600/25 blur-[120px] pointer-events-none" />

            {/* Prominent High-Impact Executive Portrait (Expanded view showing more suit & presence) */}
            <div className="relative z-10 w-[340px] sm:w-[420px] max-h-[560px] flex justify-center items-end group">
              <img
                src={waseemPortrait}
                alt="Mohammed Waseem MG — Founder & Real Estate Entrepreneur"
                width={420}
                height={560}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-auto object-contain filter contrast-[1.08] brightness-[1.03] scale-110 sm:scale-118 group-hover:scale-122 transition-all duration-700"
                style={{
                  maskImage: 'radial-gradient(ellipse 66% 80% at 50% 46%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 88%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 66% 80% at 50% 46%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 88%)',
                }}
              />
            </div>

          </div>

          {/* Right Column: Handwritten Signature + Name & Designation */}
          <div className="lg:col-span-3 text-left lg:text-left space-y-2 z-20 self-end pb-8">
            
            {/* Signature */}
            <span className="font-signature text-6xl text-slate-100 select-none block opacity-95 tracking-wide">
              Waseem
            </span>

            {/* Name */}
            <span className="font-mono-tag text-xs font-bold tracking-[0.25em] text-white uppercase block pt-1">
              MOHAMMED WASEEM MG
            </span>

            {/* Designation */}
            <div className="space-y-0.5 pt-1">
              <span className="text-[10px] font-mono-tag tracking-[0.2em] text-slate-400 uppercase block">
                FOUNDER & DIRECTOR
              </span>
              <span className="text-[10px] font-mono-tag tracking-[0.2em] text-slate-500 uppercase block">
                ESSOTTO PRIVATE LIMITED
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Bar: 4 Info Columns + Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 rounded-xl bg-[#0d0d0d]/80 border border-white/10 overflow-hidden divide-x divide-y md:divide-y-0 divide-white/10 backdrop-blur-md">
          
          <div className="flex items-center gap-3.5 p-4 justify-center text-center">
            <User className="w-5 h-5 text-red-600 shrink-0" />
            <div>
              <span className="text-[9px] font-mono-tag tracking-[0.2em] text-slate-400 uppercase block">
                FOUNDER
              </span>
              <span className="text-xs font-heading font-bold text-white block mt-0.5">
                Top Selling Property
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 justify-center text-center">
            <Building2 className="w-5 h-5 text-red-600 shrink-0" />
            <div>
              <span className="text-[9px] font-mono-tag tracking-[0.2em] text-slate-400 uppercase block">
                DIRECTOR
              </span>
              <span className="text-xs font-heading font-bold text-white block mt-0.5">
                Essotto Private Limited
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 justify-center text-center">
            <MapPin className="w-5 h-5 text-red-600 shrink-0" />
            <div>
              <span className="text-[9px] font-mono-tag tracking-[0.2em] text-slate-400 uppercase block">
                BASED IN
              </span>
              <span className="text-xs font-heading font-bold text-white block mt-0.5">
                Whitefield, Bengaluru 560066
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 justify-center text-center">
            <Target className="w-5 h-5 text-red-600 shrink-0" />
            <div>
              <span className="text-[9px] font-mono-tag tracking-[0.2em] text-slate-400 uppercase block">
                FOCUS
              </span>
              <span className="text-xs font-heading font-bold text-white block mt-0.5">
                Real Estate Platforms
              </span>
            </div>
          </div>

        </div>

        {/* Mouse Scroll Indicator */}
        <div className="pt-5 flex flex-col items-center justify-center gap-1.5 text-[9px] font-mono-tag tracking-[0.25em] text-slate-500 uppercase">
          <div className="w-4 h-7 rounded-full border border-slate-600 flex justify-center p-1">
            <div className="w-1 h-1.5 bg-red-600 rounded-full animate-bounce" />
          </div>
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
};
