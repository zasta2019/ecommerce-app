import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Product from './components/Product';
import { useEffect } from 'react';


export default function Productlisting(props) {
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
    <View style={{ flex: 1 }}>
    <ScrollView style={styles.maincontainer}>
      <View>
        <View>
          <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("Home")}>
            <Image style={styles.back} source={require('./assets/back.png')} />
          </TouchableOpacity>
          <Text style={styles.heading}>Men T-shirt Collection</Text>
          <View style={styles.productlisting}>
         <View style={styles.flexproduct}>
         <Product productname="Nike T-shirts" category="Men T-shirts collection" discount="-30%" discountprice="$799" actualprice="$999" imageSource={require("./assets/product.jpg")}/>
         <Product productname="Puma T-shirts" category="Men T-shirts collection" discount="-50%" discountprice="$599" actualprice="$899" imageSource={require("./assets/menproduct.jpg")}/>
         </View>
         <View style={styles.flexproduct}>
         <Product productname="Nike T-shirts" category="Women T-shirts collection" discount="-30%" discountprice="$799" actualprice="$999" imageSource={require("./assets/w-product.jpg")}/>
         <Product productname="Puma T-shirts" category="Women T-shirts collection" discount="-50%" discountprice="$599" actualprice="$899" imageSource={require("./assets/w-product1.jpg")}/>
         </View>
            <View style={styles.flexproduct}>
         <Product productname="Nike T-shirts" category="Kids T-shirts collection" discount="-30%" discountprice="$799" actualprice="$999" imageSource={require("./assets/k-product.jpg")}/>
         <Product productname="Puma T-shirts" category="Kids T-shirts collection" discount="-50%" discountprice="$599" actualprice="$899" imageSource={require("./assets/k-product2.jpg")}/>
         </View>
        </View> 
        </View>
      </View>
    </ScrollView>
    <TouchableOpacity style={{ backgroundColor: '#D6D6D6', padding: 15 }}>
        <Text style={{ color: 'white' }}>Fixed Button</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "white",
    height: "100%",
    flex:1,
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
  productlisting:{
    padding:10,
  },
  flexproduct:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:15,
  },
});



