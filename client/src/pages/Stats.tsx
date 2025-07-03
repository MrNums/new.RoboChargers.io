import React from "react";
import { Helmet } from "react-helmet";
import { Trophy, Users, Award, Target, Calendar, TrendingUp, Star, Heart, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { teamStats } from "@/lib/data";

const Stats: React.FC = () => {
  // Add CSS for rainbow neon border animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rainbow-border {
        0% { border-color: rgba(255, 182, 193, 0.6); box-shadow: 0 0 4px rgba(255, 182, 193, 0.3); }
        16.66% { border-color: rgba(255, 218, 185, 0.6); box-shadow: 0 0 4px rgba(255, 218, 185, 0.3); }
        33.33% { border-color: rgba(255, 255, 186, 0.6); box-shadow: 0 0 4px rgba(255, 255, 186, 0.3); }
        50% { border-color: rgba(186, 255, 201, 0.6); box-shadow: 0 0 4px rgba(186, 255, 201, 0.3); }
        66.66% { border-color: rgba(173, 216, 230, 0.6); box-shadow: 0 0 4px rgba(173, 216, 230, 0.3); }
        83.33% { border-color: rgba(221, 160, 221, 0.6); box-shadow: 0 0 4px rgba(221, 160, 221, 0.3); }
        100% { border-color: rgba(255, 182, 193, 0.6); box-shadow: 0 0 4px rgba(255, 182, 193, 0.3); }
      }
      
      .award-box {
        border-width: 2px;
        border-style: solid;
        border-color: rgba(200, 200, 200, 0.3);
      }
      
      .award-box:nth-child(1) { animation: rainbow-border 4s linear infinite; }
      .award-box:nth-child(2) { animation: rainbow-border 5.5s linear infinite 0.5s; }
      .award-box:nth-child(3) { animation: rainbow-border 3.5s linear infinite 1s; }
      .award-box:nth-child(4) { animation: rainbow-border 6s linear infinite 1.5s; }
      .award-box:nth-child(5) { animation: rainbow-border 4.5s linear infinite 2s; }
      .award-box:nth-child(6) { animation: rainbow-border 5s linear infinite 2.5s; }
      .award-box:nth-child(7) { animation: rainbow-border 3.8s linear infinite 3s; }
      .award-box:nth-child(8) { animation: rainbow-border 5.2s linear infinite 3.5s; }
      .award-box:nth-child(9) { animation: rainbow-border 4.2s linear infinite 4s; }
      .award-box:nth-child(10) { animation: rainbow-border 5.8s linear infinite 4.5s; }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const StatCard = ({ icon: Icon, title, value, description }: {
    icon: React.ElementType;
    title: string;
    value: string | number;
    description?: string;
  }) => (
    <Card className="bg-white border-gray-200 shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Icon className="h-8 w-8 text-[#1a36e8]" />
          <div className="text-right">
            <div className="text-3xl font-bold text-gray-900">{value}</div>
            <div className="text-sm text-gray-600">{title}</div>
          </div>
        </div>
        {description && (
          <p className="text-sm text-gray-600">{description}</p>
        )}
      </CardContent>
    </Card>
  );

  return (
    <>
      <Helmet>
        <title>Team Statistics - RoboChargers</title>
        <meta
          name="description"
          content="View comprehensive statistics about FRC Team 3005 RoboChargers including achievements, awards, outreach, and current season performance."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-[#0a1a70] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Team Statistics</h1>
            <p className="text-xl mb-6">
              Comprehensive data about RoboChargers Team 3005
            </p>
            <div className="flex items-center justify-center gap-4 text-sm opacity-80">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {teamStats.overview.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Est. {teamStats.overview.established}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {teamStats.achievements.yearsActive} Years Active
              </div>
            </div>
          </div>

          {/* Key Achievements Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard
              icon={Trophy}
              title="Competition Trophies"
              value={teamStats.achievements.competitionTrophies}
            />
            <StatCard
              icon={Star}
              title="State Championships"
              value={teamStats.achievements.stateChampionships}
            />
            <StatCard
              icon={Users}
              title="Team Members"
              value={teamStats.achievements.teamMembers}
            />
            <StatCard
              icon={Award}
              title="Blue Banners"
              value={teamStats.achievements.blueBanners}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="awards">Awards</TabsTrigger>
            <TabsTrigger value="outreach">Outreach</TabsTrigger>
            <TabsTrigger value="current">Current Season</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-[#1a36e8]" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Competition Trophies</span>
                    <Badge variant="secondary">{teamStats.achievements.competitionTrophies}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>State Championships</span>
                    <Badge variant="secondary">{teamStats.achievements.stateChampionships}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Blue Banners</span>
                    <Badge variant="secondary">{teamStats.achievements.blueBanners}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Robots Built</span>
                    <Badge variant="secondary">{teamStats.achievements.robotsBuilt}</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#1a36e8]" />
                    Team Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Current Members</span>
                    <Badge variant="secondary">{teamStats.achievements.teamMembers}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Years Active</span>
                    <Badge variant="secondary">{teamStats.achievements.yearsActive}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>School District</span>
                    <Badge variant="outline">{teamStats.overview.schoolDistrict}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Current Season</span>
                    <Badge variant="outline">{teamStats.overview.currentSeason}</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-[#1a36e8]" />
                    Community Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Students Reached</span>
                    <Badge variant="secondary">{teamStats.outreach.studentsReached}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Events Hosted</span>
                    <Badge variant="secondary">{teamStats.outreach.eventsHosted}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>STEM Demonstrations</span>
                    <Badge variant="secondary">{teamStats.outreach.stemDemonstrations}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Mentorship Hours</span>
                    <Badge variant="secondary">{teamStats.outreach.mentorshipHours}</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Awards Tab */}
          <TabsContent value="awards">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamStats.awards.map((award, index) => (
                <Card key={index} className="award-box bg-white">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{award.event}</CardTitle>
                        <p className="text-sm text-muted-foreground">{award.name}</p>
                      </div>
                      <Badge variant="outline">{award.year}</Badge>
                    </div>
                  </CardHeader>
                  {award.description && (
                    <CardContent>
                      <p className="text-sm text-gray-600">{award.description}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Outreach Tab */}
          <TabsContent value="outreach">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatCard
                icon={Users}
                title="Students Reached"
                value={teamStats.outreach.studentsReached}
                description="Through demonstrations and events"
              />
              <StatCard
                icon={Calendar}
                title="Events Hosted"
                value={teamStats.outreach.eventsHosted}
                description="Community and educational events"
              />
              <StatCard
                icon={Heart}
                title="Volunteers Engaged"
                value={teamStats.outreach.volunteersEngaged}
                description="Community volunteers and mentors"
              />
              <StatCard
                icon={Target}
                title="Community Partners"
                value={teamStats.outreach.communityPartners}
                description="Organizations we work with"
              />
              <StatCard
                icon={Star}
                title="STEM Demonstrations"
                value={teamStats.outreach.stemDemonstrations}
                description="Educational presentations"
              />
              <StatCard
                icon={Clock}
                title="Mentorship Hours"
                value={teamStats.outreach.mentorshipHours}
                description="Hours spent mentoring students"
              />
            </div>
          </TabsContent>

          {/* Current Season Tab */}
          <TabsContent value="current">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-[#1a36e8]" />
                    Competition Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Competitions Attended</span>
                    <Badge variant="secondary">{teamStats.currentSeason.competitions}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Matches Played</span>
                    <Badge variant="secondary">{teamStats.currentSeason.matchesPlayed}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Wins</span>
                    <Badge variant="secondary">{teamStats.currentSeason.wins}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Win Rate</span>
                    <Badge variant="secondary">
                      {Math.round((teamStats.currentSeason.wins / teamStats.currentSeason.matchesPlayed) * 100)}%
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-[#1a36e8]" />
                    Scoring Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Average Score</span>
                    <Badge variant="secondary">{teamStats.currentSeason.averageScore}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Highest Score</span>
                    <Badge variant="secondary">{teamStats.currentSeason.highestScore}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Current Ranking</span>
                    <Badge variant="outline">{teamStats.currentSeason.ranking}</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-[#1a36e8]" />
                    Season Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <p className="font-semibold text-[#1a36e8]">Strong Performance</p>
                    <p className="text-gray-600">Maintaining top 25% ranking in Texas</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-[#1a36e8]">Consistent Scoring</p>
                    <p className="text-gray-600">Average score of {teamStats.currentSeason.averageScore} points</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-[#1a36e8]">High Win Rate</p>
                    <p className="text-gray-600">
                      {Math.round((teamStats.currentSeason.wins / teamStats.currentSeason.matchesPlayed) * 100)}% match win rate
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Stats;