// src/components/StartupMachinery.jsx
import React from "react";
import "../assets/css/StartupMachinery.css";

// Image imports
import aa from "../../assets/img/1 (4).webp";
import bb from "../../assets/img/1 (49).webp";
import cc from "../../assets/img/1 (45).webp";
import dd from "../../assets/img/1 (48).webp";
import ee from "../../assets/img/1 (5).webp";
import ff from "../../assets/img/1 (46).webp";
import gg from "../../assets/img/1 (6).webp";

const machineryItems = [
  {
    title: "Branding Bay",
    desc: "Strategy, naming, visual identity & digital presence — the first impression that sticks.",
    img: aa,
  },
  {
    title: "Growth Engine Room",
    desc: "Performance marketing, campaigns, and channel strategy — to get your first 100, and your first 1,000.",
    img: bb,
  },
  {
    title: "Investor Dock",
    desc: "Pitch refinement, fundraise strategy, and real investor connects — not templates, but traction-backed stories.",
    img: cc,
  },
  {
    title: "Finance & Planning Desk",
    desc: "Strategic financial modeling, budgeting and accounting support — to help you understand your burn, runway, and fundraising needs with clarity.",
    img: dd,
  },
  {
    title: "Talent Conveyor",
    desc: "Access to functional experts & hiring support — for your first hires and leadership roles.",
    img: ee,
  },
  {
    title: "Legal Station",
    desc: "From entity setup to IP protection to compliance — handled with precision, not paperwork chaos.",
    img: ff,
  },
  {
    title: "BizDev Assembly",
    desc: "Support in acquiring early customers, pilot partnerships, and strategic growth channels.",
    img: gg,
  },
];

const StartupMachinery = () => {
  return (
    <section className="machinery-section py-5">
      <div className="container text-center">
        <h6 className="text-warning">OUR STARTUP MACHINERY</h6>
        <h2 className="mb-5 text-muted font-italic">
          Your Dream. Our Factory Floor.
        </h2>
        <div className="row justify-content-center">
          {machineryItems.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-4 mb-4" key={index}>
              <div className="card-box position-relative overflow-hidden">
                <img src={item.img} alt={item.title} className="img-fluid w-100 h-100 object-cover" />
                <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                <div className="card-content position-absolute top-50 start-50 translate-middle text-white p-3">
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupMachinery;
