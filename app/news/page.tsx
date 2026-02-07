"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { newsPageData } from "@/data/news";
import NewsCards from "@/components/webside/news/NewsCards";
import NewsModal from "@/components/webside/news/NewsModal";
import NewsHero from "@/components/webside/news/NewsHero";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

export default function NewsPage() {
  const { title, subtitle, featured, items } = newsPageData;

  return (
    <main className="min-h-screen bg-[#f8f6f2]">
      {/* Hero */}
      <section className="pt-16 pb-10 text-center">
        <InViewAnimationWrapper animation="slideInUp" duration={800}>
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {title}
            </h1>
            <p className="text-gray-500 mt-2 max-w-3xl mx-auto text-sm md:text-base">
              {subtitle}
            </p>
          </div>
        </InViewAnimationWrapper>
      </section>

      {/* Featured */}
      <NewsHero />

      <NewsCards />
    </main>
  );
}
