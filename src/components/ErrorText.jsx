import React from "react";

const ErrorText = () => {
  return (
    <>
      <section className="flex justify-center items-center w-screen screen-xxs h-screen">
        <div className="flex flex-col justify-center  items-center gap-4  rounded-2xl p-12 w-auto h-auto">
          <h1 className="text-2xl md:text-6xl">
            <b>404 Error</b>
          </h1>
          <h1 className="text-xl md:text-3xl">Page not found!</h1>
        </div>
      </section>
    </>
  );
};

export default ErrorText;
