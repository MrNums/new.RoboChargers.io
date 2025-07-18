import React from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ClockIcon, MapPinIcon, CalendarPlusIcon, ArrowRight } from "lucide-react";
import { Event } from "@/lib/data";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Card className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="bg-[#1a36e8] p-6 text-white text-center md:w-1/4 flex flex-col justify-center">
          <span className="text-2xl font-bold">{event.month}</span>
          <span className="text-4xl font-bold">{event.day}</span>
          <span className="text-sm">{event.year}</span>
        </div>
        <CardContent className="p-6 md:w-3/4">
          <h3 className="font-bold text-xl mb-2">{event.title}</h3>
          <div className="flex flex-wrap gap-y-3 text-sm text-gray-600 mb-4">
            <div className="flex items-center mr-4">
              <ClockIcon className="mr-2" size={14} />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="mr-2" size={14} />
              <span>{event.location}</span>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{event.description}</p>
          <div className="flex items-center">
            <Link href={`/schedule/${event.id}`} className="text-[#1a36e8] hover:text-[#0a1a70] font-bold mr-4 flex items-center">
              Event Details <ArrowRight className="ml-1" size={14} />
            </Link>
            <a
              href={event.calendarLink}
              className="text-gray-500 hover:text-gray-700 flex items-center"
            >
              <CalendarPlusIcon className="mr-1" size={14} /> Add to Calendar
            </a>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default EventCard;
