import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SplashScreen } from './components/layout/SplashScreen';
import { CompanyModal } from './components/sections/CompanyModal';
import { SEOHead } from './components/seo/SEOHead';
import { GoogleAnalytics } from './components/analytics/GoogleAnalytics';

import { HeroSection } from './components/sections/HeroSection';
import { AboutEntitySection } from './components/sections/AboutEntitySection';
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
import { FAQSection } from './components/sections/FAQSection';
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
            <div id="about">
              <AboutEntitySection />
            </div>
            <BrandPositioning />
            <div id="ecosystem">
              <EcosystemHub onSelectCompany={(comp) => setSelectedCompany(comp)} />
            </div>
            <div id="projects">
              <FeaturedProjects />
            </div>
            <div id="services">
              <ServicesGrid />
            </div>
            <LeadershipPhilosophy />
            <div id="insights">
              <InsightsHub />
            </div>
            <TimelineSection />
            <ImpactMetrics />
            <div id="speaking">
              <SpeakingPressKit />
            </div>
            <GallerySection />
            <div id="faq">
              <FAQSection />
            </div>
            <div id="contact">
              <ContactSection />
            </div>
          </>
        )}

        {activeTab === 'about' && (
          <div className="pt-24 space-y-12" id="about">
            <AboutEntitySection />
            <BrandPositioning />
            <LeadershipPhilosophy />
            <TimelineSection />
          </div>
        )}

        {activeTab === 'ecosystem' && (
          <div className="pt-24 space-y-12" id="ecosystem">
            <EcosystemHub onSelectCompany={(comp) => setSelectedCompany(comp)} />
          </div>
        )}

        {activeTab === 'companies' && (
          <div className="pt-24 space-y-12" id="ventures">
            <EcosystemHub onSelectCompany={(comp) => setSelectedCompany(comp)} />
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="pt-24 space-y-12" id="projects">
            <FeaturedProjects />
          </div>
        )}

        {activeTab === 'services' && (
          <div className="pt-24 space-y-12" id="services">
            <ServicesGrid />
          </div>
        )}

        {activeTab === 'leadership' && (
          <div className="pt-24 space-y-12">
            <LeadershipPhilosophy />
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="pt-24 space-y-12" id="insights">
            <InsightsHub />
          </div>
        )}

        {activeTab === 'speaking' && (
          <div className="pt-24 space-y-12" id="speaking">
            <SpeakingPressKit />
            <GallerySection />
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="pt-24 space-y-12" id="faq">
            <FAQSection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-24 space-y-12" id="contact">
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
