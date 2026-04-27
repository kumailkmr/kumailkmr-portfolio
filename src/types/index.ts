export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter: string;
  calendly: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  subTagline: string;
  email: string;
  phone: string;
  whatsapp: string;
  whatsappUrl: string;
  upi: string;
  location: string;
  locationEmoji: string;
  available: boolean;
  responseTime: string;
  social: SocialLinks;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  badge: string;
  category: "SaaS" | "E-Commerce" | "AI Tools" | "Websites" | "Automation";
  badgeColor: string;
  gradient: string;
  liveUrl: string;
  githubUrl: string;
  image?: string;
}

export interface TestimonialItem {
  id: string;
  stars: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  delivery: string;
  bestFor: string;
  features: string[];
  excludedFeatures: string[];
  ctaLabel: string;
  ctaLink: string;
  popular?: boolean;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillsMap {
  frontend: SkillItem[];
  backend: SkillItem[];
  aiAutomation: SkillItem[];
  tools: SkillItem[];
}

export interface TimelineItem {
  year: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
