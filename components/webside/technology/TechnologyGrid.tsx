import TechnologyCard from "./TechnologyCard";
import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";
import { type TechnologyItem } from "@/data/technology.data";

interface TechnologyGridProps {
  items: TechnologyItem[];
}

export default function TechnologyGrid({ items }: TechnologyGridProps) {
  return (
    <div className="grid grid-cols-1  ">
      {items.map((item, index) => (
        <InViewAnimationWrapper
          key={item.id}
          animation="slideInUp"
          duration={600}
          delay={index * 100}
        >
          <TechnologyCard item={item} />
        </InViewAnimationWrapper>
      ))}
    </div>
  );
}
