
import { 
  Code2, 
  Cpu, 
  Layout, 
  Search, 
  TrendingUp, 
  Palette,
  Rocket,
  ShieldCheck,
  Users,
  Smartphone,
  Cloud,
  Database,
  BarChart3,
  Layers,
  Zap,
  Globe,
  Settings,
  Workflow
} from 'lucide-react';
import { Service, Project, Testimonial, Career } from './types';

// Import all service images
import webDevImg from './public/services/web.jpeg';
import aiSolutionsImg from './public/services/AI.jpeg';
import saasDevImg from './public/services/SaaS.jpeg';
import marketingSeoImg from './public/services/SEO.jpeg';
import canvaDesignImg from './public/services/Graphic.jpeg';
import appDevImg from './public/services/App.jpeg';
import cloudComputingImg from './public/services/Cloud.jpeg';
import webScrapingImg from './public/services/Scapring.jpeg';

// Import all project images
import aiTripAdvisorImg from './public/projects/TripAdviser.png';
import shehrityImg from './public/projects/Shehrity.png';
import eduPrepImg from './public/projects/EduPerp.png';
import freelyGoNorthImg from './public/projects/FreelyGoNorth.png';
import sparkBrightImg from './public/projects/SparkBright.png';
import blackPantherBatteriesImg from './public/projects/blackpantherbatteries.png';

// Import team images
import harisHussainImg from './public/team/HarisHussain.jpeg';
import arsalanSaleemImg from './public/team/arsalansaleem.jpeg';
import umarMustafaImg from './public/team/umar.jpeg';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Bespoke React, Next.js, and Node.js solutions built for scale and speed.',
    icon: 'Code2',
    image: webDevImg,
    details: ['Full-stack Architectures', 'Performance Optimization', 'E-commerce Solutions']
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Transform your workflow with intelligent chatbots and ML-driven automation.',
    icon: 'Cpu',
    image: aiSolutionsImg,
    details: ['LLM Integration', 'Process Automation', 'Predictive Analytics']
  },
  {
    id: 'saas-dev',
    title: 'SaaS Development',
    description: 'From MVP to enterprise-grade subscription platforms.',
    icon: 'Layout',
    image: saasDevImg,
    details: ['Subscription Management', 'Multi-tenancy', 'Cloud Scalability']
  },
  {
    id: 'marketing-seo',
    title: 'Digital Marketing & SEO',
    description: 'Dominate search results and scale your brand with comprehensive digital strategies.',
    icon: 'TrendingUp',
    image: marketingSeoImg,
    details: ['SEO Strategy & Optimization', 'PPC Management', 'Social Media Marketing', 'Brand Positioning']
  },
  {
    id: 'canva-design',
    title: 'Creative Design',
    description: 'Stunning marketing collateral and brand identity via modern design tools.',
    icon: 'Palette',
    image: canvaDesignImg,
    details: ['Social Media Kits', 'Pitch Decks', 'Brand Assets']
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications built for performance and user experience.',
    icon: 'Smartphone',
    image: appDevImg,
    details: ['iOS & Android Development', 'React Native Apps', 'App Store Optimization']
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Scalable cloud infrastructure and migration services for enterprise growth.',
    icon: 'Cloud',
    image: cloudComputingImg,
    details: ['Cloud Migration', 'DevOps Solutions', 'Serverless Architecture']
  },
  {
    id: 'web-scraping',
    title: 'Web Scraping',
    description: 'Automated data extraction and web intelligence solutions for business insights.',
    icon: 'Database',
    image: webScrapingImg,
    details: ['Data Extraction', 'Market Intelligence', 'API Development', 'Data Processing']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Trip Advisor',
    category: 'AI & Mobile',
    image: aiTripAdvisorImg,
    description: 'Intelligent travel planning application with AI recommendations, available as both web and mobile app for seamless trip management. Built with MERN stack for web services.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI', 'React Native', 'Mobile App'],
    liveUrl: 'https://lumina-khaki-five.vercel.app/',
    status: 'completed'
  },
  {
    id: '2',
    title: 'Shehrity',
    category: 'Service Platform',
    image: shehrityImg,
    description: 'Comprehensive service provider platform connecting users with various physical and digital services through multiple specialized portals. Full MERN stack implementation.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN', 'Service Management'],
    liveUrl: 'https://www.shehrity.com/',
    status: 'completed'
  },
  {
    id: '3',
    title: 'Edu Prep',
    category: 'Educational SaaS',
    image: eduPrepImg,
    description: 'A web platform designed to help students prepare for medical entrance exams (like MDCAT) with organized notes and multiple-choice practice questions. Built as an educational web app to help learners quickly revise key topics and track their progress. Learning SaaS platform with MERN and Progress.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN', 'Progress', 'SaaS', 'Education', 'MDCAT'],
    liveUrl: 'https://edu-wine-three.vercel.app/',
    status: 'completed'
  },
  {
    id: '4',
    title: 'Freely Go North',
    category: 'Tourism Platform',
    image: freelyGoNorthImg,
    description: 'Tourism website where users can buy or book different hotel trips, tour guides, and other travel services. Provides comprehensive services to tourists with scenic north-themed design and modern booking system.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'MERN', 'Tourism', 'Booking', 'Travel Services'],
    liveUrl: 'https://freelygonorth.vercel.app/tours',
    status: 'under-construction'
  },
  {
    id: '5',
    title: 'SparkBright',
    category: 'Cleaning Services',
    image: sparkBrightImg,
    description: 'Professional cleaning service provider website showcasing different cleaning services for residential and commercial clients. Clean, modern design with service listings and booking information.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN', 'Cleaning Services', 'Service Provider'],
    liveUrl: 'https://www.sparkbrightcleaning.com/',
    status: 'completed'
  },
  {
    id: '6',
    title: 'Black Panther Batteries',
    category: 'Static Website',
    image: blackPantherBatteriesImg,
    description: 'Static React website for a company providing professional battery repairing services. Clean, responsive design showcasing service offerings and company information.',
    tags: ['React', 'Static Website', 'Battery Services', 'Repair Services', 'Company Website'],
    liveUrl: 'https://www.blackpanther-batteries.com/',
    status: 'completed'
  }
];

export const TEAM = [
  { name: 'Haris Hussain', role: 'CEO', bio: 'AI specialist leading the vision and strategic direction of 3Novator Tech with cutting-edge artificial intelligence solutions.', avatar: harisHussainImg },
  { name: 'Arsalan Saleem', role: 'CO-FOUNDER', bio: 'Full-stack MERN developer with expertise in Hostinger, WordPress, and comprehensive web development solutions.', avatar: arsalanSaleemImg },
  { name: 'Umar Mustafa', role: 'CO-FOUNDER', bio: 'Full-stack developer specializing in MERN stack and Flutter for cross-platform mobile applications.', avatar: umarMustafaImg }
];

export const TIMELINE = [
  { year: '2012', event: 'Founded 3Novator as a boutique agency in Palo Alto.' },
  { year: '2016', event: 'Pivot to AI-first architectures and enterprise cloud.' },
  { year: '2020', event: 'Reached 100+ global partners across 4 continents.' },
  { year: '2024', event: 'Launched 3Novator Labs for proprietary SaaS tools.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Fahad Shah',
    role: 'CEO',
    company: 'Edu Prep',
    avatar: '',
    content: 'The architectural precision 3Novator brings to the table is unmatched. They delivered our MVP three weeks ahead of schedule with exceptional code quality and scalability.'
  },
  {
    id: 't2',
    name: 'Sami Khan',
    role: 'Local Business Owner',
    company: '',
    avatar: '',
    content: 'Their AI integration transformed our data processing capabilities. A true partner in digital transformation who understands complex business requirements.'
  },
  {
    id: 't3',
    name: 'Abdul-Rehman',
    role: 'Business Partner',
    company: 'Tech Ventures',
    avatar: '',
    content: 'Outstanding technical expertise and communication. 3Novator helped us scale our infrastructure to handle 10x user growth without any downtime.'
  }
];

export const CORE_VALUES = [
  { title: 'Innovation', icon: Rocket, desc: 'Pushing boundaries with cutting-edge tech architectures.' },
  { title: 'Security', icon: ShieldCheck, desc: 'Enterprise-grade protection for sensitive business data.' },
  { title: 'Collaboration', icon: Users, desc: 'Your industry vision met with our technical engineering.' }
];

export const ICON_MAP: Record<string, any> = {
  Code2, Cpu, Layout, Search, TrendingUp, Palette, Rocket, ShieldCheck, Users, Smartphone, Cloud, Database, Zap, Globe, Settings, Workflow
};
