"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { newsPageData, NewsItem } from "@/data/news";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";
import { NewsDetailsModal } from "@/components/webside/news/NewsDetailsModal";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const NewsAndInsights = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="my-12 md:my-18  relative overflow-hidden">
        {/* Subtle texture or decoration if needed, keeping it clean for now */}
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-10"
          >
            <h2 className="text-[40px] font-semibold mb-0 tracking-tight">
              {newsPageData.title}
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              {newsPageData.subtitle}
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 max-w-7xl mx-auto mb-8"
          >
            {newsPageData.items.slice(0, 2).map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group h-full"
              > 
                <Link href={'/news'}>
                
                <div className="group h-full flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 group/card">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
                  </div>
                  <div className="p-3 flex-1 flex flex-col">
                    <div className="">
                      {/* <p className="text-primary text-xs md:text-sm font-black uppercase tracking-[0.2em] mb-3">
                        Research & Insights
                      </p> */}
                      <h3 className="text-xl mb-2 font-medium text-secondary-foreground  transition-colors line-clamp-2 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div className="mt-auto  border-t border-gray-50 flex flex-col  justify-between">
                      <p className="text-gray-400 mb-2 text-sm font-bold">
                        {item.date}
                      </p>
                      {/* <button
                        onClick={() => {
                          setSelectedNews(item);
                          setIsModalOpen(true);
                        }}
                        className=" text-sm font-black hover:text-primary transition-colors flex items-center gap-2 group/btn"
                      >
                        Read More
                        <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                      </button> */}
                    </div>
                  </div>
                </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <Button className="bg-primary text-white hover:bg-black hover:text-white px-12 py-5 text-xl font-bold rounded-md shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98]" asChild>
              <a href={newsPageData.featured.link}>
                View All
              </a>
            </Button>
          </motion.div> */}
        </div>
      </section>

      <NewsDetailsModal 
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        item={selectedNews}
      />
    </>
  );
};

export default NewsAndInsights;
