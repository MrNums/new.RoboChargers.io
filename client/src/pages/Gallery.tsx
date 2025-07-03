import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, ImageIcon, VideoIcon } from "lucide-react";

const Gallery: React.FC = () => {
  useEffect(() => {
    // Automatically redirect to SmugMug gallery after a short delay
    const timer = setTimeout(() => {
      window.open("https://photos.robochargers.io", "_blank");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleRedirect = () => {
    window.open("https://photos.robochargers.io", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Gallery - RoboChargers</title>
        <meta
          name="description"
          content="Photos and videos from RoboChargers events, competitions, and builds."
        />
      </Helmet>

      <div className="bg-[#0a1a70] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-xl">
            Photos and videos from events, competitions, and builds.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-[#0a1a70] rounded-full">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>
                <div className="p-4 bg-[#0a1a70] rounded-full">
                  <VideoIcon className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">View Our Photo Gallery</h2>
            <p className="text-gray-600 mb-8">
              Our complete photo and video collection is hosted on SmugMug, featuring competition photos, team activities, and robot builds organized by year.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold mb-4">Redirecting to Gallery...</h3>
            <p className="text-gray-600 mb-6">
              You'll be automatically redirected to our photo gallery in a moment, or click the button below to visit now.
            </p>
            <Button
              onClick={handleRedirect}
              size="lg"
              className="bg-[#0a1a70] hover:bg-[#0a1a70]/90 text-white"
            >
              <ExternalLinkIcon className="w-5 h-5 mr-2" />
              Visit Photo Gallery
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h4 className="font-semibold mb-2 flex items-center">
                <ImageIcon className="w-5 h-5 mr-2 text-[#0a1a70]" />
                Competition Photos
              </h4>
              <p className="text-gray-600 text-sm">
                Action shots from FRC and FTC competitions, robot reveals, and award ceremonies.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h4 className="font-semibold mb-2 flex items-center">
                <VideoIcon className="w-5 h-5 mr-2 text-[#0a1a70]" />
                Team Activities
              </h4>
              <p className="text-gray-600 text-sm">
                Behind-the-scenes photos of build season, workshops, and team bonding activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;