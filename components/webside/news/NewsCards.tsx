"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { newsPageData } from "@/data/news";
import NewsModal from "@/components/webside/news/NewsModal";
import { motion, AnimatePresence, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
};

const NewsCards = () => {
  const { items } = newsPageData;
  const perPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const pagedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * perPage;
    return items.slice(startIndex, startIndex + perPage);
  }, [currentPage, items]);

  const goToPage = (page: number) => {
    const safePage = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(safePage);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gray-50/30">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentPage}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {pagedItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group h-full"
              >
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2">
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-sm text-gray-400 font-bold">{item.date}</p>
                    <h3 className="text-xl font-black text-gray-900 mt-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-base mt-4 flex-1 line-clamp-3 font-medium leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-8">
                      <NewsModal item={item}>
                        <button className="text-sm cursor-pointer text-primary font-black uppercase tracking-wider inline-flex items-center gap-2 group/btn">
                          {item.linkLabel}
                          <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                        </button>
                      </NewsModal>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="mt-20 flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`h-12 px-6 rounded-full border-2 text-sm font-black transition-all duration-300 ${
              currentPage === 1
                ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                : "bg-white text-gray-600 border-gray-100 hover:border-primary hover:text-primary"
            }`}
          >
            ← Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`h-12 w-12 rounded-full border-2 text-sm font-black transition-all duration-300 ${
                  page === currentPage
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-white text-gray-500 border-gray-100 hover:border-primary hover:text-primary"
                }`}
              >
                {page}
              </button>
            ),
          )}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`h-12 px-6 rounded-full border-2 text-sm font-black transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                : "bg-white text-gray-600 border-gray-100 hover:border-primary hover:text-primary"
            }`}
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsCards;
