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
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <DialogTitle className="text-xl font-bold text-gray-900 pr-8">
              {item.title}
            </DialogTitle>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="px-6 py-6 space-y-6">
            {/* Featured Image */}
            {item.details.image && (
              <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={item.details.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-gray-200">
              <div>
                <p className="text-sm font-medium text-gray-500">Published</p>
                <p className="text-sm text-gray-700 font-semibold">
                  {item.date}
                </p>
              </div>
              {item.details.paperLink && (
                <a
                  href={item.details.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-cyan-100 text-cyan-700 hover:bg-cyan-200 transition-colors font-medium text-sm"
                >
                  Read Full Paper
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              )}
            </div>

            {/* Full Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Overview
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.details.fullDescription}
              </p>
            </div>

            {/* Paper Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Research Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.details.paperContent}
              </p>
            </div>

            {/* Research Areas */}
            {item.details.researchAreas &&
              item.details.researchAreas.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Research Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.details.researchAreas.map((area, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 border border-blue-200"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            {/* Key Features */}
            {item.details.keyFeatures &&
              item.details.keyFeatures.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {item.details.keyFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-cyan-100 shrink-0 mt-0.5">
                          <span className="h-2 w-2 rounded-full bg-cyan-600" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Bottom CTA */}
            <div className="pt-4 border-t border-gray-200">
              {item.details.paperLink ? (
                <a
                  href={item.details.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center px-6 py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition-colors"
                >
                  Read Full Research Paper
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              ) : (
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full px-6 py-3 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
