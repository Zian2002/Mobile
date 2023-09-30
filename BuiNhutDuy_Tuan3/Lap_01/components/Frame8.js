import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Frame8 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.logoImage}
          source={require("../assets/eyeball.svg")}
        />
      </View>

      <View style={styles.wrapper}>
        <View style={styles.icon}>
          <Image
            style={styles.iconImage}
            source={require("../assets/user2.svg")}
          />
        </View>
        <TextInput style={styles.input} placeholder="Please input user name" />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.icon}>
          <Image
            style={styles.iconImage}
            source={require("../assets/lock-thin.png")}
          />
        </View>
        <TextInput style={styles.input} placeholder="Please input password" />
      </View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </View>

      <View style={styles.link}>
        <Text style={styles.text}>Register</Text>
        <Text style={styles.text}>Forgot Password</Text>
      </View>

      <View style={styles.otherMethod}>
        <Text style={styles.text}>Other Login Methods</Text>
        <View style={styles.border}></View>
      </View>

      <View style={styles.list}>
        <View style={styles.media}>
          <Image
            style={styles.mediaImage}
            source={require("../assets/add-friend.svg")}
          />
        </View>
        <View style={styles.media}>
          <Image
            style={styles.mediaImage}
            source={require("../assets/wifi.svg")}
          />
        </View>
        <View style={styles.media}>
          <Image
            style={styles.mediaImage}
            source={require("../assets/fb2.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

export default Frame8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 140,
    height: 140,
  },
  logoImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#333",
    paddingVertical: 5,
    paddingRight: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  input: {
    width: "100%",
    fontSize: 18,
    padding: 10,
    marginLeft: 15,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#386ffc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 40,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 500,
    color: "#fff",
  },
  link: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    minWidth: 135,
    display: "block",
    backgroundColor: "#fff",
    padding: 5,
  },
  otherMethod: {
    position: "relative",
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  border: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: 2,
    backgroundColor: "#386ffc",
    transform: [{ translateY: 15 }],
  },
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  media: {
    width: 75,
    height: 75,
    marginHorizontal: 20,
  },
  mediaImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
