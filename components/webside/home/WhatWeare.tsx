"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { whoWeAreData } from "@/data/homepagedata";

const WhatWeare = () => {
  const { teamWork } = whoWeAreData;

  return (
    <>
      <section className="py-16 bg-[#171616] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeIn">
            <h2
              className="text-4xl text-primary font-bold mb-4"
              style={{
                animation: "slideInDown 0.8s ease-out 0.2s both",
              }}
            >
              {whoWeAreData.title}
            </h2>
            <p
              className="text-gray-400"
              style={{
                animation: "fadeInUp 0.8s ease-out 0.4s both",
              }}
            >
              {whoWeAreData.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center  mx-auto">
            <div
              className="relative w-full h-96"
              style={{
                animation: "slideInLeft 0.8s ease-out 0.2s both",
              }}
            >
              {/* <Image
              src={teamWork.image}
              alt="Team Work"
              fill
              className="rounded-lg shadow-2xl object-cover"
            /> */}
              <video
                src={teamWork.videourl}
                autoPlay
                loop
                muted
                className="rounded-lg shadow-2xl object-cover w-full h-full"
              />
              {/* <video 
            src={teamWork.videourl}
            autoPlay
            loop
            muted
            className=" rounded-lg shadow-2xl object-cover w-full h-full"
            /> */}
            </div>

            <div
              style={{
                animation: "slideInRight 0.8s ease-out 0.2s both",
              }}
            >
              <h3 className="text-3xl  flex gap-3 items-center font-bold mb-4">
                <h5 className="bg-primary w-5 h-5"></h5>
                {teamWork.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {teamWork.description}
              </p>

              {/* <ul className="space-y-3 mb-6">
              {teamWork.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-cyan-500 mr-3">✓</span>
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul> */}

              <div className="flex mb-6 bg-white overflow-hidden ju">
                <div className="flex items-center justify-between">
                  {/* Avatar stack */}
                  <div className="flex items-center py-3 px-4 ">
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
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </>
  );
};

export default WhatWeare;
