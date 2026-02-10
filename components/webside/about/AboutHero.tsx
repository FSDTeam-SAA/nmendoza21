"use client";
import { motion, Variants } from "framer-motion";
import { aboutData } from "@/data/about";
import Stats from "./Stats";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

interface AboutHeroProps {
  title: string;
  description: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

export default function AboutHero({ title, description }: AboutHeroProps) {
  return (
<section className="relative  bg-black/55">
      <div className=" min-h-[50vh] flex items-center overflow-hidden ">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70"
          >
            <source src="/images/abouthero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <InViewAnimationWrapper
              animation="slideInUp"
              duration={800}
              delay={0}
            >
              <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold mb-6">
                {title}
              </h1>
            </InViewAnimationWrapper>
            <InViewAnimationWrapper
              animation="fadeIn"
              duration={800}
              delay={200}
            >
              <p className="text-lg md:text-xl text-white leading-relaxed">
                {description}
              </p>
            </InViewAnimationWrapper>
          </div>
        </div>
      </div>
      <Stats stats={aboutData.stats} />
      {/* Video Background */}
    </section>
  );
}
