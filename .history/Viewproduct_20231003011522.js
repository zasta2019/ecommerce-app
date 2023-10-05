import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity, } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Product from './components/Product';
import { FontAwesome } from '@expo/vector-icons';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { ProgressBar} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native'; // Import useRoute hook
import { getProductsById } from './services/Products';



const images = [
  require('./assets/productview.jpg'),
  require('./assets/productview.jpg'),
  require('./assets/productview.jpg'),
  require('./assets/productview.jpg'),
];

const Viewproduct = (props) => {

  const navigation = useNavigation();
  const route = useRoute();
  const productId = route.params.productId;
  const [product,setProduct] = useState('');

  console.log(productId)

  const getProd = async()=>{
    try {
      const result = await getProductsById(productId);
      setProduct(result.data);
      console.log(result);

    } catch (error) {
      console.log(error);
    }

  }

  const handleNavigate = () => {
    // Use navigation.navigate or other navigation methods here
    navigation.navigate('Selectaddress');
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [modal1Visible, setModal1Visible] = useState(false);

  const theme = useTheme();
  const [selectedValue, setSelectedValue] = React.useState('');

  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabPress = (tabIndex) => {
    setSelectedTab(tabIndex);
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
    getProd();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  }
  else {
    SplashScreen.hideAsync();
  }
  return (
    <View style={{ marginTop: 30, backgroundColor: "white", flex: 1, }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.flexfilter}>
              <Text style={styles.modalheading}>Sort</Text>
              <Pressable
                style={styles.buttonclose}
                onPress={() => setModalVisible(!modalVisible)}>
                <AntDesign name="close" size={24} color="black" style={styles.closeicon} />
              </Pressable>
            </View>
            <View style={styles.hairline}></View>
            <View>
              <RadioButton.Group onValueChange={value => setSelectedValue(value)} value={selectedValue}>
                <RadioButton.Item label="Excellent" value="first" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                <RadioButton.Item label="Good" value="second" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                <RadioButton.Item label="Average" value="third" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                <RadioButton.Item label="Poor" value="four" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
              </RadioButton.Group>
            </View>
            <View style={styles.hairline}></View>
            <View style={styles.buttonflex}>
              <Pressable style={styles.applybutton}>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text style={styles.applytext}>Apply</Text>
                </TouchableOpacity>
              </Pressable>
              <Pressable style={styles.secondary}>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text style={styles.secondarytext}>Cancel</Text>
                </TouchableOpacity>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal1Visible}
        onRequestClose={() => {
          setModal1Visible(!modalVisible)
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.buttonclose}
              onPress={() => setModal1Visible(!modal1Visible)}>
              <Image style={styles.cancel} source={require('./assets/cancel.png')} />
            </Pressable>
            <View style={styles.modalcustomize}>
              <View style={styles.customizebox}>
                <Text style={styles.customizeheading}>Available colors</Text>
                <View style={{ marginTop: 20, }}>
                  <View style={styles.tabContainer}>
                    <TouchableOpacity activeOpacity={0.6}
                      style={[
                        styles.tabcolorButton,
                        selectedTab === '0' && styles.selectedTabButton, { backgroundColor: 'white' },
                      ]}
                      onPress={() => handleTabPress('0')}
                    >

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}
                      style={[
                        styles.tabcolorButton,
                        selectedTab === '1' && styles.selectedTabButton, { backgroundColor: '#B6B7BA' },
                      ]}
                      onPress={() => handleTabPress('1')}
                    >

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}
                      style={[
                        styles.tabcolorButton,
                        selectedTab === '2' && styles.selectedTabButton, { backgroundColor: '#323232' },
                      ]}
                      onPress={() => handleTabPress('2')}
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
                        selectedTab === '3' && styles.selectedTabButton,
                      ]}
                      onPress={() => handleTabPress('3')}
                    >
                      <Text style={styles.tabButtonText}>S</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}
                      style={[
                        styles.tabButton,
                        selectedTab === '4' && styles.selectedTabButton,
                      ]}
                      onPress={() => handleTabPress('4')}
                    >
                      <Text style={styles.tabButtonText}>M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}
                      style={[
                        styles.tabButton,
                        selectedTab === '5' && styles.selectedTabButton,
                      ]}
                      onPress={() => handleTabPress('5')}
                    >
                      <Text style={styles.tabButtonText}>L</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}
                      style={[
                        styles.tabButton,
                        selectedTab === '6' && styles.selectedTabButton,
                      ]}
                      onPress={() => handleTabPress('6')}
                    >
                      <Text style={styles.tabButtonText}>XL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}
                      style={[
                        styles.tabButton,
                        selectedTab === '7' && styles.selectedTabButton,
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
                        selectedTab === '8' && styles.selectedTabButton,
                      ]}
                      onPress={() => handleTabPress('8')}
                    >
                      <Text style={styles.tabButtonText}>HEMP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}
                      style={[
                        styles.tabButton,
                        selectedTab === '9' && styles.selectedTabButton,
                      ]}
                      onPress={() => handleTabPress('9')}
                    >
                      <Text style={styles.tabButtonText}>COTTON</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}
                      style={[
                        styles.tabButton,
                        selectedTab === '10' && styles.selectedTabButton,
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
                        selectedTab === '11' && styles.selectedTabButton,
                      ]}
                      onPress={() => handleTabPress('11')}
                    >
                      <Text style={styles.tabButtonText}>ECO-PRINT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}
                      style={[
                        styles.tabButton,
                        selectedTab === '12' && styles.selectedTabButton,
                      ]}
                      onPress={() => handleTabPress('12')}
                    >
                      <Text style={styles.tabButtonText}>SCREEN</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.6}>
                <Pressable style={styles.button}>
                  <TouchableOpacity activeOpacity={0.6} onPress={handleNavigate}>
                    <Text style={styles.text}>Done</Text>
                  </TouchableOpacity>
                </Pressable>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={handleScroll}
          >
            {product&&product.productImageUrl.map((image, index) => (
              <Pressable key={index}>
                <Image  source={{ uri: image }} style={styles.image} />
                <TouchableOpacity activeOpacity={0.6} style={styles.backbuttonContainer}>
        <Feather name="arrow-left" size={24} color="#646464" style={{ marginLeft: 4}} />
      </TouchableOpacity>
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
                  <Feather name="share-2" size={24} color="#646464" style={{ marginRight: 2, }} />
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
          {/* <Text style={styles.flaunt}>Flaunt Green</Text> */}
          <View style={styles.productsection}>
            <View style={styles.ratingbox}>
              <Text style={styles.productname}>{product.productName}</Text>
              <View style={styles.ratingcontent}>
                <Text style={styles.rating}>4</Text>
                <FontAwesome name="star" size={16} color="white" style={{ marginLeft: 3, }} />
              </View>
            </View>
            <Text style={styles.categoryname}>{product.productDescription}</Text>
            <View style={styles.flex}>
              <Text style={styles.discountprice}>{product.productRates[0].currency.currency}{product.productRates[0].prodtDiscountedCost}</Text>
              <Text style={styles.originalprice}>{product.productRates[0].currency.currency}{product.productRates[0].productCost}</Text>
            </View>
          </View>
          <View style={styles.customizebox}>
            <Text style={styles.customizeheading}>Available colors</Text>
            <View style={{ marginTop: 20, }}>
              <View style={styles.tabContainer}>
              {product &&
{product &&product.colourAndSize.map((data, index) => (
    <View key={index}>
      {data.colour.split(', ').map((color, colorIndex) => (
        <TouchableOpacity
          key={colorIndex}
          activeOpacity={0.6}
          style={[
            styles.tabcolorButton,
            selectedTab === `${index}-${colorIndex}` && styles.selectedTabButton,
            { backgroundColor: color },
          ]}
          onPress={() => handleTabPress(`${index}-${colorIndex}`)} // Use a unique key here
        >
          <Text style={styles.colorText}>{color}</Text>
        </TouchableOpacity>
      ))}
    </View>
  ))}


        
                {/* <TouchableOpacity activeOpacity={0.6}
                  style={[
                    styles.tabcolorButton,
                    selectedTab === '1' && styles.selectedTabButton, { backgroundColor: '#B6B7BA' },
                  ]}
                  onPress={() => handleTabPress('1')}
                >

                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                  style={[
                    styles.tabcolorButton,
                    selectedTab === '2' && styles.selectedTabButton, { backgroundColor: '#323232' },
                  ]}
                  onPress={() => handleTabPress('2')}
                >

                </TouchableOpacity> */}
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
                    selectedTab === '3' && styles.selectedTabButton,
                  ]}
                  onPress={() => handleTabPress('3')}
                >
                  <Text style={styles.tabButtonText}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                  style={[
                    styles.tabButton,
                    selectedTab === '4' && styles.selectedTabButton,
                  ]}
                  onPress={() => handleTabPress('4')}
                >
                  <Text style={styles.tabButtonText}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                  style={[
                    styles.tabButton,
                    selectedTab === '5' && styles.selectedTabButton,
                  ]}
                  onPress={() => handleTabPress('5')}
                >
                  <Text style={styles.tabButtonText}>L</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                  style={[
                    styles.tabButton,
                    selectedTab === '6' && styles.selectedTabButton,
                  ]}
                  onPress={() => handleTabPress('6')}
                >
                  <Text style={styles.tabButtonText}>XL</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                  style={[
                    styles.tabButton,
                    selectedTab === '7' && styles.selectedTabButton,
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
                    selectedTab === '8' && styles.selectedTabButton,
                  ]}
                  onPress={() => handleTabPress('8')}
                >
                  <Text style={styles.tabButtonText}>HEMP</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                  style={[
                    styles.tabButton,
                    selectedTab === '9' && styles.selectedTabButton,
                  ]}
                  onPress={() => handleTabPress('9')}
                >
                  <Text style={styles.tabButtonText}>COTTON</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                  style={[
                    styles.tabButton,
                    selectedTab === '10' && styles.selectedTabButton,
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
                    selectedTab === '11' && styles.selectedTabButton,
                  ]}
                  onPress={() => handleTabPress('11')}
                >
                  <Text style={styles.tabButtonText}>ECO-PRINT</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                  style={[
                    styles.tabButton,
                    selectedTab === '12' && styles.selectedTabButton,
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
          <View style={styles.customizebox}>
                  <Text style={styles.customizeheading}>Product Ratings</Text>
                  <View style={{ marginTop: 10, }}>
                <View style={styles.flexstar}>
                  <View style={styles.ratingflex}>
                  <Text style={styles.starrating}>5</Text>
                    <FontAwesome name="star" size={16} color="#FFD15B" style={{ marginLeft: 3,marginTop:1, }} />
                  </View>
               <View style={{width:"80%"}}>
               <ProgressBar progress={0.85} color="#FFD15B" style={{width:"100%",marginTop:6,marginLeft:8,borderRadius:5,height:8,}} />
               </View>
                <Text style={styles.percentage}>85%</Text>
                </View>
                <View style={styles.flexstar}>
                  <View style={styles.ratingflex}>
                  <Text style={styles.starrating}>4</Text>
                    <FontAwesome name="star" size={16} color="#FFD15B" style={{ marginLeft: 3,marginTop:1, }} />
                  </View>
               <View style={{width:"80%"}}>
               <ProgressBar progress={0.7} color="#FFD15B" style={{width:"100%",marginTop:6,marginLeft:8,borderRadius:5,height:8,}} />
               </View>
                <Text style={styles.percentage}>70%</Text>
                </View>
                <View style={styles.flexstar}>
                  <View style={styles.ratingflex}>
                  <Text style={styles.starrating}>3</Text>
                    <FontAwesome name="star" size={16} color="#FFD15B" style={{ marginLeft: 3,marginTop:1, }} />
                  </View>
               <View style={{width:"80%"}}>
               <ProgressBar progress={0.55} color="#FFD15B" style={{width:"100%",marginTop:6,marginLeft:8,borderRadius:5,height:8,}} />
               </View>
                <Text style={styles.percentage}>55%</Text>
                </View>
                <View style={styles.flexstar}>
                  <View style={styles.ratingflex}>
                  <Text style={styles.starrating}>2</Text>
                    <FontAwesome name="star" size={16} color="#FFD15B" style={{ marginLeft: 3,marginTop:1, }} />
                  </View>
               <View style={{width:"80%"}}>
               <ProgressBar progress={0.15} color="#FFD15B" style={{width:"100%",marginTop:6,marginLeft:8,borderRadius:5,height:8,}} />
               </View>
                <Text style={styles.percentage}>15%</Text>
                </View>
                <View style={styles.flexstar}>
                  <View style={styles.ratingflex}>
                  <Text style={styles.starrating}>1</Text>
                    <FontAwesome name="star" size={16} color="#FFD15B" style={{ marginLeft: 3,marginTop:1, }} />
                  </View>
               <View style={{width:"80%"}}>
               <ProgressBar progress={0.1} color="#FFD15B" style={{width:"100%",marginTop:6,marginLeft:8,borderRadius:5,height:8,}} />
               </View>
                <Text style={styles.percentage}>10%</Text>
                </View>
                  </View>
                </View>
          <View style={styles.customizebox}>
            <View style={styles.flexreview}>
              <Text style={styles.reviewcustomizeheading}>All Reviews (65)</Text>
              <View>
                <TouchableOpacity activeOpacity={0.6} style={styles.specifybox} onPress={() => setModalVisible(true)}>
                  <View style={styles.flex}>
                    <Text style={styles.specification}>Sort by </Text>
                    <AntDesign style={styles.downicon} name="down" size={12} color="#646464" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.reviewhairline}></View>
            <View>
              <View style={styles.reviewclient}>
                <View>
                  <Image style={styles.category} source={require('./assets/tshirts.jpg')} />
                </View>
                <View>
                  <Text style={styles.username}>Surya Chandran</Text>
                  <View style={styles.reviewratingcontent}>
                    <Text style={styles.reviewrating}>4</Text>
                    <FontAwesome name="star" size={16} color="white" style={{ marginLeft: 3, }} />
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.review}>Excellent products and nice packing really awesome, worth for buying.</Text>
              </View>
              <View style={styles.imageflex}>
                <View style={styles.photoreview}>
                  <Image style={styles.photo} source={require('./assets/review1.jpg')} />
                </View>
                <View style={styles.photoreview}>
                  <Image style={styles.photo} source={require('./assets/review2.jpg')} />
                </View>
              </View>
              <View>
                <Text style={styles.reviewdate}>12 May 2020</Text>
              </View>
            </View>
            <View style={styles.reviewhairline}></View>
            <View>
              <View style={styles.reviewclient}>
                <View>
                  <Image style={styles.category} source={require('./assets/tshirts.jpg')} />
                </View>
                <View>
                  <Text style={styles.username}>Surya Chandran</Text>
                  <View style={styles.reviewratingcontent}>
                    <Text style={styles.reviewrating}>4</Text>
                    <FontAwesome name="star" size={16} color="white" style={{ marginLeft: 3, }} />
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.review}>Excellent products and nice packing really awesome, worth for buying.</Text>
              </View>
              <View style={styles.imageflex}>
                <View style={styles.photoreview}>
                  <Image style={styles.photo} source={require('./assets/review1.jpg')} />
                </View>
                <View style={styles.photoreview}>
                  <Image style={styles.photo} source={require('./assets/review2.jpg')} />
                </View>
              </View>
              <View>
                <Text style={styles.reviewdate}>12 May 2020</Text>
              </View>
            </View>
            <View style={styles.reviewhairline}></View>
            <View>
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={styles.seeall}>See All Reviews</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.heading}>Similar Products for you</Text>
        <View style={styles.productlisting}>
          <View style={styles.flexproduct}>
            <Product productname="Nike T-shirts" category="Men T-shirts collection" discount="-30%" discountprice="$799" actualprice="$999" imageSource={require("./assets/product.jpg")} />
            <Product productname="Puma T-shirts" category="Men T-shirts collection" discount="-50%" discountprice="$599" actualprice="$899" imageSource={require("./assets/menproduct.jpg")} />
          </View>
          <View style={styles.flexproduct}>
            <Product productname="Nike T-shirts" category="Women T-shirts collection" discount="-30%" discountprice="$799" actualprice="$999" imageSource={require("./assets/w-product.jpg")} />
            <Product productname="Puma T-shirts" category="Women T-shirts collection" discount="-50%" discountprice="$599" actualprice="$899" imageSource={require("./assets/w-product1.jpg")} />
          </View>
          <View style={styles.flexproduct}>
            <Product productname="Nike T-shirts" category="Kids T-shirts collection" discount="-30%" discountprice="$799" actualprice="$999" imageSource={require("./assets/k-product.jpg")} />
            <Product productname="Puma T-shirts" category="Kids T-shirts collection" discount="-50%" discountprice="$599" actualprice="$899" imageSource={require("./assets/k-product2.jpg")} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.fixed}>
        <Pressable style={styles.buybutton}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => setModal1Visible(true)}>
            <View style={styles.flex}>
              <Text style={styles.buytext}>Buy Now</Text>
              <AntDesign name="doubleright" size={18} color="white" style={{ marginTop: 10 }} />
            </View>
          </TouchableOpacity>
        </Pressable>
        <Pressable style={styles.cartbutton}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => setModal1Visible(true)}>
            <View style={styles.flex}>
              <Text style={styles.carttext}>Add to Cart</Text>
              <Feather name="shopping-cart" size={22} color="#323232" style={{ marginTop: 7 }} />
            </View>
          </TouchableOpacity>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: 250,
    resizeMode: 'cover',
  },
  cartbutton: {
    backgroundColor: "white",
    borderColor: "#323232",
    borderWidth: 1,
    padding: 5,
    height: 45,
    borderRadius: 5,
    marginTop: 5,
    alignItems: "center",
    width: "47%",
  },
  buybutton: {
    backgroundColor: "#8FBF00",
    padding: 5,
    height: 45,
    borderRadius: 5,
    marginTop: 5,
    alignItems: "center",
    width: "47%",
  },
  carttext: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: "#323232",
    marginTop: 7,
    marginRight: 2,
  },
  buytext: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: "white",
    marginTop: 7,
    marginRight: 2,
  },
  fixed: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 75,
    padding: 10,
    backgroundColor: "#FBFBFB",
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
    elevation: 2,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backbuttonContainer:{
    position: 'absolute',
    top: 10,
    left: 20,
    width: 40,
    height: 40,
    elevation: 2,
    backgroundColor: "white",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButtonContainer: {
    top: 57,
  },
  content: {
    padding: 20,
  },
  flaunt: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: "#808080",
  },
  productname: {
    fontFamily: "Lato-Bold",
    marginTop: 10,
    fontSize: 20,
    color: "#323232",
  },
  categoryname: {
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
  productsection: {
    marginTop: 8,
  },
  rating: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    marginLeft: 5,
    color: "white",
  },
  ratingcontent: {
    backgroundColor: "#4CAF50",
    flexDirection: "row",
    padding: 6,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 4,
  },
  reviewrating: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    marginLeft: 5,
    color: "white",
  },
  reviewratingcontent: {
    backgroundColor: "#4CAF50",
    flexDirection: "row",
    padding: 6,
    width:50,
    alignItems: "center",
    marginLeft:8,
    borderRadius: 5,
    marginTop: 5,
  },
  ratingbox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  customizebox: {
    width: "100%",
    padding: 15,
    alignSelf: "center",
    overflow:"hidden",
    marginTop: 20,
    borderRadius: 5,
    elevation: 1,
  },
  customizeheading: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: "#323232",
  },
  reviewcustomizeheading: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    marginTop: 6,
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
  describe: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#646464",
  },
  downicon: {
    marginTop: 5,
    marginLeft: 2,
  },
  flexreview: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  specifybox: {
    borderWidth: 1,
    borderColor: "#969696",
    borderRadius: 5,
    padding: 5,
  },
  modalcustomize: {
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    backgroundColor: 'white',
    width: "100%",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  flexfilter: {
    flexDirection: "row",
    padding: 5,
  },
  modalheading: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: "#323232",
    marginTop: 17,
    marginLeft: 10,
  },
  closeicon: {
    position: "absolute",
    left: 299,
    top:5,
  },
  applytext: {
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: 'white',
  },
  applybutton: {
    borderRadius: 5,
    backgroundColor: '#8FBF00',
    width: 140,
    height: 45,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
  },
  secondary: {
    borderWidth: 1,
    borderColor: "#D4D4D4",
    borderRadius: 5,
    backgroundColor: 'white',
    width: 140,
    height: 45,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
  },
  secondarytext: {
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: '#323232',
  },
  buttonflex: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  hairline: {
    backgroundColor: '#D6D6D6',
    height: 1,
    marginTop: 8,
    width: "100%",
  },
  reviewhairline: {
    backgroundColor: '#D6D6D6',
    height: 1,
    marginTop: 10,
    width: "100%",
  },
  category: {
    overflow: 'hidden',
    width: 60,
    borderRadius: 50,
    marginTop: 10,
    height: 60,
  },
  username: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    marginTop: 12,
    marginLeft: 10,
  },
  reviewclient: {
    flexDirection: "row",
  },
  review: {
    fontFamily: "Roboto",
    fontSize: 14,
    marginTop: 10,
    marginLeft: 4,
    color: "#646464",
  },
  imageflex: {
    flexDirection: "row",
    marginTop: 10,
  },
  photoreview: {
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  photo: {
    width: "100%",
    marginLeft: 5,
    height: "100%",
  },
  reviewdate: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: "#646464",
    marginTop: 4,
    alignSelf: "flex-end",
  },
  buttonclose: {
    width: 30,
    height: 30,
    padding: 7,
    marginRight: 10,
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "flex-end",
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: 'white',
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#8FBF00',
    width: "100%",
    height: 45,
    marginTop: 18,
    marginBottom: 18,
    alignSelf: "center",
  },
  flex: {
    flexDirection: "row",
  },
  back: {
    position: "absolute",
    top: 20,
    marginLeft: 5,
    width: 70,
    height: 70,
    shadowColor: 'rgba(90, 90, 90, 0.25)',
  },
  heading: {
    fontFamily: "Roboto",
    fontSize: 20,
    marginTop: 5,
    marginLeft: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  productlisting: {
    padding: 10,
  },
  flexproduct: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  seeall: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    marginTop: 10,
    color: "#4CAF50",
  },
  flexstar:{
    flexDirection:"row",
    marginTop:7,
  },
  percentage:{
    fontFamily:"Roboto",
    fontSize:14,
    color:"#646464",
    marginLeft:16,
  },
  ratingflex:{
    flexDirection:"row",  
  },
  starrating:{
    fontFamily:"Lato-Bold",
    fontSize:15,
    color:"#323232",
  }
});

export default Viewproduct;
