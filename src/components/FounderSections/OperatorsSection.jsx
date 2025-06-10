// src/components/OperatorsSection.jsx
import React from "react";
import "../assets/css/OperatorsSection.css";

import left from '../../assets/img/1 (1).webp';
import right from '../../assets/img/1 (41).webp';


const OperatorsSection = () => {
  return (
    <section className="operators-section">
      <div className="container">
        <div className="grid">
          {/* Left Image */}
          <div className="grid-item fade-in-left">
            <img
              src={left}
              alt="Operators"
              className="section-image"
            />
          </div>

          {/* Center Text */}
          <div className="grid-item fade-in-up text-box">
            <p>
              <strong>Operators? That’s us</strong> — sleeves rolled, working
              shoulder to shoulder.
            </p>
            <p>
              <strong>The QC? Ruthless.</strong> We test for product–market fit,
              scalability, and investor worthiness.
            </p>
            <p>
              Because what leaves our floor isn’t fluff. It’s a business that’s
              built to raise, scale, and sustain.
            </p>
          </div>

          {/* Right Image */}
          <div className="grid-item fade-in-right">
            <img
              src={right}
              alt="QC Room"
              className="section-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatorsSection;
