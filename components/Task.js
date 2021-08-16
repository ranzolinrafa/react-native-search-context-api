import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { TasksContext } from "../contexts/TasksContext";

export const SearchInput = () => {
  const { tasks, setFilteredTasks } = React.useContext(TasksContext);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    if (value.length === 0) setFilteredTasks(tasks);

    let filter = tasks.filter((task, index) => {
      return task.title.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredTasks(filter);
  }, [value]);

  return (
    <TextInput
      onChangeText={setValue}
      placeholder="Search Tasks..."
      style={styles.searchInput}
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    background: "#ffffff",
    borderColor: "red",
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 32,
  },
});
