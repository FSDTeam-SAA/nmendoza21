"use client";

import Image from "next/image";
import { innovationPageData } from "@/data/innovation";
import InnovationLatestModal from "@/components/webside/innovation/InnovationLatestModal";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

const InnovationLatestNews = () => {
  const { latestNewsTitle, latestNews } = innovationPageData;

  return (
    <section className="pb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          {latestNewsTitle}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((item, index) => (
            <InViewAnimationWrapper 
              key={item.id} 
              animation="slideInUp" 
              duration={600} 
              delay={index * 150}
            >
              <InnovationLatestModal item={item}>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden cursor-pointer h-full">
                  <div className="relative w-full h-40">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2">
                      {item.description}
                    </p>
                    {item.date && (
                      <span className="text-xs text-cyan-600 font-semibold mt-3 inline-flex">
                        {item.date}
                      </span>
                    )}
                  </div>
                </div>
              </InnovationLatestModal>
            </InViewAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationLatestNews;
