import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Card } from "react-native-paper";
import { TasksContext } from "../contexts/TasksContext";

export const Task = ({ ...props }) => {
  const { task } = props;
  const { tasks, setTasks } = React.useContext(TasksContext);
  const [done, setDone] = React.useState(task.done);

  const handlePress = (task) => {
    setDone(!done);
  };

  React.useEffect(() => {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          return {
            ...item,
            done,
          };
        } else return item;
      })
    );
  }, [done]);

  return (
    <TouchableOpacity onPress={() => handlePress(task)}>
      <Card
        style={[styles.task, done && styles.taskDone]}
        onPress={() => handlePress(task)}
      >
        <Text style={[styles.taskText, done && styles.taskTextDone]}>
          {task.title}
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 16,
    marginBottom: 8,
  },
  taskDone: {
    opacity: 0.5,
  },
  taskText: {
    fontSize: 14,
  },
  taskTextDone: {
    textDecorationLine: "line-through",
  },
});
