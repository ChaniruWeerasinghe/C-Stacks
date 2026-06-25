import React from "react";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import { webTools, websites, officeWebsites } from "@/data/projects";

export default function Home() {
  return (
    <main className="bg-transparent text-white selection:bg-white/20">
      
      {/* Section 1: Header + Web Tools */}
      <section className="sm:min-h-screen flex flex-col pt-4 sm:pt-8 relative z-10 pb-8 sm:pb-0">
        {/* Top Header */}
        <header className="relative w-full mx-auto flex flex-col items-center justify-center px-4 sm:px-8 z-20 shrink-0 pb-6">
          {/* Desktop gradient */}
          <div className="hidden sm:block absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
          
          {/* Center: Logo & Description */}
          <div className="flex flex-col items-center text-center z-10 mt-2 sm:mt-0">
            <h1 className="text-4xl sm:text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90 sm:to-white/40 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] sm:drop-shadow-lg leading-none">
              C-Stacks
            </h1>
            <p className="mt-3 sm:mt-2 text-sm sm:text-xs text-gray-200 sm:text-gray-400 max-w-sm sm:max-w-xs font-medium tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] sm:drop-shadow-none">
              A curated collection of digital experiences, interactive utilities, and premium interfaces.
            </p>
          </div>

          {/* Right: Social Links (Absolute positioning for precise alignment) */}
          <div className="mt-6 sm:mt-0 sm:absolute sm:right-4 md:right-8 sm:top-[-4px] z-20">
            <SocialLinks />
          </div>
        </header>

        {/* Web Tools Carousel - Vertically Centered */}
        <div className="flex-1 flex flex-col justify-center w-full mt-6 sm:mt-0">
          <div className="max-w-7xl mx-auto px-6 mb-2 sm:mb-4 text-center sm:text-left relative w-full">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-1">
              Web Tools
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto sm:mx-0" />
          </div>
          <div className="w-full">
            <InfiniteCarousel items={webTools} />
          </div>
        </div>
      </section>

      {/* Section 2: Websites & Experiences */}
      <section className="sm:min-h-screen flex flex-col justify-center relative z-10 py-8 sm:py-0">
        <div className="max-w-7xl mx-auto px-6 mb-2 sm:mb-4 text-center sm:text-left w-full">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-1">
            Websites & Experiences
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full mx-auto sm:mx-0" />
        </div>
        <div className="w-full">
          <InfiniteCarousel items={websites} />
        </div>
      </section>

      {/* Section 3: Professional Work */}
      <section className="sm:min-h-screen flex flex-col justify-center relative z-10 py-8 sm:py-0">
        <div className="max-w-7xl mx-auto px-6 mb-2 sm:mb-4 text-center sm:text-left w-full">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-1">
            Professional Work
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-500 to-red-500 rounded-full mx-auto sm:mx-0" />
        </div>
        <div className="w-full">
          <InfiniteCarousel items={officeWebsites} />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
