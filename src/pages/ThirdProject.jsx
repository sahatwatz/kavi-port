import React, { useEffect } from "react";
import SecondNavbar from "../components/SecondNavbar";
import Avenue from "../components/Avenue";
import Footer from "../components/Footer";
import { HomeButton } from "../components/HomeButton";
import { Back } from "../components/Back";

const ThirdProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SecondNavbar />
      <Avenue />
      <HomeButton />
      <Back />
      <Footer />
    </>
  );
};

export default ThirdProject;
