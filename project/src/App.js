import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./reset.css";
import "./index.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home.js";
import About from "./Pages/About";
import Contact from "./Pages/Contact.js";

import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import ErrorPage from "./ErrorPage/ErrorPage";
import SignUpModal from "./SignUp/SignUpModal";
import LoginModal from "./Login/LoginModal";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupmodal" element={<SignUpModal />} />
          <Route path="/loginmodal" element={<LoginModal />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
