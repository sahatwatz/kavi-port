import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Split from "../components/Split";
import { BackToTop } from "../components/BackToTop";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <Split />
      <Gallery />
      <Profile />
      <BackToTop />
      <Footer />
    </>
  );
};

export default Landing;
