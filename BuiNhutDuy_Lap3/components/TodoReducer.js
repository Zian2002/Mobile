import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useReducer } from "react";

const initialValue = {
  list: ["an", "binh", "nguyen", "qq"],
  value: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SETTEXT": {
      return { ...state, value: action.value };
    }
    case "ADD": {
      return { ...state, list: [...state.list, state.value], value: "" };
    }

    case "UPDATE": {
      const newList = [...state.list];
      newList[action.payload.index] = action.payload.value;
      return { ...state, list: newList };
    }

    case "DELETE": {
      state.list.splice(action.payload.index, 1);
      return {...state};
    }

    default:
      break;
  }
};

const TodoReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  console.log(state);

  return (
    <View style={styles.container}>
      <View style={styles.todo}>
        <View style={styles.inputForm}>
          <TextInput
            style={styles.input}
            placeholder="Enter your todo"
            value={state.value}
            onChangeText={(value) => {
              dispatch({ type: "SETTEXT", value: value });
            }}
          />
          <TouchableOpacity
            style={styles.addAction}
            onPress={() => {
              dispatch({ type: "ADD" });
            }}
          >
            <Text style={styles.actionText}>ADD</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todoList}>
          {state.list.map((item, index) => {
            return (
              <View style={styles.item}>
                <TextInput
                  style={styles.itemInput}
                  value={item}
                  onChangeText={(value) => {
                    dispatch({ type: "UPDATE", payload: { index, value } });
                  }}
                />
                <View style={styles.action}>
                  <TouchableOpacity
                    style={styles.deleteAction}
                    onPress={() => {
                      dispatch({ type: "DELETE", payload: { index } });
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

export default TodoReducer;

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
