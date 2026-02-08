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
    <>
      <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background with animation */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full bg-[url('/images/bannerbg.jpg')] bg-cover bg-center" 
          />
          <div className="absolute inset-0 bg-black/40 z-1" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10 py-12 md:py-0">
          <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-white space-y-8 max-w-2xl mx-auto md:mx-0"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-4xl font-extrabold leading-[1.1] tracking-tight"
              >
                {bannerData.title}
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg  text-white/90 leading-relaxed font-medium"
              >
                {bannerData.description}
              </motion.p>
              
              <motion.div variants={itemVariants}>
                <Button
                  className="bg-primary text-white hover:bg-black px-10 py-8 text-xl font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <a href={bannerData.buttonLink}>{bannerData.buttonText}</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Video/Image */}
            <div className="hidden lg:block w-full">
              <motion.div 
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="relative w-full h-[500px]"
              >
                <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl z-0" />
                <video
                  src={bannerData.videourl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative rounded-[40px] shadow-2xl object-cover w-full h-full border-8 border-white/5 z-10"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
