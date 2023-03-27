import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export default function Empty(props) {
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
        <View>
    <View style={styles.content}>
        <View style={styles.imgbox}>
        <Image style={styles.cartimg} source={props.image} />
        </View>
        <Text style={styles.emptytext}>{props.heading}</Text> 
          <Text style={styles.sub}>{props.description}</Text>  
          <Pressable style={styles.button}>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.text}>{props.button}</Text>
            </TouchableOpacity>
          </Pressable>
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
  content:{
   alignItems:"center",
   marginTop:60,
  },
  cartimg:{
    width:"100%",
    height:"100%",
  },
  imgbox:{
    width:40,
    height:40,
    alignItems:"center",
    justifyContent:"center",
  },
  flex: {
    flexDirection: "row",
  },
  emptytext: {
    fontFamily: "Lato-Bold",
    fontSize: 20,
    marginLeft: 5,
    marginTop:15,
    textAlign: "center",
    fontWeight: "bold",
  },
  sub:{
    fontFamily:"Roboto",
    fontSize:14,
    marginTop:10,
    color:"#808080",
    fontWeight:"normal",
    textAlign:"center",
    paddingLeft:20,
    lineHeight:20,
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
    marginTop: 18,
    alignSelf: "center",
  },
});



