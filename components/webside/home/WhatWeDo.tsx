"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { whatWeDoData } from "@/data/homepagedata";

const WhatWeDo = () => {
  return (
    <>
      <section className="py-16 bg-gray-50 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeIn">
            <h2
              className="text-4xl font-bold mb-4"
              style={{
                animation: "slideInDown 0.8s ease-out 0.2s both",
              }}
            >
              {whatWeDoData.title}
            </h2>
            {/* <p className="text-gray-600">{whatWeDoData.subtitle}</p> */}
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whatWeDoData.services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-lg overflow-hidden py-3 px-2 shadow-lg hover:shadow-xl transition-shadow"
                style={{
                  animation: `slideInUp 0.8s ease-out ${0.3 + index * 0.15}s both`,
                }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-primary flex items-center gap-2">
                    <h5 className="bg-primary w-5 h-5"></h5> {service.title}
                  </h3>
                  <p className="text-[#000000] mb-6 text-xl font-normal leading-[100%]">
                    {service.description}
                  </p>
                </div>
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="pt-4 mx-auto flex justify-center ">
                  <Button
                    className="w-1/2 justify-center bg-primary text-white"
                    asChild
                  >
                    <a href={service.buttonLink}>{service.buttonText}</a>
                  </Button>
                </div>
              </div>
            ))}
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

export default WhatWeDo;
