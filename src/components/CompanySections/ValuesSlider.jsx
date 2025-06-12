// src/components/ValuesSlider.jsx
import React from "react";
import Slider from "react-slick";
import "../assets/css/ValuesSlider.css";
import { FaUsers, FaBullseye, FaChartLine } from "react-icons/fa";

const values = [
  {
    icon: <FaUsers className="value-icon" />,
    title: "COMMUNITY OVER INDIVIDUALISM",
    desc: "We’re cultivating a space where founders, experts, and investors grow together. Not just companies — but ecosystems of support.",
  },
  {
    icon: <FaBullseye className="value-icon" />,
    title: "PURPOSE-DRIVEN FOUNDERS",
    desc: "We back those who lead with intention, empathy, and long-term conviction.",
  },
  {
    icon: <FaChartLine className="value-icon" />,
    title: "GRIT OVER GLAMOUR",
    desc: "We help teams chase real traction, not just valuation optics or pitch-ready vanity.",
  },
  {
    icon: <FaUsers className="value-icon" />,
    title: "LONG-TERM IMPACT",
    desc: "We focus on sustainable business models that solve real-world problems over time.",
  },
  {
    icon: <FaBullseye className="value-icon" />,
    title: "EMPATHY-FIRST LEADERSHIP",
    desc: "We champion leaders who listen deeply, build trust, and empower others.",
  },
];

const ValuesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="values-section py-5">
      <div className="container text-center">
        <h5 className="text-warningg fw-bold">OUR VALUES & PHILOSOPHY</h5>
        <h6 className="italic-heading mb-3">
          Built Differently With Heart & Pure Intention.
        </h6>
        <p className="mb-3">
          We’re not another venture studio, accelerator, or consulting outfit.
          <br />
          We exist to build ventures that shape the future — and nurture the people behind them.
        </p>
        <p className="mb-4">At Squib, We stand for</p>

        <Slider {...settings}>
          {values.map((val, idx) => (
            <div key={idx} className="px-3">
              <div className="value-card text-center p-4 shadow-smm bg-white rounded">
                {val.icon}
                <h6 className="value-title mt-3">{val.title}</h6>
                <p className="value-text">{val.desc}</p>
              </div>
            </div>
          ))}
        </Slider>

        <p className="mt-5">
          We’re not here for shortcuts.
          <br />
          We’re here to build responsibly — and to create companies that stand the test of time.
        </p>
      </div>
    </section>
  );
};

export default ValuesSlider;
