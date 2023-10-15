import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import Todo from "./components/Todo";
import TodoReducer from "./components/TodoReducer";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Screen1"
          component={Screen1}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Screen2"
          component={Todo}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

    // <Todo></Todo>
    // <TodoReducer></TodoReducer>
  );
}

const styles = StyleSheet.create({
  screen1: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  media: {
    width: 300,
    height: 350,
    padding: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  infomation: {
    display: "flex",
    width: "100%",
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 10,
  },
  rate: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  starList: {
    display: "flex",
    flexDirection: "row",
    marginRight: 20,
  },
  star: {
    width: 25,
    height: 25,
  },
  price: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },

  salePrice: {
    fontSize: 18,
    fontWeight: 700,
    marginRight: 10,
  },
  finalPrice: {
    fontSize: 15,
    fontWeight: 700,
    textDecorationLine: "line-through",
  },
  redLine: {
    display: "flex",
    flexDirection: "row",
  },
  redText: {
    fontSize: 12,
    fontWeight: 700,
    color: "red",
    marginRight: 10,
  },
  help: {
    width: 20,
    height: 20,
  },
  colorPicker: {
    marginTop: 20,
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
  },
  colorPickerText: {
    fontSize: 15,
    fontWeight: 400,
  },

  buyButton: {
    marginTop: 20,
    width: "80%",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    backgroundColor: "red",
  },
  buyButtonText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#fff",
  },
});

const Screen1 = ({ navigation, route }) => {
  const [image, setImage] = useState(require("./assets/vs_blue.png"));

  console.log(route.params?.image);
  return (
    <View style={styles.screen1}>
      <View style={styles.media}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={route.params?.image || image}
        />
      </View>
      <View style={styles.infomation}>
        <Text style={styles.name}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={styles.rate}>
          <View style={styles.starList}>
            <Image style={styles.star} source={require("./assets/star.png")} />
            <Image style={styles.star} source={require("./assets/star.png")} />
            <Image style={styles.star} source={require("./assets/star.png")} />
            <Image style={styles.star} source={require("./assets/star.png")} />
            <Image style={styles.star} source={require("./assets/star.png")} />
          </View>
          <Text style={styles.totalRate}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.salePrice}>1.790.000 đ</Text>
          <Text style={styles.finalPrice}>1.990.000 đ</Text>
        </View>
        <View style={styles.redLine}>
          <Text style={styles.redText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Image style={styles.help} source={require("./assets/help.svg")} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.colorPicker}
        onPress={() => {
          navigation.navigate("Screen2");
        }}
      >
        <Text style={styles.colorPickerText}>4 MÀU-CHỌN MÀU</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles2 = StyleSheet.create({
  screen2: {
    flex: 1,
    backgroundColor: "#fff",
  },
  product: {
    flex: 2,
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 130,
    height: 130,
  },
  picker: {
    flex: 8,
    backgroundColor: "#C4C4C4",
    padding: 10,
  },
  colorList: {
    marginTop: 20,
    display: "flex",
    gap: 20,
    alignItems: "center",
  },
  shape: {
    width: 80,
    height: 80,
  },
  button: {
    width: "90%",
    padding: 10,
    backgroundColor: "#1952E2",
    marginHorizontal: "auto",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#fff",
  },
});

const Screen2 = ({ navigation, route }) => {
  const [image, setImage] = useState(require("./assets/vs_blue.png"));

  return (
    <View style={styles2.screen2}>
      <View style={styles2.product}>
        <Image resizeMode="contain" style={styles2.image} source={image} />
        <Text style={styles2.name}>
          Điện Thoại Vsmart Joy 3 Hàng chính hãng
        </Text>
      </View>
      <View style={styles2.picker}>
        <Text style={styles2.textPicker}>Chọn một màu bên dưới:</Text>
        <View style={styles2.colorList}>
          <TouchableOpacity
            style={[styles2.shape, { backgroundColor: "#C5F1FB" }]}
            onPress={() => {
              setImage(require("./assets/vs_silver.png"));
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles2.shape, { backgroundColor: "red" }]}
            onPress={() => {
              setImage(require("./assets/vs_red.png"));
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles2.shape, { backgroundColor: "black" }]}
            onPress={() => {
              setImage(require("./assets/vs_black.png"));
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles2.shape, { backgroundColor: "blue" }]}
            onPress={() => {
              setImage(require("./assets/vs_blue.png"));
            }}
          ></TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles2.button}
          onPress={() => {
            navigation.navigate({
              name: "Screen1",
              params: { image },
            });
          }}
        >
          <Text style={styles2.buttonText}>Xong</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
