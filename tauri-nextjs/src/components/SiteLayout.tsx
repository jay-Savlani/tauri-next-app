import React from "react";
import { Container, Row, Col } from "reactstrap";

import NavBar from "./SiteLayout/NavBar";

const SiteLayout = ({ title }) => {
  return (
    <>
      <Row>
        <NavBar />
      </Row>
      <Row className="mt-3">
        <Col>
          <h2>{title}</h2>
        </Col>
      </Row>
    </>
  );
};

export default SiteLayout;
