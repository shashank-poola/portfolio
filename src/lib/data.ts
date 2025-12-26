import { Profile, Experience, Project, Skills } from "@/types/data";

export const profile: Profile = {
  name: "Your Name",
  title: "Full Stack Developer",
  bio: "I build exceptional digital experiences. Passionate about creating elegant solutions to complex problems through clean and maintainable code.",
  avatar: "/xprofile.jpg",
  established: "EST. 2024",
};

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    link: "https://example.com",
    timeline: "2022 - Present",
    imgsrc: "/images/projects/default.png",
  },
];

export const skills: Skills[] = [
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Python", icon: "python" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Docker", icon: "docker" },
];

export const projects: Project[] = [
  {
    id: "highlighttext",
    title: "Highlight Text",
    category: ["Web App", "Productivity"],
    description: "A text highlighting tool for better productivity",
    imgsrc: "/images/projects/highlighttext.png",
  },
  {
    id: "rivetarch",
    title: "Rivet Arch",
    category: ["Architecture", "Design"],
    description: "Architecture design and planning tool",
    imgsrc: "/images/projects/rivetarch.png",
  },
  {
    id: "rxdecode",
    title: "RX Decode",
    category: ["Healthcare", "Web App"],
    description: "Medical prescription decoding system",
    imgsrc: "/images/projects/rxdecode.png",
  },
  {
    id: "tradexarch",
    title: "TradeX Arch",
    category: ["Finance", "Trading"],
    description: "Trading platform architecture",
    imgsrc: "/images/projects/tradexarch.png",
  },
];
