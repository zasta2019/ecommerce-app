import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import Product from './components/Product';

let customFonts = {
  "Lato-Regular": require('./assets/font/Lato-Regular.ttf'),
   "Lato-Bold": require('./assets/font/Lato-Bold.ttf'),
};

export default class Women extends React.Component {
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
        <Text style={styles.heading}>Popular Categories for Women</Text>
      </View>
      <View style={styles.flex}>
      <View>
      <TouchableOpacity activeOpacity={0.6}>
     <Pressable  onPress={() => this.props.navigation.navigate("Productlisting")}>
      <Image style={styles.category} source={require('./assets/w-tshirt.jpg')}/>
      <Text style={styles.categoryname}>T-shirts</Text>
      </Pressable>
     </TouchableOpacity>
      </View>
      <View>
    <TouchableOpacity activeOpacity={0.6}>
     <Pressable  onPress={() => this.props.navigation.navigate("Productlisting")}>
     <Image style={styles.category} source={require('./assets/w-underwear.jpg')}/>
      <Text style={styles.categoryname}>underwear</Text>
     </Pressable>
     </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity activeOpacity={0.6}>
     <Pressable  onPress={() => this.props.navigation.navigate("Productlisting")}>
      <Image style={styles.category} source={require('./assets/plussize.jpg')}/>
      <Text style={styles.categoryname}>Plus Size</Text>
      </Pressable>
     </TouchableOpacity>
      </View>
      </View>
      <View style={styles.flex}>
      <View>
      <TouchableOpacity activeOpacity={0.6}>
     <Pressable  onPress={() => this.props.navigation.navigate("Productlisting")}>
      <Image style={styles.category} source={require('./assets/w-dress.jpg')}/>
      <Text style={styles.categoryname}>Dresses</Text>
      </Pressable>
     </TouchableOpacity>
      </View>
      <View>
    <TouchableOpacity activeOpacity={0.6}>
     <Pressable  onPress={() => this.props.navigation.navigate("Productlisting")}>
     <Image style={styles.category} source={require('./assets/w-fashion.jpg')}/>
      <Text style={styles.categoryname}>f/w 2021</Text>
     </Pressable>
     </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity activeOpacity={0.6}>
     <Pressable  onPress={() => this.props.navigation.navigate("Productlisting")}>
      <Image style={styles.category} source={require('./assets/w-bottom.jpg')}/>
      <Text style={styles.categoryname}>Bottom</Text>
      </Pressable>
     </TouchableOpacity>
      </View>
      </View>
      <View style={styles.flexsecond}>
      <View>
      <TouchableOpacity activeOpacity={0.6}>
     <Pressable  onPress={() => this.props.navigation.navigate("Productlisting")}>
      <Image style={styles.category} source={require('./assets/w-co-ords.jpg')}/>
      <Text style={styles.categoryname}>Co-ords</Text>
      </Pressable>
     </TouchableOpacity>
      </View>
      <View>
    <TouchableOpacity activeOpacity={0.6}>
     <Pressable style={styles.secondcategory}  onPress={() => this.props.navigation.navigate("Productlisting")}>
     <Image style={styles.category} source={require('./assets/w-blouses.jpg')}/>
      <Text style={styles.categoryname}>Blouses</Text>
     </Pressable>
     </TouchableOpacity>
      </View>
      </View>
     <View>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<View style={styles.bannerbox}>
  <Image style={styles.banner} source={require('./assets/womenbanner.jpg')}/>
  </View>
  {/* <View style={styles.bannerbox}>
  <Image style={styles.banner} source={require('./assets/banner.jpg')}/>
  </View> */}
  <View style={styles.bannerbox}>
  <Image style={styles.banner} source={require('./assets/menbanner.jpg')}/>
  </View>
  <View style={styles.bannerbox}>
  <Image style={styles.banner} source={require('./assets/kidsbanner.jpg')}/>
  </View>
</ScrollView>
     </View>
     <Text style={styles.subheading}>Women Collection</Text>
     <View style={styles.productlisting}>
         <View style={styles.flexproduct}>
         <Product productname="Nike T-shirts" category="Women T-shirts collection" discount="-30%" discountprice="$799" actualprice="$999" imageSource={require("./assets/w-product.jpg")}/>
         <Product productname="Puma T-shirts" category="Women T-shirts collection" discount="-50%" discountprice="$599" actualprice="$899" imageSource={require("./assets/w-product1.jpg")}/>
         </View>
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
      subheading:{
        fontFamily:"Lato-Bold",
        fontSize:18,
        marginTop:20,
        textAlign:"center",
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
      productlisting:{
        padding:10,
      },
      flexproduct:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:15,
      },
});
