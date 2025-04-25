import React from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import { teamMembers } from "@/lib/data";

const Team: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - RoboChargers</title>
        <meta
          name="description"
          content="Meet the students, mentors, and coaches that make up the RoboChargers robotics team."
        />
      </Helmet>

      <div className="bg-[#0a1a70] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl">
            Meet the students, mentors, and alumni that make our team great.
          </p>
        </div>
      </div>

      {/* Team Principals Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#0a1a70]">Team Principals</h2>
          
          {/* Current Team Principals */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-center">Current Leadership (2025-Present)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden shadow-lg">
                <div className="p-6 flex flex-col items-center">
                  <Avatar className="h-32 w-32 mb-4">
                    <AvatarImage src="/images/team/karen-herrada.jpg" alt="Karen Herrada" />
                    <AvatarFallback>KH</AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-xl text-[#0a1a70]">Karen Herrada</h3>
                  <p className="text-[#1a36e8] font-medium mb-3">Team Principal</p>
                  <p className="text-gray-600 text-center">
                    Guiding our team with passion and innovation since 2025. Ms. Herrada brings expertise in engineering education and a commitment to student success.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden shadow-lg">
                <div className="p-6 flex flex-col items-center">
                  <Avatar className="h-32 w-32 mb-4">
                    <AvatarImage src="/images/team/adam-gaddis.jpg" alt="Adam Gaddis" />
                    <AvatarFallback>AG</AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-xl text-[#0a1a70]">Adam Gaddis</h3>
                  <p className="text-[#1a36e8] font-medium mb-3">Team Principal</p>
                  <p className="text-gray-600 text-center">
                    Mr. Gaddis joined our leadership team in 2025, bringing valuable industry experience and a dedication to helping students develop real-world engineering skills.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Former Team Principals */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Former Leadership (2009-2025)</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-center text-gray-700 mb-6">
                We honor the dedication and vision of our founding team principals who built the foundation for our program's success over 16 remarkable years.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-3">
                    <AvatarImage src="/images/team/marco-guerra.jpg" alt="Marco Guerra" />
                    <AvatarFallback>MG</AvatarFallback>
                  </Avatar>
                  <h4 className="font-bold text-lg text-[#0a1a70]">Marco Guerra</h4>
                  <p className="text-[#1a36e8] text-sm mb-2">Team Principal (2009-2025)</p>
                  <p className="text-gray-600 text-sm text-center">
                    A founding leader whose vision and guidance helped establish Team 3005 as a powerhouse in FIRST Robotics.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-3">
                    <AvatarImage src="/images/team/rachel-moore.jpg" alt="Rachel Moore" />
                    <AvatarFallback>RM</AvatarFallback>
                  </Avatar>
                  <h4 className="font-bold text-lg text-[#0a1a70]">Rachel Moore</h4>
                  <p className="text-[#1a36e8] text-sm mb-2">Team Principal (2009-2025)</p>
                  <p className="text-gray-600 text-sm text-center">
                    Provided exceptional leadership and mentorship for our students through 16 competition seasons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Tabs Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="students" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="mentors">Mentors</TabsTrigger>
            <TabsTrigger value="alumni">Alumni</TabsTrigger>
          </TabsList>
          <TabsContent value="students">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">FRC Team 3005 Students</h2>
              <p className="text-gray-600 mb-6">
                Our FRC team members represent the best and brightest from Emmett J Conrad High School, bringing diverse skills and perspectives to our robotics challenges.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.students.frc.map((member) => (
                  <Card key={member.id} className="overflow-hidden">
                    <div className="p-4 flex flex-col items-center">
                      <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={member.photoUrl} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-[#1a36e8] mb-2">{member.role}</p>
                      <p className="text-sm text-gray-600 text-center">
                        {member.bio}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">FTC Team Students</h2>
              <p className="text-gray-600 mb-6">
                Our four FTC teams allow more students to experience competitive robotics in a format that's ideal for learning and growth.
              </p>

              {teamMembers.students.ftc.map((team) => (
                <div key={team.teamNumber} className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Team {team.teamNumber} - {team.teamName}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {team.members.map((member) => (
                      <Card key={member.id} className="overflow-hidden">
                        <CardContent className="p-4 flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={member.photoUrl} alt={member.name} />
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{member.name}</h4>
                            <p className="text-sm text-gray-600">{member.role}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="mentors">
            <h2 className="text-2xl font-bold mb-4">Team Mentors & Coaches</h2>
            <p className="text-gray-600 mb-6">
              Our dedicated mentors provide guidance, expertise, and support to help our students succeed in robotics and beyond.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.mentors.map((mentor) => (
                <Card key={mentor.id} className="overflow-hidden">
                  <div className="p-4 flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={mentor.photoUrl} alt={mentor.name} />
                      <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-lg">{mentor.name}</h3>
                    <p className="text-[#1a36e8] mb-2">{mentor.role}</p>
                    <p className="text-sm text-gray-600 text-center">
                      {mentor.bio}
                    </p>
                    {mentor.company && (
                      <p className="text-sm font-medium mt-2">
                        {mentor.company}
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="alumni">
            <h2 className="text-2xl font-bold mb-4">Alumni Network</h2>
            <p className="text-gray-600 mb-6">
              Our former team members continue to support the RoboChargers while pursuing their education and careers in STEM fields and beyond.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.alumni.map((alumnus) => (
                <Card key={alumnus.id} className="overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar>
                        <AvatarImage src={alumnus.photoUrl} alt={alumnus.name} />
                        <AvatarFallback>{alumnus.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold">{alumnus.name}</h3>
                        <p className="text-sm text-gray-600">Class of {alumnus.gradYear}</p>
                      </div>
                    </div>
                    <p className="text-[#1a36e8] font-medium mb-1">
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
          </TabsContent>
        </Tabs>

        <div id="join" className="mt-16 bg-gray-100 p-8 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Join the RoboChargers Team
          </h2>
          <p className="text-center mb-6">
            Interested in becoming part of our robotics family? We're always looking for passionate students to join our team!
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
