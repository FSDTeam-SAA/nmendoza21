"use client";

import Image from "next/image";
import { innovationPageData } from "@/data/innovation";
import InnovationLatestModal from "@/components/webside/innovation/InnovationLatestModal";
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const InnovationLatestNews = () => {
  const { latestNewsTitle, latestNews } = innovationPageData;

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-black text-gray-900 mb-10 tracking-tight"
        >
          {latestNewsTitle}
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {latestNews.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group h-full"
            >
              <InnovationLatestModal item={item}>
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden cursor-pointer h-full transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2">
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-base mt-4 line-clamp-3 font-medium leading-relaxed">
                      {item.description}
                    </p>
                    {item.date && (
                      <div className="mt-8 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary/60"></span>
                        <span className="text-sm text-primary font-black uppercase tracking-wider">
                          {item.date}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </InnovationLatestModal>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationLatestNews;
