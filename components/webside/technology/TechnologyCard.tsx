import { type TechnologyItem } from "@/data/technology.data";
import TechnologyCardDialog from "./TechnologyCardDialog";

interface TechnologyCardProps {
  item: TechnologyItem;
}

export default function TechnologyCard({ item }: TechnologyCardProps) {
  return (
    <div className="group relative">
      <div className="flex flex-col md:flex-row justify-between items-center p-8 bg-white border border-gray-100 rounded-[2rem] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-primary/20 hover:-translate-y-1 overflow-hidden">
        {/* Subtle hover glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10 flex-1 pr-8">
          
          <h3 className="text-xl md:text-2xl font-normal text-[#000000] leading-tight group-hover:text-primary transition-colors duration-300">
            {item.title}
          </h3>
          <div className="flex items-center gap-3 mt-4">
            {/* <span className="w-2 h-2 rounded-full bg-primary/60" /> */}
            <p className="text-sm text-primary font-black uppercase tracking-wider">{item.date}</p>
          </div>
        </div>

        <div className="relative z-10 mt-8 md:mt-0">
          <TechnologyCardDialog item={item}>
            <button className="cursor-pointer inline-flex items-center justify-center px-10 text-primary hover:bg-transparent  hover:underline transition-all duration-300  active:scale-95">
              View Paper
            </button>
          </TechnologyCardDialog>
        </div>
      </div>
    </div>
  );
}
