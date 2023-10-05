import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import Banner from './components/Banner';
import Categories from './components/Categories';
import WhyUs from './components/WhyUs'; // Import WhyUs component
import HotDeals from './components/HotDeals'; // Import HotDeals component

function Home() {
  const [fontsLoaded, setFontsLoaded] = useState(false);


  async function loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  // return (
  //   <ScrollView style={styles.maincontainer}>
  //     <Banner/>
  //     <View>
  //     {/* <Text style={styles.heading}>Fashion Categories</Text> */}

  //       <View style={styles.flex}>
  //         <View>
  //           <TouchableOpacity activeOpacity={0.6}>
  //             <Categories></Categories>
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //        <WhyUs/>
  //     </View>
  //   </ScrollView>
  // );
  

  return (
    <ScrollView style={styles.maincontainer}>
      <View>
        <Banner></Banner>
      </View>
      <View>
        <Categories/>

        
      </View>
     <View>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
{/* <View style={styles.bannerbox}>
  <Image style={styles.banner} source={require('./assets/banner.jpg')}/>
  </View> */}
  <View style={styles.bannerbox}>
  <Image style={styles.banner} source={require('./assets/menbanner.jpg')}/>
  </View>
  <View style={styles.bannerbox}>
  <Image style={styles.banner} source={require('./assets/womenbanner.jpg')}/>
  </View>
  <View style={styles.bannerbox}>
  <Image style={styles.banner} source={require('./assets/kidsbanner.jpg')}/>
  </View>
</ScrollView>
     </View>
     <View>
        <Text style={styles.subheading}>Why Zasta Infotec?</Text>
        <View style={styles.backColor}>
         <View style={styles.specification}>
          <View style={styles.specbox}>
          <Image style={styles.specifyimg} source={require('./assets/cotton.png')}/>
          <Text style={styles.specify}>100% Original Products</Text>
          </View>
          <View style={styles.specbox}>
          <Image style={styles.specifyimg} source={require('./assets/returns.png')}/>
          <Text style={styles.specify}>Easy Returns and Refunds</Text>
          </View>
          <View style={styles.specbox}>
          <Image style={styles.specifyimg} source={require('./assets/card.png')}/>
          <Text style={styles.specify}>100% Secure Payment</Text>
          </View>
         </View>
        </View>
        </View>
        <View>
        <Text style={styles.subheading}>Today Deals for You</Text>
        <View style={styles.productlisting}>
         <View style={styles.flexproduct}>
         <Pressable>
         <Product productname="Nike T-shirts" category="Men T-shirts collection" discount="-30%" discountprice="$799" actualprice="$999" imageSource={require("./assets/product.jpg")}/>
         </Pressable>
         <Product productname="Puma T-shirts" category="Men T-shirts collection" discount="-50%" discountprice="$599" actualprice="$899" imageSource={require("./assets/menproduct.jpg")}/>
         </View>
        </View>
        </View>
      </View>
    </ScrollView>
  )

  
  
}

const customFonts = {
  "Lato-Regular": require('./assets/font/Lato-Regular.ttf'),
  "Lato-Bold": require('./assets/font/Lato-Bold.ttf'),
};



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


export default Home; // Export the HomeScreen component
