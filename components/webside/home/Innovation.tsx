"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { innovationData } from "@/data/homepagedata";
import { innovationPageData } from "@/data/innovation";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";
import InnovationLatestModal from "@/components/webside/innovation/InnovationLatestModal";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

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

const Innovation = () => {
  return (
    <>
      <section className="my-12 md:my-16 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 from-transparent via-primary/20 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-10"
          >
            <h2 className="text-[40px] font-semibold  tracking-tight">
              Commitment to Innovation
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              See our research and publications
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2  gap-3 md:gap-6 max-w-7xl mx-auto mb-4"
          >
            {innovationPageData.latestNews.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group h-full"
              >
                <Link href={`/innovation`}>
                
   
                  <div className="cursor-pointer h-full flex flex-col bg-gray-50/30 rounded-3xl transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-transparent hover:border-gray-100 group/card">
                    <div className="relative aspect-square  overflow-hidden rounded-2xl shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      {/* <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                      <div className=" inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" > */}
                      <div className="absolute bottom-4  left-4">
                        <p className="text-white text-2xl font-bold">{item.titile2}</p>
                      </div>
                    </div>
                    {/* <div className="flex-1 flex flex-col">
                      <h3 className="text-xl md:text-2xl text-gray-900 font-extrabold mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-bold mb-6 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary/60"></span>
                        {item.date}
                      </p>
                      <div className="mt-auto flex items-center text-primary text-sm font-black tracking-wider uppercase gap-2 group/btn">
                        View Details
                        <span className="w-8 h-[2px] bg-primary/20 group-hover/btn:w-12 group-hover/btn:bg-primary transition-all duration-300" />
                      </div>
                    </div> */}
                  </div>
       
                </Link>
              </motion.div>
            ))}
          </motion.div>

         
        </div>
      </section>
    </>
  );
};

export default Innovation;
