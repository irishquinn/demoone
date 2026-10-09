import { PortfolioItem } from '../types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'portfolio-1',
    slug: 'aura-health',
    title: 'Aura Health & Genomics',
    client: 'Aura Health Inc.',
    industry: 'Healthcare & Biotech',
    year: '2025',
    headline: 'Headless Patient Portal & Telehealth Scheduling Built on WPGraphQL',
    tagline: 'Sub-400ms speed with HIPAA-compliant custom data layers and React frontend.',
    thumbnailSvg: 'health',
    accentColor: '#0EA5E9',
    metrics: [
      { label: 'Page Load Speed', value: '0.41s', context: 'From 3.8s on legacy WordPress' },
      { label: 'Booking Conversion', value: '+184%', context: 'Streamlined telehealth flow' },
      { label: 'Google PageSpeed', value: '99/100', context: 'Mobile and Desktop verified' }
    ],
    challenge: 'Aura Health operated on a bloated monolithic WordPress setup with 48 active plugins and an unmaintained commercial theme. Telehealth patient booking forms experienced a 62% abandonment rate due to 4-second initial load times and broken mobile layouts.',
    solution: 'We decoupled the architecture: retaining WordPress as a secure, familiar CMS for their editorial team while engineering a blazing Next.js frontend communicating via optimized WPGraphQL schemas and Redis caching layers. All patient intake forms were re-engineered with native client-side validation.',
    architecture: ['Headless WordPress 6.7', 'Next.js 15 App Router', 'WPGraphQL', 'Redis Cache', 'HIPAA Secure Vault'],
    clientQuote: {
      quote: "Vektor transformed our clunky, vulnerable healthcare portal into an enterprise-grade digital flagship. Patient bookings nearly tripled in the first 90 days following launch.",
      author: 'Dr. Sarah Jenkins',
      role: 'Chief Technology Officer',
      company: 'Aura Health & Genomics'
    },
    deliverablesList: [
      'Bespoke decoupled Headless Next.js web application',
      'Custom WPGraphQL endpoint extension with token security',
      'Telehealth calendar appointment funnel with Stripe pre-authorization',
      'Zero-downtime database migration of 140,000 patient records'
    ],
    liveUrlMock: 'https://aurahealth.example.com'
  },
  {
    id: 'portfolio-2',
    slug: 'finova-capital',
    title: 'Finova Capital Group',
    client: 'Finova Global Partners',
    industry: 'Financial Services & Private Equity',
    year: '2025',
    headline: 'Institutional Private Equity Portal with Live Fund Telemetry',
    tagline: 'Bank-grade security hardening and custom investor dashboard blocks.',
    thumbnailSvg: 'fintech',
    accentColor: '#F59E0B',
    metrics: [
      { label: 'AUM Inbound Inquiries', value: '+$42M', context: 'In qualified accredited investor pipeline' },
      { label: 'Security Score', value: 'A+ (100%)', context: 'Passed independent third-party audit' },
      { label: 'First Contentful Paint', value: '0.36s', context: 'Global CDN edge cached' }
    ],
    challenge: 'Finova manages over $1.2B in institutional capital. Their previous web presence failed enterprise penetration audits, lacked investor credential gating, and required manual developer intervention for every simple fund quarterly report update.',
    solution: 'We engineered a bespoke WordPress theme with custom Gutenberg blocks utilizing PHP 8.3 and modern web security headers. We integrated strict Content Security Policies (CSP), hardware 2FA enforcement, automated audit logging, and private investor report rooms.',
    architecture: ['Custom Gutenberg FSE Theme', 'PHP 8.3 OOP', 'Tailwind CSS', 'Cloudflare WAF Enterprise', 'PostgreSQL Mirror'],
    clientQuote: {
      quote: "The level of engineering rigor Vektor brought to our corporate site was indistinguishable from elite tier-one Wall Street engineering teams. Flawless execution and zero security vulnerabilities.",
      author: 'Marcus Vance',
      role: 'Managing Partner & Head of IR',
      company: 'Finova Capital Group'
    },
    deliverablesList: [
      'Custom institutional WordPress theme with zero third-party dependencies',
      'Gated LP investor portal with dynamic watermarked PDF generation',
      'Automated quarterly financial chart Gutenberg blocks',
      'Full SOC2 compliance documentation & penetration test remediation'
    ],
    liveUrlMock: 'https://finovacapital.example.com'
  },
  {
    id: 'portfolio-3',
    slug: 'velocita-motors',
    title: 'Velocita Hypercars',
    client: 'Velocita Performance Automobili',
    industry: 'Luxury Automotive & Racing',
    year: '2025',
    headline: 'High-Impact Editorial Automotive Showcase with 3D Canvas Preview',
    tagline: 'Cinematic brand immersion without sacrificing Core Web Vitals.',
    thumbnailSvg: 'auto',
    accentColor: '#EF4444',
    metrics: [
      { label: 'Session Duration', value: '4m 12s', context: '+210% increase over previous site' },
      { label: 'VIP Test Drive Inquiries', value: '380+', context: 'High-net-worth customer bookings' },
      { label: 'Lighthouse Performance', value: '98/100', context: 'Even with high-res 4K assets' }
    ],
    challenge: 'Velocita needed a visceral digital showroom that matched the bespoke engineering of their million-dollar vehicles. Previous agency attempts resulted in lagging videos, 6-second load times, and broken layouts across mobile displays.',
    solution: 'We built a bespoke custom theme utilizing responsive modern video streaming (HLS), hardware-accelerated CSS transitions, and lazy-loaded WebGL canvas modules. Media loads asynchronously without blocking initial paint.',
    architecture: ['Custom WP Block Theme', 'WebGL Three.js Micro-module', 'HLS Video Streaming', 'Nginx Microcache', 'WebP/AVIF Pipeline'],
    clientQuote: {
      quote: "Our clients expect perfection in every carbon fiber stitch; Vektor delivered that exact obsessive craftsmanship in code. The showroom feels alive and instantaneous.",
      author: 'Enzo Castiglione',
      role: 'Brand Director',
      company: 'Velocita Performance'
    },
    deliverablesList: [
      'Interactive 3D vehicle paint and wheel customizer module',
      'Fluid typographic responsive grid system',
      'Bespoke dealership locator with distance matrix routing',
      'Global multi-language WordPress multisite installation (EN, IT, DE, JP)'
    ],
    liveUrlMock: 'https://velocita-motors.example.com'
  },
  {
    id: 'portfolio-4',
    slug: 'nordic-living',
    title: 'Nordic Form Living',
    client: 'Nordic Form Design Studio',
    industry: 'Luxury Furniture & D2C E-Commerce',
    year: '2024',
    headline: 'High-Volume WooCommerce Flagship with Sub-200ms Faceted Search',
    tagline: 'Scaling to $18M annual GMV with instant slide-out checkout.',
    thumbnailSvg: 'furniture',
    accentColor: '#10B981',
    metrics: [
      { label: 'Checkout Completion', value: '+39.4%', context: 'Reduced 4-step friction to 1-page' },
      { label: 'Catalog Search Speed', value: '140ms', context: 'Across 45,000 product variants' },
      { label: 'Mobile Bounce Rate', value: '-48%', context: 'Instant mobile product rendering' }
    ],
    challenge: 'Nordic Form was losing thousands of dollars during peak sales campaigns due to standard WooCommerce cart slowdowns, checkout timeouts, and sluggish category filtering across 45,000 variant combinations.',
    solution: 'We re-architected WooCommerce from the ground up: installed Elasticsearch for sub-200ms instantaneous faceted search, engineered a customized headless sliding cart, and configured Redis object caching to handle 5,000 concurrent cart updates.',
    architecture: ['WooCommerce 9.0', 'Elasticsearch 8', 'Stripe Elements SDK', 'Redis Enterprise', 'Custom React Mini-Cart'],
    clientQuote: {
      quote: "Our Black Friday event processed record volume without a single server hiccup or dropped transaction. Vektor is the highest ROI investment our e-commerce business made this decade.",
      author: 'Astrid Lindqvist',
      role: 'VP of E-Commerce',
      company: 'Nordic Form Living'
    },
    deliverablesList: [
      'High-performance WooCommerce custom template rebuild',
      'Sub-200ms faceted filter engine with instant URL state push',
      'Bespoke single-page express checkout with Apple Pay & Google Pay',
      'Automated bidirectional inventory sync with ERP system'
    ],
    liveUrlMock: 'https://nordicform.example.com'
  },
  {
    id: 'portfolio-5',
    slug: 'stratum-cloud',
    title: 'Stratum Cloud Systems',
    client: 'Stratum Infrastructure',
    industry: 'Enterprise Developer Tools & SaaS',
    year: '2025',
    headline: 'Multisite Network Powering 14 Global Regional Sites & Developer Docs',
    tagline: 'Unified design system across multi-region documentation and marketing.',
    thumbnailSvg: 'cloud',
    accentColor: '#6366F1',
    metrics: [
      { label: 'Global Regions', value: '14 Sites', context: 'Unified single codebase management' },
      { label: 'Developer Signups', value: '+118%', context: 'Directly from technical documentation' },
      { label: 'Core Web Vitals Pass', value: '100%', context: 'Across all 14 multi-domain nodes' }
    ],
    challenge: 'Stratum had fragmented websites spread across different CMS platforms across US, Europe, and Asia, making brand consistency impossible and developer documentation updates a multi-day nightmare.',
    solution: 'We designed an enterprise WordPress Multisite network with shared custom Gutenberg block libraries, centralized user management, automated multi-language translation workflows, and syntax-highlighted technical documentation modules.',
    architecture: ['WordPress Multisite Network', 'Custom Block Patterns', 'Algolia DocSearch', 'Cloudflare Edge SSL', 'GitHub Actions CI/CD'],
    clientQuote: {
      quote: "Managing 14 country sites used to require 6 disparate teams. With Vektor's multisite framework, our global team publishes coordinated product launches in minutes.",
      author: 'Kavita Patel',
      role: 'VP of Developer Relations',
      company: 'Stratum Cloud Systems'
    },
    deliverablesList: [
      'Multi-tenant WordPress Multisite network architecture',
      'Custom syntax-highlighted code block library with copy-to-clipboard',
      'Automated staging-to-production CI/CD deployment pipeline',
      'Geo-IP routing directing international visitors to localized sites'
    ],
    liveUrlMock: 'https://stratumcloud.example.com'
  },
  {
    id: 'portfolio-6',
    slug: 'artisan-roast',
    title: 'Artisan Roast Co.',
    client: 'Artisan Specialty Roasters',
    industry: 'Specialty Coffee & Subscription D2C',
    year: '2024',
    headline: 'Custom Recurring Coffee Subscription Engine & Custom Roaster Box Builder',
    tagline: 'Interactive subscription frequency builder with 89% recurring retention.',
    thumbnailSvg: 'coffee',
    accentColor: '#D97706',
    metrics: [
      { label: 'MRR Growth', value: '+310%', context: 'Within 6 months of launching new builder' },
      { label: 'Churn Rate', value: '2.8%', context: 'Industry average is >8.5%' },
      { label: 'Average Order Value', value: '+$18.50', context: 'Driven by multi-bag subscription builder' }
    ],
    challenge: 'Off-the-shelf WooCommerce subscription plugins were clunky and inflexible. Customers could not easily swap coffee roast profiles, skip delivery weeks, or build custom tasting boxes, leading to elevated customer churn.',
    solution: 'We engineered a bespoke React-powered subscription configurator integrated directly into WooCommerce Subscriptions and Stripe Billing API, giving subscribers a self-serve portal to adjust roast schedules with one click.',
    architecture: ['WooCommerce Subscriptions', 'React Configurator Block', 'Stripe Billing API', 'Klaviyo Custom Hooks', 'Redis Cache'],
    clientQuote: {
      quote: "Our recurring subscription revenue skyrocketed because the box builder is so joyful and effortless to use. Vektor engineered exactly what our brand needed to scale.",
      author: 'Oliver Bennett',
      role: 'Founder & Master Roaster',
      company: 'Artisan Roast Co.'
    },
    deliverablesList: [
      'Custom React multi-step box builder with dynamic price recalculation',
      'Self-service customer account portal for delivery schedule adjustments',
      'Automated roasting batch production sheet generation via WP-CLI',
      'Frictionless SMS notification webhooks for shipment tracking'
    ],
    liveUrlMock: 'https://artisanroast.example.com'
  },
  {
    id: 'portfolio-7',
    slug: 'kinetic-arch',
    title: 'Kinetic Architecture',
    client: 'Kinetic Urban Studio',
    industry: 'Architecture & Spatial Design',
    year: '2025',
    headline: 'Ultra-Minimalist Architectural Portfolio with Dynamic Blueprint Grids',
    tagline: 'Aesthetically disciplined portfolio with custom horizontal scroll modules.',
    thumbnailSvg: 'architecture',
    accentColor: '#8B5CF6',
    metrics: [
      { label: 'Awwwards Recognition', value: 'Site of the Day', context: 'Recognized for technical excellence' },
      { label: 'High-Ticket Inbound RFP', value: '$8.4M', context: 'In institutional architecture contracts' },
      { label: 'Page Weight', value: '840 KB', context: 'Despite rich high-definition photography' }
    ],
    challenge: 'Kinetic wanted an editorial showpiece that honoured physical spatial principles without the heavy lag of generic agency themes. They needed custom interactive project grids and architectural plan overlays.',
    solution: 'We developed an ultra-lean custom theme adhering to strict typographic restraint and geometric alignment. Projects feature fluid interactive case study layouts, before/after construction sliders, and vector blueprint overlays.',
    architecture: ['Custom Block Theme', 'Motion Framework', 'SVG Blueprint Engine', 'Responsive Picture Tag', 'PHP 8.3'],
    clientQuote: {
      quote: "Vektor understood our obsession with proportion and space. Our website feels like a physical gallery—restrained, precise, and breathtakingly fast.",
      author: 'Elena Rostova',
      role: 'Principal Architect',
      company: 'Kinetic Urban Studio'
    },
    deliverablesList: [
      'Architectural blueprint overlay comparison component',
      'Fluid project index with live category and material taxonomy filters',
      'Custom full-bleed photography lightbox with zero CLS layout shifts',
      'Client publication press kit automated download generator'
    ],
    liveUrlMock: 'https://kineticarch.example.com'
  },
  {
    id: 'portfolio-8',
    slug: 'verdant-organics',
    title: 'Verdant Organics',
    client: 'Verdant Farmstead Direct',
    industry: 'Organic Agriculture & Farm-to-Table',
    year: '2024',
    headline: 'B2B Wholesale & Direct-to-Consumer Hybrid WooCommerce Marketplace',
    tagline: 'Dual pricing tiers, regional delivery route cutoff timers, and Core Web Vitals 99.',
    thumbnailSvg: 'organics',
    accentColor: '#059669',
    metrics: [
      { label: 'Wholesale B2B Volume', value: '+265%', context: 'In automated restaurant recurring orders' },
      { label: 'LCP Score', value: '0.38s', context: 'Fastest in the farm-to-table sector' },
      { label: 'Cart Abandonment', value: '-35%', context: 'Streamlined regional zip code validation' }
    ],
    challenge: 'Verdant needed to cater to two completely different customer groups: retail household shoppers and high-volume wholesale restaurant chefs, each requiring different pricing tiers, order minimums, and delivery cutoff windows.',
    solution: 'We built a custom hybrid WooCommerce platform with automated role-based pricing, regional ZIP-code delivery route verification, recurring standing wholesale orders, and automated packing manifest generation.',
    architecture: ['WooCommerce B2B/B2C Core', 'Custom ZIP Router', 'QuickBooks Desktop Sync', 'Cloudflare CDN', 'Redis Object Cache'],
    clientQuote: {
      quote: "Managing wholesale chefs and home cooks on one single platform seemed impossible until Vektor built our custom WooCommerce architecture. It completely streamlined our farm logistics.",
      author: 'Caleb Morgan',
      role: 'Operations Director',
      company: 'Verdant Organics'
    },
    deliverablesList: [
      'Role-based wholesale vs retail pricing engine with volume discounts',
      'Regional harvest schedule cutoff timer countdown module',
      'Automated daily farm pack-sheet export for warehouse pickers',
      'Clean accessibility audit compliant with WCAG 2.1 AA'
    ],
    liveUrlMock: 'https://verdantorganics.example.com'
  },
  {
    id: 'portfolio-9',
    slug: 'pulse-media',
    title: 'Pulse Global Media',
    client: 'Pulse News Media Group',
    industry: 'Digital Publishing & News Media',
    year: '2025',
    headline: 'High-Concurrency Digital Newsroom Handling 15M Monthly Readers',
    tagline: 'Sub-300ms Time-to-First-Byte with advanced edge caching and ad yield optimization.',
    thumbnailSvg: 'media',
    accentColor: '#0284C7',
    metrics: [
      { label: 'Monthly Pageviews', value: '15,000,000+', context: 'Handled with 0 seconds downtime' },
      { label: 'TTFB (Time to First Byte)', value: '180ms', context: 'Edge cached across 280 global PoPs' },
      { label: 'Ad Viewability Rate', value: '78.4%', context: 'Non-intrusive high-yield layout' }
    ],
    challenge: 'Pulse experiences massive traffic spikes when breaking news occurs. Their legacy WordPress infrastructure crashed during major news events, and slow ad scripts degraded their Google Core Web Vitals into the red zone.',
    solution: 'We re-architected their WordPress platform with Cloudflare Enterprise stale-while-revalidate edge caching, decoupled editorial content syndication, optimized lazy ad slot containers that eliminate layout shifts (CLS < 0.01), and instant RSS feeds.',
    architecture: ['Enterprise WordPress', 'Cloudflare Workers Edge', 'Prebid.js Lazy Slots', 'MariaDB Galera Cluster', 'WP-CLI Publisher Queue'],
    clientQuote: {
      quote: "When breaking news strikes and millions of readers hit our articles at once, our site doesn't even flinch. Vektor delivered rock-solid enterprise publishing stability.",
      author: 'David Thorne',
      role: 'Executive Managing Editor',
      company: 'Pulse Global Media'
    },
    deliverablesList: [
      'Edge-cached HTML caching architecture supporting 50,000 req/sec',
      'Zero-CLS advertising slot reservation containers',
      'Editorial live-blogging custom block with automated SSE stream',
      'Automated Apple News and Google News AMP/Schema XML feeds'
    ],
    liveUrlMock: 'https://pulsemedia.example.com'
  }
];
