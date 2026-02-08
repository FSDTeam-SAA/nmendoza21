"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { innovationPageData } from "@/data/innovation";
import InnovationLatestNews from "@/components/webside/innovation/InnovationLatestNews";
import { motion, Variants } from "framer-motion";

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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function InnovationPage() {
  const {
    heroTitle,
    heroSubtitle,
    feature,
    community,
  } = innovationPageData;

  return (
    <main className="min-h-screen bg-[#f8f6f2]">
      {/* Hero */}
      <section className="pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container mx-auto px-4"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 tracking-tighter mb-6">
            {heroTitle}
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            {heroSubtitle}
          </p>
        </motion.div>
      </section>

      {/* Featured */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-[2fr_1fr] gap-10"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] p-10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              <span className="text-sm font-black text-primary uppercase tracking-widest">
                {feature.featured.label}
              </span>
              <p className="text-sm text-gray-400 mt-2 font-bold">
                {feature.featured.date}
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-6 tracking-tight">
                {feature.featured.title}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mt-6 font-medium">
                {feature.featured.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-10 gap-8">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/10">
                    <Image
                      src={feature.featured.authorAvatar}
                      alt={feature.featured.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-black text-gray-900">
                      {feature.featured.author}
                    </p>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">
                      {feature.featured.authorRole}
                    </p>
                  </div>
                </div>
                <a
                  href={feature.featured.link}
                  className="inline-flex items-center gap-2 text-primary font-black group cursor-pointer"
                >
                  {feature.featured.linkLabel}
                  <span className="group-hover:translate-x-2 transition-transform duration-300 ">→</span>
                </a>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-primary rounded-[2rem] p-10 text-white shadow-[0_20px_50px_rgba(var(--primary-rgb),0.2)] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/60">
                  {feature.upcoming.label}
                </span>
                <h3 className="text-2xl md:text-3xl font-black mt-6 tracking-tight leading-tight">
                  {feature.upcoming.title}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed mt-6 font-medium">
                  {feature.upcoming.description}
                </p>
              </div>
              <a
                href={feature.upcoming.link}
                className="inline-flex items-center gap-2 text-white font-black mt-10 group"
              >
                {feature.upcoming.linkLabel}
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest News */}
      <InnovationLatestNews />

      {/* Community */}
      <section className="pb-32 pt-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              {community.title}
            </h2>
            <p className="text-gray-500 text-lg md:text-xl mb-10 font-medium leading-relaxed">
              {community.description}
            </p>
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {community.bullets.map((item) => (
                <motion.li 
                  key={item} 
                  variants={itemVariants}
                  className="flex items-start gap-4 text-lg font-medium text-gray-700 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check size={18} strokeWidth={3} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
