import { ServiceItem } from '../types';

export const topWordPressServices: ServiceItem[] = [
  {
    id: 'custom-theme-plugin',
    number: '01',
    title: 'Custom WordPress Theme & Plugin Development',
    searchQuery: 'custom wordpress theme development agency',
    monthlySearches: '44,000/mo search volume',
    tagline: 'Zero page-builder bloat. Bespoke Gutenberg block suites tailored to your design system.',
    description: 'We engineer lightweight, maintainable WordPress themes and custom plugins from scratch using PHP 8.3, Modern CSS, and custom React Gutenberg blocks. Say goodbye to Elementor slowdowns and brittle commercial themes.',
    keyBenefits: [
      'Tailored Full-Site Editing (FSE) block library tailored to your editorial team',
      'Clean object-oriented custom plugins without third-party dependencies',
      'Pixel-perfect translation of Figma designs into accessible, responsive code',
      'Strict adherence to WordPress VIP coding standards and PHP linting'
    ],
    deliverables: [
      'Custom React Gutenberg blocks (ACF Pro / Native Block API)',
      'Modular SCSS/Tailwind styling system with zero runtime overhead',
      'Custom Post Types, taxonomies, and relational data architecture',
      'Client editorial documentation and reusable component pattern library'
    ],
    impactMetric: {
      value: '-72%',
      label: 'Editorial turnaround time for marketing teams'
    },
    techStack: ['PHP 8.3', 'React / Gutenberg', 'ACF Pro', 'Tailwind CSS', 'Vite / Webpack']
  },
  {
    id: 'woocommerce-enterprise',
    number: '02',
    title: 'WooCommerce Enterprise & High-Volume E-Commerce',
    searchQuery: 'woocommerce custom development agency',
    monthlySearches: '38,000/mo search volume',
    tagline: 'High-converting checkout funnels, instant faceted filtering, and bulletproof payment flows.',
    description: 'Transform WooCommerce into an enterprise powerhouse handling 100,000+ SKUs and high flash-sale concurrency. We optimize custom checkout funnels, implement headless carts, and automate bidirectional ERP/CRM synchronization.',
    keyBenefits: [
      'Single-page checkout flows engineered for conversion rate optimization (CRO)',
      'Sub-200ms instantaneous product filtering via ElasticSearch or Algolia',
      'Stripe, Apple Pay, PayPal, Klarna, and bespoke B2B invoice billing flows',
      'Automated sync with NetSuite, SAP, Salesforce, and custom warehouse APIs'
    ],
    deliverables: [
      'Custom frictionless checkout and cart slide-out architecture',
      'High-performance custom product page layouts with variable matrixes',
      'High-concurrency caching rules for cart and account sessions',
      'ERP / WMS / PIM automated webhook synchronization pipelines'
    ],
    impactMetric: {
      value: '+34.8%',
      label: 'Average cart completion rate increase'
    },
    techStack: ['WooCommerce Core', 'Stripe Elements', 'Elasticsearch', 'REST API', 'Redis Object Cache']
  },
  {
    id: 'speed-optimization',
    number: '03',
    title: 'WordPress Speed & Core Web Vitals Optimization',
    searchQuery: 'wordpress speed optimization core web vitals',
    monthlySearches: '31,500/mo search volume',
    tagline: 'Guaranteed 95+ Google PageSpeed score. Sub-0.5s Largest Contentful Paint (LCP).',
    description: 'Google penalizes slow sites and customers abandon lagging pages. We audit, refactor, and hyper-optimize your WordPress stack: purging bloated CSS/JS, configuring Redis object caching, optimizing database tables, and tuning CDN edges.',
    keyBenefits: [
      'Pass all Core Web Vitals thresholds (LCP < 1.2s, INP < 150ms, CLS < 0.05)',
      'Persistent Redis / Memcached object caching reducing database load by 85%',
      'Next-gen image conversion (WebP/AVIF) and intelligent responsive source sets',
      'Cloudflare Enterprise edge caching and HTML micro-caching rules'
    ],
    deliverables: [
      'Full technical performance audit report with before/after waterfall charts',
      'CSS and JavaScript code splitting, tree shaking, and deferral architecture',
      'Database query optimization and wp_options autoload cleanup',
      'Edge CDN routing configuration and server-level Nginx/LiteSpeed tuning'
    ],
    impactMetric: {
      value: '0.38s',
      label: 'Median Largest Contentful Paint on mobile 4G'
    },
    techStack: ['Cloudflare Enterprise', 'Redis', 'Nginx FastCGI Cache', 'Lighthouse CI', 'WebP/AVIF']
  },
  {
    id: 'headless-wordpress',
    number: '04',
    title: 'Headless WordPress & Next.js Architecture',
    searchQuery: 'headless wordpress nextjs development',
    monthlySearches: '26,000/mo search volume',
    tagline: 'The editorial power of WordPress meets the speed and interactivity of Next.js / React.',
    description: 'Decouple your frontend for instant page loads and maximum security while keeping the intuitive WordPress Gutenberg editing interface your marketing team loves. We connect Next.js frontends to WordPress via WPGraphQL and ISR.',
    keyBenefits: [
      'Sub-second instantaneous route transitions powered by Next.js App Router',
      'Eliminate 99% of WordPress security attack vectors by hiding the backend',
      'Incremental Static Regeneration (ISR) ensures content updates publish in seconds',
      'Multi-channel content syndication to mobile apps, smart displays, and web'
    ],
    deliverables: [
      'Custom Next.js / React headless storefront or marketing frontend',
      'Optimized WPGraphQL schema and preview token authentication',
      'Live editorial visual previews in the WordPress dashboard',
      'CI/CD deployment pipeline on Vercel, AWS Amplify, or Cloud Run'
    ],
    impactMetric: {
      value: '99.99%',
      label: 'Uptime with zero public WordPress exposure'
    },
    techStack: ['Next.js 15', 'WPGraphQL', 'TypeScript', 'Vercel / AWS', 'Tailwind CSS']
  },
  {
    id: 'enterprise-migration',
    number: '05',
    title: 'Enterprise WordPress Migration & Multisite Scaling',
    searchQuery: 'enterprise wordpress migration services',
    monthlySearches: '19,500/mo search volume',
    tagline: 'Zero-downtime platform migrations from Drupal, Magento, Shopify, or legacy custom CMS.',
    description: 'Migrating millions of records without losing search rankings requires surgical precision. We execute zero-downtime database migrations, audit 301 redirects, preserve SEO equity, and architect unified Multisite networks for global brands.',
    keyBenefits: [
      'Seamless data transformation of millions of posts, users, orders, and assets',
      'Strict 1:1 SEO redirect mapping preventing organic search traffic drops',
      'Multisite network architecture for multi-region and multi-language brands',
      'Zero downtime switchover using DNS cutover and real-time database catch-up'
    ],
    deliverables: [
      'Automated ETL migration scripts for custom data mapping and metadata',
      'Comprehensive 301 redirect matrix and canonical URL verification',
      'Multisite domain mapping and cross-site user permissions structure',
      'Staging dry-run testing and comprehensive post-launch automated crawl'
    ],
    impactMetric: {
      value: '100%',
      label: 'Zero downtime and 0% organic SEO ranking loss'
    },
    techStack: ['WP-CLI', 'MySQL / PostgreSQL', 'Custom ETL Scripts', 'Screaming Frog', 'DNS Cutover']
  },
  {
    id: 'security-hardening',
    number: '06',
    title: 'WordPress Security Hardening & Malware Emergency Recovery',
    searchQuery: 'wordpress malware removal security hardening',
    monthlySearches: '21,000/mo search volume',
    tagline: 'Bank-grade protection, automated threat detection, and 2-hour emergency hack restoration.',
    description: 'Protect your brand reputation and sensitive customer data. We implement military-grade WordPress hardening, custom Web Application Firewall (WAF) rules, 2-factor authentication, and provide rapid emergency malware disinfection.',
    keyBenefits: [
      'Complete malware eradication and removal from Google / Norton blacklists within 4 hours',
      'Zero-trust file integrity monitoring and automated core vulnerability alerts',
      'Custom Cloudflare WAF rules stopping brute force, XML-RPC, and SQLi exploits',
      'Strict database prefixing, salts rotation, and wp-config lockdown'
    ],
    deliverables: [
      'Comprehensive code and database forensic intrusion analysis',
      'Complete codebase cleaning, backdoor removal, and core file restoration',
      'Custom hardened Nginx/Apache configuration and restricted REST endpoints',
      'Quarterly penetration testing and automated vulnerability patch cycles'
    ],
    impactMetric: {
      value: '0',
      label: 'Security breaches across 500+ hardened client platforms'
    },
    techStack: ['Cloudflare WAF', 'OWASP Rules', 'Linux Auditd', 'Fail2ban', 'WP-CLI Hardening']
  }
];
