import React from "react";
import * as Motion from "motion/react-client";

const Navbar = () => {
  return (
    <>
      <div
        className="absolute w-screen screen-xxs screen-xss z-20 h-16  text-black max-md:w-screen max-sm:w-screen
        max-lg:w-screen max-xl:w-248 bg-white flex
     px-2 items-center justify-between max-sm:justify-center "
      >
        <Motion.img
          animate={{
            scale: [4, 5, 5, 1, 1],
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["0%", "0%", "50%", "50%", "50%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1
          }}
          className="w-12 h-12 max:sm:z-20 rounded-full max-sm:w-10
           max-sm:h-10 max-sm:ml-1 max-sm:mt-1"
          src="/favicon.ico"
          alt="logo"
        />
        <Motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -1500 }}
          transition={{ duration: 2.5, delay: 2.2 }}
          className="p-2 flex gap-16 mr-16 px-8 text-xl max-md:hidden max-lg:hidden"
        >
          <h1>
            <a href="#">Project</a>
          </h1>
          <h1>
            <a href="#">Sketches</a>
          </h1>
          <h1>
            <a href="#">Contact</a>
          </h1>
        </Motion.div>
      </div>
    </>
  );
};

export default Navbar;
