import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Frame6() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>
      <InputWrapper placeholder="Name"></InputWrapper>
      <InputWrapper placeholder="Phone"></InputWrapper>
      <InputWrapper placeholder="Email"></InputWrapper>

      <View style={styles.inputWrapper}>
        <TextInput placeholder="Password" style={styles.input} />
        <View style={styles.icon}>
          <Image style={styles.eyeIcon} source={require("../assets/eye.png")} />
        </View>
      </View>

      <InputWrapper placeholder="Birthday"></InputWrapper>
      <View style={styles.gender}>
        <View style={styles.wrapper}>
          <input
            type="radio"
            name="gender"
            id="male"
            style={styles.inputGender}
          />
          <label htmlFor="male" style={styles.label}>
            Male
          </label>
        </View>
        <View style={styles.wrapper}>
          <input
            type="radio"
            name="gender"
            id="female"
            style={styles.inputGender}
          />
          <label htmlFor="female" style={styles.label}>
            Female
          </label>
        </View>
      </View>

      <View style={{ width: "100%", marginTop: 50, marginBottom : 20, height: 40 }}>
        <Button title="REGISTER" color="#c34e3b"/>
      </View>
      <Text>When you agree to terms and conditions</Text>
    </View>
  );
}

const InputWrapper = (props) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#d8efdf",
  },
  title : {
    fontSize : 25,
    fontWeight : 700,
    marginBottom : 20
  },

  inputWrapper: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#cae1d1",
    width: "100%",
    height: 45,
    marginBottom: 15,
    padding: 10,
  },
  input: {
    width: "100%",
  },
  icon: {
    width: 30,
    height: 20,
  },
  eyeIcon: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  gender: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    padding: 10,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems : "center",
  },
  label: {
    marginHorizontal: 30,
    fontSize : 18,
    marginLeft : 5,
    marginRight : 20
  },
  inputGender : {
    width : 20,
    height : 20,
    
  }
});
