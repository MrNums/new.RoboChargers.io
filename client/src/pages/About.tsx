import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CTASection from "@/components/CTASection";

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - RoboChargers</title>
        <meta
          name="description"
          content="Learn about the RoboChargers robotics team, our history, mission, and values."
        />
      </Helmet>
      
      <div className="bg-[#0a1a70] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About RoboChargers</h1>
          <p className="text-xl">
            Get to know our team, our mission, and our journey in the world of
            competitive robotics.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="history" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="history">Team History</TabsTrigger>
            <TabsTrigger value="mission" id="mission">Mission & Values</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          <TabsContent value="history">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Our History</h2>
                <p>
                  Founded in 2009, RoboChargers began with a small group of
                  passionate students and mentors at Coppell High School. Over
                  the years, we've grown into a thriving program with multiple
                  FRC and FTC teams.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Early Years</h3>
                    <p className="text-gray-600">
                      In our first season, we competed with a small but
                      dedicated team, learning the fundamentals of robotics
                      design and engineering. Those early experiences laid the
                      foundation for our growth and success.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Growth</h3>
                    <p className="text-gray-600">
                      As we gained experience and recognition, our team expanded
                      to include more students, mentors, and resources. We began
                      our FTC program to provide opportunities for more
                      students.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-2">Today</h3>
                  <p className="text-gray-600">
                    Today, the RoboChargers program includes FRC Team 3005 and
                    four FTC teams: 13537, 13542, 13552, and 18871. We continue
                    to innovate, inspire, and grow as we prepare students for
                    futures in STEM fields.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="mission">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p>
                  The RoboChargers mission is to inspire students in STEM
                  through competitive robotics while developing technical skills,
                  leadership, and collaborative abilities in a supportive team
                  environment.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-[#1a36e8]">
                      Core Values
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Innovation and technical excellence</li>
                      <li>Teamwork and collaborative problem-solving</li>
                      <li>Gracious professionalism and respect</li>
                      <li>Community engagement and service</li>
                      <li>Inclusive learning environment</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-[#1a36e8]">
                      Educational Goals
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Develop technical engineering skills</li>
                      <li>Build programming and software expertise</li>
                      <li>Foster leadership and communication abilities</li>
                      <li>Encourage creative problem-solving</li>
                      <li>Prepare students for careers in STEM</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="achievements">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Team Achievements</h2>
                <p>
                  Over the years, RoboChargers teams have received numerous
                  awards and recognition for our technical excellence,
                  community outreach, and team spirit.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Notable Achievements
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold">2023 Season</h4>
                      <ul className="list-disc list-inside text-gray-600 pl-4">
                        <li>FIRST in Texas District Champions</li>
                        <li>Engineering Excellence Award</li>
                        <li>FIRST World Championship - Houston Division Finalists</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold">2022 Season</h4>
                      <ul className="list-disc list-inside text-gray-600 pl-4">
                        <li>Fort Worth District Event Winners</li>
                        <li>Imagery Award in honor of Jack Kamen</li>
                        <li>FIRST in Texas District Event Finalists</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold">2021 Season</h4>
                      <ul className="list-disc list-inside text-gray-600 pl-4">
                        <li>FIRST Innovation Challenge Semifinalists</li>
                        <li>Industrial Design Award</li>
                        <li>Dean's List Finalist Award</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button
            className="bg-[#1a36e8] hover:bg-[#0a1a70] text-white font-bold"
            size="lg"
          >
            <a href="https://www.firstinspires.org/" target="_blank" rel="noopener noreferrer">
              Learn About FIRST Robotics
            </a>
          </Button>
        </div>
      </div>

      <CTASection />
    </>
  );
};

export default About;
