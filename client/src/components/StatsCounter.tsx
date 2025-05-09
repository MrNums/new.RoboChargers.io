import React, { useState, useEffect, useRef } from "react";
import { Trophy, TrendingUp, BarChart2, Award } from "lucide-react";

interface StatItem {
  value: number;
  label: string;
  icon: React.ReactNode;
}

const StatsCounter: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    { 
      value: 15, 
      label: "Competition Trophies", 
      icon: <Trophy className="h-12 w-12 text-[#ffd700]" /> 
    },
    { 
      value: 3, 
      label: "State Championships", 
      icon: <Award className="h-12 w-12 text-[#ffd700]" /> 
    },
    { 
      value: 124, 
      label: "Team Members", 
      icon: <TrendingUp className="h-12 w-12 text-[#1a36e8]" /> 
    },
    { 
      value: 47, 
      label: "Blue Banners", 
      icon: <BarChart2 className="h-12 w-12 text-[#1a36e8]" /> 
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Add a 1-second delay before starting the animation
          setTimeout(() => {
            // Start counting animation for each stat
            const finalValues = stats.map(stat => stat.value);
            const duration = 2500; // Animation duration in ms
            const steps = 60; // Number of steps to take
            const stepDuration = duration / steps;
            
            let step = 0;
            const interval = setInterval(() => {
              step++;
              
              if (step >= steps) {
                setCounts(finalValues);
                clearInterval(interval);
              } else {
                setCounts(finalValues.map(final => 
                  Math.round((final / steps) * step)
                ));
              }
            }, stepDuration);
          }, 1000); // 1-second delay
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated, stats]);

  return (
    <section 
      className="py-16 bg-gradient-to-b from-[#0a1a70] to-[#1a36e8] text-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Team 3005 RoboChargers has made a significant impact since 2009
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold mb-2">
                {counts[index]}
              </div>
              <div className="text-sm uppercase tracking-wider font-medium opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;