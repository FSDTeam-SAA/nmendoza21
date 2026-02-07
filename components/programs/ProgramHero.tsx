"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";
import { programsPageData } from "@/data/programs";

const ProgramHero = () => {
  const { hero } = programsPageData;
  return (
    <section className="pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <InViewAnimationWrapper animation="slideInLeft" duration={800}>
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                {hero.title.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {hero.description}
              </p>
              <div className="flex justify-center lg:justify-start pt-4">
                <Button
                  className="bg-primary text-white hover:bg-primary/90 px-10 py-7 text-lg rounded-md shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <a href={hero.ctaLink}>{hero.ctaLabel}</a>
                </Button>
              </div>
            </div>
          </InViewAnimationWrapper>

          <InViewAnimationWrapper
            animation="slideInRight"
            duration={800}
            delay={200}
          >
            <div className="relative w-full aspect-4/3 md:aspect-video lg:aspect-5/4 max-w-2xl mx-auto rounded-[32px] overflow-hidden shadow-2xl">
              <Image
                src={hero.image}
                alt="Programs hero"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[32px]" />
            </div>
          </InViewAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default ProgramHero;
