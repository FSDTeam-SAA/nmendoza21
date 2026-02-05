import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { programsPageData } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs | Vivtex",
  description:
    "Explore our programs and applied research pipeline driving advanced biotechnology innovation.",
};

export default function ProgramsPage() {
  const { hero, pipelineTitle, pipelineSubtitle, phases, items } =
    programsPageData;

  return (
    <main className="min-h-screen bg-[#f8f6f2]">
      {/* Hero */}
      <section className="pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-cyan-600 leading-tight mb-4">
                {hero.title.split("\n").map((line, index) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                {hero.description}
              </p>
              <Button className="bg-primary text-white px-6 py-5" asChild>
                <a href={hero.ctaLink}>{hero.ctaLabel}</a>
              </Button>
            </div>
            <div className="relative w-full h-65 md:h-80">
              <Image
                src={hero.image}
                alt="Programs hero"
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {pipelineTitle}
            </h2>
            <p className="text-gray-500 mt-2">{pipelineSubtitle}</p>
          </div>

          <div className="space-y-6">
            {items.map((item) => {
              const activeIndex = phases.indexOf(item.activePhase);
              const progress =
                phases.length > 1
                  ? (activeIndex / (phases.length - 1)) * 100
                  : 0;

              return (
                <div
                  key={item.id}
                  className="bg-white border border-gray-100 rounded-xl shadow-sm p-4 md:p-6"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative w-full md:w-56 h-40 md:h-32 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs md:text-sm">
                          {phases.map((phase, index) => (
                            <span
                              key={phase}
                              className={
                                index <= activeIndex
                                  ? "text-cyan-600 font-semibold"
                                  : "text-gray-400"
                              }
                            >
                              {phase}
                            </span>
                          ))}
                        </div>
                        <div className="h-1 rounded-full bg-gray-200 overflow-hidden">
                          <div
                            className="h-full bg-cyan-500"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <Button className="bg-primary text-white px-5 py-4 text-sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
