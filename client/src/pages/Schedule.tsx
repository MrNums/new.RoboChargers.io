import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import EventCard from "@/components/ui/event-card";
import { events } from "@/lib/data";
import CTASection from "@/components/CTASection";

const Schedule: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [eventType, setEventType] = useState<string>("all");

  // Filter events based on selection
  const filteredEvents = events.filter(event => {
    if (eventType !== "all" && event.type !== eventType) {
      return false;
    }
    return true;
  });

  const upcomingEvents = filteredEvents.filter(event => {
    const eventDate = new Date(`${event.month} ${event.day}, ${event.year}`);
    return eventDate >= new Date();
  });

  const pastEvents = filteredEvents.filter(event => {
    const eventDate = new Date(`${event.month} ${event.day}, ${event.year}`);
    return eventDate < new Date();
  });

  return (
    <>
      <Helmet>
        <title>Schedule & Events - RoboChargers</title>
        <meta
          name="description"
          content="Stay updated with RoboChargers event calendar and meeting times."
        />
      </Helmet>

      <div className="bg-[#0a1a70] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Schedule & Events</h1>
          <p className="text-xl">
            Stay updated with our event calendar and meeting times.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Calendar</h2>
                <div className="mb-6">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Filter Events</h3>
                  <Select
                    defaultValue="all"
                    onValueChange={(value) => setEventType(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Event Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Events</SelectItem>
                      <SelectItem value="competition">Competitions</SelectItem>
                      <SelectItem value="meeting">Team Meetings</SelectItem>
                      <SelectItem value="outreach">
                        Outreach Events
                      </SelectItem>
                      <SelectItem value="fundraising">
                        Fundraising
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:w-2/3">
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming">
                <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
                {upcomingEvents.length > 0 ? (
                  <div className="space-y-6">
                    {upcomingEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-gray-600">
                        No upcoming events matching your filter criteria.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              <TabsContent value="past">
                <h2 className="text-2xl font-bold mb-4">Past Events</h2>
                {pastEvents.length > 0 ? (
                  <div className="space-y-6">
                    {pastEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-gray-600">
                        No past events matching your filter criteria.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Regular Meeting Schedule</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">FRC Team 3005</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>5:00 PM - 8:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Off</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">
                      <em>Note: Extended hours during build season</em>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">FTC Teams</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex justify-between">
                        <span>Team 13537:</span>
                        <span>Tue & Thu, 4:00 - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Team 13542:</span>
                        <span>Mon & Wed, 4:00 - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Team 13552:</span>
                        <span>Tue & Thu, 4:30 - 6:30 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Team 18871:</span>
                        <span>Mon & Wed, 4:30 - 6:30 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Meeting Location</h3>
                  <p className="text-gray-600">
                    All team meetings take place in the Robotics Lab (Room 1420) at Emmett J Conrad High School,
                    unless otherwise specified.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <CTASection />
    </>
  );
};

export default Schedule;
