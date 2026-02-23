"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { technologysData } from "@/data/technologys";

const leftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const rightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const Technologys = () => {
  return (
    <div className="container mx-auto ">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-start mb-8 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-[#003152] tracking-tight">
            {technologysData.title}
          </h2>
          {/* <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            {technologysData.subtitle}
          </p> */}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {technologysData.items.map((item, index) => {
          const isEven = index % 2 === 0;
          const mediaVariant = isEven ? leftVariant : rightVariant;
          const textVariant = isEven ? rightVariant : leftVariant;
          const mediaOrderClass = isEven ? "" : "md:order-2";
          const textOrderClass = isEven ? "bg-[#ced6d8] p-16" : "md:order-1 bg-[#ced6d8] p-16";

          return (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
            >
              <motion.div
                variants={mediaVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative ${mediaOrderClass}`}
              >
                <div className="relative w-full aspect-5/4 md:aspect-4/3 lg:aspect-3/2 overflow-hidden rounded-4xl">
                  <video
                    src={item.mediaSrc}
                    className="object-cover absolute inset-0 w-full h-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </motion.div>

              <motion.div
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className={textOrderClass}
              >
                <h2 className="text-3xl font-medium mb-3 text-[#003399]">{item.heading}</h2>
                <p className="text-black text-base md:text-xl leading-relaxed font-normal text-justify">
                  {item.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologys;
