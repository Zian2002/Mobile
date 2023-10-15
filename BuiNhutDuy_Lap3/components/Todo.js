import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const Todo = () => {
  const [list, setList] = useState(["an", "binh", "nguyen"]);
  const [text, setText] = useState("");
  const [textEdit, setTextEdit] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.todo}>
        <View style={styles.inputForm}>
          <TextInput
            style={styles.input}
            placeholder="Enter your todo"
            value={text}
            onChangeText={(value) => {
              setText(value);
            }}
          />
          <TouchableOpacity
            style={styles.addAction}
            onPress={() => {
              setList([...list, text]);
              setText("");
            }}
          >
            <Text style={styles.actionText}>ADD</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todoList}>
          {list.map((item, index) => {
            return (
              <View style={styles.item}>
                <TextInput
                  style={styles.itemInput}
                  value={textEdit || item}
                  onChangeText={(value) => {
                    list[index] = value;
                    setList([...list]);
                  }}
                />
                <View style={styles.action}>
                  <TouchableOpacity
                    style={styles.deleteAction}
                    onPress={() => {
                      list.splice(index, 1);
                      setList([...list]);
                    }}
                  >
                    <Text style={styles.actionText}>Xóa</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    alignItems: "center",
    padding: 20,
  },
  todo: {
    width: "90%",
    alignItems: "center",
  },
  inputForm: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "blue",
    padding: 10,
    borderRadius: 15,
  },
  addAction: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
  actionText: {
    fontSize: 15,
    fontWeight: 500,
    color: "#fff",
  },
  todoList: {
    width: "100%",
    display: "flex",
    gap: 15,
    marginTop: 20,
  },
  item: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
  itemInput: {
    width: "75%",
    outlineWidth: 0,
  },

  action: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  deleteAction: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
});
