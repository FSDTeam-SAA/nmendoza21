"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { whatWeDoData } from "@/data/homepagedata";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

import { motion, Variants } from "framer-motion";
import Link from "next/link";


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const WhatWeDo = () => {
  return (
    <div>
      <section className="my-12 md:my-16 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-10"
          >
            <h2 className="text-[40px] font-semibold tracking-tight text-secondary-foreground">
              {whatWeDoData.title}
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              {whatWeDoData.subtitle}
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto"
          >
            {whatWeDoData.services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative"
              >
                <Link href={`${service.title === 'Technology' ? '/technology' : '/programs'}`} className=" h-full">
                
                <div className="bg-white rounded-[2rem] overflow-hidden p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 ease-in-out border border-gray-100/50 flex flex-col h-full hover:-translate-y-1">
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-2 bg-primary rounded-full" />
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-lg md:text-xl font-medium leading-[1.6]">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="relative h-64 md:h-80  overflow-hidden rounded-2xl shadow-inner">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
