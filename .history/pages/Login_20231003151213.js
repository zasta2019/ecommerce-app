import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView,ActivityIndicator } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { user_login } from '../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login(props) {
  const [isChecked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]=useState('');
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  const [fontsLoaded]= useFonts({
    "Lato-Regular": require('.././assets/font/Lato-Regular.ttf'),
    "Lato-Bold": require('.././assets/font/Lato-Bold.ttf'),
  });

  const handleLogin = async () => {
    setIsLoading(true);
    
    if(!email || !password){
      setError("Email and password is mandatory");
      setIsLoading(false); // Stop loading
      return; // Exit early
    }
    try {
      const result = await user_login({
        email: email,
        password: password,
      });
  
      if (result && result.status === 200 && result.data && result.data.accessToken) {
        AsyncStorage.setItem('token', result.data.accessToken);
        AsyncStorage.setItem('IsLoggedIn', JSON.stringify(true));
       // getUserData();
        props.navigation.navigate('Home');
        setIsLoading(false);
      } else {
        // Handle the case where 'result' doesn't have the expected structure
        console.error("Invalid response from the server");
        setError("Invalid response from the server");
        setIsLoading(false);
      }
    } catch (error) {
      // Handle API call errors here
      setIsLoading(false);
      console.error(error.failure);
      setError(error.failure); 
    }
  };

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
        <Image style={styles.logo} source={require('.././assets/logo.png')} />
        {/* <Image style={styles.circle} source={require('./assets/circle.png')} /> */}
      </View>
      <View>
        <Text style={styles.loginheading}>Login to your account</Text>
        <Text style={styles.textfield} >E-mail </Text>
        <TextInput style={styles.inputfield} onChangeText={setEmail} />
        <Text style={styles.textfield} >Password</Text>
        <View style={styles.hidebox}>
         <TextInput secureTextEntry={!showPassword}  onChangeText={setPassword} style={styles.passwordfield} />
          <FeatherIcon name={showPassword ? 'eye' : 'eye-off'} size={18} color='#969696' style={styles.eyeicon} onPress={togglePasswordVisibility} />
         </View>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.forgottext}  onPress={ () => props.navigation.navigate("Otp")}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View>
      {error !== '' && (
  <Text style={styles.errorText}>{error}</Text>
)}
      </View>
      <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.checktext}>Remember my device as logged in</Text>
        
      </View>
      
      <TouchableOpacity activeOpacity={0.6}>
      <Pressable style={styles.button}>
      <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.text}  onPress={handleLogin}>Sign In</Text>
        </TouchableOpacity>
      </Pressable>
      </TouchableOpacity>
      <Text style={styles.optiontext}>-Or Sign in with-</Text>
      <View style={styles.flexbutton}>
        <View>
          <TouchableOpacity activeOpacity={0.6}>
            <Pressable style={[styles.socialbutton, styles.googleicon]}>
              <TouchableOpacity activeOpacity={0.6}>
                <Image source={require('.././assets/google.png')} style={styles.socialicon} />
              </TouchableOpacity>
            </Pressable>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.6}>
            <Pressable style={styles.socialbutton}>
              <TouchableOpacity activeOpacity={0.6}>
                <Image source={require('.././assets/facebook.png')} style={styles.facebookicon} />
              </TouchableOpacity>
            </Pressable>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.6}>
            <Pressable style={[styles.socialbutton, styles.appleicon]}>
              <TouchableOpacity activeOpacity={0.6}>
                <Image source={require('.././assets/apple.png')} style={styles.socialicon} />
              </TouchableOpacity>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.flextext}>
      <Text style={styles.accounttext}>Don't have an Account?</Text>
      <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.clicktext} onPress={ () => props.navigation.navigate("Signup")}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.leftcircle} source={require('.././assets/left-circle.png')} />
    </View>

    {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#0087FE" />
          <Text style={styles.loadingText}>Logging in...</Text>
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
  flexbutton: {
    flexDirection: "row",
    marginTop: 17,
    justifyContent: "space-evenly",
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#8FBF00',
    width: 319,
    height: 45,
    marginTop: 20,
    alignSelf: "center",
  },
  socialbutton: {
    width: 50,
    height: 50,
    elevation: 5,
    shadowColor: 'rgba(90, 90, 90, 0.25)',
    borderRadius: 5,
    backgroundColor: "white",
  },
  socialicon: {
    alignSelf: "center",
    marginTop: 10,
  },
  googleicon: {
    marginLeft: 20,
  },
  appleicon: {
    marginRight: 20,
  },
  facebookicon: {
    alignSelf: "center",
    marginTop: 9,
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
    marginTop: 15,
  },
  checktext: {
    marginLeft: 7,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "600",
    color: "#808080",

  },
  loginheading: {
    fontFamily: "Roboto",
    fontSize: 26,
    fontWeight: "700",
    marginLeft: 40,
    marginTop:15,
    color: "#323232",
  },
  optiontext: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    textAlign: "center",
    color: "#323232",
    marginTop: 15,
  },
  textfield: {
    fontFamily: "Lato-Regular",
    fontSize: 16,
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
  forgottext: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    textAlign: "right",
    marginRight: 33,
    color: "#2E6CF0",
    marginTop: 10,
  },
   flextext:{
    flexDirection:"row",
    alignSelf:"center",
    marginTop:30,
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
