import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, TextInput, View,
  FlatList, TouchableOpacity, KeyboardAvoidingView, Platform, Animated
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);

  // Loading tasks from AsyncStorage 
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          const loadedTasks = JSON.parse(storedTasks).map(task => ({
            ...task,
            fadeAnim: new Animated.Value(1),
          }));
          setTasks(loadedTasks);
        }
      } catch (e) {
        console.error('Failed to load tasks', e);
      }
    };
    loadTasks();
  }, []);

  // Saving tasks to AsyncStorage
  useEffect(() => {
    const saveTasks = async () => {
      try {
        const tasksToSave = tasks.map(task => ({
          id: task.id,
          text: task.text,
          completed: task.completed,
        }));
        await AsyncStorage.setItem('tasks', JSON.stringify(tasksToSave));
      } catch (e) {
        console.error('Failed to save tasks', e);
      }
    };
    saveTasks();
  }, [tasks]);

  // fade in animation
  const addTask = () => {
    if (task.trim()) {
      const newTask = {
        id: Date.now().toString(),
        text: task,
        completed: false,
        fadeAnim: new Animated.Value(0) 
      };
      setTasks([...tasks, newTask]);
      setTask('');
      Animated.timing(newTask.fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  // slide-out animation
  const deleteTask = (taskId) => {
    const taskToRemove = tasks.find(task => task.id === taskId);
    if (taskToRemove) {
      Animated.timing(taskToRemove.fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setTasks(tasks.filter(task => task.id !== taskId));
      });
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Editing a task
  const startEditing = (taskId, taskText) => {
    setEditingTaskId(taskId);
    setTask(taskText);
  };

  // Saving the updated task
  const saveTask = () => {
    setTasks(tasks.map(item => 
      item.id === editingTaskId ? { ...item, text: task } : item
    ));
    setTask('');
    setEditingTaskId(null);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Simple To-Do List</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a new task"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={editingTaskId ? saveTask : addTask}
          >
            <Text style={styles.addButtonText}>
              {editingTaskId ? '✓' : '+'}
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Animated.View style={{ ...styles.taskContainer, opacity: item.fadeAnim }}>
              <TouchableOpacity
                onPress={() => toggleTaskCompletion(item.id)}
                style={styles.taskTextContainer}
              >
                <Text style={[styles.taskText, item.completed && styles.completedTask]}>
                  {item.text}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => startEditing(item.id, item.text)}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Text style={styles.deleteButton}>X</Text>
              </TouchableOpacity>
            </Animated.View>
          )}
          keyExtractor={(item) => item.id}
          style={{ flex: 1 }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#5C5CFF',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  taskTextContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  editButton: {
    color: '#5C5CFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
  deleteButton: {
    color: '#FF5C5C',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
