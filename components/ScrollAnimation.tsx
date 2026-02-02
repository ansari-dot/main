import React, { useRef, useEffect, useState } from 'react';
import { useCurrentFrame, useVideoConfig, interpolate } from 'remotion';

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  duration = 1,
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

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return 'translateX(-100px)';
      case 'right':
        return 'translateX(100px)';
      case 'up':
        return 'translateY(100px)';
      case 'down':
        return 'translateY(-100px)';
      default:
        return 'translateY(100px)';
    }
  };

  const getFinalTransform = () => {
    switch (direction) {
      case 'left':
      case 'right':
        return 'translateX(0)';
      case 'up':
      case 'down':
        return 'translateY(0)';
      default:
        return 'translateY(0)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: isVisible ? getFinalTransform() : getInitialTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1), opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    >
      {children}
    </div>
  );
};

interface AnimatedCardProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
  hoverScale?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '',
  hoverScale = 1.05
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
        rootMargin: '-100px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay, hasAnimated]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return 'translateX(-150px) rotateY(15deg)';
      case 'right':
        return 'translateX(150px) rotateY(-15deg)';
      case 'up':
        return 'translateY(150px) rotateX(15deg)';
      case 'down':
        return 'translateY(-150px) rotateX(-15deg)';
      default:
        return 'translateY(150px) rotateX(15deg)';
    }
  };

  const getFinalTransform = () => {
    return 'translateX(0) translateY(0) rotateX(0) rotateY(0)';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        transform: isVisible ? getFinalTransform() : getInitialTransform(),
        opacity: isVisible ? 1 : 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `${getFinalTransform()} scale(${hoverScale})`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = getFinalTransform();
      }}
    >
      {children}
    </div>
  );
};

interface StaggeredAnimationProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

export const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({ 
  children, 
  staggerDelay = 0.1,
  direction = 'up',
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

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return 'translateX(-100px)';
      case 'right':
        return 'translateX(100px)';
      case 'up':
        return 'translateY(100px)';
      case 'down':
        return 'translateY(-100px)';
      default:
        return 'translateY(100px)';
    }
  };

  const childrenArray = React.Children.toArray(children);
  const isContents = className.includes('contents');

  if (isContents) {
    return (
      <div ref={ref} className={className}>
        {childrenArray.map((child, index) => (
          <div
            key={index}
            style={{
              transform: isVisible ? 'translateX(0) translateY(0)' : getInitialTransform(),
              opacity: isVisible ? 1 : 0,
              transition: `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)`,
              transitionDelay: isVisible ? `${index * staggerDelay}s` : '0s',
            }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <div className="flex flex-wrap gap-6">
        {childrenArray.map((child, index) => (
          <div
            key={index}
            style={{
              transform: isVisible ? 'translateX(0) translateY(0)' : getInitialTransform(),
              opacity: isVisible ? 1 : 0,
              transition: `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)`,
              transitionDelay: isVisible ? `${index * staggerDelay}s` : '0s',
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
