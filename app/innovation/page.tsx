import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { innovationPageData } from "@/data/innovation";

export const metadata: Metadata = {
  title: "Innovation | Vivtex",
  description:
    "Explore Vivtex innovation updates, featured newsletters, and global engagement initiatives.",
};

export default function InnovationPage() {
  const {
    heroTitle,
    heroSubtitle,
    feature,
    latestNewsTitle,
    latestNews,
    community,
  } = innovationPageData;

  return (
    <main className="min-h-screen bg-[#f8f6f2]">
      {/* Hero */}
      <section className="pt-16 pb-10 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {heroTitle}
          </h1>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">{heroSubtitle}</p>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <span className="text-xs font-semibold text-cyan-600">
                {feature.featured.label}
              </span>
              <p className="text-xs text-gray-400 mt-1">
                {feature.featured.date}
              </p>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-3">
                {feature.featured.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                {feature.featured.description}
              </p>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-3">
                  <Image
                    src={feature.featured.authorAvatar}
                    alt={feature.featured.author}
                    width={36}
                    height={36}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {feature.featured.author}
                    </p>
                    <p className="text-xs text-gray-400">
                      {feature.featured.authorRole}
                    </p>
                  </div>
                </div>
                <a
                  href={feature.featured.link}
                  className="text-sm text-cyan-600 font-semibold hover:underline"
                >
                  {feature.featured.linkLabel}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <span className="text-xs font-semibold text-cyan-600">
                {feature.upcoming.label}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mt-3">
                {feature.upcoming.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                {feature.upcoming.description}
              </p>
              <a
                href={feature.upcoming.link}
                className="inline-flex items-center text-sm text-cyan-600 font-semibold mt-4 hover:underline"
              >
                {feature.upcoming.linkLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {latestNewsTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((item) => (
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

      {/* Community */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            {community.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 max-w-2xl">
            {community.description}
          </p>
          <ul className="space-y-2">
            {community.bullets.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                  <Check size={12} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
