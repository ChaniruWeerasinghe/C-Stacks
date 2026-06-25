export interface Project {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  link: string;
  themeColor: string;
  image?: string;
  usePlaceholder?: boolean;
}

export const webTools: Project[] = [
  {
    id: "wt-1",
    eyebrow: "Video Processing",
    title: "DownTown",
    description: "Natively process and combine videos locally with 100% data privacy.",
    link: "https://downtown-extreme.web.app/",
    themeColor: "#f43f5e", // Rose
    image: "/previews/downtown.png",
  },
  {
    id: "wt-2",
    eyebrow: "Connectivity",
    title: "NetFlash",
    description: "A background connection engine that silently keeps you online on institutional networks.",
    link: "https://netflash-pro.web.app/",
    themeColor: "#06b6d4", // Cyan
    image: "/previews/netflash.png",
  },
  {
    id: "wt-3",
    eyebrow: "File Management",
    title: "OrderBy",
    description: "Organize, group, and bulk rename your images instantly.",
    link: "https://orderby-uploads.web.app/",
    themeColor: "#8b5cf6", // Violet
    image: "/previews/orderby.png",
  },
  {
    id: "wt-4",
    eyebrow: "PDF Suite",
    title: "MonoEdits",
    description: "Edit, sign, and transform PDFs entirely in your browser.",
    link: "https://monoedits-pro.web.app/",
    themeColor: "#ec4899", // Pink
    image: "/previews/monoedits.png",
  },
  {
    id: "wt-5",
    eyebrow: "Documentation",
    title: "ReadMe Notes",
    description: "Securely share structured notes and code snippets with your team.",
    link: "https://readme-share-notes.web.app/",
    themeColor: "#3b82f6", // Blue
    image: "/previews/readme-notes.png",
  },
  {
    id: "wt-6",
    eyebrow: "Utility",
    title: "TurboCompress",
    description: "Compress files efficiently on the fly.",
    link: "https://chanii2024.github.io/turbo-compress/",
    themeColor: "#10b981", // Emerald
    image: "/previews/turbocompress.png",
  },
  {
    id: "wt-7",
    eyebrow: "AI Tool",
    title: "Studio AI",
    description: "Next-gen AI tools for creative studios.",
    link: "https://chanii2024.github.io/studio-ai/",
    themeColor: "#0ea5e9", // Sky
  },
  {
    id: "wt-8",
    eyebrow: "Productivity",
    title: "TaskTrace",
    description: "A collaborative task and todo manager.",
    link: "https://tasktrace-todo.web.app/pages/invite.html?id=TxUNSXJ3YOCWUiDSKibr",
    themeColor: "#f59e0b", // Amber
    image: "/previews/tasktrace.png",
  }
];

export const websites: Project[] = [
  {
    id: "ws-1",
    eyebrow: "E-Commerce",
    title: "Mingxing",
    description: "Premium clothing collections for the modern aesthetic.",
    link: "https://mingxing-10d5f.web.app/tshirts",
    themeColor: "#ef4444", // Red
  },
  {
    id: "ws-2",
    eyebrow: "Hospitality",
    title: "River Range Resort",
    description: "Experience luxury and serenity in the heart of nature.",
    link: "https://river-range-resort.web.app/",
    themeColor: "#14b8a6", // Teal
  },
  {
    id: "ws-3",
    eyebrow: "Hospitality",
    title: "River Range Hotel",
    description: "Elegant villas, dining, and outdoor adventures in Sri Lanka.",
    link: "https://riverrangehotel.com/",
    themeColor: "#3b82f6", // Blue
  },
  {
    id: "ws-4",
    eyebrow: "Portfolio",
    title: "DraftPoint",
    description: "A next-generation portfolio platform for high-end developers.",
    link: "https://draft-point.vercel.app/",
    themeColor: "#8b5cf6", // Violet
  },
  {
    id: "ws-5",
    eyebrow: "Corporate",
    title: "La Chérie Business",
    description: "Professional corporate presence for premium services.",
    link: "https://la-cherie-business.vercel.app/",
    themeColor: "#f43f5e", // Rose
  },
  {
    id: "ws-6",
    eyebrow: "Bakery",
    title: "La Chérie Bakery",
    description: "A mouth-watering bakery ordering experience.",
    link: "https://la-cherie-bakery.web.app/",
    themeColor: "#f59e0b", // Amber
  },
  {
    id: "ws-7",
    eyebrow: "Entertainment",
    title: "Xiao Wu",
    description: "An immersive fan experience for Soul Land.",
    link: "https://xiao-wu-soul-land.web.app/",
    themeColor: "#ec4899", // Pink
    usePlaceholder: true, // Use custom pink placeholder
  },
  {
    id: "ws-8",
    eyebrow: "Platform",
    title: "Lineage",
    description: "An advanced culinary intelligence platform for your household.",
    link: "https://lineage-family.web.app/",
    themeColor: "#6366f1", // Indigo
    image: "/previews/lineage.png",
  },
  {
    id: "ws-9",
    eyebrow: "Photography",
    title: "Sagara Lakmal De Mel",
    description: "Cinematic portfolios from an award-winning commercial photographer.",
    link: "https://media-ambassadors.web.app/",
    themeColor: "#0ea5e9", // Sky
  },
  {
    id: "ws-10",
    eyebrow: "Game",
    title: "PreyFall",
    description: "An intense real-time multiplayer stealth and survival game.",
    link: "https://preyfall.vercel.app/",
    themeColor: "#ec4899", // Pink
    image: "/previews/preyfall.png",
  },
  {
    id: "ws-11",
    eyebrow: "Portfolio",
    title: "Chaniru Weerasinghe",
    description: "Personal developer portfolio and professional resumé.",
    link: "https://chaniruweerasinghe.github.io/Chaniru-Weerasinghe-About-Me/",
    themeColor: "#8b5cf6", // Violet
  },
  {
    id: "ws-12",
    eyebrow: "Agency",
    title: "Elevate Digital",
    description: "Transparent pricing for premium web development packages.",
    link: "https://elevate-digital-client-pricing-site.vercel.app/",
    themeColor: "#3b82f6", // Blue
  }
];

export const officeWebsites: Project[] = [
  {
    id: "ow-1",
    eyebrow: "Travel & Tourism",
    title: "OTravel Maldives",
    description: "Premium travel experiences and resort bookings in the Maldives.",
    link: "https://otravelmaldives.com/",
    themeColor: "#0ea5e9", // Sky Blue
  },
  {
    id: "ow-2",
    eyebrow: "Corporate",
    title: "Geo Infolk",
    description: "Technology and consulting services for the modern enterprise.",
    link: "https://www.geoinfolk.com/",
    themeColor: "#14b8a6", // Teal
  },
  {
    id: "ow-3",
    eyebrow: "Finance",
    title: "Finachro",
    description: "Financial services and business solutions.",
    link: "https://www.finachro.com/",
    themeColor: "#10b981", // Emerald
  },
  {
    id: "ow-4",
    eyebrow: "Agency",
    title: "Finac Agency",
    description: "Digital agency providing premium branding and marketing.",
    link: "https://www.finacagency.com/",
    themeColor: "#8b5cf6", // Violet
  },
  {
    id: "ow-5",
    eyebrow: "Non-Profit",
    title: "Raise Sri Lanka (Ongoing)",
    description: "Charity and community development initiatives in Sri Lanka.",
    link: "https://raisesrilanka.org/",
    themeColor: "#f59e0b", // Amber
  },
  {
    id: "ow-6",
    eyebrow: "Enterprise",
    title: "Lithium ERP (Coming Soon)",
    description: "Next-generation Enterprise Resource Planning software.",
    link: "#",
    themeColor: "#ef4444", // Red
    usePlaceholder: true,
  },
  {
    id: "ow-7",
    eyebrow: "E-Commerce",
    title: "Serendib Flora",
    description: "Premium floral arrangements and delivery services.",
    link: "https://www.serendibflora.com/",
    themeColor: "#ec4899", // Pink
  },
  {
    id: "ow-8",
    eyebrow: "Hospitality",
    title: "River Range Resort",
    description: "Experience luxury and serenity in the heart of nature.",
    link: "https://river-range-resort.web.app/",
    themeColor: "#14b8a6", // Teal
  },
  {
    id: "ow-9",
    eyebrow: "Hospitality",
    title: "River Range Hotel",
    description: "Elegant villas, dining, and outdoor adventures in Sri Lanka.",
    link: "https://riverrangehotel.com/",
    themeColor: "#3b82f6", // Blue
  }
];
