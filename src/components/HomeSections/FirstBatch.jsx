import React, { useState } from "react";
import "../assets/css/firstBatch.css";
import productionImg from "../../assets/img/7 1.png";
import ll from "../../assets/img/material-symbols-light_lock-outline.png";

import bg from "../../assets/img/blueprint 1.svg";

const FirstBatch = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="first-batch-section py-5">
      <div className="container">
        <h5 className="text-warning fw-bold text-center mb-2">
          FIRST BATCH IN PRODUCTION
        </h5>
        <p className="lead text-center mb-5">
          We're selecting the raw materials — just{" "}
          <span className="fst-italic">10 High-Potential Founders </span> this
          year. <br />
          Backed and built with our time, team, and conviction.
        </p>

        <div className="row gx-3 gy-3 align-items-start">
          <div className="col-lg-9 m-0">
            <div className="d-flex flex-wrap justify-content-between gap-1">
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="custom-card"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`slot-card ${
                      index === 6 ? "building-card" : "locked-card"
                    }`}
                    style={
                      hoveredIndex === index && index !== 6
                        ? {
                            backgroundColor: "#ffc107",
                            transform: "scale(1.05)",
                            transition: "0.3s",
                          }
                        : { transition: "0.3s" }
                    }
                  >
                    {index === 6 ? (
                      <>
                        <p className="text-white fw-bolddddd m-0 text-center">
                          NOW
                        </p>
                        <p className="text-white fw-bolddddd m-0 text-center">
                          BUILDING
                        </p>
                      </>
                    ) : (
                      <>
                        <img
                          src={ll}
                          className="lock-icon"
                          style={{
                            display:
                              hoveredIndex === index ? "none" : "inline-block",
                          }}
                        />
                        <p
                          className="locked-text"
                          style={{
                            display: hoveredIndex === index ? "none" : "block",
                          }}
                        >
                          Slot Locked
                        </p>
                        {hoveredIndex === index && (
                          <div className="hover-text">Will you be next?</div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

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
