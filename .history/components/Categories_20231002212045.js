import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import { getAllCategories } from '../services/categories';
import Banner from './Banner';

let customFonts = {
  "Lato-Regular": require('../assets/font/Lato-Regular.ttf'),
  "Lato-Bold": require('../assets/font/Lato-Bold.ttf'),
};

export default function Categories() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);

  async function loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFontsAsync();
    getCategory();
  }, []);

  const getCategory = async () => {
    try {
      const result = await getAllCategories();
      console.log(result);
      setCategories(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
      <View >
        <Text style={styles.heading}>Fashion Categories</Text>
        <View style={styles.flex}>
          <View>
            <TouchableOpacity activeOpacity={0.6}
             onPress={() => {
                // Navigate to the product screen and pass the _id as a parameter
                navigation.navigate('Product', { categoryId: cat._id });
              }}>
              {/* Render categories here */}
              {categories && categories.map((cat, index) => (
                <View key={index}>
                  <Image style={styles.category} source={{ uri: cat.categoryImage }} />
                  <Text style={styles.categoryname}>{cat.categoryName}</Text>
                </View>
              ))}
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );

}

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "white",
    height: "100%",
  },
  bannerbox: {
    width: 340,
    height: 160,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 22,
    marginLeft: 14,
  },
  banner: {
    width: "100%",
    height: "100%",
  },
  heading: {
    fontFamily: "Roboto",
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  subheading: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
  },
  specify: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
    fontWeight: "700",
    color: "#646464",
  },
  categoryname: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: "#323232",
    marginTop: 8,
    textAlign: "center",
  },
  specbox: {
    width: 140,
    height: 110,
    padding: 10,
    marginTop: 5,
  },
  backColor: {
    backgroundColor: "#F5FFE8",
    marginTop: 12,
  },
  category: {
    overflow: 'hidden',
    width: 80,
    borderRadius: 50,
    height: 80,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  specification: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  specifyimg: {
    width: 35,
    height: 35,
    alignSelf: "center",
  },
  productlisting: {
    padding: 10,
  },
  flexproduct: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
});
