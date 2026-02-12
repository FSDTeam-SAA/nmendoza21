"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { PipelineItem, PipelinePhase } from "@/data/programs";
import { Activity, FlaskConical, Target, X } from "lucide-react";

interface ProgramDetailsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  program: PipelineItem | null;
  phases: PipelinePhase[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ProgramDetailsModal({
  isOpen,
  onOpenChange,
  program,
  phases,
}: ProgramDetailsModalProps) {
  if (!program) return null;

  const activeIndex = phases.indexOf(program.activePhase);
  const progress =
    phases.length > 1 ? (activeIndex / (phases.length - 1)) * 100 : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden border-none bg-white rounded-[2rem] shadow-2xl">
        <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto custom-scrollbar">
          {/* Left Side: Image */}
          <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-full relative"
            >
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Progress Bar at Bottom - Full Width */}
              <div className="absolute bottom-0 left-0 right-0 w-full p-4 md:p-6 bg-linear-to-t from-black/60 to-transparent space-y-3 md:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Progress</span>
                  <span className="text-lg md:text-xl font-black text-cyan-300">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="relative h-2 md:h-3 w-full bg-white/20 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ delay: 0.8, duration: 1.5, ease: "circOut" }}
                    className="h-full bg-linear-to-r from-cyan-400 to-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                  />
                </div>
                <div className="grid grid-cols-5 md:grid-cols-5 gap-1.5 md:gap-2">
                  {phases.map((phase, index) => (
                    <div
                      key={phase}
                      className="flex flex-col items-center gap-1.5 md:gap-2 group/phase"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className={`w-2.5 md:w-3 h-2.5 md:h-3 rounded-full border-2 transition-all duration-500 shadow-sm ${
                          index <= activeIndex 
                            ? "bg-cyan-300 border-cyan-300 scale-110 shadow-cyan-200" 
                            : "bg-white/30 border-white/40"
                        }`}
                      />
                      <span
                        className={`text-[7px] md:text-[8px] text-center font-bold tracking-tighter uppercase transition-colors duration-300 leading-tight ${
                          index <= activeIndex
                            ? "text-cyan-200"
                            : "text-white/50"
                        }`}
                      >
                        {phase}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute top-4 md:top-6 left-4 md:left-6">
                <Badge className="bg-cyan-500 hover:bg-cyan-600 text-white border-none px-4 py-1.5 text-xs font-bold tracking-wider uppercase shadow-lg">
                  {program.activePhase}
                </Badge>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-3/5 p-8 md:p-12 relative">
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
            >
              <X size={20} />
            </button>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <DialogHeader className="text-left space-y-2">
                <motion.div variants={itemVariants}>
                  <DialogTitle className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                    {program.title}
                  </DialogTitle>
                  <DialogDescription className="text-cyan-600 font-semibold text-lg mt-1 tracking-wide uppercase">
                    Research Program Insights
                  </DialogDescription>
                </motion.div>
              </DialogHeader>

              <div className="space-y-8">
                {/* DescriptionSection */}
                <motion.div variants={itemVariants} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-50 rounded-xl text-cyan-600">
                      <Target size={24} />
                    </div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
                      The Scientific goal
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {program.description}
                  </p>
                </motion.div>

                {/* Pipeline Section */}
                <motion.div variants={itemVariants} className="space-y-3 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-50 rounded-xl text-purple-600">
                      <Activity size={24} />
                    </div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
                      Development Progress
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Phase <span className="font-bold text-gray-900">{program.activePhase}</span> • <span className="font-semibold text-cyan-600">{Math.round(progress)}% Complete</span>
                  </p>
                </motion.div>

                {/* Meta Info */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                  <div className="flex gap-4">
                    <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 shrink-0 h-fit">
                      <FlaskConical size={24} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Focus domain
                      </h4>
                      <p className="text-base text-gray-900 font-bold">
                        Applied Biotechnology
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600 shrink-0 h-fit">
                      <Activity size={24} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Current Status
                      </h4>
                      <p className="text-base text-gray-900 font-bold">
                        Active R&D
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
