import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import PageWrapper from "./components/PageWrapper";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <div className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>

        <Footer />
    </main>
  );
}

export default App;
