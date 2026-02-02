
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  status?: 'completed' | 'under-construction';
}

export interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

export enum PageID {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  PORTFOLIO = 'portfolio',
  CONTACT = 'contact'
}

export enum NavLink {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  PORTFOLIO = 'portfolio',
  CONTACT = 'contact'
}
