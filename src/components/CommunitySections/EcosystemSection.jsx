import React from "react";
import "../assets/css/EcosystemSection.css";
import eventsImg from "../../assets/img/1 (17).webp";
import ecosystemImg from "../../assets/img/1 (38).webp";

const EcosystemSection = () => {
  return (
    <section className="ecosystem-wrapper">
      {/* SECTION 1 - EVENTS */}
      <div
        className="event-section d-flex align-items-center text-white text-center"
        style={{
          backgroundImage: `url(${eventsImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh", // ensures full screen height
          width: "100%",
        }}
      >
        <div className="container py-5">
          <h2 className="fw-bold">EVENTS THAT BUILD THE ECOSYSTEM</h2>
          <p className="fst-italic mb-3">
            Offline Meets. Real Conversations. Zero Fluff.
          </p>
          <p className="w-75 mx-auto">
            From founder roundtables to investor meetups, workshops to demo days
            — we host curated, purpose-driven events that spark action, not just
            chatter. Because relationships are built across tables, not just
            Slack threads.
          </p>
        </div>
      </div>

      {/* SECTION 2 - ONE ECOSYSTEM */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={ecosystemImg}
              alt="ecosystem"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-6">
            <h5 className="text-warning fw-semibold">
              ONE ECOSYSTEM. MULTIPLE TOUCHPOINTS.
            </h5>
            <p className="fst-italic text-secondary">
              Capital, Knowledge, Support — All In One Place
            </p>
            <p>
              With Squib’s ecosystem, you’re never building alone. Founders
              scale faster. Investors discover sharper ventures. Advisors
              connect with high-potential journeys. And the whole community
              grows — together.
            </p>
            <button className="btn btn-outline-dark mt-3">
              Host or Collaborate with Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
