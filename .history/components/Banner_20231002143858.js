import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
  "Lato-Regular": require('../assets/font/Lato-Regular.ttf'),
   "Lato-Bold": require('../assets/font/Lato-Bold.ttf'),
};

export default class Men extends React.Component {
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
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<View style={styles.bannerbox}>
  <Image style={styles.banner} source={require('./assets/menbanner.jpg')}/>
  </View>
  {/* <View style={styles.bannerbox}>
  <Image style={styles.banner} source={require('./assets/banner.jpg')}/>
  </View> */}
  <View style={styles.bannerbox}>
  <Image style={styles.banner} source={require('./assets/womenbanner.jpg')}/>
  </View>
  <View style={styles.bannerbox}>
  <Image style={styles.banner} source={require('./assets/kidsbanner.jpg')}/>
  </View>
</ScrollView>
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
      bannerbox:{
        width:340,
        height:160,
        borderRadius:10,
        overflow:'hidden',
        marginTop:22,
        marginLeft:15,
      },
      banner:{
        width:"100%",
        height:"100%",
      },
      categoryname:{
          fontFamily:"Lato-Bold",
          fontSize:16,
          color:"#323232",
          marginTop:8,
          textAlign:"center",
      },
      category:{
        overflow:'hidden',
        width:75,
        borderRadius:50,
        height:75,
      },
      flex:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:20,
      },
      flexsecond:{
        flexDirection:"row",
        marginTop:20,
        marginLeft:38,
      },
      secondcategory:{
        marginLeft:42,
      },
      subheading:{
        fontFamily:"Lato-Bold",
        fontSize:18,
        marginTop:20,
        textAlign:"center",
      },
      productlisting:{
        padding:10,
      },
      flexproduct:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:15,
      },
});
