"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NewsTest = () => {
  // Use specific news data
  const latestNews = {
    id: "news-5",
    title: "Automation In Translational Research",
    description:
      "Automation reduces variability and improves consistency in translational research workflows.",
    image: "/images/Vivtex-17.jpg",
    date: "Published 02 Nov, 2025",
    linkLabel: "View Full News",
    link: "/news",
  };

  return (
    <section className="my-12 md:my-18 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          News
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-xl"
        >
          <Link href="/news" className="block group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={latestNews.image}
                  alt={latestNews.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute left-5 bottom-5  backdrop-blur-sm p-6 rounded-lg shadow-md max-w-md transition-all duration-300 group-hover:bg-white group-hover:shadow-xl"
              >
                <p className="text-sm text-gray-600 mb-2 font-medium">
                  {latestNews.date}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 line-clamp-3 group-hover:text-primary transition-colors duration-300">
                  {latestNews.title}
                </h3>
              </motion.div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsTest;
