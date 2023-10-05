import React, { useState ,useEffect} from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import Product from './Product';
import { getAllProducts } from '../services/Products';

const HotDeals = () => {
const[products,setProducts]=useState([]);

const getProductData = async() =>{
  try {
    const result = await getAllProducts();
    const filtered = result.data.filter((product) => {
      // Filter products based on criteria
      return product.hotDeals === true && product.deletedFlag === false;
    });

    setProducts(filtered)
    
  } catch (error) {
    console.log(error);
  }

  
}

useEffect(() => {
  getProductData();

 
}, [])



  return (
    <View>
      <Text style={styles.subheading}>Today Deals for You</Text>
      <View style={styles.productlisting}>
        {products&&products.map((product,index)=>(
          <View key={index}>

<View style={styles.flexproduct}>
          <TouchableOpacity>
            <Product
              productname={product.productName}
              category={product.categoryName}
              discount={product.productRates[0].offer}
              discountprice={product.productRates[0].prodtDiscountedCost}
              actualprice={product.productRates[0].productCost}
              imageSource={{ uri: product.productImageUrl[0] }}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Product
              productname="Puma T-shirts"
              category="Men T-shirts collection"
              discount="-50%"
              discountprice="$599"
              actualprice="$899"
              imageSource={require('../assets/menproduct.jpg')}
            />
          </TouchableOpacity> */}
        </View>

            </View>
        ))

        }

      </View>
    </View>
  );
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

export default HotDeals;
