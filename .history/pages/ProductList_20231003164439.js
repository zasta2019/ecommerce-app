import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import Product from '../components/Product';
import { useRoute } from '@react-navigation/native'; // Import useRoute hook
import { getProductsByCategory } from '../services/Products';
import Banner from '../components/Home/Banner';


let customFonts = {
  "Lato-Regular": require('.././assets/font/Lato-Regular.ttf'),
   "Lato-Bold": require('.././assets/font/Lato-Bold.ttf'),
};

function ProductList() {
  const route = useRoute(); // Get route object
  const categoryId = route.params.categoryId;
  const categoryName = route.params.categoryName;
  const [products,setProducts]= React.useState([]);
  const [newProducts,setNewProducts]= React.useState([]);

  
  const [fontsLoaded, setFontsLoaded] = useState(false); // Define fontsLoaded state


  console.log("category id" + categoryName);

  const getProducts = async()=> {
    try {
      const result = await getProductsByCategory(categoryId);
      console.log("Category products:", result.data);
      setProducts(result.data);
      const filtered = result.data.filter((product) => {
        // Filter products based on criteria
        return product.newArrivals === true && product.deletedFlag === false;
      });
      setNewProducts(filtered);
    } catch (error) {
      console.log(error)
    }
  }

  state = {
    fontsLoaded: false,
  };

  async function loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFontsAsync();
    getProducts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.maincontainer}>
      <View>
      <View>
      <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.navigation.navigate("Home")}>
            <Image style={styles.back} source={require('.././assets/back.png')} />
          </TouchableOpacity>
        <Text style={styles.heading}>Popular Categories for {categoryName}</Text>
        <View></View>
      </View>
      <View style={styles.flex}>
  {newProducts && newProducts.map((product, index) => (
    <TouchableOpacity
      key={index} // Make sure to provide a unique key for each item in the list
      activeOpacity={0.6}
      style={styles.newProductContainer} // Added a new style for each product container
      onPress={() => this.props.navigation.navigate("Productlisting")}
    >
      <Image style={styles.category} source={{ uri: product.productImageUrl[0] }} />
      <Text style={styles.categoryname}>{product.productName}</Text>
    </TouchableOpacity>
  ))}
</View>
     
     <View>
<Banner/>
     </View>
     <Text style={styles.subheading}>{categoryName} Collection</Text>
     <View style={styles.productlisting}>
  {products && products.map((product, index) => (
    <View key={index} style={styles.productContainer}>
      <Product
        productname={product.productName}
        productId={product.id}
        category={product.categoryName}
        discount={product.productRates[0].offer}
        discountprice={product.productRates[0].prodtDiscountedCost}
        actualprice={product.productRates[0].productCost}
        imageSource={{ uri: product.productImageUrl[0] }}
      />
    </View>
  ))}
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
        marginBottom:20,
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
       flexproduct:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:15,
      },

      productlisting: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      productContainer: {
        width: '50%', // Set the width to '50%' for two products in a row
        marginBottom: 10, // Adjust this to control the vertical spacing between rows
      },
      flex: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Allow items to wrap to the next row
        justifyContent: 'space-between', // Adjust this to control the horizontal spacing between items
      },
      newProductContainer: {
        width: '30%', // Adjust this to control the width of each product container
        marginBottom: 10, // Adjust this to control the vertical spacing between rows
      },
});

export default ProductList;
