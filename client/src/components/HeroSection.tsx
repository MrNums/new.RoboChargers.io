import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import robotImage from "../assets/robots/robot_trophy.png";
import backgroundPattern from "../assets/patterns/RoboChargers Logos Background.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#0a1a70] text-white py-16 md:py-24">
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-[#0a1a70]"
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building the future through robotics
            </h1>
            <div className="text-lg mb-8 space-y-4">
              <p>
                We're not just building robots — we're using robotics to build confident, 
                capable students who lead with purpose.
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
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
              <img
                src={robotImage}
                alt="RoboChargers Robot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
