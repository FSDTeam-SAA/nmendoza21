"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { newsPageData } from "@/data/news";
import NewsModal from "@/components/webside/news/NewsModal";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

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
  };

  return (
    <section  className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pagedItems.map((item, index) => (
            <InViewAnimationWrapper
              key={item.id}
              animation="slideInUp"
              duration={600}
              delay={index * 150}
            >
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col">
                <div className="relative w-full h-40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-xs text-gray-400">{item.date}</p>
                  <h3 className="text-sm font-semibold text-gray-900 mt-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-3 flex-1">{item.description}</p>
                  <NewsModal item={item}>
                    <button className="text-xs cursor-pointer text-cyan-600 font-semibold mt-4 inline-flex hover:underline">
                      {item.linkLabel}
                    </button>
                  </NewsModal>
                </div>
              </div>
            </InViewAnimationWrapper>
          ))}
        </div>
      </div>

      <div className="pt-10 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`h-7 px-3 rounded-full border text-xs flex items-center justify-center ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                  : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
              }`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`h-7 w-7 rounded-full border text-xs flex items-center justify-center ${
                    page === currentPage
                      ? "bg-cyan-600 text-white border-cyan-600"
                      : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ),
            )}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`h-7 px-3 rounded-full border text-xs flex items-center justify-center ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                  : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCards;
