import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { Task } from "./Task";
import { TasksContext } from "../contexts/TasksContext";

export const TasksList = () => {
  const { filteredTasks, loading } = React.useContext(TasksContext);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <View>
        {filteredTasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </View>
    </ScrollView>
  );
};
