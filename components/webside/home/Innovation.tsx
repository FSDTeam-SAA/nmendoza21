"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { innovationData } from "@/data/homepagedata";
import Link from "next/link";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

const Innovation = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <InViewAnimationWrapper animation="fadeIn" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                {innovationData.title}
              </h2>
              <p className="text-gray-600">{innovationData.subtitle}</p>
            </div>
          </InViewAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {innovationData.items.map((item, index) => (
              <InViewAnimationWrapper
                key={item.id}
                animation="slideInUp"
                duration={600}
                delay={index * 150}
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
                    <p className=" text-sm mb-2 text-foreground font-medium">
                      {item.date}
                    </p>
                  </a>
                  <Link
                    href={item.link}
                    className=" underline hover:text-primary"
                  >
                    View Details
                  </Link>
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
              <Button className="bg-primary text-white px-12" asChild>
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
