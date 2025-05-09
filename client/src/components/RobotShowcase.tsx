import React, { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HomeRobotCard from "@/components/HomeRobotCard";
import { robots } from "@/lib/data";

const RobotShowcase: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const cardWidth = 430; // Card width (400px) + spacing (30px)
      const scrollLeft = carouselRef.current.scrollLeft;
      
      // Calculate next card position
      const position = direction === "left"
        ? Math.floor(scrollLeft / cardWidth) * cardWidth - cardWidth
        : Math.floor(scrollLeft / cardWidth) * cardWidth + cardWidth;
        
      carouselRef.current.scrollTo({
        left: position,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#0a1a70]">Our Robots</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our engineering achievements through the years, featuring
            innovative designs and competition-ready robots built by Team 3005.
          </p>
        </div>

        <div className="mb-10 relative">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-[#1a36e8]">
              Featured Robot: Relay (2025)
            </h3>
            <div className="flex space-x-3">
              <Button
                variant="default"
                size="icon"
                className="bg-[#1a36e8] hover:bg-[#0a1a70] h-10 w-10 rounded-full shadow-md"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="default"
                size="icon"
                className="bg-[#1a36e8] hover:bg-[#0a1a70] h-10 w-10 rounded-full shadow-md"
                onClick={() => scroll("right")}
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Left fade gradient */}
          <div className="absolute left-0 top-[4.5rem] bottom-4 w-8 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Horizontal scroll container */}
          <div
            className="relative overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0"
            ref={carouselRef}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex space-x-6 pb-2">
              {robots
                .filter(robot => ["1", "2", "3", "4"].includes(robot.id)) // Only show first 4 robots
                .sort((a, b) => parseInt(b.season) - parseInt(a.season)) // Sort by newest first
                .map((robot) => (
                  <HomeRobotCard key={robot.id} robot={robot} />
                ))}
            </div>
          </div>

          {/* Right fade gradient */}
          <div className="absolute right-0 top-[4.5rem] bottom-4 w-8 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-[#1a36e8] hover:bg-[#0a1a70] text-white font-bold text-lg shadow-lg transition-transform hover:scale-105 px-8 py-6 h-auto"
            size="lg"
          >
            <Link href="/projects">View All Robots</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RobotShowcase;
