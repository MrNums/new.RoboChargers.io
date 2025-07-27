import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import watermarkImage from "@assets/image_1751587430862.png";

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
      <div className={isNavigating ? "hidden" : "block"}>{children}</div>

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
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 bg-[#0a1a70] origin-top"
            />

            {/* Watermark in corner */}
            <motion.div
              className="fixed bottom-4 right-4 z-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <img
                src={watermarkImage}
                alt=""
                className="w-32 h-auto grayscale rounded-lg"
                style={{ filter: 'contrast(1.2) brightness(0.7)' }}
              />
            </motion.div>

            {}
            <motion.div
              className="fixed inset-0 z-10 flex items-center justify-center"
              initial={{ scale: 0.2, opacity: 1 }}
              animate={{
                scale: 2,
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                times: [0, 0.6, 1],
              }}
            >
              <img
                src="/images/logos/ChargerBolt.png"
                alt="Loading"
                className="w-24 h-auto"
              />
            </motion.div>

            {}
            <motion.div
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.5,
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
