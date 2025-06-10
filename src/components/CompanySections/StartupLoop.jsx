import React from "react";
import "../assets/css/StartupLoop.css";

const StartupLoop = () => {
  return (
    <section className="startup-loop-section py-5">
      <div className="container text-center">
        <h2 className="main-heading text-uppercase">
          THE INDIAN STARTUP LOOP IS BROKEN — WE’RE HERE TO FIX IT
        </h2>
        <p className="subheading mt-2">
          India's early-stage ecosystem is full of energy — but it's stuck in a
          cycle that kills innovation before it ever gets a chance to thrive
        </p>
        <p className="italic-heading mt-3">
          <em>Here’s How It Plays Out</em>
        </p>

        <div className="row mt-4 g-4">
          <div className="col-md-6">
            <div className="loop-box d-flex">
              <div className="line-bar"></div>
              <p className="m-0">
                Founders have the vision, but often lack practical experience or
                industry understanding
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="loop-box d-flex">
              <div className="line-bar"></div>
              <p className="m-0">
                Startups die early. Innovation never sees light
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="loop-box d-flex">
              <div className="line-bar"></div>
              <p className="m-0">
                This results in inflated expectations and underbuilt products.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="loop-box d-flex">
              <div className="line-bar"></div>
              <p className="m-0">
                As failures mount, the ecosystem becomes more risk-averse.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="loop-box d-flex">
              <div className="line-bar"></div>
              <p className="m-0">
                Investors see the gap and hesitate to commit capital.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="loop-box d-flex">
              <div className="line-bar"></div>
              <p className="m-0">
                And the next batch of founders are back at square one — stuck in
                the same loop
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupLoop;
