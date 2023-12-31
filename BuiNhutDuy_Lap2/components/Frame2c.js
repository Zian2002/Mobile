import {
  StyleSheet,
  Text,
  TextInput,
  View,
  CheckBox,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

const Frame2c = () => {
  const [value, setValue] = useState("");
  const [upCheckBox, setUpCheckBox] = useState(false);
  const [lowCheckBox, setLowCheckBox] = useState(false);
  const [numbCheckBox, setNumbCheckBox] = useState(false);
  const [symbolCheckBox, setSymbolCheckBox] = useState(false);
  const validate = (value) => {
    setUpCheckBox(/[A-Z]/.test(value));
    setLowCheckBox(/[a-z]/.test(value));
    setNumbCheckBox(/[0-9]/.test(value));
    setSymbolCheckBox(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>
      <TextInput
        style={styles.mainInput}
        value={value}
        onChangeText={(value) => {
          setValue(value);
          validate(value);
        }}
      />
      <View style={styles.valid}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Password length</Text>
          <TextInput style={styles.input} value={value.length} editable={false} />
        </View>
        <Wrapper label="Include upcase letters" value={upCheckBox}></Wrapper>
        <Wrapper label="Include lowcase letters" value={lowCheckBox}></Wrapper>
        <Wrapper label="Include number" value={numbCheckBox}></Wrapper>
        <Wrapper label="Include special symbol" value={symbolCheckBox}></Wrapper>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
};

const Wrapper = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{props.label}</Text>
      <CheckBox value={props.value} style={styles.checkbox} />
    </View>
  );
};

export default Frame2c;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    textAlign: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#23235B",
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
    color: "#fff",
    width: 180,
    textAlign: "center",
  },
  mainInput: {
    borderWidth: 1,
    borderColor: "#000",
    width: "100%",
    height: 55,
    padding: 10,
    backgroundColor: "#151537",
    color: "#fff",
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    width: 120,
    height: 30,
    padding: 10,
    backgroundColor: "#fff",
    color: "#000",
  },
  checkbox: {
    width: 25,
    height: 25,
    backgroundColor: "#fff",
    color: "#000",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    color: "#fff",
    marginRight: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#3b3b98",
    width: "90%",
    alignItems: "center",
    padding: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 700,
    color: "#fff",
  },
});
