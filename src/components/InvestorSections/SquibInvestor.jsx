import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/SquibInvestor.css";

import ii from "../../assets/img/1 (29).webp";

const SquibInvestor = () => {
  return (
    <section className="squib-investor-section py-5">
      <div className="text-center mb-4">
        <h6 className="investor-highlight">WHAT YOU GET AS A SQUIB INVESTOR</h6>
        <h5 className="investor-subtitle">Our Output Is Your Edge.</h5>
      </div>
      <Container fluid className="quib-investor-section-row">
        <div className="container">
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="info-box dark">
              <p>Partnering with Squib means getting early access to:</p>
              <ul className="list-style-none p-0">
                <li className="investor-box">
                  Investor-ready startups with clear traction pathways
                </li>
                <li className="investor-box">
                  Full transparency into how they’re built, tested, and backed
                </li>
                <li className="investor-box">
                  A co-building team that takes ownership, not just equity
                </li>
                <li className="investor-box">
                  Real-time involvement opportunities as a mentor, early
                  investor, or advisor
                </li>
              </ul>
              <p className="mt-3">
                <strong>You’re not buying into stories.</strong> You’re
                partnering into startups with serious quality control.
              </p>
            </div>
          </Col>
          {/* <Col md={6}>
            <img
              src={ii}
              alt="Investor Overview"
              className="img-fluid rounded shadow"
            />
          </Col> */}
        </Row>
        </div>
      </Container>
    </section>
  );
};

export default SquibInvestor;
