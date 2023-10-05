import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Product from './Product';

const HotDeals = () => {
  return (
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
  );
};

export default HotDeals;
