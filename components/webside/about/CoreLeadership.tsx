import type { TeamMember } from "@/data/about";
import PersonCard from "./PersonCard";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

interface CoreLeadershipProps {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export default function CoreLeadership({
  title,
  subtitle,
  members,
}: CoreLeadershipProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <InViewAnimationWrapper animation="fadeIn" duration={600}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {title}
            </h2>
            <p className="text-gray-600 text-lg">{subtitle}</p>
          </div>
        </InViewAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto">
          {members.map((member, index) => (
            <InViewAnimationWrapper
              key={member.id}
              animation="slideInUp"
              duration={600}
              delay={index * 150}
            >
              <PersonCard member={member} highlight={index === 1} />
            </InViewAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
