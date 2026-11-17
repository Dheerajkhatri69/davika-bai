import type { PortfolioItem } from '../utils/portfolioLogic';

export const PROFILE_INFO = {
  name: 'Davika Bai',
  roleLine: 'Graphic Designer · Social Media Designer · Brand Identity Designer',
  email: 'davikabai6@gmail.com',
  linkedinUrl:
    'https://www.linkedin.com/in/davika-bai-980137421?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  heroPortrait: '/src/assets/images/davika_hero_portrait_1794923068442.jpg',
  aboutParagraphs: [
    "Hi! I'm Davika Bai, a passionate Graphic Designer with 3 years of experience in creating clean, modern, and engaging visuals.",
    'I have worked with 3 marketing agencies and gained practical experience through internships. I specialize in creating creative designs that help businesses build their brand identity and connect with their audience.',
    'I enjoy turning ideas into attractive visual designs. I am always interested in learning new skills, exploring creative ideas, and improving my design abilities.',
    'My goal is to grow as a professional Graphic Designer and work with brands and businesses around the world.',
  ],
  careerGoal:
    'My goal is to become a successful professional Graphic Designer, improve my creative skills, work with international brands, and build a strong professional career.',
  connectMessage:
    "I'm always interested in creative opportunities, professional collaborations, and paid graphic design projects. Let's connect and create something creative together!",
};

export const HERO_METRICS = [
  { value: '3+ Years', label: 'Graphic Design Experience' },
  { value: '3 Agencies', label: 'Marketing Collaborations' },
  { value: '8 Services', label: 'Brand, Social & Visual' },
  { value: 'BS 2026', label: 'SMIU Food Science & Tech' },
];

export const SERVICES_LIST = [
  {
    index: '01',
    title: 'Social Media Post Design',
    description:
      'Scroll-stopping Instagram, Facebook, and LinkedIn posts, carousels, and campaign templates built for engagement.',
  },
  {
    index: '02',
    title: 'Brand Identity Design',
    description:
      'Cohesive logos, typography pairings, color systems, and brand guidelines that give businesses a clear visual voice.',
  },
  {
    index: '03',
    title: 'Marketing Creatives',
    description:
      'High-converting ad banners, promotional flyers, and launch visuals tailored for agency and digital campaigns.',
  },
  {
    index: '04',
    title: 'Canva Design',
    description:
      'Modular, editable Canva template suites empowering teams to publish on-brand graphics quickly and consistently.',
  },
  {
    index: '05',
    title: 'Presentation Design',
    description:
      'Clean, structured pitch decks, academic slides, and company profiles designed for clarity and executive impact.',
  },
  {
    index: '06',
    title: 'YouTube Thumbnail Design',
    description:
      'Expressive, high-contrast thumbnails with strong focal hierarchy engineered to boost click-through rates.',
  },
  {
    index: '07',
    title: 'Basic Video Editing',
    description:
      'Crisp reels, social cuts, title overlays, and paced promotional clips ready for short-form platforms.',
  },
  {
    index: '08',
    title: 'Content Design',
    description:
      'Story-driven visual layouts pairing clear copy structure with modern typography for digital publications.',
  },
];

export const SKILLS_LIST = [
  'Graphic Design',
  'Social Media Design',
  'Brand Identity',
  'Canva',
  'Adobe Photoshop',
  'Figma (Basic)',
  'Marketing Creatives',
  'Presentation Design',
  'YouTube Thumbnail Design',
  'Basic Video Editing',
  'Creativity',
  'Communication',
];

export const INTERESTS_LIST = [
  'Graphic Designing',
  'Creative Arts',
  'Food Science',
  'Biotechnology',
  'Learning New Skills',
  'Exploring New Ideas',
];

export const EXPERIENCE_ITEMS = [
  {
    role: 'Graphic Designer',
    period: '3 Years Experience',
    organization: '3 Marketing Agencies & Design Internships',
    highlights: [
      'Collaborated with 3 marketing agencies on multi-channel brand and campaign visuals.',
      'Gained hands-on industry experience through structured graphic design internships.',
      'Created clean, modern, and purpose-driven visual assets across print and digital formats.',
      'Delivered ongoing social media graphics and brand identity collateral for diverse businesses.',
    ],
  },
];

export const EDUCATION_ITEMS = [
  {
    level: 'Current Education',
    degree: 'BS Food Science & Technology',
    institution: 'Sindh Madressatul Islam University (SMIU)',
    timeline: 'Start Year: 2026',
  },
  {
    level: 'College Education',
    degree: 'Pre-Medical Program',
    institution: 'Govt. Degree Girls College, Light House, Karachi',
    timeline: 'Intermediate',
  },
  {
    level: 'School Education',
    degree: 'Science Program',
    institution: 'Fazlur Rehman Government Girls School',
    timeline: 'Matriculation',
  },
];

export const DEFAULT_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'brand-identity-arissa',
    title: 'Botanical Brand Identity & Packaging Suite',
    category: 'Brand Identity',
    year: '2025',
    clientOrIssuer: 'Studio Showcase · Brand Systems',
    summary:
      'Complete identity architecture featuring wordmark typography, packaging layout, stationery suite, and minimalist brand guideline sheets.',
    deliverables: 'Logo System · Packaging · Brand Book',
    imageUrl: '/src/assets/images/work_brand_identity_1794923068421.jpg',
  },
  {
    id: 'social-campaign-grid',
    title: 'Editorial Social Media Campaign System',
    category: 'Social Media',
    year: '2025',
    clientOrIssuer: 'Marketing Agency Collaboration',
    summary:
      'Cohesive multi-post grid and carousel toolkit built with structured Swiss typography and warm earthy palette accents for sustained audience growth.',
    deliverables: 'Instagram Grid · Carousels · Canva Templates',
    imageUrl: '/src/assets/images/work_social_media_1794923069368.jpg',
  },
  {
    id: 'marketing-deck-thumbnails',
    title: 'Campaign Presentation & YouTube Thumbnail Pack',
    category: 'Marketing & Video',
    year: '2024',
    clientOrIssuer: 'Agency & Creator Clients',
    summary:
      'High-impact digital marketing presentation decks paired with contrast-tested YouTube thumbnail compositions designed for clear storytelling.',
    deliverables: 'Pitch Deck · YouTube Thumbnails · Ad Creatives',
    imageUrl: '/src/assets/images/work_marketing_creative_1794923068997.jpg',
  },
  {
    id: 'internship-certificate-folio',
    title: 'Marketing Agency Internship Certificates Archive',
    category: 'Certificates',
    year: '2023–2025',
    clientOrIssuer: 'Marketing Agencies & Internships',
    summary:
      'Dedicated archive for verified agency internship certificates and training credentials. Use "Upload Work / Certificate" to add your official certificate scans directly.',
    deliverables: 'Internship Credentials · Upload Ready',
    imageUrl: '/src/assets/images/certificate_folio_1794923114561.jpg',
    isPendingUpload: true,
  },
];
