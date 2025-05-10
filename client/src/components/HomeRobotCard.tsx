import React, { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trophy, Video, X } from "lucide-react";
import { Robot } from "@/lib/data";
import { LazyImage } from "@/components/ui/lazy-image";
import OnShapeViewer from "@/components/ui/onshape-viewer";
import RobotModelViewer from "@/components/ui/robot-model-viewer";

interface HomeRobotCardProps {
  robot: Robot;
}

const HomeRobotCard: React.FC<HomeRobotCardProps> = ({ robot }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [modelViewMode, setModelViewMode] = useState<'image' | '3d'>('image');
  
  // Scroll to top when dialog closes
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    // Reset to image view when dialog closes
    setTimeout(() => setModelViewMode('image'), 300);
  };
  
  return (
    <>
      <Card className="flex-shrink-0 w-[400px] bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100">
        <div className="relative">
          <div className="w-full h-64 overflow-hidden">
            <LazyImage
              src={robot.imageUrl}
              alt={`Robot ${robot.name}`}
              className="w-full h-64 object-cover object-center"
              effect="blur"
              placeholderSrc="/images/placeholder-robot.png"
            />
          </div>
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {robot.current && (
              <Badge className="bg-[#ffd700] text-[#0a1a70] font-semibold flex items-center justify-center px-3">
                Current
              </Badge>
            )}
            <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-[#1a36e8] text-[#1a36e8] font-medium flex items-center justify-center px-3">
              {robot.season}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="mb-2">
            <h4 className="font-bold text-xl text-[#0a1a70]">{robot.name}</h4>
            <div className="text-sm font-medium text-gray-500 mb-3">
              {robot.challenge}
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{robot.description}</p>
          
          <div className="space-y-2">
            {robot.features.slice(0, 2).map((feature, index) => (
              <div key={index} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md">
                {feature}
              </div>
            ))}
            {robot.features.length > 2 && (
              <div className="text-sm text-gray-500">
                +{robot.features.length - 2} more features
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0 flex justify-end">
          <Button 
            variant="link" 
            onClick={() => setIsDialogOpen(true)}
            className="text-[#1a36e8] hover:text-[#0a1a70] text-sm font-bold hover:underline flex items-center p-0"
          >
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </CardFooter>
      </Card>

      {/* Robot Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center">
              <span className="text-[#0a1a70] dark:text-blue-300">{robot.name}</span>
              <Badge variant="outline" className="ml-3 border-[#1a36e8] text-[#1a36e8] dark:border-blue-400 dark:text-blue-400">
                {robot.season} {robot.challenge}
              </Badge>
            </DialogTitle>
            <DialogDescription className="text-base text-gray-700 dark:text-gray-300 mt-2">
              {robot.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
            <div>
              <div className="relative">
                {/* Tabs for switching between image and 3D model */}
                <div className="flex mb-3 border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden">
                  <Button
                    variant={modelViewMode === 'image' ? 'default' : 'ghost'}
                    className={`flex-1 rounded-none ${modelViewMode === 'image' ? 'bg-[#1a36e8] text-white' : 'text-gray-700 dark:text-gray-300'}`}
                    onClick={() => setModelViewMode('image')}
                  >
                    Photo
                  </Button>
                  <Button
                    variant={modelViewMode === '3d' ? 'default' : 'ghost'}
                    className={`flex-1 rounded-none ${modelViewMode === '3d' ? 'bg-[#1a36e8] text-white' : 'text-gray-700 dark:text-gray-300'}`}
                    onClick={() => setModelViewMode('3d')}
                  >
                    3D Model
                  </Button>
                </div>
                
                {/* Image view */}
                {modelViewMode === 'image' && (
                  <div className="rounded-lg overflow-hidden">
                    <LazyImage
                      src={robot.imageUrl}
                      alt={`Robot ${robot.name}`}
                      className="w-full rounded-lg object-contain bg-gradient-to-b from-blue-50 to-gray-100 dark:from-blue-950 dark:to-zinc-900 p-3 h-64"
                      effect="blur"
                    />
                  </div>
                )}
                
                {/* 3D model view */}
                {modelViewMode === '3d' && (
                  <div className="rounded-lg overflow-hidden h-64">
                    {robot.onshapeDocumentId && robot.onshapeElementId ? (
                      <OnShapeViewer
                        documentId={robot.onshapeDocumentId}
                        elementId={robot.onshapeElementId}
                        height="256px"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-zinc-800 rounded-lg">
                        <div className="text-center p-4">
                          <p className="text-gray-500 dark:text-gray-400 font-medium">
                            3D model not available yet
                          </p>
                          <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                            Check back later for model updates
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Features list */}
              <div className="mt-4">
                <h3 className="font-semibold text-[#0a1a70] dark:text-blue-300 mb-2">Key Features</h3>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  {robot.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              {/* Awards section */}
              {robot.awards && robot.awards.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-[#0a1a70] dark:text-blue-300 flex items-center mb-3">
                    <Trophy className="h-5 w-5 mr-2 text-[#ffd700]" />
                    Awards and Achievements
                  </h3>
                  <div className="space-y-3 max-h-44 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-200 dark:scrollbar-thumb-blue-700 scrollbar-track-blue-50 dark:scrollbar-track-zinc-800">
                    {robot.awards.map((award, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-lg ${award.name.includes("Winner") || award.name.includes("Champion") 
                          ? "bg-blue-100 dark:bg-blue-900/40 border-l-4 border-blue-600 dark:border-blue-500" 
                          : "bg-blue-50 dark:bg-blue-950/30"}`}
                      >
                        <div className="font-medium text-[#0a1a70] dark:text-blue-300 flex items-start">
                          {(award.name.includes("Winner") || award.name.includes("Champion")) && (
                            <Trophy className="h-4 w-4 mr-1 text-[#ffd700] mt-0.5 flex-shrink-0" />
                          )}
                          <span>{award.name}</span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {award.event} ({award.year})
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Reveal video section */}
              {robot.revealVideoUrl && (
                <div>
                  <h3 className="font-semibold text-[#0a1a70] dark:text-blue-300 flex items-center mb-3">
                    <Video className="h-5 w-5 mr-2 text-red-600 dark:text-red-400" />
                    Robot Reveal Video
                  </h3>
                  <div className="bg-gray-100 dark:bg-zinc-800 p-1 rounded-lg">
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          robot.revealVideoUrl.includes('youtu.be/')
                            ? robot.revealVideoUrl.replace(/youtu\.be\/([^?]+)(\?si=.+)?/, 'youtube.com/embed/$1$2')
                            : robot.revealVideoUrl.replace(/youtube\.com\/watch\?v=([^&]+)(&.+)?/, 'youtube.com/embed/$1$2')
                        }
                        title={`${robot.name} Reveal Video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Blue Banners section */}
          {robot.awards && robot.awards.some(award => award.name.includes("Winner") || award.name.includes("Championship")) && (
            <div className="mt-4 border-t dark:border-zinc-700 pt-4">
              <h3 className="font-semibold text-[#0a1a70] dark:text-blue-300 mb-3">Blue Banners</h3>
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {robot.awards
                  .filter(award => award.name.includes("Winner") || award.name.includes("Champion"))
                  .map((award, index) => (
                    <div key={index} className="flex-shrink-0 w-full max-w-[280px] relative">
                      <LazyImage
                        src="/images/blue-banner.png" 
                        alt={`${award.event} Blue Banner`} 
                        className="w-full h-auto"
                        effect="opacity"
                      />
                      <div className="absolute inset-0 flex flex-col justify-center items-center pt-28 px-4">
                        <div className="text-white text-center font-bold text-sm mt-12">
                          {award.event} ({award.year})
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={handleCloseDialog}
              className="border-[#1a36e8] text-[#1a36e8] dark:border-blue-400 dark:text-blue-400 hover:bg-[#1a36e8] hover:text-white"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HomeRobotCard;