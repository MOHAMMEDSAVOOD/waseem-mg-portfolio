import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SplashScreen } from './components/layout/SplashScreen';
import { CompanyModal } from './components/sections/CompanyModal';
import { SEOHead } from './components/seo/SEOHead';
import { GoogleAnalytics } from './components/analytics/GoogleAnalytics';

import { HeroSection } from './components/sections/HeroSection';
import { BrandPositioning } from './components/sections/BrandPositioning';
import { EcosystemHub } from './components/sections/EcosystemHub';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { ServicesGrid } from './components/sections/ServicesGrid';
import { LeadershipPhilosophy } from './components/sections/LeadershipPhilosophy';
import { InsightsHub } from './components/sections/InsightsHub';
import { TimelineSection } from './components/sections/TimelineSection';
import { ImpactMetrics } from './components/sections/ImpactMetrics';
import { SpeakingPressKit } from './components/sections/SpeakingPressKit';
import { GallerySection } from './components/sections/GallerySection';
import { ContactSection } from './components/sections/ContactSection';

import type { Company } from './types/ecosystem';

export function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const handleOpenContact = () => {
    setActiveTab('contact');
    const contactElem = document.getElementById('contact-section');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-red-600 selection:text-white font-sans antialiased">
      {/* Google Analytics 4 — Production Only, SPA Route Tracking */}
      <GoogleAnalytics activeTab={activeTab} />

      {/* Dynamic SEO Meta & Structured Data Controller */}
      <SEOHead activeTab={activeTab} />

      {/* Executive Splash Screen */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {/* Global Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenContact={handleOpenContact}
      />

      {/* Company Detail Drawer Modal */}
      <CompanyModal
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
        onNavigateContact={handleOpenContact}
      />

      {/* Main Content Body */}
      <main className="relative z-10 w-full overflow-x-hidden">
        {activeTab === 'home' && (
          <>
            <HeroSection
              onNavigateTab={setActiveTab}
              onOpenContact={handleOpenContact}
            />
            <BrandPositioning />
            <div id="ecosystem-section">
              <EcosystemHub onSelectCompany={(comp) => setSelectedCompany(comp)} />
            </div>
            <FeaturedProjects />
            <ServicesGrid />
            <LeadershipPhilosophy />
            <InsightsHub />
            <TimelineSection />
            <ImpactMetrics />
            <SpeakingPressKit />
            <GallerySection />
            <div id="contact-section">
              <ContactSection />
            </div>
          </>
        )}

        {activeTab === 'about' && (
          <div className="pt-24 space-y-12">
            <BrandPositioning />
            <LeadershipPhilosophy />
            <TimelineSection />
          </div>
        )}

        {activeTab === 'ecosystem' && (
          <div className="pt-24 space-y-12">
            <EcosystemHub onSelectCompany={(comp) => setSelectedCompany(comp)} />
          </div>
        )}

        {activeTab === 'companies' && (
          <div className="pt-24 space-y-12">
            <EcosystemHub onSelectCompany={(comp) => setSelectedCompany(comp)} />
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="pt-24 space-y-12">
            <FeaturedProjects />
          </div>
        )}

        {activeTab === 'services' && (
          <div className="pt-24 space-y-12">
            <ServicesGrid />
          </div>
        )}

        {activeTab === 'leadership' && (
          <div className="pt-24 space-y-12">
            <LeadershipPhilosophy />
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="pt-24 space-y-12">
            <InsightsHub />
          </div>
        )}

        {activeTab === 'speaking' && (
          <div className="pt-24 space-y-12">
            <SpeakingPressKit />
            <GallerySection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-24 space-y-12" id="contact-section">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onSelectCompany={(comp) => setSelectedCompany(comp)}
      />
    </div>
  );
}

export default App;
