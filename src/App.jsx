import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
