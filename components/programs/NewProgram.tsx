import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
const NewProgram = () => {
  return (
    <div className="container mx-auto ">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-2 "
        >
          <h2 className="text-[40px] font-semibold  text-primary mb-2 tracking-tight">
            Current Active Pipeline
          </h2>
          <p className="text-gray-500 text-2xl md:text-4xl max-w-3xl  font-medium leading-relaxed">
            Partner Pipeline
          </p>
        </motion.div>
      </div>
      <div className=" w-full flex justify-start  items-start aspect-5/3 ">
        <Image
          className="w-full   mt-0 aspect-5/3"
          src={"/programs/3.svg"}
          alt="program"
          width={1000}
          height={700}
        />
      </div>
      <p className="text-gray-500 text-2xl md:text-4xl max-w-3xl  font-medium leading-relaxed ">
        Internal Pipeline
      </p>
      <div className=" w-full flex justify-start  items-start aspect-5/3 ">
        <Image
          className="w-full   mt-0 aspect-5/3"
          src={"/programs/4.svg"}
          alt="program"
          width={1000}
          height={700}
        />
      </div>
    </div>
  );
};

export default NewProgram;
