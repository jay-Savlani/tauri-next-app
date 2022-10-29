import React from "react";
import { Row, Col } from "reactstrap";
import AddTaskForm from "./tasksPage/AddTaskForm";

const TasksPage = () => {
  return (
    <Row className="mt-5">
      <Col>
        <AddTaskForm />
      </Col>
    </Row>
  );
};

export default TasksPage;
