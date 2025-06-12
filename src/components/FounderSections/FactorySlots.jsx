// src/components/FactorySlots.jsx
import React from "react";
import "../assets/css/FactorySlots.css";

import rr from "../../assets/img/1 (7).webp";

const FactorySlots = () => {
  return (
    <section className="factory-section py-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Left Text */}
          <div className="col-md-6 mb-4 mb-md-0 fade-in-left">
            <h6 className="text-warningg">FACTORY SLOTS ARE LIMITED</h6>
            <p className="fw-boldde mb-1">We will build with</p>
            <p className="fw-boldde text-dark mb-2">
              10 High-Conviction Founders
            </p>
            <p>
              this year — bold thinkers with serious intent. Whether you're
              starting with a raw idea or a rough prototype that needs
              direction, Squib is your assembly line to real traction.
            </p>
            <p className="italic-text mb-4">
              <em>We Don’t Just Bet On You — We Build With You.</em>
            </p>
            <div className="button-group">
              <button className="btn btn-outline-dark shadow-sm me-3">
                Apply to the Factory
              </button>
              <button className="btn btn-outline-dark shadow-sm">
                Talk to Our Team
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-6 fade-in-right text-center">
            <img
              src={rr}
              alt="Factory Slots"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactorySlots;
