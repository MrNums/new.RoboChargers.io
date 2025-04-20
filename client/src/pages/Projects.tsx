import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RobotCard from "@/components/ui/robot-card";
import { robots } from "@/lib/data";
import CTASection from "@/components/CTASection";

const Projects: React.FC = () => {
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null);
  
  useEffect(() => {
    // Initialize URL parameters when component mounts
    setSearchParams(new URLSearchParams(window.location.search));
  }, []);
  
  const teamParam = searchParams?.get("team") || null;
  const viewParam = searchParams?.get("view") || null;
  
  const [activeTab, setActiveTab] = useState("frc");
  
  // Update the active tab when URL parameters change
  useEffect(() => {
    if (teamParam === "ftc") {
      setActiveTab("ftc");
    } else if (viewParam === "past") {
      setActiveTab("past");
    } else {
      setActiveTab("frc");
    }
  }, [teamParam, viewParam]);

  const frcRobots = robots.filter((robot) => robot.team === "frc");
  const ftcRobots = robots.filter((robot) => robot.team === "ftc");
  const currentRobots = robots.filter((robot) => robot.current);
  const pastRobots = robots.filter((robot) => !robot.current);

  return (
    <>
      <Helmet>
        <title>Projects & Robots - RoboChargers</title>
        <meta
          name="description"
          content="Explore the robots designed and built by the RoboChargers team for FIRST Robotics competitions."
        />
      </Helmet>

      <div className="bg-[#0a1a70] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Projects & Robots</h1>
          <p className="text-xl">
            Take a look at our past and present engineering accomplishments.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="frc">FRC Team 3005</TabsTrigger>
            <TabsTrigger value="ftc">FTC Teams</TabsTrigger>
            <TabsTrigger value="past">Past Robots</TabsTrigger>
          </TabsList>
          <TabsContent value="frc">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Current FRC Robot</h2>
              <p className="text-gray-600 mb-6">
                Our current competition robot for the FIRST Robotics Competition, designed and built by Team 3005.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentRobots.filter(robot => robot.team === "frc").map((robot) => (
                  <Card key={robot.id} className="overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img
                          src={robot.imageUrl}
                          alt={`Robot ${robot.name}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-1/2">
                        <h3 className="font-bold text-xl mb-2">{robot.name}</h3>
                        <p className="text-gray-600 mb-4">{robot.description}</p>
                        <div className="mb-4">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Season:</span>
                            <span>{robot.season}</span>
                          </div>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Challenge:</span>
                            <span>{robot.challenge}</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="list-disc list-inside text-gray-600">
                            {robot.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">FRC Robot Archive</h2>
              <p className="text-gray-600 mb-6">
                Explore our past FRC robots and the engineering solutions we've developed over the years.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {frcRobots.filter(robot => !robot.current).map((robot) => (
                  <RobotCard key={robot.id} robot={robot} />
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="ftc">
            <h2 className="text-2xl font-bold mb-4">FTC Teams</h2>
            <p className="text-gray-600 mb-6">
              Our FIRST Tech Challenge teams develop smaller-scale robots for the FTC competition.
            </p>
            
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="team-13537">
                <AccordionTrigger className="text-lg font-semibold">
                  Team 13537 - Circuit Breakers
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4">
                    <p className="mb-4">
                      The Circuit Breakers specialize in innovative mechanisms and precise control systems.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                      {ftcRobots.filter(robot => robot.ftcTeam === "13537").map((robot) => (
                        <RobotCard key={robot.id} robot={robot} />
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="team-13542">
                <AccordionTrigger className="text-lg font-semibold">
                  Team 13542 - Alternating Current
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4">
                    <p className="mb-4">
                      Alternating Current is known for their software excellence and autonomous capabilities.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                      {ftcRobots.filter(robot => robot.ftcTeam === "13542").map((robot) => (
                        <RobotCard key={robot.id} robot={robot} />
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="team-13552">
                <AccordionTrigger className="text-lg font-semibold">
                  Team 13552 - Voltage
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4">
                    <p className="mb-4">
                      Voltage focuses on efficient mechanical design and robust drive systems.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                      {ftcRobots.filter(robot => robot.ftcTeam === "13552").map((robot) => (
                        <RobotCard key={robot.id} robot={robot} />
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="team-18871">
                <AccordionTrigger className="text-lg font-semibold">
                  Team 18871 - Power Surge
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4">
                    <p className="mb-4">
                      Power Surge, our newest team, brings fresh ideas and creative approaches to FTC challenges.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                      {ftcRobots.filter(robot => robot.ftcTeam === "18871").map((robot) => (
                        <RobotCard key={robot.id} robot={robot} />
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">About FTC</h3>
                <p className="text-gray-600 mb-4">
                  FIRST Tech Challenge (FTC) is designed for students in grades 7-12 to compete using a sports model. Teams design, build, program, and operate robots to compete in alliance challenges.
                </p>
                <p className="text-gray-600">
                  Each of our FTC teams consists of 10-15 members who work together throughout the season, guided by mentors to develop their technical and teamwork skills.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="past">
            <h2 className="text-2xl font-bold mb-4">RoboChargers Legacy</h2>
            <p className="text-gray-600 mb-6">
              Explore our complete collection of past competition robots from both FRC and FTC teams.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">By Season</h3>
              <Accordion type="single" collapsible>
                {Array.from(new Set(pastRobots.map(robot => robot.season))).sort((a, b) => parseInt(b) - parseInt(a)).map(season => (
                  <AccordionItem key={season} value={`season-${season}`}>
                    <AccordionTrigger>Season {season}</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                        {pastRobots.filter(robot => robot.season === season).map((robot) => (
                          <RobotCard key={robot.id} robot={robot} />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Documentation</h3>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    Our team maintains detailed documentation for all our robots, including CAD files, code repositories, and technical papers.
                  </p>
                  <p className="text-gray-600">
                    For access to technical documentation and resources for past robots, please visit our <a href="/resources" className="text-[#1a36e8] hover:text-[#0a1a70] font-medium">Resources page</a>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <CTASection />
    </>
  );
};

export default Projects;
