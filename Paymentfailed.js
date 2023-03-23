import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export default function Paymentfailed(props) {
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
    <View style={styles.maincontainer}>
      <View>
          <View>
          <Image style={styles.failed} source={require('./assets/failed.jpg')}/>
          <Text style={styles.heading}>Your Payment was Declined !</Text> 
          <Text style={styles.sub}>If the user already signed will navigate to shipping address field always, as the new user need to login or create account.</Text>  
          <Pressable style={styles.button}>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.text}>Go to Checkout</Text>
            </TouchableOpacity>
          </Pressable>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "white",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    height: "100%",
  },
  heading: {
    fontFamily: "Roboto",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color:"#FF3838",
    marginTop:10,
  },
  failed:{
    width:65,
    height:65,
    alignSelf:"center",
  },
  sub:{
    fontFamily:"Roboto",
    fontSize:14,
    marginTop:10,
    color:"#808080",
    fontWeight:"normal",
    textAlign:"center",
    paddingLeft:20,
    paddingRight:20,
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
    marginTop: 12,
    alignSelf: "center",
  },
});



