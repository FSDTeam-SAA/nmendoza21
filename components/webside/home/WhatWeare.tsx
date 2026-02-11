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
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariants: Variants = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const videoVariants: Variants = {
  hidden: { x: -50, opacity: 0, scale: 0.95 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const WhatWeare = () => {
  const { teamWork } = whoWeAreData;

  return (
    <div>
      <section className="py-12 md:py-16 bg-[#050505] text-white overflow-hidden relative">
        {/* Subtle glow effect */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Video Side */}
            <motion.div
              variants={videoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-full aspect-video lg:h-[500px] rounded-[40px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] group border border-white/5"
            >
              <video
                src={teamWork.videourl}
                controls
                loop
                playsInline
                poster="/videobanner.png"
                className="w-full h-full object-cover transition-transform duration-1000 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-8 pointer-events-none">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-bold tracking-widest uppercase text-white/80">
                    Live from our lab
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/60">
                  {whoWeAreData.title}
                </h2>
                <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                  {whoWeAreData.subtitle}
                </p>
              </motion.div>

              <motion.div
                variants={textVariants}
                className="relative space-y-6"
              >
                <div className="relative w-full max-w-[520px] h-[400px] sm:h-[500px] mx-auto lg:mx-0 mb-8">
                  {/* First Image - Background */}
                  <div className="absolute top-0 right-0 w-[85%] sm:w-[80%] h-[320px] sm:h-[400px] z-0">
                    <Image
                      src={"/whoweares.webp"}
                      alt="Who We Are Background"
                      fill
                      className="rounded-none shadow-xl object-cover"
                    />
                  </div>

                  {/* Second Image - Overlapping from middle left */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[85%] sm:w-[80%] h-[320px] sm:h-[400px] z-10">
                    <Image
                      src={"/whoweares.webp"}
                      alt="Who We Are Foreground"
                      fill
                      className="rounded-none shadow-2xl object-cover border-4 border-[#050505]"
                    />
                  </div>
                </div>
                <div className="relative z-20">
                  <Button
                    className="bg-primary text-white hover:bg-white hover:text-black px-8 py-6 rounded-md w-full sm:w-auto font-black text-lg transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                    asChild
                  >
                    <a href={teamWork.button1Link}>{teamWork.button1Text}</a>
                  </Button>
                </div>
              </motion.div>

              {/* <motion.div variants={textVariants}>
                <Button 
                  className="group bg-primary text-white hover:bg-primary hover:text-white px-12 py-8 rounded-md text-xl font-black w-full sm:w-auto transition-all duration-300 ease-in-out flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02]" 
                  asChild
                >
                  <a href={teamWork.buttonLink}>
                    {teamWork.buttonText}
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </a>
                </Button>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeare;
