import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Product from './components/Product';
import * as Font from 'expo-font';
import { getAllBanners } from './services/banner';

let customFonts = {
  "Lato-Regular": require('./assets/font/Lato-Regular.ttf'),
  "Lato-Bold": require('./assets/font/Lato-Bold.ttf'),
};

export default function Home({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [banners, setBanners] = useState([]);

  const getBanners = async () => {
    try {
      const result = await getAllBanners();
      // Assuming `getAllBanners` returns an array of banners
      setBanners(result);
    } catch (error) {
      console.log(error);
    }
  };

  async function loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFontsAsync();
    getBanners();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.maincontainer}>
      <View>
        <Text style={styles.heading}>Fashion Categories</Text>
        <View style={styles.flex}>
          <View>
            <TouchableOpacity activeOpacity={0.6}>
              {/* Render banners here */}
              {banners.map((banner, index) => (
                <View key={index}>
                  {/* Render your banner components */}
                </View>
              ))}
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Men")}>
              <Image style={styles.category} source={require('./assets/men.jpg')} />
              <Text style={styles.categoryname}>Men</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Women")}>
              <Image style={styles.category} source={require('./assets/women.jpg')} />
              <Text style={styles.categoryname}>Women</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Kids")}>
              <Image style={styles.category} source={require('./assets/kids.jpg')} />
              <Text style={styles.categoryname}>Kids</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* Banner images */}
          </ScrollView>
        </View>
        <View>
          <Text style={styles.subheading}>Why Us</Text>
          <View style={styles.backColor}>
            <View style={styles.specification}>
              <View style={styles.specbox}>
                <Image style={styles.specifyimg} source={require('./assets/cotton.png')} />
                <Text style={styles.specify}>100% Original Products</Text>
              </View>
              <View style={styles.specbox}>
                <Image style={styles.specifyimg} source={require('./assets/returns.png')} />
                <Text style={styles.specify}>Easy Returns and Refunds</Text>
              </View>
              <View style={styles.specbox}>
                <Image style={styles.specifyimg} source={require('./assets/card.png')} />
                <Text style={styles.specify}>100% Secure Payment</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.subheading}>Today Deals for You</Text>
          <View style={styles.productlisting}>
            <View style={styles.flexproduct}>
              <TouchableOpacity>
                <Product
                  productname="Nike T-shirts"
                  category="Men T-shirts collection"
                  discount="-30%"
                  discountprice="$799"
                  actualprice="$999"
                  imageSource={require('./assets/product.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Product
                  productname="Puma T-shirts"
                  category="Men T-shirts collection"
                  discount="-50%"
                  discountprice="$599"
                  actualprice="$899"
                  imageSource={require('./assets/menproduct.jpg')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
// import Product from './components/Product';
// import * as Font from 'expo-font';
// import { getAllBanners } from './services/banner';

// let customFonts = {
//   "Lato-Regular": require('./assets/font/Lato-Regular.ttf'),
//    "Lato-Bold": require('./assets/font/Lato-Bold.ttf'),
// };

// export default class Home extends React.Component {
//   state = {
//     fontsLoaded: false,
//   };
//   const [banner, setBanner] = useState([])

//   const getBanners = async()=>{
//     try {
//       const result = await getAllBanners();
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   async _loadFontsAsync() {
//     await Font.loadAsync(customFonts);
//     this.setState({ fontsLoaded: true });
//   }

//   componentDidMount() {
//     this._loadFontsAsync();
//   }

//   useEffect(() => {
//     getBanners();
//   }, []);

  
//   render() {
//     if (!this.state.fontsLoaded) {
//       return null;
//     }
//   return (
//     <ScrollView style={styles.maincontainer}>
//       <View>
//         <Text style={styles.heading}>Fashion Categories</Text>
//       <View style={styles.flex}>
//       <View>
//       <TouchableOpacity activeOpacity={0.6}>
//         {banners&&banners.map(banner,index)}
//      <Pressable onPress={() => this.props.navigation.navigate("Men")}>
//       <Image style={styles.category} source={require('./assets/men.jpg')}/>
//       <Text style={styles.categoryname}>Men</Text>
//       </Pressable>
//      </TouchableOpacity>
//       </View>
//       <View>
//     <TouchableOpacity activeOpacity={0.6}>
//      <Pressable onPress={() => this.props.navigation.navigate("Women")}>
//      <Image style={styles.category} source={require('./assets/women.jpg')}/>
//       <Text style={styles.categoryname}>Women</Text>
//      </Pressable>
//      </TouchableOpacity>
//       </View>
//       <View>
//       <TouchableOpacity activeOpacity={0.6}>
//      <Pressable onPress={() => this.props.navigation.navigate("Kids")}>
//       <Image style={styles.category} source={require('./assets/kids.jpg')}/>
//       <Text style={styles.categoryname}>Kids</Text>
//       </Pressable>
//      </TouchableOpacity>
//       </View>
//       </View>
//      <View>
// <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
// {/* <View style={styles.bannerbox}>
//   <Image style={styles.banner} source={require('./assets/banner.jpg')}/>
//   </View> */}
//   <View style={styles.bannerbox}>
//   <Image style={styles.banner} source={require('./assets/menbanner.jpg')}/>
//   </View>
//   <View style={styles.bannerbox}>
//   <Image style={styles.banner} source={require('./assets/womenbanner.jpg')}/>
//   </View>
//   <View style={styles.bannerbox}>
//   <Image style={styles.banner} source={require('./assets/kidsbanner.jpg')}/>
//   </View>
// </ScrollView>
//      </View>
//      <View>
//         <Text style={styles.subheading}>Why Us</Text>
//         <View style={styles.backColor}>
//          <View style={styles.specification}>
//           <View style={styles.specbox}>
//           <Image style={styles.specifyimg} source={require('./assets/cotton.png')}/>
//           <Text style={styles.specify}>100% Original Products</Text>
//           </View>
//           <View style={styles.specbox}>
//           <Image style={styles.specifyimg} source={require('./assets/returns.png')}/>
//           <Text style={styles.specify}>Easy Returns and Refunds</Text>
//           </View>
//           <View style={styles.specbox}>
//           <Image style={styles.specifyimg} source={require('./assets/card.png')}/>
//           <Text style={styles.specify}>100% Secure Payment</Text>
//           </View>
//          </View>
//         </View>
//         </View>
//         <View>
//         <Text style={styles.subheading}>Today Deals for You</Text>
//         <View style={styles.productlisting}>
//          <View style={styles.flexproduct}>
//          <Pressable>
//          <Product productname="Nike T-shirts" category="Men T-shirts collection" discount="-30%" discountprice="$799" actualprice="$999" imageSource={require("./assets/product.jpg")}/>
//          </Pressable>
//          <Product productname="Puma T-shirts" category="Men T-shirts collection" discount="-50%" discountprice="$599" actualprice="$899" imageSource={require("./assets/menproduct.jpg")}/>
//          </View>
//         </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }
// }

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: "white",
        height: "100%",
      },
      bannerbox:{
        width:340,
        height:160,
        borderRadius:10,
        overflow:'hidden',
        marginTop:22,
        marginLeft:14,
      },
      banner:{
        width:"100%",
        height:"100%",
      },
      heading:{
        fontFamily:"Roboto",
        fontSize:20,
        marginTop:20,
        textAlign:"center",
        fontWeight:"bold",
      },
      subheading:{
        fontFamily:"Lato-Bold",
        fontSize:18,
        marginTop:20,
        textAlign:"center",
      },
      specify:{
        fontFamily:"Lato-Bold",
        fontSize:14,
        marginTop:5,
        textAlign:"center",
        fontWeight:"700",
        color:"#646464",
      },
      categoryname:{
          fontFamily:"Lato-Bold",
          fontSize:16,
          color:"#323232",
          marginTop:8,
          textAlign:"center",
      },
      specbox:{
        width:140,
        height:110,
        padding:10,
        marginTop:5,
      },
      backColor:{
        backgroundColor:"#F5FFE8",
        marginTop:12,
      },
      category:{
        overflow:'hidden',
        width:80,
        borderRadius:50,
        height:80,
      },
      flex:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:20,
      },
      specification:{
        flexDirection:"row",
        justifyContent:"space-evenly",
      },
      specifyimg:{
        width:35,
        height:35,
        alignSelf:"center",
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
