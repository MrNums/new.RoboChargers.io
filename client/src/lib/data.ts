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
  revealVideoUrl?: string;
  // OnShape 3D model properties
  onshapeDocumentId?: string; // The OnShape document ID for the 3D model
  onshapeElementId?: string; // The OnShape element ID for the 3D model
  awards?: {
    name: string;
    event: string;
    year: string;
  }[];
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
  videoUrl?: string; // Optional YouTube/Vimeo embed URL
  linkUrl?: string; // Optional external link
  linkText?: string; // Optional text for the link button
  galleryImages?: string[]; // Optional array of additional images for gallery
  galleryOrientations?: ("horizontal" | "vertical")[]; // Optional array to override orientations
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
  mentors: [
    {
      id: "1",
      name: "Rex Lees",
      role: "OG Team Coach",
      photoUrl:
        "https://ca.slack-edge.com/T01DCLZ42JV-U02D76F67C3-e11e5a2c3d73-512",
      bio: "Rawr XD",
      company: "Dallas ISD",
    },
    {
      id: "2",
      name: "Emmanuel  Coronado",
      role: "Drive Coach",
      photoUrl:
        "https://ca.slack-edge.com/T01DCLZ42JV-U02E5UFFE92-d2c2334c412d-512",
      bio: "Emma was here",
      company: "RoboBum (Internship)",
    },
    {
      id: "3",
      name: "Greyson Long",
      role: "Mentor Design Lead",
      photoUrl:
        "https://ca.slack-edge.com/T01DCLZ42JV-U035TB1A4BH-fc185966e245-512",
      bio: "Professional Yapper in Engineering",
      company: "Texas Instruments",
    },
    {
      id: "",
      name: "",
      role: "",
      photoUrl: "",
      bio: "",
      company: "",
    },
    {
      id: "",
      name: "",
      role: "",
      photoUrl: "",
      bio: "",
      company: "",
    },
  ],
  alumni: [
    {
      id: "1",
      name: "Emmanuel  Coronado",
      gradYear: "2021",
      photoUrl:
        "https://ca.slack-edge.com/T01DCLZ42JV-U02E5UFFE92-d2c2334c412d-512",
      currentRole: "Business Major",
      schoolOrCompany: "The University of Texas at Arlington",
      teamRole: "Drive Coach",
    },
    {
      id: "2",
      name: "Greyson Long",
      gradYear: "1920",
      photoUrl:
        "https://ca.slack-edge.com/T01DCLZ42JV-U035TB1A4BH-fc185966e245-512",
      currentRole: "Mechanical Engineer",
      schoolOrCompany: "Texas Instruments",
      teamRole: "Mentor Design lead",
    },
    {
      id: "3",
      name: "Kevin McDermott",
      gradYear: "1995",
      photoUrl:
        "https://ca.slack-edge.com/T01DCLZ42JV-U040R1NDXU3-609ba8540471-512",
      currentRole: "Electrical Engineering Student",
      schoolOrCompany: "Georgia Tech",
      teamRole: "Former Electrical Lead",
    },
    {
      id: "4",
      name: "Jonnathan Barrera",
      gradYear: "2023",
      photoUrl:
        "https://ca.slack-edge.com/T01DCLZ42JV-U02LMQ4H1QR-2f5f4fe62daa-512",
      currentRole: "PIT Member",
      schoolOrCompany: "The University of Texas at Dallas",
      teamRole: "PIT Mentor",
    },
  ],
};

// Use local images for reliability
const relayImage = "/images/robots/relay2025.png"; // 2025 robot
const surgeImage = "/images/robots/surge2024.jpg"; // 2024 robot
const blackoutImage = "/images/robots/blackout2022.jpg"; // 2023 robot
const ampImage = "/images/robots/amp2023.jpg"; // 2022 robot (in portrait)

// Define FRC and FTC logos (use public URLs for now)
const frcLogo =
  "https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/FRC-Stack-Full-Color.png";
const ftcLogo =
  "https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/FTC-Vertical-Full-Color.png";

// Robots data
export const robots: Robot[] = [
  {
    id: "1",
    name: "Relay",
    description:
      "Our 2025 robot designed for the REEFSCAPE challenge, featuring advanced intake and shooting mechanisms for high-precision scoring.",
    season: "2025",
    challenge: "REEFSCAPE",
    team: "frc",
    imageUrl: relayImage,
    current: true,
    features: [
      "Precision shooter with rapid auto-fire scoring",
      "Advanced 3in MAXSwerve drivetrain",
      "Custom 3-stage chain-driven elevator",
      "Lightweight Laterator for horizontal motion",
      "Coral chute enables fast, flexible collection",
      "Active serializer aligns Coral instantly",
      "Vision-guided targeting system",
      "High-speed ejector with concave rollers",
      "Simple 1-DOF climber with pivoting hook",
      "Custom 3D printed & molded components throughout",
    ],
    revealVideoUrl: "https://youtu.be/kVqYEoLIWE0?si=5eGBc81Dh9FAwPOZ",
    awards: [
      {
        name: "FIT District Waco Event Winner",
        event: "Innovation in Control Award",
        year: "2025",
      },
      {
        name: "FIT District Fort Worth Event Winner",
        event: "Excellence in Engineering Award",
        year: "2025",
      },
      {
        name: "FIT District Championship – Apollo Winner",
        event: "Autonomous Award",
        year: "2025",
      },
      {
        name: "FIRST In Texas District Championship Winner",
        event: "District Championship Winner",
        year: "2025",
      },
      {
        name: "Curie Division – FIRST Championship",
        event: "Excellence in Engineering Award",
        year: "2025",
      },
    ],
  },
  {
    id: "2",
    name: "Surge",
    description:
      "Our 2024 robot designed for the CRESCENDO challenge, featuring a multi-joint arm and lift mechanism for game piece placement.",
    season: "2024",
    challenge: "CRESCENDO",
    team: "frc",
    imageUrl: surgeImage,
    current: false,
    features: [
      "Multi-joint articulating arm system",
      "Robust lifting mechanism for high goals",
      "Swerve drive for omnidirectional movement",
      "Automated game piece tracking",
      "Efficient auto-balancing capabilities",
    ],
    onshapeDocumentId: "f1c0c9ce2309b0be3a22a379",
    onshapeElementId: "15f84812434f5022b133b60c",
    revealVideoUrl: "https://youtu.be/8Q35zErAfHI?si=iQ86ruf4wE_AI2Tb",
    awards: [
      {
        name: "FIT District Waco Event Winner",
        event: "Excellence in Engineering Award",
        year: "Week 1",
      },
      {
        name: "FIT District Fort Worth Winner",
        event: "Engineering Inspiration Award",
        year: "Week 3",
      },
      {
        name: "FIT District Championship – Mercury Winner",
        event: "District Championship Winner",
        year: "Week 6",
      },
      {
        name: "FIRST In Texas District Championship Winner",
        event: "Judges' Award",
        year: "Week 6",
      },
      {
        name: "Galileo Division – FIRST Championship",
        event: "Championship Division Semi-Finalist",
        year: "2024",
      },
      {
        name: "Texas Robotics Invitational Event Winner",
        event: "Event Winner",
        year: "2023",
      },
      {
        name: "Kettering AllStar Alliance Invitational",
        event: "Event Finalist",
        year: "2023",
      },
    ],
  },
  {
    id: "3",
    name: "Amp",
    description:
      "Our 2023 robot designed for the CHARGED UP challenge, featuring precision mechanisms for game element manipulation.",
    season: "2023",
    challenge: "CHARGED UP",
    team: "frc",
    imageUrl: ampImage,
    current: false,
    features: [
      "360° rotating wrist for flexible orientation",
      "3in MAXSwerve drivetrain for agile movement",
      "Adaptive LED indicators for game piece alignment",
      "Custom-molded gripper wheels for secure handling",
      "Extending multi-joint arm for wide reach",
      "Pivoting arm enables scoring without rotating chassis",
    ],
    onshapeDocumentId: "f1c0c9ce2309b0be3a22a379",
    onshapeElementId: "2d9c76777cab1eba9beda808",
    revealVideoUrl: "https://youtu.be/63VciN6goR8?si=yEq5UnchS8Js6Nx2",
    awards: [
      {
        name: "FIT District Dallas Event Winner",
        event: "Excellence in Engineering Award",
        year: "2023",
      },
      {
        name: "FIT District Fort Worth Event Winner",
        event: "Excellence in Engineering Award",
        year: "2023",
      },
      {
        name: "FIT District Championship – Mercury Winner",
        event: "District Championship Winner",
        year: "2023",
      },
      {
        name: "FIRST In Texas District Championship Winner",
        event: "Judges' Award",
        year: "2023",
      },
      {
        name: "Galileo Division – FIRST Championship",
        event: "Championship Division Finalist",
        year: "2023",
      },
      {
        name: "Texas Robotics Invitational Event Winner",
        event: "Event Winner",
        year: "2023",
      },
    ],
  },
  {
    id: "4",
    name: "Blackout",
    description:
      "Our 2022 robot designed for the RAPID REACT challenge, featuring an advanced lift system and climbing mechanism.",
    season: "2022",
    challenge: "RAPID REACT",
    team: "frc",
    imageUrl: blackoutImage,
    current: false,
    features: [
      "Variable-height lift mechanism",
      "High-reach climbing system",
      "Fast ground-fed intake for game pieces",
      "180° rotating turret with adaptive angle control",
      "Vision-guided targeting for precision scoring",
      "Ground-fed intake with optimized funneling",
      "Custom-built swerve modules powered by Neo & Neo 550 motors",
    ],
    revealVideoUrl: "https://youtu.be/WPG_ZI3BXq8?si=JS5C17i-Nkf0hsWg",
    awards: [
      {
        name: "FIT District Waco Event",
        event: "Creativity Award",
        year: "Week 1",
      },
      {
        name: "FIT District Fort Worth Event Winner",
        event: "Excellence in Engineering Award",
        year: "Week 3",
      },
      {
        name: "FIT District Championship – Mercury Finalist",
        event: "Quality Award",
        year: "Week 6",
      },
      {
        name: "Newton Division – FIRST Championship",
        event: "District Finalist",
        year: "Week 6",
      },
    ],
  },
  // FTC robots start here
  {
    id: "5",
    name: "Blue",
    description: "Team 13542's robot designed for the INTO THE DEEP challenge.",
    season: "2025",
    challenge: "INTO THE DEEP",
    team: "ftc",
    ftcTeam: "13542",
    imageUrl: "/images/robots/ftc-blue.jpg",
    current: true,
    features: [
      "Competition-ready design",
      "Reliable autonomous operation",
      "Efficient game piece handling",
    ],
    awards: [],
  },
  {
    id: "6",
    name: "Pink",
    description: "Team 13552's robot designed for the INTO THE DEEP challenge.",
    season: "2025",
    challenge: "INTO THE DEEP",
    team: "ftc",
    ftcTeam: "13552",
    imageUrl: "/images/robots/ftc-pink.jpg",
    current: true,
    features: [
      "Competition-ready design",
      "Reliable autonomous operation",
      "Efficient game piece handling",
    ],
    awards: [],
  },
  {
    id: "7",
    name: "Red",
    description: "Team 13537's robot designed for the INTO THE DEEP challenge.",
    season: "2025",
    challenge: "INTO THE DEEP",
    team: "ftc",
    ftcTeam: "13537",
    imageUrl: "/images/robots/ftc-red.jpg",
    current: true,
    features: [
      "Competition-ready design",
      "Reliable autonomous operation",
      "Efficient game piece handling",
    ],
    awards: [],
  },
];

// Blog posts data - ordered chronologically (oldest = 1, newest = highest)
const blogPostsRaw: Omit<BlogPost, "id">[] = [
  {
    title: "2023 RoboChargers Kickoff Recap",
    slug: "2023-kickoff-recap",
    excerpt:
      "The 2023 FRC season has begun, and the RoboChargers are ready for it! The new FRC challenge, CHARGED UP...",
    content:
      "The 2023 FRC season has begun, and the RoboChargers are ready for it! The new FRC challenge, CHARGED UP, has got us excited for all the new and interesting obstacles just waiting to be solved. This was an exciting kickoff for us. Like many teams, we faced significant challenges during the pandemic and started out this season with a renewed energy and focus. Our strategy team has already begun analyzing the game and developing a competitive approach that plays to our team's strengths.",
    date: "January 7, 2023",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
    author: "RoboChargers Team",
  },
  {
    title: "FiT Dallas District Event Recap",
    slug: "dallas-district-event-recap",
    excerpt:
      "Here on FRC Team 3005 RoboChargers, we've spent the past two months working on our robot to compete...",
    content:
      "Here on FRC Team 3005 RoboChargers, we've spent the past two months working on our robot to compete in the 2023 FIRST Robotics Competition game, 'CHARGED UP.' Our robot, Amp, was designed to complete all tasks of the game efficiently and elegantly. The competition was fierce, but our team performed exceptionally well, making it to the semifinals and earning the Engineering Excellence Award for our innovative design solutions and implementation.",
    date: "March 8, 2023",
    imageUrl:
      "https://images.unsplash.com/photo-1611074058507-7a487badba13?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
    author: "RoboChargers Team",
  },
  {
    title: "FiT Fort Worth District Event Recap",
    slug: "fort-worth-district-event-recap",
    excerpt: "Blog available soon!",
    content: "Come back later...",
    date: "March 21, 2023",
    imageUrl:
      "https://images.unsplash.com/photo-1501506780317-5cbe5f4c3482?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
    author: "RoboChargers Team",
  },
  {
    title: "FIT District Waco Event Recap",
    slug: "waco-district-event-recap",
    excerpt:
      "Relay hit the field for the first time this season and made an immediate impact.",
    content:
      "We wrapped up the event with a 15-2-0 overall record, finishing Rank 2 at the end of qualifications. In playoffs, we joined forces with 148 and 8732 as the first pick of Alliance 1, and together we powered through the bracket to win our first blue banner of the season. Our success was the result of tight teamwork across the board. We were honored with the Innovation in Control Award, sponsored by nVent, which recognizes creative and effective use of control systems across electrical, mechanical, and software that elevate robot performance on the field. The Waco event marked a strong start to our 2025 season, and Relay was just getting warmed up.",
    date: "March 1st, 2025",
    imageUrl: "/images/BlogPhotos/WacoEventBlogPicture.png",
    author: "RoboChargers Team",
    videoUrl: "https://www.youtube.com/embed/k9Cnp3AmAjE",
    linkUrl: "https://www.thebluealliance.com/event/2025txwac",
    linkText: "The Blue Alliance",
  },
  {
    title: "FIT District Fort Worth Event Recap",
    slug: "fort-wroth-district-event-recap",
    excerpt: "Blog available soon!",
    content: "Come back later...",
    date: "March 20th, 2025",
    imageUrl: "/images/BlogPhotos/FortWorthEventBlogPicture (2).png",
    author: "RoboChargers Team",
    linkUrl: "https://www.thebluealliance.com/event/2025txfor",
    linkText: "The Blue Alliance",
    galleryImages: [
      "/images/BlogPhotos/FW2025/FWRandom02.jpg",
      "/images/BlogPhotos/FW2025/FWUnoGang.jpg",
      "/images/BlogPhotos/FW2025/CapeFWEvent.png",
      "/images/BlogPhotos/FW2025/FortWorthRobot.png",
      "/images/BlogPhotos/FW2025/FTWGroupEvent.jpg",
      "/images/BlogPhotos/FW2025/FWRandom01.jpg",
    ],
    galleryOrientations: [
      "horizontal",
      "horizontal",
      "vertical",
      "vertical",
      "horizontal",
      "horizontal",
    ],
  },
  // Add new posts here - they will automatically get the next ID number
];

// Generate IDs automatically in ascending order
export const blogPosts: BlogPost[] = blogPostsRaw.map((post, index) => ({
  ...post,
  id: (index + 1).toString(),
}));

// Events data - ordered chronologically (oldest = 1, newest = highest)
const eventsRaw: Omit<Event, "id">[] = [
  {
    title: "FIRST in Texas Fort Worth District Event",
    description:
      "Join us as we compete in the Fort Worth District Event. Come support our team and see our robot in action!",
    day: "18",
    month: "MAR",
    year: "2023",
    time: "8:00 AM - 6:00 PM",
    location: "Fort Worth Convention Center",
    calendarLink:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=FIRST%20in%20Texas%20Fort%20Worth%20District%20Event&dates=20230318T080000/20230318T180000&details=Support%20Team%203005%20at%20the%20Fort%20Worth%20District%20Event!&location=Fort%20Worth%20Convention%20Center",
    type: "competition",
  },
  // Add new events here - they will automatically get the next ID number
];

// Generate IDs automatically in ascending order
export const events: Event[] = eventsRaw.map((event, index) => ({
  ...event,
  id: (index + 1).toString(),
}));

// Sponsors data - Real RoboChargers sponsors
export const sponsors: Sponsor[] = [
  // Platinum tier ($10,000+)
  {
    id: "1",
    name: "AoE Logo",
    level: "platinum",
    logoUrl: "/images/logos/RCLogoOG.png",
    website: "#",
  },
  // Gold tier ($5,000+)
  {
    id: "2",
    name: "REV Robotics (#Team REV)",
    level: "gold",
    logoUrl: "/images/logos/sponsors/RevRoboticsLogo.png",
    website: "https://www.revrobotics.com/",
  },
  {
    id: "3",
    name: "Boeing",
    level: "gold",
    logoUrl: "/images/logos/sponsors/BoeingLogo.png",
    website: "https://www.boeing.com/",
  },
  // Silver tier ($2,500+)
  {
    id: "4",
    name: "FIRST",
    level: "silver",
    logoUrl: "/images/otherLogos/FIRSTRobotics_iconHorz_RGB.png",
    website: "https://www.firstinspires.org/",
  },
  {
    id: "5",
    name: "HAAS",
    level: "silver",
    logoUrl: "/images/logos/sponsors/HAASLogo.png",
    website: "https://www.haascnc.com/",
  },
  {
    id: "6",
    name: "Raytheon + NAF",
    level: "silver",
    logoUrl: "/images/logos/sponsors/RTXnNAFLogo.png",
    website: "https://www.raytheon.com/",
  },
  // Bronze tier ($1,000+)
  {
    id: "7",
    name: "Vickery Meadow Youth Development Foundation",
    level: "bronze",
    logoUrl: "/images/logos/sponsors/VickeryMeadowLogo.png",
    website: "#",
  },
  {
    id: "8",
    name: "Cisco Meraki",
    level: "bronze",
    logoUrl: "/images/logos/sponsors/CiscoMerakiLogo.png",
    website: "https://meraki.cisco.com/",
  },
  {
    id: "9",
    name: "Liberty Mutual",
    level: "bronze",
    logoUrl: "/images/logos/sponsors/LibertyMutualLogo.png",
    website: "https://www.libertymutual.com/",
  },
  {
    id: "10",
    name: "Texas Instruments",
    level: "bronze",
    logoUrl: "/images/logos/sponsors/TexasInstrumentsLogo.png",
    website: "https://www.ti.com/",
  },
  {
    id: "11",
    name: "Texas Workforce Commission",
    level: "bronze",
    logoUrl: "/images/logos/sponsors/TexasWorkForceCommission.png",
    website: "https://www.twc.texas.gov/",
  },
  {
    id: "12",
    name: "NI / Emerson",
    level: "bronze",
    logoUrl: "/images/logos/sponsors/NILogo.png",
    website: "https://www.emerson.com/",
  },
];

// Sponsorship levels data
export const sponsorshipLevels: SponsorshipLevel[] = [
  {
    id: "platinum",
    name: "Platinum",
    minimumContribution: 10000,
    description:
      "Our highest level of sponsorship offers maximum visibility and benefits, including prominent logo placement on the robot, team materials, and banners.",
  },
  {
    id: "gold",
    name: "Gold",
    minimumContribution: 5000,
    description:
      "Gold sponsors receive high visibility with logo placement on team shirts, banners, and website, plus team demonstrations and recognition.",
  },
  {
    id: "silver",
    name: "Silver",
    minimumContribution: 2500,
    description:
      "Silver sponsors are featured on team banners and website, and receive regular updates and invitations to team events.",
  },
  {
    id: "bronze",
    name: "Bronze",
    minimumContribution: 1000,
    description:
      "Bronze sponsors are recognized on our website and in team presentations, helping to support our mission while gaining exposure.",
  },
];

// Gallery images data
export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1581092921461-7360182b067e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1581092921461-7360182b067e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Team 3005 at the 2023 Fort Worth District Event",
    category: "competition",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Our robot Amp scoring during autonomous mode",
    category: "competition",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "FRC Team 3005 in the pits preparing for a match",
    category: "competition",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1561146143-5de11da702f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1561146143-5de11da702f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Robot 'Amp' ready for competition",
    category: "competition",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1581093196277-9f5723e1c05d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1581093196277-9f5723e1c05d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Team photo at the 2023 Dallas District Event",
    category: "team",
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Our lead mentor working with students",
    category: "team",
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "FTC Teams showcasing their robots at an outreach event",
    category: "team",
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1544645577-22ee5ed81a84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1544645577-22ee5ed81a84?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Team bonding during pre-season workshop",
    category: "team",
  },
  {
    id: "9",
    url: "https://images.unsplash.com/photo-1558137623-ce933996c730?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1558137623-ce933996c730?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Students working on robot design during build season",
    category: "build",
  },
  {
    id: "10",
    url: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1569396116180-210c182bedb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "CAD design session for our 2023 robot",
    category: "build",
  },
  {
    id: "11",
    url: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Fabrication and assembly of robot components",
    category: "build",
  },
  {
    id: "12",
    url: "https://images.unsplash.com/photo-1608501078713-8e445a709b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1608501078713-8e445a709b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80",
    description: "Programming team testing autonomous routines",
    category: "build",
  },
];

// Gallery videos data
export const galleryVideos: GalleryVideo[] = [
  {
    id: "1",
    title: "Team 3005 RoboChargers - Amp Robot Reveal 2023",
    description:
      "Official reveal of our 2023 robot 'Amp' for the CHARGED UP season",
    youtubeId: "dQw4w9WgXcQ",
    category: "reveal",
  },
  {
    id: "2",
    title: "Behind the Scenes: 2023 Build Season",
    description:
      "Follow our journey throughout the 2023 build season as we design and construct our competition robot",
    youtubeId: "dQw4w9WgXcQ",
    category: "feature",
  },
  {
    id: "3",
    title: "Fort Worth District Event - Finals Matches",
    description:
      "Highlights from our performance in the finals at the 2023 Fort Worth District Event",
    youtubeId: "dQw4w9WgXcQ",
    category: "reveal",
  },
  {
    id: "4",
    title: "Meet the Drive Team: 2023 Season",
    description:
      "Get to know the students who operate our robot during competitions",
    youtubeId: "dQw4w9WgXcQ",
    category: "feature",
  },
  {
    id: "5",
    title: "RoboChargers FTC Teams Showcase",
    description:
      "Overview of our four FTC teams and their robots for the 2023 season",
    youtubeId: "dQw4w9WgXcQ",
    category: "reveal",
  },
  {
    id: "6",
    title: "Mentor Spotlight: Teaching the Next Generation",
    description:
      "Interview with our team mentors about their experience working with robotics students",
    youtubeId: "dQw4w9WgXcQ",
    category: "feature",
  },
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
    description:
      "Comprehensive guide to team policies, expectations, and procedures for the 2023 season",
    fileUrl: "",
    category: "documents",
    type: "PDF",
    dateAdded: "October 1, 2022",
  },
  {
    id: "2",
    title: "Robot CAD Files - Amp (2023)",
    description:
      "Complete CAD model of our 2023 robot including all assemblies and components",
    fileUrl: "",
    category: "cad",
    type: "ZIP (Onshape)",
    dateAdded: "April 30, 2023",
  },
  {
    id: "3",
    title: "Java Programming Guide for FRC",
    description:
      "Introduction to programming FRC robots using Java, including examples and best practices",
    fileUrl: "",
    category: "programming",
    type: "PDF",
    dateAdded: "January 15, 2023",
  },
  {
    id: "4",
    title: "2023 Engineering Notebook Template",
    description:
      "Template for documenting the engineering design process throughout the season",
    fileUrl: "/resources/EngineeringNotebook2023.docx",
    category: "notebook",
    type: "DOCX",
    dateAdded: "December 10, 2022",
  },
  {
    id: "5",
    title: "RoboChargers Safety Manual",
    description:
      "Comprehensive safety guidelines for working in the robotics shop and at competitions",
    fileUrl: "/resources/SafetyManual.pdf",
    category: "safety",
    type: "PDF",
    dateAdded: "November 5, 2022",
  },
  {
    id: "6",
    title: "FTC Game Manual Part 1",
    description:
      "Official FIRST Tech Challenge game manual covering general competition rules",
    fileUrl: "/resources/FTCGameManual1.pdf",
    category: "documents",
    type: "PDF",
    dateAdded: "September 10, 2022",
  },
  {
    id: "7",
    title: "FTC Game Manual Part 2",
    description:
      "Official FIRST Tech Challenge game manual covering game-specific rules",
    fileUrl: "/resources/FTCGameManual2.pdf",
    category: "documents",
    type: "PDF",
    dateAdded: "September 10, 2022",
  },
  {
    id: "8",
    title: "Swerve Drive Design Calculations",
    description:
      "Spreadsheet with calculations for swerve drive design including gear ratios and motor selections",
    fileUrl: "/resources/SwerveDriveCalcs.xlsx",
    category: "engineering",
    type: "XLSX",
    dateAdded: "February 5, 2023",
  },
  {
    id: "9",
    title: "Robot Wiring Diagram Template",
    description:
      "Template for creating electrical wiring diagrams for FRC robots",
    fileUrl: "/resources/WiringDiagram.pdf",
    category: "engineering",
    type: "PDF",
    dateAdded: "January 8, 2023",
  },
  {
    id: "10",
    title: "OnShape CAD Class Materials",
    description:
      "Training materials for our OnShape CAD class, including tutorials and exercises",
    fileUrl: "/resources/OnShapeClass.zip",
    category: "cad",
    type: "ZIP",
    dateAdded: "October 15, 2022",
  },
  {
    id: "11",
    title: "FRC Control System Documentation",
    description:
      "Reference guide for the FRC Control System including roboRIO, PDP, and motor controllers",
    fileUrl: "/resources/ControlSystemDocs.pdf",
    category: "programming",
    type: "PDF",
    dateAdded: "December 20, 2022",
  },
  {
    id: "12",
    title: "RoboChargers Sponsor Brochure",
    description:
      "Information packet for potential sponsors detailing team accomplishments and sponsorship levels",
    fileUrl: "/resources/SponsorBrochure.pdf",
    category: "outreach",
    type: "PDF",
    dateAdded: "November 15, 2022",
  },
];

// Team Statistics Data - Easy to edit for updating team achievements
export interface TeamStats {
  overview: {
    established: string;
    location: string;
    schoolDistrict: string;
    currentSeason: string;
  };
  achievements: {
    competitionTrophies: number;
    stateChampionships: number;
    teamMembers: number;
    blueBanners: number;
    yearsActive: number;
    robotsBuilt: number;
  };
  awards: {
    name: string;
    event: string;
    year: string;
    description?: string;
  }[];
  outreach: {
    eventsHosted: number;
    studentsReached: number;
    volunteersEngaged: number;
    communityPartners: number;
    stemDemonstrations: number;
    mentorshipHours: number;
  };
  currentSeason: {
    competitions: number;
    matchesPlayed: number;
    wins: number;
    averageScore: number;
    highestScore: number;
    ranking: string;
  };
}

export const teamStats: TeamStats = {
  overview: {
    established: "2009",
    location: "Dallas, Texas",
    schoolDistrict: "Dallas ISD",
    currentSeason: "2024-2025",
  },
  achievements: {
    competitionTrophies: 8,
    stateChampionships: 3,
    teamMembers: 35,
    blueBanners: 4,
    yearsActive: 16,
    robotsBuilt: 12,
  },
  awards: [
    {
      name: "FIT District Waco Event",
      event: "Creativity Award",
      year: "2023",
      description:
        "Recognized for innovative robot design and creative problem-solving approach",
    },
    {
      name: "FIT District Fort Worth Event Winner",
      event: "Excellence in Engineering Award",
      year: "2023",
      description: "Outstanding mechanical design and engineering excellence",
    },
    {
      name: "FIT District Championship",
      event: "Quality Award",
      year: "2023",
      description: "Exceptional build quality and attention to detail",
    },
    {
      name: "Newton Division",
      event: "District Finalist",
      year: "2023",
      description: "Advanced to FIRST Championship Newton Division playoffs",
    },
    {
      name: "State Championship",
      event: "Alliance Captain",
      year: "2022",
      description: "Led alliance to state championship victory",
    },
    {
      name: "Regional Competition",
      event: "Rookie Inspiration Award",
      year: "2010",
      description:
        "Outstanding rookie team performance and inspiration to others",
    },
  ],
  outreach: {
    eventsHosted: 12,
    studentsReached: 450,
    volunteersEngaged: 75,
    communityPartners: 8,
    stemDemonstrations: 25,
    mentorshipHours: 320,
  },
  currentSeason: {
    competitions: 3,
    matchesPlayed: 18,
    wins: 12,
    averageScore: 85,
    highestScore: 142,
    ranking: "Top 25% in Texas",
  },
};
