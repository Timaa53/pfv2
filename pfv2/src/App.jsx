import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Projects from "./pages/projects/Projects"
import Hobbies from "./pages/hobbies/Hobbies"
import Contact from "./pages/contact/Contact"


function App() {
  const location = useLocation();

  useEffect(() => {
    const classes = {
      "/": "home-body",
      "/about": "about-body",
      "/projects": "projects-body",
      "/hobbies": "hobbies-body",
      "/contact": "contact-body",
    };
    document.body.className = classes[location.pathname] || "";
  }, [location]);

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default App
