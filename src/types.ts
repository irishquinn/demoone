export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  searchQuery: string; // The high-intent keyword searched on the internet
  monthlySearches: string;
  tagline: string;
  description: string;
  keyBenefits: string[];
  deliverables: string[];
  impactMetric: {
    value: string;
    label: string;
  };
  techStack: string[];
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  headline: string;
  tagline: string;
  thumbnailSvg: string; // High-fidelity 300x300 vector mock representation
  accentColor: string;
  metrics: {
    label: string;
    value: string;
    context: string;
  }[];
  challenge: string;
  solution: string;
  architecture: string[];
  clientQuote: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  deliverablesList: string[];
  liveUrlMock: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  imageFallback: string;
  metric: string;
  metricContext: string;
  text: string;
  projectType: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'timeline' | 'pricing' | 'tech' | 'maintenance';
}
