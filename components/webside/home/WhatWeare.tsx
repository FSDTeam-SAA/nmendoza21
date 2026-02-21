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
    <section className="relative my-20 lg:my-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
       
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20 items-center"
        >
          {/* LEFT SIDE - VIDEO & TITLE */}
          <div className="lg:col-span-6 space-y-8 ">
            <motion.div variants={fadeUp} className="space-y-4">
              <h2 className="text-[#003399] font-bold tracking-widest uppercase text-3xl md:text-4xl">
                {whoWeAreData.title}
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                Building the Future{" "}
                <span className="text-gray-900">Together.</span>
              </h3>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative w-full aspect-video overflow-hidden border-[6px] sm:border-8 border-gray-100 shadow-lg"
            >
              <video
                src="/ourvision.mp4"
                controls
                loop
                playsInline
                preload="metadata"
                poster="/videobanner.png"
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="lg:col-span-6 space-y-8 lg:space-y-12">
            <div className="space-y-6">
              <motion.p
                variants={fadeUp}
                className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl"
              >
                {teamWork.description}
              </motion.p>
            </div>

            {/* IMAGE SECTION */}
            <div className="relative group">
              <motion.div
                variants={fadeUp}
                className="relative z-30 w-full aspect-5/3 overflow-hidden"
              >
                <Image
                  src="/images/Group Picture.jpg"
                  alt="Who We Are Main"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                  className="object-cover"
                />
              </motion.div>

              {/* Background Geometric Elements */}
              <div className="absolute top-0 left-0 w-full h-full border-b-2 border-l-2 border-gray-200 -z-10 translate-x-4 sm:translate-x-6 -translate-y-4 sm:-translate-y-6" />
              <div className="absolute top-0 left-0 w-40 h-40 sm:w-48 sm:h-48 bg-gray-900 -z-10 hidden lg:block -translate-x-8 sm:-translate-x-10 -translate-y-8 sm:-translate-y-10" />
            </div>

            {/* CALL TO ACTION */}
            <motion.div variants={fadeUp}>
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
