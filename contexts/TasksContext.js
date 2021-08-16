import React from "react";
import * as api from "../api/api";

export const TasksContext = React.createContext(null);

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([]);
  const [filteredTasks, setFilteredTasks] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let getTasks = async () => {
      let response = await api.getTasks();
      setTasks(response);
      setFilteredTasks(response);
      setLoading(false);
    };
    getTasks();
  }, []);

  React.useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{ tasks, filteredTasks, setFilteredTasks, setTasks, loading }}
    >
      {children}
    </TasksContext.Provider>
  );
};
