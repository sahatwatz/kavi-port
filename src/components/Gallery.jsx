import React from "react";
import * as Motion from "motion/react-client";

import "../css/fadeUp.css";

const Gallery = () => {
  const images = [
    "/img/sketches/s1.png",
    "/img/sketches/s3.png",
    "/img/sketches/s2.png",
    "/img/sketches/s4.png",
    "/img/sketches/s5.png",
    "/img/sketches/s6.png",
    "/img/sketches/s7.png",
    "/img/sketches/s8.png",
    "/img/sketches/s9.png",
    "/img/sketches/s10.png",
    "/img/sketches/s11.png",
    "/img/sketches/s12.png",
    "/img/sketches/s13.png",
    "/img/sketches/s14.png",
    "/img/sketches/s15.png"
  ];

  return (
    <>
      <div
        id="gallery-section"
        className="flex justify-center items-center mt-0 relative"
      >
        <div
          className="max-w-2/3  px-12 justify-center items-center columns-1
        sm:columns-2 lg:columns-3 py-10 md:py-20 gap-8"
        >
          {images.map((src, index) => (
            <div key={index} className="mb-4 break-inside-avoid ">
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
                className="w-full object-cover shadow-md rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
