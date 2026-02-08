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
    <div>
      <section className="my-12 md:my-16 relative overflow-hidden ">
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
                  <div className="cursor-pointer h-full flex flex-col rounded-3xl transition-all duration-500   border border-transparent hover:border-gray-100 group/card">
                    <div className="relative aspect-square  overflow-hidden rounded-2xl shadow-sm ">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      {/* Black gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />

                      <div className="absolute bottom-4  left-4">
                        <p className="text-white text-2xl font-bold">
                          {item.titile2}
                        </p>
                        <p className="text-white text-sm">
                          {item.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
