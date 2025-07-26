import React from "react";
import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarIcon, ArrowRight, ExternalLink, Play } from "lucide-react";
import { BlogPost } from "@/lib/data";

interface UpdateCardProps {
  post: BlogPost;
}

const UpdateCard: React.FC<UpdateCardProps> = ({ post }) => {
  return (
    <Card className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        {post.videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <Play className="w-12 h-12 text-white opacity-80" />
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <CalendarIcon className="mr-2" size={14} />
          <span>{post.date}</span>
        </div>
        <h3 className="font-bold text-xl mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex flex-col gap-3">
        <Link href={`/blog/${post.slug}`} className="text-[#1a36e8] hover:text-[#0a1a70] font-bold flex items-center">
          Read More <ArrowRight className="ml-1" size={16} />
        </Link>
        {post.linkUrl && post.linkText && (
          <a 
            href={post.linkUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#1a36e8] text-sm flex items-center"
          >
            <ExternalLink className="mr-1" size={14} />
            {post.linkText}
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default UpdateCard;
