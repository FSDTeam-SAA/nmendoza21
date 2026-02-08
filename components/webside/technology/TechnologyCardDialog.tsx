"use client";

import { useState } from "react";
import Image from "next/image";
import { type TechnologyItem } from "@/data/technology.data";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, ExternalLink } from "lucide-react";

interface TechnologyCardDialogProps {
  item: TechnologyItem;
  children: React.ReactNode;
}

import { motion, Variants } from "framer-motion";

interface TechnologyCardDialogProps {
  item: TechnologyItem;
  children: React.ReactNode;
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

export default function TechnologyCardDialog({
  item,
  children,
}: TechnologyCardDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-full max-h-[90vh] bg-[#1FABED] overflow-y-auto p-0 rounded-3xl border-0 shadow-2xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative px-6 pt-6 pb-8 md:px-10 md:pt-10"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-1 top-1 p-2 z-40 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110 active:scale-90"
              aria-label="Close dialog"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <div className="grid gap-8 md:grid-cols-2">
              {item.image && (
                <motion.div
                  variants={itemVariants}
                  className="relative w-full aspect-square md:h-80 rounded-2xl overflow-hidden bg-white/10 shadow-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={500}
                    className="object-cover w-full aspect-square"
                  />
                </motion.div>
              )}

              <div className="text-white space-y-6">
                <motion.div variants={itemVariants}>
                  <DialogTitle className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                    {item.title}
                  </DialogTitle>
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="text-lg font-bold text-white/70 uppercase tracking-widest"
                >
                  Published {item.date}
                </motion.p>
              </div>
            </div>

            {item.details.fullDescription && (
              <motion.p
                variants={itemVariants}
                className="text-lg mt-6 leading-relaxed text-white/90 font-normal border-white/20  py-1"
              >
                {item.details.fullDescription}
              </motion.p>
              )}
              {/*  */}
            {item.details.paperContent && (
              <motion.div
                variants={itemVariants}
                className=" text-white/90 text-lg leading-relaxed space-y-4"
              >
                {item.details.paperContent}
              </motion.div>
            )}

            {item.details.paperLink && (
              <motion.div variants={itemVariants} className="mt-3">
                <a
                  href={item.details.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-[#1FABED] font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
                >
                  Read Full Paper
                  <ExternalLink className="h-5 w-5" />
                </a>
              </motion.div>
            )}
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
