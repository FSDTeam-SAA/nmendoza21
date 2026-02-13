"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProgramDetailsModal } from "@/components/programs/ProgramDetailsModals";
import { programsPageData, PipelineItem } from "@/data/programs";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const pipelineColumns = [
  { key: "program", label: "Program" },
  { key: "research", label: "Research" },
  { key: "preclinical", label: "Preclinical" },
  { key: "phase1", label: "Phase I" },
  { key: "phase2", label: "Phase II" },
  { key: "phase2b", label: "Phase II" },
  { key: "approval", label: "Approval" },
  { key: "indication", label: "Indication" },
  { key: "action", label: "" },
];

const phaseToColumn = {
  Discovery: "research",
  "Pre-Clinical": "preclinical",
  "Phase I": "phase1",
  "Phase II": "phase2",
  "Phase III": "phase2b",
  "Approval": "approval",
  "Indication": "indication",
} as const;

const rowColors = [
  "bg-sky-100",
  "bg-orange-100",
  "bg-green-100",
  "bg-purple-100",
  "bg-rose-100",
  "bg-cyan-100",
  "bg-lime-100",
  "bg-fuchsia-100",
];

const CurrentActiveProgram = () => {
  const { pipelineTitle, pipelineSubtitle, phases, items } = programsPageData;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<PipelineItem | null>(
    null
  );

  const handleOpenModal = (program: PipelineItem) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  return (
    <section className="bg-white">
      <div className="pb-12 pt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 md:mb-12"
          >
            <h2 className="text-[40px] font-semibold text-gray-900 mb-2 tracking-tight">
              {pipelineTitle}
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              {pipelineSubtitle}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto"
          >
            <div className="w-full overflow-x-auto">
              <table className="w-full border border-gray-300 text-left text-sm md:text-base">
                <thead className="bg-white">
                  <tr>
                    {pipelineColumns.map((column) => (
                      <th
                        key={column.key}
                        className="border border-gray-300 px-4 py-3 font-semibold text-gray-900"
                      >
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => {
                    const activeColumn = phaseToColumn[item.activePhase];
                    const rowColor = rowColors[index % rowColors.length];

                    return (
                      <tr key={item.id}>
                        {pipelineColumns.map((column) => {
                          const isActive = column.key === activeColumn;
                          const cellColor = isActive ? rowColor : "bg-white";

                          if (column.key === "program") {
                            return (
                              <td
                                key={column.key}
                                className="border border-gray-300 px-4 py-3 text-gray-900"
                              >
                                {index + 1}
                              </td>
                            );
                          }

                          if (column.key === "indication") {
                            return (
                              <td
                                key={column.key}
                                className="border border-gray-300 px-4 py-3 text-gray-700"
                              >
                                {item.title}
                              </td>
                            );
                          }

                          if (column.key === "action") {
                            return (
                              <td
                                key={column.key}
                                className="border border-gray-300 px-4 py-3"
                              >
                                <Button
                                  className="w-full px-4 py-2 bg-primary hover:bg-gray-950 cursor-pointer text-white font-semibold text-sm rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
                                  onClick={() => handleOpenModal(item)}
                                >
                                  Program more DEtails
                                </Button>
                              </td>
                            );
                          }

                          return (
                            <td
                              key={column.key}
                              className={`border border-gray-300 px-4 py-3 ${cellColor}`}
                            />
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
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
