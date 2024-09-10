import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textStructure mt-52 px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker overflow-hidden">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" mr-5 w-[8vw] h-[5.5vw] rounded-md relative top-[1.7vw] bg-red-500"
                  >
                    <img
                      className="w-full h-full bg-cover"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="flex items-center uppercase text-[8vw] h-full leading-[8vw] tracking-tight font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="text-md font-lighter tracking-tight leading-none">
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full text-white">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
