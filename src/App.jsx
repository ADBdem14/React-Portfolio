import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Chatbox from "./components/Chatbox";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="app-shell">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Chatbox />
    </>
  );
}

export default App;
