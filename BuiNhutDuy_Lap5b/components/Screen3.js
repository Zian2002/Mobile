import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const Screen3 = ({ navigation, route }) => {
  const [item, setItem] = useState(
    route.params?.item || {
      image: require("../assets/1.png"),
      name: "Pinarello",
      price: "$1800",
      type: "RoadBike",
      decription:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    }
  );
  return (
    <View style={styles.container}>
      <View style={styles.media}>
        <Image style={styles.image} source={item.image} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.descTitle}>Description</Text>
      <Text style={styles.desc}>{item.decription}</Text>
      <View style={styles.bottom}>
        <Image
          style={styles.heartIcon}
          source={require("../assets/heart.png")}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
  },
  media: {
    width: "100%",
    backgroundColor: "#fdeded",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 340,
    resizeMode: "contain",
  },
  name: {
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 10,
  },
  price: {
    fontSize: 17,
    fontWeight: 400,
    color: "#00000099",
    marginBottom: 15,
  },
  descTitle: {
    fontWeight: 600,
    fontSize: 16,
    marginBottom: 15,
  },
  desc: {
    lineHeight: 25,
    fontSize: 16,
    marginBottom: 20,
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  heartIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#E94141",
    padding: 8,
    width: "70%",
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 500,
    color: "#fff",
  },
});
