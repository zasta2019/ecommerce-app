import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export default function Expiredcoupons(props) {
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
    <ScrollView style={styles.maincontainer}>
      <View>
        <View style={{alignSelf:"center"}}>
         <View style={styles.commonbox}>
         <View style={styles.couponbox}>
           <View style={styles.couponcontent}>
              <View style={styles.flexcoupon}>
                <Text style={styles.couponheading}>Shopping Coupon</Text>
                <Text style={styles.discountpercentage}>50%</Text>
              </View>
              <Text style={styles.description}>Shopping your favourites with discount</Text>
               <View style={styles.flexcircles}>
          <View style={styles.leftcircle}></View>
          <View style={styles.rightcircle}></View>
          </View>
              <View style={styles.dottedhairline}></View>
             <View style={styles.flexlast}>
             <View style={styles.flexvalidity}>
                <Text style={styles.validityheading}>Expired on : </Text>
                <Text style={styles.date}>12-DEC-2022</Text>
              </View>
              <View>
              <Pressable style={styles.redeembutton}>
                  <Text style={styles.redeemtext}>EXPIRED</Text>
              </Pressable>
              </View>
             </View>
           </View>
          </View>
          <View style={styles.expirybox}>
        <View style={styles.expiredbuttons}>
            <Text style={styles.expiredtext}>Expired</Text>
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
  flexlast:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  redeembutton:{
    width:80,
    height:25,
    borderRadius:40,
    backgroundColor:"#D9D9D9",
    marginTop:10,
  },
redeemtext:{
  fontFamily:"Roboto",
  fontSize:12,
  fontWeight:"bold",
  color:"#323232",
  textAlign:"center",
  paddingTop:5,
},
  couponcontent:{
    width:340,
    borderRadius:5,
    height:160,
    backgroundColor:"#0071C2",
    marginTop:15,
    padding:16,
  },
  expirybox:{
    width:340,
    borderRadius:5,
    position:"absolute",
    opacity:0.9,
    height:160,
    backgroundColor:"gray",
    marginTop:15,
  },
  expiredbuttons:{
    width:340,
    height:40,
    backgroundColor:"#969696",
    position:"absolute",
    bottom:0,
  },
  expiredtext:{
    fontFamily:"Lato-Bold",
    fontSize:20,
    marginTop:6,
    color:"white",
    textAlign:"center",
  },
  commonbox:{
    position:"relative",
  },
  couponheading:{
    fontFamily:"Lato-Bold",
    fontSize:22,
    color:"white",
  },
  flexvalidity:{
    flexDirection:"row",
    marginTop:15,
  },
  validityheading:{
    fontFamily:"Lato-Bold",
    fontSize:14,
    color:"white",
  },
  date:{
    fontFamily:"Lato-Regular",
    marginTop:1,
    color:"white",
    fontSize:14,
  },
  flexcoupon:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  discountpercentage:{
    fontFamily:"Lato-Bold",
    fontSize:26,
    color:"white",
  },
  rightcircle:{
    height:35,
    width:35,
    backgroundColor:"white",
    position:"relative",
    top:10,
    left:35,
    borderRadius:50,
  },
  leftcircle:{
    height:35,
    width:35,
    backgroundColor:"white",
    position:"relative",
    top:10,
    right:35,
    borderRadius:50,
  },
  flexcircles:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  description:{
    fontFamily:"Roboto",
    color:"white",
    fontSize:14,
    marginTop:4,
  },
  dottedhairline:{
    borderWidth: 1, 
    borderRadius: 1, 
    borderStyle: 'dashed', 
    borderColor: 'white', 
    borderStyle: 'dashed',
    borderDashPattern: [200,200],
    width: '100%',
    position:"relative",
    bottom:10,
  },
});



