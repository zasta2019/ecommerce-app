import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const images = [
  require('./assets/productview.jpg'),
  require('./assets/productview.jpg'),
  require('./assets/productview.jpg'),
  require('./assets/productview.jpg'),
];

const Viewproduct = (props) => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedTab1, setSelectedTab1] = useState(null);

  const handleTabPress = (tabIndex) => {
    setSelectedTab(tabIndex);
    setSelectedTab1(tabIndex);
  };
  const [isFilled, setIsFilled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = Dimensions.get('window');

  const handleScroll = (event) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / width);
    setActiveIndex(index);
  };

  const handleWishlistPress = () => {
    // Handle wishlist press
  };

  const handleSharePress = () => {
    // Handle share press
  };
  const [fontsLoaded] = useFonts({
    "Lato-Regular": require('./assets/font/Lato-Regular.ttf'),
    "Lato-Bold": require('./assets/font/Lato-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  }
  else {
    SplashScreen.hideAsync();
  }
  return (
    <View style={{marginTop:30,backgroundColor:"white"}}>
   <ScrollView>
   <View>
     <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
      >
        {images.map((image, index) => (
          <Pressable key={index}>
            <Image source={image} style={styles.image} />
            <TouchableOpacity activeOpacity={0.6} style={styles.buttonContainer} onPress={handleWishlistPress}>
            <MaterialIcons
            name={isFilled ? 'favorite' : 'favorite-border'}
            size={26}
            color={isFilled ? 'red' : '#646464'}
            style={styles.hearticon}
            onPress={() => setIsFilled(!isFilled)}
          />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={[styles.buttonContainer, styles.shareButtonContainer]} onPress={handleSharePress}>
            <Feather name="share-2" size={24} color="#646464" style={{marginRight:2,}} />
            </TouchableOpacity>
          </Pressable>
        ))}
      </ScrollView>
     </View>
      <View style={styles.dotContainer}>
        {images.map((image, index) => (
          <View key={index} style={[styles.dot, activeIndex === index && styles.activeDot]} />
        ))}
      </View>
      <View style={styles.content}>
       <Text style={styles.flaunt}>Flaunt Green</Text>
       <View style={styles.productsection}>
          <View style={styles.ratingbox}>
          <Text style={styles.productname}>Nike T-shirt</Text>
          <View style={styles.ratingcontent}>
             <Text style={styles.rating}>4</Text>
             <FontAwesome name="star" size={16} color="white" style={{marginLeft:3,}} />
          </View>
          </View>
          <Text style={styles.category}>Full hand men pure Cotton T-shirt</Text>
          <View style={styles.flex}>
            <Text style={styles.discountprice}>$799</Text>
            <Text style={styles.originalprice}>999</Text>
          </View>
        </View>
        <View style={styles.customizebox}>
                  <Text style={styles.customizeheading}>Available colors</Text>
                  <View style={{ marginTop: 20, }}>
                    <View style={styles.tabContainer}>
                      <TouchableOpacity activeOpacity={0.6}
                        style={[
                          styles.tabcolorButton,
                          selectedTab === 0 && styles.selectedTabButton, { backgroundColor: 'white' },
                        ]}
                        onPress={() => handleTabPress(0)}
                      >

                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.6}
                        style={[
                          styles.tabcolorButton,
                          selectedTab === 1 && styles.selectedTabButton, { backgroundColor: '#B6B7BA' },
                        ]}
                        onPress={() => handleTabPress(1)}
                      >

                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.6}
                        style={[
                          styles.tabcolorButton,
                          selectedTab === 2 && styles.selectedTabButton, { backgroundColor: '#323232' },
                        ]}
                        onPress={() => handleTabPress(2)}
                      >

                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.customizebox}>
                  <Text style={styles.customizeheading}>Select Size</Text>
                  <View style={{ marginTop: 20, }}>
                    <View style={styles.tabContainer}>
                      <TouchableOpacity activeOpacity={0.6}
                        style={[
                          styles.tabButton,
                          selectedTab1 === '3' && styles.selectedTabButton,
                        ]}
                        onPress={() => handleTabPress('3')}
                      >
                        <Text style={styles.tabButtonText}>S</Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.6}
                        style={[
                          styles.tabButton,
                          selectedTab1 === '4' && styles.selectedTabButton,
                        ]}
                        onPress={() => handleTabPress('4')}
                      >
                        <Text style={styles.tabButtonText}>M</Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.6}
                        style={[
                          styles.tabButton,
                          selectedTab1 === '5' && styles.selectedTabButton,
                        ]}
                        onPress={() => handleTabPress('5')}
                      >
                        <Text style={styles.tabButtonText}>L</Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.6}
                        style={[
                          styles.tabButton,
                          selectedTab1 === '6' && styles.selectedTabButton,
                        ]}
                        onPress={() => handleTabPress('6')}
                      >
                        <Text style={styles.tabButtonText}>XL</Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.6}
                        style={[
                          styles.tabButton,
                          selectedTab1 === '7' && styles.selectedTabButton,
                        ]}
                        onPress={() => handleTabPress('7')}
                      >
                        <Text style={styles.tabButtonText}>XXL</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.customizebox}>
                  <Text style={styles.customizeheading}>Fabric</Text>
                  <View style={{ marginTop: 20, }}>
                    <View style={styles.tabContainer}>
                      <TouchableOpacity activeOpacity={0.6}
                        style={[
                          styles.tabButton,
                          selectedTab1 === '8' && styles.selectedTabButton,
                        ]}
                        onPress={() => handleTabPress('8')}
                      >
                        <Text style={styles.tabButtonText}>HEMP</Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.6}
                        style={[
                          styles.tabButton,
                          selectedTab1 === '9' && styles.selectedTabButton,
                        ]}
                        onPress={() => handleTabPress('9')}
                      >
                        <Text style={styles.tabButtonText}>COTTON</Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.6}
                        style={[
                          styles.tabButton,
                          selectedTab1 === '10' && styles.selectedTabButton,
                        ]}
                        onPress={() => handleTabPress('10')}
                      >
                        <Text style={styles.tabButtonText}>DAMSAK</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.customizebox}>
                  <Text style={styles.customizeheading}>Print</Text>
                  <View style={{ marginTop: 20, }}>
                    <View style={styles.tabContainer}>
                      <TouchableOpacity activeOpacity={0.6}
                        style={[
                          styles.tabButton,
                          selectedTab1 === '11' && styles.selectedTabButton,
                        ]}
                        onPress={() => handleTabPress('11')}
                      >
                        <Text style={styles.tabButtonText}>ECO-PRINT</Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.6}
                        style={[
                          styles.tabButton,
                          selectedTab1 === '12' && styles.selectedTabButton,
                        ]}
                        onPress={() => handleTabPress('12')}
                      >
                        <Text style={styles.tabButtonText}>SCREEN</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.customizebox}>
                  <Text style={styles.customizeheading}>Product Description</Text>
                  <View style={{ marginTop: 10, }}>
                   <Text style={styles.describe}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also</Text>
                  </View>
                </View>
      </View>
   </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: 250,
    resizeMode: 'cover',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#4CAF50',
  },
  buttonContainer: {
    position: 'absolute',
    top: 10,
    right: 20,
    width: 40,
    height: 40,
    elevation:2,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButtonContainer: {
    top: 57,
  },
  content:{
    padding:20,
  },
  flaunt:{
    fontFamily:"Lato-Bold",
    fontSize:16,
    color:"#808080",
  },
  productname: {
    fontFamily: "Lato-Bold",
    marginTop: 10,
    fontSize: 20,
    color: "#323232",
  },
  category: {
    fontFamily: "Roboto",
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold",
    color: "#808080",
  },
  discountprice: {
    fontFamily: "Roboto",
    fontSize: 18,
    marginTop: 5,
    fontWeight: "bold",
    color: "#323232",
  },
  originalprice: {
    fontFamily: "Roboto",
    fontSize: 16,
    marginTop: 7,
    fontWeight: "normal",
    color: "#646464",
    marginLeft: 5,
    textDecorationLine: "line-through",
  },
  flex: {
    flexDirection: "row",
  },
  rating:{
    fontFamily:"Lato-Bold",
    fontSize:16,
    marginLeft:5,
    color:"white",
  },
  productsection:{
    marginTop:8,
  },
  ratingcontent:{
    backgroundColor:"#4CAF50",
    flexDirection:"row",
    padding:6,
    alignItems:"center",
    borderRadius:5,
    marginTop:4
  },
  ratingbox:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  
  customizebox: {
    width: "100%",
    padding: 15,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 5,
    elevation: 1,
  },
  customizeheading: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: "#323232",
  },
  tabContainer: {
    flexDirection: 'row',
  },
  tabButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 2,
    marginRight: 10,
  },
  tabcolorButton: {
    flex: 1,
    padding: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 1,
    padding: 15,
    marginRight: 10,
  },
  selectedTabButton: {
    borderColor: "#8FBF00",
    borderWidth: 2,
  },
  tabButtonText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: '#323232',
    textAlign: 'center',
  },
  describe:{
    fontFamily:"Roboto",
    fontSize:14,
    color:"#646464",
  },
});

export default Viewproduct;
