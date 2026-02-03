
import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Button } from './components/ui/Button';
import Preloader from './components/Preloader';
import { SERVICES, PROJECTS, ICON_MAP, CORE_VALUES, TESTIMONIALS, TEAM, TIMELINE } from './constants';
import { PageID } from './types';
import videoBg from './assets/video.mp4';
import { 
  ArrowRight, 
  ChevronRight, 
  Mail, 
  Phone, 
  ExternalLink, 
  Globe, 
  Sparkles, 
  HelpCircle, 
  Quote, 
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Building2, 
  CheckCircle2, 
  Zap, 
  Settings, 
  Workflow, 
  Target, 
  Eye, 
  Search, 
  Code2,
  MessageSquare,
  X,
  ShieldCheck,
  Rocket,
  Users,
  Layout,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollAnimation, AnimatedCard, StaggeredAnimation } from './components/ScrollAnimation';
import { AdvancedAnimation, CombinedAnimation } from './components/AdvancedAnimation';
import { TestimonialContainer } from './components/TestimonialVariations';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Get initial page from URL hash
  const getInitialPage = (): PageID => {
    const hash = window.location.hash.slice(1); // Remove # from hash
    if (hash && Object.values(PageID).includes(hash as PageID)) {
      return hash as PageID;
    }
    return PageID.HOME;
  };

  const [currentPage, setCurrentPage] = useState<PageID>(getInitialPage());
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  // Update URL hash when page changes
  useEffect(() => {
    window.location.hash = currentPage;
  }, [currentPage]);

  // Listen for hash changes (browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && Object.values(PageID).includes(hash as PageID)) {
        setCurrentPage(hash as PageID);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Word slider words
  const sliderWords = ['Excellence.', 'Innovation.', 'Solutions.', 'Future.'];

  // Auto-advance word slider - seamless transition when letters complete
  useEffect(() => {
    const currentWord = sliderWords[currentWordIndex];
    const letterAnimationTime = currentWord.length * 50 + 500; // Exact time for all letters to animate
    
    const timeout = setTimeout(() => {
      setCurrentWordIndex((prev) => (prev + 1) % sliderWords.length);
    }, letterAnimationTime);

    return () => clearTimeout(timeout);
  }, [currentWordIndex, sliderWords]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Handle scroll for navbar shrinking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (pageId: string) => {
    setCurrentPage(pageId as PageID);
  };

  const RenderedPage = useMemo(() => {
    switch (currentPage) {
      case PageID.ABOUT: return <AboutPage />;
      case PageID.SERVICES: return <ServicesPage onNavigate={handleNavigate} />;
      case PageID.PORTFOLIO: return <PortfolioPage />;
      case PageID.CONTACT: return <ContactPage />;
      default: return <HomePage onNavigate={handleNavigate} sliderWords={sliderWords} currentWordIndex={currentWordIndex} />;
    }
  }, [currentPage, sliderWords, currentWordIndex]);

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />
      <div className={`relative min-h-screen text-slate-900 flex flex-col selection:bg-brand-blueMedium selection:text-white bg-white ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Navbar activeSection={currentPage} onNavigate={handleNavigate} isScrolled={isScrolled} />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {RenderedPage}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </>
  );
};

// --- HOME PAGE ---

const HomePage: React.FC<{ onNavigate: (p: string) => void; sliderWords: string[]; currentWordIndex: number }> = ({ onNavigate, sliderWords, currentWordIndex }) => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[70vh] sm:min-h-[100vh] md:min-h-[100vh] lg:min-h-[100vh] xl:min-h-[100vh] flex items-start pt-48 sm:pt-48 md:pt-48 lg:pt-48 xl:pt-48 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Debug: Show video URL */}
      <div className="absolute top-4 left-4 bg-black/80 text-white p-2 text-xs z-50">
        Video URL: {typeof videoBg}
      </div>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-5"></div>
      
      <div className="container mx-auto max-w-6xl lg:max-w-7xl relative z-10">
        <ScrollAnimation direction="down" delay={0.2}>
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 border border-white/20 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-8 sm:mb-12 rounded-full shadow-sm">
            <Sparkles size={14} className="text-brand-greenMedium sm:size-18" />
            <span className="hidden sm:inline">The Future of Engineering</span>
            <span className="sm:hidden">Future Tech</span>
          </div>
        </ScrollAnimation>
        <ScrollAnimation direction="up" delay={0.4}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.2] text-white">
            We Build <br />
            <span className="inline-block text-gradient tracking-wide">
              Digital Excellence.
            </span>
          </h1>
        </ScrollAnimation>
        <ScrollAnimation direction="up" delay={0.6}>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 font-light leading-relaxed max-w-2xl sm:max-w-3xl md:max-w-4xl mb-8 sm:mb-10 tracking-wide">
            3Novator Tech delivers mission-critical software. We partner with visionary brands to scale high-utility digital systems.
          </p>
        </ScrollAnimation>
        <StaggeredAnimation staggerDelay={0.1} direction="up">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button size="sm" className="rounded-xl py-2 px-4 sm:py-3 sm:px-6 bg-brand-blueMedium text-white hover:bg-brand-blueLight w-full sm:w-auto text-sm sm:text-base" onClick={() => onNavigate(PageID.CONTACT)}>Get a Quote</Button>
            <Button variant="outline" size="sm" className="rounded-xl py-2 px-4 sm:py-3 sm:px-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 w-full sm:w-auto text-sm sm:text-base" onClick={() => onNavigate(PageID.PORTFOLIO)}>View Work</Button>
          </div>
        </StaggeredAnimation>
      </div>
    </section>

    {/* About Summary */}
    <section className="py-12 md:py-16 lg:py-20 bg-slate-50/50 glass border-y border-slate-100">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl lg:max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 lg:gap-32 items-center">
        <ScrollAnimation direction="left" delay={0.2}>
          <div>
            <span className="text-sm font-black text-brand-blueMedium uppercase tracking-[0.4em] mb-6 block">Our Identity</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">Logic Meets <br />Aesthetic.</h2>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-6 font-medium">
              We are a boutique software house specializing in enterprise-grade web development, high-fidelity AI integrations, and cloud-native SaaS ecosystems.
            </p>
            <Button variant="ghost" className="px-0 font-black text-lg hover:bg-transparent text-brand-blueMedium" onClick={() => onNavigate(PageID.ABOUT)}>Learn our full story <ChevronRight size={20} className="ml-2" /></Button>
          </div>
        </ScrollAnimation>
        <ScrollAnimation direction="right" delay={0.4}>
          <div className="grid grid-cols-2 gap-8">
             <AnimatedCard direction="up" delay={0.6} className="p-8 bg-white rounded-[2rem] shadow-realistic text-center">
                <span className="text-3xl md:text-4xl font-black text-brand-blueMedium block mb-3">25+</span>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-2">Project Delivered</p>
             </AnimatedCard>
             <AnimatedCard direction="up" delay={0.8} className="p-8 bg-white rounded-[2rem] shadow-realistic text-center">
                <span className="text-3xl md:text-4xl font-black text-brand-greenMedium block mb-3">98%</span>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-2">Client Retention</p>
             </AnimatedCard>
          </div>
        </ScrollAnimation>
      </div>
    </section>

    {/* Services Summary */}
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl lg:max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <ScrollAnimation direction="left" delay={0.2}>
             <div>
               <span className="text-sm font-black text-brand-greenMedium uppercase tracking-[0.4em] mb-6 block">Capabilities</span>
               <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Our Core Stack.</h2>
             </div>
           </ScrollAnimation>
           <ScrollAnimation direction="right" delay={0.4}>
             <Button variant="outline" size="md" className="rounded-lg px-6 border-slate-200" onClick={() => onNavigate(PageID.SERVICES)}>View Detailed Catalog</Button>
           </ScrollAnimation>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <CombinedAnimation 
            animationSequence={['fadeInScale', 'slideRotate', 'bounceIn']} 
            staggerDelay={0.2}
            className="contents"
          >
            {SERVICES.slice(0, 3).map((s, index) => {
              const Icon = ICON_MAP[s.icon] || Code2;
              return (
                <AdvancedAnimation
                  key={s.id}
                  animationType={index === 0 ? 'fadeInScale' : index === 1 ? 'slideRotate' : 'bounceIn'}
                  delay={0.3}
                  className="p-12 bg-white/60 glass border border-slate-100 rounded-[2.5rem] shadow-realistic"
                >
                   <div className="w-16 h-16 bg-brand-blueDeep text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                     <Icon size={32} />
                   </div>
                   <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4">{s.title}</h3>
                   <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-bold">{s.description}</p>
                </AdvancedAnimation>
              );
            })}
          </CombinedAnimation>
        </div>
      </div>
    </section>

    {/* Portfolio Summary */}
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl lg:max-w-7xl">
        <ScrollAnimation direction="down" delay={0.2}>
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-slate-200 bg-white text-slate-700 text-sm font-black uppercase tracking-[0.3em] mb-8 rounded-full shadow-sm">
                <Target size={18} className="text-brand-blueMedium" />
                Featured Work
             </div>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-6">Case Studies.</h2>
             <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">Explore our latest digital innovations and technical achievements.</p>
          </div>
        </ScrollAnimation>
        <StaggeredAnimation staggerDelay={0.2} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
             {PROJECTS.filter(p => 
               ['1', '2', '3', '6'].includes(p.id)
             ).map(p => (
               <div key={p.id} className="group cursor-pointer" onClick={() => p.liveUrl && window.open(p.liveUrl, '_blank')}>
                 <AnimatedCard direction="up" className="h-full">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/50 overflow-hidden hover:shadow-2xl transition-all duration-500">
                       <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          {p.status === 'under-construction' && (
                            <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500 text-white text-xs font-black uppercase rounded-full shadow-lg">
                               Under Construction
                            </div>
                          )}
                          {p.status === 'completed' && (
                            <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-black uppercase rounded-full shadow-lg">
                               Live
                            </div>
                          )}
                       </div>
                       <div className="p-6 space-y-4">
                          <div className="flex items-center justify-between">
                             <span className="text-xs font-black text-brand-blueMedium uppercase tracking-[0.3em]">{p.category}</span>
                             <div className="w-8 h-8 bg-brand-blueMedium/10 rounded-lg flex items-center justify-center group-hover:bg-brand-blueMedium transition-colors">
                                <ExternalLink size={16} className="text-brand-blueMedium group-hover:text-white" />
                             </div>
                          </div>
                          <h3 className="text-xl font-black text-slate-900">{p.title}</h3>
                          <div className="flex flex-wrap gap-2">
                             {p.tags.slice(0, 3).map(t => (
                               <span key={t} className="px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-black text-slate-600 uppercase tracking-wider">{t}</span>
                             ))}
                          </div>
                       </div>
                    </div>
                 </AnimatedCard>
               </div>
             ))}
          </div>
        </StaggeredAnimation>
        <ScrollAnimation direction="up" delay={0.8}>
          <div className="text-center">
             <Button size="lg" className="rounded-xl px-8 py-4 bg-gradient-to-r from-brand-blueMedium to-brand-blueDeep hover:from-brand-blueLight hover:to-brand-blueMedium text-white shadow-lg hover:shadow-xl transition-all" onClick={() => onNavigate(PageID.PORTFOLIO)}>Explore All Projects</Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>

    {/* Skills Ticker Section */}
    <section className="py-8 bg-slate-900 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          <div className="flex space-x-12 whitespace-nowrap">
            {['React.js', 'Node.js', 'TypeScript', 'Next.js', 'Python', 'AWS', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'GraphQL', 'REST API', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'GraphQL', 'REST API', 'React.js', 'Node.js', 'TypeScript', 'Next.js', 'Python', 'AWS', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'GraphQL', 'REST API'].map((skill, index) => (
              <span key={index} className="text-lg md:text-xl font-bold text-white/80 hover:text-white transition-colors duration-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials Summary - Moved Below Portfolio */}
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl lg:max-w-7xl">
        <ScrollAnimation direction="down" delay={0.2}>
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-slate-200 bg-white text-slate-700 text-sm font-black uppercase tracking-[0.3em] mb-8 rounded-full shadow-sm">
                <Quote size={18} className="text-brand-blueMedium" />
                Client Voices
             </div>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-6">Trusted by Innovators.</h2>
             <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">Hear what our partners say about working with 3Novator Tech.</p>
          </div>
        </ScrollAnimation>
        <StaggeredAnimation staggerDelay={0.2} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
             {TESTIMONIALS.map(t => (
               <AnimatedCard key={t.id} direction="up" className="h-full">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-200/50 overflow-hidden hover:shadow-2xl transition-all duration-500 h-[420px] flex flex-col">
                     <div className="p-6 flex-grow flex flex-col">
                        <div className="w-12 h-12 bg-brand-blueMedium/10 rounded-xl flex items-center justify-center mb-4">
                           <Quote size={24} className="text-brand-blueMedium" />
                        </div>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed italic font-medium flex-grow">"{t.content}"</p>
                     </div>
                     <div className="px-6 pb-6 pt-4 border-t border-slate-200 bg-slate-50">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-brand-blueMedium rounded-xl flex items-center justify-center border-2 border-white shadow-lg">
                              <Users size={20} className="text-white" />
                           </div>
                           <div>
                              <h4 className="text-lg font-black text-slate-900">{t.name}</h4>
                              <p className="text-xs font-black text-slate-500 uppercase tracking-widest">{t.role} • {t.company}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </AnimatedCard>
             ))}
          </div>
        </StaggeredAnimation>
        <ScrollAnimation direction="up" delay={0.8}>
          <div className="text-center">
             <Button size="lg" className="rounded-xl px-8 py-4 bg-gradient-to-r from-brand-blueMedium to-brand-blueDeep hover:from-brand-blueLight hover:to-brand-blueMedium text-white shadow-lg hover:shadow-xl transition-all">View All Testimonials</Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-brand-blueMedium to-brand-blueDeep text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 md:px-8 max-w-4xl lg:max-w-5xl relative z-10 text-center">
        <ScrollAnimation direction="down" delay={0.2}>
          <div className="mb-8">
             <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm font-black uppercase tracking-[0.3em] mb-8 rounded-full shadow-sm">
                <Rocket size={18} className="text-white" />
                Get Started
             </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6">Ready to Transform Your Vision?</h2>
          <p className="text-lg md:text-xl text-white/95 font-light leading-relaxed max-w-3xl mx-auto mb-12">Let's build something extraordinary together. Our team is ready to architect your next digital success story.</p>
          <StaggeredAnimation staggerDelay={0.1} direction="up">
            <Button size="lg" className="rounded-xl px-10 py-4 text-lg bg-black text-white hover:bg-slate-800 shadow-xl hover:shadow-2xl transition-all mr-4" onClick={() => onNavigate(PageID.CONTACT)}>Start Your Project</Button>
            <Button variant="outline" size="lg" className="rounded-xl px-10 py-4 text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" onClick={() => onNavigate(PageID.PORTFOLIO)}>View Our Work</Button>
          </StaggeredAnimation>
        </ScrollAnimation>
      </div>
    </section>

  </div>
);

const AboutPage: React.FC = () => (
  <div>
    <section className="relative min-h-[60vh] sm:min-h-[75vh] flex items-start pt-40 sm:pt-32 md:pt-40 lg:pt-48 overflow-hidden px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-100">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimation direction="down" delay={0.2}>
          <span className="text-sm font-black text-brand-blueMedium uppercase tracking-[0.4em] mb-6 block">Our Heritage</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-[1.1]">Architects of the <br /><span className="text-gradient">Digital Era.</span></h1>
          <p className="text-base md:text-lg text-slate-500 max-w-5xl leading-relaxed font-light tracking-tight">
            Founded on the principle of technical uncompromising quality, we help industry leaders build systems that are secure, scalable, and inherently beautiful.
          </p>
        </ScrollAnimation>
      </div>
    </section>

    <section className="py-16 md:py-20 lg:py-24 container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 lg:gap-32">
         <ScrollAnimation direction="left" delay={0.2}>
           <div className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200/50">
              <div className="w-16 h-16 bg-brand-blueMedium/10 rounded-xl flex items-center justify-center shadow-lg mb-6">
                <Target size={32} className="text-brand-blueMedium" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">The Mission</h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg font-medium">
                To empower global enterprises by delivering engineering excellence. We don't just solve tickets; we design the future of business through code.
              </p>
           </div>
         </ScrollAnimation>
         <ScrollAnimation direction="right" delay={0.4}>
           <div className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200/50">
              <div className="w-16 h-16 bg-brand-greenMedium/10 rounded-xl flex items-center justify-center shadow-lg mb-6">
                <Eye size={32} className="text-brand-greenMedium" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">The Vision</h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg font-medium">
                To become the global benchmark for technical integrity in boutique software development, known for our precision and innovative architectures.
              </p>
           </div>
         </ScrollAnimation>
      </div>
    </section>

    <section className="py-12 md:py-16 lg:py-20 bg-slate-50 text-slate-900 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl lg:max-w-7xl">
        <ScrollAnimation direction="down" delay={0.2}>
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-slate-200 bg-white text-slate-700 text-sm font-black uppercase tracking-[0.3em] mb-8 rounded-full shadow-sm">
                <Sparkles size={18} className="text-slate-600" />
                Core Values
             </div>
             <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-8 text-center tracking-tighter text-slate-900">Core Foundations</h2>
          </div>
        </ScrollAnimation>
        <StaggeredAnimation staggerDelay={0.15} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
             <AnimatedCard direction="up" className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200/50 space-y-6 group hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-slate-900 transition-colors">
                   <Rocket size={32} className="text-slate-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900">Innovation First</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">We prototype at the leading edge to ensure your system remains relevant for the next decade.</p>
             </AnimatedCard>
             <AnimatedCard direction="up" className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200/50 space-y-6 group hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-slate-900 transition-colors">
                   <ShieldCheck size={32} className="text-slate-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900">Absolute Security</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">Every line of code is written with an adversarial mindset to protect your most sensitive data.</p>
             </AnimatedCard>
             <AnimatedCard direction="up" className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200/50 space-y-6 group hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-slate-900 transition-colors">
                   <Users size={32} className="text-slate-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900">Radical Collaboration</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">We integrate deeply with your team, acting as an extension of your own engineering force.</p>
             </AnimatedCard>
          </div>
        </StaggeredAnimation>
      </div>
    </section>

    <section className="py-16 md:py-20 lg:py-24 bg-slate-50 container mx-auto px-6">
       <ScrollAnimation direction="down" delay={0.2}>
         <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-slate-200 bg-white text-slate-700 text-sm font-black uppercase tracking-[0.3em] mb-8 rounded-full shadow-sm">
               <Users size={18} className="text-slate-600" />
               Team
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-8 text-center tracking-tighter">The Collective Brain</h2>
         </div>
       </ScrollAnimation>
       <StaggeredAnimation staggerDelay={0.15} direction="up">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {TEAM.map((member, i) => (
              <AnimatedCard key={i} direction="up" className="text-center space-y-8 group">
                 <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 border-4 border-white shadow-lg mb-6 group-hover:scale-105">
                    <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                 </div>
                 <div className="p-6 bg-white rounded-2xl shadow-xl border border-slate-200/50">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900">{member.name}</h3>
                    <p className="text-sm font-black text-slate-600 uppercase tracking-[0.3em] mb-4">{member.role}</p>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">{member.bio}</p>
                 </div>
              </AnimatedCard>
            ))}
         </div>
       </StaggeredAnimation>
    </section>

    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100 border-t border-slate-200 px-6">
       <div className="container mx-auto max-w-5xl">
          <ScrollAnimation direction="down" delay={0.2}>
            <div className="text-center mb-16">
               <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-slate-200 bg-white text-slate-700 text-sm font-black uppercase tracking-[0.3em] mb-8 rounded-full shadow-sm">
                  <Target size={18} className="text-slate-600" />
                  Timeline
               </div>
               <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center tracking-tighter">Our Evolution</h2>
            </div>
          </ScrollAnimation>
          <StaggeredAnimation staggerDelay={0.2} direction="left">
            <div className="relative">
               <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blueMedium via-brand-greenMedium to-brand-blueLight"></div>
               <div className="space-y-12">
                  <AnimatedCard direction="left" className="flex gap-8 items-start group">
                     <div className="w-16 h-16 bg-gradient-to-br from-brand-blueMedium to-brand-blueDeep rounded-2xl shadow-xl border border-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform relative z-10">
                        <span className="text-lg font-black text-white">2025</span>
                     </div>
                     <div className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200/50 flex-grow group-hover:shadow-2xl transition-all">
                        <div className="flex items-center gap-2 mb-3">
                           <div className="w-2 h-2 bg-brand-blueMedium rounded-full"></div>
                           <span className="text-sm font-black text-brand-blueMedium uppercase tracking-wider">December 2025</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3">3Novator Tech Founded</h3>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">Started with a vision to deliver exceptional software engineering solutions for global enterprises, focusing on quality, security, and innovation.</p>
                     </div>
                  </AnimatedCard>
                  <AnimatedCard direction="left" className="flex gap-8 items-start group">
                     <div className="w-16 h-16 bg-gradient-to-br from-brand-greenMedium to-brand-greenDeep rounded-2xl shadow-xl border border-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform relative z-10">
                        <span className="text-lg font-black text-white">2026</span>
                     </div>
                     <div className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200/50 flex-grow group-hover:shadow-2xl transition-all">
                        <div className="flex items-center gap-2 mb-3">
                           <div className="w-2 h-2 bg-brand-greenMedium rounded-full"></div>
                           <span className="text-sm font-black text-brand-greenMedium uppercase tracking-wider">Q1 2026</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3">First Enterprise Client</h3>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">Secured our first major enterprise partnership, delivering a scalable SaaS solution that processed over 1 million transactions.</p>
                     </div>
                  </AnimatedCard>
                  <AnimatedCard direction="left" className="flex gap-8 items-start group">
                     <div className="w-16 h-16 bg-gradient-to-br from-brand-blueLight to-brand-blueMedium rounded-2xl shadow-xl border border-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform relative z-10">
                        <span className="text-lg font-black text-white">2026</span>
                     </div>
                     <div className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200/50 flex-grow group-hover:shadow-2xl transition-all">
                        <div className="flex items-center gap-2 mb-3">
                           <div className="w-2 h-2 bg-brand-blueLight rounded-full"></div>
                           <span className="text-sm font-black text-brand-blueLight uppercase tracking-wider">Q2 2026</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3">Team Expansion</h3>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">Grew our technical team with senior engineers and AI specialists, expanding our capabilities in machine learning and cloud architecture.</p>
                     </div>
                  </AnimatedCard>
               </div>
            </div>
          </StaggeredAnimation>
       </div>
    </section>
  </div>
);

const ServicesPage: React.FC<{onNavigate: (p: string) => void}> = ({ onNavigate }) => (
  <div>
    <section className="relative min-h-[60vh] sm:min-h-[75vh] flex items-start pt-40 sm:pt-32 md:pt-40 lg:pt-48 overflow-hidden px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-100">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimation direction="down" delay={0.2}>
          <span className="text-sm font-black text-brand-blueMedium uppercase tracking-[0.4em] mb-6 block">Our Tools</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-[1.1]">Vertical <br /><span className="text-gradient">Catalog.</span></h1>
          <p className="text-base md:text-lg text-slate-500 max-w-5xl leading-relaxed font-light tracking-tight">
            From high-performance web systems to predictive AI engines, we deliver specialized technical vertical expertise.
          </p>
        </ScrollAnimation>
      </div>
    </section>

    <section className="py-16 md:py-20 lg:py-24 container mx-auto px-6">
       <div className="grid grid-cols-1 gap-32">
          {SERVICES.map((s, idx) => {
            const Icon = ICON_MAP[s.icon] || Code2;
            return (
              <AnimatedCard key={s.id} direction={idx % 2 !== 0 ? 'right' : 'left'} className={`flex flex-col lg:flex-row gap-32 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`} hoverScale={1}>
                 <div className="w-full lg:w-1/2 space-y-8">
                    <div className="p-8 bg-white rounded-2xl shadow-xl border border-slate-200/50">
                       <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center shadow-lg mb-6">
                          <Icon size={32} className="text-brand-blueMedium" />
                       </div>
                       <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">{s.title}</h2>
                       <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">{s.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {s.details.map(d => (
                         <div key={d} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 shadow-sm group hover:shadow-md transition-all">
                            <div className="w-8 h-8 bg-brand-blueMedium rounded-lg flex items-center justify-center shrink-0">
                               <CheckCircle2 size={16} className="text-white" />
                            </div>
                            <span className="text-sm font-black text-slate-700 tracking-wide uppercase">{d}</span>
                         </div>
                       ))}
                    </div>
                    <Button variant="secondary" size="lg" className="rounded-xl py-4 px-8 text-base bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all" onClick={() => onNavigate(PageID.CONTACT)}>Inquire about {s.title}</Button>
                 </div>
                 <div className="w-full lg:w-1/2 aspect-square relative overflow-hidden rounded-2xl shadow-lg border border-slate-200">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover rounded-2xl" />
                 </div>
              </AnimatedCard>
            );
          })}
       </div>
    </section>

    <section className="py-12 md:py-16 lg:py-20 bg-slate-50 text-slate-900 px-6">
      <div className="container mx-auto max-w-4xl lg:max-w-5xl">
        <ScrollAnimation direction="down" delay={0.2}>
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-slate-200 bg-white text-slate-700 text-sm font-black uppercase tracking-[0.3em] mb-8 rounded-full shadow-sm">
                <Sparkles size={18} className="text-brand-blueMedium" />
                Our Process
             </div>
             <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-8 text-center tracking-tighter text-slate-900">The 3Novator Workflow</h2>
          </div>
        </ScrollAnimation>
        <StaggeredAnimation staggerDelay={0.15} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { title: 'Discovery', desc: 'Requirements auditing and technical gap analysis.', icon: Search },
               { title: 'Design', desc: 'Architecting system logic and visual interfaces.', icon: Layout },
               { title: 'Engineer', desc: 'Modern sprints using enterprise-grade stacks.', icon: Code2 },
               { title: 'Launch', desc: 'Secure deployment and zero-downtime scaling.', icon: Rocket }
             ].map((step, i) => (
               <AnimatedCard key={i} direction="up" className="text-center space-y-6 group">
                  <div className="w-16 h-16 mx-auto bg-white border border-slate-200 rounded-xl flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all shadow-lg duration-700">
                     <step.icon size={32} className="text-slate-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">{step.desc}</p>
               </AnimatedCard>
             ))}
          </div>
        </StaggeredAnimation>
      </div>
    </section>
  </div>
);

const PortfolioPage: React.FC = () => (
  <div className="reveal-init">
    <section className="relative min-h-[60vh] sm:min-h-[75vh] flex items-start pt-40 sm:pt-32 md:pt-40 lg:pt-48 overflow-hidden px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-100">
      <div className="container mx-auto max-w-7xl">
        <span className="text-sm font-black text-brand-blueMedium uppercase tracking-[0.4em] mb-6 block">Archive</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-[1.1]">Technical <br /><span className="text-gradient">Legacies.</span></h1>
        <p className="text-base md:text-lg text-slate-500 max-w-5xl leading-relaxed font-light tracking-tight">
          A collection of high-fidelity software engagements delivered for global enterprises.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-12 gap-x-4 lg:gap-x-6 w-full">
          {PROJECTS.map(p => (
            <div key={p.id} className="group cursor-pointer" onClick={() => p.liveUrl && window.open(p.liveUrl, '_blank')}>
               <div className="bg-white rounded-2xl shadow-xl border border-slate-200/50 overflow-hidden hover:shadow-2xl transition-all duration-500 h-[600px] flex flex-col">
                  <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                     <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     {p.status === 'under-construction' && (
                       <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500 text-white text-xs font-black uppercase rounded-full shadow-lg">
                          Under Construction
                       </div>
                     )}
                     {p.status === 'completed' && (
                       <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-black uppercase rounded-full shadow-lg">
                          Live
                       </div>
                     )}
                  </div>
                  <div className="p-6 lg:p-8 space-y-4 flex-grow flex flex-col">
                     <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-brand-blueMedium uppercase tracking-[0.3em]">{p.category}</span>
                        <div className="w-8 h-8 bg-brand-blueMedium/10 rounded-lg flex items-center justify-center group-hover:bg-brand-blueMedium transition-colors">
                           <ExternalLink size={16} className="text-brand-blueMedium group-hover:text-white" />
                        </div>
                     </div>
                     <h3 className="text-xl lg:text-2xl font-black text-slate-900">{p.title}</h3>
                     <p className="text-sm lg:text-base text-slate-600 leading-relaxed font-medium">{p.description}</p>
                     <div className="flex flex-wrap gap-2 pt-2">
                        {p.tags.map(t => (
                          <span key={t} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-black text-slate-600 uppercase tracking-wider">{t}</span>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          ))}
       </div>
    </section>
  </div>
);

const ContactPage: React.FC = () => (
  <div className="reveal-init">
    <section className="relative min-h-[60vh] sm:min-h-[75vh] flex items-start pt-40 sm:pt-32 md:pt-40 lg:pt-48 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl lg:max-w-7xl">
        <span className="text-sm font-black text-brand-blueMedium uppercase tracking-[0.4em] mb-6 block">Inquiries</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-[1.1]">Start the <br /><span className="text-gradient">Engine.</span></h1>
        <p className="text-base md:text-lg lg:text-xl text-slate-500 max-w-4xl leading-relaxed font-light tracking-tight">
          Ready to architect your breakthrough? Let's discuss your objectives and timeline today.
        </p>
      </div>
    </section>

    <section className="py-12 md:py-16 lg:py-20 container mx-auto px-4 md:px-6">
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
                <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-xl border border-white/10">
                   <h3 className="text-lg font-black text-white tracking-tight mb-6">Get in Touch</h3>
                   <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group hover:bg-white/10 transition-all">
                         <div className="w-10 h-10 bg-brand-blueMedium rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <Mail size={18} className="text-white" />
                         </div>
                         <div>
                            <h4 className="text-xs font-black text-white/60 uppercase tracking-[0.3em] mb-1">Direct Inquiry</h4>
                            <p className="text-base font-black text-white">threenovatortech@gmail.com</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group hover:bg-white/10 transition-all">
                         <div className="w-10 h-10 bg-brand-greenMedium rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <Phone size={18} className="text-white" />
                         </div>
                         <div>
                            <h4 className="text-xs font-black text-white/60 uppercase tracking-[0.3em] mb-1">Concierge</h4>
                            <p className="text-base font-black text-white">03489164985</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group hover:bg-white/10 transition-all">
                         <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <Building2 size={18} className="text-white" />
                         </div>
                         <div>
                            <h4 className="text-xs font-black text-white/60 uppercase tracking-[0.3em] mb-1">Campus Hub</h4>
                            <p className="text-base font-black text-white leading-tight">Comsat University Road<br />Abbottabad</p>
                         </div>
                      </div>
                   </div>
                </div>
             <div className="p-6 bg-gradient-to-br from-brand-blueDeep to-brand-blueMedium rounded-2xl shadow-xl border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <ShieldCheck size={20} className="text-white" />
                   </div>
                   <h3 className="text-lg font-black text-white tracking-tight">Our Process</h3>
                </div>
                <div className="space-y-4">
                   {[
                      { icon: Search, text: 'Deep technical codebase review' },
                      { icon: ShieldCheck, text: 'Security vulnerability analysis' },
                      { icon: Target, text: 'Strategic scaling roadmap' }
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                         <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                            <item.icon size={16} className="text-white" />
                         </div>
                         <span className="text-sm font-medium text-white/90">{item.text}</span>
                      </div>
                   ))}
                </div>
             </div>
             <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-xl border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Globe size={20} className="text-white" />
                   </div>
                   <h3 className="text-lg font-black text-white tracking-tight">Follow Us</h3>
                </div>
                <div className="space-y-4">
                   <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/share/1AQfcM7iAj/?mibextid=wwXIfr' },
                        { icon: Twitter, label: 'TwitterX', url: 'https://x.com/threenovator?s=21' },
                        { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/3novatortech?igsh=MXZvaTZsNng2cWgxaw%3D%3D&utm_source=qr' },
                        { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/company/3novator-tech/?viewAsMember=true' }
                      ].map((social, idx) => (
                         <a 
                            key={idx} 
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all group"
                         >
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                               <social.icon size={16} className="text-white" />
                            </div>
                            <span className="text-sm font-medium text-white/90">{social.label}</span>
                         </a>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-7">
             <form className="p-6 bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-xl border border-slate-200/50 space-y-6 reveal-scroll">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 bg-brand-blueMedium rounded-xl flex items-center justify-center">
                      <MessageSquare size={20} className="text-white" />
                   </div>
                   <h3 className="text-lg font-black text-slate-900 tracking-tight">Start Partnership</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                   <div className="space-y-4">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Full Name</label>
                      <input className="w-full border border-slate-200/50 bg-white/80 backdrop-blur-sm rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-brand-blueMedium/20 focus:border-brand-blueMedium text-slate-900 font-medium transition-all" placeholder="Sarah Jenkins" />
                   </div>
                   <div className="space-y-4">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Work Email</label>
                      <input className="w-full border border-slate-200/50 bg-white/80 backdrop-blur-sm rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-brand-blueMedium/20 focus:border-brand-blueMedium text-slate-900 font-medium transition-all" placeholder="sarah@corp.com" />
                   </div>
                </div>
                <div className="space-y-4">
                   <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Inquiry Type</label>
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Web', 'AI', 'SaaS', 'Other'].map(type => (
                        <button key={type} type="button" className="py-3 rounded-xl border border-slate-200/50 bg-white/60 backdrop-blur-sm text-xs font-black text-slate-600 uppercase tracking-[0.1em] hover:border-brand-blueMedium hover:bg-brand-blueMedium hover:text-white transition-all shadow-sm active:scale-95">{type}</button>
                      ))}
                   </div>
                </div>
                <div className="space-y-4">
                   <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Project Objective</label>
                   <textarea className="w-full border border-slate-200/50 bg-white/80 backdrop-blur-sm rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-brand-blueMedium/20 focus:border-brand-blueMedium text-slate-900 h-28 resize-none font-medium transition-all" placeholder="Describe your architectural constraints and objectives..."></textarea>
                </div>
                <Button className="w-full py-4 text-xs uppercase tracking-[0.3em] font-black rounded-xl bg-gradient-to-r from-brand-blueMedium to-brand-blueDeep hover:from-brand-blueLight hover:to-brand-blueMedium text-white shadow-lg hover:shadow-xl transition-all">Submit Now</Button>
             </form>
          </div>
       </div>
    </section>
  </div>
);

export default App;
