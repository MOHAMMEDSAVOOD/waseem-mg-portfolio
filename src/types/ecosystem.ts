export type CompanyCategory = 'real-estate' | 'media' | 'creator' | 'hospitality' | 'future';

export type StatusTag = 'market-leader' | 'active' | 'scaling' | 'incubating';

export interface Company {
  id: string;
  name: string;
  shortName?: string;
  tagline: string;
  category: CompanyCategory;
  categoryName: string;
  status?: StatusTag;
  statusLabel: string;
  logoText: string;
  description: string;
  fullStory: string;
  mission?: string;
  vision?: string;
  headquarters?: string;
  foundedYear?: string;
  leadershipTeam?: string[];
  metrics: { label: string; value: string }[];
  services: string[];
  products: string[];
  websiteUrl: string;
  futureRoadmap: string[];
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  techStack: string[];
  image: string;
  featured?: boolean;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string;
  author: string;
  featured?: boolean;
  image?: string;
}

export interface TimelineMilestone {
  year: string;
  quarter?: string;
  title: string;
  companyOrContext: string;
  description: string;
  category: 'origin' | 'real-estate' | 'media' | 'hospitality' | 'ecosystem' | 'future';
  badge: string;
}

export interface SpeakingTopic {
  id: string;
  title: string;
  duration: string;
  targetAudience: string;
  description: string;
  keyTakeaways: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'leadership' | 'office' | 'events' | 'behind-scenes' | 'media';
  imageUrl: string;
  description: string;
}
