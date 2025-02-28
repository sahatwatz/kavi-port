import "./App.css";
import Gallery from "./components/Gallery";
import GridBackground from "./components/GridBackground";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Split from "./components/Split";
import Topic from "./components/Topic";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <Split />
      {/* <Topic /> */}
      <Gallery />
      <Profile />
    </>
  );
}

export default App;
