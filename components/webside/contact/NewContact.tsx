import InViewAnimationWrapper from "@/components/shared/InViewAnimationWrapper";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewContact = () => {
  return (
    <div className="container mx-auto max-w-6xl px-4 my-16 md:my-24">
      {/* Heading */}
      <section className="mb-16">
        <InViewAnimationWrapper animation="slideInUp" duration={800}>
          <h1 className="text-3xl md:text-5xl font-bold text-primary">
            Contact Us
          </h1>
          <div className="w-20 h-1 bg-primary mt-4 rounded-full"></div>
        </InViewAnimationWrapper>
      </section>

      {/* Boston Office */}
      <div className="grid grid-cols-2 gap-8 items-stretch mb-16">
        {/* Text Card */}
        <div className="w-full bg-primary text-white p-8 md:p-10 rounded-2xl shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">US Office</h2>
            <p className="text-white/90">
              135 William T Morrissey Blvd, Suite P101
            </p>
            <p className="text-white/90">Boston, MA 02125, USA</p>
          </div>

          <Link
            className="mt-8 inline-block text-sm font-medium border-b-2 border-white hover:opacity-80 transition"
            href="https://www.google.com/maps/place/Vivtex/@42.3159972,-71.0493791,17z/data=!3m1!4b1!4m6!3m5!1s0x89e3714e4b51f687:0xff4e5bd3c6f26a60!8m2!3d42.3159972!4d-71.0493791!16s%2Fg%2F11jgc1b4jc?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Map
          </Link>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={"/contact/Boston.jpg"}
            alt="Boston Office"
            width={700}
            height={300}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* Swiss Office */}

      <div className=" grid grid-cols-2 gap-8 items-stretch mb-16">
        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={"/contact/Zurich.avif"}
            alt="Zurich Office"
            width={700}
            height={300}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Text Card */}
        <div className="w-full bg-primary text-white p-8 md:p-10 rounded-2xl shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Swiss Office</h2>
            <p className="text-white/90">
              Wagistrasse 13
            </p>
            <p className="text-white/90">8952, Zurich, Switzerland</p>
          </div>

          <Link
            className="mt-8 inline-block text-sm font-medium border-b-2 border-white hover:opacity-80 transition"
            href="https://www.google.com/maps/place/Wagistrasse+13,+8952+Schlieren,+Switzerland/@47.399309,8.4572774,17z/data=!3m1!4b1!4m6!3m5!1s0x47900b89170b9da1:0xab3446137c738193!8m2!3d47.399309!4d8.4572774!16s%2Fg%2F11q2vw9c76?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Map
          </Link>
        </div>
      </div>

      <div className=" mt-10 grid grid-cols-3 gap-10  bg-[#ced6d8] p-10 text-white">
        <div>
          <h3 className=" text-primary font-bold text-xl text- mb-3">
            GENERAL
          </h3>
          <Link
            className=" cursor-pointer hover:border-b border-black text-black"
            href="mailto:info@vivtex.com"
          >
            info@vivtex.com
          </Link>
        </div>
        <div>
          <h3 className=" text-primary font-bold text-xl mb-3">MEDIA</h3>
          <Link
            className=" cursor-pointer hover:border-b border-black text-black"
            href="mailto:media@vivtex.com"
          >
            media@vivtex.com
          </Link>
        </div>
        <div>
          <h3 className=" text-primary font-bold text-xl mb-3">RECRUITING</h3>
          <Link
            className=" cursor-pointer hover:border-b  border-black text-black"
            href="mailto:recruiting@vivtex.com"
          >
            recruiting@vivtex.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContact;
