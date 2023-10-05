import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import { getAllBanners } from './services/banner';
import Banner from './components/Banner';
import Categories from './components/Categories';
import WhyUs from './components/WhyUs'; // Import WhyUs component
import HotDeals from './components/HotDeals'; // Import HotDeals component

function HomeScreen() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [banners, setBanners] = useState([]);

  const getBanners = async () => {
    try {
      const result = await getAllBanners();
      console.log(result);
      setBanners(result.data);
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
      <Banner></Banner>
      <View>
        <Text style={styles.heading}>Fashion Categories</Text>
        <View style={styles.flex}>
          <View>
            <TouchableOpacity activeOpacity={0.6}>
              <Categories></Categories>
            </TouchableOpacity>
          </View>
        </View>
        <WhyUs /> {/* Render WhyUs component */}
        <HotDeals /> {/* Render HotDeals component */}
      </View>
    </ScrollView>
  );
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
