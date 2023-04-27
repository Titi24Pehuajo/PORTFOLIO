import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import AboutMe from "./components/AboutMe";
import Proyects from "./components/Proyects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <SocialLinks />
      <Proyects />
      <Experience />
    </>
  );
}

export default App;
