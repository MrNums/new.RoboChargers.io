import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [location] = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsNavigating(true);
      setTimeout(() => {
        setDisplayLocation(location);
      }, 600);
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (isNavigating) {
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 1700);
      return () => clearTimeout(timer);
    }
  }, [isNavigating]);

  return (
    <div className="relative">
      {}
      <div className={isNavigating ? 'hidden' : 'block'}>
        {children}
      </div>

      {}
      <AnimatePresence>
        {isNavigating && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="absolute inset-0 bg-[#0a1a70] origin-top"
            />

            {}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.2, 1, 0.8],
                rotate: [-10, 0, 5, 0]
              }}
              transition={{
                duration: 1,
                times: [0, 0.3, 0.7, 1],
                delay: 0.2
              }}
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M300 0L150 225L0 450L300 225L600 0L450 225L300 450L450 225L600 450L300 600Z"
                  fill="#FFD700"
                />
              </svg>
            </motion.div>

            {}
            <motion.div
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.8
              }}
              className="absolute inset-0 bg-[#0a1a70] origin-bottom"
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;