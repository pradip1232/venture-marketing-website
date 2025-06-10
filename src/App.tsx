import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Founder from "./pages/Founder";
import Investor from "./pages/Investor";
import Community from "./pages/Community";
import Company from "./pages/Company";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/community" element={<Community />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;