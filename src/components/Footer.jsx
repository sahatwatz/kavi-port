import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <div
          className="w-screen h-1/2 max-sm:text-xs
       bg-white text-blue-950 p-5 rounded-t-4xl shadow-2xl flex-col justify-center items-center"
        >
          <h1>
            <span className="font-serif">&copy;</span> 2025 Built by{" "}
            <a href="https://sahatwatz.vercel.app/">Sahatwatz</a>
          </h1>
          <h2> Beta Version</h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
