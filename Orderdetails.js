import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Modal } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Orderdetails(props) {
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
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
          visible={modal1Visible}
          onRequestClose={() => {
            setModal1Visible(!modal1Visible)
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={styles.buttonclose}
                onPress={() => setModal1Visible(!modal1Visible)}>
                <Image style={styles.cancel} source={require('./assets/cancel.png')} />
              </Pressable>
                 <Text style={styles.reviewheading}>Review Your feedback !</Text>
                 <Text style={styles.subtextreview}>Let us know what about your feedback</Text>
              <Pressable style={styles.button}>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.text}onPress={() => setModal2Visible(true)}>Submit</Text>
            </TouchableOpacity>
          </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modal2Visible}
          onRequestClose={() => {
            setModal2Visible(!modal2Visible)
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Pressable
                style={styles.buttonclose}
                onPress={() => props.navigation.navigate("Home")}>
                <Image style={styles.cancel} source={require('./assets/cancel.png')} />
              </Pressable>
              <Image style={styles.success} source={require('./assets/success.png')} />
              <Text style={styles.successtext}>Thanks for Submitting</Text>
              <Text style={styles.subtext}>We Will happy to see your feedback</Text>
              <Pressable style={styles.button}>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.text} onPress={() => props.navigation.navigate("Home")}>Back to Home Page</Text>
            </TouchableOpacity>
          </Pressable>
            </View>
          </View>
        </Modal>
        <View>
          <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("Home")}>
            <Image style={styles.back} source={require('./assets/back.png')} />
          </TouchableOpacity>
          <Text style={styles.heading}>Order Details</Text>
          <View style={styles.box}>
              <View style={styles.flex}>
                <Text>
                  <Text style={styles.order}>Order ID - </Text><Text style={styles.id}>203334596#</Text>
                </Text>
                <View style={styles.deliverystatus}>
                  <Text style={styles.delivery}>Delivered</Text>
                </View>
              </View>
              <View>
                <Text style={styles.date}>Order returned on july 23, 2022</Text>
              </View>
              <View style={styles.productsection}>
                <View style={styles.flex}>
                  <View style={styles.productbox}>
                    <Image style={styles.product} source={require('./assets/product.jpg')} />
                  </View>
                  <View style={styles.details}>
                    <Text style={styles.productname}>Nike T-shirt</Text>
                    <Text style={styles.category}>Men T-shirt collections</Text>
                    <Text style={{ marginTop: 6 }}>
                      <Text style={styles.specification}>Size : </Text><Text style={styles.model}> M</Text>
                    </Text>
                    <Text style={{ marginTop: 6 }}>
                      <Text style={styles.specification}>Color : </Text><Text style={styles.model}> Black</Text>
                    </Text>
                    <Text style={{ marginTop: 6 }}>
                      <Text style={styles.specification}>Quantity : </Text><Text style={styles.model}> 3</Text>
                    </Text>
                    <View style={styles.flex}>
                      <Text style={styles.discountprice}>$799</Text>
                      <Text style={styles.originalprice}>$999</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={styles.deliverytext}>Order Delivered on july 22, 2022  </Text>
                </View>
                <Pressable style={styles.button}>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.text}onPress={() => setModal1Visible(true)}>Review Order</Text>
            </TouchableOpacity>
          </Pressable>
              </View>
            </View>
            <View>
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
          <View style={{padding:18}}>
      <View>
            <Text style={styles.detailsheading}>Delivery Address</Text>
        </View>
        <View style={styles.secondarybox}>
          <View style={styles.flex}>
          <Ionicons name="home-outline" size={22} color="#323232" />
          <Text style={styles.locationheading}>Home</Text>
          </View>
          <Text style={styles.address}>3/450A, xyz road, Colombo</Text>
          <Text style={styles.address}>1234567890</Text>
        </View>
      </View>
      <View style={styles.secondaryhairline}></View>
          <View style={{ padding: 18 }}>
              <Text style={styles.detailsheading}>Payment Details</Text>
            <View style={styles.secondarybox}>
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
  back: {
    position:"absolute",
    top:20,
    marginLeft: 5,
    width: 70,
    height: 70,
    shadowColor: 'rgba(90, 90, 90, 0.25)',
  },
  amount:{
    paddingLeft:30,
    paddingRight:30,
  },
  amountflex:{
    flexDirection:"row",
    marginTop:17,
    justifyContent:"space-between",
  },
  billheading:{
    fontFamily: "Lato-Bold",
    fontSize: 16,
  },
  Totalheading:{
    fontFamily: "Lato-Bold",
    fontSize: 18,
  },
  price:{
    fontFamily: "Lato-Bold",
    fontSize: 16,
  },
  heading: {
    fontFamily: "Roboto",
    fontSize: 20,
    marginTop:66,
    marginLeft: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  reviewheading:{
    fontFamily: "Lato-Bold",
    fontSize: 18,
    textAlign: "center",
  },
  subtextreview:{
    fontFamily: "Roboto",
    fontSize: 14,
    marginTop:7,
    textAlign: "center",
    color:"#969696",
    fontWeight:"bold",
  },
  priceheading: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    paddingLeft:30,
    marginTop:22,
  },
  hairline: {
    backgroundColor: '#D6D6D6',
    height: 1,
    marginTop:14,
    width: "100%",
  }, 
  secondaryhairline:{
    backgroundColor: '#D6D6D6',
    height: 1,
    marginTop:7,
    width: "100%",
  },
  order: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: "Lato-Bold",
    letterSpacing: 0.25,
    color: '#323232',
  },
  box: {
    width: "88%",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 15,
    borderColor: "rgba(90, 90, 90, 0.3)",
    padding: 12,
    borderWidth: 1,
    paddingTop: 15,
    paddingBottom: 10,
  },
  productsection: {
    marginTop: 18,
  },
  productbox: {
    width: 100,
    height: 140,
    overflow: "hidden",
    borderRadius: 5,
  },
  product: {
    width: "100%",
    height: "100%",
  },
  id: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: "Lato-Bold",
    letterSpacing: 0.25,
    color: "#2E6CF0",
  },
  delivery: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 21,
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: "#4CAF50",
    textAlign: "center",
  },
  deliverytext: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Lato-Bold",
    letterSpacing: 0.18,
    marginTop: 17,
    alignSelf: "flex-end",
    color: "#969696",
  },
  date: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Lato-Bold",
    letterSpacing: 0.18,
    color: "#969696",
  },
  deliverystatus: {
    width: 100,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#ECFFED",
    marginLeft: 44,
  },
  model: {
    fontFamily: "Lato-Bold",
    fontSize: 12,
    marginTop: 5,
    color: "#646464",
  }, 
  discountprice: {
    fontFamily: "Roboto",
    fontSize: 14,
    marginTop: 11,
    fontWeight: "bold",
    color: "#323232",
  },
  originalprice: {
    fontFamily: "Roboto",
    fontSize: 10,
    marginTop: 15,
    fontWeight: "normal",
    color: "#646464",
    marginLeft: 5,
    textDecorationLine: "line-through",
  },
  specification: {
    fontFamily: "Roboto",
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
    color: "#808080",
  },
  productname: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: "#323232",
  },
  category: {
    fontFamily: "Roboto",
    fontSize: 12,
    marginTop: 8,
    fontWeight: "bold",
    color: "#808080",
  },
  details: {
    marginLeft: 13,
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
    width: 319,
    height: 45,
    marginTop: 20,
    marginBottom:7,
    alignSelf: "center",
  },
  detailsheading: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    marginLeft:15,
    color:"#323232",
    fontWeight: "bold",
  },
  link: {
    fontFamily: "Roboto",
    fontSize: 14,
    color:"#2E6CF0",
    fontWeight: "bold",
  },
  secondarybox: {
    width: "93%",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 10,
    borderColor: "rgba(90, 90, 90, 0.3)",
    borderWidth: 1,
    padding:15,
  },
  locationheading:{
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color:"#323232",
    marginTop:3,
    marginLeft:6,
    fontWeight: "bold",
  },
  address: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color:"#848484",
    fontWeight: 500,
    paddingLeft:25,
    paddingTop:5,
  },
  buttonclose: {
    width: 30,
    height: 30,
    padding: 7,
    flexDirection: "row",
    alignSelf: "flex-end",
    backgroundColor: "white",
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
success: {
  alignSelf: "center",
},
successtext: {
  fontFamily: "Lato-Bold",
  fontSize: 18,
  textAlign: "center",
  color: "#4CAF50",
  marginTop: 15,
},
subtext: {
  fontFamily: "Roboto",
  fontSize: 14,
  textAlign: "center",
  color: "#808080",
  marginTop: 10,
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
accnumber: {
  fontFamily: "Lato-Bold",
  fontSize: 14,
  color: "#323232",
  marginTop: 3,
  fontWeight: "bold",
},
});



