import Navbar from "./components/navbar.jsx";
import "./App.css";
import Home from "./section/home.jsx";
import Footer from "./components/footer.jsx";
import Achievement from "./section/Achievement.jsx";
import Contact from "./section/Contact.jsx";
import Skills from "./section/Skills.jsx";
import About from "./section/About.jsx";
import Project from "./section/Project.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" name="home">
        <Home />
      </section>
      <section id="about" name="about">
        <About />
      </section>
      <section id="skills" name="skills">
        <Skills />
      </section>
      <section id="project" name="project">
        <Project />
      </section>
      <section id="achievement" name="achievement">
        <Achievement />
      </section>
      <section id="contact" name="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
