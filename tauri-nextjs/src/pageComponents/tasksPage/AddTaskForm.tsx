import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Card,
  CardTitle,
  CardBody,
  Button,
  Spinner,
} from "reactstrap";

import { useTasks } from "../../context_providers/TasksProvider";

const AddTaskForm = () => {
  const [values, setValues] = useState({
    task_name: "",
    task_start_date: null,
    task_end_date: null,
  });

  // @ts-ignore
  const { tasks, setTasks } = useTasks();
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    setTasks([...tasks, values]);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center">
          <h4>Add Task</h4>
        </CardTitle>
        <Form>
          <FormGroup row>
            <Label for="task_name">Task Name</Label>
            <Col sm={4}>
              <Input
                id="task_name"
                type="text"
                name="task_name"
                onChange={handleChange}
                placeholder="Enter Task Name"
                autoComplete="off"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="task_name">Start Date</Label>
            <Col sm={4}>
              <Input
                id="task_name"
                type="date"
                name="task_start_date"
                onChange={handleChange}
                placeholder="Start Date"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="task_name">End Date</Label>
            <Col sm={4}>
              <Input
                id="task_name"
                type="date"
                name="task_end_date"
                onChange={handleChange}
                placeholder="End Date"
              />
            </Col>
          </FormGroup>
          <Button color="info" onClick={handleSubmit}>
            {"Submit "}
            {loading && <Spinner size="sm"></Spinner>}
          </Button>
          <div></div>
        </Form>
      </CardBody>
    </Card>
  );
};

export default AddTaskForm;
