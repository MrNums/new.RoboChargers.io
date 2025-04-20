import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import robot2025Image from "../assets/robots/robot_2025.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#0a1a70] text-white py-16 md:py-24">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=600&q=80')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building the future, one robot at a time
            </h1>
            <p className="text-lg mb-8">
              We are the RoboChargers, an award-winning robotics team from
              Emmett J Conrad High School in Dallas, Texas participating in FIRST Robotics competitions.
            </p>
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
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#ffd700]/20 flex items-center justify-center">
              <img
                src={robot2025Image}
                alt="RoboChargers 2025 Robot - Dynamo"
                className="w-5/6 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
