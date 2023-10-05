import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Product from '../Product';
import { getAllProducts } from '../../services/Products';

const HotDeals = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  const getProductData = async () => {
    try {
      const result = await getAllProducts();
      const filtered = result.data.filter((product) => {
        // Filter products based on criteria
        return product.hotDeals === true && product.deletedFlag === false;
      });

      setProducts(filtered);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.flexproduct}
      onPress={() => {
        navigation.navigate("ProductDetails", {
          productId: item.id,
        });
      }}
    >
      <Product
        productname={item.productName}
        category={item.categoryName}
        discount={item.productRates[0].offer}
        discountprice={item.productRates[0].prodtDiscountedCost}
        actualprice={item.productRates[0].productCost}
        imageSource={{ uri: item.productImageUrl[0] }}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.subheading}>Today Deals for You</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Set the number of columns to 2
        contentContainerStyle={styles.productlisting}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "white",
    height: "100%",
  },
  subheading: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
  },
  flexproduct: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
});

export default HotDeals;
