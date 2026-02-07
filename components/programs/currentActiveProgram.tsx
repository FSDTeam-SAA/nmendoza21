"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";
import { ProgramDetailsModal } from "@/components/programs/ProgramDetailsModal";
import { programsPageData, PipelineItem } from "@/data/programs";

const CurrentActiveProgram = () => {
  const { pipelineTitle, pipelineSubtitle, phases, items } = programsPageData;

  const [selectedProgram, setSelectedProgram] = useState<PipelineItem | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (program: PipelineItem) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };
  return (
    <section>
      <div className="pb-24">
        <div className="container mx-auto px-4">
          <InViewAnimationWrapper animation="fadeIn" duration={600}>
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                {pipelineTitle}
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                {pipelineSubtitle}
              </p>
            </div>
          </InViewAnimationWrapper>

          <div className="space-y-8 md:space-y-12 max-w-6xl mx-auto">
            {items.map((item, index) => {
              const activeIndex = phases.indexOf(item.activePhase);
              const progress =
                phases.length > 1
                  ? (activeIndex / (phases.length - 1)) * 100
                  : 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-6 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
                >
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                    <div className="relative w-full lg:w-72 aspect-video lg:aspect-4/3 shrink-0 rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="flex-1 w-full space-y-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      <div className="space-y-4 pt-4">
                        <div className="flex items-center justify-between gap-1 overflow-x-auto no-scrollbar py-2">
                          {phases.map((phase, idx) => (
                            <div
                              key={phase}
                              className="flex flex-col items-center min-w-15 md:min-w-20"
                            >
                              <span
                                className={`text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2 text-center ${
                                  idx <= activeIndex
                                    ? "text-primary"
                                    : "text-gray-300"
                                }`}
                              >
                                {phase}
                              </span>
                              <div
                                className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 transition-colors duration-500 ${
                                  idx <= activeIndex
                                    ? "bg-primary border-primary"
                                    : "bg-white border-gray-200"
                                }`}
                              />
                            </div>
                          ))}
                        </div>

                        <div className="relative h-2 rounded-full bg-gray-100 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${progress}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              ease: "easeOut",
                              delay: 0.5,
                            }}
                            className="absolute inset-y-0 left-0 bg-linear-to-r from-primary/80 to-primary rounded-full shadow-[0_0_10px_rgba(31,171,237,0.3)]"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex justify-center lg:justify-start">
                        <Button
                          onClick={() => handleViewDetails(item)}
                          className="w-full sm:w-auto min-w-45 bg-primary hover:bg-primary-dark text-white font-bold py-6 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95"
                        >
                          Explore Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <ProgramDetailsModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        program={selectedProgram}
        phases={phases}
      />
    </section>
  );
};

export default CurrentActiveProgram;
