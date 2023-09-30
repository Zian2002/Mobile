import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Frame4 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CODE</Text>
      <Text style={styles.subTitle}>VERIFICATION</Text>
      <Text style={styles.desc}>
        Enter ontime password sent on ++849092605798
      </Text>
      <View style={styles.list}>
        <TextInput style={styles.input} value="" />
        <TextInput style={styles.input} value="" />
        <TextInput style={styles.input} value="" />
        <TextInput style={styles.input} value="" />
        <TextInput style={styles.input} value="" />
        <TextInput style={styles.input} value="" />
      </View>
      <View style={{ width: "100%" }}>
        <Button title="VERIFY CODE" color="#E3C000" />
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
  title: { 
    fontSize: 70, 
    fontWeight: 700, 
    marginBottom : 70,
    marginTop : 50
},
  subTitle: {
    fontSize: 20, 
    fontWeight: 700, 
    marginBottom : 30,
  },
  desc: {
    fontSize : 15,
    fontWeight : 700, 
    marginBottom : 20,
    width : 300,
    textAlign : "center",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    marginBottom : 20
  },
  input: {
    borderWidth: 1,
    width: 50,
    height: 50,
    textAlign: "center",
  },
});

const Item = (value) => {
  return <TextInput value={value} />;
};

export default Frame4;
