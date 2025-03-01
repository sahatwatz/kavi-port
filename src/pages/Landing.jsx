import React from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Split from "../components/Split";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <Split />
      <Gallery />
      <Profile />
      <Footer />
    </>
  );
};

export default Landing;
