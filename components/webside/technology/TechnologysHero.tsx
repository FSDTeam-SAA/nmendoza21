import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const TechnologysHero = () => {
  return (
    <section className="pt-16 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#000000] leading-tight mb-4">
              Advancing the Frontier of Drug Delivery
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Our technology is built on advanced biotechnology research and
              data-driven innovation. We use cutting-edge laboratory methods,
              automation, and analytical tools to deliver accurate, scalable,
              and reliable solutions. Every process is designed to meet global
              quality standards while ensuring precision, safety, and
              consistency across all services.
            </p>
            {/* <Button className="bg-primary text-white px-6 py-5" asChild>
              <a href="">Learn More</a>
            </Button> */}
          </div>
          <div className="relative w-full  h-100">
            <Image
              src="/images/technologyhero.jpg"
              alt="Programs hero"
              fill
              className="object-cover rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologysHero;
