import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProgramsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The RoboChargers participate in multiple FIRST Robotics programs,
            providing opportunities for students at all levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* FRC Program */}
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/FRC-thumb.jpg"
                  alt="FRC Logo"
                  className="h-12 w-auto mr-4"
                />
                <h3 className="text-2xl font-bold">
                  FIRST Robotics Competition
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Team 3005 RoboChargers competes in the FIRST Robotics
                Competition, the premier engineering challenge for high school
                students.
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
              <div className="flex justify-between items-center">
                <Link href="/projects">
                  <a className="text-[#1a36e8] hover:text-[#0a1a70] font-bold transition duration-150 flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Link>
                <div className="flex space-x-2">
                  <Badge variant="outline" className="bg-[#ffd700]/20 text-[#0a1a70] hover:bg-[#ffd700]/30 border-none">
                    Engineering
                  </Badge>
                  <Badge variant="outline" className="bg-[#ffd700]/20 text-[#0a1a70] hover:bg-[#ffd700]/30 border-none">
                    Programming
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* FTC Program */}
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/FTC-thumb.jpg"
                  alt="FTC Logo"
                  className="h-12 w-auto mr-4"
                />
                <h3 className="text-2xl font-bold">FIRST Tech Challenge</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our FTC program allows students to design, build, and program
                robots in a more accessible format with four dedicated teams.
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
              <div className="flex justify-between items-center">
                <Link href="/projects?team=ftc">
                  <a className="text-[#1a36e8] hover:text-[#0a1a70] font-bold transition duration-150 flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Link>
                <div className="flex space-x-2">
                  <Badge variant="outline" className="bg-[#ffd700]/20 text-[#0a1a70] hover:bg-[#ffd700]/30 border-none">
                    Design
                  </Badge>
                  <Badge variant="outline" className="bg-[#ffd700]/20 text-[#0a1a70] hover:bg-[#ffd700]/30 border-none">
                    Compete
                  </Badge>
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
