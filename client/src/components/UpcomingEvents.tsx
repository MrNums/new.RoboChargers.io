import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/ui/event-card";
import { events } from "@/lib/data";

const UpcomingEvents: React.FC = () => {
  const upcomingEvents = events.slice(0, 3);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mark your calendars for these important robotics team events and
            competitions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Event Timeline */}
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              className="bg-[#1a36e8] hover:bg-[#0a1a70] text-white font-bold"
              size="lg"
            >
              <Link href="/schedule">View Full Calendar</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
