'use client';
import type { TeamMember } from "@/data/about";
import PersonCard from "./PersonCard";

interface CoreLeadershipProps {
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
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function CoreLeadership({
  title,
  subtitle,
  members,
}: CoreLeadershipProps) {
  return (
    <section className="py-24 bg-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-start mb-8 md:mb-16"
        >
          <h2 className="text-[40px] font-semibold text-[#003399] mb-3 tracking-tight">
            {title}
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mx-auto "
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            >
              <PersonCard member={member} highlight={index === 1} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
