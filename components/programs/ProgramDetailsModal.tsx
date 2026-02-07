"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { PipelineItem, PipelinePhase } from "@/data/programs";

interface ProgramDetailsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  program: PipelineItem | null;
  phases: PipelinePhase[];
}

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
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden border-none bg-white">
        <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto">
          {/* Left Side: Image */}
          <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full relative"
            >
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
              <div className="absolute bottom-4 left-4 md:bottom-auto md:top-4">
                <Badge className="bg-cyan-500 text-white border-none px-3 py-1">
                  {program.activePhase}
                </Badge>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-3/5 p-6 md:p-8 space-y-6">
            <DialogHeader className="text-left">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {program.title}
                </DialogTitle>
                <DialogDescription className="text-cyan-600 font-medium text-lg">
                  Research Program Details
                </DialogDescription>
              </motion.div>
            </DialogHeader>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Description
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Research Completion
                  </h4>
                  <span className="text-cyan-600 font-bold">{Math.round(progress)}%</span>
                </div>
                
                <div className="space-y-4">
                   <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                      className="h-full bg-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-5 gap-1">
                    {phases.map((phase, index) => (
                      <div key={phase} className="flex flex-col items-center gap-2">
                        <div 
                          className={`w-3 h-3 rounded-full transition-colors duration-500 ${
                            index <= activeIndex ? "bg-cyan-500" : "bg-gray-200"
                          }`} 
                        />
                        <span className={`text-[10px] text-center font-medium ${
                          index <= activeIndex ? "text-cyan-600" : "text-gray-400"
                        }`}>
                          {phase}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase">Focus Area</h4>
                  <p className="text-sm text-gray-700 font-medium">Biotechnology</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase">Status</h4>
                  <p className="text-sm text-gray-700 font-medium">Active Research</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <button
                onClick={() => onOpenChange(false)}
                className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Close Details
              </button>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
