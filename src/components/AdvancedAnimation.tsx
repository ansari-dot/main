import React, { useRef, useEffect, useState } from 'react';

interface AdvancedAnimationProps {
  children: React.ReactNode;
  animationType: 'fadeInScale' | 'slideRotate' | 'bounceIn' | 'flipIn' | 'zoomRotate';
  delay?: number;
  duration?: number;
  className?: string;
  staggerIndex?: number;
}

export const AdvancedAnimation: React.FC<AdvancedAnimationProps> = ({ 
  children, 
  animationType,
  delay = 0,
  duration = 0.8,
  className = '',
  staggerIndex = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay * 1000);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay, hasAnimated]);

  const getAnimationStyles = () => {
    const totalDelay = delay + (staggerIndex * 0.1);
    
    switch (animationType) {
      case 'fadeInScale':
        return {
          transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: `transform ${duration}s cubic-bezier(0.34, 1.56, 0.64, 1), opacity ${duration}s ease-out`,
          transitionDelay: `${totalDelay}s`
        };
      
      case 'slideRotate':
        return {
          transform: isVisible ? 'translateX(0) rotateY(0deg)' : 'translateX(-100px) rotateY(15deg)',
          opacity: isVisible ? 1 : 0,
          transition: `transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity ${duration}s ease-out`,
          transitionDelay: `${totalDelay}s`
        };
      
      case 'bounceIn':
        return {
          transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.3) translateY(100px)',
          opacity: isVisible ? 1 : 0,
          transition: `transform ${duration}s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity ${duration}s ease-out`,
          transitionDelay: `${totalDelay}s`
        };
      
      case 'flipIn':
        return {
          transform: isVisible ? 'rotateX(0deg) scale(1)' : 'rotateX(90deg) scale(0.8)',
          opacity: isVisible ? 1 : 0,
          transition: `transform ${duration}s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity ${duration}s ease-out`,
          transitionDelay: `${totalDelay}s`
        };
      
      case 'zoomRotate':
        return {
          transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-10deg)',
          opacity: isVisible ? 1 : 0,
          transition: `transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity ${duration}s ease-out`,
          transitionDelay: `${totalDelay}s`
        };
      
      default:
        return {
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: `transform ${duration}s ease-out, opacity ${duration}s ease-out`,
          transitionDelay: `${totalDelay}s`
        };
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
};

interface CombinedAnimationProps {
  children: React.ReactNode[];
  animationSequence: ('fadeInScale' | 'slideRotate' | 'bounceIn' | 'flipIn' | 'zoomRotate')[];
  staggerDelay?: number;
  className?: string;
}

export const CombinedAnimation: React.FC<CombinedAnimationProps> = ({ 
  children, 
  animationSequence,
  staggerDelay = 0.15,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasAnimated]);

  const childrenArray = React.Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => {
        const animationType = animationSequence[index % animationSequence.length];
        return (
          <AdvancedAnimation
            key={index}
            animationType={animationType}
            staggerIndex={index}
            delay={0}
          >
            {child}
          </AdvancedAnimation>
        );
      })}
    </div>
  );
};
