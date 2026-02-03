import React from 'react';
import { Quote, Star } from 'lucide-react';
import { AdvancedAnimation } from './AdvancedAnimation';
import { TESTIMONIALS } from '../constants';

// Testimonial Card 1: Minimalist Design
export const MinimalistTestimonial: React.FC<{ testimonial: any; index: number }> = ({ testimonial, index }) => (
  <AdvancedAnimation
    animationType={index % 2 === 0 ? 'fadeInScale' : 'slideRotate'}
    delay={0.3}
    className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
  >
    <div className="flex items-start gap-4">
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-bold text-slate-900">{testimonial.name}</h4>
        <p className="text-sm text-slate-500 mb-3">{testimonial.role}, {testimonial.company}</p>
        <p className="text-slate-600 italic">"{testimonial.content}"</p>
      </div>
    </div>
  </AdvancedAnimation>
);

// Testimonial Card 2: Gradient Overlay Design
export const GradientTestimonial: React.FC<{ testimonial: any; index: number }> = ({ testimonial, index }) => (
  <AdvancedAnimation
    animationType={index % 2 === 0 ? 'flipIn' : 'bounceIn'}
    delay={0.4}
    className="relative bg-gradient-to-br from-brand-blueMedium to-brand-greenMedium p-1 rounded-3xl"
  >
    <div className="bg-white p-8 rounded-3xl">
      <Quote size={32} className="text-brand-blueMedium mb-4" />
      <p className="text-slate-700 text-lg mb-6 italic">"{testimonial.content}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
          <p className="text-sm text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  </AdvancedAnimation>
);

// Testimonial Card 3: Card with Floating Quote
export const FloatingQuoteTestimonial: React.FC<{ testimonial: any; index: number }> = ({ testimonial, index }) => (
  <AdvancedAnimation
    animationType={index % 2 === 0 ? 'zoomRotate' : 'slideRotate'}
    delay={0.5}
    className="bg-slate-50 p-8 rounded-2xl relative overflow-hidden group"
  >
    <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-blueMedium rounded-full flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
      <Quote size={40} className="text-white" />
    </div>
    <div className="relative z-10">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-brand-greenMedium text-brand-greenMedium" />
        ))}
      </div>
      <p className="text-slate-700 mb-6">"{testimonial.content}"</p>
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-xl overflow-hidden">
          <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
          <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  </AdvancedAnimation>
);

// Testimonial Card 4: Dark Mode Design
export const DarkTestimonial: React.FC<{ testimonial: any; index: number }> = ({ testimonial, index }) => (
  <AdvancedAnimation
    animationType={index % 2 === 0 ? 'bounceIn' : 'flipIn'}
    delay={0.6}
    className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800"
  >
    <Quote size={24} className="text-brand-blueLight mb-4" />
    <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-blueMedium">
          <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-white">{testimonial.name}</h4>
          <p className="text-sm text-slate-400">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-brand-greenMedium text-brand-greenMedium" />
        ))}
      </div>
    </div>
  </AdvancedAnimation>
);

// Testimonial Card 5: Side-by-Side Design
export const SideBySideTestimonial: React.FC<{ testimonial: any; index: number }> = ({ testimonial, index }) => (
  <AdvancedAnimation
    animationType={index % 2 === 0 ? 'slideRotate' : 'fadeInScale'}
    delay={0.7}
    className="flex gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
  >
    <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
    </div>
    <div className="flex-1">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-brand-greenMedium text-brand-greenMedium" />
        ))}
      </div>
      <p className="text-slate-700 italic mb-3">"{testimonial.content}"</p>
      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
      <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
    </div>
  </AdvancedAnimation>
);

// Testimonial Card 6: Circular Design
export const CircularTestimonial: React.FC<{ testimonial: any; index: number }> = ({ testimonial, index }) => (
  <AdvancedAnimation
    animationType={index % 2 === 0 ? 'bounceIn' : 'zoomRotate'}
    delay={0.8}
    className="text-center"
  >
    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-brand-blueMedium shadow-xl">
      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
    </div>
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <Quote size={24} className="text-brand-blueMedium mx-auto mb-4" />
      <p className="text-slate-700 italic mb-4">"{testimonial.content}"</p>
      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
      <p className="text-sm text-slate-500">{testimonial.role}</p>
      <div className="flex justify-center gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-brand-greenMedium text-brand-greenMedium" />
        ))}
      </div>
    </div>
  </AdvancedAnimation>
);

// Testimonial Container Component
export const TestimonialContainer: React.FC<{
  variant: 'minimalist' | 'gradient' | 'floating' | 'dark' | 'sidebyside' | 'circular';
  testimonials?: any[];
  className?: string;
}> = ({ variant, testimonials = TESTIMONIALS, className = '' }) => {
  const renderTestimonial = (testimonial: any, index: number) => {
    switch (variant) {
      case 'minimalist':
        return <MinimalistTestimonial key={testimonial.id} testimonial={testimonial} index={index} />;
      case 'gradient':
        return <GradientTestimonial key={testimonial.id} testimonial={testimonial} index={index} />;
      case 'floating':
        return <FloatingQuoteTestimonial key={testimonial.id} testimonial={testimonial} index={index} />;
      case 'dark':
        return <DarkTestimonial key={testimonial.id} testimonial={testimonial} index={index} />;
      case 'sidebyside':
        return <SideBySideTestimonial key={testimonial.id} testimonial={testimonial} index={index} />;
      case 'circular':
        return <CircularTestimonial key={testimonial.id} testimonial={testimonial} index={index} />;
      default:
        return <MinimalistTestimonial key={testimonial.id} testimonial={testimonial} index={index} />;
    }
  };

  const getContainerClass = () => {
    switch (variant) {
      case 'circular':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
      case 'sidebyside':
        return 'space-y-6';
      case 'minimalist':
        return 'grid grid-cols-1 md:grid-cols-2 gap-6';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 gap-8';
    }
  };

  return (
    <div className={`${getContainerClass()} ${className}`}>
      {testimonials.map((testimonial, index) => renderTestimonial(testimonial, index))}
    </div>
  );
};
