import React from "react";
import Image from "next/image";
import { footerData } from "@/data/homepagedata";
import { BriefcaseBusiness, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#003051] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Invested By */}
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold mb-0 flex items-center gap-2">
              <span className="w-2 h-8 rounded-full inline-block"></span>
              {footerData.investedBy.title}
            </h3>
            <div className="flex flex-col gap-6 md:gap-0">
              {footerData.investedBy.logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start transition-colors"
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={logo.name === "MIT" ? 239 : 60}
                    height={logo.name === "Harvard" ? 144 : 60}
                    className={cn(
                      "object-cover ",
                      logo.name === "MIT"
                        ? "w-32 md:w-[239px]  mb-6 mt-6"
                        : "w-28 md:w-[170px] ",
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* News Coverage */}
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold mb-6 flex items-center gap-2">
              <span className="w-2 h-8 rounded-full inline-block"></span>
              {footerData.newsCoverage.title}
            </h3>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <div className="p-2 rounded-lg">
                  <Image
                    src={"/images/nature.svg"}
                    alt={"Nature"}
                    width={60}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <div className="p-2 rounded-lg">
                  <Image
                    src={"/images/stat.svg"}
                    alt={"Stat"}
                    width={70}
                    height={20}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="space-y-6">
                {footerData.newsCoverage.logos.map((logo, index) => {
                  let dimensions = { w: 120, h: 40, class: "w-24" };
                  if (logo.name === "EuroNews")
                    dimensions = { w: 197, h: 64, class: "w-32 md:w-[197px]" };
                  else if (logo.name === "CNN")
                    dimensions = { w: 197, h: 30, class: "w-32 md:w-[197px]" };
                  else if (logo.name === "BBC")
                    dimensions = { w: 94, h: 29, class: "w-20 md:w-[94px]" };

                  return (
                    <div key={index} className="">
                      <div
                        key={index}
                        className="flex items-center justify-start transition-colors"
                      >
                        <Image
                          src={logo.image}
                          alt={logo.name}
                          width={dimensions.w}
                          height={dimensions.h}
                          className={cn(
                            "object-contain h-auto",
                            dimensions.class,
                          )}
                        />
                      </div>
                    </div>
                  );
                })}
                <div className="flex  items-center gap-5">
                  <div className="p-2 rounded-lg">
                    <Image
                      src={"/images/scientific.svg"}
                      alt={"Nature"}
                      width={60}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <div className="p-2 rounded-lg">
                    <Image
                      src={"images/mitnew.svg"}
                      alt={"Stat"}
                      width={70}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold mb-6 flex items-center gap-2">
              <span className="w-2 h-8  rounded-full inline-block"></span>
              {footerData.getInTouch.title}
            </h3>
            <div className="space-y-4">
              <div className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:ring-2 ring-white/20 transition-all">
                  <BriefcaseBusiness size={18} />
                </div>
                <p className="text-sm text-white/80 leading-relaxed pt-2">
                  {footerData.getInTouch.address}
                </p>
              </div>

              <div className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:ring-2 ring-white/20 transition-all">
                  <Mail size={18} />
                </div>
                <p className="text-sm text-white/80 leading-relaxed pt-2">
                  {footerData.getInTouch.email}
                </p>
              </div>

              <div className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:ring-2 ring-white/20 transition-all">
                  <MapPin size={18} />
                </div>
                <p className="text-sm text-white/80 leading-relaxed pt-2">
                  {footerData.getInTouch.city}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} ViVTEX. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div> */}
        <div>
          <p className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-center items-center gap-4 text-xs md:text-sm text-white/60">
            All Content Ⓒ Vivtex Corporation 2026 | All rights reserved | <a target="_blank" href="https://vivtex.com/wp-content/uploads/2025/02/Privacy-Policy-25.pdf" className="hover:text-white transition-colors">Privacy Policy</a> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
