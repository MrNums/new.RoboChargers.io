import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from "lucide-react";
import CTASection from "@/components/CTASection";
import { galleryImages, galleryVideos } from "@/lib/data";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openImageModal = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex((prev) =>
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
      setSelectedImage(galleryImages[currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1].url);
    } else {
      setCurrentIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
      setSelectedImage(galleryImages[currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1].url);
    }
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="photos" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
          <TabsContent value="photos">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Competition Photos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages
                  .filter((img) => img.category === "competition")
                  .map((image, index) => (
                    <Dialog key={image.id}>
                      <DialogTrigger asChild>
                        <div
                          className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                          onClick={() => openImageModal(image.url, index)}
                        >
                          <img
                            src={image.thumbnailUrl || image.url}
                            alt={image.description}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl bg-black/95">
                        <div className="relative">
                          <Button 
                            variant="ghost" 
                            className="absolute right-0 top-0 text-white hover:bg-white/20"
                            onClick={() => setSelectedImage(null)}
                          >
                            <XIcon />
                          </Button>
                          <div className="flex items-center justify-center py-4">
                            <Button
                              variant="ghost"
                              className="text-white hover:bg-white/20 mr-4"
                              onClick={() => navigateImage("prev")}
                            >
                              <ArrowLeftIcon />
                            </Button>
                            <img
                              src={selectedImage || image.url}
                              alt={image.description}
                              className="max-h-[70vh] max-w-full"
                            />
                            <Button
                              variant="ghost"
                              className="text-white hover:bg-white/20 ml-4"
                              onClick={() => navigateImage("next")}
                            >
                              <ArrowRightIcon />
                            </Button>
                          </div>
                          <p className="text-white text-center mt-2">
                            {image.description}
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Team Photos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages
                  .filter((img) => img.category === "team")
                  .map((image, index) => (
                    <Dialog key={image.id}>
                      <DialogTrigger asChild>
                        <div
                          className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                          onClick={() => openImageModal(image.url, index)}
                        >
                          <img
                            src={image.thumbnailUrl || image.url}
                            alt={image.description}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl bg-black/95">
                        <div className="relative">
                          <Button 
                            variant="ghost" 
                            className="absolute right-0 top-0 text-white hover:bg-white/20"
                            onClick={() => setSelectedImage(null)}
                          >
                            <XIcon />
                          </Button>
                          <div className="flex items-center justify-center py-4">
                            <Button
                              variant="ghost"
                              className="text-white hover:bg-white/20 mr-4"
                              onClick={() => navigateImage("prev")}
                            >
                              <ArrowLeftIcon />
                            </Button>
                            <img
                              src={selectedImage || image.url}
                              alt={image.description}
                              className="max-h-[70vh] max-w-full"
                            />
                            <Button
                              variant="ghost"
                              className="text-white hover:bg-white/20 ml-4"
                              onClick={() => navigateImage("next")}
                            >
                              <ArrowRightIcon />
                            </Button>
                          </div>
                          <p className="text-white text-center mt-2">
                            {image.description}
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Build Season Photos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages
                  .filter((img) => img.category === "build")
                  .map((image, index) => (
                    <Dialog key={image.id}>
                      <DialogTrigger asChild>
                        <div
                          className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                          onClick={() => openImageModal(image.url, index)}
                        >
                          <img
                            src={image.thumbnailUrl || image.url}
                            alt={image.description}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl bg-black/95">
                        <div className="relative">
                          <Button 
                            variant="ghost" 
                            className="absolute right-0 top-0 text-white hover:bg-white/20"
                            onClick={() => setSelectedImage(null)}
                          >
                            <XIcon />
                          </Button>
                          <div className="flex items-center justify-center py-4">
                            <Button
                              variant="ghost"
                              className="text-white hover:bg-white/20 mr-4"
                              onClick={() => navigateImage("prev")}
                            >
                              <ArrowLeftIcon />
                            </Button>
                            <img
                              src={selectedImage || image.url}
                              alt={image.description}
                              className="max-h-[70vh] max-w-full"
                            />
                            <Button
                              variant="ghost"
                              className="text-white hover:bg-white/20 ml-4"
                              onClick={() => navigateImage("next")}
                            >
                              <ArrowRightIcon />
                            </Button>
                          </div>
                          <p className="text-white text-center mt-2">
                            {image.description}
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="videos">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Robot Reveals and Competitions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryVideos
                  .filter((video) => video.category === "reveal")
                  .map((video) => (
                    <Card key={video.id} className="overflow-hidden shadow-md">
                      <div className="aspect-video">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${video.youtubeId}`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-lg mb-1">{video.title}</h3>
                        <p className="text-gray-600 text-sm">{video.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Team Features and Interviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryVideos
                  .filter((video) => video.category === "feature")
                  .map((video) => (
                    <Card key={video.id} className="overflow-hidden shadow-md">
                      <div className="aspect-video">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${video.youtubeId}`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-lg mb-1">{video.title}</h3>
                        <p className="text-gray-600 text-sm">{video.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-gray-100 p-6 rounded-lg max-w-6xl mx-auto">
          <h2 className="text-xl font-bold mb-4 text-center">
            More on Social Media
          </h2>
          <p className="text-center mb-6">
            Follow us on social media for the latest photos, videos, and updates!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="bg-white hover:bg-gray-100 border-[#1a36e8] text-[#1a36e8]"
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-white hover:bg-gray-100 border-[#1a36e8] text-[#1a36e8]"
            >
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
                YouTube
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-white hover:bg-gray-100 border-[#1a36e8] text-[#1a36e8]"
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Facebook
              </a>
            </Button>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
};

export default Gallery;
