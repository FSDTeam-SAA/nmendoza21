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
            {/* <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              {pipelineSubtitle}
            </p> */}
          </motion.div>
        </div>
      <div className=" w-full flex justify-start  items-start aspect-5/3 pb-30">
        <Image className="w-full   mt-10 aspect-5/3" src={"/programs/2.png"} alt="program" width={1000} height={700} />
      </div>
    </div>
  );
};

export default NewProgram;
