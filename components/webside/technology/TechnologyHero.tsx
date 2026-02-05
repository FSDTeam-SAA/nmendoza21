import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

interface TechnologyHeroProps {
  title: string;
  subtitle: string;
  description?: string;
}

export default function TechnologyHero({
  title,
  subtitle,
  description,
}: TechnologyHeroProps) {
  return (
    <section className="mt-16   border-gray-200">
      <div className="container mx-auto px-4">
        <InViewAnimationWrapper
          animation="slideInDown"
          duration={600}
          delay={0}
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            {/* <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              {subtitle}
            </p> */}
            {description && (
              <InViewAnimationWrapper
                animation="fadeIn"
                duration={600}
                delay={200}
              >
                <p className="text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
                  {description}
                </p>
              </InViewAnimationWrapper>
            )}
          </div>
        </InViewAnimationWrapper>
      </div>
    </section>
  );
}
