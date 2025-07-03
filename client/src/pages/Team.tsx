import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import { teamMembers } from "@/lib/data";

const Team: React.FC = () => {
  const [mentorPage, setMentorPage] = useState(0);
  const [alumniPage, setAlumniPage] = useState(0);

  // Define how many items to show per page
  const itemsPerPage = 6; // 2x3 grid

  // Calculate total pages needed (ceiling division)
  const totalMentorPages = Math.ceil(teamMembers.mentors.length / itemsPerPage);
  const totalAlumniPages = Math.ceil(teamMembers.alumni.length / itemsPerPage);

  // Handle navigation for mentor cards
  const handlePrevMentors = () => {
    setMentorPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextMentors = () => {
    setMentorPage((prev) => Math.min(totalMentorPages - 1, prev + 1));
  };

  // Handle navigation for alumni cards
  const handlePrevAlumni = () => {
    setAlumniPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextAlumni = () => {
    setAlumniPage((prev) => Math.min(totalAlumniPages - 1, prev + 1));
  };

  // Get the current page of mentors and alumni
  const currentMentors = teamMembers.mentors.slice(
    mentorPage * itemsPerPage,
    (mentorPage + 1) * itemsPerPage,
  );

  const currentAlumni = teamMembers.alumni.slice(
    alumniPage * itemsPerPage,
    (alumniPage + 1) * itemsPerPage,
  );

  return (
    <>
      <Helmet>
        <title>Our Team - RoboChargers</title>
        <meta
          name="description"
          content="Meet the mentors, coaches, and alumni that make up the RoboChargers robotics team."
        />
      </Helmet>

      <div className="bg-[#0a1a70] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl">
            Meet the mentors and alumni that make our team great.
          </p>
        </div>
      </div>

      {/* Team Principals Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#0a1a70]">
            Team Principals
          </h2>

          {/* Current Team Principals */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Current Leadership (2025-Present)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden shadow-lg">
                <div className="p-6 flex flex-col items-center">
                  <Avatar className="h-32 w-32 mb-4">
                    <AvatarImage
                      src="https://ca.slack-edge.com/T01DCLZ42JV-U02LA8NR3NY-9675e25b5217-512"
                      alt="Karen Herrada"
                    />
                    <AvatarFallback>KH</AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-xl text-[#0a1a70]">
                    Karen Herrada
                  </h3>
                  <p className="text-[#1a36e8] font-medium mb-3">
                    Team Principal
                  </p>
                  <p className="text-gray-600 text-center">
                    Guiding our team with passion and innovation since 2025.
                    Mrs. Herrada brings expertise in engineering education and a
                    commitment to student success.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden shadow-lg">
                <div className="p-6 flex flex-col items-center">
                  <Avatar className="h-32 w-32 mb-4">
                    <AvatarImage
                      src="https://ca.slack-edge.com/T01DCLZ42JV-U02ED7DNH2R-35af29c5c68c-512"
                      alt="Adam Gaddis"
                    />
                    <AvatarFallback>AG</AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-xl text-[#0a1a70]">
                    Adam Gaddis
                  </h3>
                  <p className="text-[#1a36e8] font-medium mb-3">
                    Team Principal
                  </p>
                  <p className="text-gray-600 text-center">
                    Mr. Gaddis joined our leadership team in 2025, bringing
                    valuable industry experience and a dedication to helping
                    students develop real-world engineering skills.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Former Team Principals */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Former Leadership (2009-2025)
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-center text-gray-700 mb-6">
                We honor the dedication and vision of our founding team
                principals who built the foundation for our program's success
                over 16 remarkable years.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-3">
                    <AvatarImage
                      src="https://ca.slack-edge.com/T01DCLZ42JV-U01CVPBQ9HU-9ba6df24e4f0-512"
                      alt="Marco Guerra"
                    />
                    <AvatarFallback>MG</AvatarFallback>
                  </Avatar>
                  <h4 className="font-bold text-lg text-[#0a1a70]">
                    Marco Guerra
                  </h4>
                  <p className="text-[#1a36e8] text-sm mb-2">
                    Team Principal (2014-2025)
                  </p>
                  <p className="text-gray-600 text-sm text-center">
                    A founding leader whose vision and guidance helped establish
                    Team 3005 as a powerhouse in FIRST Robotics.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-3">
                    <AvatarImage
                      src="https://ca.slack-edge.com/T01DCLZ42JV-U01D02FESQ2-936275125000-512"
                      alt="Rachel Moore"
                    />
                    <AvatarFallback>RM</AvatarFallback>
                  </Avatar>
                  <h4 className="font-bold text-lg text-[#0a1a70]">
                    Rachel Moore
                  </h4>
                  <p className="text-[#1a36e8] text-sm mb-2">
                    Team Principal (2009-2025)
                  </p>
                  <p className="text-gray-600 text-sm text-center">
                    Provided exceptional leadership and mentorship for our
                    students through 16 competition seasons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Mentors Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#0a1a70]">
              Team Mentors & Coaches
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Our dedicated mentors provide guidance, expertise, and support to
              help our students succeed in robotics and beyond.
            </p>

            <div className="relative">
              {/* Navigation buttons */}
              <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-2 z-10">
                <Button
                  variant="outline"
                  size="icon"
                  className={`rounded-full bg-white/90 shadow-md ${mentorPage === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-50"}`}
                  onClick={handlePrevMentors}
                  disabled={mentorPage === 0}
                >
                  <ChevronLeft className="h-6 w-6 text-[#1a36e8]" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className={`rounded-full bg-white/90 shadow-md ${mentorPage >= totalMentorPages - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-50"}`}
                  onClick={handleNextMentors}
                  disabled={mentorPage >= totalMentorPages - 1}
                >
                  <ChevronRight className="h-6 w-6 text-[#1a36e8]" />
                </Button>
              </div>

              {/* Mentors grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentMentors.map((mentor) => (
                  <Card
                    key={mentor.id}
                    className="overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6 flex flex-col items-center">
                      <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={mentor.photoUrl} alt={mentor.name} />
                        <AvatarFallback>
                          {mentor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-bold text-lg text-[#0a1a70]">
                        {mentor.name}
                      </h3>
                      <p className="text-[#1a36e8] mb-3 font-medium">
                        {mentor.role}
                      </p>
                      <p className="text-sm text-gray-600 text-center">
                        {mentor.bio}
                      </p>
                      {mentor.company && (
                        <p className="text-sm font-medium mt-3 bg-blue-50 px-3 py-1 rounded-full text-[#0a1a70]">
                          {mentor.company}
                        </p>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Page indicator */}
            {totalMentorPages > 1 && (
              <div className="flex justify-center mt-4 space-x-1">
                {Array.from({ length: totalMentorPages }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${mentorPage === index ? "bg-[#1a36e8]" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Alumni Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#0a1a70]">
              Alumni Network
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Our former team members continue to support the RoboChargers while
              pursuing their education and careers in STEM fields and beyond.
            </p>

            <div className="relative">
              {/* Navigation buttons */}
              <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-2 z-10">
                <Button
                  variant="outline"
                  size="icon"
                  className={`rounded-full bg-white/90 shadow-md ${alumniPage === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-50"}`}
                  onClick={handlePrevAlumni}
                  disabled={alumniPage === 0}
                >
                  <ChevronLeft className="h-6 w-6 text-[#1a36e8]" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className={`rounded-full bg-white/90 shadow-md ${alumniPage >= totalAlumniPages - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-50"}`}
                  onClick={handleNextAlumni}
                  disabled={alumniPage >= totalAlumniPages - 1}
                >
                  <ChevronRight className="h-6 w-6 text-[#1a36e8]" />
                </Button>
              </div>

              {/* Alumni grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentAlumni.map((alumnus) => (
                  <Card
                    key={alumnus.id}
                    className="overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage
                            src={alumnus.photoUrl}
                            alt={alumnus.name}
                          />
                          <AvatarFallback>
                            {alumnus.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-[#0a1a70]">
                            {alumnus.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Class of {alumnus.gradYear}
                          </p>
                        </div>
                      </div>
                      <p className="text-[#1a36e8] font-medium mb-1 text-sm">
                        {alumnus.currentRole}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        {alumnus.schoolOrCompany}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">On the team: </span>
                        {alumnus.teamRole}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Page indicator */}
            {totalAlumniPages > 1 && (
              <div className="flex justify-center mt-4 space-x-1">
                {Array.from({ length: totalAlumniPages }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${alumniPage === index ? "bg-[#1a36e8]" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div
          id="join"
          className="mt-16 bg-gray-100 p-8 rounded-lg max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Join the RoboChargers Team
          </h2>
          <p className="text-center mb-6">
            Interested in becoming part of our robotics family? We're always
            looking for passionate students to join our team!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Requirements</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Emmett J Conrad High School student</li>
                <li>Interest in robotics, engineering, or STEM</li>
                <li>Commitment to team meetings and events</li>
                <li>Willingness to learn and collaborate</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">How to Apply</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Attend an information session (Fall semester)</li>
                <li>Complete the application form</li>
                <li>Interview with team leadership</li>
                <li>Participate in new member orientation</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button
              className="bg-[#1a36e8] hover:bg-[#0a1a70] text-white font-bold"
              size="lg"
            >
              <a href="mailto:join@robochargers.org">Contact Us to Join</a>
            </Button>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
};

export default Team;
