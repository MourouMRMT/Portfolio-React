import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import MainCard from "./components/MainCard";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialise AOS pour les animations au défilement
  }, []);

  return (
    <>
      <Helmet>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my web developer portfolio!" />
      </Helmet>
      <Navbar />
      <MainCard />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default App;
