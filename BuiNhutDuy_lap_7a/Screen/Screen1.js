import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.component}>
      <Image
        source={require("../assets/note.png")}
        style={styles.noteImage}
      ></Image>
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <View style={styles.inputArea}>
        <Image
          source={require("../assets/letter.png")}
          style={styles.letterImage}
        ></Image>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
        ></TextInput>
      </View>
      <Pressable
        style={styles.pressGet}
        onPress={() => navigation.navigate("Screen2")}
      >
        GET STARTED
      </Pressable>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
  },
  noteImage: {
    width: 300,
    height: 300,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    width: 200,
    textAlign: "center",
    color: "#8353E2",
    marginTop: 10,
  },
  inputArea: {
    width: 350,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  letterImage: {
    width: 30,
    height: 20,
    marginLeft: 10,
  },
  input: {
    width: 300,
    height: 35,
    marginLeft: 10,
    color: "grey",
  },
  pressGet: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00BDD6",
    color: "#FFFFFF",
    borderRadius: 20,
    marginTop: 80,
    fontSize: 20,
    fontWeight: 500,
  },
});
