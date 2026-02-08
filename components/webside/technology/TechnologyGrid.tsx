'use client';
import { motion, Variants } from "framer-motion";
import TechnologyCard from "./TechnologyCard";
import { type TechnologyItem } from "@/data/technology.data";

interface TechnologyGridProps {
  items: TechnologyItem[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function TechnologyGrid({ items }: TechnologyGridProps) {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 gap-4"
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
        >
          <TechnologyCard item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
}
