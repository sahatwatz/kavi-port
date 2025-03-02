import React from "react";
import * as Motion from "motion/react-client";

const Hero = () => {
  return (
    <>
      <div
        id="top-section"
        className="flex flex-row max-md:flex-col-reverse
       h-screen justify-center items-center relative max-sm:mb-80 max-sm:mt-10
        max-xl:mt-20 max-md:mb-60 max-lg:mb-40 mt-15 mb-20 max-xl:mb-40"
      >
        {/* Left Section (Text Content) */}
        <Motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1 }}
          className="md:w-2/2 p-8 md:p-16 flex-row -mt-30
          max-2xl:mt-0 max-xl: max-lg:mt-10 max-md:-mt-0 max-sm: justify-center items-center"
        >
          {/* Logo (Replace with your actual logo) */}

          {/* Text Content */}
          <p className="text-xs p-5 text-primary  mb-4">
            "Creating spaces that harmonize with their environment and inspire
            those who inhabit them is my driving passion."
          </p>

          <h1
            className="
          text-7xl max-lg:text-6xl  max-md:text-4xl  max-sm:text-2xl max-xl:text-4xl mb-6 "
          >
            Hi,{" "}
            <span
              className="text-7xl max-sm:text-lg max-md:text-2xl max-lg:text-3xl
            max-xl:text-4xl"
            >
              my name <br /> is{" "}
            </span>
            <Motion.b
              animate={{
                color: [
                  "#bf2121",
                  "#bf7321",
                  "#bfba21",
                  "#53bf21",
                  "#21bfa7",
                  "#2121bf",
                  "#a721bf",
                  "#bf2129",
                  "bf2121"
                ]
              }}
              transition={{ duration: 12, repeat: Infinity }}
              className="text-8xl max-lg:text-6xl  max-md:text-4xl "
            >
              Kavipat
            </Motion.b>
            <Motion.span
              animate={{
                color: [
                  "#ff4524",
                  "#ffde24",
                  "#95ff24",
                  "#18f5f5",
                  "#2018f5",
                  "#d418f5",
                  "#f5183d",
                  "#ff4524"
                ]
              }}
              transition={{ duration: 12, repeat: Infinity }}
              className="text-yellow-400 text-6xl"
            >
              .
            </Motion.span>
          </h1>

          <p className="text-3xl opacity-50 text-primary max-sm:text-base  max-md:text-2xl max-lg:text-3xl max-xl:text-4xl">
            I'm an <b>Architect</b> from Phuket, Thailand
            <span className="text-yellow-400 text-5xl">.</span>
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 justify-center items-center mt-16">
            {/* <button
              className="bg-blue-950 hover:bg-blue-900
             max-sm:text-xs text-white py-2 px-4 rounded"
            >
              Get started
            </button> */}
            <a
              href="https://issuu.com/neanderthalensis/docs/portfolio_kavipat_akkabuth"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-blue-950 hover:text-blue-900 max-sm:text-base
              rounded-lg py-2 px-4 border-1 border-blue-950"
            >
              Resume →
            </a>
          </div>
        </Motion.div>

        {/* Right Section (Image) */}
        <Motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1 }}
          className="md:w-1/2 max-sm:w-2/3 relative h-screen max-sm:mt-55  mr-20 max-md:mr-0 rounded-2xl"
        >
          <img
            src="/img/image/cover.png" // Replace with your image URL
            alt="Laptop"
            className="w-full h-6/7 -mt-10 max-md:h-full object-cover shadow-2xl rounded-2xl"
          />
        </Motion.div>
      </div>
    </>
  );
};

export default Hero;
