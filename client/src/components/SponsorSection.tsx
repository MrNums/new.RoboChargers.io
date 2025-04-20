import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { sponsors } from "@/lib/data";

const SponsorSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Sponsors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We thank these organizations for their generous support of our
            robotics program.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="grayscale hover:grayscale-0 transition duration-300 flex items-center justify-center h-24"
            >
              <img
                src={sponsor.logoUrl}
                alt={sponsor.name}
                className="max-h-full max-w-full"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="bg-white hover:bg-gray-100 text-[#1a36e8] border-2 border-[#1a36e8] font-bold"
            size="lg"
          >
            <Link href="/sponsors#become">Become a Sponsor</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
