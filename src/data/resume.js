// Single source of truth — every line of the resume lives here.
// Update this file and the whole site updates.

export const profile = {
  name: 'Amir Khan J',
  firstName: 'Amir',
  role: 'Software Engineer – React Developer',
  experience: '3.7',
  location: 'Chennai, India',
  phone: '+91 8608651201',
  email: 'itsroiak@gmail.com',
  linkedin: 'https://linkedin.com/in/amir-khan-j',
  linkedinLabel: 'linkedin.com/in/amir-khan-j',
  portfolio: 'https://amir-khan-port-folio.vercel.app',
  resume: 'https://drive.google.com/drive/u/0/folders/1TsD-b_Jen0tMm55dS1MmIsH3fGp0Nt_j',
  roles: [
    'React Developer',
    'TypeScript Enthusiast',
    'Fintech UI Builder',
    'Performance Optimizer',
    'Next.js Engineer',
  ],
}

export const summary = {
  intro:
    'React Developer with 3.7 years of hands-on experience building responsive, high-performance and user-friendly web applications for fintech, banking and e-commerce clients.',
  points: [
    { k: 'core', v: 'React.js — components, hooks, Context, Redux Toolkit' },
    { k: 'language', v: 'TypeScript & modern JavaScript (ES6+)' },
    { k: 'styling', v: 'Tailwind CSS & Material UI' },
    { k: 'apis', v: 'REST APIs end to end' },
    { k: 'backend', v: 'Node.js & Express.js' },
    { k: 'ownership', v: 'Design discussion → deployment' },
    { k: 'workflow', v: 'Git pull-request reviews' },
    { k: 'setup', v: 'Rotational shifts ready' },
  ],
  domains: ['Fintech', 'Banking', 'E-commerce'],
}

export const skills = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '⚛',
    items: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    id: 'state',
    label: 'State Management',
    icon: '◎',
    items: ['React Hooks', 'Context API', 'Redux Toolkit', 'Redux'],
  },
  {
    id: 'ui',
    label: 'UI & Styling',
    icon: '◈',
    items: ['Tailwind CSS', 'Material UI', 'Bootstrap', 'Responsive Design', 'Accessible Design', 'Cross-browser Design'],
  },
  {
    id: 'api',
    label: 'APIs & Backend',
    icon: '⇄',
    items: ['REST APIs', 'JSON', 'JWT Authentication', 'Third-party Integrations', 'Node.js', 'Express.js'],
  },
  {
    id: 'perf',
    label: 'Performance',
    icon: '⚡',
    items: ['Code Splitting', 'Lazy Loading', 'React.memo', 'useMemo', 'useCallback', 'Core Web Vitals', 'SEO'],
  },
  {
    id: 'tools',
    label: 'Tools & Others',
    icon: '⌘',
    items: ['Git', 'GitHub', 'Pull Request Reviews', 'Vite', 'Webpack', 'Postman', 'Agile/Scrum', 'AI-assisted dev (Claude)'],
  },
]

export const experience = [
  {
    id: 'compunet',
    company: 'Compunet Connections',
    role: 'Software Engineer',
    period: 'Jan 2025 – Jun 2026',
    branch: 'feature/fintech-p2p',
    tagline: 'Saudi-based peer-to-peer lending platform',
    stack: ['React.js', 'TypeScript', 'Redux Toolkit', 'Material UI', 'Next.js', 'JWT'],
    commits: [
      'Developed the public website and investor/borrower dashboard for a Saudi-based peer-to-peer lending platform using React.js, TypeScript, Redux Toolkit and Material UI.',
      'Built reusable components and managed complex form and application state with React Hooks, Context and Redux Toolkit.',
      'Integrated REST APIs across 3 core modules (loan, investment and KYC verification) for real-time data, with JWT-based authentication, async state handling and clear error states.',
      'Implemented server-side rendering (SSR) and dynamic routing with Next.js, and improved Core Web Vitals with lazy loading and code splitting, reducing initial page load time by 30%.',
      'Reduced unnecessary re-renders through React profiling and performance-optimized React Hooks, improving UI responsiveness.',
      'Owned features from design discussion to deployment, collaborated with the backend team on Node.js/Express API contracts, and took part in code reviews via pull requests.',
    ],
  },
  {
    id: 'xerago',
    company: 'Xerago',
    role: 'Associate Developer',
    period: 'Jan 2024 – Jan 2025',
    branch: 'feature/banking-ui',
    tagline: 'Banking interfaces for Citi & Ujjivan Small Finance Bank',
    stack: ['React.js', 'TypeScript', 'React Router', 'SPA', 'Accessibility'],
    commits: [
      'Translated designs into pixel-accurate, responsive and accessible banking interfaces for Citi and Ujjivan Small Finance Bank using React.js and TypeScript, tested across browsers.',
      "Built Single Page Applications with React Router and contributed 20+ reusable components to Ujjivan Bank's core platform.",
      'Delivered a custom LMS (Learning Management System) platform for internal employee training.',
      'Optimized frontend API consumption patterns, cutting redundant API calls by 20% and enabling reliable real-time updates.',
    ],
  },
  {
    id: 'innoppl',
    company: 'Innoppl',
    role: 'Junior Software Engineer',
    period: 'Aug 2022 – Sep 2023',
    branch: 'feature/shopify-stores',
    tagline: 'Shopify e-commerce storefronts',
    stack: ['React.js', 'Shopify Liquid', 'Mobile-first', 'SEO'],
    commits: [
      'Developed 2 Shopify e-commerce websites, Hold the Magic and Elite Shield, using React.js and Shopify Liquid.',
      'Built reusable UI components with form validations and mobile-first responsive layouts.',
      'Improved mobile page speed by 25% through image optimization and lazy loading, with SEO-friendly pages.',
    ],
  },
]

export const metrics = [
  { value: 3.7, decimals: 1, suffix: ' yrs', label: 'Professional React experience' },
  { value: 30, suffix: '%', label: 'Faster initial page load (Next.js SSR + code splitting)' },
  { value: 25, suffix: '%', label: 'Faster mobile page speed (Shopify)' },
  { value: 20, suffix: '%', label: 'Fewer redundant API calls (banking)' },
  { value: 20, suffix: '+', label: "Reusable components in Ujjivan Bank's core platform" },
  { value: 3, suffix: '', label: 'Core fintech modules integrated — loan, investment, KYC' },
]

export const projects = [
  {
    title: 'Raqamyah',
    client: 'Compunet Connections',
    kind: 'Fintech',
    link: 'https://raqamyah.com/en',
    desc: 'Saudi-based P2P lending platform — public website + investor/borrower dashboard with loan, investment & KYC modules, JWT auth and Next.js SSR.',
    tags: ['Next.js', 'TypeScript', 'Redux Toolkit', 'MUI'],
    hue: 152,
  },
  {
    title: 'Citi',
    client: 'Xerago',
    kind: 'Banking',
    link: 'https://www.citibank.ae/credit-cards/travel/citi-ultima-credit-card',
    desc: 'Pixel-accurate, responsive and accessible banking interfaces, tested across browsers.',
    tags: ['React.js', 'TypeScript', 'A11y'],
    hue: 205,
  },
  {
    title: 'Ujjivan Bank',
    client: 'Xerago',
    kind: 'Banking',
    link: 'https://www.ujjivansfb.bank.in/',
    desc: 'SPA built with React Router — 20+ reusable components contributed to the core platform.',
    tags: ['React Router', 'SPA', 'Components'],
    hue: 265,
  },
  {
    title: 'Hold the Magic',
    client: 'Innoppl',
    kind: 'E-commerce',
    link: 'https://holdthemagic.com/',
    desc: 'Shopify storefront with reusable UI, validated forms and mobile-first layouts.',
    tags: ['React.js', 'Shopify Liquid'],
    hue: 320,
  },
  {
    title: 'Elite Shield',
    client: 'Innoppl',
    kind: 'E-commerce',
    link: 'https://www.eliteshield.com/',
    desc: 'Shopify storefront — image optimization and lazy loading for 25% faster mobile speed.',
    tags: ['Shopify', 'SEO', 'Performance'],
    hue: 0,
  },
  {
    title: 'Chocolat Moderne',
    client: 'Shopify',
    kind: 'E-commerce',
    link: 'https://chocolatmoderne.com/',
    desc: 'Premium chocolate e-commerce storefront with mobile-first, SEO-friendly pages.',
    tags: ['Shopify', 'E-commerce', 'Responsive'],
    hue: 25,
  },
]

export const education = [
  {
    title: 'Bachelor of Computer Applications (B.C.A.)',
    place: 'Asan Memorial College of Arts & Science, Chennai',
    period: '2017 – 2020',
    score: '75%',
  },
  {
    title: 'Frontend Development Certification',
    place: 'FITA Academy',
    period: 'Mar 2022 – Jul 2022',
    score: 'Certified',
  },
]
