import React from "react";

function About() {
  return (
    <>
      <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
        <h1 className="font-['Founders Grotesk_X-Condensed'] text-[4vw] leading-[4vw] tracking-tighter">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell products, explain complex
          ideas, and hire great people.
        </h1>
        <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
          <diV className="w-1/2">
            <h1 className="text-7xl">Our approach:</h1>
            <button className="flex uppercase items-center gap-10 px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
              Read More
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </diV>
          <div className="w-1/2 h-[70vh] rounded-3xl bg-[#5a6924]">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
