import React, { useEffect } from "react";
import { preLoaderAnimate } from "../animations";
import "../css/preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnimate();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Architecture</span>
        <span>for</span>
        <span>Everyone</span>
      </div>
    </div>
  );
};

export default PreLoader;
