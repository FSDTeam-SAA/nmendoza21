"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { whoWeAreData } from "@/data/homepagedata";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const WhatWeare = () => {
  const { teamWork } = whoWeAreData;

  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-12  md:gap-12 lg:gap-20 items-start"
        >
          {/* LEFT SIDE - IMAGES */}
          <div className="lg:col-span-6 relative order-1 lg:order-1">
            <div className="relative group pt-8 sm:pt-12">
              {/* Main Image - Top Level */}
              <motion.div
                variants={fadeUp}
                className="relative z-20 w-full aspect-[5/3] overflow-hidden"
              >
                <Image
                  src="/whoweares.webp"
                  alt="Who We Are Main"
                  fill
                  className="object-cover w-full h-full"
                />

                {/* Sharp Accent Box */}
                <div className="absolute top-0 right-0 bg-gray-900 p-2 hidden md:block">
                  <div className="text-white space-y-1">
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-white/80 text-center">
                      Established
                    </p>
                    <p className="text-xl font-black">2024</p>
                  </div>
                </div>
              </motion.div>

              {/* Background Geometric Elements */}
              <div className="absolute top-0 left-0 w-full h-full border-b-2 border-l-2 border-gray-200 -z-10 translate-x-4 sm:translate-x-6 -translate-y-4 sm:-translate-y-6" />
              <div className="absolute top-0 left-0 w-40 h-40 sm:w-48 sm:h-48 bg-gray-900 -z-10 hidden lg:block -translate-x-8 sm:-translate-x-10 -translate-y-8 sm:-translate-y-10" />

              {/* Secondary Image - Bottom Level */}
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-16 sm:-bottom-20 md:-bottom-34 left-0 md:-left-8 w-[80%] aspect-5/3  md:block z-30"
              >
                <Image
                  src="/whoweares.webp"
                  alt="Our Team"
                  fill
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTENT & VIDEO */}
          <div className="lg:col-span-6 space-y-10 order-2 lg:order-2">
            {/* TEXT CONTENT */}
            <div className="space-y-6">
              <motion.div variants={fadeUp} className="space-y-4">
                <span className="inline-block text-gray-900 font-bold tracking-widest uppercase text-sm border-l-4 border-gray-900 pl-4">
                  {whoWeAreData.title}
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                  Building the Future 
                  <span className="text-gray-900">Together.</span>
                </h2>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl"
              >
                {teamWork.description}
              </motion.p>
            </div>

            {/* VIDEO SECTION */}
            <motion.div
              variants={fadeUp}
              className="relative w-full aspect-video overflow-hidden border-[6px] sm:border-[8px] border-gray-100 shadow-lg"
            >
              <video
                src={teamWork.videourl}
                controls
                loop
                playsInline
                poster="/videobanner.png"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 px-3 sm:px-4 py-2 font-black text-xs uppercase tracking-widest text-gray-900 border border-gray-900">
                Watch Our Story
              </div>
            </motion.div>

            {/* STATS */}
            {/* <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8"
            >
              {teamWork.stats?.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-4xl font-black text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div> */}
            {/* CALL TO ACTION */}
            <motion.div variants={fadeUp} className="pt-2">
              <Button
                asChild
                className="bg-primary text-white hover:bg-primary/80 px-8 sm:px-10 py-6 sm:py-8 rounded-none font-black text-lg sm:text-xl transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              >
                <a href={teamWork.button1Link}>
                  {teamWork.button1Text}
                  <span className="ml-3">→</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeare;
