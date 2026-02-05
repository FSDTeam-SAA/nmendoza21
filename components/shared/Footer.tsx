import React from "react";
import Image from "next/image";
import { footerData } from "@/data/homepagedata";

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
            <a
              href={footerData.publications.link}
              className="text-sm font-semibold hover:underline"
            >
              Read More →
            </a>
          </div>

          {/* Invested By */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {footerData.investedBy.title}
            </h3>
            <div className="flex flex-wrap gap-4">
              {footerData.investedBy.logos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-white rounded-full w-16 h-16 flex items-center justify-center relative"
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={48}
                    height={48}
                    className="object-contain"
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
            <div className="space-y-3">
              {footerData.newsCoverage.logos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-white rounded px-4 py-2 relative h-12 flex items-center"
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={120}
                    height={32}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {footerData.getInTouch.title}
            </h3>
            <div className="space-y-2 text-sm text-white/90">
              <p>{footerData.getInTouch.address}</p>
              <p>{footerData.getInTouch.city}</p>
              <p className="mt-4">
                <a
                  href={`mailto:${footerData.getInTouch.email}`}
                  className="hover:underline"
                >
                  {footerData.getInTouch.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${footerData.getInTouch.phone}`}
                  className="hover:underline"
                >
                  {footerData.getInTouch.phone}
                </a>
              </p>
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
