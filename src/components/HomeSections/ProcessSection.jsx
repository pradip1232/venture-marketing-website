import React from "react";
import "../assets/css/process.css";

import bb from "../../assets/img/5 1 bulb.png";
import processImage from "../../assets/img/1 (43).webp";

const ProcessSection = () => {
  return (
    <section className="process-section container py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h5 className="text-warning fw-bold">WE DON’T DO MASS PRODUCTION.</h5>
          <h6 className="fst-italic text-secondary mb-4">We Do Precision</h6>

          <ul className="process-list ps-0 mb-4">
            <li>Your idea is the raw material.</li>
            <li>Our process is the assembly line.</li>
            <li>The outcome? Success-ready enterprises.</li>
          </ul>

          <p className="text-mutedddd">
            At Squib, every startup is manufactured like a product — with
            experience, logic, and a whole lot of personal skin in the game.
          </p>
          <p className="text-mutedddd mb-4">
            No spray-and-pray. No surface-level advice.
          </p>
          <p className="text-mutedddd">
            We co-build real, revenue-generating businesses — from 0 to first
            revenue, first round, and long-term growth.
          </p>
        </div>

        {/* Right Image */}
        <div className="col-lg-6 text-center">
          <div className="position-relative d-inline-block">
            <img
              src={processImage}
              alt="Process Illustration"
              className="img-fluid rounded shadoww"
            />
            <img src={bb} className="bulb-img-overlay" alt="Bulb" />
          </div>

          <div className="mt-3">
            <button className="btn btn-outline-darkk rounded-pilll px-4 py-2">
              Know More About the Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
