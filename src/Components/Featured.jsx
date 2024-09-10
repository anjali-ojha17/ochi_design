import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()]; // Two separate animations for FYDE and VISE

  const handleHover = (index) => {
    cards[index].start({ y: 0 }); // Trigger animation on hover
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" }); // Reset animation when hover ends
  };

  return (
    <div data-scroll data-scroll-section className="relative w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl font-['Founders Grotesk_X-Condensed'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          {/* FYDE Card */}
          <motion.div
            onHoverStart={() => handleHover(0)} // Use cards[0] for FYDE
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] font-semibold left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tight">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index} // Add a key prop for React list rendering
                  initial={{ y: "100%" }} // Start animation from below
                  animate={cards[0]} // Use cards[0] for FYDE
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05, // Stagger each letter
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="FYDE Project"
              />
            </div>
          </motion.div>

          {/* VISE Card */}
          <motion.div
            onHoverStart={() => handleHover(1)} // Use cards[1] for VISE
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] font-semibold right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tight">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index} // Add a key prop for React list rendering
                  initial={{ y: "100%" }} // Start animation from below
                  animate={cards[1]} // Use cards[1] for VISE
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05, // Stagger each letter
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="VISE Project"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
