import type { Project } from '../types/ecosystem';

export const PROJECTS: Project[] = [
  {
    id: 'tsp-digital-brokerage-platform',
    title: 'Top Selling Property Digital Platform',
    client: 'Essotto Real Estate Vertical',
    category: 'PropTech & Real Estate',
    year: '2024',
    featured: true,
    summary: 'Building South India\'s most efficient digital platform connecting Tier-1 developers with verified home buyers and institutional advisory desks.',
    challenge: 'High buyer drop-off rates due to unverified inventory listings, opaque developer commission structures, and slow site-visit coordination.',
    solution: 'Engineered a unified portal with 3D virtual property tours, real-time pricing matrix, automated site-visit scheduling, and verified developer escrow tracking.',
    impactMetrics: [
      { label: 'Transaction Speed', value: '+45%' },
      { label: 'Verified Inventory', value: '100%' },
      { label: 'Sales Volume Enabled', value: '₹500Cr+' }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Mapbox API'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'tspp-partner-payout-saas',
    title: 'TSP Partner Broker SaaS Portal',
    client: 'Channel Partner Network',
    category: 'Enterprise SaaS & FinTech',
    year: '2024',
    featured: true,
    summary: 'A high-throughput portal enabling 4,500+ channel partners to track real-time deal stages, commission payouts, and co-branded marketing kits.',
    challenge: 'Manual broker payouts led to disputes, delayed site-visit approvals, and administrative overhead across thousands of independent agents.',
    solution: 'Deployed an automated commission ledger with instant SMS notifications, digital agreement sign-offs, and bank API integration for automated payouts.',
    impactMetrics: [
      { label: 'Broker Retention', value: '94%' },
      { label: 'Payout Lag Reduced', value: '14 Days → 48 Hours' },
      { label: 'Active Partners', value: '4,500+' }
    ],
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Razorpay Payouts', 'AWS S3'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'iplc-expo-convention-portal',
    title: 'IPLC EXPO Event Operating System',
    client: 'Essotto Events & Media',
    category: 'MICE & Event Tech',
    year: '2023 - 2024',
    featured: true,
    summary: 'Digital badge check-in, investor match-making, and live exhibition floor mapping for 15,000+ attendees at IPLC EXPO.',
    challenge: 'Managing massive footfall registration queues and connecting high-net-worth investors with matching developer booths seamlessly.',
    solution: 'Designed QR-based instant pass generation, AI investor matching based on investment ticket size, and live hall capacity dashboards.',
    impactMetrics: [
      { label: 'Check-In Speed', value: '4 Seconds / Attendee' },
      { label: 'Investor Matches', value: '1,200+' },
      { label: 'MoUs Facilitated', value: '₹250Cr+' }
    ],
    techStack: ['React Native', 'Node.js', 'Redis', 'WebSockets', 'QR Scanner Engine'],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'whitefield-convention-smart-venue',
    title: 'Whitefield Convention Centre Smart Operations',
    client: 'Essotto Hospitality',
    category: 'Smart Venues & Hospitality',
    year: '2023',
    featured: false,
    summary: 'Building automation, booking portal, and hybrid streaming setup for Bengaluru\'s premier 2,500-capacity convention venue.',
    challenge: 'Inefficient venue calendar management and manual catering / technical staging coordination across multi-day corporate summits.',
    solution: 'Integrated dynamic calendar engine with automated vendor dispatch, smart lighting scene triggers, and direct corporate booking portal.',
    impactMetrics: [
      { label: 'Venue Occupancy Rate', value: '88%' },
      { label: 'Operational Costs', value: '-22%' },
      { label: 'Events Hosted / Year', value: '110+' }
    ],
    techStack: ['React', 'IoT Smart Controller API', 'Stripe Payments', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop'
  }
];
