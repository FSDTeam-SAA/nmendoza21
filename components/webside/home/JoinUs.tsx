"use client";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { whoWeAreData } from "@/data/homepagedata";
import Link from "next/link";

const JoinUs = () => {
  return (
    <section className="my-12 md:my-16  overflow-hidden relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-[40px] font-semibold  tracking-tighter bg-clip-text  text-secondary-foreground  ">
            Join Us
          </h2>
          <p className="text-gray-400 text-lg md:text-xl  mx-auto leading-relaxed font-medium">
            Be part of a team that turns ideas into impact. Together, we create
            solutions that matter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
          <Link href="/contact">
            <div className="cursor-pointer">
              <Image
                className="rounded-lg"
                src={"/images/joinus.jpg"}
                width={700}
                height={400}
                alt="joinus"
              />
            </div>
          </Link>
          <div>
            <motion.h3 className="text-3xl md:text-2xl font-medium mb-3 flex gap-4 items-center tracking-tight">
              <div className="w-8 h-8 bg-primary rounded-md" />
              Research Opportunities
            </motion.h3>
            <h2 className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
              Join our research team and work alongside clinicians and
              researchers on evidence-based projects. Gain hands-on experience
              while contributing to meaningful advancements in medical
              knowledge.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
