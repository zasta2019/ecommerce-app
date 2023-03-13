import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, Button, ImageBackground} from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
  "Lato-Regular": require('../assets/font/Lato-Regular.ttf'),
   "Lato-Bold": require('../assets/font/Lato-Bold.ttf'),
};

export default class Product extends React.Component {
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
    <View>
  <View style={styles.productbox}>
    <View style={styles.product}>
   <ImageBackground source={require('../assets/product.jpg')} style={styles.image}></ImageBackground>
   </View>
   <View style={styles.discountbox}>
        <Text style={styles.discount}>-30%</Text>
    </View>
    </View> 
    <View style={styles.flex}>
    <View>
   <Text style={styles.productname}>Nike T-shirt</Text>
    <Text style={styles.category}>Men T-shirt collections</Text>
    <View style={styles.flex}>
        <Text style={styles.discountprice}>$799</Text>
        <Text style={styles.originalprice}>$999</Text>
    </View>
   </View>
  <View>
 
  </View>
    </View>

    
   </View> 
    
  );
};
}

const styles = StyleSheet.create({
  productbox:{
    width:160,
position:"relative",
overflow:"hidden",
borderRadius:10,
  },
  product:{
    width:160,
    height:220,
    overflow:"hidden",
  },
  image:{
    width:"100%",
    height:"100%",
  },
  discountbox:{
   width:45,
   height:25,
   backgroundColor:"#4CAF50",
   borderRadius:5,
   position:"absolute",
   bottom:10,
   left:10,
  },
  discount:{
    fontFamily:"Roboto",
    fontSize:14,
    textAlign:"center",
    fontWeight:"bold",
    color:"white",
  },
  productname:{
    fontFamily:"Lato-Bold",
    marginTop:10,
    fontSize:16,
    color:"#323232",
  },
  category:{
    fontFamily:"Roboto",
    fontSize:12,
    marginTop:5,
    fontWeight:"bold",
    color:"#808080",
  },
  discountprice:{
    fontFamily:"Roboto",
    fontSize:14,
    marginTop:5,
    fontWeight:"bold",
    color:"#323232",
  },
  originalprice:{
    fontFamily:"Roboto",
    fontSize:10,
    marginTop:9,
    fontWeight:"normal",
    color:"#646464",
    marginLeft:5,
    textDecorationLine:"line-through",
  },
  flex:{
    flexDirection:"row",
  },
});