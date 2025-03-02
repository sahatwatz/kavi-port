import React, { useEffect } from "react";
import SecondNavbar from "../components/SecondNavbar";
import Museum from "../components/Museum";
import Footer from "../components/Footer";
import { Next } from "../components/Next";
import { HomeButton } from "../components/HomeButton";

const FirstProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SecondNavbar />
      <Museum />
      <HomeButton />
      <Next />
      <Footer />
    </>
  );
};

export default FirstProject;
