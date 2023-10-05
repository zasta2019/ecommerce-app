import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Product from './components/Product';
import * as Font from 'expo-font';
import { getAllBanners } from './services/banner';
import Banner from './components/Banner';
import { getAllCategories } from '../services/categories';

let customFonts = {
  "Lato-Regular": require('./assets/font/Lato-Regular.ttf'),
  "Lato-Bold": require('./assets/font/Lato-Bold.ttf'),
};

export default function Home({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [category, setCategory] = useState([])

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

  getCategory = async () => {
    try {
      // Fetch banners and set them in the state
      const result = await getAllCategories();
      console.log(result);
      this.setState({ banners: result.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.maincontainer}>
      <Banner></Banner>
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

      </View>
    </ScrollView>
  );
}



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
