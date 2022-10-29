import React from "react";
import { Table } from "reactstrap";
import { useTasks } from "../../context_providers/TasksProvider";

const SummaryTable = () => {
  // @ts-ignore
  const { tasks } = useTasks();

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Task</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => {
          return (
            <tr key={index}>
              <td>{task.task_name}</td>
              <td>{task.task_start_date}</td>
              <td>{task.task_end_date}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default SummaryTable;
