import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Founder from "./pages/Founder";
import Investor from "./pages/Investor";
import Community from "./pages/Community";
import Company from "./pages/Company";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  const location = useLocation();

  const validPaths = ["/", "/founder", "/investor", "/community", "/company"];

  const isValidPath = validPaths.includes(location.pathname);

  return (
    <>
      <div className={isValidPath ? "" : "nepar"}  >
        {!isValidPath && <Navbar />}

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/community" element={<Community />} />
        <Route path="/company" element={<Company />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
