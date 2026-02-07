import { type TechnologyItem } from "@/data/technology.data";
import TechnologyCardDialog from "./TechnologyCardDialog";

interface TechnologyCardProps {
  item: TechnologyItem;
}

export default function TechnologyCard({ item }: TechnologyCardProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden  border border-gray-200 bg-white  transition-all duration-300">
      {/* Image Container */}
      {/* <div className="relative w-full h-48 overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        {item.badge && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-800">
              {item.badge}
            </span>
          </div>
        )}
      </div> */}

      {/* Content Container */}
      <div className="flex justify-between items-center p-5">
        {/* Date */}

        {/* Title */}
        <div>
          <h3 className="text-base font-semibold w-full md:w-10/12 text-gray-900 mb-2 line-clamp-3 hover:text-cyan-600 transition-colors">
            {item.title}
          </h3>

          {/* Description */}
          {/* <p className="text-sm text-gray-600 mb-4 grow line-clamp-2">
          {item.shortDescription}
        </p> */}
          <p className="text-xs text-primary font-medium mb-2">{item.date}</p>
        </div>

        {/* Button */}
        <div className="mt-auto">
          <TechnologyCardDialog item={item}>
            <button className="w-full cursor-pointer inline-flex items-center justify-center px-4 py-2 rounded-lg text-primary font-medium text-sm  transition-colors duration-200 group">
              View Paper
            </button>
          </TechnologyCardDialog>
        </div>
      </div>
    </div>
  );
}
