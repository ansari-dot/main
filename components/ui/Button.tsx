
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-black transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-brand-blueMedium/20 active:scale-[0.95] overflow-hidden group btn-shine";
  
  const variants = {
    primary: "bg-brand-blueDeep text-white hover:bg-brand-blueMedium shadow-realistic rounded-[1.25rem]",
    secondary: "bg-brand-blueMedium text-white hover:bg-brand-blueDeep shadow-realistic rounded-[1.25rem]",
    outline: "border border-slate-200 bg-white/50 glass text-slate-900 hover:border-brand-blueMedium hover:text-brand-blueMedium rounded-[1.25rem]",
    ghost: "text-brand-blueMedium hover:text-brand-blueDeep hover:bg-slate-50 rounded-[1.25rem]"
  };

  const sizes = {
    sm: "px-8 py-3.5 text-xs tracking-[0.3em] uppercase",
    md: "px-10 py-4.5 text-sm tracking-[0.3em] uppercase",
    lg: "px-14 py-6 text-xl tracking-[0.4em] uppercase"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </button>
  );
};
