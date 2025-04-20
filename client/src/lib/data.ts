// This file contains all the data used throughout the application

// Robot type definition
export interface Robot {
  id: string;
  name: string;
  description: string;
  season: string;
  challenge: string;
  team: "frc" | "ftc";
  ftcTeam?: string;
  imageUrl: string;
  current: boolean;
  features: string[];
}

// Blog post type definition
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  author: string;
}

// Event type definition
export interface Event {
  id: string;
  title: string;
  description: string;
  day: string;
  month: string;
  year: string;
  time: string;
  location: string;
  calendarLink: string;
  type: "competition" | "meeting" | "outreach" | "fundraising";
}

// Sponsor type definition
export interface Sponsor {
  id: string;
  name: string;
  level: string;
  logoUrl: string;
  website?: string;
}

// Sponsorship level type definition
export interface SponsorshipLevel {
  id: string;
  name: string;
  minimumContribution: number;
  description: string;
}

// Gallery image type definition
export interface GalleryImage {
  id: string;
  url: string;
  thumbnailUrl?: string;
  description: string;
  category: "competition" | "team" | "build";
}

// Gallery video type definition
export interface GalleryVideo {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  category: "reveal" | "feature";
}

// Team member type definition
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  bio: string;
}

// Alumni type definition
export interface Alumni {
  id: string;
  name: string;
  gradYear: string;
  photoUrl: string;
  currentRole: string;
  schoolOrCompany: string;
  teamRole: string;
}

// FTC Team type definition
export interface FTCTeam {
  teamNumber: string;
  teamName: string;
  members: TeamMember[];
}

// Team Members data
export const teamMembers = {
  students: {
    frc: [
      {
        id: "1",
        name: "Alex Johnson",
        role: "Team Captain",
        photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
        bio: "Fourth-year team member specializing in mechanical design and team leadership."
      },
      {
        id: "2",
        name: "Taylor Rodriguez",
        role: "Lead Programmer",
        photoUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
        bio: "Third-year member with expertise in Java and robot control systems."
      },
      {
        id: "3",
        name: "Jordan Smith",
        role: "Mechanical Lead",
        photoUrl: "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
        bio: "Specializes in CAD design and mechanism fabrication."
      },
      {
        id: "4",
        name: "Casey Wilson",
        role: "Electrical Lead",
        photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
        bio: "Expert in wiring, electrical systems, and troubleshooting."
      },
      {
        id: "5",
        name: "Morgan Lee",
        role: "Business & Outreach",
        photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
        bio: "Handles team fundraising, social media, and community engagement."
      },
      {
        id: "6",
        name: "Riley Carter",
        role: "Strategy Lead",
        photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
        bio: "Analyzes competition strategies and leads scouting efforts."
      }
    ],
    ftc: [
      {
        teamNumber: "13537",
        teamName: "Circuit Breakers",
        members: [
          {
            id: "7",
            name: "Sam Davis",
            role: "Team Lead",
            photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
            bio: "Second-year member with focus on team organization."
          },
          {
            id: "8",
            name: "Jamie Lewis",
            role: "Engineer",
            photoUrl: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
            bio: "Responsible for mechanical systems design."
          }
        ]
      },
      {
        teamNumber: "13542",
        teamName: "Alternating Current",
        members: [
          {
            id: "9",
            name: "Quinn Brown",
            role: "Team Lead",
            photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
            bio: "Third-year member with strong programming background."
          },
          {
            id: "10",
            name: "Avery Martinez",
            role: "Programmer",
            photoUrl: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
            bio: "Software specialist focusing on autonomous code."
          }
        ]
      },
      {
        teamNumber: "13552",
        teamName: "Voltage",
        members: [
          {
            id: "11",
            name: "Kai Thompson",
            role: "Team Lead",
            photoUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
            bio: "Second-year member with CAD design expertise."
          },
          {
            id: "12",
            name: "Drew Garcia",
            role: "Engineer",
            photoUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
            bio: "Mechanical design and fabrication specialist."
          }
        ]
      },
      {
        teamNumber: "18871",
        teamName: "Power Surge",
        members: [
          {
            id: "13",
            name: "Jordan Parker",
            role: "Team Lead",
            photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
            bio: "First-year team captain with previous FLL experience."
          },
          {
            id: "14",
            name: "Charlie Wright",
            role: "Programmer",
            photoUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
            bio: "Focuses on control systems and sensor integration."
          }
        ]
      }
    ]
  },
  mentors: [
    {
      id: "15",
      name: "Dr. Emily Richards",
      role: "Lead Mentor",
      photoUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      bio: "Engineering teacher at Coppell High School with 10+ years of FIRST experience.",
      company: "Coppell High School"
    },
    {
      id: "16",
      name: "Michael Torres",
      role: "Technical Mentor",
      photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      bio: "Software engineer specializing in robotics and autonomous systems.",
      company: "Texas Instruments"
    },
    {
      id: "17",
      name: "Sarah Chen",
      role: "Programming Mentor",
      photoUrl: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      bio: "Computer science professional with expertise in Java and autonomous programming.",
      company: "Lockheed Martin"
    },
    {
      id: "18",
      name: "Robert Washington",
      role: "Mechanical Mentor",
      photoUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      bio: "Mechanical engineer with a background in manufacturing and industrial design.",
      company: "Boeing"
    }
  ],
  alumni: [
    {
      id: "19",
      name: "Emma Williams",
      gradYear: "2019",
      photoUrl: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      currentRole: "Mechanical Engineering Student",
      schoolOrCompany: "University of Texas at Austin",
      teamRole: "Former Team Captain"
    },
    {
      id: "20",
      name: "Jason Kim",
      gradYear: "2020",
      photoUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      currentRole: "Software Developer",
      schoolOrCompany: "Microsoft",
      teamRole: "Former Lead Programmer"
    },
    {
      id: "21",
      name: "Olivia Patel",
      gradYear: "2018",
      photoUrl: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      currentRole: "Electrical Engineering Student",
      schoolOrCompany: "Georgia Tech",
      teamRole: "Former Electrical Lead"
    },
    {
      id: "22",
      name: "Marcus Johnson",
      gradYear: "2017",
      photoUrl: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      currentRole: "Robotics Engineer",
      schoolOrCompany: "Boston Dynamics",
      teamRole: "Former Strategy Lead"
    },
    {
      id: "23",
      name: "Sophia Clark",
      gradYear: "2021",
      photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      currentRole: "Computer Science Student",
      schoolOrCompany: "Stanford University",
      teamRole: "Former Business Lead"
    }
  ]
};

// Import robot images
import robot2023Image from "../assets/robots/robot_2023.png";
import robot2024Image from "../assets/robots/robot_2024.png";
import robot2025Image from "../assets/robots/robot_2025.png";
import robot2026Image from "../assets/robot_2026.png";
import teamLogoBlue from "../assets/robots/team_logo_blue.png";
import teamLogoWhite from "../assets/robots/team_logo_white.png";

// Robots data
export const robots: Robot[] = [
  {
    id: "1",
    name: "Relay",
    description: "Our 2026 robot designed for the CRESCENDO challenge, featuring advanced intake and shooting mechanisms for high-precision scoring.",
    season: "2026",
    challenge: "CRESCENDO",
    team: "frc",
    imageUrl: robot2026Image,
    current: true,
    features: [
      "Precision shooter with variable angles",
      "Advanced swerve drive system",
      "Quick intake mechanism for note collection",
      "Stable climbing apparatus for end-game",
      "Computer vision for autonomous targeting"
    ]
  },
  {
    id: "2",
    name: "Surge",
    description: "Our 2025 robot designed for the CRESCENDO challenge, featuring a multi-joint arm and lift mechanism for game piece placement.",
    season: "2025",
    challenge: "CRESCENDO",
    team: "frc",
    imageUrl: robot2025Image,
    current: false,
    features: [
      "Multi-joint articulating arm system",
      "Robust lifting mechanism for high goals",
      "Swerve drive for omnidirectional movement",
      "Automated game piece tracking",
      "Efficient auto-balancing capabilities"
    ]
  },
  {
    id: "3",
    name: "Blackout",
    description: "Our 2024 robot designed for the CHARGED UP challenge, featuring an advanced lift system and climbing mechanism.",
    season: "2024",
    challenge: "CHARGED UP",
    team: "frc",
    imageUrl: robot2024Image,
    current: false,
    features: [
      "Variable-height lift mechanism",
      "High-reach climbing apparatus",
      "Quick intake roller system",
      "Vision-guided targeting system",
      "Reliable autonomous routines"
    ]
  },
  {
    id: "4",
    name: "Amp",
    description: "Our 2023 robot designed for the ENERGIZE challenge, featuring precision mechanisms for game element manipulation.",
    season: "2023",
    challenge: "ENERGIZE",
    team: "frc",
    imageUrl: robot2023Image,
    current: false,
    features: [
      "Precision manipulator for game elements",
      "Balanced drive system for stability",
      "Efficient power management",
      "Custom sensor integration",
      "Modular component design"
    ]
  },
  {
    id: "5",
    name: "Spark",
    description: "Our 2019 robot for DESTINATION: DEEP SPACE featuring a hatch panel mechanism and cargo scoring system.",
    season: "2019",
    challenge: "DESTINATION: DEEP SPACE",
    team: "frc",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    current: false,
    features: [
      "Pneumatic hatch panel grabber",
      "Elevator system for multi-level scoring",
      "Cargo manipulation arm",
      "Sandstorm (autonomous) capabilities",
      "Drive train optimized for defense"
    ]
  },
  {
    id: "5",
    name: "Watt",
    description: "Our 2018 robot for FIRST POWER UP with a multi-cube intake and efficient autonomous capabilities.",
    season: "2018",
    challenge: "FIRST POWER UP",
    team: "frc",
    imageUrl: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    current: false,
    features: [
      "Intake system for multiple power cubes",
      "Scale climbing mechanism",
      "Elevator for different height placements",
      "Fast autonomous cube placement",
      "Robust drivetrain for quick field traversal"
    ]
  },
  {
    id: "6",
    name: "Zeta",
    description: "Our 2023 FTC robot featuring precision mechanisms for POWERPLAY challenges.",
    season: "2023",
    challenge: "POWERPLAY",
    team: "ftc",
    ftcTeam: "13537",
    imageUrl: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    current: true,
    features: [
      "Precise cone stacking mechanism",
      "Mecanum wheel drive system",
      "Signal sleeve detection vision system",
      "Terminal collection mechanism",
      "Efficient junction scoring"
    ]
  },
  {
    id: "7",
    name: "Quantum",
    description: "2023 FTC robot designed for efficient game element handling in POWERPLAY.",
    season: "2023",
    challenge: "POWERPLAY",
    team: "ftc",
    ftcTeam: "13542",
    imageUrl: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    current: true,
    features: [
      "Advanced signal identification system",
      "Multi-cone intake and storage",
      "High precision junction targeting",
      "Parallel linkage lifting arm",
      "Custom electronics layout for reliability"
    ]
  },
  {
    id: "8",
    name: "Impulse",
    description: "FTC robot for POWERPLAY with innovative scoring mechanisms and autonomous routines.",
    season: "2023",
    challenge: "POWERPLAY",
    team: "ftc",
    ftcTeam: "13552",
    imageUrl: "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    current: true,
    features: [
      "Telescoping linear slide system",
      "Servo-controlled precision gripper",
      "Path-following autonomous routines",
      "Custom designed 3D printed components",
      "Junction targeting vision system"
    ]
  },
  {
    id: "9",
    name: "Nova",
    description: "First-year FTC robot for our newest team, designed for POWERPLAY competition.",
    season: "2023",
    challenge: "POWERPLAY",
    team: "ftc",
    ftcTeam: "18871",
    imageUrl: "https://images.unsplash.com/photo-1597424216809-3ba9864aeb02?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    current: true,
    features: [
      "Simplified but effective cone grabber design",
      "Four-wheel drive base with omni wheels",
      "Basic autonomous capabilities",
      "Manual junction scoring mechanism",
      "Lightweight and efficient design approach"
    ]
  }
];

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "FiT Fort Worth District Event Recap",
    slug: "fort-worth-district-event-recap",
    excerpt: "Our team celebrated another successful weekend of competition at the FIRST in Texas Fort Worth District Event...",
    content: "Our team celebrated another successful weekend of competition at the FIRST in Texas Fort Worth District Event that was held from March 16th to March 18th. With only a week after our Dallas District Event, our team continued to give 110% at this weekend's competition. If you are not yet familiar with the 2023 FIRST Robotics Competition game, 'CHARGED UP,' teams work to place cubes and cones on a grid to score points, as well as balance on a charging station for additional points.",
    date: "March 21, 2023",
    imageUrl: "https://images.unsplash.com/photo-1501506780317-5cbe5f4c3482?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
    author: "RoboChargers Team"
  },
  {
    id: "2",
    title: "FiT Dallas District Event Recap",
    slug: "dallas-district-event-recap",
    excerpt: "Here on FRC Team 3005 RoboChargers, we've spent the past two months working on our robot to compete...",
    content: "Here on FRC Team 3005 RoboChargers, we've spent the past two months working on our robot to compete in the 2023 FIRST Robotics Competition game, 'CHARGED UP.' Our robot, Amp, was designed to complete all tasks of the game efficiently and elegantly. The competition was fierce, but our team performed exceptionally well, making it to the semifinals and earning the Engineering Excellence Award for our innovative design solutions and implementation.",
    date: "March 8, 2023",
    imageUrl: "https://images.unsplash.com/photo-1611074058507-7a487badba13?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
    author: "RoboChargers Team"
  },
  {
    id: "3",
    title: "2023 RoboChargers Kickoff Recap",
    slug: "2023-kickoff-recap",
    excerpt: "The 2023 FRC season has begun, and the RoboChargers are ready for it! The new FRC challenge, CHARGED UP...",
    content: "The 2023 FRC season has begun, and the RoboChargers are ready for it! The new FRC challenge, CHARGED UP, has got us excited for all the new and interesting obstacles just waiting to be solved. This was an exciting kickoff for us. Like many teams, we faced significant challenges during the pandemic and started out this season with a renewed energy and focus. Our strategy team has already begun analyzing the game and developing a competitive approach that plays to our team's strengths.",
    date: "January 7, 2023",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
    author: "RoboChargers Team"
  }
];

// Events data
export const events: Event[] = [
  {
    id: "1",
    title: "FIRST in Texas Fort Worth District Event",
    description: "Join us as we compete in the Fort Worth District Event. Come support our team and see our robot in action!",
    day: "18",
    month: "MAR",
    year: "2023",
    time: "8:00 AM - 6:00 PM",
    location: "Fort Worth Convention Center",
    calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=FIRST%20in%20Texas%20Fort%20Worth%20District%20Event&dates=20230318T080000/20230318T180000&details=Support%20Team%203005%20at%20the%20Fort%20Worth%20District%20Event!&location=Fort%20Worth%20Convention%20Center",
    type: "competition"
  },
  {
    id: "2",
    title: "FIRST in Texas District Championship",
    description: "The district championship where qualifying teams from across Texas compete for advancement to the FIRST Championship.",
    day: "5",
    month: "APR",
    year: "2023",
    time: "9:00 AM - 7:00 PM",
    location: "George R. Brown Convention Center, Houston",
    calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=FIRST%20in%20Texas%20District%20Championship&dates=20230405T090000/20230405T190000&details=Qualifying%20teams%20from%20across%20Texas%20compete%20for%20advancement%20to%20the%20FIRST%20Championship&location=George%20R.%20Brown%20Convention%20Center%2C%20Houston",
    type: "competition"
  },
  {
    id: "3",
    title: "FIRST Championship - Houston",
    description: "The ultimate FIRST Robotics event where teams from around the world compete for the championship title.",
    day: "19",
    month: "APR",
    year: "2023",
    time: "All Day Event",
    location: "George R. Brown Convention Center, Houston",
    calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=FIRST%20Championship%20-%20Houston&dates=20230419T080000/20230422T180000&details=The%20ultimate%20FIRST%20Robotics%20event%20where%20teams%20from%20around%20the%20world%20compete%20for%20the%20championship%20title.&location=George%20R.%20Brown%20Convention%20Center%2C%20Houston",
    type: "competition"
  },
  {
    id: "4",
    title: "Robot Demonstration at Elementary School",
    description: "Outreach event to inspire younger students about STEM and robotics through interactive demonstrations.",
    day: "12",
    month: "MAY",
    year: "2023",
    time: "3:30 PM - 5:00 PM",
    location: "Wilson Elementary School",
    calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Robot%20Demonstration%20at%20Elementary%20School&dates=20230512T153000/20230512T170000&details=Outreach%20event%20to%20inspire%20younger%20students%20about%20STEM%20and%20robotics.&location=Wilson%20Elementary%20School",
    type: "outreach"
  },
  {
    id: "5",
    title: "End of Year Team Banquet",
    description: "Celebration of our team's achievements throughout the season with awards, recognitions, and fun activities.",
    day: "27",
    month: "MAY",
    year: "2023",
    time: "6:00 PM - 9:00 PM",
    location: "Emmett J Conrad High School Cafeteria",
    calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=End%20of%20Year%20Team%20Banquet&dates=20230527T180000/20230527T210000&details=Celebration%20of%20our%20team's%20achievements%20throughout%20the%20season.&location=Emmett%20J%20Conrad%20High%20School%20Cafeteria",
    type: "meeting"
  },
  {
    id: "6",
    title: "Car Wash Fundraiser",
    description: "Team fundraising event to support our program's expenses for the upcoming season.",
    day: "10",
    month: "JUN",
    year: "2023",
    time: "10:00 AM - 2:00 PM",
    location: "Emmett J Conrad High School Parking Lot",
    calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Car%20Wash%20Fundraiser&dates=20230610T100000/20230610T140000&details=Team%20fundraising%20event%20to%20support%20our%20program's%20expenses.&location=Emmett%20J%20Conrad%20High%20School%20Parking%20Lot",
    type: "fundraising"
  }
];

// Sponsors data
export const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "Texas Instruments",
    level: "platinum",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Texas_Instruments_Logo.svg",
    website: "https://www.ti.com/"
  },
  {
    id: "2",
    name: "Lockheed Martin",
    level: "platinum",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Lockheed_Martin_logo.svg",
    website: "https://www.lockheedmartin.com/"
  },
  {
    id: "3",
    name: "Boeing",
    level: "gold",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Boeing_full_logo.svg",
    website: "https://www.boeing.com/"
  },
  {
    id: "4",
    name: "Toyota",
    level: "gold",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
    website: "https://www.toyota.com/"
  },
  {
    id: "5",
    name: "L3Harris",
    level: "silver",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/L3Harris_Technologies_logo.svg",
    website: "https://www.l3harris.com/"
  },
  {
    id: "6",
    name: "Dallas Education Foundation",
    level: "silver",
    logoUrl: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
    website: "https://futureofdallas.org/"
  },
  {
    id: "7",
    name: "Bank of Texas",
    level: "bronze",
    logoUrl: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
    website: "https://www.bankoftexas.com/"
  },
  {
    id: "8",
    name: "Dallas Regional Chamber",
    level: "bronze",
    logoUrl: "https://images.unsplash.com/photo-1535868463750-2318539a9176?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
    website: "https://www.dallaschamber.org/"
  }
];

// Sponsorship levels data
export const sponsorshipLevels: SponsorshipLevel[] = [
  {
    id: "platinum",
    name: "Platinum",
    minimumContribution: 10000,
    description: "Our highest level of sponsorship offers maximum visibility and benefits, including prominent logo placement on the robot, team materials, and banners."
  },
  {
    id: "gold",
    name: "Gold",
    minimumContribution: 5000,
    description: "Gold sponsors receive high visibility with logo placement on team shirts, banners, and website, plus team demonstrations and recognition."
  },
  {
    id: "silver",
    name: "Silver",
    minimumContribution: 2500,
    description: "Silver sponsors are featured on team banners and website, and receive regular updates and invitations to team events."
  },
  {
    id: "bronze",
    name: "Bronze",
    minimumContribution: 1000,
    description: "Bronze sponsors are recognized on our website and in team presentations, helping to support our mission while gaining exposure."
  }
];

// Gallery images data
export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1581092921461-7360182b067e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1581092921461-7360182b067e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Team 3005 at the 2023 Fort Worth District Event",
    category: "competition"
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Our robot Amp scoring during autonomous mode",
    category: "competition"
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "FRC Team 3005 in the pits preparing for a match",
    category: "competition"
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1561146143-5de11da702f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1561146143-5de11da702f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Robot 'Amp' ready for competition",
    category: "competition"
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1581093196277-9f5723e1c05d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1581093196277-9f5723e1c05d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Team photo at the 2023 Dallas District Event",
    category: "team"
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Our lead mentor working with students",
    category: "team"
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "FTC Teams showcasing their robots at an outreach event",
    category: "team"
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1544645577-22ee5ed81a84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1544645577-22ee5ed81a84?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Team bonding during pre-season workshop",
    category: "team"
  },
  {
    id: "9",
    url: "https://images.unsplash.com/photo-1558137623-ce933996c730?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1558137623-ce933996c730?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Students working on robot design during build season",
    category: "build"
  },
  {
    id: "10",
    url: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "CAD design session for our 2023 robot",
    category: "build"
  },
  {
    id: "11",
    url: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Fabrication and assembly of robot components",
    category: "build"
  },
  {
    id: "12",
    url: "https://images.unsplash.com/photo-1608501078713-8e445a709b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1608501078713-8e445a709b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Programming team testing autonomous routines",
    category: "build"
  }
];

// Gallery videos data
export const galleryVideos: GalleryVideo[] = [
  {
    id: "1",
    title: "Team 3005 RoboChargers - Amp Robot Reveal 2023",
    description: "Official reveal of our 2023 robot 'Amp' for the CHARGED UP season",
    youtubeId: "dQw4w9WgXcQ",
    category: "reveal"
  },
  {
    id: "2",
    title: "Behind the Scenes: 2023 Build Season",
    description: "Follow our journey throughout the 2023 build season as we design and construct our competition robot",
    youtubeId: "dQw4w9WgXcQ",
    category: "feature"
  },
  {
    id: "3",
    title: "Fort Worth District Event - Finals Matches",
    description: "Highlights from our performance in the finals at the 2023 Fort Worth District Event",
    youtubeId: "dQw4w9WgXcQ",
    category: "reveal"
  },
  {
    id: "4",
    title: "Meet the Drive Team: 2023 Season",
    description: "Get to know the students who operate our robot during competitions",
    youtubeId: "dQw4w9WgXcQ",
    category: "feature"
  },
  {
    id: "5",
    title: "RoboChargers FTC Teams Showcase",
    description: "Overview of our four FTC teams and their robots for the 2023 season",
    youtubeId: "dQw4w9WgXcQ",
    category: "reveal"
  },
  {
    id: "6",
    title: "Mentor Spotlight: Teaching the Next Generation",
    description: "Interview with our team mentors about their experience working with robotics students",
    youtubeId: "dQw4w9WgXcQ",
    category: "feature"
  }
];

// Resources data
export interface Resource {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  category: string;
  type: string;
  dateAdded: string;
}

export const resources: Resource[] = [
  {
    id: "1",
    title: "Team Handbook 2023",
    description: "Comprehensive guide to team policies, expectations, and procedures for the 2023 season",
    fileUrl: "/resources/TeamHandbook2023.pdf",
    category: "documents",
    type: "PDF",
    dateAdded: "October 1, 2022"
  },
  {
    id: "2",
    title: "Robot CAD Files - Amp (2023)",
    description: "Complete CAD model of our 2023 robot including all assemblies and components",
    fileUrl: "/resources/Amp2023CAD.zip",
    category: "cad",
    type: "ZIP (Onshape)",
    dateAdded: "April 30, 2023"
  },
  {
    id: "3",
    title: "Java Programming Guide for FRC",
    description: "Introduction to programming FRC robots using Java, including examples and best practices",
    fileUrl: "/resources/JavaProgrammingGuide.pdf",
    category: "programming",
    type: "PDF",
    dateAdded: "January 15, 2023"
  },
  {
    id: "4",
    title: "2023 Engineering Notebook Template",
    description: "Template for documenting the engineering design process throughout the season",
    fileUrl: "/resources/EngineeringNotebook2023.docx",
    category: "notebook",
    type: "DOCX",
    dateAdded: "December 10, 2022"
  },
  {
    id: "5",
    title: "RoboChargers Safety Manual",
    description: "Comprehensive safety guidelines for working in the robotics shop and at competitions",
    fileUrl: "/resources/SafetyManual.pdf",
    category: "safety",
    type: "PDF",
    dateAdded: "November 5, 2022"
  },
  {
    id: "6",
    title: "FTC Game Manual Part 1",
    description: "Official FIRST Tech Challenge game manual covering general competition rules",
    fileUrl: "/resources/FTCGameManual1.pdf",
    category: "documents",
    type: "PDF",
    dateAdded: "September 10, 2022"
  },
  {
    id: "7",
    title: "FTC Game Manual Part 2",
    description: "Official FIRST Tech Challenge game manual covering game-specific rules",
    fileUrl: "/resources/FTCGameManual2.pdf",
    category: "documents",
    type: "PDF",
    dateAdded: "September 10, 2022"
  },
  {
    id: "8",
    title: "Swerve Drive Design Calculations",
    description: "Spreadsheet with calculations for swerve drive design including gear ratios and motor selections",
    fileUrl: "/resources/SwerveDriveCalcs.xlsx",
    category: "engineering",
    type: "XLSX",
    dateAdded: "February 5, 2023"
  },
  {
    id: "9",
    title: "Robot Wiring Diagram Template",
    description: "Template for creating electrical wiring diagrams for FRC robots",
    fileUrl: "/resources/WiringDiagram.pdf",
    category: "engineering",
    type: "PDF",
    dateAdded: "January 8, 2023"
  },
  {
    id: "10",
    title: "OnShape CAD Class Materials",
    description: "Training materials for our OnShape CAD class, including tutorials and exercises",
    fileUrl: "/resources/OnShapeClass.zip",
    category: "cad",
    type: "ZIP",
    dateAdded: "October 15, 2022"
  },
  {
    id: "11",
    title: "FRC Control System Documentation",
    description: "Reference guide for the FRC Control System including roboRIO, PDP, and motor controllers",
    fileUrl: "/resources/ControlSystemDocs.pdf",
    category: "programming",
    type: "PDF",
    dateAdded: "December 20, 2022"
  },
  {
    id: "12",
    title: "RoboChargers Sponsor Brochure",
    description: "Information packet for potential sponsors detailing team accomplishments and sponsorship levels",
    fileUrl: "/resources/SponsorBrochure.pdf",
    category: "outreach",
    type: "PDF",
    dateAdded: "November 15, 2022"
  }
];
