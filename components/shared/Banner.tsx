"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { bannerData } from "@/data/homepagedata";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const Banner = () => {
  return (
    <div>
      <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-start lg:pt-20 pt-6 overflow-hidden">
        {/* Background with smooth animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.video
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.12 }}
            transition={{
              duration: 20, // slow = smooth
              ease: "easeInOut", // soft easing
              repeat: Infinity,
              repeatType: "mirror", // smoother than reverse
            }}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover will-change-transform"
          >
            <source src="/images/Animation 1.mp4" type="video/mp4" />
          </motion.video>

          {/* softer overlay */}
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10 py-12 md:py-0">
          <div className="grid items-center text-center md:text-left">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-white space-y-8 text-start max-w-4xl mx-auto md:mx-0"
            >
              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.1] tracking-tight uppercase whitespace-pre-line"
              >
                {bannerData.title}
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
