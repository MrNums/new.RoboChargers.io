import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProgramsSection: React.FC = () => {

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 mt-8 md:mt-0">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The RoboChargers participate in multiple FIRST Robotics programs,
            providing opportunities for students at all levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* FRC Program */}
          <div className="program-card bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 md:mb-6">
                <img
                  src="/images/otherLogos/FIRSTRobotics_iconHorz_RGB.png"
                  alt="FRC Logo"
                  className="h-12 sm:h-14 w-auto mb-3 sm:mb-0 sm:mr-4"
                />
                <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                  The Ultimate Sport for the Mind
                </h3>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
                High school teams design and build industrial-sized robots for a high-energy game revealed each January—some starting from a Kit of Parts, others from custom designs.

                They compete in three-team alliances and embrace Coopertition®.

                Guided by mentors, teams also fundraise, build a team identity, and promote STEM in their communities.
              </p>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Team Number:</span>
                  <span className="text-[#1a36e8] font-bold">3005</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Established:</span>
                  <span>2009</span>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <div className="flex justify-between items-center">
                  <Link href="/projects">
                    <a className="text-[#1a36e8] hover:text-[#0a1a70] font-bold transition duration-150 flex items-center text-lg">
                      Learn More <ArrowRight className="ml-1 h-5 w-5" />
                    </a>
                  </Link>
                  <div className="flex space-x-2">
                    <Badge
                      variant="outline"
                      className="bg-[#ffd700]/20 text-[#0a1a70] hover:bg-[#ffd700]/30 border-none"
                    >
                      Engineering
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-[#ffd700]/20 text-[#0a1a70] hover:bg-[#ffd700]/30 border-none"
                    >
                      Programming
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FTC Program */}
          <div className="program-card bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 md:mb-6">
                <img
                  src="/images/otherLogos/FIRSTTech_iconHorz_RGB.png"
                  alt="FTC Logo"
                  className="h-12 sm:h-14 w-auto mb-3 sm:mb-0 sm:mr-4"
                />
                <h3 className="text-xl sm:text-2xl font-bold leading-tight">Code, Design, and Compete with Robots!</h3>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
                FIRST® Tech Challenge teams design and build robots to compete in exciting challenges released each September.

                Robots run autonomously before student drivers take control in 2v2 matches.

                Students also grow STEM skills, do outreach, and build confidence for future success.
              </p>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Team Numbers:</span>
                  <span className="text-[#1a36e8] font-bold">
                    13537 ┃ 13542 ┃ 13552 ┃ 18871
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Active Teams:</span>
                  <span>4</span>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <div className="flex justify-between items-center">
                  <Link href="/projects?team=ftc">
                    <a className="text-[#1a36e8] hover:text-[#0a1a70] font-bold transition duration-150 flex items-center text-lg">
                      Learn More <ArrowRight className="ml-1 h-5 w-5" />
                    </a>
                  </Link>
                  <div className="flex space-x-2">
                    <Badge
                      variant="outline"
                      className="bg-[#ffd700]/20 text-[#0a1a70] hover:bg-[#ffd700]/30 border-none"
                    >
                      Design
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-[#ffd700]/20 text-[#0a1a70] hover:bg-[#ffd700]/30 border-none"
                    >
                      Compete
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
