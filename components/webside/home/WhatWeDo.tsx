"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { whatWeDoData } from "@/data/homepagedata";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

const WhatWeDo = () => {
  return (
    <>
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <InViewAnimationWrapper animation="fadeIn" duration={600}>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{whatWeDoData.title}</h2>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                {whatWeDoData.subtitle}
              </p>
            </div>
          </InViewAnimationWrapper>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
            {whatWeDoData.services.map((service, index) => (
              <InViewAnimationWrapper
                key={service.id}
                animation="slideInUp"
                duration={600}
                delay={index * 150}
              >
                <div className="bg-white rounded-2xl overflow-hidden p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary flex items-center gap-2">
                      <span className="bg-primary w-4 h-4 md:w-5 md:h-5 rounded-sm"></span> 
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="relative h-48 md:h-64 mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <Button
                      className="w-full md:w-auto min-w-[160px] bg-primary text-white hover:bg-primary/90 transition-colors py-6 text-lg rounded-full"
                      asChild
                    >
                      <a href={service.buttonLink}>{service.buttonText}</a>
                    </Button>
                  </div>
                </div>
              </InViewAnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
