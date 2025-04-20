import React from "react";
import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Robot } from "@/lib/data";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard: React.FC<RobotCardProps> = ({ robot }) => {
  return (
    <Card className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100">
      <div className="relative">
        <img
          src={robot.imageUrl}
          alt={`Robot ${robot.name}`}
          className="w-full h-52 object-contain bg-gradient-to-b from-blue-50 to-gray-100 p-3"
        />
        {robot.current && (
          <Badge className="absolute top-3 right-3 bg-[#ffd700] text-[#0a1a70] font-semibold">
            Current
          </Badge>
        )}
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-xl text-[#0a1a70]">{robot.name}</h4>
          <Badge variant="outline" className="border-[#1a36e8] text-[#1a36e8]">
            {robot.season}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">{robot.description}</p>
        <div className="text-xs font-medium text-gray-500 mb-2">
          {robot.challenge}
        </div>
        <div className="flex flex-wrap gap-1 mt-3">
          {robot.features.slice(0, 2).map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
              {feature}
            </Badge>
          ))}
          {robot.features.length > 2 && (
            <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
              +{robot.features.length - 2} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-0 flex justify-end">
        <Link 
          href={`/projects/${robot.id}`} 
          className="text-[#1a36e8] hover:text-[#0a1a70] text-sm font-bold hover:underline flex items-center"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RobotCard;
