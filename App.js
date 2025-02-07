import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [allTask, setallTask] = useState([]);

  const handleAddTask = () => {
    console.log(task);
    setallTask([...allTask, task]);
    setTask(null);
    // remove task from type bar
  };

  const completeTask =(index)=>{
    let itemsCopy =[...allTask];
    itemsCopy.splice(index,1);
    setallTask(itemsCopy);
  }
  return (
    <View style={styles.container}>
      {/* Today's task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>

        <View style={styles.items}>
          {/* this is where the task will go */}
          {
            allTask.map(
              (item, index)=>{
              return (
                <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                  <Task text ={item}/>
                </TouchableOpacity>
              )
              
              }
            )
          }
         
        </View>
      </View>

      {/* WRITE A Task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "height" : "padding"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          onChangeText={(text) => setTask(text)}
          style={styles.input}
          placeholder={"Write a task here"}
          value={task}
        />

          {/* button add */}
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#c0c0c0",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#c0c0c0",
  },
  addText: {},
});
