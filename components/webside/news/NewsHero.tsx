"use client";

import Image from "next/image";
import { newsPageData } from "@/data/news";
import NewsModal from "@/components/webside/news/NewsModal";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";
import { Button } from "@/components/ui/button"; // Re-adding Button as it was removed in the malformed instruction

const NewsHero = () => {
  const { featured } = newsPageData;
  const heroImage = "/news/newshero.jpg";

  return (
    <section className="pb-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl border border-gray-100 grid md:grid-cols-2 gap-6 items-center">
          <InViewAnimationWrapper animation="slideInLeft" duration={800}>
            <div className="relative w-full aspect-5/3">
              <Image
                src={heroImage}
                alt={featured.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </InViewAnimationWrapper>
          <InViewAnimationWrapper animation="slideInRight" duration={800} delay={200}>
            <div className="p-6">
              <p className="text-xs text-gray-400">{featured.date}</p>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-2">
                {featured.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                {featured.description}
              </p>
              <NewsModal item={featured}>
                <Button className="bg-primary text-white px-6 py-4 text-sm mt-4">
                  {featured.linkLabel}
                </Button>
              </NewsModal>
            </div>
          </InViewAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
