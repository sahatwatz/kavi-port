import React from "react";
import { Link } from "react-router-dom";

export const Next = () => {
  return (
    <>
      <div className=" w-auto  flex justify-center mb-5">
        <Link to={"/second-project"}>
          <a href="">
            <h1 className="text-2xl rounded-full w-fit shadow-xl px-4 p-1  text-primary">
              →
            </h1>
          </a>
        </Link>
      </div>
    </>
  );
};
