import React from "react";

export const BackToTop = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className=" w-auto  flex justify-center mb-5">
        <a onClick={() => scrollToSection("top-section")}>
          <h1 className="text-lg rounded-full w-fit shadow-xl px-4 p-1  text-primary">
            Back to top
          </h1>
        </a>
      </div>
    </>
  );
};
