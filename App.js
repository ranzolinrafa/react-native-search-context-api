import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

import { TasksList } from './components/TasksList';
import { SearchInput } from './components/SearchInput';

import { TasksContextProvider } from './contexts/TasksContext';

export default function App() {
  return (
    <View style={styles.container} childStyle={{ marginBottom: 16 }}>
      <Text style={styles.title}>Context API Example</Text>
      <TasksContextProvider>
        <SearchInput />
        <TasksList />
      </TasksContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
