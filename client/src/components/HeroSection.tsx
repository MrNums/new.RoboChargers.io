import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import robotImage from "/images/robots/RelayVrooom.png";
import backgroundPattern from "../assets/patterns/RoboChargers Logos Background.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#0a1a70] text-white py-16 md:py-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{ 
          backgroundImage: `url(${backgroundPattern})`, 
          backgroundSize: '120%',
          backgroundPosition: 'center',
          animation: 'panBackground 30s ease-in-out infinite alternate',
        }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building the future through robotics
            </h1>
            <div className="text-lg mb-8 space-y-4">
              <p>
                We don't just build robots — we build confident student leaders.
              </p>
              <p>
                Our team is dedicated to making STEM accessible for all, empowering youth 
                to fight for what they love and use their passion to create lasting impact.
              </p>
              <p className="font-bold text-[#ffd700]">
                🔧 Robotics for all. Opportunity for everyone.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-[#ffd700] hover:bg-amber-400 text-[#0a1a70] font-bold"
                size="lg"
              >
                <Link href="/team">Meet Our Team</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white/10"
                size="lg"
              >
                <Link href="/schedule">Upcoming Events</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
              {/* Soft glow background - vignette style */}
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-[#ffd700]/20 via-[#ffd700]/10 to-transparent blur-xl"></div>
              
              {/* Subtle spotlight effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/5 via-white/2 to-transparent"></div>
              
              {/* Background circle with enhanced glow */}
              <div className="absolute inset-0 bg-white/10 rounded-full shadow-2xl shadow-[#ffd700]/20"></div>
              
              {/* Robot image that extends beyond the circle */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'scale(1.2)' }}>
                <img
                  src={robotImage}
                  alt="RoboChargers Robot"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.3)) drop-shadow(0 0 40px rgba(255, 215, 0, 0.1))'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
