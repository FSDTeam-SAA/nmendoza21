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
  // Published 02 Nov, 2025

  return (
    <>
      <section className="my-12 md:my-18  relative overflow-hidden bg-gray-200 container mx-auto lg:p-5 rounded-3xls">
        {/* Subtle texture or decoration if needed, keeping it clean for now */}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-start mb-8 md:mb-10"
          >
            <h2 className="text-2xl text-[#003051] sm:text-3xl lg:text-[40px] font-semibold lg:mb-12 mb-4 tracking-tight">
              {newsPageData.title}
            </h2>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-start leading-relaxed font-medium">
              {newsPageData.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-7 mx-auto mb-8"
          >
            <React.Fragment>
              {/*              
                  <div className="text-sm lg:text-xl font-medium text-gray-500">
                    Media Coverage
                  </div> */}

              <motion.div variants={cardVariants} className="group h-full">
                <Link href={"/news"}>
                  <div className="group h-full flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 bg-white rounded-none overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 group/card hover:bg-primary/70 hover:text-white!">
                    <div className="p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 w-full">
                      <div className="flex-1">
                        <h3 className="text-base mb-1 sm:mb-2 font-medium text-secondary-foreground transition-colors line-clamp-2 leading-tight group-hover:text-white">
                          {newsPageData.featured.title}
                        </h3>
                      </div>

                      <div className="flex items-center sm:items-end sm:flex-col sm:text-right gap-2 sm:gap-1">
                        <p className="text-gray-400 text-xs sm:text-sm font-bold group-hover:text-white">
                          {newsPageData.featured.date}
                        </p>
                      </div>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedNews(newsPageData.featured);
                          setIsModalOpen(true);
                        }}
                        className="text-sm font-black hover:text-white flex items-center gap-2 group/btn sm:mt-1"
                      >
                        Read More
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </React.Fragment>
            <div className="text-sm lg:text-xl font-medium text-gray-500">
              Media Coverage
            </div>
            {newsPageData.items.slice(0, 2).map((item, index) => (
              <React.Fragment key={item.id}>
                <motion.div variants={cardVariants} className="group h-full">
                  <Link href={"/news"}>
                    <div className="group h-full flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 bg-white rounded-none overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 group/card hover:bg-primary/70 hover:text-white!">
                      <div className="p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 w-full">
                        <div className="flex-1">
                          <h3 className="text-base mb-1 sm:mb-2 font-medium text-secondary-foreground transition-colors line-clamp-2 leading-tight group-hover:text-white">
                            {item.title}
                          </h3>
                        </div>

                        <div className="flex items-center sm:items-end sm:flex-col sm:text-right gap-2 sm:gap-1">
                          <p className="text-gray-400 text-xs sm:text-sm font-bold group-hover:text-white">
                            {item.date}
                          </p>
                        </div>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedNews(item);
                            setIsModalOpen(true);
                          }}
                          className="text-sm font-black hover:text-white flex items-center gap-2 group/btn sm:mt-1"
                        >
                          Read More
                          <span className="group-hover:translate-x-2 transition-transform duration-300">
                            →
                          </span>
                        </button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </React.Fragment>
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
