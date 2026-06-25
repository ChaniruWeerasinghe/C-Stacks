"use client";

import React from "react";
import { Project } from "../data/projects";
import { ArrowUpRight } from "lucide-react";

interface NeonCardProps {
  project: Project;
}

export default function NeonCard({ project }: NeonCardProps) {
  const getDomainExt = (link: string) => {
    if (!link || link === "#") return null;
    try {
      const url = new URL(link.startsWith("http") ? link : `https://${link}`);
      const parts = url.hostname.split('.');
      if (parts.length >= 2) {
        const lastTwo = parts.slice(-2).join('.');
        if (lastTwo === 'web.app' || lastTwo === 'vercel.app' || lastTwo === 'github.io') {
          return '.' + lastTwo;
        }
        return '.' + parts[parts.length - 1];
      }
    } catch (e) {
      return null;
    }
    return null;
  };

  const domainExt = getDomainExt(project.link);

  return (
    <div className="w-full flex flex-col group cursor-grab active:cursor-grabbing">
      {/* Image Container (The actual card) */}
      <div
        className="relative w-full aspect-video rounded-2xl bg-[#111111] border border-white/5 transition-all duration-300 overflow-hidden shrink-0"
        style={{
          boxShadow: `0 0 15px -3px ${project.themeColor}40, 0 4px 6px -4px rgba(0, 0, 0, 0.1)`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 30px 0px ${project.themeColor}80, 0 4px 20px 0px rgba(0,0,0,0.5)`;
          e.currentTarget.style.borderColor = `${project.themeColor}50`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 15px -3px ${project.themeColor}40, 0 4px 6px -4px rgba(0, 0, 0, 0.1)`;
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
        }}
      >
        {/* Domain Extension Tag */}
        {domainExt && (
          <div className="absolute top-4 right-4 z-30 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/90 tracking-widest shadow-lg pointer-events-none group-hover:bg-black/80 transition-colors">
            {domainExt}
          </div>
        )}

        {/* Live Preview Background or Manual Placeholder */}
        {project.usePlaceholder ? (
          <div className="absolute inset-0 flex items-center justify-center bg-[#111111] opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-0">
            {/* Ambient glowing radial gradient based on theme color */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle at center, ${project.themeColor} 0%, transparent 70%)`
              }}
            />
            {/* Project Initial */}
            <span className="text-6xl font-black opacity-40 z-10 select-none tracking-tighter" style={{ color: project.themeColor }}>
              {project.title.substring(0, 2).toUpperCase()}
            </span>
          </div>
        ) : (
          <div
            className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-0"
            style={{
              backgroundImage: project.image
                ? `url('${project.image}')`
                : `url('https://s0.wp.com/mshots/v1/${encodeURIComponent(project.link)}?w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'top center'
            }}
          />
        )}

        {/* Hover overlay link indicator */}
        {project.link === "#" ? (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-not-allowed">
            <div className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/40 text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              Coming Soon
            </div>
          </div>
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              Visit Site
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
            </div>
          </a>
        )}
      </div>

      {/* Text Container (Below the card) */}
      <div className="mt-5 sm:mt-6 text-center shrink-0">
        <p
          className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-1 sm:mb-2"
          style={{ color: project.themeColor }}
        >
          {project.eyebrow}
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 sm:mb-2">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 max-w-[260px] mx-auto leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
}
