'use client';
import type { TeamMember } from "@/data/about";
import PersonCard from "./PersonCard";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

interface BoardOfDirectorsProps {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BoardOfDirectors({
  title,
  subtitle,
  members,
}: BoardOfDirectorsProps) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-12"
        >
          <h2 className="text-[40px] font-semibold text-gray-900 mb-2 tracking-tight">
            {title}
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mx-auto max-w-7xl"
        >
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
            >
              <PersonCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
