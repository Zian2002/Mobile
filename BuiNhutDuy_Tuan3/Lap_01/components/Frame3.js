import React from "react";
import { Button } from "react-native";
import { TextInput } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

const Frame3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.media}>
        <Image
          source={require("../assets/lock.png")}
          style={styles.lockImage}
        ></Image>
      </View>
      <Text style={styles.title}>FORGET PASSWOR</Text>
      <Text style={styles.desc}>
        Provide your account’s email for which you want to reset your password
      </Text>
      <View style={styles.wrapper}>
        <Image
          style={styles.mailImage}
          source={require("../assets/mail.png")}
        ></Image>
        <TextInput style={styles.input} placeholder="Email" />
      </View>
      <View style={{width:"100%"}}>
        <Button title="Next" color="#E3C000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 70,
    textAlign: "center",
    alignItems: "center",
    backgroundImage:
      "linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)",
  },
  media: {
    width: 105,
    height: 115,
    marginBottom: 35,
  },
  lockImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
    width: 150,
    textAlign: "center",
  },
  desc: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 700,
    width: 300,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    width: 300,
    height: 45,
    backgroundColor: "#C4C4C4",
    marginBottom: 40,
    marginTop: 10,
  },
  mailImage: {
    width: 45,
    height: 45,
  },
  input: {
    width: "100%",
  },
  button: {
    fontWeight : 700,
    fontSize : 30
  },
});

export default Frame3;
