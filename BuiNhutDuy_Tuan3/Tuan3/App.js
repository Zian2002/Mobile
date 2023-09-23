import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={require("./assets/cycle.png")}
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
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 360,
    marginHorizontal: "auto",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  image: {
    width: 140,
    height: 140,
    marginTop: 100,
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
});
