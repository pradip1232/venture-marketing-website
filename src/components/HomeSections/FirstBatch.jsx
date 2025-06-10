import React from "react";
import "../assets/css/firstBatch.css";
import productionImg from "../../assets/img/7 1.png"; // update as needed

const FirstBatch = () => {
  const slots = Array(10).fill("locked");
  slots[4] = "next";
  slots[6] = "building";

  return (
    <section className="first-batch-section py-5">
      <div className="container">
        <h5 className="text-warning fw-bold text-center mb-2">
          FIRST BATCH IN PRODUCTION
        </h5>
        <p className="lead text-center mb-5">
          We're selecting the raw materials — just{" "}
          <span className="fst-italic">10 High-Potential Founders</span> this
          year. <br />
          Backed and built with our time, team, and conviction.
        </p>

        <div className="row gx-3 gy-3 align-items-start">
          {/* Card Grid - Left */}
          <div className="col-lg-9">
            <div className="d-flex flex-wrap justify-content-between gap-1">
              {slots.map((slot, index) => (
                <div key={index} className="custom-card">
                  <div
                    className={`slot-card ${
                      slot === "locked"
                        ? "locked-card"
                        : slot === "next"
                        ? "next-card"
                        : "building-card"
                    }`}
                  >
                    {slot === "locked" && (
                      <>
                        <span className="lock-icon">🔒</span>
                        <p className="locked-text">Slot Locked</p>
                        <div className="hover-text">Will you be next?</div>
                      </>
                    )}
                    {slot === "next" && (
                      <p className="fw-bold text-dark m-0 text-center">
                        Will you be next?
                      </p>
                    )}
                    {slot === "building" && (
                      <>
                        <p className="text-white fw-bold m-0 text-center">
                          NOW
                        </p>
                        <p className="text-white fw-bold m-0 text-center">
                          BUILDING
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image & Button - Right */}
          <div className="col-lg-3 text-center mt-4 mt-lg-0">
            <img
              src={productionImg}
              alt="Production"
              className="img-fluid rounded"
            />
            <button className="btn btn-outline-dark mt-3">
              Apply to Be the Next Founder
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstBatch;
