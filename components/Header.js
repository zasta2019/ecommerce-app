import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, DrawerLayoutAndroid, Button } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect , useRef } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Onboarding(props) {
  const drawer = useRef(null);
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
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
       <TouchableOpacity activeOpacity={0.6}>
       <Pressable style="closebutton" title="Close drawer" onPress={() => drawer.current.closeDrawer()}>
          <Image style={styles.close} source={require('../assets/close.jpg')}/>
          </Pressable>
      </TouchableOpacity>
      <View style={styles.flex}>
        <View style={styles.userimg}>
        <Image style={styles.user} source={require('../assets/user.jpg')}/>
        </View>
        <View style={styles.textcontent}>
          <Text style={styles.greetings}>Good Morning</Text>
          <Text style={styles.username}>Robert</Text>
        </View>
      </View>
     <View style={styles.navcontent}>
     <TouchableOpacity activeOpacity={0.6}>
       <Pressable style={styles.navbutton}>
          <View style={styles.navflex}>
         <Image source={require('../assets/icon-user.png')} style={styles.icons}/>
          <Text style={styles.navtext}>My Profile</Text> 
          <View style={styles.righticon}>
          <AntDesign name="right" size={22} color="#646464" />
          </View>
          </View>
          </Pressable>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6}>
       <Pressable style={styles.navbutton}>
          <View style={styles.navflex}>
          <Image source={require('../assets/calender.png')} style={styles.icons}/>
          <Text style={styles.navtext}>My Orders</Text>  
          <View style={styles.righticon}>
          <AntDesign name="right" size={22} color="#646464" />
          </View>     
          </View>
          </Pressable>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6}>
      <Pressable style={styles.navbutton}>
          <View style={styles.navflex}>
          <Image source={require('../assets/return-icon.png')} style={styles.icons}/>
          <Text style={styles.navtext}>My Returns</Text>  
          <View style={styles.righticon}>
          <AntDesign name="right" size={22} color="#646464" />
          </View>      
          </View>
          </Pressable>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6}>
      <Pressable style={styles.navbutton}>
          <View style={styles.navflex}>
          <Image source={require('../assets/token.png')} style={{width:20,height:29,marginLeft:37,marginTop:3}}/>
          <Text style={styles.navtext}>My Coupons</Text>  
          <View style={styles.righticon}>
          <AntDesign name="right" size={22} color="#646464" />
          </View>      
          </View>
          </Pressable>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6}>
      <Pressable style={styles.navbutton}>
          <View style={styles.navflex}>
          <Image source={require('../assets/help.png')} style={styles.icons}/>
          <Text style={styles.navtext}>Help & Support</Text>  
          <View style={styles.righticon}>
          <AntDesign name="right" size={22} color="#646464" />
          </View>     
          </View>
          </Pressable>
      </TouchableOpacity>
     </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.flexnav}>
       <Pressable>
       <EvilIcons name="navicon" size={33} color="#646464" style={{marginTop:23,marginLeft:30,}}  title="Open drawer"
          onPress={() => drawer.current.openDrawer()}/>
       </Pressable>
      <View>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      </View>
      <View style={styles.navitems}>
      <MaterialCommunityIcons name="bell-outline" size={26} color="#646464" />
      <FontAwesome5 name="heart" size={22} color="#646464" style={{marginTop:3}} />
      <Feather name="shopping-cart" size={23} color="#646464" style={{marginTop:3}}  />
      </View>
      </View>
      <View>
            <TextInput style={styles.inputfield}
              placeholder="Search here"
              placeholderTextColor="#646464"
            />
            <Icon name="search" style={styles.searchIcon} />
            <Icon name="microphone" style={styles.mick} />
          </View>
      </View>
      </View>
    </DrawerLayoutAndroid>
    
  );
};

const styles = StyleSheet.create({
  
  container:{
    marginTop:27,
  },
  navigationContainer: {
    backgroundColor: 'white',
  },
  navitems:{
    flexDirection:"row",
    marginTop:23,
    width:120,
    height:30,
    justifyContent:"space-evenly",
    marginRight:25,
  },
  logo:{
    width:180,
    height:90,
    marginLeft:70,
  },
  navcontent:{
    marginTop:20,
  },
  righticon:{
    marginTop:5,
    flex:1,
    alignItems:"flex-end",
  },
  textcontent:{
    marginTop:30,
    marginLeft:15,
  },
  flex:{
    flexDirection:"row",
  },
  flexnav:{
    flexDirection:"row",
    marginTop:15,
    justifyContent:"space-evenly",
  },
  icons:{
    width:24,
    height:24,
    marginTop:3,
    marginLeft:35,
  },
  close:{
    width:20,
    height:20,
    alignSelf:"flex-end",
    marginRight:20,
    marginTop:5,
  },
  imgnavigation:{
    height:30,
    width:30,
    marginLeft:27,
  },
  header:{
    height:180,
    width:"100%",
    backgroundColor:"#F5FFE8",
  },
  userimg:{
    width:80,
    height:80,
    marginLeft:25,
    marginTop:20,
    borderRadius:50,
    backgroundColor:"white",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  user:{
    overflow:'hidden',
    width:80,
    borderRadius:50,
    height:80,
  },
  navflex:{
    flexDirection:"row",
  },
  inputfield: {
    backgroundColor: "white",
    borderRadius: 8,
    marginLeft:17,
    width: 360,
    paddingLeft:33,
    borderColor:"#969696",
    borderWidth:1,
    paddingRight:33,
    height: 40,
  },
  searchIcon: {
    position: 'absolute',
    left: 25,
    top: 10,
    fontSize: 18,
    color: '#858E93',
  },
  mick: {
    position: 'absolute',
    right: 27,
    top: 10,
    fontSize: 20,
    color: '#858E93',
  },
  greetings: {
    fontSize: 22,
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: '#323232',
  },
  username:{
    fontSize: 24,
    fontFamily: "Lato-Bold",
    marginTop:3,
    letterSpacing: 0.25,
    color: '#323232',
  },
  navbutton:{
    padding:15,
    marginTop:5,
    borderBottomColor: '#EAF2F9',
    borderBottomWidth: 2,
  },
  navtext:{
    fontSize: 18,
    fontFamily: "Lato-Regular",
    letterSpacing: 0.25,
    color: '#323232',
    marginLeft:13,
    marginTop:5,
  },
});