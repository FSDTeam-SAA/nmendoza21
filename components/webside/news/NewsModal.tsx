"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { type NewsItem } from "@/data/news";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface NewsModalProps {
  item: NewsItem;
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

const NewsModal = ({ item, children }: NewsModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-full max-w-5xl max-h-[90vh] bg-[#1FABED] overflow-y-auto p-0 rounded-3xl border-0 shadow-2xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="px-6 pt-6 pb-8 md:px-8"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div 
              variants={itemVariants}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/10 shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="text-white space-y-6">
              <motion.div variants={itemVariants}>
                <DialogTitle className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                  {item.title}
                </DialogTitle>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-lg leading-relaxed text-white/90 font-medium">
                  {item.description}
                </p>
              </motion.div>
{/* 
              <motion.div variants={itemVariants} className="pt-2">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-base font-bold text-[#1FABED] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {item.linkLabel}
                  <span className="text-xl leading-none">→</span>
                </Link>
              </motion.div> */}
            </div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-8 space-y-4 pt-8 border-t border-white/10"
          >
            {item.content && item.content.length > 0 && (
              <div className="space-y-4">
                {item.content.map((paragraph, index) => (
                  <motion.p
                    key={`${item.id}-content-${index}`}
                    variants={itemVariants}
                    className="text-lg leading-relaxed text-white/80"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsModal;
