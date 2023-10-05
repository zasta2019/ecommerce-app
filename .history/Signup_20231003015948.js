import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { user_signup } from './services/auth';

export default function Signup(props) {
  const [isChecked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleSignup = async ()=>{
    setIsLoading(true);

    if(password!==confirmPassword){
      setError("Password and Confirm Password doesnt match");
      setIsLoading(false);
    }
try {
  const result = await user_signup({
    firstName:firstName,
    lastName:lastName,
    mobileno:mobile,
    password:password
  });
  console.log("Sign up ",result)
} catch (error) {
  console.log(error);
  setError(error.failure);
}
    
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
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
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        {/* <Image style={styles.circle} source={require('./assets/circle.png')} /> */}
      </View>
      <View>
        <Text style={styles.loginheading}>Create Your account</Text>
        <Text style={styles.textfield}>First Name</Text>
        <TextInput style={styles.inputfield} />
        <Text style={styles.textfield}>last Namee</Text>
        <TextInput style={styles.inputfield} />
        <Text style={styles.textfield}>E-mail</Text>
        <TextInput style={styles.inputfield} />
        <Text style={styles.textfield}>Phone Number</Text>
        <TextInput style={styles.inputfield} keyboardType = 'numeric' />
        <Text style={styles.textfield}>Password</Text>
        <View style={styles.hidebox}>
         <TextInput secureTextEntry={!showPassword} style={styles.passwordfield} />
          <FeatherIcon name={showPassword ? 'eye' : 'eye-off'} size={18} color='#969696' style={styles.eyeicon} onPress={togglePasswordVisibility} />
         </View>
        <Text style={styles.textfield}>Confirm Password</Text>
        <View style={styles.hidebox}>
         <TextInput secureTextEntry={!showPassword} style={styles.passwordfield} />
          <FeatherIcon name={showPassword ? 'eye' : 'eye-off'} size={18} color='#969696' style={styles.eyeicon} onPress={togglePasswordVisibility} />
         </View>
      </View>
      <View style={{marginTop:20}}>
      <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <View style={styles.flexchecktext}>
        <Text style={styles.checktext}>I agree the terms & conditions and</Text>
        <TouchableOpacity activeOpacity={0.6}><Text style={styles.checktextlink}>Privacy Policy</Text></TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.checktext}>I Would like to get more offers from Trypling</Text>
      </View> */}
      </View>
      <TouchableOpacity activeOpacity={0.6}>
      <Pressable style={styles.button}>
      <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.text} onPress={handleSignup}>Sign Up</Text>
        </TouchableOpacity>
      </Pressable>
      </TouchableOpacity>
      
      <View style={styles.flextext}>
      <Text style={styles.accounttext}>Have an Account?</Text>
      <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.clicktext} onPress={ () => props.navigation.navigate("Login")}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.leftcircle} source={require('./assets/left-circle.png')} />
    </View>
    {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#0087FE" />
          <Text style={styles.loadingText}>Signing in...</Text>
        </View>
      )}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  circle: {
    alignSelf: "flex-end",
  },
  logo: {
    width: 150,
    height: 80,
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
    marginTop:10,
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
  },
  passwordfield:{
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
    paddingRight:35,
  },
  hidebox:{
    position:"relative",
  },
  eyeicon:{
    position:"absolute",
    right:45,
    top:17,
  },
  loadingOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: 'red',
    marginLeft: 40, // Adjust the styling as needed
    marginTop: 5,   // Adjust the styling as needed
  }
});
