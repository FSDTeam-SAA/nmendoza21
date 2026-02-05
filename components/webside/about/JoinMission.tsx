import Link from "next/link";
import { Button } from "@/components/ui/button";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

interface JoinMissionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export default function JoinMission({
  title,
  description,
  ctaText,
  ctaLink,
}: JoinMissionProps) {
  return (
    <section className="container mx-auto py-20 bg-primary rounded-2xl my-16 md:my-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <InViewAnimationWrapper animation="slideInUp" duration={800}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {title}
            </h2>
          </InViewAnimationWrapper>
          <InViewAnimationWrapper animation="fadeIn" duration={800} delay={200}>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              {description}
            </p>
          </InViewAnimationWrapper>
          <InViewAnimationWrapper
            animation="scaleIn"
            duration={600}
            delay={400}
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg"
            >
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </InViewAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
