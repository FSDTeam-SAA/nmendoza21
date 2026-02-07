"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { innovationData } from "@/data/homepagedata";
import { innovationPageData } from "@/data/innovation";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";
import InnovationLatestModal from "@/components/webside/innovation/InnovationLatestModal";

const Innovation = () => {
  return (
    <>
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <InViewAnimationWrapper animation="fadeIn" duration={600}>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {innovationData.title}
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                {innovationData.subtitle}
              </p>
            </div>
          </InViewAnimationWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-10 md:mb-12">
            {innovationPageData.latestNews.map((item, index) => (
              <InViewAnimationWrapper
                key={item.id}
                animation="slideInUp"
                duration={600}
                delay={index * 150}
              >
                <div className="group h-full">
                  <InnovationLatestModal item={item}>
                    <div className="cursor-pointer h-full flex flex-col bg-gray-50/50 rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100">
                      <div className="relative aspect-video mb-5 overflow-hidden rounded-xl">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-lg md:text-xl text-gray-900 font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-xs md:text-sm font-semibold mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                          {item.date}
                        </p>
                        <button className="mt-auto text-primary text-sm font-bold underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-all text-left">
                          View Details
                        </button>
                      </div>
                    </div>
                  </InnovationLatestModal>
                </div>
              </InViewAnimationWrapper>
            ))}
          </div>

          <InViewAnimationWrapper
            animation="slideInUp"
            duration={600}
            delay={400}
          >
            <div className="text-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
                <a href={innovationData.buttonLink}>
                  {innovationData.buttonText}
                </a>
              </Button>
            </div>
          </InViewAnimationWrapper>
        </div>
      </section>
    </>
  );
};

export default Innovation;
