"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { NewsItem } from "@/data/news";

interface NewsDetailsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  item: NewsItem | null;
}

export function NewsDetailsModal({
  isOpen,
  onOpenChange,
  item,
}: NewsDetailsModalProps) {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-4xl max-h-[90vh] bg-white overflow-y-auto p-0 rounded-2xl border-0 shadow-2xl">
        <div className="px-6 pt-6 pb-8 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:items-center">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-cyan-600 font-bold text-sm uppercase tracking-wider">
                  Latest News
                </p>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </DialogTitle>
              </div>
              
              {item.date && (
                <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                  <span>📅</span>
                  <span>{item.date}</span>
                </div>
              )}
              
              <p className="text-gray-600 leading-relaxed font-medium border-l-4 border-cyan-500 pl-4 py-1 italic">
                {item.description}
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-6 pt-6 border-t border-gray-100">
            {item.content && item.content.length > 0 ? (
              <div className="space-y-4">
                {item.content.map((paragraph, index) => (
                  <p
                    key={`${item.id}-news-${index}`}
                    className="text-gray-700 text-base leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 italic">No additional content available.</p>
            )}
          </div>
          
          <div className="mt-8 pt-4">
              <button
                onClick={() => onOpenChange(false)}
                className="w-full md:w-auto px-8 bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Close Story
              </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
