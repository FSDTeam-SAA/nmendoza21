"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { type NewsItem } from "@/data/news";

interface NewsModalProps {
  item: NewsItem;
  children: React.ReactNode;
}

const NewsModal = ({ item, children }: NewsModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-full max-w-5xl max-h-[90vh] bg-[#1FABED] overflow-y-auto p-0 rounded-2xl border-0">
        <div className="px-6 pt-6 pb-8 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white/10">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="text-white space-y-4">
              <DialogTitle className="text-2xl md:text-3xl font-semibold leading-snug">
                {item.title}
              </DialogTitle>
              <p className="text-sm md:text-base font-medium text-white/80">
                {item.date}
              </p>
              <p className="text-base leading-relaxed text-white/90">
                {item.description}
              </p>
            </div>
          </div>
          <div className=" mt-6">
            {item.content && item.content.length > 0 && (
              <div className="space-y-3">
                {item.content.map((paragraph, index) => (
                  <p
                    key={`${item.id}-content-${index}`}
                    className="text-base leading-relaxed text-white/90"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsModal;
