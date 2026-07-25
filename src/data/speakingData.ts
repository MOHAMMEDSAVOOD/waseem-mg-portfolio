import type { SpeakingTopic, GalleryItem } from '../types/ecosystem';

export const SPEAKING_TOPICS: SpeakingTopic[] = [
  {
    id: 'topic-1',
    title: 'Building Multi-Industry Business Ecosystems in Modern India',
    duration: '45 - 60 Mins Keynote',
    targetAudience: 'Founders, C-Suite Executives, Investors, Business Group Leaders',
    description: 'How single-industry businesses can transition into interconnected ecosystems where every venture acts as a distribution and revenue multiplier.',
    keyTakeaways: [
      'The 4-layer ecosystem model (Attention, Transaction, Physical Assets, R&D)',
      'Reducing customer acquisition costs through media ownership',
      'Capital efficiency & bootstrap scaling frameworks'
    ]
  },
  {
    id: 'topic-2',
    title: 'PropTech 2.0: Digitizing Real Estate Distribution & Broker Networks',
    duration: '30 - 45 Mins Keynote / Panel',
    targetAudience: 'Developers, Real Estate Brokers, PropTech Investors, Policy Makers',
    description: 'A deep dive into how technology, automated payouts, and verified title registries are modernizing South India\'s real estate corridors.',
    keyTakeaways: [
      'Empowering micro-brokers with SaaS tools',
      'Creating high-trust property expos & VR walkthroughs',
      'Future of AI real estate underwriting'
    ]
  },
  {
    id: 'topic-3',
    title: 'Leadership & Decision Frameworks for Long-Term Value Creation',
    duration: '40 Mins Workshop / Guest Lecture',
    targetAudience: 'Startup Teams, MBA Students, Emerging Entrepreneurs',
    description: 'Practical frameworks for evaluating trade-offs, building ownership culture, and making decisions that compound over decades.',
    keyTakeaways: [
      'Great leaders build systems, not followers',
      'Evaluating short-term revenue vs long-term brand equity',
      'Cultivating relentless execution discipline'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'IPLC EXPO Keynote Address',
    category: 'events',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop',
    description: 'Mohammed Waseem MG delivering the opening address at IPLC EXPO in Bengaluru.'
  },
  {
    id: 'gal-2',
    title: 'Essotto Executive Boardroom Session',
    category: 'leadership',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop',
    description: 'Strategic planning meeting with division heads across Real Estate and Hospitality.'
  },
  {
    id: 'gal-3',
    title: 'Whitefield Convention Centre Staging',
    category: 'office',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop',
    description: 'Overview of the main 2,500-capacity hall prior to a corporate summit.'
  },
  {
    id: 'gal-4',
    title: 'Business Edition CEO Feature Recording',
    category: 'media',
    imageUrl: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1000&auto=format&fit=crop',
    description: 'Behind the scenes shooting Edition Media TV interviews at Bloggers House studio.'
  },
  {
    id: 'gal-5',
    title: 'Channel Partner Circle Mastermind',
    category: 'events',
    imageUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1000&auto=format&fit=crop',
    description: 'Exclusive roundtable with South India\'s top real estate advisory leaders.'
  },
  {
    id: 'gal-6',
    title: 'Essotto Headquarters Engineering Team',
    category: 'behind-scenes',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop',
    description: 'The software team developing the TSP Partner broker platform and AI tools.'
  }
];
