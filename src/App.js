import About from "./components/About";
import Contact from "./components/Contact";
import Eduction from "./components/Education/Eduction";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects/Projects";

import Skills from "./components/Skills";

import Sociallinks from "./components/Sociallinks";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Eduction />
      <Skills />
      <Projects />
      <Contact />
      




      <Sociallinks />

    </div>
  );
}

export default App;
