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
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const WhatWeare = () => {
  const { teamWork } = whoWeAreData;

  return (
    <section className="relative py-20 md:py-28 bg-[#050505] text-white overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* Title + Description */}
            <motion.div variants={fadeUp} className="space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {whoWeAreData.title}
              </h2>

              <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
                {whoWeAreData.subtitle}
              </p>
            </motion.div>

            {/* VIDEO */}
            <motion.div
              variants={fadeUp}
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10"
            >
              <video
                src={teamWork.videourl}
                controls
                loop
                playsInline
                poster="/videobanner.png"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* JOIN BUTTON */}
            <motion.div variants={fadeUp}>
              <Button
                asChild
                className="group bg-primary text-white hover:bg-white hover:text-black px-10 py-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.03]"
              >
                <a href={teamWork.button1Link}>
                  {teamWork.button1Text}
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </a>
              </Button>
            </motion.div>
          </div>

        {/* RIGHT SIDE - PREMIUM IMAGE DESIGN */}
<motion.div
  variants={fadeUp}
  className="relative w-full max-w-[580px] h-[480px] mx-auto"
>
  {/* Decorative Blur Background */}
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

  {/* Main Container */}
  <div className="relative w-full h-full">

    {/* Back Image */}
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute bottom-0 right-0 w-[85%] h-[360px] rounded-3xl overflow-hidden 
                 shadow-[0_40px_80px_rgba(0,0,0,0.7)] 
                 border border-white/10
                 rotate-3"
    >
      <Image
        src="/whoweares.webp"
        alt="Background"
        fill
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </motion.div>

    {/* Front Image */}
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 20, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="absolute bottom-10 left-0 w-[85%] h-[360px] rounded-3xl overflow-hidden
                 shadow-[0_50px_100px_rgba(0,0,0,0.8)]
                 border border-white/20
                 backdrop-blur-sm
                 -rotate-2"
    >
      <Image
        src="/whoweares.webp"
        alt="Foreground"
        fill
        className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
      />

      {/* Glass Effect Overlay */}
      {/* <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" /> */}
    </motion.div>

    {/* Floating Badge Card */}
    {/* <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4 }}
      className="absolute top-10 right-10 bg-white/10 backdrop-blur-lg 
                 border border-white/20 
                 rounded-2xl px-6 py-4 shadow-xl"
    >
      <p className="text-sm font-semibold text-white">
        🚀 Innovation Driven
      </p>
      <p className="text-xs text-gray-300 mt-1">
        Building the future with technology
      </p>
    </motion.div> */}
  </div>
</motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeare;
