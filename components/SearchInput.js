import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { TasksContext } from "../contexts/TasksContext";

export const SearchInput = () => {
  const { tasks, setFilteredTasks } = React.useContext(TasksContext);

  const handleChange = (e) => {
    if (e.target.value.length === 0) setFilteredTasks(tasks);

    let filter = tasks.filter((task, index) => {
      return task.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setFilteredTasks(filter);
  };

  return (
    <TextInput
      onChange={handleChange}
      placeholder="Search Tasks..."
      style={styles.searchInput}
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: "#ffffff",
    borderColor: "red",
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 32,
  },
});
