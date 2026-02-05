"use client";
import React, { useState } from "react";
import Image from "next/image";
import { technologyData } from "@/data/homepagedata";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

const Technology = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % technologyData.items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + technologyData.items.length) % technologyData.items.length,
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <InViewAnimationWrapper
          animation="slideInDown"
          duration={800}
          delay={200}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{technologyData.title}</h2>
            <p className="text-gray-600">{technologyData.subtitle}</p>
          </div>
        </InViewAnimationWrapper>
        <InViewAnimationWrapper animation="fadeIn" duration={800} delay={400}>
          <div className="relative mx-auto max-w-7xl py-12">
            <div className="relative overflow-hidden px-16">
              <div
                className="flex items-center justify-center gap-6 transition-transform duration-700 ease-out"
                style={{ transform: `translateX(${-currentIndex * 340}px)` }}
              >
                {technologyData.items.map((item, index) => {
                  const offset = index - currentIndex;

                  const isActive = offset === 2;
                  const isSide = Math.abs(offset) === 1;

                  return (
                    <div
                      key={item.id}
                      className={`relative transition-all duration-700 ease-out cursor-pointer shrink-0
              ${
                isActive
                  ? "scale-110 opacity-100 z-30"
                  : isSide
                    ? "scale-90 opacity-60 blur-[1px] z-20"
                    : "scale-75 opacity-30 blur-sm z-10"
              }
            `}
                      onClick={() => setCurrentIndex(index)}
                    >
                      <div className="w-[320px] h-105 rounded-xl overflow-hidden shadow-2xl bg-black relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Text */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-white text-xl font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 text-sm mt-1">
                            {item.date}
                          </p>
                          {/* 
                        {isActive && (
                          <button className="mt-3 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
                            View Details →
                          </button>
                        )} */}
                        </div>

                        {/* Active Border */}
                        {isActive && (
                          <div className="absolute inset-0 rounded-xl ring-4 ring-primary pointer-events-none" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-xl z-40 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-xl z-40 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight size={26} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {technologyData.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </InViewAnimationWrapper>
      </div>
    </section>
  );
};

export default Technology;
