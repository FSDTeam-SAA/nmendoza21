import React from "react";
import Image from "next/image";
import { footerData } from "@/data/homepagedata";
import { BriefcaseBusiness, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Publications */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {footerData.publications.title}
            </h3>
            <p className="text-sm text-white/90 mb-4">
              {footerData.publications.description}
            </p>
           <p>
            Robotically handled whole-tissue culture system for the screening of oral drug formulations
           </p>
           <p>
            Robotic screening of intestinal drug absorption
           </p>
          </div>

          {/* Invested By */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {footerData.investedBy.title}
            </h3>
            <div className="flex flex-col gap-2">
              {footerData.investedBy.logos.map((logo, index) => (
                <div
                  key={index}
                  className=" w-full flex items-center justify-center relative"
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={228}
                    height={58}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* News Coverage */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {footerData.newsCoverage.title}
            </h3>
            <div>
           <div className="flex gap-5 items-center">
               <div>
                        <Image
                    src={'/images/nature.png'}
                    alt={'Nature'}
                    width={78}
                    height={40}
                    className="object-cover"
                  />
               </div>
               <div>
                        <Image
                    src={'/images/stat.png'}
                    alt={'Stat'}
                    width={87}
                    height={22}
                    className="object-cover"
                  />
               </div>
           </div>
            <div className="space-y-6 mt-3">
              {footerData.newsCoverage.logos.map((logo, index) => (
                <div
                  key={index}
                  className=" rounded   relative  flex items-center"
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={197}
                    height={120}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {footerData.getInTouch.title}
            </h3>
            <div className="space-y-2 text-sm text-white/90">
              <p className="flex items-center gap-2">
               <BriefcaseBusiness />  {footerData.getInTouch.address}
              </p>
              <p className="flex items-center gap-2"    >
              <Mail /> {footerData.getInTouch.email} 
              </p>
              <p className=" flex items-center gap-2">
              
            
         
                 <MapPin /> {footerData.getInTouch.city}
        
              </p>
              {/* <p className="flex items-center gap-2">
                <a
                  href={`tel:${footerData.getInTouch.phone}`}
                  className="hover:underline"
                >
                  {footerData.getInTouch.phone}
                </a>
              </p> */}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
