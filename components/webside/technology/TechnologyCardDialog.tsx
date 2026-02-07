"use client";

import { useState } from "react";
import Image from "next/image";
import { type TechnologyItem } from "@/data/technology.data";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, ExternalLink } from "lucide-react";

interface TechnologyCardDialogProps {
  item: TechnologyItem;
  children: React.ReactNode;
}

export default function TechnologyCardDialog({
  item,
  children,
}: TechnologyCardDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-full  max-h-[90vh] bg-[#1FABED] overflow-y-auto p-0 rounded-2xl border-0">
          <div className="relative px-6 pt-6 pb-8 md:px-8">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            <div className="grid gap-6 md:grid-cols-2">
              {item.image && (
                <div className="relative w-full aspect-square md:h-80 rounded-xl overflow-hidden bg-white/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={500}
                    className="object-cover w-full aspect-square"
                  />
                </div>
              )}

              <div className="text-white space-y-4">
                <DialogTitle className="text-2xl md:text-3xl font-semibold leading-snug">
                  {item.title}
                </DialogTitle>
                <p className="text-base md:text-lg font-medium text-white/90">
                  Published {item.date}
                </p>
                {item.details.fullDescription && (
                  <p className="text-base leading-relaxed text-white/90">
                    {item.details.fullDescription}
                  </p>
                )}
              </div>
            </div>

            {item.details.paperContent && (
              <div className="mt-6 text-white/90 text-base leading-relaxed">
                {item.details.paperContent}
              </div>
            )}

            {item.details.paperLink && (
              <div className="mt-6">
                <a
                  href={item.details.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-white font-medium hover:bg-white/25 transition-colors"
                >
                  Read Full Paper
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
