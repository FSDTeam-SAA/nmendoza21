"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { newsInsightsData } from "@/data/homepagedata";
import Link from "next/link";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

const NewsAndInsights = () => {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <InViewAnimationWrapper
            animation="slideInDown"
            duration={800}
            delay={200}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                {newsInsightsData.title}
              </h2>
              <p className="text-gray-600">{newsInsightsData.subtitle}</p>
            </div>
          </InViewAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {newsInsightsData.items.map((item, index) => (
              <InViewAnimationWrapper
                key={item.id}
                animation="slideInUp"
                duration={800}
                delay={300 + index * 120}
              >
                <div className="group cursor-pointer">
                  <a href={item.link}>
                    <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg text-foreground font-bold mb-2 group-hover:text-cyan-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm mb-2 text-foreground font-medium">
                      {item.date}
                    </p>
                  </a>
                  <Link
                    href={item.link}
                    className="underline hover:text-primary"
                  >
                    View Details
                  </Link>
                </div>
              </InViewAnimationWrapper>
            ))}
          </div>

          <InViewAnimationWrapper
            animation="slideInUp"
            duration={800}
            delay={700}
          >
            <div className="text-center">
              <Button className="bg-primary text-white px-12" asChild>
                <a href={newsInsightsData.buttonLink}>
                  {newsInsightsData.buttonText}
                </a>
              </Button>
            </div>
          </InViewAnimationWrapper>
        </div>
      </section>
    </>
  );
};

export default NewsAndInsights;
