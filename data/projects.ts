export interface Project {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  link: string;
  themeColor: string;
  usePlaceholder?: boolean;
}

export const webTools: Project[] = [
  {
    id: "wt-1",
    eyebrow: "Documentation",
    title: "ReadMe — Note Sharing",
    description: "Securely share structured notes, markdown files, and code snippets with your team. Create beautiful collections and collaborate seamlessly.",
    link: "https://readme-share-notes.web.app/",
    themeColor: "#3b82f6", // Blue
  },
  {
    id: "wt-2",
    eyebrow: "Utility",
    title: "TurboCompress",
    description: "Compress files efficiently on the fly.",
    link: "https://chanii2024.github.io/turbo-compress/",
    themeColor: "#10b981", // Emerald
  },
  {
    id: "wt-3",
    eyebrow: "Video Processing",
    title: "DownTown | The Fastest Natively Local Video Processor",
    description: "Experience absolute freedom with DownTown. Natively process, combine, and download videos locally on your own system with 100% data privacy.",
    link: "https://downtown-extreme.web.app/",
    themeColor: "#f43f5e", // Rose
  },
  {
    id: "wt-4",
    eyebrow: "File Management",
    title: "OrderBy | Organize & Bulk Rename Your Images",
    description: "A powerful, premium web tool to organize, group, and bulk rename your images instantly with live previews.",
    link: "https://orderby-uploads.web.app/",
    themeColor: "#8b5cf6", // Violet
  },
  {
    id: "wt-5",
    eyebrow: "AI Tool",
    title: "Studio AI - Smart Batch Image Processor",
    description: "Next-gen AI tools for creative studios.",
    link: "https://chanii2024.github.io/studio-ai/",
    themeColor: "#0ea5e9", // Sky
  },
  {
    id: "wt-6",
    eyebrow: "Productivity",
    title: "Accept Invitation | TaskTrace",
    description: "A collaborative task and todo manager.",
    link: "https://tasktrace-todo.web.app/pages/invite.html?id=TxUNSXJ3YOCWUiDSKibr",
    themeColor: "#f59e0b", // Amber
  },
  {
    id: "wt-7",
    eyebrow: "PDF Suite",
    title: "MonoEdits — The Ultimate PDF Toolkit",
    description: "Edit, Sign & Transform PDFs entirely in your browser. A growing suite of privacy-first PDF tools. No uploads. No accounts. No servers.",
    link: "https://monoedits-pro.web.app/",
    themeColor: "#ec4899", // Pink
  }
];

export const websites: Project[] = [
  {
    id: "ws-1",
    eyebrow: "E-Commerce",
    title: "Mingxing",
    description: "Discover premium collections at Mingxing. Timeless designs for the modern aesthetic.",
    link: "https://mingxing-10d5f.web.app/tshirts",
    themeColor: "#ef4444", // Red
  },
  {
    id: "ws-2",
    eyebrow: "Hospitality",
    title: "River Range Resort | Luxury Nature Escape",
    description: "Experience luxury and serenity at River Range Resort. Discover our premium villas, scenic outdoor pool, and thrilling adventures in the heart of nature.",
    link: "https://river-range-resort.web.app/",
    themeColor: "#14b8a6", // Teal
  },
  {
    id: "ws-3",
    eyebrow: "Hospitality",
    title: "River Range Resort",
    description: "Experience luxury and comfort at River Range Resort, Sri Lanka. Elegant villas, dining, and outdoor adventures.",
    link: "https://riverrangehotel.com/",
    themeColor: "#3b82f6", // Blue
  },
  {
    id: "ws-4",
    eyebrow: "Portfolio",
    title: "DraftPoint | Professional Developer Portfolio",
    description: "A next-generation portfolio platform designed for high-end developers. featuring deep glassmorphism and physics-based motion.",
    link: "https://draft-point.vercel.app/",
    themeColor: "#8b5cf6", // Violet
  },
  {
    id: "ws-5",
    eyebrow: "Corporate",
    title: "La Chérie | Rinisha Pinto",
    description: "Professional Business Page for La Chérie by Rinisha Pinto. Connect for premium services.",
    link: "https://la-cherie-business.vercel.app/",
    themeColor: "#f43f5e", // Rose
  },
  {
    id: "ws-6",
    eyebrow: "Bakery",
    title: "La Chérie",
    description: "Mouth-watering bakery ordering experience.",
    link: "https://la-cherie-bakery.web.app/",
    themeColor: "#f59e0b", // Amber
  },
  {
    id: "ws-7",
    eyebrow: "Entertainment",
    title: "Xiao Wu | Ethereal Journey",
    description: "Immersive fan experience for Soul Land.",
    link: "https://xiao-wu-soul-land.web.app/",
    themeColor: "#ec4899", // Pink
    usePlaceholder: true, // Use custom pink placeholder
  },
  {
    id: "ws-8",
    eyebrow: "Platform",
    title: "Lineage | Heritage Edition",
    description: "An advanced culinary intelligence platform managing the vitality and logistical precision of the household.",
    link: "https://lineage-family.web.app/",
    themeColor: "#6366f1", // Indigo
  },
  {
    id: "ws-9",
    eyebrow: "Photography",
    title: "Sagara Lakmal De Mel | Architectural & Commercial Photographer",
    description: "Experience the cinematic portfolios of Sagara Lakmal De Mel. Award-winning architectural, luxury resort, and state ceremony photography across 40+ countries.",
    link: "https://media-ambassadors.web.app/",
    themeColor: "#0ea5e9", // Sky
  },
  {
    id: "ws-10",
    eyebrow: "Game",
    title: "PreyFall | Multiplayer Stealth Hunting Game",
    description: "PreyFall is an intense real-time multiplayer stealth and survival game. Play as the Predator and hunt, or play as Prey and survive using stealth and spells!",
    link: "https://preyfall.vercel.app/",
    themeColor: "#ec4899", // Pink
  },
  {
    id: "ws-11",
    eyebrow: "Portfolio",
    title: "Chaniru Weerasinghe | Profile",
    description: "Professional profile of Chaniru Weerasinghe. GitHub accounts and LinkedIn connections.",
    link: "https://chaniruweerasinghe.github.io/Chaniru-Weerasinghe-About-Me/",
    themeColor: "#8b5cf6", // Violet
  },
  {
    id: "ws-12",
    eyebrow: "Agency",
    title: "Elevate Digital | Premium Web Development",
    description: "Transparent pricing for web development services, project packages, and digital solutions by Elevate Digital.",
    link: "https://elevate-digital-client-pricing-site.vercel.app/",
    themeColor: "#3b82f6", // Blue
  }
];
