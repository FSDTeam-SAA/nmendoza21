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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-[40px] font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/60">
              {whoWeAreData.title}
            </h2>
            <p className="text-gray-400 text-lg md:text-xl  mx-auto leading-relaxed font-medium">
              {whoWeAreData.subtitle}
            </p>
          </motion.div>

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
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-bold tracking-widest uppercase text-white/80">Live from our lab</span>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <motion.h3 
                  variants={textVariants}
                  className="text-3xl md:text-2xl font-extrabold flex gap-4 items-center tracking-tight"
                >
                  <div className="w-8 h-8 bg-primary rounded-md" />
                  {teamWork.title}
                </motion.h3>
                <motion.p 
                  variants={textVariants}
                  className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium"
                >
                  {teamWork.description}
                </motion.p>
              </div>

              <motion.div 
                variants={textVariants}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                  {/* Avatar stack */}
                  <div className="flex items-center">
                    <div className="flex -space-x-4">
                      {teamWork.points.slice(0, 3).map((stat, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -5, scale: 1.1, zIndex: 50 }}
                          className="w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-[#050505] overflow-hidden relative shadow-2xl"
                          style={{ zIndex: 10 + index }}
                        >
                          <Image
                            src={stat.image}
                            alt="Team member"
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      ))}
                      <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gray-900 border-4 border-[#050505] flex items-center justify-center text-sm md:text-base font-black text-white relative z-20 shadow-2xl">
                        +10
                      </div>
                    </div>
                  </div>

                  {/* Team Button */}
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
