import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 500); // Allow exit animation
    }, 900); // Show preloader for 0.9 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-brand-blueMedium/20 rounded-full blur-3xl top-[-20%] left-[-20%] animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-brand-greenMedium/20 rounded-full blur-3xl bottom-[-20%] right-[-20%] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Logo Container */}
      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Rotating Border Circle */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-transparent"
              style={{
                background: 'linear-gradient(45deg, #3DB4F2, #1E8FE1, #0A4FA3, #3FAE2A, #6BCF3D)',
                backgroundClip: 'padding-box',
                WebkitBackgroundClip: 'padding-box',
                borderImage: 'linear-gradient(45deg, #3DB4F2, #1E8FE1, #0A4FA3, #3FAE2A, #6BCF3D) 1',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            >
              <div className="absolute inset-0 rounded-full border-4 border-slate-900"></div>
            </motion.div>

            {/* Inner rotating ring (opposite direction) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border-2 border-transparent"
              style={{
                background: 'linear-gradient(-45deg, #6BCF3D, #3FAE2A, #1E8FE1, #3DB4F2)',
                backgroundClip: 'padding-box',
                WebkitBackgroundClip: 'padding-box',
                borderImage: 'linear-gradient(-45deg, #6BCF3D, #3FAE2A, #1E8FE1, #3DB4F2) 1',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            >
              <div className="absolute inset-0 rounded-full border-2 border-slate-900"></div>
            </motion.div>

            {/* Logo Circle */}
            <div className="absolute inset-4 bg-slate-900 rounded-full flex items-center justify-center shadow-2xl">
              <motion.img
                src="/assets/logo.png"
                alt="3Novator Tech"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Orbiting dots */}
            {[0, 120, 240].map((angle, index) => (
              <motion.div
                key={index}
                className="absolute w-3 h-3 bg-gradient-to-r from-brand-blueMedium to-brand-greenMedium rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                }}
                animate={{
                  rotate: [angle, angle + 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.3,
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full rounded-full"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
              x: [null, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;
