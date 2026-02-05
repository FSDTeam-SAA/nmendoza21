"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { innovationData } from "@/data/homepagedata";
import Link from "next/link";

const Innovation = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeIn">
            <h2
              className="text-4xl font-bold mb-4"
              style={{
                animation: "slideInDown 0.8s ease-out 0.2s both",
              }}
            >
              {innovationData.title}
            </h2>
            <p
              className="text-gray-600"
              style={{
                animation: "fadeInUp 0.8s ease-out 0.4s both",
              }}
            >
              {innovationData.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {innovationData.items.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                style={{
                  animation: `slideInUp 0.8s ease-out ${0.3 + index * 0.12}s both`,
                }}
              >
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
                  <p className=" text-sm mb-2 text-foreground font-medium">{item.date}</p>
                </a>
                <Link href={item.link} className=" underline hover:text-primary">
                  View Details
                </Link>
              </div>
            ))}
          </div>

          <div
            className="text-center"
            style={{
              animation: "slideInUp 0.8s ease-out 0.7s both",
            }}
          >
            <Button className="bg-primary text-white px-12" asChild>
              <a href={innovationData.buttonLink}>
                {innovationData.buttonText}
              </a>
            </Button>
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

export default Innovation;
