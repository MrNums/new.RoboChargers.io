import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import UpdateCard from "@/components/ui/update-card";
import { blogPosts } from "@/lib/data";

const RecentUpdates: React.FC = () => {
  // Get the most recent posts (reverse order since we want newest first for display)
  const recentPosts = blogPosts.slice(-3).reverse();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Recent Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay current with the latest news, events, and accomplishments from
            our robotics team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <UpdateCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            className="bg-[#1a36e8] hover:bg-[#0a1a70] text-white font-bold px-8 py-6 text-lg"
            size="lg"
          >
            <Link href="/blog">Read All Updates</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentUpdates;
