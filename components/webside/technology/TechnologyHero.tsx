"use client";

import { motion, Variants } from "framer-motion";

interface TechnologyHeroProps {
  title: string;
  subtitle: string;
  description?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function TechnologyHero({
  title,
  subtitle,
  description,
}: TechnologyHeroProps) {
  return (
    <section className="mt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
