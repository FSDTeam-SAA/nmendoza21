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
      {/* <div>
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
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            {technologysData.subtitle}
          </p>
        </motion.div>
      </div> */}

      {/* Technology items with image-text layout */}
      <div className="space-y-20 md:space-y-32">
        {technologysData.items.map((item, index) => {
          return (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-stretch gap-0"
            >
              {/* Left side - Image/Video with thick border */}
              <motion.div
                variants={leftVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full md:w-[45%] relative"
              >
                <div className="relative w-full h-full min-h-[400px] md:min-h-[500px]">
                  {/* Navy blue shadow/border background */}
                  <div className="absolute inset-0 -right-3 top-5 w-full aspect-video bg-[#003152] z-0"></div>

                  {/* Main image container */}
                  {item.image ? (
                    <div className="relative w-[98%] h-full overflow-hidden z-10">
                      <Image
                        src={item.image}
                        alt={item.mediaAlt}
                        className="object-cover w-full aspect-video"
                        width={800}
                        height={450}
                      />
                    </div>
                  ) : (
                    <div className="relative w-[98%] h-full  overflow-hidden z-10">
                      <video
                        src={item.mediaSrc}
                        className="object-cover w-full aspect-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Vertical line separator */}
              <div className="hidden md:flex flex-col items-center justify-center w-10 ">
                {/* <div className="h-[2px] w-full bg-[#003152]" /> */}
                <div className="w-[3px] h-4/5 bg-[#003152] ml-20 mb-18" />
              </div>

              {/* Right side - Text content */}
              <motion.div
                variants={rightVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="flex-1  flex items-center px-6 md:px-0 mt-10 py-8 md:py-12"
              >
                <div className="space-y-5">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#003152] leading-snug ml-16 -mt-20">
                    {item.heading}
                  </h2>
                  <p className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed font-light ml-16">
                    {item.description}
                  </p>

                  <div className="   top-0 justify-center inset-0 flex items-center border-t-1 border-[#003152]">
                    <div className="h-[2px] w-full bg-[#003152]" />
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologys;
