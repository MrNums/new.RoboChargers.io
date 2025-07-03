import React from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sponsors, sponsorshipLevels } from "@/lib/data";

const Sponsors: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sponsors & Partners - RoboChargers</title>
        <meta
          name="description"
          content="We thank our sponsors for supporting STEM and innovation through the RoboChargers robotics program."
        />
      </Helmet>

      <div className="bg-[#0a1a70] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Sponsors & Partners</h1>
          <p className="text-xl">
            We thank our sponsors for supporting STEM and innovation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Current Sponsors
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            The RoboChargers robotics program is made possible by the generous
            support of these organizations. Their contributions fund our robot
            builds, competition fees, and travel expenses.
          </p>

          <Tabs defaultValue="platinum" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="platinum">Platinum</TabsTrigger>
              <TabsTrigger value="gold">Gold</TabsTrigger>
              <TabsTrigger value="silver">Silver</TabsTrigger>
              <TabsTrigger value="bronze">Bronze</TabsTrigger>
            </TabsList>
            {sponsorshipLevels.map((level) => (
              <TabsContent key={level.id} value={level.id}>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {level.name} Sponsors ($
                        {level.minimumContribution.toLocaleString()}+)
                      </h3>
                      <p className="text-gray-600">{level.description}</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                      {sponsors
                        .filter((sponsor) => sponsor.level === level.id)
                        .map((sponsor) => (
                          <div
                            key={sponsor.id}
                            className="flex flex-col items-center"
                          >
                            <img
                              src={sponsor.logoUrl}
                              alt={sponsor.name}
                              className="h-24 object-contain mb-4"
                            />
                            <h4 className="font-semibold text-center">
                              {sponsor.name}
                            </h4>
                            {sponsor.website && (
                              <a
                                href={sponsor.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#1a36e8] hover:text-[#0a1a70] text-sm mt-1"
                              >
                                Visit Website
                              </a>
                            )}
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-16 mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" id="become">
            Become a Sponsor
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-6">
                Your support helps us inspire the next generation of engineers,
                programmers, and innovators. By sponsoring the RoboChargers, you
                contribute directly to STEM education and provide valuable
                opportunities for students to develop real-world skills.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">
                    Benefits of Sponsorship
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Logo placement on our robot and team materials</li>
                    <li>Recognition at competitions and events</li>
                    <li>Tax deduction for your contribution</li>
                    <li>Team demonstrations at your organization</li>
                    <li>Mentorship opportunities with students</li>
                    <li>Access to future STEM talent pipeline</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Ways to Support</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Financial contributions</li>
                    <li>In-kind donations of materials</li>
                    <li>Professional mentorship</li>
                    <li>Technical expertise and guidance</li>
                    <li>Manufacturing resources</li>
                    <li>Facility access for team activities</li>
                  </ul>
                </div>
              </div>

              <div className="text-center space-y-4">
                <Button className="bg-[#1a36e8] hover:bg-[#0a1a70] text-white font-bold">
                  <a
                    href="/sponsorship-packet.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Sponsorship Packet
                  </a>
                </Button>
                <p className="text-sm text-gray-600">
                  For more information about sponsorship opportunities, please
                  contact our team at{" "}
                  <a
                    href="mailto:rememberToPutRealEmailhere@email.com"
                    className="text-[#1a36e8] hover:text-[#0a1a70]"
                  >
                    rememberToPutRealEmailhere@email.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div id="support" className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Support Our Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4">
                  Individual Donations
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Even small contributions can make a big difference! Individual
                  donations help us fund tools, materials, and competition
                  registration fees for our teams.
                </p>
                <Button className="bg-[#1a36e8] hover:bg-[#0a1a70] text-white font-bold mt-auto">
                  <a
                    href="https://example.com/donate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Make a Donation
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Share your skills and knowledge with our students! We welcome
                  volunteers with expertise in engineering, programming,
                  business, marketing, and more.
                </p>
                <Button className="bg-[#1a36e8] hover:bg-[#0a1a70] text-white font-bold mt-auto">
                  <a href="mailto:volunteer@robochargers.org">
                    Contact Us to Volunteer
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
