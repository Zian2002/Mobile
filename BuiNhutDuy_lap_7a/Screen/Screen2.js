import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Screen2 = ({ navigation, route }) => {
  const endPoint = "https://65450f2f5a0b4b04436d8e76.mockapi.io/user/1";
  const [user, setUser] = useState({});
  const [todo, setTodo] = useState([]);

  const setData = async () => {
    await axios
      .get(endPoint)
      .then((response) => {
        setUser(response.data);
        setTodo(response.data.todoList);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log(todo);
    if (route.params?.newItem) {
      setTodo((todo) => [...todo, route.params.newItem]);
      setUser({ ...user, todoList: todo });
      axios
        .put(endPoint, { ...user, todoList: [...todo, route.params.newItem] })
        .then(function (response) {
          console.log(response);
          setData();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setData();
    }
  }, [route.params]);

  return (
    <View style={styles.component}>
      <View style={styles.header}>
        <Image
          source={require("../assets/back.png")}
          style={{ width: 30, height: 30 }}
        ></Image>
        <Image
          source={user.avatar || require("../assets/avatar.png")}
          style={styles.avtImage}
        ></Image>
        <View style={{ justifyContent: "center", marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 600, marginLeft: 10 }}>
            Hi {user.name}
          </Text>
          <Text style={{ fontSize: 18, color: "grey", fontWeight: 500 }}>
            Have agrate day a head
          </Text>
        </View>
      </View>
      <View style={styles.findCon}>
        <Image
          source={require("../assets/search.png")}
          style={{ width: 30, height: 30, marginLeft: 10 }}
        ></Image>
        <TextInput placeholder="Search" style={styles.findInput}></TextInput>
      </View>

      <View style={{ marginTop: 50 }}>
        {todo.map((item, index) => {
          return (
            <Pressable
              key={index}
              style={{
                width: 350,
                height: 50,
                backgroundColor: "#DEE1E678",
                alignItems: "center",
                borderRadius: 30,
                marginBottom: 10,
                padding: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Image
                source={require("../assets/check.png")}
                style={{ width: 30, height: 30 }}
              ></Image>
              <Text style={{ width: "100%" }}>{item}</Text>
              <Image
                source={require("../assets/pen.png")}
                style={{ width: 30, height: 30, marginLeft: 40 }}
              ></Image>
            </Pressable>
          );
        })}
      </View>

      <Pressable
        style={styles.add}
        onPress={() => {
          navigation.navigate("Screen3", { user });
          // console.log(user.todoList)
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>+</Text>
      </Pressable>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  avtImage: {
    width: 60,
    height: 60,
    borderRadius: 45,
    resizeMode: "contain",
    backgroundColor: "pink",
    marginLeft: 70,
  },
  findCon: {
    width: 350,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  findInput: {
    height: 45,
    width: 300,
    color: "grey",
    marginLeft: 10,
  },
  add: {
    width: 70,
    height: 70,
    borderRadius: 45,
    backgroundColor: "#00BDD6",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50,
    fontWeight: 700,
    color: "white",
    marginTop: 20,
  },
});
