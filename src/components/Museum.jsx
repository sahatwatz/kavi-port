import React from "react";
import * as Motion from "motion/react-client";

const images = [
  "/img/project/project-1-1.png",
  "/img/project/project-1-2.png",
  "/img/project/project-1-3.png",
  "/img/project/project-1-4.png",
  "/img/project/project-1-5.png",
  "/img/project/project-1-6.png",
  "/img/project/project-1-7.png",
  "/img/project/project-1-8.png"
];

const Museum = () => {
  return (
    <section className="flex flex-col items-center justify-center w-screen screen-xxs screen-xss">
      <div>
        <Motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 1 }}
          className="mb-8 p-4 text-4xl max-md:text-xl max-sm:text-base mt-24 text-primary rounded-full
         shadow-lg font-medium"
        >
          Phanom Surin Museum
        </Motion.h1>
      </div>
      {images.map((src, index) => (
        <div
          key={index}
          className="mb-12 break-inside-avoid  flex justify-center items-center"
        >
          <Motion.img
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-100px" }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 1
            }}
            whileHover={{ scale: 1.5, zIndex: 20 }}
            whileTap={{ scale: 2 }}
            src={src}
            className="w-2/3 object-cover shadow-md rounded-lg"
          />
        </div>
      ))}
      <div></div>
    </section>
  );
};

export default Museum;
