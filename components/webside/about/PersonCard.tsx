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

import { motion, Variants } from "framer-motion";

interface PersonCardProps {
  member: TeamMember;
  highlight?: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

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
        className="group cursor-pointer overflow-hidden pt-3 pb-0 px-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:text-white hover:bg-primary hover:rounded-2xl"
        onClick={() => setIsOpen(true)}
      >
        <CardContent className="p-0">
          <div className="relative aspect-square w-full overflow-hidden bg-gray-100 rounded-2xl">
            <Image
              src={member.image}
              alt={member.name}
              width={702}
              height={462}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-3xl font-semibold mb-1 group-hover:text-white">
              {member.name}
            </h3>
            <p className="text-base md:text-lg font-medium text-primary group-hover:text-white/90">
              {member.role}
            </p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-primary text-white rounded-3xl p-0 border-0 shadow-2xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-8 md:p-10"
          >
            <DialogHeader>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <motion.div 
                  variants={itemVariants}
                  className="relative w-full md:w-48 aspect-square rounded-2xl overflow-hidden shrink-0 shadow-lg border border-white/10"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </motion.div>
                <div className="flex-1 space-y-4">
                  <motion.div variants={itemVariants}>
                    <DialogTitle className="text-3xl md:text-4xl font-bold tracking-tight">
                      {member.name}
                    </DialogTitle>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Badge variant="secondary" className="px-4 py-1 text-sm font-semibold uppercase tracking-wider bg-white/20 text-white border-0">
                      {member.role}
                    </Badge>
                  </motion.div>

                  {member.socialLinks && member.socialLinks.length > 0 && (
                    <motion.div variants={itemVariants} className="flex gap-4 pt-2">
                      {member.socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-200"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`${member.name}'s ${link.platform}`}
                        >
                          {getSocialIcon(link.platform)}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </DialogHeader>
            <motion.div variants={itemVariants}>
              <DialogDescription className="text-white/90 text-lg leading-relaxed mt-8 border-t border-white/10 pt-8">
                {member.bio}
              </DialogDescription>
            </motion.div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
