import React from "react";
import SecondNavbar from "../components/SecondNavbar";

const FirstProject = () => {
  return (
    <>
      <SecondNavbar />
      <div className="flex items-center justify-center bg-white h-auto w-screen">
        <div className="flex-col items-center justify-center border-4 ">
          <div className="flex items-center justify-center border-4 p-8  mt-30">
            <h1 className="text-8xl">Phanom Surin</h1>
          </div>
          <div className="flex items-center justify-center border-4 p-8  mt-0">
            <img
              className="rounded-4xl w-4xl shadow-2xl"
              src="../public/img/image/project1.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center border-4 p-8 mt-30">
            <img
              className="rounded-4xl w-4xl border-gray-200"
              src="../public/img/image/project1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstProject;
