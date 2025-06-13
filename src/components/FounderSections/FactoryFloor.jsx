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
        <h5 className="text-warningg fw-boldd mb-2">INSIDE THE FACTORY FLOOR</h5>
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
       
      </div>
    </section>
  );
};

export default FactoryFloor;
