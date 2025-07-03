import React, { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import RobotShowcase from "@/components/RobotShowcase";
import StatsCounter from "@/components/StatsCounter";
import RecentUpdates from "@/components/RecentUpdates";
import UpcomingEvents from "@/components/UpcomingEvents";
import SponsorSection from "@/components/SponsorSection";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  const [celebrationActive, setCelebrationActive] = useState(false);
  const [keySequence, setKeySequence] = useState("");

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const newSequence = (keySequence + event.key).slice(-4);
      setKeySequence(newSequence);
      
      if (newSequence === "3005") {
        triggerCelebration();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [keySequence]);

  const triggerCelebration = () => {
    setCelebrationActive(true);
    
    // Reset after animation
    setTimeout(() => {
      setCelebrationActive(false);
    }, 4000);
  };

  const createFlyingElement = (content: string, delay: number) => {
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const endX = Math.random() * window.innerWidth;
    const endY = Math.random() * window.innerHeight;
    const rotation = Math.random() * 720 - 360;
    
    return (
      <div
        key={`${content}-${delay}`}
        className="fixed pointer-events-none z-50 text-2xl font-bold"
        style={{
          left: startX,
          top: startY,
          animation: `flyAround 3s ease-out forwards`,
          animationDelay: `${delay}ms`,
          transform: `rotate(${rotation}deg)`,
          color: ['#1a36e8', '#ffd700', '#ff4444', '#44ff44', '#ff44ff'][Math.floor(Math.random() * 5)]
        }}
      >
        {content}
      </div>
    );
  };

  const celebrationElements = celebrationActive ? [
    // Emojis
    ...Array.from({ length: 15 }, (_, i) => 
      createFlyingElement(['🤖', '⚡', '🏆', '🔩', '⚙️', '🎉', '🎊', '✨'][Math.floor(Math.random() * 8)], i * 100)
    ),
    // Text elements
    ...Array.from({ length: 10 }, (_, i) => 
      createFlyingElement(['3005!', 'RoboChargers', '⚡BOLT⚡'][Math.floor(Math.random() * 3)], i * 150)
    ),
    // Confetti
    ...Array.from({ length: 20 }, (_, i) => 
      createFlyingElement(['🎊', '🎉', '✨', '⭐'][Math.floor(Math.random() * 4)], i * 80)
    )
  ] : [];

  useEffect(() => {
    if (celebrationActive) {
      const style = document.createElement('style');
      style.textContent = `
        @keyframes flyAround {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 180}deg) scale(1);
          }
          80% {
            opacity: 1;
            transform: translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) rotate(${Math.random() * 360}deg) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translate(${Math.random() * 600 - 300}px, ${Math.random() * 600 - 300}px) rotate(${Math.random() * 720}deg) scale(0.8);
          }
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [celebrationActive]);

  return (
    <>
      <Helmet>
        <title>RoboChargers - Building the future, one robot at a time</title>
        <meta
          name="description"
          content="RoboChargers is an award-winning FIRST Robotics Competition team from Coppell High School."
        />
      </Helmet>
      
      {/* Celebration Animation */}
      {celebrationElements}
      
      <HeroSection />
      <ProgramsSection />
      <RobotShowcase />
      <StatsCounter />
      <RecentUpdates />
      <UpcomingEvents />
      <SponsorSection />
      <CTASection />
    </>
  );
};

export default Home;
