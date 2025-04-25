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

  // Track location changes
  useEffect(() => {
    if (location !== displayLocation) {
      setIsNavigating(true);
      // After the transition starts, we update which location to display
      setTimeout(() => {
        setDisplayLocation(location);
      }, 600); // Time before content switches (should be less than entrance delay)
    }
  }, [location, displayLocation]);

  // Reset navigating state after transition
  useEffect(() => {
    if (isNavigating) {
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 1700); // Total transition duration
      return () => clearTimeout(timer);
    }
  }, [isNavigating]);

  return (
    <div className="relative">
      {/* Regular content */}
      <div className={isNavigating ? 'hidden' : 'block'}>
        {children}
      </div>

      {/* Transition animation */}
      <AnimatePresence>
        {isNavigating && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Blue overlay */}
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

            {/* Lightning bolt */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.2, 1, 0.8]
              }}
              transition={{
                duration: 1,
                times: [0, 0.3, 0.7, 1],
                delay: 0.2
              }}
            >
              <svg
                width="80"
                height="120"
                viewBox="0 0 80 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45 0L17 60H37L30 120L65 50H45L55 0H45Z"
                  fill="#FFD700"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>

            {/* Exit animation overlay */}
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