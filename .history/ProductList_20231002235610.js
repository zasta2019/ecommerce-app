import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import Product from './components/Product';
import { useRoute } from '@react-navigation/native'; // Import useRoute hook
import { getProductsByCategory } from './services/Products';
import Banner from './components/Banner';


let customFonts = {
  "Lato-Regular": require('./assets/font/Lato-Regular.ttf'),
   "Lato-Bold": require('./assets/font/Lato-Bold.ttf'),
};

function ProductList() {
  const route = useRoute(); // Get route object
  const categoryId = route.params.categoryId;
  const [products,setProducts]= React.useState([]);
  const [fontsLoaded, setFontsLoaded] = useState(false); // Define fontsLoaded state


  console.log("category id" + categoryId);

  const getProducts = async()=> {
    try {
      const result = await getProductsByCategory();
      console.log("cat" + result.data);

      setProducts(result.data)
    } catch (error) {
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
            <Image style={styles.back} source={require('./assets/back.png')} />
          </TouchableOpacity>
        <Text style={styles.heading}>Popular Categories for Men</Text>
      </View>
      <View style={styles.flex}>
      <View>
      <TouchableOpacity activeOpacity={0.6}>
     <Pressable  onPress={() => this.props.navigation.navigate("Productlisting")}>
      <Image style={styles.category} source={require('./assets/tshirts.jpg')}/>
      <Text style={styles.categoryname}>T-shirts</Text>
      </Pressable>
     </TouchableOpacity>
      </View>
      <View>
    <TouchableOpacity activeOpacity={0.6}>
     <Pressable  onPress={() => this.props.navigation.navigate("Productlisting")}>
     <Image style={styles.category} source={require('./assets/underwear.jpg')}/>
      <Text style={styles.categoryname}>underwear</Text>
     </Pressable>
     </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity activeOpacity={0.6}>
     <Pressable  onPress={() => this.props.navigation.navigate("Productlisting")}>
      <Image style={styles.category} source={require('./assets/denim.jpg')}/>
      <Text style={styles.categoryname}>Denim</Text>
      </Pressable>
     </TouchableOpacity>
      </View>
      </View>
      <View style={styles.flex}>
      <View>
      <TouchableOpacity activeOpacity={0.6}>
     <Pressable  onPress={() => this.props.navigation.navigate("Productlisting")}>
      <Image style={styles.category} source={require('./assets/outwear.jpg')}/>
      <Text style={styles.categoryname}>Outwear</Text>
      </Pressable>
     </TouchableOpacity>
      </View>
      <View>
    <TouchableOpacity activeOpacity={0.6}>
     <Pressable  onPress={() => this.props.navigation.navigate("Productlisting")}>
     <Image style={styles.category} source={require('./assets/bottom.jpg')}/>
      <Text style={styles.categoryname}>Bottom</Text>
     </Pressable>
     </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity activeOpacity={0.6}>
     <Pressable  onPress={() => this.props.navigation.navigate("Productlisting")}>
      <Image style={styles.category} source={require('./assets/hoodies.jpg')}/>
      <Text style={styles.categoryname}>Hoodies</Text>
      </Pressable>
     </TouchableOpacity>
      </View>
      </View>
      <View style={styles.flexsecond}>
      <View>
      <TouchableOpacity activeOpacity={0.6}>
     <Pressable  onPress={() => this.props.navigation.navigate("Productlisting")}>
      <Image style={styles.category} source={require('./assets/knitwear.jpg')}/>
      <Text style={styles.categoryname}>Knitwear</Text>
      </Pressable>
     </TouchableOpacity>
      </View>
      <View>
    <TouchableOpacity activeOpacity={0.6}>
     <Pressable style={styles.secondcategory}  onPress={() => this.props.navigation.navigate("Productlisting")}>
     <Image style={styles.category} source={require('./assets/co-ords.jpg')}/>
      <Text style={styles.categoryname}>Co-ords</Text>
     </Pressable>
     </TouchableOpacity>
      </View>
      </View>
     <View>
<Banner/>
     </View>
     <Text style={styles.subheading}>Men Collection</Text>
     <View style={styles.productlisting}>
      {products&&products.map((product,index)=>(
             <View key={index}style={styles.flexproduct}>
             <Product productname={product.productName} 
             category={product.categoryName} 
             discount={product.productRates[0].offer}
             discountprice={product.productRates[0].prodtDiscountedCost}
             actualprice={product.productRates[0].productCost}
             imageSource={{ uri: product.productImageUrl[0] }}/>
            
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

export default ProductList;
