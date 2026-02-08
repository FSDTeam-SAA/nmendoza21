"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { technologyData } from "@/data/homepagedata";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

const Technology = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % technologyData.items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + technologyData.items.length) % technologyData.items.length,
    );
  };

  // Responsive values based on window width
  const isMobile = windowWidth > 0 && windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const cardWidth = isMobile ? 300 : isTablet ? 320 : 360;
  const cardHeight = isMobile ? 400 : isTablet ? 440 : 480;
  const spread = isMobile ? 180 : isTablet ? 250 : 320;
  const containerHeight = isMobile ? "500px" : "600px";

  return (
    <section className="my-12 md:my-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h2 className="text-[40px] font-semibold mb-3 text-gray-900 tracking-tighter">
            {technologyData.title}
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            {technologyData.subtitle}
          </p>
        </motion.div>

        <div
          className={`relative w-full max-w-350 mx-auto flex items-center justify-center`}
          style={{ height: containerHeight }}
        >
          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-0 z-40 pointer-events-none">
            <button
              onClick={prevSlide}
              className="w-10 h-10 cursor-pointer md:w-14 md:h-14 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white flex items-center justify-center shadow-xl transition-all pointer-events-auto backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 cursor-pointer md:w-14 md:h-14 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white flex items-center justify-center shadow-xl transition-all pointer-events-auto backdrop-blur-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* 3D Slider Container */}
          <div className="relative w-full h-full flex items-center justify-center perspective-2000">
            {technologyData.items.map((item, index) => {
              // Calculate relative position with wrapping
              let relativeIndex = index - currentIndex;
              const itemCount = technologyData.items.length;

              // Handle circular logic for cards
              if (relativeIndex > Math.floor(itemCount / 2))
                relativeIndex -= itemCount;
              else if (relativeIndex < -Math.floor(itemCount / 2))
                relativeIndex += itemCount;

              const isCenter = relativeIndex === 0;
              const isSide = Math.abs(relativeIndex) === 1;

              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{
                    x: relativeIndex * spread,
                    scale: isCenter ? 1.05 : isSide ? 0.8 : 0.6,
                    zIndex: 10 - Math.abs(relativeIndex),
                    opacity: isCenter ? 1 : isSide ? 0.6 : 0, // Hide outer cards on mobile for cleaner look
                    rotateY: relativeIndex * -20,
                    filter: isCenter ? "blur(0px)" : "blur(2px)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 25,
                  }}
                  onClick={() => setCurrentIndex(index)}
                  className="absolute cursor-pointer"
                  style={{ width: cardWidth, height: cardHeight }}
                >
                  <div className="relative w-full h-full rounded-[30px] md:rounded-[35px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] md:shadow-[0_30px_60px_rgba(0,0,0,0.18)] group transition-all duration-500">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={isCenter}
                    />

                    {/* Gradient Overlay & Content */}
                    <div
                      className={`absolute inset-0 bg-linear-to-t from-black/95 via-black/20 to-transparent p-6 md:p-8 flex flex-col justify-end transition-opacity duration-300 ${isCenter ? "opacity-100" : "opacity-0"}`}
                    >
                      <div className="transform translate-y-0 transition-transform duration-500">
                        <h3 className="text-white text-lg md:text-2xl font-bold mb-1 md:mb-2 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-xs md:text-sm font-medium mb-3 md:mb-4">
                          Published 24 Nov, 2025
                        </p>
                        <button className="text-white text-xs md:text-sm font-bold underline underline-offset-4 decoration-white/50 hover:decoration-white transition-all">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-12">
          {technologyData.items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-500 rounded-full h-2 md:h-2.5 ${
                index === currentIndex
                  ? "w-8 md:w-10 bg-cyan-400"
                  : "w-2 md:w-2.5 bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
