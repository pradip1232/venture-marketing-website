import React from "react";
import "../assets/css/startupAssembly.css";
import leftImage from "../../assets/img/1 (35).webp";
import rightImage from "../../assets/img/1 (36).webp";

const StartupAssemblySection = () => {
  return (
    <section className="startup-assembly-section py-5">
      <div className="container-fluid p-0">
        <div className="row align-items-center g-2">
          {/* Left Text Box */}
          <div className="col-lg-6 m-0">
            <div className="assembly-text-box  text-white">
              <h5 className="fw-bold text-uppercase">
                THIS IS NOT A DEAL FLOW MACHINE. IT’S A STARTUP ASSEMBLY LINE —
                BUT SMARTER.
              </h5>
              <p className="mt-3 mb-2">
                We don’t curate deals.
                <br />
                We create them — and we stay accountable throughout.
                <br />
                Diligence isn’t an afterthought. It’s built-in.
              </p>
              <p className="mb-2">
                We assemble ventures with high readiness and real momentum.
              </p>
              <p className="mb-4">
                That’s why our investor seats are limited — for those who want
                to help build, not just bet.
              </p>
              <button className="btn btn-light">
                Join the Investor Network
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="col-lg-6 m-0">
            <div className="d-flex flex-wrap justify-content-center gap-1">
              <img
                src={leftImage}
                alt="Startup Process"
                className="img-fluid assembly-img"
              />
              <img
                src={rightImage}
                alt="Deal Output"
                className="img-fluid assembly-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupAssemblySection;
