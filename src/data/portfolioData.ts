import type { PortfolioItem } from '../utils/portfolioLogic';

export const PROFILE_INFO = {
  name: 'Davika Bai',
  roleLine: 'Graphic Designer · Social Media Designer · Brand Identity Designer',
  email: 'davikabai6@gmail.com',
  linkedinUrl:
    'https://www.linkedin.com/in/davika-bai-980137421?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  heroPortrait: '/src/assets/images/davika_hero_portrait_1794923068442.png',
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
    id: 'mouse-product-design',
    title: 'Modern Mouse Product Advertisement',
    category: 'Marketing & Video',
    year: '2025',
    clientOrIssuer: 'Personal Portfolio Project',
    summary:
      'Creative product advertisement featuring a modern computer mouse with attractive typography, clean composition, and professional visual presentation.',
    deliverables: 'Product Advertisement · Promotional Creative · Social Media Design',
    imageUrl: '/src/assets/images/mouse.jpg',
  },
  {
    id: 'shoes-advertisement',
    title: 'Footwear Product Advertising Design',
    category: 'Marketing & Video',
    year: '2025',
    clientOrIssuer: 'Personal Portfolio Project',
    summary:
      'Stylish footwear promotional design focused on product presentation, visual appeal, and attractive advertising composition.',
    deliverables: 'Footwear Advertisement · Product Creative',
    imageUrl: '/src/assets/images/shoes.jpg',
  },
  {
    id: 'headphones-product-design',
    title: 'Headphones Product Advertisement',
    category: 'Marketing & Video',
    year: '2025',
    clientOrIssuer: 'Personal Portfolio Project',
    summary:
      'Professional headphone product visual designed with a modern layout and engaging promotional presentation.',
    deliverables: 'Product Promotion · Social Media Creative',
    imageUrl: '/src/assets/images/headphones.jpg',
  },
  {
    id: 'ice-cream-advertisement',
    title: 'Ice Cream Promotional Design',
    category: 'Marketing & Video',
    year: '2025',
    clientOrIssuer: 'Personal Portfolio Project',
    summary:
      'Attractive ice cream promotional design featuring a refreshing food-focused visual style and appealing advertising composition.',
    deliverables: 'Food Advertisement · Product Promotion · Social Media Design',
    imageUrl: '/src/assets/images/ice-cream.jpg',
  },
  {
    id: 'freelancing-training-certificate',
    title: 'Freelancing Course Training Certificate',
    category: 'Certificates',
    year: '2026',
    clientOrIssuer: 'DigiSkills Training Program (Ministry of IT & Telecom, Ignite, VU)',
    summary:
      'Successful completion of the Freelancing course under DSTP3.0-Batch-03, verified by DigiSkills.pk, virtual university and Ignite.',
    deliverables: 'Training Certificate · Professional Skills Development · Freelancing',
    imageUrl: '/src/assets/images/freelancing-certificate.jpg',
  },
  {
    id: 'video-editing-animation-certificate',
    title: 'Video Editing, Animation & Vlogging Certificate',
    category: 'Certificates',
    year: '2026',
    clientOrIssuer: 'DigiSkills Training Program (Ministry of IT & Telecom, Ignite, VU)',
    summary:
      'Professional training certificate for completing Video Editing, Animation, and Vlogging course under DSTP3.0-Batch-03, DigiSkills.pk.',
    deliverables: 'Training Certificate · Video Editing · Animation · Vlogging',
    imageUrl: '/src/assets/images/video-editing-certificate.jpg',
  },
  {
    id: 'graphic-design-internship-certificate',
    title: 'Graphic Design Remote Internship Certificate',
    category: 'Certificates',
    year: '2026',
    clientOrIssuer: 'Primelink Management Solutions',
    summary:
      'Certificate of Internship recognizing successful completion of a Remote Internship as a Graphic Designer, demonstrating creativity, dedication, and quality output.',
    deliverables: 'Internship Certificate · Graphic Design · Work Experience · Remote Job',
    imageUrl: '/src/assets/images/internship-certificate.jpg',
  },
];