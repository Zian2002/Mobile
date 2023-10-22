import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.media}>
        <Image style={styles.image} source={require("../assets/1.png")} />
      </View>
      <Text style={styles.name}>POWER BIKE SHOP</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("Screen2")
      }}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 400,
    textAlign: "center",
    marginBottom: 20,
  },
  media: {
    width: "100%",
    backgroundColor: "#f8e6e5",
    paddingVertical: 50,
    paddingHorizontal: 10,
    borderRadius: 50,
    marginBottom: 10,
  },
  image: {
    width: 292,
    height: 270,
    resizeMode: "contain",
  },
  name: {
    fontSize: 26,
    fontWeight: 700,
    width: 200,
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#e94141",
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 500,
  },
});
