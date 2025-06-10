import React from "react";
import "../assets/css/joinFactory.css";
import startupImage from "../../assets/img/1 (14).webp";
import investorImage from "../../assets/img/1 (13).webp";

const JoinFactorySection = () => {
  return (
    <section className="join-factory-section py-5">
      <div className="container text-center">
        <h5 className="text-warning fw-bold mb-2">
          JOIN THE FACTORY. BE PART OF THE BUILD.
        </h5>
        <p className="mb-5">
          Whether you're a founder with a bold idea or an investor looking for
          high-conviction ventures —<br />
          This is where India's next success stories are being built. Together.
        </p>

        <div className="row g-4 justify-content-center">
          {/* Startup Box */}
          <div className="col-md-6">
            <div className="join-card position-relative">
              <img
                src={startupImage}
                alt="Startup"
                className="img-fluid w-100 rounded"
              />
              <div className="button-wrapper">
                <button className="btn btn-light">Join as Startup</button>
              </div>
            </div>
          </div>

          {/* Investor Box */}
          <div className="col-md-6">
            <div className="join-card position-relative">
              <img
                src={investorImage}
                alt="Investor"
                className="img-fluid w-100 rounded"
              />
              <div className="button-wrapper">
                <button className="btn btn-light">Join as Investor</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinFactorySection;
