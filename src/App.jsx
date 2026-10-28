import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BeyondTech from "./components/BeyondTech"

function App() {
  return (
    <div className="site">

      {/* Background Effects */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <div className="nebula"></div>

      <div className="planet planet-1"></div>
      <div className="planet planet-2"></div>

      <div className="aurora"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Achievements />

        <Education />

        <BeyondTech />  
        
        <Contact />

      </main>

      <Footer />

    </div>
  );
}

export default App;