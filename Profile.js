import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Main from './components/Main';

let customFonts = {
  "Lato-Regular": require('./assets/font/Lato-Regular.ttf'),
   "Lato-Bold": require('./assets/font/Lato-Bold.ttf'),
};

export default class Profile extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
  return (
    <ScrollView style={styles.maincontainer}>
    <View>
    <View>
    <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.navigation.navigate("Home")}>
          <Image style={styles.back} source={require('./assets/back.png')} />
        </TouchableOpacity>
      <Text style={styles.heading}>My Profile</Text>
 <View style={styles.settings}>
 <View style={styles.flex}>
    <View style={styles.content}>
    <FontAwesome5 name="user" size={23} color="black" style={{marginLeft:2}} />
      <Text style={styles.main}>Account Settings</Text>
      <Text style={styles.sub}>If you can change your account settings</Text>
    </View>
    <View style={{marginLeft:6}}>
    <Pressable style={styles.changebutton}>
    <TouchableOpacity activeOpacity={0.6}>
      <Text style={styles.buttontext} onPress={ () => this.props.navigation.navigate("Account")}>Change</Text>
      </TouchableOpacity>
    </Pressable>
    </View>
   </View>
 </View>
 <View style={styles.hairline}></View>
 <View style={styles.settings}>
 <View style={styles.flex}>
    <View style={styles.content}>
    <MaterialIcons name="lock-outline" size={26} color="black" />
      <Text style={styles.main}>Password & Security</Text>
      <Text style={styles.sub}>If you can change your security settings</Text>
    </View>
    <View style={{marginLeft:6}}>
    <Pressable style={styles.changebutton}>
    <TouchableOpacity activeOpacity={0.6}>
      <Text style={styles.buttontext} onPress={ () => this.props.navigation.navigate("Security")}>Change</Text>
      </TouchableOpacity>
    </Pressable>
    </View>
   </View>
 </View>
 <View style={styles.hairline}></View>
 <View style={styles.settings}>
 <View style={styles.flex}>
    <View style={styles.content}>
    <MaterialIcons name="payment" size={24} color="black" />
      <Text style={styles.main}>Payment Option</Text>
      <Text style={styles.sub}>If you can change your payment settings</Text>
    </View>
    <View>
    <Pressable style={styles.changebutton}>
    <TouchableOpacity activeOpacity={0.6}>
      <Text style={styles.buttontext}>Change</Text>
      </TouchableOpacity>
    </Pressable>
    </View>
   </View>
 </View>
 <View style={styles.hairline}></View>
 <View style={styles.settings}>
 <View style={styles.flex}>
    <View style={styles.content}>
    <Ionicons name="md-location-outline" size={25} color="black" />
      <Text style={styles.main}>Address Book</Text>
      <Text style={styles.sub}>If you can change your address settings</Text>
    </View>
    <View style={{marginLeft:4}}>
    <Pressable style={styles.changebutton}>
    <TouchableOpacity activeOpacity={0.6}>
      <Text style={styles.buttontext} onPress={ () => this.props.navigation.navigate("Manageaddress")}>Change</Text>
      </TouchableOpacity>
    </Pressable>
    </View>
   </View>
 </View>
 <View style={styles.hairline}></View>
    </View>
    </View>
  </ScrollView>
);
}
}
const styles = StyleSheet.create({
  maincontainer: {
      backgroundColor: "white",
      height: "100%",
    },
    icons:{
      marginLeft:20,
    },
    back: {
      position:"absolute",
      top:20,
      marginLeft: 5,
      width: 70,
      height: 70,
      shadowColor: 'rgba(90, 90, 90, 0.25)',
    },
    heading: {
      fontFamily: "Roboto",
      fontSize: 20,
      marginTop:66,
      marginLeft: 5,
      textAlign: "center",
      fontWeight: "bold",
    },
    flex:{
      flexDirection:"row",
    },
    changebutton:{
      borderWidth:1,
      borderColor:"#D4D4D4",
      borderRadius: 5,
      backgroundColor: 'white',
      width: 65,
      height: 25,
      position:"absolute",
      top:22,
      left:20,
    },
    buttontext:{
      fontSize: 12,
      lineHeight: 21,
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily: "Roboto",
      letterSpacing: 0.25,
      color: '#323232',
    },
    hairline: {
      backgroundColor: '#D6D6D6',
      height: 1,
      width: "100%",
      marginTop:10,
    },      
    main:{
      fontFamily:"Lato-Bold",
      fontSize:16,
      fontWeight:"bold",
      marginTop:3,
    },
    sub:{
      fontFamily:"Roboto",
      fontSize:14,
      marginTop:3,
      color:"#808080",
      fontWeight:"normal",
    },
    content:{
       marginLeft:25,
    },
    settings:{
      marginTop:20,
    }
});

