import type { Stat } from "@/data/about";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="container mx-auto bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <InViewAnimationWrapper
              key={index}
              animation="scaleIn"
              duration={600}
              delay={index * 100}
            >
              <div className="text-center transition-transform duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {stat.label}
                </div>
              </div>
            </InViewAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
