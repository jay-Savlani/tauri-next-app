import React, { useState, useContext } from "react";
const tasksContext = React.createContext([]);

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const taskObject = {
    tasks,
    setTasks,
  };

  return (
    <>
      {/* @ts-ignore */}
      <tasksContext.Provider value={taskObject}>
        {children}
      </tasksContext.Provider>
    </>
  );
};

export const useTasks = () => {
  return useContext(tasksContext);
};

export default TasksProvider;
