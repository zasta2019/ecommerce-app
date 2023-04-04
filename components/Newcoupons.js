import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Modal } from 'react-native';
import { useState } from 'react';

export default function Newcoupons(props) {
  const [modalVisible, setModalVisible] = useState(false);
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
                style={styles.buttonclose} onPress={() => setModalVisible(!modalVisible)}>
                <Image style={styles.cancel} source={require('../assets/cancel.png')} />
              </Pressable>
              <Image style={styles.success} source={require('../assets/congrats.png')} />
              <Text style={styles.successtext}>Congratulations</Text>
              <Text style={styles.subtext}>Copy your Coupon Code to Redeem the Discounts</Text>
              <View style={styles.couponbox}>
            <Text style={styles.code}>GHREW1178</Text> 
             <Text style={styles.apply}>Copy</Text> 
            <View style={styles.inputfield}></View>
            </View>
            <Text style={styles.priceheading}>Coupon Details : </Text>
            <View style={styles.flexpoint}>
              <View style={styles.point}></View>
              <Text style={styles.rule}>Coupon can be used once for avail the offer</Text>
            </View>
            <View style={styles.flexpoint}>
              <View style={styles.point}></View>
              <Text style={styles.rule}>Offer appplicable for selected products</Text>
            </View>
            <View style={styles.flexpoint}>
              <View style={styles.point}></View>
              <Text style={styles.rule}>Offer is subjected to be applicable above $200</Text>
            </View>
              <Pressable style={styles.button}>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text style={styles.text}>Redeem Now</Text>
                </TouchableOpacity>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={{alignSelf:"center"}}>
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
                <Text style={styles.validityheading}>Validity period : </Text>
                <Text style={styles.date}>22-DEC-2022</Text>
              </View>
              <View>
              <Pressable style={styles.redeembutton}>
                <TouchableOpacity activeOpacity={0.6} onPress={() => setModalVisible(true)}>
                  <Text style={styles.redeemtext}>REDEEM</Text>
                </TouchableOpacity>
              </Pressable>
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
    backgroundColor:"white",
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
    width:100,
    height:100,
  },
  successtext: {
    fontFamily: "Lato-Bold",
    fontSize: 22,
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
  buttonclose: {
    width: 30,
    height: 30,
    padding: 7,
    flexDirection: "row",
    alignSelf: "flex-end",
    backgroundColor: "white",
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
    marginBottom: 7,
    alignSelf: "center",
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
    marginTop: 15,
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
    top:25,
    right:16,
  },
  code:{
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: "#808080",
    fontWeight: 500,
    position:"absolute",
    zIndex:1,
    top:25,
    left:16,
  },
  priceheading: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    paddingLeft: 10,
    marginTop: 15,
  },
  flexpoint:{
    flexDirection:"row",
    marginLeft:10,
    marginTop:5,
  },
  point:{
    width:13,
    height:13,
    borderRadius:50,
    backgroundColor: '#8FBF00',
    marginTop:10,
  },
  rule:{
    fontFamily:"Roboto",
    fontSize:14,
    marginTop:6,
    marginLeft:6,
    color:"#808080",
  },
});



