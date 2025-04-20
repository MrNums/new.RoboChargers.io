import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-[#1a36e8] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the RoboChargers Community
          </h2>
          <p className="text-xl mb-8">
            Whether you're a student, mentor, or sponsor, there are many ways to
            get involved with our robotics program.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="bg-white hover:bg-gray-100 text-[#1a36e8] border-white font-bold"
              size="lg"
            >
              <Link href="/team#join">Join Our Team</Link>
            </Button>
            <Button
              asChild
              className="bg-[#ffd700] hover:bg-amber-400 text-[#0a1a70] font-bold"
              size="lg"
            >
              <Link href="/sponsors#support">Support Our Program</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold"
              size="lg"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
