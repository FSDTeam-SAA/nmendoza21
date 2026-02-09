"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { programsPageData } from "@/data/programs";
import Link from "next/link";

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

const CurrentActiveProgram = () => {
  const { pipelineTitle, pipelineSubtitle, phases, items } = programsPageData;

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
            className="space-y-12 md:space-y-16 max-w-7xl mx-auto"
          >
            {items.map((item, index) => {
              const activeIndex = phases.indexOf(item.activePhase);
              const progress =
                phases.length > 1
                  ? (activeIndex / (phases.length - 1)) * 100
                  : 0;

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="bg-white rounded-[3rem] p-8 md:p-14 shadow-[0_10px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] transition-all duration-700 border border-gray-100 group"
                >
                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    <div className="relative w-full lg:w-[450px] aspect-video lg:aspect-4/3 shrink-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                      />
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    <div className="flex-1 w-full space-y-10">
                      <div>
                        <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 group-hover:text-primary transition-colors duration-300 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                          {item.description}
                        </p>
                      </div>

                      <Link href={`/contact`} className="">
                        <div className="">
                          <Button className="w-full sm:w-auto px-12 py-8 bg-primary hover:bg-gray-950 cursor-pointer text-white font-black text-xl rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] group/btn">
                            Contact us to learn more
                            <span className="ml-3 group-hover/btn:translate-x-2 transition-transform duration-300">
                              →
                            </span>
                          </Button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      {/* <ProgramDetailsModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        program={selectedProgram}
        phases={phases}
      /> */}
    </section>
  );
};

export default CurrentActiveProgram;
