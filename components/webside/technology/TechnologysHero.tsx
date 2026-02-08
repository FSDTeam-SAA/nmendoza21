"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { x: 50, opacity: 0, scale: 0.95 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const TechnologysHero = () => {
  return (
    <section className="my-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={textVariants} className="space-y-8">
            <h1 className="text-4xl md:text-4xl font-black text-gray-900 leading-[1.1] tracking-tighter">
              Advancing the Frontier of Drug Delivery
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium max-w-xl">
              Our technology is built on advanced biotechnology research and
              data-driven innovation. We use cutting-edge laboratory methods,
              automation, and analytical tools to deliver accurate, scalable,
              and reliable solutions.
            </p>
          </motion.div>
          
          <motion.div 
            variants={imageVariants}
            className="relative w-full aspect-square md:aspect-video lg:aspect-square"
          >
            {/* <div className="  bg-primary/10 rounded-[3rem] blur-3xl z-0" /> */}
            <Image
              src="/images/technologyhero.jpg"
              alt="Technology Frontier"
              width={600}
              height={432}
              className="object-cover w-full aspect-5/4 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] relative z-10 border-8 border-white/5"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologysHero;
