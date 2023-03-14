import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export default function Signup(props) {
  const [isChecked, setChecked] = useState(false);
  const [fontsLoaded]= useFonts({
    "Lato-Regular": require('./assets/font/Lato-Regular.ttf'),
    "Lato-Bold": require('./assets/font/Lato-Bold.ttf'),
  });

  useEffect (() =>{
    async function prepare(){
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  },[]);

  if(!fontsLoaded){
    return undefined;
  }
  else{
    SplashScreen.hideAsync();
  }
  
  return (
    <ScrollView style={styles.maincontainer}>
    <View>
      <View style={styles.flexrow}>
        <Image style={styles.logo} source={require('./assets/logo.jpg')} />
        <Image style={styles.circle} source={require('./assets/circle.png')} />
      </View>
      <View>
        <Text style={styles.loginheading}>Create Your account</Text>
        <Text style={styles.textfield}>User Name</Text>
        <TextInput style={styles.inputfield} />
        <Text style={styles.textfield}>E-mail</Text>
        <TextInput style={styles.inputfield} />
        <Text style={styles.textfield}>Phone Number</Text>
        <TextInput style={styles.inputfield} keyboardType = 'numeric' />
        <Text style={styles.textfield}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.inputfield} />
        <Text style={styles.textfield}>Confirm Password</Text>
        <TextInput secureTextEntry={true} style={styles.inputfield} />
      </View>
      <View style={{marginTop:20}}>
      <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <View style={styles.flexchecktext}>
        <Text style={styles.checktext}>I agree the terms & conditions and</Text>
        <TouchableOpacity activeOpacity={0.6}><Text style={styles.checktextlink}>Privacy Policy</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.checktext}>I Would like to get more offers from Trypling</Text>
      </View>
      </View>
      <TouchableOpacity activeOpacity={0.6}>
      <Pressable style={styles.button}>
      <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </Pressable>
      </TouchableOpacity>
      <View style={styles.flextext}>
      <Text style={styles.accounttext}>Have an Account?</Text>
      <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.clicktext} onPress={ () => this.props.navigation.navigate("Login")}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.leftcircle} source={require('./assets/left-circle.png')} />
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  circle: {
    alignSelf: "flex-end",
  },
  logo: {
    width: 224,
    height: 114,
    marginTop: 60,
    marginRight: 20,
  },
  flexchecktext:{
    flexDirection:"row",
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#8FBF00',
    width: 319,
    height: 45,
    marginTop: 23,
    alignSelf: "center",
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
  flexrow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  flex: {
    flexDirection: "row",
    marginLeft: 40,
    marginTop: 18,
  },
  checktext: {
    marginLeft: 7,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "600",
    color: "#808080",
  },
  checktextlink: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft:5,
    color: "#8FBF00",
  },
  loginheading: {
    fontFamily: "Roboto",
    fontSize: 26,
    fontWeight: "700",
    marginLeft: 40,
    color: "#323232",
  },
  textfield: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 40,
    color: "#323232",
    marginTop: 15,
  },
  accounttext:{
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "600",
    color: "#323232",
  },
  clicktext:{
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E6CF0",
    marginLeft:7,
    marginBottom:2,
  },
   flextext:{
    flexDirection:"row",
    alignSelf:"center",
    marginTop:30,
    marginBottom:20,
   },
  inputfield: {
    width: 319,
    height: 40,
    backgroundColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#969696",
    borderRadius: 5,
    marginLeft: 40,
    marginTop: 7,
    paddingLeft: 10,
  },
  maincontainer: {
    backgroundColor: "white",
    height: "100%",
  }
});
