import React from "react";
import { Link } from "react-router-dom";

export const HomeButton = () => {
  return (
    <>
      <div className=" w-auto  flex justify-center mb-5">
        <Link to={"/"}>
          <a href="">
            <h1 className="text-2xl rounded-full w-fit shadow-xl px-4 p-1  text-primary">
              Home
            </h1>
          </a>
        </Link>
      </div>
    </>
  );
};
