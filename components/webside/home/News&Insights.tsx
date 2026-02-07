"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { newsPageData, NewsItem } from "@/data/news";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";
import { NewsDetailsModal } from "@/components/webside/news/NewsDetailsModal";

const NewsAndInsights = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (item: NewsItem) => {
    setSelectedNews(item);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-12 md:py-20 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <InViewAnimationWrapper animation="fadeIn" duration={600}>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {newsPageData.title}
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                {newsPageData.subtitle}
              </p>
            </div>
          </InViewAnimationWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-10 md:mb-12">
            {newsPageData.items.slice(0, 3).map((item, index) => (
              <InViewAnimationWrapper
                key={item.id}
                animation="slideInUp"
                duration={600}
                delay={index * 150}
              >
                <div className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                      <p className="text-primary text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
                        Research & Insights
                      </p>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                      <p className="text-gray-400 text-xs md:text-sm font-medium">
                        {item.date}
                      </p>
                      <button
                        onClick={() => {
                          setSelectedNews(item);
                          setIsModalOpen(true);
                        }}
                        className="text-primary text-sm font-bold hover:text-primary/80 transition-colors flex items-center gap-1 group/btn"
                      >
                        Read More
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </InViewAnimationWrapper>
            ))}
          </div>

          <InViewAnimationWrapper
            animation="slideInUp"
            duration={600}
            delay={400}
          >
            <div className="text-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
                <a href={newsPageData.featured.link}>
                  View All
                </a>
              </Button>
            </div>
          </InViewAnimationWrapper>
        </div>
      </section>

      <NewsDetailsModal 
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        item={selectedNews}
      />
    </>
  );
};

export default NewsAndInsights;
