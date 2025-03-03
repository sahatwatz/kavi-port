import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import FirstProject from "./pages/FirstProject";
import SecondProject from "./pages/SecondProject";
import ThirdProject from "./pages/ThirdProject";
import NoPage from "./pages/NoPage";
import PreLoader from "./components/PreLoader";

function App() {
  return (
    <>
      <PreLoader />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/first-project" element={<FirstProject />} />
        <Route path="/second-project" element={<SecondProject />} />
        <Route path="/third-project" element={<ThirdProject />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
