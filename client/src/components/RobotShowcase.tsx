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
      const container = carouselRef.current;
      const containerWidth = container.clientWidth;
      const scrollAmount = containerWidth * 0.8; // Scroll 80% of container width
      
      const currentScroll = container.scrollLeft;
      const newPosition = direction === "left" 
        ? Math.max(0, currentScroll - scrollAmount)
        : currentScroll + scrollAmount;
        
      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 mt-8 md:mt-0 text-[#0a1a70]">Our Robots</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our engineering achievements through the years, featuring
            innovative designs and competition-ready robots built by Team 3005.
          </p>
        </div>

        <div className="mb-10 relative">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1a36e8]">
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
            className="relative overflow-x-auto pb-6"
            ref={carouselRef}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex space-x-6 pb-2">
              {robots
                .filter(robot => ["1", "2", "3", "4", "5", "6"].includes(robot.id)) // Show more robots for better scrolling
                .sort((a, b) => parseInt(b.season) - parseInt(a.season)) // Sort by newest first
                .map((robot) => (
                  <HomeRobotCard key={robot.id} robot={robot} />
                ))}
            </div>
          </div>

          {/* Right fade gradient */}
          <div className="absolute right-0 top-[4.5rem] bottom-4 w-8 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* State Champions Banner */}
        <div className="text-center mb-10 py-4 bg-blue-50 rounded-lg border border-blue-100 shadow-inner">
          <div className="flex items-center justify-center mb-2">
            <span className="text-[#0a1a70] font-bold text-xl lg:text-2xl flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline-block h-7 w-7 text-[#ffd700] mr-1 fill-current">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline-block h-7 w-7 text-[#ffd700] mx-1 fill-current">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline-block h-7 w-7 text-[#ffd700] ml-1 fill-current">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
              </svg>
            </span>
          </div>
          <h3 className="text-[#0a1a70] font-bold text-xl lg:text-2xl">3-Time Back-to-Back-to-Back State Champions</h3>
          <p className="text-gray-600 text-sm mt-1">2023 • 2024 • 2025</p>
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-[#1a36e8] hover:bg-[#0a1a70] text-white font-bold text-lg shadow-lg transition-transform hover:scale-105 px-8 py-6 h-auto"
            size="lg"
          >
            <Link href="/stats">View Team Stats</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RobotShowcase;
