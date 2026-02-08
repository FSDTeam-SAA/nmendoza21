"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { programsPageData } from "@/data/programs";
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

const ProgramHero = () => {
  const { hero } = programsPageData;
  return (
    <section className="pt-24 pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={textVariants} className="space-y-10">
            <h1 className="text-[40px] font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6">
              {hero.title.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium max-w-xl">
              {hero.description}
            </p>
            <div className="pt-6">
              <Button
                className="bg-primary text-white hover:bg-black px-12 py-8 text-xl font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98]"
                asChild
              >
                <a href={hero.ctaLink}>{hero.ctaLabel}</a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            variants={imageVariants}
            className="relative w-full aspect-square md:aspect-video lg:aspect-4/3"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl z-0" />
            <Image
              src={hero.image}
              alt="Vivtex Programs"
              fill
              className="object-cover rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] relative z-10 border-8 border-white/5"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramHero;
