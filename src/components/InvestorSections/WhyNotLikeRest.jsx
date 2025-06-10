import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/WhyNotLikeRest.css";

import cc from "../../assets/img/1 (42).webp";

const WhyNotLikeRest = () => {
  return (
    <section className="why-not-section py-5 mt-5">
      <Container>
        <div className="text-center mb-4">
          <h6 className="highlighted">WHY WE’RE NOT LIKE THE REST</h6>
          <h5 className="italic-subtitle">
            Curation Is Not Enough. Construction Is Better.
          </h5>
        </div>
        <Row className="align-items-center">
          <Col md={7} className="mb-4 mb-md-0">
            <p className="mb-3">
              Most platforms give you access. We give you accountability. We
              co-build every startup in our cohort — shaping the model,
              assembling the team, testing the product, and building investor
              narratives that hold water.
            </p>
            <p className="mb-3">
              Due diligence isn’t something we “do” at the end — it’s something
              we live every day.
            </p>
            <p>
              We’re in the trenches from day one, so by the time a venture
              reaches your table, it’s not a gamble — it’s a growth story in
              motion.
            </p>
          </Col>
          <Col md={5}>
            <img
              src={cc}
              alt="Factory Floor"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyNotLikeRest;
