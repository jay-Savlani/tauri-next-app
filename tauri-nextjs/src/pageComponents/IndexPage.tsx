import React from "react";
import SummaryTable from "./indexPage/SummaryTable";

import { Row, Col } from "reactstrap";

const IndexPage = () => {
  return (
    <Row className="mt-5">
      <Col>
        <SummaryTable />
      </Col>
    </Row>
  );
};

export default IndexPage;
