import "./reset.css";
import "./index.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home.js";
import About from "./Pages/About";
import Contact from "./Pages/Contact.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
