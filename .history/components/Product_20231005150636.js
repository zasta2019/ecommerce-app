import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addToCart } from '../services/cart';


export default function Product(props) {
  const navigation = useNavigation();

  const handleNavigate = () => {
    if (props.productId) {
      navigation.navigate('Viewproduct', { productId: props.productId });
    } else {
      console.log('Product ID is undefined.');
    }
  };

  const addCart = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const userId = JSON.parse(user);
        const id = userId.id;
        // Now you can use userId to add the product to the cart
        // You should implement the addToCart function accordingly
        const cart = await addToCart({
          shoppingCart: [
            {
              product: props.productId,
            },
          ],
          userId: userId,
        });
        if (cart) {
          navigation.navigate('Mycart');
        }
      } else {
        console.log('User is not logged in.'); // Handle the case where the user is not logged in
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    async function loadFontsAsync() {
      await Font.loadAsync({
        "Lato-Regular": require('../assets/font/Lato-Regular.ttf'),
        "Lato-Bold": require('../assets/font/Lato-Bold.ttf'),
      });
    }
    loadFontsAsync();
  }, []);

  return (
    <Pressable>
      <View>
        <View style={styles.productbox}>
          <TouchableOpacity activeOpacity={0.8} style={styles.product} onPress={handleNavigate}>
            <Image style={styles.image} source={props.imageSource} />
          </TouchableOpacity>
          <View style={styles.discountbox}>
            <Text style={styles.discount}>{props.discount}</Text>
          </View>
          <View style={styles.wishlistbox}>
            <MaterialIcons
              name={isFilled ? 'favorite' : 'favorite-border'}
              size={20}
              color={isFilled ? 'red' : '#646464'}
              style={styles.hearticon}
              onPress={() => setIsFilled(!isFilled)}
            />
          </View>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity activeOpacity={0.8} style={styles.productsection} onPress={handleNavigate}>
            <Text style={styles.productname}>{props.productname.toString()}</Text>
            <Text style={styles.category}>{props.category.toString()}</Text>
            <View style={styles.flex}>
              <Text style={styles.discountprice}>{props.discountprice.toString()}</Text>
              <Text style={styles.originalprice}>{props.actualprice.toString()}</Text>
            </View>
          </TouchableOpacity>
          <View>
            <TouchableOpacity activeOpacity={0.8} style={styles.otpinput}>
              <Feather
                name="shopping-cart"
                size={18}
                color="#646464"
                onPress={addCart}
                style={styles.carticon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  productbox: {
    width: 160,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
  },
  product: {
    width: 160,
    height: 220,
    overflow: 'hidden',
  },
  carticon: {
    position: 'absolute',
    left: 7,
    top: 8,
  },
  otpinput: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
    width: 34,
    height: 34,
    borderRadius: 5,
    textAlign: 'center',
    position: 'relative',
    elevation: 4,
    borderRadius: 50,
    backgroundColor: '#F6F5FA',
    marginTop: 8,
    marginLeft: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  discountbox: {
    width: 45,
    height: 25,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  hearticon: {
    position: 'absolute',
    left: 5,
    top: 5,
  },
  wishlistbox: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 50,
    position: 'absolute',
    top: 10,
    right: 7,
  },
  discount: {
    fontFamily: 'Roboto',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginTop: 3,
  },
  productname: {
    fontFamily: 'Lato-Bold',
    marginTop: 10,
    fontSize: 14,
    color: '#323232',
  },
  category: {
    fontFamily: 'Roboto',
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#808080',
  },
  discountprice: {
    fontFamily: 'Roboto',
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#323232',
  },
  originalprice: {
    fontFamily: 'Roboto',
    fontSize: 10,
    marginTop: 9,
    fontWeight: 'normal',
    color: '#646464',
    marginLeft: 5,
    textDecorationLine: 'line-through',
  },
  flex: {
    flexDirection: 'row',
  },
  productsection: {
    width: 110,
  },
});
