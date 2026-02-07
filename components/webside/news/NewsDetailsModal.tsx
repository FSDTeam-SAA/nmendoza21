"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { NewsItem } from "@/data/news";

import { motion, Variants } from "framer-motion";

interface NewsDetailsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  item: NewsItem | null;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

export function NewsDetailsModal({
  isOpen,
  onOpenChange,
  item,
}: NewsDetailsModalProps) {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-4xl max-h-[90vh] bg-white overflow-y-auto p-0 rounded-3xl border-0 shadow-2xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="px-6 pt-6 pb-8 md:px-8"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:items-center">
            <motion.div 
              variants={itemVariants}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="space-y-6">
              <div className="space-y-2">
                <motion.p variants={itemVariants} className="text-cyan-600 font-bold text-sm uppercase tracking-[0.2em]">
                  Latest News
                </motion.p>
                <motion.div variants={itemVariants}>
                  <DialogTitle className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                    {item.title}
                  </DialogTitle>
                </motion.div>
              </div>
              
              {item.date && (
                <motion.div variants={itemVariants} className="flex items-center gap-2 text-gray-500 font-bold text-sm bg-gray-50 w-fit px-3 py-1 rounded-full uppercase tracking-wider">
                  <span>📅</span>
                  <span>{item.date}</span>
                </motion.div>
              )}
              
              <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed font-medium border-l-4 border-cyan-500 pl-4 py-1 italic">
                {item.description}
              </motion.p>
            </div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-8 space-y-6 pt-8 border-t border-gray-100"
          >
            {item.content && item.content.length > 0 ? (
              <div className="space-y-4">
                {item.content.map((paragraph, index) => (
                  <motion.p
                    key={`${item.id}-news-${index}`}
                    variants={itemVariants}
                    className="text-gray-700 text-lg leading-relaxed font-normal"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 italic">No additional content available.</p>
            )}
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-10 pt-4">
              <button
                onClick={() => onOpenChange(false)}
                className="w-full md:w-auto px-10 bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Close Story
              </button>
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
