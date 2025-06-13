import React from "react";
import "../assets/css/BuildBatchSection.css";
import buildLeft from "../../assets/img/1 (44).webp"; // Replace with your actual image path
// import buildRight from "../assets/build-right.png";

const BuildBatchSection = () => {
  return (
    <div className="build-batch-section container my-5 py-5">
      <div className="text-center mb-4">
        <h6 className="text-warninggg fw-bolddd">READY TO BACK REAL BUILDS?</h6>
        <em className="subtitle">The Assembly Line Is On</em>
      </div>

      <div className="row align-items-stretch g-4">
        <div className="col-lg-6 col-12 fade-in-left">
          <div className="image-wrapper shadow-sm rounded overflow-hidden h-100">
            <img
              src={buildLeft}
              alt="Build Left"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
        <div className="col-lg-6 col-12 fade-in-right">
          <div className="bg-dark text-white  rounded-4 shadow-sm text-center h-100 right-sidebg-img-building d-flex flex-column justify-content-center">
            <h5 className="fw-boldd">WE’RE CO-BUILDING THE 2025 BATCH</h5>
            <p className="mb-1">
              and the earlier you plug in, the more upside, context, and
              involvement you get.
            </p>
            <h5 className="fw-bolddddd mt-3">COME PARTNER WITH A TEAM</h5>
            <p>
              that’s not pushing volume. We’re shipping ventures built to scale
              — and made to return.
            </p>
            {/* <button className="btn btn-light fw-semibold mt-3 px-4">
              Let’s Talk
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildBatchSection;
