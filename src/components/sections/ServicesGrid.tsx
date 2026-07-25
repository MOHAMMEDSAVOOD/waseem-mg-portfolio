import React from 'react';
import { Building, TrendingUp, Cpu, Layers, Tv, Calendar } from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      title: 'Real Estate Consulting & Advisory',
      description: 'Strategic mandate marketing, buyer portfolio structuring, and land acquisition advisory across Bengaluru and South India.',
      icon: <Building className="w-5 h-5 text-red-600" />
    },
    {
      title: 'Business Strategy & Ecosystem Architecture',
      description: 'Helping companies design multi-industry business flywheels that lower customer acquisition costs and build long-term enterprise value.',
      icon: <TrendingUp className="w-5 h-5 text-red-600" />
    },
    {
      title: 'AI Automation & PropTech Solutions',
      description: 'Developing proprietary software platforms, broker commission engines, and AI real estate underwriting tools.',
      icon: <Cpu className="w-5 h-5 text-red-600" />
    },
    {
      title: 'Media & Executive Branding',
      description: 'Producing CEO documentaries, founder podcast features, and corporate publications through Business Edition & Edition TV.',
      icon: <Tv className="w-5 h-5 text-red-600" />
    },
    {
      title: 'Creator Incubator & Digital Products',
      description: 'Providing studio infrastructure, audio-visual recording facilities, and monetization engines for digital storytellers via Bloggers House.',
      icon: <Layers className="w-5 h-5 text-red-600" />
    },
    {
      title: 'Large-Scale MICE Event Management',
      description: 'Turnkey venue staging, investor match-making expos, and corporate summit management via IPLC EXPO & Whitefield Convention Centre.',
      icon: <Calendar className="w-5 h-5 text-red-600" />
    }
  ];

  return (
    <section className="py-24 bg-[#070707] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-slate-500" />
            <span className="text-xs font-mono-tag tracking-[0.25em] text-slate-400 uppercase">
              CAPABILITIES & SERVICES
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Strategic Capabilities Across <span className="text-red-600 font-serif-accent italic font-normal text-4xl sm:text-5xl">Sectors.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Institutional advisory, software innovation, media production, and asset management services provided under the Essotto Private Limited group umbrella.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-[#0e0e0e] border border-white/10 space-y-4 text-left hover:border-red-600/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center">
                {s.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-white">{s.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
