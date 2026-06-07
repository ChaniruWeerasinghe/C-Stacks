"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "../data/projects";
import NeonCard from "./NeonCard";

interface InfiniteCarouselProps {
  items: Project[];
}

export default function InfiniteCarousel({ items }: InfiniteCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Handle scroll wheel / trackpad
  const lastWheelTime = React.useRef(0);
  const handleWheel = useCallback((e: React.WheelEvent) => {
    const now = Date.now();
    // 400ms cooldown to prevent rapid spinning from sensitive trackpads/mice
    if (now - lastWheelTime.current < 400) return;

    // Check if movement is significant enough (ignore tiny trackpad jitters)
    if (Math.abs(e.deltaX) > 20 || Math.abs(e.deltaY) > 20) {
      if (e.deltaX > 0 || e.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      lastWheelTime.current = now;
    }
  }, [handleNext, handlePrev]);

  const variants = {
    center: {
      x: 0,
      scale: 1,
      zIndex: 50,
      opacity: 1,
      rotateY: 0,
    },
    left1: {
      x: "-75%",
      scale: 0.8,
      zIndex: 40,
      opacity: 0.5,
      rotateY: -15,
    },
    left2: {
      x: "-125%",
      scale: 0.6,
      zIndex: 30,
      opacity: 0,
      rotateY: -25,
    },
    right1: {
      x: "75%",
      scale: 0.8,
      zIndex: 40,
      opacity: 0.5,
      rotateY: 15,
    },
    right2: {
      x: "125%",
      scale: 0.6,
      zIndex: 30,
      opacity: 0,
      rotateY: 25,
    },
    hidden: {
      x: 0,
      scale: 0.5,
      zIndex: 0,
      opacity: 0,
      rotateY: 0,
    }
  };

  const getVariant = (offset: number) => {
    if (offset === 0) return "center";
    if (offset === -1) return "left1";
    if (offset === -2) return "left2";
    if (offset === 1) return "right1";
    if (offset === 2) return "right2";
    return "hidden";
  };

  return (
    <div 
      className="relative w-full flex flex-col items-center justify-center pt-4 pb-12 sm:pt-6 sm:pb-20 overflow-hidden"
      onWheel={handleWheel}
    >
      {/* Track */}
      <div className="relative w-full max-w-[280px] sm:max-w-md md:max-w-[480px] h-[450px] sm:h-[550px] flex items-center justify-center perspective-[1000px]">
        {items.map((item, index) => {
          let offset = (index - currentIndex) % items.length;
          if (offset < 0) offset += items.length;
          if (offset > Math.floor(items.length / 2)) {
            offset -= items.length;
          }

          return (
            <motion.div
              key={item.id}
              className="absolute w-full h-full cursor-grab active:cursor-grabbing"
              initial={false}
              animate={getVariant(offset)}
              variants={variants}
              transition={{
                duration: 0.5,
                ease: [0.32, 0.72, 0, 1], // Custom easing for premium feel
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset: dragOffset, velocity }) => {
                const swipe = swipePower(dragOffset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  handleNext();
                } else if (swipe > swipeConfidenceThreshold) {
                  handlePrev();
                }
              }}
              onClick={() => {
                if (offset === -1) handlePrev();
                if (offset === 1) handleNext();
              }}
            >
              <div className={`w-full h-full transition-all duration-300 ${offset !== 0 ? 'pointer-events-none' : ''}`}>
                 <NeonCard project={item} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons (Below on mobile, Sides on desktop) */}
      <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-0 sm:absolute sm:inset-0 sm:pointer-events-none">
        <button
          onClick={handlePrev}
          className="relative sm:absolute sm:left-8 z-50 p-3 sm:p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 sm:pointer-events-auto"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="relative sm:absolute sm:right-8 z-50 p-3 sm:p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 sm:pointer-events-auto"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
