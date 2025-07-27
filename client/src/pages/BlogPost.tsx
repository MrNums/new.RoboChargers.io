import React, { useState, useRef, useEffect } from "react";
import { useRoute } from "wouter";
import { Helmet } from "react-helmet";
import { ArrowLeft, CalendarIcon, UserIcon, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/data";
import NotFound from "@/pages/not-found";

interface ImageDimensions {
  [key: string]: 'landscape' | 'portrait' | 'square';
}

const BlogPost: React.FC = () => {
  const [match, params] = useRoute("/blog/:slug");
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions>({});
  
  if (!match || !params?.slug) {
    return <NotFound />;
  }

  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - RoboChargers</title>
        <meta
          name="description"
          content={post.excerpt}
        />
      </Helmet>

      <div className="bg-[#0a1a70] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            asChild
            variant="ghost"
            className="text-white hover:text-gray-200 mb-6"
          >
            <Link href="/blog">
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
            </Link>
          </Button>
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center space-x-6 text-gray-200">
            <div className="flex items-center">
              <CalendarIcon className="mr-2" size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <UserIcon className="mr-2" size={16} />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="text-gray-800 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>

            {post.linkUrl && post.linkText && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border">
                <h3 className="text-lg font-semibold mb-3">Related Link</h3>
                <a 
                  href={post.linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#1a36e8] hover:text-[#0a1a70] font-medium"
                >
                  <ExternalLink className="mr-2" size={18} />
                  {post.linkText}
                </a>
              </div>
            )}

            {post.videoUrl && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Watch Video</h3>
                <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={post.videoUrl}
                    title={`${post.title} Video`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {post.galleryImages && post.galleryImages.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Photo Gallery</h3>
                <div className="simple-gallery">
                  {post.galleryImages.map((imageUrl, index) => {
                    // Use manual orientation if provided, otherwise default to horizontal
                    const orientation = post.galleryOrientations?.[index] || 'horizontal';
                    return (
                      <img
                        key={index}
                        src={imageUrl}
                        alt={`${post.title} - Photo ${index + 1}`}
                        className={`gallery-rectangle ${orientation} rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer object-cover hover:scale-105`}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Button
              asChild
              className="bg-[#1a36e8] hover:bg-[#0a1a70] text-white"
            >
              <Link href="/blog">
                <ArrowLeft className="mr-2" size={16} />
                Back to All Posts
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;