import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, Button, ImageBackground, } from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Product(props) {

  const navigation = useNavigation();

  const handleNavigate = () => {
    // Use navigation.navigate or other navigation methods here
   // navigation.navigate('Viewproduct', { productId: props.productId });
    if (props.productId) {
      navigation.navigate('Viewproduct', { productId: props.productId });
    } else {
      console.log('Product ID is undefined.');
    }
  };

  const [isFilled, setIsFilled] = useState(false);
  const [fontsLoaded] = useFonts({
    "Lato-Regular": require('../assets/font/Lato-Regular.ttf'),
    "Lato-Bold": require('../assets/font/Lato-Bold.ttf'),
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
    <Pressable>
    <View>
      <View style={styles.productbox}>
        <TouchableOpacity activeOpacity={0.8}  style={styles.product}  onPress={handleNavigate}>
        <Image style={styles.image} source={props.imageSource}/>
        </TouchableOpacity>
        <View style={styles.discountbox}>
          <Text style={styles.discount}>{props.discount}</Text>
        </View>
        <View style={styles.wishlistbox}>
          <MaterialIcons
            name={isFilled ? 'favorite' : 'favorite-border'}
            size={20}
            color={isFilled ? 'red' : '#646464'}
            style={styles.hearticon}
            onPress={() => setIsFilled(!isFilled)}
          />
        </View>
      </View>
     <View style={styles.flex}>
        <TouchableOpacity activeOpacity={0.8} style={styles.productsection}  onPress={handleNavigate}>
          <Text style={styles.productname}>{props.productname}</Text>
          <Text style={styles.category}>{props.category}</Text>
          <View style={styles.flex}>
            <Text style={styles.discountprice}>{props.discountprice}</Text>
            <Text style={styles.originalprice}>{props.actualprice}</Text>
          </View>
        </TouchableOpacity>
        <View>
          <TouchableOpacity activeOpacity={0.8}  style={styles.otpinput} >
          <Feather name="shopping-cart" size={18} color="#646464" style={styles.carticon}  />
          </TouchableOpacity>
        </View>
      </View>


    </View>
</Pressable>
  );
};

const styles = StyleSheet.create({
  productbox: {
    width: 160,
    position: "relative",
    overflow: "hidden",
    borderRadius: 10,
  },
  product: {
    width: 160,
    height: 220,
    overflow: "hidden",
  },
  carticon:{
   position:"absolute",
   left:7,
   top:8,
  },
  otpinput: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
    width: 34,
    height: 34,
    borderRadius: 5,
    textAlign: "center",
    position:"relative",
    elevation: 4,
    borderRadius: 50,
    backgroundColor: "#F6F5FA",
    marginTop: 8,
    marginLeft: 16,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  discountbox: {
    width: 45,
    height: 25,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  hearticon: {
    position: "absolute",
    left: 5,
    top: 5,
  },
  wishlistbox: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    borderRadius: 50,
    position: "absolute",
    top: 10,
    right: 7,
  },
  discount: {
    fontFamily: "Roboto",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    marginTop:3,
  },
  productname: {
    fontFamily: "Lato-Bold",
    marginTop: 10,
    fontSize: 14,
    color: "#323232",
  },
  category: {
    fontFamily: "Roboto",
    fontSize: 10,
    marginTop: 5,
    fontWeight: "bold",
    color: "#808080",
  },
  discountprice: {
    fontFamily: "Roboto",
    fontSize: 14,
    marginTop: 5,
    fontWeight: "bold",
    color: "#323232",
  },
  originalprice: {
    fontFamily: "Roboto",
    fontSize: 10,
    marginTop: 9,
    fontWeight: "normal",
    color: "#646464",
    marginLeft: 5,
    textDecorationLine: "line-through",
  },
  flex: {
    flexDirection: "row",
  },
  productsection:{
    width:110,
  },
});