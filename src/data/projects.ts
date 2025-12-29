import { LucideIcon } from "lucide-react";

export const PROJECTS_DATA = [
  {
    title: "TradeX",
    href: "https://github.com/shashank-poola/exness-v3",
    active: true,
    description:
      "Real-time crypto trading platform using live Backpack market data, supporting leveraged long/short trades, slippage control, stop loss, and PnL tracking.",
    technologies: [
      "Typescript",
      "ReactJs",
      "Bun",
      "ExpressJS",
      "Redis streams",
      "Postgresql",
      "Docker",
      "MongoDb",
    ],
    links: [
      {
        type: "Website",
        href: "https://tradex.foo",
        icon: "globe",
      },
      {
        type: "Github",
        href: "https://github.com/shashank-poola/exness-v3",
        icon: "github",
      },
    ],
    image: "/projects/tradex.png",
    video: "",
  },
  {
    title: "Rivet(n8n)",
    href: "https://github.com/shashank-poola/rivet",
    active: true,
    description:
      "Rivet is a lightweight automation platform and n8n alternative built to simplify workflow creation. Create AI automation using manual triggers, Email, Telegram, AI bots, and Web Search integrations.",
    technologies: [
      "Typescript",
      "Reactflow",
      "Redis Queue",
      "ReactJS",
      "Gemini",
      "Turborepo",
      "Docker",
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/shashank-poola/rivet",
        icon: "github",
      },
    ],
    image: "/projects/rivet.png",
    video: "",
  },
  {
    title: "HighlightText",
    href: "https://github.com/shashank-poola/highlightnow",
    active: true,
    description:
      "HighlightText is a simple web extension that lets you highlight text on any website in multiple colors for quick reference.Menu has colors (different colors), Copy, Export option and clear all section.",
    technologies: [
      "Typescript",
      "Chrome Extension",
      "Javascript",
      "Bun"
    ],
    links: [
      {
        type: "Website",
        href: "https://chromewebstore.google.com/detail/ecpddieccnjppapnicmfoddgbedcadgb?utm_source=item-share-cb",
        icon: "globe",
      },
      {
        type: "Github",
        href: "https://github.com/shashank-poola/highlightnow",
        icon: "github",
      },
    ],
    image: "/projects/highlighttext.png",
    video: "",
  },
  {
    title: "PlutoMarket",
    href: "#",
    active: true,
    description:
      "Visual workflow automation platform built with React and FastAPI. Design, connect, and automate workflows in real time with a drag-and-drop interface.",
    technologies: [
      "NextJS",
      "Privy",
      "Typescript",
      "Redis stream",
      "turborepo",
      "bun",
      "ExpressJS"
    ],
    links: [
      {
        type: "Github",
        href: "#",
        icon: "github",
      },
    ],
    image: "",
    video: "",
  },
  {
    title: "Rxdecode",
    href: "https://rxdecode.shasha.ink",
    active: true,
    description:
      "AI-powered prescription generator using Gemini that explains medicines based on doctor prescription, Provides detailed medicine information including usage, dosage, side effects, precautions, and warnings.",
    technologies: [
      "ReactJS",
      "Typescript",
      "NodeJS",
      "npm",
      "Google gemini"
    ],
    links: [
      {
        type: "Website",
        href: "https://rxdecode.shasha.ink",
        icon: "globe",
      },
      {
        type: "Github",
        href: "https://github.com/shashank-poola/rxdecode-next",
        icon: "github",
      },
    ],
    image: "/projects/rxdecode.png",
    video: "",
  },
  {
    title: "Nexora - GSAP Animation",
    href: "https://nexora.shasha.ink",
    active: true,
    description:
      "A modern web application featuring GSAP animations and built with React. Showcases smooth animations and interactive user experience.",
    technologies: [
      "Javascript",
      "ReactJS",
      "Appwrite",
      "ExpressJS",
      "npm"
    ],
    links: [
      {
        type: "Website",
        href: "https://nexora.shasha.ink",
        icon: "globe",
      },
      {
        type: "Github",
        href: "https://github.com/shashank-poola/nexora",
        icon: "github",
      },
    ],
    image: "/projects/nexora.png",
    video: "",
  },
] as const;
