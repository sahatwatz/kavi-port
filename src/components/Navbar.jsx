import React from "react";
import * as Motion from "motion/react-client";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div
          className="top-0 shadow-xl absolute w-screen screen-xxs screen-xss z-20 h-16
         text-black
        max-sm:w-screen
        max-md:w-screen
        max-lg:w-screen
        max-xl:w-248
        max-2xl:w-screen
        bg-white flex
     px-2 items-center justify-between max-sm:justify-start "
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
           max-sm:h-10 max-sm:ml-12 max-sm:mt-1"
            src="/favicon.ico"
            alt="logo"
          />
          <Motion.div
            initial={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.5, delay: 1 }}
            viewport={{ once: true }}
            className="p-2 flex gap-12 mr-16 text-primary px-4
           text-xl max-sm:justify-items-end max-sm:text-xs
           max-sm:gap-2 max-xl:gap-4 max-md:text-lg max-md:justify-end
           max-sm:justify-end max-md:ml-8 max-sm:mr-30"
          >
            <h1>
              <a onClick={() => scrollToSection("project-section")}>Project</a>
            </h1>
            <h1>
              <a onClick={() => scrollToSection("gallery-section")}>Sketches</a>
            </h1>
            <h1>
              <a onClick={() => scrollToSection("contact-section")}>Contact</a>
            </h1>
          </Motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
