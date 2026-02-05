"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { TeamMember } from "@/data/about";
import { Linkedin, Twitter, GraduationCap } from "lucide-react";

interface PersonCardProps {
  member: TeamMember;
  highlight?: boolean;
}

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "linkedin":
      return <Linkedin className="h-4 w-4" />;
    case "twitter":
      return <Twitter className="h-4 w-4" />;
    case "scholar":
      return <GraduationCap className="h-4 w-4" />;
    default:
      return null;
  }
};

export default function PersonCard({
  member,
  highlight = false,
}: PersonCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        className={`group cursor-pointer overflow-hidden py-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
          highlight ? "ring-2 ring-cyan-400" : ""
        }`}
        onClick={() => setIsOpen(true)}
      >
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={`p-6 ${highlight ? "bg-cyan-400" : "bg-white"}`}>
            <h3
              className={`text-xl font-semibold mb-1 ${
                highlight ? "text-white" : "text-gray-900"
              }`}
            >
              {member.name}
            </h3>
            <p
              className={`text-sm ${
                highlight ? "text-white/90" : "text-cyan-500"
              }`}
            >
              {member.role}
            </p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative w-full md:w-48 aspect-square rounded-lg overflow-hidden shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 192px"
                />
              </div>
              <div className="flex-1">
                <DialogTitle className="text-2xl mb-2">
                  {member.name}
                </DialogTitle>
                <Badge variant="secondary" className="mb-4">
                  {member.role}
                </Badge>
                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="flex gap-3 mt-4">
                    {member.socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-cyan-500 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${member.name}'s ${link.platform}`}
                      >
                        {getSocialIcon(link.platform)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </DialogHeader>
          <DialogDescription className="text-gray-700 text-base leading-relaxed mt-4">
            {member.bio}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
