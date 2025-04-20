import React from "react";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import RobotShowcase from "@/components/RobotShowcase";
import RecentUpdates from "@/components/RecentUpdates";
import UpcomingEvents from "@/components/UpcomingEvents";
import SponsorSection from "@/components/SponsorSection";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>RoboChargers - Building the future, one robot at a time</title>
        <meta
          name="description"
          content="RoboChargers is an award-winning FIRST Robotics Competition team from Coppell High School."
        />
      </Helmet>
      <HeroSection />
      <ProgramsSection />
      <RobotShowcase />
      <RecentUpdates />
      <UpcomingEvents />
      <SponsorSection />
      <CTASection />
    </>
  );
};

export default Home;
