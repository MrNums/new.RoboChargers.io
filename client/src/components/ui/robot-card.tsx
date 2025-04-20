import React from "react";
import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Robot } from "@/lib/data";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard: React.FC<RobotCardProps> = ({ robot }) => {
  return (
    <Card className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={robot.imageUrl}
        alt={`Robot ${robot.name}`}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <h4 className="font-bold text-lg mb-2">{robot.name}</h4>
        <p className="text-sm text-gray-600 mb-3">{robot.description}</p>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0 flex justify-between items-center">
        <span className="text-xs font-medium text-gray-500">
          Season: {robot.season}
        </span>
        <Link href={`/projects/${robot.id}`}>
          <a className="text-[#1a36e8] hover:text-[#0a1a70] text-sm font-bold">
            Learn More
          </a>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RobotCard;
