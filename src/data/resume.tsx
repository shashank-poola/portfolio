import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Shashank Poola",
  initials: "SP",
  url: "https://github.com/shashank-poola",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Full Stack Developer from India with hands-on experience taking products from 0→100. I love building fast, reliable,user-focused web applications and thrive. Strong in both frontend and backend, with a focus on clean architecture and practical execution.",
  summary:
    "Full Stack Developer from India with hands-on experience taking products from 0→100. I love building fast, reliable,user-focused web applications and thrive. Strong in both frontend and backend, with a focus on clean architecture and practical execution.",
  avatarUrl: "/xprofile.jpg",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "shashankpoola123@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shashank-poola",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shashankpoola",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/shashankpoola",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "shashankpoolaworks@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
} as const;
