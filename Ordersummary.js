import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Ordersummary(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    "Lato-Regular": require('./assets/font/Lato-Regular.ttf'),
    "Lato-Bold": require('./assets/font/Lato-Bold.ttf'),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  }
  else {
    SplashScreen.hideAsync();
  }
  return (
    <ScrollView style={styles.maincontainer}>
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={styles.buttonclose}
                onPress={() => setModalVisible(!modalVisible)}>
                <Image style={styles.cancel} source={require('./assets/cancel.png')} />
              </Pressable>

            </View>
          </View>
        </Modal>
        <View>
          <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("Home")}>
            <Image style={styles.back} source={require('./assets/back.png')} />
          </TouchableOpacity>
          <Text style={styles.heading}>Order Summary</Text>
          <View style={{ padding: 18 }}>
            <View style={styles.flexheading}>
              <Text style={styles.detailsheading}>Delivery Address</Text>
              <TouchableOpacity activeOpacity={0.6}>
              <Pressable style={styles.flexlink} onPress={() => props.navigation.navigate("Address")}>
                <AntDesign name="plus" size={16} color="#2E6CF0" style={{ marginTop: 2 }} />
                <Text style={styles.link}>Add New Delivery Address</Text>
              </Pressable>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <View style={styles.flex}>
                <Ionicons name="home-outline" size={22} color="#323232" />
                <Text style={styles.locationheading}>Home</Text>
              </View>
              <Text style={styles.address}>3/450A, xyz road, Colombo</Text>
              <Text style={styles.address}>1234567890</Text>
            </View>
          </View>
          <View style={styles.hairline}></View>
          <View style={{ padding: 18 }}>
            <View style={styles.flexheading}>
              <Text style={styles.detailsheading}>Payment Details</Text>
              <View style={styles.flexlink}>
                <AntDesign name="plus" size={16} color="#2E6CF0" style={{ marginTop: 2 }} />
                <Text style={styles.link}>Add New Payment Method</Text>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.flexpayment}>
                <Image style={styles.payimg} source={require('./assets/payment.jpg')} />
                <View>
                  <Text style={styles.accnumber}>**** **** **** 3252</Text>
                  <Text style={styles.bank}>zasta infotek</Text>
                </View>
                <View>
                  <Text style={styles.expirydate}>10/19</Text>
                </View>
              </View>
            </View>
            <Text style={styles.priceheading}>Price Details (2 Items)</Text>
            <View style={styles.hairline}></View>
            <View style={styles.amount}>
              <View style={styles.amountflex}>
                <Text style={styles.billheading}>Subtotal</Text>
                <Text style={styles.price}>$475</Text>
              </View>
              <View style={styles.amountflex}>
                <Text style={styles.billheading}>Delivery</Text>
                <Text style={styles.price}>$75</Text>
              </View>
              <View style={styles.amountflex}>
                <Text style={styles.billheading}>Promotion</Text>
                <Text style={styles.price}>-$45</Text>
              </View>
            </View>
            <View style={styles.hairline}></View>
            <View style={styles.amount}>
              <View style={styles.amountflex}>
                <Text style={styles.Totalheading}>Total</Text>
                <Text style={styles.price}>-$45</Text>
              </View>
            </View>
            <View style={styles.hairline}></View>
            <Text style={styles.priceheading}>Have any coupon code?</Text>
            <View style={styles.couponbox}>
             <Text style={styles.apply}>Apply</Text> 
            <TextInput style={styles.inputfield} />
            <Pressable style={styles.button}>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.text}>Confirm your order</Text>
            </TouchableOpacity>
          </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "white",
    height: "100%",
  },
  flex: {
    flexDirection: "row",
  },
  flexpayment: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  payimg: {
    width: 70,
    marginTop: 10,
    height: 20,
  },
  back: {
    position: "absolute",
    top: 20,
    marginLeft: 5,
    width: 70,
    height: 70,
    shadowColor: 'rgba(90, 90, 90, 0.25)',
  },
  heading: {
    fontFamily: "Roboto",
    fontSize: 20,
    marginTop: 66,
    marginLeft: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  flexlink: {
    flexDirection: "row",
  },
  flexheading: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  detailsheading: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: "#323232",
    fontWeight: "bold",
  },
  address: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: "#848484",
    fontWeight: 500,
    paddingLeft: 25,
    paddingTop: 5,
  },
  bank: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: "#848484",
    fontWeight: 500,
    paddingTop: 5,
  },
  expirydate: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: "#848484",
    fontWeight: 500,
    paddingTop: 14,
  },
  locationheading: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: "#323232",
    marginTop: 3,
    marginLeft: 6,
    fontWeight: "bold",
  },
  accnumber: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: "#323232",
    marginTop: 3,
    fontWeight: "bold",
  },
  hairline: {
    backgroundColor: '#D6D6D6',
    height: 1,
    width: "100%",
    marginTop: 10,
  },
  link: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#2E6CF0",
    fontWeight: "bold",
  },
  buttonclose: {
    width: 30,
    height: 30,
    padding: 7,
    flexDirection: "row",
    alignSelf: "flex-end",
    backgroundColor: "white",
  },
  box: {
    width: "100%",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 15,
    borderColor: "rgba(90, 90, 90, 0.3)",
    borderWidth: 1,
    padding: 15,
  },
  lockheading:{
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: "#323232",
    marginTop: 10,
    marginLeft: 6,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    width: "100%",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  priceheading: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    paddingLeft: 10,
    marginTop: 25,
  },
  amount: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  amountflex: {
    flexDirection: "row",
    marginTop: 17,
    justifyContent: "space-between",
  },
  billheading: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
  },
  Totalheading: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
  },
  price: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
  },
  couponbox:{
    position:"relative",
  },
  inputfield: {
    width: "95%",
    height: 40,
    backgroundColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#969696",
    borderRadius: 5,
    marginTop: 10,
    marginLeft:10,
    paddingBottom:5,
    paddingLeft: 10,
    paddingRight:60,
  },
  apply:{
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: "#8FBF00",
    fontWeight: 500,
    position:"absolute",
    zIndex:1,
    top:20,
    right:16,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: 'white',
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#8FBF00',
    width: "95%",
    height: 45,
    marginTop: 20,
    marginBottom:7,
    alignSelf: "center",
  },
});



