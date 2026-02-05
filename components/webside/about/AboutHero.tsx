import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";
import { aboutData } from "@/data/about";
import Stats from "./Stats";

interface AboutHeroProps {
  title: string;
  description: string;
}

export default function AboutHero({ title, description }: AboutHeroProps) {
  return (
    <section className="relative  ">
        <div className=" min-h-[50vh] flex items-center overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src="/images/abouthero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <InViewAnimationWrapper
            animation="slideInUp"
            duration={800}
            delay={0}
          >
            <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold mb-6">
              {title}
            </h1>
          </InViewAnimationWrapper>
          <InViewAnimationWrapper animation="fadeIn" duration={800} delay={200}>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              {description}
            </p>
          </InViewAnimationWrapper>
        </div>
      </div>
        </div>
      <Stats stats={aboutData.stats} />
      {/* Video Background */}
    </section>
  );
}
