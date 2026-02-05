"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { bannerData } from "@/data/homepagedata";

const Banner = () => {
  return (
    <>
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Background with animation */}
        <div className="absolute inset-0 opacity-90 animate-zoomIn">
          <div className="w-full h-full bg-[url('/images/bannerbg.jpg')] bg-cover bg-center" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              {/* Title Animation */}
              <h1
                className="text-3xl font-semibold mb-5 leading-tight animate-slideInUp"
                style={{
                  animation: "slideInUp 0.8s ease-out 0.2s both",
                }}
              >
                {bannerData.title}
              </h1>

              {/* Description Animation */}
              <p
                className="text-base mb-8 lg:mb-16 text-white leading-relaxed animate-fadeInUp"
                style={{
                  animation: "fadeInUp 0.8s ease-out 0.4s both",
                }}
              >
                {bannerData.description}
              </p>

              {/* Button Animation */}
              <div
                style={{
                  animation: "slideInUp 0.8s ease-out 0.6s both",
                }}
              >
                <Button
                  className="bg-primary text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <a href={bannerData.buttonLink}>{bannerData.buttonText}</a>
                </Button>
              </div>
            </div>

            {/* Right Content - Video/Image */}
            <div
              className="hidden md:block relative w-full h-96 animate-slideInLeft"
              style={{
                animation: "slideInRight 1s ease-out 0.3s both",
              }}
            >
              <video
                src={bannerData.videourl}
                autoPlay
                loop
                muted
                className="rounded-lg shadow-2xl object-cover w-full h-full hover:shadow-cyan-500/50 transition-shadow duration-500"
              />
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
