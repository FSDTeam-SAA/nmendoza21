"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { bannerData } from "@/data/homepagedata";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

const Banner = () => {
  return (
    <>
      <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background with animation */}
        <div className="absolute inset-0 opacity-90">
          <div className="w-full h-full bg-[url('/images/bannerbg.jpg')] bg-cover bg-center animate-zoomIn" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10 py-12 md:py-0">
          <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
            {/* Left Content */}
            <InViewAnimationWrapper animation="slideInLeft" duration={800}>
              <div className="text-white space-y-6 max-w-2xl mx-auto md:mx-0">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {bannerData.title}
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                  {bannerData.description}
                </p>
                <div>
                  <Button
                    className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl"
                    asChild
                  >
                    <a href={bannerData.buttonLink}>{bannerData.buttonText}</a>
                  </Button>
                </div>
              </div>
            </InViewAnimationWrapper>

            {/* Right Content - Video/Image */}
            <div className="hidden lg:block w-full">
              <InViewAnimationWrapper animation="slideInRight" duration={800} delay={200}>
                <div className="relative w-full h-[450px]">
                  <video
                    src={bannerData.videourl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-[32px] shadow-2xl object-cover w-full h-full border-4 border-white/10"
                  />
                </div>
              </InViewAnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 0.9;
            transform: scale(1);
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }

        .animate-zoomIn {
          animation: zoomIn 1.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Banner;
