import React from "react";
import "../assets/css/FoundersExpertsSection.css";
import img1 from "../../assets/img/1 (2).webp"; // Replace with your actual path
import img2 from "../../assets/img/1 (40).webp";

const FoundersExpertsSection = () => {
  return (
    <section className="founders-section py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h5 className="text-warningg fw-semiboldd">BUILT FOR FOUNDERS & EXPERTS</h5>
          <p className="fst-italic section-subtitle">
            Not Just Connections. Real Collaborations.
          </p>
        </div>

        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-5 mb-4 mb-md-0">
            <p>
              Whether you’re a founder looking for wisdom, or a mentor looking
              to make a difference — the Squib community is designed to spark
              meaningful partnerships.
            </p>

            <h6 className="fw-bolddd mb-3">Get and give:</h6>
            <div className="info-card p-3 mb-3">
              <p className="mb-0">
              Founders get access to operators, advisors & investors.
              </p>
            </div>
            <div className="info-card p-3">
              <p className="mb-0">
                Experts & mentors get front-row seats to tomorrow’s market
                shapers — and a chance to shape them.
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="col-md-6 d-flex flex-column flex-md-row gap-3">
            <img src={img1} className="img-fluid rounded shadow-sm w-100 mt-5 pt-4" alt="founders1" />
            <img src={img2} className="img-fluid rounded shadow-sm w-100 mt-md-0 mb-5 pt-4" alt="founders2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersExpertsSection;
