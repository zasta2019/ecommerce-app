import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';

export default function Paymentsuccess(props) {
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
        <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("Home")}>
          <Image style={styles.back} source={require('./assets/back.png')} />
        </TouchableOpacity>
        <View style={styles.successcontent}>
          <Image style={styles.success} source={require('./assets/paymentsuccess.jpg')} />
          <Text style={styles.heading}>Your Payment was Successfull !</Text>
          <View style={styles.bannerbox}>
            <Image style={styles.logo} source={require('./assets/bglogo.png')} />
            <Text style={styles.boxheading}>All We need is a Little Kindness & Gratitude</Text>
            <Text style={styles.paragraph}>For your purchase with us, you have a fantastic taste & now you are officially a “Green-O-Holic”,
              Through our initiative where “Fashion meets Nature” a concept inspired from Mother Earth’ we promote conservation of Gaia. We promise to deliver smart, comfortable & rustic outfits with a touch of luxurious organic clothing. We would love to see our products being used & tagged on social media.
            </Text>
            <Text style={styles.regards}>Salutations to Green-O-Holics,</Text>
            <Text style={styles.regards}>Team Flaunt Green</Text>
            <Image style={styles.bglogo} source={require('./assets/background.png')} />
          </View>
          <View style={styles.box}>
            <View style={styles.flex}>
              <Text>
                <Text style={styles.order}>Order ID - </Text><Text style={styles.id}>203334596#</Text>
              </Text>
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
              <View style={styles.flexbutton}>
                <Pressable style={styles.button}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.text}>Order Details</Text>
                  </TouchableOpacity>
                </Pressable>
                <Pressable style={styles.secondary}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.secondarytext}>Track Order</Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.emailbox}>
            <View style={styles.flex}>
              <Feather name="mail" size={36} color="#8FBF00" />
              <View>
                <Text style={styles.emailtext}>We have sent you to confirmation email to <Text style={styles.email}>zastainfotec@gmail.com</Text> with the order details</Text>
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
  back: {
    position: "absolute",
    top: 20,
    marginLeft: 5,
    width: 70,
    height: 70,
    shadowColor: 'rgba(90, 90, 90, 0.25)',
  },
  logo: {
    width: 134,
    height: 73,
    alignSelf: "center",
  },
  bglogo: {
    width: 190,
    position: "absolute",
    top: "40%",
    zIndex: -1,
    height: 130,
    alignSelf: "center",
  },
  boxheading: {
    fontFamily: "Lato-Bold",
    fontSize: 15,
    textAlign: "left",
    color: "#323232",
  },
  regards: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    marginTop: 6,
    alignSelf: "flex-end",
    color: "#323232",
  },
  successcontent: {
    marginTop: 90,
  },
  heading: {
    fontFamily: "Roboto",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#8FBF00",
    marginTop: 10,
  },
  paragraph: {
    fontFamily: "Roboto",
    fontSize: 13,
    textAlign: "left",
    fontWeight: 500,
    lineHeight: 22,
    color: "#727272",
    marginTop: 10,
  },
  success: {
    width: 65,
    height: 65,
    alignSelf: "center",
  },
  bannerbox: {
    width: "90%",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 15,
    backgroundColor: "#F7F3CD",
    borderColor: "rgba(90, 90, 90, 0.3)",
    borderWidth: 1,
    padding: 20,
    position: "relative",
  },
  flex: {
    flexDirection: "row",
  },
  box: {
    width: "90%",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 15,
    borderColor: "rgba(90, 90, 90, 0.3)",
    padding: 12,
    borderWidth: 1,
    paddingTop: 15,
    paddingBottom: 10,
  },
  emailbox: {
    width: "90%",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 15,
    padding: 15,
    elevation: 1,
    paddingTop: 15,
    paddingBottom: 10,
    marginBottom: 15,
  },
  productsection: {
    marginTop: 18,
  },
  order: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: "Lato-Bold",
    letterSpacing: 0.25,
    color: '#323232',
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
  details: {
    marginLeft: 13,
  },
  date: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Lato-Bold",
    letterSpacing: 0.18,
    color: "#969696",
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
  model: {
    fontFamily: "Lato-Bold",
    fontSize: 12,
    marginTop: 5,
    color: "#646464",
  },
  id: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: "Lato-Bold",
    letterSpacing: 0.25,
    color: "#2E6CF0",
  },
  category: {
    fontFamily: "Roboto",
    fontSize: 12,
    marginTop: 8,
    fontWeight: "bold",
    color: "#808080",
  },
  productname: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: "#323232",
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#8FBF00',
    width: 140,
    height: 45,
    marginTop: 20,
    alignSelf: "center",
  },
  secondary: {
    borderWidth: 1,
    borderColor: "#2E6CF0",
    borderRadius: 5,
    backgroundColor: 'white',
    width: 140,
    height: 45,
    marginTop: 20,
    alignSelf: "center",
  },
  secondarytext: {
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: '#2E6CF0',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: 'white',
  },
  flexbutton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  emailtext:{
    fontFamily: "Lato-Regular",
    fontSize: 14,
    color: "#727272",
    lineHeight:18,
    marginLeft:7,
    marginTop:2,
  },
  email:{
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: "#323232",
  },
});



