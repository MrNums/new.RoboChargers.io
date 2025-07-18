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
        <div className="flex flex-col md:flex-row items-center min-h-[500px] md:min-h-[400px]">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center">
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
                className="bg-[#ffd700] hover:bg-amber-400 text-[#0a1a70] font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ffd700]/30"
                size="lg"
              >
                <Link href="/team">Meet Our Team</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white/10 hover:text-white hover:border-cyan-300 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <Link href="/schedule">Upcoming Events</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px]">
              {/* Large soft radial fade background - no hard edges */}
              <div className="absolute inset-[-60px] bg-gradient-radial from-[#ffd700]/15 via-[#ffd700]/8 via-[#ffd700]/4 to-transparent blur-3xl"></div>
              
              {/* Medium fade layer */}
              <div className="absolute inset-[-30px] bg-gradient-radial from-white/8 via-white/4 to-transparent blur-2xl"></div>
              
              {/* Inner subtle glow */}
              <div className="absolute inset-[-15px] bg-gradient-radial from-[#ffd700]/12 via-[#ffd700]/6 to-transparent blur-xl"></div>
              
              {/* Robot image - responsive and centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={robotImage}
                  alt="RoboChargers Robot"
                  className="w-full h-full object-contain max-w-none"
                  style={{
                    filter: 'drop-shadow(0 0 25px rgba(255, 215, 0, 0.4)) drop-shadow(0 0 50px rgba(255, 215, 0, 0.15))',
                    transform: 'scale(1.1)'
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
