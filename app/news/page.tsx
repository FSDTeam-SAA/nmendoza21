"use client";

import { newsPageData } from "@/data/news";
import NewsCards from "@/components/webside/news/NewsCards";
import NewsHero from "@/components/webside/news/NewsHero";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

export default function NewsPage() {
  const { title, subtitle, featured, items } = newsPageData;

  return (
    <main className="min-h-screen bg-[#f8f6f2]">
      {/* Hero */}
      <section className="pt-14 pb-10 text-center">
        <InViewAnimationWrapper animation="slideInUp" duration={800}>
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              {title}
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
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
