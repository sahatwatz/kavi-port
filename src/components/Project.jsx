import React from "react";
import * as Motion from "motion/react-client";

const Project = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-1/10 h-[1px] bg-blue-950 m-5 max-md:hidden"
        ></Motion.div>
        <Motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 1 }}
          className="text-5xl"
        >
          Projects
        </Motion.h1>
        <Motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-1/10 h-[1px] bg-blue-950  m-5 max-md:hidden"
        ></Motion.div>
      </div>
      <div
        className="flex p-8
       justify-center items-center mt-12 mb-24 gap-16 max-lg:flex-col-reverse"
      >
        <Motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-sm max-lg:max-w-xl max-sm:max-w-sm bg-white border  border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img class="rounded-t-lg" src="/img/image/project1.png" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl  tracking-tight text-blue-950 dark:text-white">
                <b>Phanom Surin</b> <span className="text-lg">Museum</span>
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left pl-4">
              Museum for preserving the Phanom Surin shipwreck and knowledge of
              history, archeology, wastewater management.
            </p>
            <button
              className="bg-blue-950 hover:bg-blue-900 text-white
            font-bold py-2 px-4 rounded"
            >
              Read more →
            </button>
          </div>
        </Motion.div>
        <Motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1 }}
          class="max-w-sm max-lg:max-w-xl max-sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img class="rounded-t-lg" src="/img/image/project2.png" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl  tracking-tight text-blue-950 dark:text-white">
                <b>The Terrarium</b> <span className="text-lg">Museum</span>
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left pl-4">
              The condominium for an inclusive living with variety of facilities
              that help users feel relax and equal.
            </p>
            <button
              className="bg-blue-950 hover:bg-blue-900 text-white
            font-bold py-2 px-4 rounded"
            >
              Read more →
            </button>
          </div>
        </Motion.div>

        <Motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1 }}
          class="max-w-sm max-lg:max-w-xl max-sm:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img class="rounded-t-lg" src="/img/image/project3.png" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl  tracking-tight text-blue-950 dark:text-white">
                <b>Royal City</b> <span className="text-lg">Avenue</span>
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left pl-4">
              The relaxing atmosphere building full of activities that support
              learning and working habits.
            </p>
            <button
              className="bg-blue-950 hover:bg-blue-900 text-white
            font-bold py-2 px-4 rounded"
            >
              Read more →
            </button>
          </div>
        </Motion.div>
      </div>
    </>
  );
};

export default Project;
