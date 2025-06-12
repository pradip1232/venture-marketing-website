import React from "react";
import "../assets/css/BreakingLoop.css";
import loopImage from "../../assets/img/1 (22).webp"; // Your image (circle + lightning)

const BreakingLoop = () => {
  return (
    <section className="breaking-loop py-5">
      <div className="container text-center">
        <h5 className="text-warningg mb-2">THE LOOP WE’RE BREAKING</h5>
        <h3 className="fw-boldd mb-3">
          At Squib, we step in where others hesitate.
        </h3>
        <p className="italic-textt mb-3">We Don’t Just Advise. We Co-Build</p>

        <p className="description mx-auto">
          We take on the operational load. We help founders shape credible,
          fundable ventures.
          <br />
          We de-risk startups — not just for investors, but for the ecosystem at
          large.
          <br />
          We are the missing link between ambition and execution, vision and
          validation, potential and proof.
        </p>

        <div className="image-wrapper mt-4 text-center">
          <img
            src={loopImage}
            alt="The loop we’re breaking"
            className="img-fluid loop-img"
          />
        </div>
      </div>
    </section>
  );
};

export default BreakingLoop;
