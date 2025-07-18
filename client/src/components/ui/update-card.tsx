import React from "react";
import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarIcon, ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/data";

interface UpdateCardProps {
  post: BlogPost;
}

const UpdateCard: React.FC<UpdateCardProps> = ({ post }) => {
  return (
    <Card className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <CalendarIcon className="mr-2" size={14} />
          <span>{post.date}</span>
        </div>
        <h3 className="font-bold text-xl mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Link href={`/blog/${post.slug}`} className="text-[#1a36e8] hover:text-[#0a1a70] font-bold flex items-center">
          Read More <ArrowRight className="ml-1" size={16} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UpdateCard;
