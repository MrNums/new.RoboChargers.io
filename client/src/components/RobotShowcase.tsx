import React, { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RobotCard from "@/components/ui/robot-card";
import { robots } from "@/lib/data";

const RobotShowcase: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      const scrollLeft = carouselRef.current.scrollLeft;
      carouselRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Robots</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our engineering achievements through the years, featuring
            innovative designs and competition-ready robots.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">
              Featured Robot: Amp (2023)
            </h3>
            <div className="flex space-x-2">
              <Button
                variant="default"
                size="icon"
                className="bg-[#1a36e8] hover:bg-[#0a1a70] h-10 w-10 rounded-full"
                onClick={() => scroll("left")}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="default"
                size="icon"
                className="bg-[#1a36e8] hover:bg-[#0a1a70] h-10 w-10 rounded-full"
                onClick={() => scroll("right")}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Horizontal scroll container */}
          <div
            className="relative overflow-x-auto pb-4"
            ref={carouselRef}
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex space-x-6">
              {robots.map((robot) => (
                <RobotCard key={robot.id} robot={robot} />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-[#1a36e8] hover:bg-[#0a1a70] text-white font-bold"
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
