import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Frame_Tiki = () => {
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <View style={styles.productMedia}>
          <Image
            style={styles.productImage}
            source={require("../assets/book.png")}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.productName}>
            Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text style={styles.productSub}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>141.800 đ</Text>
          <Text style={styles.productLastprice}>150.000 d</Text>
          <View style={styles.productAction}>
            <TouchableOpacity>
              <Image
                style={styles.productButton}
                source={require("../assets/btnminus.png")}
              />
            </TouchableOpacity>
            <Text style={styles.quantity}>1</Text>
            <TouchableOpacity>
              <Image
                style={styles.productButton}
                source={require("../assets/btnadd.png")}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.productBuylater}>Mua sau</Text>
        </View>
      </View>

      <View style={styles.discount}>
        <View style={styles.existDiscount}>
          <Text style={styles.discountText}>Mã giảm giá đã lưu</Text>
          <Text style={{ color: "blue", fontSize: 12, fontWeight: 700 }}>
            Xem tại đây
          </Text>
        </View>
        <View style={styles.useDiscount}>
          <View style={styles.inputDiscount}>
            <View style={styles.yellow}></View>
            <TextInput placeholder="Mã giảm giá" />
          </View>
          <TouchableOpacity style={styles.discountButton}>
            <Text style={styles.discountButtonText}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.border}></View>
        <View style={styles.addDiscount}>
          <Text style={styles.addDiscountText}>
            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <Text style={{ color: "blue", fontSize: 12, fontWeight: 700 }}>
            Nhập tại đây?
          </Text>
        </View>
        <View style={styles.border}></View>
      </View>

      <View style={styles.subTotal}>
        <Text style={styles.subTotalText}>Tạm tính</Text>
        <Text style={styles.subTotalPrice}>141.800 đ</Text>
      </View>

      <View style={styles.bottom}>
        <View style={styles.total}>
          <Text style={styles.totalText}>Thành tiền</Text>
          <Text style={styles.totalPrice}>141.800 đ</Text>
        </View>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Frame_Tiki;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    
    backgroundColor : "#c4c4c4"
  },
  product: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor : "#fff",
    padding: 15,
  },
  productMedia: {
    width: 105,
    height: 130,
    marginRight: 20,
  },
  productImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  info: {
    position: "relative",
  },
  productName: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 10,
  },
  productSub: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 10,
  },
  productAction: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 50,
    height: 15,
    justifyContent: "space-between",
    marginTop: 10,
  },
  productButton: {
    width: 15,
    height: 15,
  },
  quantity: {
    fontSize: 12,
    fontWeight: 700,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 700,
    color: "red",
  },
  productLastprice: {
    color: "#808080",
  },
  productBuylater: {
    position: "absolute",
    color: "blue",
    fontSize: 12,
    fontWeight: 700,
    bottom: 5,
    right: 5,
  },
  discount: {
    display: "flex",
    backgroundColor : "#fff",
    padding: 15,
    paddingBottom: 0
  },
  existDiscount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  discountText: {
    marginRight: 20,
    fontSize: 12,
    fontWeight: 700,
  },
  useDiscount: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  yellow: {
    width: 32,
    height: 16,
    backgroundColor: "yellow",
    marginRight: 10,
  },
  inputDiscount: {
    borderWidth: 1,
    borderColor: "#ccc",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    width: 240,
  },
  discountButton: {
    width: 100,
    backgroundColor: "#0a5eb7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  discountButtonText: {
    fontSize: 15,
    fontWeight: 700,
    color: "#fff",
  },
  addDiscount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop : 20
  },
  addDiscountText: {
    marginRight: 10,
  },
  border : {
    width : "120%",
    marginLeft : -20,
    marginTop : 20,
    height : 10,
    backgroundColor : "#c4c4c4"
  },
  subTotal : {
    backgroundColor : "#fff",
    paddingVertical : 10,
    paddingHorizontal : 30,
    display : "flex",
    flexDirection : "row",
    alignItems : "center", 
    justifyContent : "space-between"
  },
  subTotalText : {
    fontSize : 18,
    fontWeight : 700
  },
  subTotalPrice : {
    fontSize : 18,
    fontWeight : 700,
    color : "red"
  },

  bottom : {
    position : "absolute",
    bottom : 0,
    backgroundColor : "#fff",
    width : "100%",
    padding : 10
  },
  total : {
    display : "flex",
    flexDirection : "row",
    justifyContent : "space-between",
    paddingVertical : 10
  },
  totalText : {
    fontSize : 18, 
    fontWeight : 700,
    color : "#808080"
  },
  totalPrice : {
    fontSize : 20, 
    fontWeight : 700,
    color : "red"
  },
  orderButton : {
    backgroundColor : "red",
    padding : 10,
    alignItems : "center"
  },
  orderButtonText : {
    fontSize : 18, 
    fontWeight : 700,
    color : "#fff",
  }
});
