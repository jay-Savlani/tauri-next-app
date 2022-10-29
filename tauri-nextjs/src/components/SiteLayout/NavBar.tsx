import React from "react";
import styled from "styled-components";
import { Row, Col, Button } from "reactstrap";
import { useRouter } from "next/router";

import { ROUTES } from "../../common/constants";

const FullWidthButton = styled(Button)`
  width: 100%;
`;

const NavBar = () => {
  const router = useRouter();
  const navigateTo = (url: string) => {
    router.push(url);
  };

  return (
    <>
      <Row className="mt-2">
        <Col>
          <FullWidthButton outline onClick={() => navigateTo(ROUTES.HOME)}>
            HOME
          </FullWidthButton>
        </Col>
        <Col>
          <FullWidthButton outline onClick={() => navigateTo(ROUTES.TASKS)}>
            TASKS
          </FullWidthButton>
        </Col>
      </Row>
    </>
  );
};

export default NavBar;
