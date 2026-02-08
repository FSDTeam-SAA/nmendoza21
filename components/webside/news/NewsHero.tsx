"use client";

import Image from "next/image";
import { newsPageData } from "@/data/news";
import NewsModal from "@/components/webside/news/NewsModal";
import { Button } from "@/components/ui/button";
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

const imageVariants: Variants = {
  hidden: { x: -50, opacity: 0, scale: 0.95 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const textVariants: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const NewsHero = () => {
  const { featured } = newsPageData;
  const heroImage = "/news/newshero.jpg";

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-[3rem] border border-gray-100 grid md:grid-cols-2 gap-12 items-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
        >
          <motion.div 
            variants={imageVariants}
            className="relative w-full aspect-5/3 md:h-full overflow-hidden"
          >
            <Image
              src={heroImage}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-[2000ms] hover:scale-110"
            />
          </motion.div>
          
          <motion.div 
            variants={textVariants}
            className="p-10 md:p-16 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-sm text-primary font-black uppercase tracking-[0.2em]">
                Featured News
              </span>
              <p className="text-sm text-gray-400 font-bold">{featured.date}</p>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              {featured.title}
            </h2>
            
            <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
              {featured.description}
            </p>
            
            <div className="pt-6">
              <NewsModal item={featured}>
                <Button className="bg-primary text-white hover:bg-black px-12 py-8 text-xl font-bold rounded-md transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl">
                  {featured.linkLabel}
                </Button>
              </NewsModal>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsHero;
