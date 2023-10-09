import * as React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Profiledetails(props) {
  const screenHeight = Dimensions.get('window').height;
  const [fontsLoaded] = useFonts({
    "Lato-Bold": require('./assets/font/Lato-Bold.ttf'),
    "Lato-Regular": require('./assets/font/Lato-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <View style={styles.container}>
     {/* <Text style={styles.heading}>My Profile</Text> */}
     <View style={styles.profilebox}>
       <View style={styles.imgContainer}>
         <Image
           style={styles.img} // Add this style
           source={require('./assets/man.jpg')}
           resizeMode="contain"
         />
       </View>
       <Text style={styles.name}>Surya Chandran</Text>
       {/* <Text style={styles.role}>Warehouse Manager</Text> */}
     </View>
<Pressable activeOpacity={0.6} onPress={ () => props.navigation.navigate("Profile")}>
<View style={styles.flexall}>
        <View style={styles.flex}>
            <View style={styles.box}>
            <FontAwesome5 name="user" size={24} color="black" />
            </View>
            <View>
            <Text style={styles.option}>My Profile</Text>
            </View>
        </View>
        <View>
        <AntDesign name="right" size={24} color="black" style={{marginTop:10,}} />
        </View>
     </View>
</Pressable>
<Pressable activeOpacity={0.6} onPress={ () => props.navigation.navigate("Myorder")}>
<View style={styles.flexall}>
        <View style={styles.flex}>
            <View style={styles.box}>
            <Octicons name="list-ordered" size={24} color="black" />
            </View>
            <View>
            <Text style={styles.option}>My Orders</Text>
            </View>
        </View>
        <View>
        <AntDesign name="right" size={24} color="black" style={{marginTop:10,}} />
        </View>
     </View>
</Pressable>
<Pressable activeOpacity={0.6}  onPress={ () => props.navigation.navigate("Returns")}>
<View style={styles.flexall}>
        <View style={styles.flex}>
            <View style={styles.box}>
            <AntDesign name="retweet" size={24} color="black" />
            </View>
            <View>
            <Text style={styles.option}>My Returns</Text>
            </View>
        </View>
        <View>
        <AntDesign name="right" size={24} color="black" style={{marginTop:10,}} />
        </View>
     </View>
</Pressable>
<Pressable activeOpacity={0.6} onPress={ () => props.navigation.navigate("Coupon")}>
<View style={styles.flexall}>
        <View style={styles.flex}>
            <View style={styles.box}>
            <AntDesign name="gift" size={24} color="black" />
            </View>
            <View>
            <Text style={styles.option}>My Coupons</Text>
            </View>
        </View>
        <View>
        <AntDesign name="right" size={24} color="black" style={{marginTop:10,}} />
        </View>
     </View>
</Pressable>
<Pressable activeOpacity={0.6} onPress={ () => props.navigation.navigate("Contact")}>
<View style={styles.flexall}>
        <View style={styles.flex}>
            <View style={styles.box}>
            <Feather name="headphones" size={24} color="black" />
            </View>
            <View>
            <Text style={styles.option}>Help & Support</Text>
            </View>
        </View>
        <View>
        <AntDesign name="right" size={24} color="black" style={{marginTop:10,}} />
        </View>
     </View>
</Pressable>
<Pressable activeOpacity={0.6} onPress={ () => props.navigation.navigate("Login")}>
<View style={styles.flexall}>
        <View style={styles.flex}>
            <View style={styles.box}>
            <MaterialCommunityIcons name="logout" size={24} color="black" />
            </View>
            <View>
            <Text style={styles.option}>Logout</Text>
            </View>
        </View>
        <View>
        <AntDesign name="right" size={24} color="black" style={{marginTop:10,}} />
        </View>
     </View>
</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  flex:{
    flexDirection:"row",
  },
  flexall:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:20,
  },
  click:{
    width:"100%",
    padding:5,
    height:35,
  },
  heading:{
    fontFamily:"Lato-Bold",
    fontSize:22,
    color:"#302A2A",
    textAlign:"center",
    marginTop:5,
  },
  name:{
    fontFamily:"Lato-Bold",
    fontSize:20,
    color:"#302A2A",
    textAlign:"center",
    marginTop:10,
  },
  option:{
    fontFamily:"Lato-Bold",
    fontSize:18,
    marginLeft:10,
    marginTop:10,
    color:"#302A2A",
  },
  role:{
    fontFamily:"Lato-Regular",
    fontSize:18,
    marginTop:7,
    color:"#0087FE",
    textAlign:"center",
  },
  box:{
    width:40,
    height:40,
    borderRadius:5,
    backgroundColor: "#F4F4F4",
    justifyContent:"center",
    alignItems:"center",
  },
  profilebox: {
    backgroundColor: "#F4F4F4",
    borderRadius: 5,
    marginTop:50,
    paddingBottom:10,
  },
  imgContainer: {
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
    marginTop:-25,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
});
