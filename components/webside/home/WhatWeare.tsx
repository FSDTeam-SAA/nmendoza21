"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { whoWeAreData } from "@/data/homepagedata";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

const WhatWeare = () => {
  const { teamWork } = whoWeAreData;

  return (
    <>
      <section className="py-12 md:py-24 bg-[#111] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <InViewAnimationWrapper animation="fadeIn" duration={600}>
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-primary font-bold mb-4">
                {whoWeAreData.title}
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                {whoWeAreData.subtitle}
              </p>
            </div>
          </InViewAnimationWrapper>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Video Side */}
            <InViewAnimationWrapper animation="slideInLeft" duration={800}>
              <div className="relative w-full aspect-video lg:h-[450px] rounded-[32px] overflow-hidden shadow-2xl group">
                <video
                  src={teamWork.videourl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-300" />
              </div>
            </InViewAnimationWrapper>

            {/* Content Side */}
            <InViewAnimationWrapper
              animation="slideInRight"
              duration={800}
              delay={200}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl md:text-4xl flex gap-3 items-center font-bold mb-6">
                    <span className="bg-primary w-4 h-4 md:w-6 md:h-6 rounded-sm"></span>
                    {teamWork.title}
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {teamWork.description}
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/10">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Avatar stack */}
                    <div className="flex items-center">
                      <div className="flex -space-x-3">
                        {teamWork.points.slice(0, 3).map((stat, index) => (
                          <div
                            key={index}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#111] overflow-hidden relative ring-2 ring-primary/20"
                            style={{ zIndex: 10 + index }}
                          >
                            <Image
                              src={stat.image}
                              alt="Team member"
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-800 border-2 border-[#111] flex items-center justify-center text-xs md:text-sm font-bold text-white relative z-20">
                          +45
                        </div>
                      </div>
                    </div>

                    {/* Team Button */}
                    <Button 
                      className="bg-primary text-white hover:bg-primary/90 px-6 py-5 rounded-full w-full sm:w-auto shadow-lg shadow-primary/20 transition-all" 
                      asChild
                    >
                      <a href={teamWork.button1Link}>{teamWork.button1Text}</a>
                    </Button>
                  </div>
                </div>

                <Button 
                  className="bg-white text-black hover:bg-gray-100 px-10 py-6 rounded-full text-lg font-bold w-full sm:w-auto transition-all" 
                  asChild
                >
                  <a href={teamWork.buttonLink}>{teamWork.buttonText}</a>
                </Button>
              </div>
            </InViewAnimationWrapper>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeare;
