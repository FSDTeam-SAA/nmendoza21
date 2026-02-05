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
      <section className="py-16 bg-[#171616] text-white">
        <div className="container mx-auto px-4">
          <InViewAnimationWrapper animation="fadeIn" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-4xl text-primary font-bold mb-4">
                {whoWeAreData.title}
              </h2>
              <p className="text-gray-400">{whoWeAreData.subtitle}</p>
            </div>
          </InViewAnimationWrapper>

          <div className="grid md:grid-cols-2 gap-8 items-center mx-auto">
            <InViewAnimationWrapper animation="slideInLeft" duration={800}>
              <div className="relative w-full h-96">
                <video
                  src={teamWork.videourl}
                  autoPlay
                  loop
                  muted
                  className="rounded-lg shadow-2xl object-cover w-full h-full"
                />
              </div>
            </InViewAnimationWrapper>

            <InViewAnimationWrapper
              animation="slideInRight"
              duration={800}
              delay={200}
            >
              <div>
                <h3 className="text-3xl flex gap-3 items-center font-bold mb-4">
                  <h5 className="bg-primary w-5 h-5"></h5>
                  {teamWork.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {teamWork.description}
                </p>

                <div className="flex mb-6 bg-white overflow-hidden">
                  <div className="flex items-center justify-between w-full">
                    {/* Avatar stack */}
                    <div className="flex items-center py-3 px-4">
                      {teamWork.points.slice(0, 3).map((stat, index) => (
                        <div
                          key={index}
                          className={`w-16 h-16 rounded-full border-2 border-white overflow-hidden ${
                            index !== 0 ? "-ml-3" : ""
                          }`}
                          style={{ zIndex: 10 + index }}
                        >
                          <Image
                            src={stat.image}
                            alt={teamWork.title}
                            width={64}
                            height={64}
                            className="rounded-full object-cover"
                          />
                        </div>
                      ))}

                      {/* +45 badge */}
                      <div className="-ml-3 w-16 h-16 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-semibold text-gray-700">
                        +45
                      </div>
                    </div>

                    {/* Button */}
                    <Button className="bg-primary text-white px-6 ml-4" asChild>
                      <a href={teamWork.buttonLink}>{teamWork.button1Text}</a>
                    </Button>
                  </div>
                </div>

                <Button className="bg-primary text-white px-8" asChild>
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
