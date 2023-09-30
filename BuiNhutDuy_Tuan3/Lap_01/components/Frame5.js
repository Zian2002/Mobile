import {
  Button,
  Image,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

export default function Frame5() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <View style={styles.wrapper}>
        <TextInput placeholder="Email" style={styles.email} />
      </View>
      <View style={styles.wrapper}>
        <TextInput placeholder="Password" style={styles.password} />
        <View style={styles.icon}>
          <Image source={require("../assets/eye.png")} style={styles.eyeIcon} />
        </View>
      </View>
      <View style={{ width: "100%", marginTop: 50, height: 40 }}>
        <Button title="LOGIN" color="#E3C000" />
      </View>
      <Text style={styles.text}>When you agree to terms and conditions</Text>
      <Text style={{ color: "blue" }} onPress={() => Linking.openURL("")}>
        Forgot your password
      </Text>
      <Text style={styles.text}>Or login with</Text>

      <View style={styles.list}>
        <View style={styles.media}>
          <Image source={require("../assets/fb.jpg")} style={styles.eyeIcon} />
        </View>
        <View style={styles.media}>
          <Image source={require("../assets/tw.png")} style={styles.eyeIcon} />
        </View>
        <View style={styles.media}>
          <Image source={require("../assets/gg.jpg")} style={styles.eyeIcon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 70,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#d8efdf",
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    marginBottom: 50,
  },
  wrapper: {
    backgroundColor: "#cae1d1",
    width: "100%",
    height: 50,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
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
  email: {
    width: "100%",
    height: "100%",
  },
  password: {
    width: "100%",
    height: "100%",
  },
  button: {
    marginBottom: 30,
  },
  text: {
    marginTop: 15,
    marginBottom: 15,
  },
  list: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    borderColor: "#1593c6",
    borderWidth: 1,
  },
  media: {
    width: 80,
    height: 50,
    backgroundColor: "#eee",
  },
  social: {
    width: 100,
    height: 100,
    objectFit: "cover",
    overflow: "hidden",
  },
});
