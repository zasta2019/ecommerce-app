import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useRef } from "react";
export default function Otp(props) {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourInput = useRef();
  return (
    <ScrollView style={styles.maincontainer}>
    <View>
      <View style={styles.fleximage}>
      <TouchableOpacity activeOpacity={0.6} onPress={ () => props.navigation.navigate("Login")}>
      <Image style={styles.back} source={require('./assets/back.png')}/>
      </TouchableOpacity>
      <Image style={styles.rightcircle} source={require('./assets/circle.png')} />
      </View>
      <Text style={styles.forgotheading}>Forgot Password</Text>
      <Text style={styles.otpheading}>Enter OTP</Text>
      <Text style={styles.numberheading}>Code is sent to 1234567890</Text>
      <Text style={styles.enterotp}>Enter your OTP code here</Text>
      <View style={styles.flexinput}>
      <TextInput style={styles.otpinput} keyboardType = 'numeric' maxLength={1} onChangeText={text=>{
        text && secondInput.current.focus();
      }}
      ref={firstInput}/>
      <TextInput style={styles.otpinput} keyboardType = 'numeric' maxLength={1} onChangeText={text=>{
        text ? thirdInput.current.focus():firstInput.current.focus();
      }}
      ref={secondInput}/>
      <TextInput style={styles.otpinput} keyboardType = 'numeric' maxLength={1} onChangeText={text=>{
        text ? fourInput.current.focus():secondInput.current.focus();
      }}
      ref={thirdInput}/>
      <TextInput style={styles.otpinput} keyboardType = 'numeric' maxLength={1} onChangeText={text=>{
        text ? fourInput.current.focus():secondInput.current.focus();!text && thirdInput.current.focus();
      }}
      ref={fourInput}/>
      </View>
      <Text style={styles.notfound}>I didn't receive a code !</Text>
      <TouchableOpacity activeOpacity={0.6}>
      <Text style={styles.resend}>Resend Code</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6}>
      <Pressable style={styles.button}>
      <TouchableOpacity activeOpacity={0.6} onPress={ () => props.navigation.navigate("Password")}>
        <Text style={styles.text}>Verify Now</Text>
        </TouchableOpacity>
      </Pressable>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rightcircle: {
    alignSelf:"flex-end",
  },
  leftcircle:{
  marginTop:53,
  },
  otpinput:{
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
    width:50,
    height:50,
    borderRadius:5,
    textAlign:"center",
    elevation: 5,
    borderRadius: 5,
    backgroundColor: "#F6F5FA",
    marginTop:20,
  },
  resend:{
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2E6CF0",
    marginTop: 10,
  },
  flexinput:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    padding:10,
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
    alignSelf: "center",
  },
  forgotheading:{
    fontFamily: "Roboto",
    fontSize: 26,
    fontWeight: "700",
    textAlign:"center",
    position:"relative",
    bottom:65,
    color: "#323232",
  },
  notfound:{
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "500",
    textAlign:"center",
    color: "#808080",
    marginTop:20,
  },
  otpheading:{
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    textAlign:"center",
    color: "#323232",
  },
  numberheading:{
    fontFamily: "Roboto",
    fontSize: 18,
    marginTop:10,
    fontWeight: "bold",
    textAlign:"center",
    color: "#808080",
  },
  fleximage:{
    flexDirection:"row",
    marginTop:24,
    justifyContent:"space-between",
  },
  enterotp:{
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "500",
    textAlign:"center",
    marginTop:35,
    color: "#323232",
  },
  back: {
    position:"absolute",
    top:20,
    marginLeft: 5,
    width: 70,
    height: 70,
    shadowColor: 'rgba(90, 90, 90, 0.25)',
  },
  maincontainer: {
    backgroundColor: "white",
    height: "100%",
  }
});
