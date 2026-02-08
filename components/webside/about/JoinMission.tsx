'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

interface JoinMissionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function JoinMission({
  title,
  description,
  ctaText,
  ctaLink,
}: JoinMissionProps) {
  return (
    <section className="container mx-auto py-24 mb-24 overflow-hidden px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-primary rounded-[3rem] p-12 md:p-24 text-center shadow-[0_30px_60px_rgba(var(--primary-rgb),0.3)] relative overflow-hidden group"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-[40px] font-medium text-white mb-8 tracking-tighter"
          >
            {title}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-white/90 text-xl mb-12 leading-relaxed font-medium"
          >
            {description}
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              asChild
              className="bg-white text-primary hover:bg-white/90 font-black px-12 py-8 text-xl rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98]"
            >
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
