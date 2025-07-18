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
  const [touchPoints, setTouchPoints] = useState<{x: number, y: number}[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastCelebrationTime, setLastCelebrationTime] = useState(0);
  const [celebrationTimeoutId, setCelebrationTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const newSequence = (keySequence + event.key).slice(-4);
      setKeySequence(newSequence);
      
      if (newSequence === "3005") {
        const now = Date.now();
        // Throttle celebrations to once every 3 seconds
        if (now - lastCelebrationTime > 3000) {
          triggerCelebration();
          setLastCelebrationTime(now);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [keySequence, lastCelebrationTime]);

  // Lightning bolt swipe detection
  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      setIsDrawing(true);
      setTouchPoints([]);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isDrawing) return;
      
      const touch = event.touches[0];
      const newPoint = { x: touch.clientX, y: touch.clientY };
      
      setTouchPoints(prev => [...prev, newPoint]);
    };

    const handleTouchEnd = () => {
      if (!isDrawing) return;
      setIsDrawing(false);
      
      if (isLightningBoltPattern(touchPoints)) {
        const now = Date.now();
        // Throttle celebrations to once every 3 seconds for swipe too
        if (now - lastCelebrationTime > 3000) {
          triggerCelebration();
          setLastCelebrationTime(now);
        }
      }
      
      setTouchPoints([]);
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDrawing, touchPoints, lastCelebrationTime]);

  const isLightningBoltPattern = (points: {x: number, y: number}[]) => {
    if (points.length < 6) return false;
    
    // Analyze the pattern for zigzag motion
    let directionChanges = 0;
    let lastDirection = '';
    
    for (let i = 2; i < points.length; i++) {
      const prevPoint = points[i - 2];
      const currentPoint = points[i];
      
      const deltaX = currentPoint.x - prevPoint.x;
      const deltaY = currentPoint.y - prevPoint.y;
      
      // Determine direction
      let direction = '';
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        direction = deltaX > 0 ? 'right' : 'left';
      } else {
        direction = deltaY > 0 ? 'down' : 'up';
      }
      
      if (lastDirection && direction !== lastDirection) {
        directionChanges++;
      }
      
      lastDirection = direction;
    }
    
    // Lightning bolt should have at least 3 direction changes (zigzag)
    return directionChanges >= 3;
  };

  const triggerCelebration = () => {
    // Clear any existing timeout to prevent conflicts
    if (celebrationTimeoutId) {
      clearTimeout(celebrationTimeoutId);
    }
    
    setCelebrationActive(true);
    
    // Reset after animation completes - let React handle cleanup
    const timeoutId = setTimeout(() => {
      setCelebrationActive(false);
      setCelebrationTimeoutId(null);
    }, 4500);
    
    setCelebrationTimeoutId(timeoutId);
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
        data-celebration="true"
        className="fixed pointer-events-none z-50 text-2xl font-bold"
        style={{
          left: startX,
          top: startY,
          animation: `flyAround 3.5s ease-out forwards`,
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
      // Check if style already exists to prevent duplicates
      const existingStyle = document.getElementById('celebration-keyframes');
      if (existingStyle) {
        return;
      }

      const style = document.createElement('style');
      style.id = 'celebration-keyframes';
      style.textContent = `
        @keyframes flyAround {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: translate(100px, -50px) rotate(45deg) scale(1);
          }
          80% {
            opacity: 1;
            transform: translate(-150px, -200px) rotate(180deg) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translate(250px, -300px) rotate(360deg) scale(0.8);
          }
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        const styleToRemove = document.getElementById('celebration-keyframes');
        if (styleToRemove) {
          styleToRemove.remove();
        }
      };
    }
  }, [celebrationActive]);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (celebrationTimeoutId) {
        clearTimeout(celebrationTimeoutId);
      }
    };
  }, [celebrationTimeoutId]);

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
