"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <div className="container mx-auto my-10 md:my-16">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-[40px] font-semibold tracking-tight">
            Technology
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Explore our latest technologies
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <video
              src={"/images/technolopgoy2.mp4"}
              autoPlay
              loop
              muted
              className="w-full aspect-[5/2] rounded-4xl object-cover"
              width={700}
              height={280}
            />

            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="absolute top-6 left-10 text-white text-2xl font-medium"
            >
              GI Models
            </motion.h3>
          </motion.div>

          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-3xl font-medium mb-3">
              Enhance nature’s complexity
            </h2>
                <p className="text-gray-600 text-base md:text-xl leading-relaxed font-normal">
              We are committed to pushing the boundaries of what’s possible with
              nature. Our technologies are designed to enhance the complexity of
              natural systems, enabling us to create solutions that are more
              effective, sustainable, and in harmony with the environment.
            </p>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative md:order-2"
          >
            <video
              src={"/images/technology4.mp4"}
              autoPlay
              loop
              muted
              className="w-full aspect-[5/2] rounded-4xl object-cover"
              width={700}
              height={280}
            />

            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="absolute top-6 left-10 text-white text-2xl font-medium"
            >
              AI Vision
            </motion.h3>
          </motion.div>

          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="md:order-1"
          >
            <h2 className="text-3xl font-medium mb-3">
              Intelligent visual systems
            </h2>
            <p className="text-gray-600 text-base md:text-xl leading-relaxed font-normal">
              Our AI Vision technology enables machines to perceive and
              interpret visual information with high accuracy, unlocking smarter
              automation and real-time decision making.
            </p>
          </motion.div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <video
              src={"/images/technologyvideo.mp4"}
              autoPlay
              loop
              muted
              className="w-full aspect-[5/2] rounded-4xl object-cover"
              width={700}
              height={280}
            />

            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="absolute top-6 left-10 text-white text-2xl font-medium"
            >
              Data Intelligence
            </motion.h3>
          </motion.div>

          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-3xl font-medium mb-3">
              Smarter insights from data
            </h2>
            <p className="text-gray-600 text-base md:text-xl leading-relaxed font-normal">
              We transform complex datasets into actionable insights using
              advanced analytics, machine learning, and scalable data pipelines.
            </p>
          </motion.div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative md:order-2"
          >
            <video
              src={"/images/technologys.mp4"}
              autoPlay
              loop
              muted
              className="w-full aspect-[5/2] rounded-4xl object-cover"
              width={700}
              height={280}
            />

            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="absolute top-6 left-10 text-white text-2xl font-medium"
            >
              Automation
            </motion.h3>
          </motion.div>

          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="md:order-1"
          >
            <h2 className="text-3xl font-medium mb-3">
              Streamline your operations
            </h2>
            <p className="text-gray-600 text-base md:text-xl leading-relaxed font-normal">
              Our automation frameworks help businesses reduce manual work,
              increase efficiency, and scale operations with confidence.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologys;
