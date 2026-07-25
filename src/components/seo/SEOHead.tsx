import React, { useEffect } from 'react';

interface SEOHeadProps {
  activeTab: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ activeTab }) => {
  useEffect(() => {
    let title = 'Mohammed Waseem MG | Founder & Real Estate Entrepreneur | Waseem';
    let description =
      'Official Executive Headquarters of Mohammed Waseem MG (Waseem MG). Founder of Top Selling Property & Director at Essotto Private Limited in Whitefield, Bengaluru.';

    switch (activeTab) {
      case 'about':
        title = 'About Mohammed Waseem MG | Leadership, Vision & Principles | Waseem';
        description =
          'Learn about Mohammed Waseem MG (Waseem MG), Founder of Top Selling Property & Director at Essotto Private Limited. Explore executive governance, leadership philosophy, and core business principles.';
        break;
      case 'ecosystem':
        title = 'Essotto Ecosystem | Ventures & Companies by Mohammed Waseem MG';
        description =
          'Explore the multi-industry business ecosystem built by Mohammed Waseem MG (Waseem MG) under Essotto Private Limited: Top Selling Property, Essotto Media, Essotto Hospitality, and Essotto AI Labs.';
        break;
      case 'projects':
        title = 'Case Studies & Tech | Mohammed Waseem MG Projects | PropTech Waseem';
        description =
          'Discover PropTech innovations, channel partner automation tools, and real estate platforms developed under the leadership of Mohammed Waseem MG (Waseem MG).';
        break;
      case 'insights':
        title = 'Executive Essays & Insights | Mohammed Waseem MG | Real Estate & AI';
        description =
          'Read strategic essays and industry insights on Real Estate, PropTech, Ecosystem Business Strategy, and AI Labs by Mohammed Waseem MG (Waseem MG).';
        break;
      case 'speaking':
        title = 'Media, Keynotes & Press Kit | Mohammed Waseem MG | Waseem';
        description =
          'Book Mohammed Waseem MG (Waseem MG) for keynotes, real estate panel discussions, press interviews, and media appearances.';
        break;
      case 'faq':
        title = 'FAQ | Mohammed Waseem MG | Top Selling Property & Essotto Entity Q&A';
        description =
          'Frequently asked questions about Mohammed Waseem MG (Waseem MG), Founder of Top Selling Property & Director at Essotto Private Limited in Whitefield, Bengaluru.';
        break;
      case 'contact':
        title = 'Contact Mohammed Waseem MG | Executive Office | Whitefield Bengaluru';
        description =
          'Initiate direct executive dialogue with Mohammed Waseem MG (Waseem MG), Founder & Director at Essotto Private Limited, Whitefield, Bengaluru 560066.';
        break;
      default:
        break;
    }

    document.title = title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update OpenGraph title and description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
  }, [activeTab]);

  return null;
};
