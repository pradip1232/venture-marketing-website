import React from "react";
import "../assets/css/factoryFloor.css";
// import icon1 from "../assets/img/icon1.png";
// import icon2 from "../assets/img/icon2.png";
// import icon3 from "../assets/img/icon3.png";
// import icon4 from "../assets/img/icon4.png";
// import icon5 from "../assets/img/icon5.png";

const FactoryFloor = () => {
//   const steps = [
//     { title: "Product shaping", icon: icon1, sub: "Market-fit testing" },
//     { title: "Branding", icon: icon2, sub: "Legal groundwork" },
//     { title: "Hiring", icon: icon3, sub: "Investor readiness" },
//   ];

  return (
    <section className="factory-floor py-5">
      <div className="container text-center">
        <h5 className="text-warning fw-bold mb-2">INSIDE THE FACTORY FLOOR</h5>
        <p className="mb-2 px-md-5">
          <strong>Imagine this:</strong> your raw idea or MVP stuck mid-line is
          the raw material we carefully procure. <br />
          It enters our startup assembly line — where no task is too{" "}
          <i>"founder-only"</i> or beneath us.
        </p>
        <h6 className="fst-italic text-muted mt-3 mb-5">
          Every Station Activates
        </h6>

        {/* Timeline */}
        <div className="row justify-content-center">
          {/* 1 */}
          <div className="col-6 col-sm-4 col-md-2 text-center factory-step">
            {/* <img src={icon1} alt="Step 1" className="factory-icon" /> */}
            <p className="mb-1 fw-semibold">Product shaping</p>
            <p className="text-muted small">Market-fit testing</p>
          </div>
          {/* 2 */}
          <div className="col-6 col-sm-4 col-md-2 text-center factory-step">
            {/* <img src={icon2} alt="Step 2" className="factory-icon" /> */}
            <p className="mb-1 fw-semibold">Branding</p>
            <p className="text-muted small">Legal groundwork</p>
          </div>
          {/* 3 */}
          <div className="col-6 col-sm-4 col-md-2 text-center factory-step">
            {/* <img src={icon3} alt="Step 3" className="factory-icon" /> */}
            <p className="mb-1 fw-semibold">Hiring</p>
            <p className="text-muted small">Investor readiness</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryFloor;
