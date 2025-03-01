import React from "react";
import * as Motion from "motion/react-client";
import { Link } from "react-router-dom";

const SecondNavbar = () => {
  return (
    <>
      <div
        className="top-0 absolute w-screen screen-xxs screen-xss z-20 h-16 shadow-2xl text-black max-md:w-screen max-sm:w-screen
        max-lg:w-screen max-xl:w-248 bg-white flex
     px-2 items-center justify-between max-sm:justify-center "
      >
        <Motion.img
          animate={{
            scale: [4, 5, 5, 1, 1],
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["0%", "0%", "50%", "50%", "50%"]
          }}
          whileTap={{
            scale: [4, 5, 5, 1, 1],
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["0%", "0%", "50%", "50%", "50%"]
          }}
          transition={{
            duration: 1,
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
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="p-2 flex justify-end gap-16 mr-4 px-8 text-xl"
        >
          <h1>
            <Link to="/">
              <a href="#">Home</a>
            </Link>
          </h1>
        </Motion.div>
      </div>
    </>
  );
};

export default SecondNavbar;
