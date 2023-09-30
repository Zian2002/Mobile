import { StyleSheet, Text, View, Image } from "react-native";
const Frame2 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/cycle.png")}
        style={styles.image}
      ></Image>
      <Text style={styles.name}>GROW YOUR BUSINESS</Text>
      <Text style={styles.title}>
        We will help you to grow your business using online server
      </Text>
      <div style={styles.action}>
        <div style={styles.button}>Login</div>
        <div style={styles.button}>Sign up</div>
      </div>
      <Text style={styles.work}>HOW WE WORK?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginHorizontal: "auto",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    backgroundImage:
      "linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)",
  },
  image: {
    width: 140,
    height: 140,
    marginTop: 80,
    marginBottom: 50,
  },
  name: {
    fontSize: 25,
    fontWeight: 700,
    maxWidth: 200,
    textAlign: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: 700,
    marginTop: 60,
    marginBottom: 45,
    textAlign: "center",
  },
  action: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#E3C000",
    fontSize: 20,
    fontWeight: 700,
    borderRadius: 20,
    padding: 20,
    width: 100,
  },
  work : {
    marginTop: 20,
    fontSize : 18,
    fontWeight : 700
  }
});

export default Frame2;
