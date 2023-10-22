import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";

const list = [
  {
    image: require("../assets/1.png"),
    name: "Pinarello",
    price: "$1800",
    type: "RoadBike",
    decription:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
  },
  {
    image: require("../assets/2.png"),
    name: "Pina MounTain",
    price: "$1700",
    type: "Mountain",
    decription:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
  },
  {
    image: require("../assets/3.png"),
    name: "Pina Bike",
    price: "$1500",
    type: "RoadBike",
    decription:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
  },
  {
    image: require("../assets/4.png"),
    name: "Pinarello",
    price: "$1900",
    type: "RoadBike",
    decription:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
  },
  {
    image: require("../assets/5.png"),
    name: "Pinarello",
    price: "$2700",
    type: "RoadBike",
    decription:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
  },
  {
    image: require("../assets/6.png"),
    name: "Pinarello",
    price: "$1350",
    type: "Mountain",
    decription:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
  },
];

const Screen2 = ({ navigation, route }) => {
  const [selected, setSelected] = useState("All");
  const [array, setArray] = useState(list);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The world’s Best Bike</Text>
      <View style={styles.filterList}>
        <TouchableOpacity
          style={styles.filterTag}
          onPress={() => {
            setSelected("All");
            setArray(list);
          }}
        >
          <Text
            style={[
              styles.filterText,
              selected == "All" ? { color: "#ed5f5f" } : {},
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterTag}
          onPress={() => {
            setSelected("RoadBike");
            setArray([...list.filter((item) => item.type == "RoadBike")]);
          }}
        >
          <Text
            style={[
              styles.filterText,
              selected == "RoadBike" ? { color: "#ed5f5f" } : {},
            ]}
          >
            Roadbike
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterTag}
          onPress={() => {
            setSelected("Mountain");
            setArray([...list.filter((item) => item.type == "Mountain")]);
          }}
        >
          <Text
            style={[
              styles.filterText,
              selected == "Mountain" ? { color: "#ed5f5f" } : {},
            ]}
          >
            Mountain
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productList}>
        {array.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.wrapperItem}
              onPress={() => {
                // console.log(item);
                navigation.navigate({
                  name: "Screen3",
                  params: {
                    item,
                  },
                });
              }}
            >
              <ProductItem data={item}></ProductItem>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const ProductItem = (props) => {
  return (
    <View style={styles.item}>
      <Image style={styles.itemImage} source={props.data.image} />
      <Text style={styles.itemName}>{props.data.name}</Text>
      <View style={styles.wrapperPrice}>
        <Text style={{ color: "#F7BA83" }}>$</Text>
        <Text style={styles.itemPrice}>{props.data.price}</Text>
      </View>
      <Image style={styles.heartIcon} source={require("../assets/heart.png")} />
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 500,
    color: "red",
    marginBottom: 30,
  },
  filterList: {
    display: "flex",
    flexDirection: "row",
    columnGap: 20,
  },
  filterTag: {
    borderColor: "#ed5f5f",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  filterText: {
    fontSize: 15,
    fontWeight: 400,
  },
  productList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 20,
    marginTop: 20,
  },
  wrapperItem: {
    width: "45%",
  },
  item: {
    width: "100%",
    backgroundColor: "#fef5ed",
    borderRadius: 20,
    padding: 20,
    position: "relative",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.3,
    shadowColor: "#ccc",
    shadowRadius: 20,
  },
  itemImage: {
    width: 135,
    height: 127,
    resizeMode: "contain",
  },
  itemName: {
    color: "#00000099",
    fontSize: 18,
    fontWeight: 400,
  },
  wrapperPrice: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 400,
  },
  heartIcon: {
    position: "absolute",
    width: 25,
    height: 25,
    resizeMode: "contain",
    top: 10,
    left: 10,
  },
});
