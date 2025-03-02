import React, { useEffect } from "react";
import SecondNavbar from "../components/SecondNavbar";
import Condo from "../components/Condo";
import Footer from "../components/Footer";
import { NextOne } from "../components/NextOne";
import { HomeButton } from "../components/HomeButton";

const SecondProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SecondNavbar />
      <Condo />
      <HomeButton />
      <NextOne />
      <Footer />
    </>
  );
};

export default SecondProject;
