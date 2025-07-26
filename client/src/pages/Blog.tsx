import React from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { blogPosts } from "@/lib/data";

const Blog: React.FC = () => {
  // Display posts in reverse chronological order (newest first)
  const sortedPosts = [...blogPosts].reverse();

  return (
    <>
      <Helmet>
        <title>Blog - RoboChargers</title>
        <meta
          name="description"
          content="Read the latest updates, news, and accomplishments from the RoboChargers robotics team."
        />
      </Helmet>

      <div className="bg-[#0a1a70] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Team Blog</h1>
          <p className="text-xl">
            Stay updated with our latest news, events, and achievements.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post) => (
            <Card key={post.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-[#1a36e8] hover:text-[#0a1a70] font-bold flex items-center"
                >
                  Read More <ArrowRight className="ml-1" size={16} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blog posts available yet.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;