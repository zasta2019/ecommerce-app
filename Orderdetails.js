import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


export default function Orderdetails(props) {
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
              <Text style={styles.text}>Review Order</Text>
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
  back: {
    position:"absolute",
    top:20,
    marginLeft: 5,
    width: 70,
    height: 70,
    shadowColor: 'rgba(90, 90, 90, 0.25)',
  },
  heading: {
    fontFamily: "Roboto",
    fontSize: 20,
    marginTop:66,
    marginLeft: 5,
    textAlign: "center",
    fontWeight: "bold",
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
});



