import React from "react";
import * as Motion from "motion/react-client";

const Split = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1 }} // ระยะเวลาแอนิเมชัน
          className="w-1/10 h-[1px] bg-blue-950 m-5 max-md:hidden"
        ></Motion.div>
        <Motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-5xl max-sm:text-2xl"
        >
          Sketches
        </Motion.h1>
        <Motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-1/10 h-[1px] bg-blue-950  m-5 max-md:hidden"
          //   onViewportEnter={() => console.log("right Enter!")}
          //   onViewportLeave={() => console.log("right Exit!")}
        ></Motion.div>
      </div>
    </>
  );
};

export default Split;
