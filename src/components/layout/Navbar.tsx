import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import mwmgLogo from '../../assets/mwmg-logo.png';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'ecosystem', label: 'VENTURES' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'insights', label: 'INSIGHTS' },
    { id: 'speaking', label: 'MEDIA' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-1 ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/80'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Official Brand Logo - Significantly Increased Size */}
          <button
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus:outline-none group"
          >
            <img
              src={mwmgLogo}
              alt="Mohammed Waseem MG"
              className="h-18 sm:h-22 lg:h-28 w-auto object-contain hover:scale-105 transition-all duration-300 filter drop-shadow-[0_6px_25px_rgba(220,38,38,0.4)]"
            />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6 sm:gap-7">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      if (link.id === 'contact') {
                        onOpenContact();
                      } else {
                        setActiveTab(link.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={`text-[11px] font-mono-tag tracking-[0.2em] transition-all relative py-1 ${
                      isActive
                        ? 'text-red-500 font-bold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="block w-4 h-[2px] bg-red-600 rounded-full mx-auto mt-0.5 transition-all" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Rounded Pill "LET'S CONNECT •" Red Outlined CTA Button */}
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-full border border-red-600/80 hover:border-red-500 text-slate-200 hover:text-white font-mono-tag text-xs tracking-[0.18em] flex items-center gap-2 transition-all hover:bg-red-600/10 focus:outline-none shadow-[0_0_15px_rgba(220,38,38,0.15)]"
            >
              <span>LET'S CONNECT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_#dc2626] animate-pulse" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070707] border-b border-white/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                if (link.id === 'contact') {
                  onOpenContact();
                } else {
                  setActiveTab(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 text-xs font-mono-tag tracking-[0.2em] ${
                activeTab === link.id ? 'text-red-500 font-bold' : 'text-slate-300'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              onOpenContact();
              setMobileMenuOpen(false);
            }}
            className="w-full py-2.5 rounded-full border border-red-600 text-slate-200 font-mono-tag text-xs tracking-[0.2em] text-center flex items-center justify-center gap-2"
          >
            <span>LET'S CONNECT</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_#dc2626] animate-pulse" />
          </button>
        </div>
      )}
    </header>
  );
};
