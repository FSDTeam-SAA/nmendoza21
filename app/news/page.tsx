import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { newsPageData } from "@/data/news";

export const metadata: Metadata = {
  title: "News | Vivtex",
  description: "Latest news and press releases from Vivtex.",
};

export default function NewsPage() {
  const { title, subtitle, featured, items } = newsPageData;

  return (
    <main className="min-h-screen bg-[#f8f6f2]">
      {/* Hero */}
      <section className="pt-16 pb-10 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {title}
          </h1>
          <p className="text-gray-500 mt-2 max-w-3xl mx-auto text-sm md:text-base">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-6 grid md:grid-cols-[320px_1fr] gap-6 items-center">
            <div className="relative w-full h-56 md:h-48">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-xs text-gray-400">{featured.date}</p>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-2">
                {featured.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                {featured.description}
              </p>
              <Button
                className="bg-primary text-white px-6 py-4 text-sm mt-4"
                asChild
              >
                <a href={featured.link}>{featured.linkLabel}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
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
                  <a
                    href={item.link}
                    className="text-xs text-cyan-600 font-semibold mt-3 inline-flex hover:underline"
                  >
                    {item.linkLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <span
                key={page}
                className={`h-7 w-7 rounded-full border text-xs flex items-center justify-center ${
                  page === 2
                    ? "bg-cyan-600 text-white border-cyan-600"
                    : "bg-white text-gray-500 border-gray-200"
                }`}
              >
                {page}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
