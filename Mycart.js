import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Mycart(props) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedTab1, setSelectedTab1] = useState(null);

  const handleTabPress = (tabIndex) => {
    setSelectedTab(tabIndex);
    setSelectedTab1(tabIndex);
  };

  const [modal1Visible, setModal1Visible] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
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
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.maincontainer}>
        <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modal1Visible}
            onRequestClose={() => {
              setModal1Visible(!modal1Visible)
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Pressable onPress={() => setModal1Visible(!modal1Visible)}
                  style={styles.buttonclose} >
                  <Image style={styles.cancel} source={require('./assets/cancel.png')} />
                </Pressable>
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
                          selectedTab1 === 'tab1' && styles.selectedTabButton,
                        ]}
                        onPress={() => handleTabPress('tab1')}
                      >
                        <Text style={styles.tabButtonText}>S</Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.6}
                        style={[
                          styles.tabButton,
                          selectedTab1 === 'tab2' && styles.selectedTabButton,
                        ]}
                        onPress={() => handleTabPress('tab2')}
                      >
                        <Text style={styles.tabButtonText}>M</Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.6}
                        style={[
                          styles.tabButton,
                          selectedTab1 === 'tab3' && styles.selectedTabButton,
                        ]}
                        onPress={() => handleTabPress('tab3')}
                      >
                        <Text style={styles.tabButtonText}>XL</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.customizebox}>
                  <Text style={styles.customizeheading}>Select quantity</Text>
                  <View style={{ marginTop: 20, }}>
                    <View style={styles.tabContainer}>
                      <TouchableOpacity activeOpacity={0.6} style={styles.icons} onPress={handleDecrement}>
                      <AntDesign name="minus" size={24} color="#323232" />
                      </TouchableOpacity>
                      <View style={styles.countbox}>
                      <Text style={styles.countText}>{count}</Text>
                      </View>
                      <TouchableOpacity activeOpacity={0.6} style={styles.icons} onPress={handleIncrement}>
                      <AntDesign name="plus" size={24} color="#323232" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <Pressable style={styles.button}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.text}>Done</Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>
          </Modal>
          <View>
            <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("Home")}>
              <Image style={styles.back} source={require('./assets/back.png')} />
            </TouchableOpacity>
            <Text style={styles.heading}>My Cart</Text>
            <View style={styles.box}>
              <View style={styles.flex}>
                <View>
                  <Checkbox style={styles.checkbox} value={isChecked1} onValueChange={setChecked1} />
                </View>
                <View style={styles.productsection}>
                  <View style={styles.flex}>
                    <View style={styles.productbox}>
                      <Image style={styles.product} source={require('./assets/product.jpg')} />
                    </View>
                    <View style={styles.details}>
                      <Text style={styles.productname}>Nike T-shirt</Text>
                      <Text style={styles.category}>Men T-shirt collections</Text>
                      <View style={styles.flex}>
                        <View>
                          <TouchableOpacity activeOpacity={0.6} style={styles.specifybox} onPress={() => setModal1Visible(true)}>
                            <View style={styles.flex}>
                              <Text style={styles.specification}>Size : </Text>
                              <Text style={styles.model}> M</Text>
                              <AntDesign style={styles.downicon} name="down" size={12} color="#646464" />
                            </View>
                          </TouchableOpacity>
                        </View>
                        <View>
                          <TouchableOpacity activeOpacity={0.6} style={[styles.specifybox, styles.specifysecondary]} onPress={() => setModal1Visible(true)}>
                            <View style={styles.flex}>
                              <Text style={styles.specification}>Quantity : </Text>
                              <Text style={styles.model}> 3</Text>
                              <AntDesign style={styles.downicon} name="down" size={12} color="#646464" />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <TouchableOpacity activeOpacity={0.6} style={styles.quantitybox}  onPress={() => setModal1Visible(true)}>
                        <View style={styles.flex}>
                          <Text style={styles.specification}>Color : </Text>
                          <Text style={styles.model}> Black</Text>
                          <AntDesign style={styles.downicon} name="down" size={12} color="#646464" />
                        </View>
                      </TouchableOpacity>
                      <View style={styles.flex}>
                        <Text style={styles.discountprice}>$799</Text>
                        <Text style={styles.originalprice}>$999</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <Pressable style={styles.deletebutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <View style={styles.flexbutton}>
                      <MaterialCommunityIcons name="delete-outline" size={21} color="white" style={styles.deleteicon} />
                      <Text style={styles.deletetext}>Remove</Text>
                    </View>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.flex}>
                <View>
                  <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
                </View>
                <View style={styles.productsection}>
                  <View style={styles.flex}>
                    <View style={styles.productbox}>
                      <Image style={styles.product} source={require('./assets/product.jpg')} />
                    </View>
                    <View style={styles.details}>
                      <Text style={styles.productname}>Nike T-shirt</Text>
                      <Text style={styles.category}>Men T-shirt collections</Text>
                      <View style={styles.flex}>
                        <View>
                          <TouchableOpacity activeOpacity={0.6} style={styles.specifybox} onPress={() => setModal1Visible(true)}>
                            <View style={styles.flex}>
                              <Text style={styles.specification}>Size : </Text>
                              <Text style={styles.model}> M</Text>
                              <AntDesign style={styles.downicon} name="down" size={12} color="#646464" />
                            </View>
                          </TouchableOpacity>
                        </View>
                        <View>
                          <TouchableOpacity activeOpacity={0.6} style={[styles.specifybox, styles.specifysecondary]} onPress={() => setModal1Visible(true)}>
                            <View style={styles.flex}>
                              <Text style={styles.specification}>Quantity : </Text>
                              <Text style={styles.model}> 3</Text>
                              <AntDesign style={styles.downicon} name="down" size={12} color="#646464" />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <TouchableOpacity activeOpacity={0.6} style={styles.quantitybox} onPress={() => setModal1Visible(true)}>
                        <View style={styles.flex}>
                          <Text style={styles.specification}>Color : </Text>
                          <Text style={styles.model}> Black</Text>
                          <AntDesign style={styles.downicon} name="down" size={12} color="#646464" />
                        </View>
                      </TouchableOpacity>
                      <View style={styles.flex}>
                        <Text style={styles.discountprice}>$799</Text>
                        <Text style={styles.originalprice}>$999</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <Pressable style={styles.deletebutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <View style={styles.flexbutton}>
                      <MaterialCommunityIcons name="delete-outline" size={21} color="white" style={styles.deleteicon} />
                      <Text style={styles.deletetext}>Remove</Text>
                    </View>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.pricecontent}>
            <Text style={styles.priceheading}>Price Details (2 Items)</Text>
            <View style={styles.hairline}></View>
            <View style={styles.amount}>
              <View style={styles.amountflex}>
                <Text style={styles.billheading}>Subtotal</Text>
                <Text style={styles.price}>$475</Text>
              </View>
              <View style={styles.amountflex}>
                <Text style={styles.billheading}>Delivery</Text>
                <Text style={styles.price}>$75</Text>
              </View>
              <View style={styles.amountflex}>
                <Text style={styles.billheading}>Promotion</Text>
                <Text style={styles.price}>-$45</Text>
              </View>
            </View>
            <View style={styles.hairline}></View>
            <View style={styles.amount}>
              <View style={styles.amountflex}>
                <Text style={styles.Totalheading}>Total</Text>
                <Text style={styles.price}>-$45</Text>
              </View>
            </View>
            <View style={styles.hairline}></View>
            <Text style={styles.priceheading}>Have any coupon code?</Text>
            <View style={styles.couponbox}>
              <Text style={styles.apply}>Apply</Text>
              <TextInput style={styles.inputfield} />
            </View>
            <Text style={styles.priceheading}>We Accept</Text>
            <View style={styles.flex}>
              <View style={styles.paymentmethod}>
                <Image style={styles.visapayment} source={require('./assets/visa.png')} />
              </View>
              <View style={styles.paymentmethod}>
                <Image style={styles.masterpayment} source={require('./assets/master.png')} />
              </View>
              <View style={styles.paymentmethod}>
                <Image style={styles.paypalpayment} source={require('./assets/paypal.png')} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.fixedbutton}>
        <Text style={styles.selectedtext}>2 items are selected for order</Text>
        <Pressable style={styles.button}>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.text} onPress={() => props.navigation.navigate("Payment")}>Go to Checkout</Text>
          </TouchableOpacity>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "white",
    height: "100%",
    flex: 1,
  },
  customizebox: {
    width: "85%",
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
  countbox:{
    height:35,
    width:45,
    elevation:1,
    borderRadius:5,
    marginLeft:5,
    marginRight:5,
  },
  icons:{
    marginTop:5,
  },
  countText:{
    fontFamily:"Lato-Bold",
    fontSize:16,
    textAlign:"center",
    marginTop:8,
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
  fixedbutton: {
    width: "100%",
    height: 100,
    padding: 6,
    overflow: "hidden",
    backgroundColor: "#FBFBFB",
  },
  downicon: {
    marginTop: 3,
    marginLeft: 4,
  },
  specifybox: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: "#969696",
    borderRadius: 5,
    padding: 5,
  },
  quantitybox: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: "#969696",
    borderRadius: 5,
    padding: 5,
    width: 98,
  },
  specifysecondary: {
    marginLeft: 10,
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
    marginTop: 66,
    marginLeft: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  selectedtext: {
    fontFamily: "Roboto",
    fontSize: 16,
    textAlign: "center",
    marginLeft: 12,
    marginTop: 5,
    color: "#646464",
    fontWeight: "bold",
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
  buttonclose: {
    width: 30,
    height: 30,
    paddingRight: 15,
    paddingTop: 15,
    flexDirection: "row",
    alignSelf: "flex-end",
    backgroundColor: "white",
  },
  hairline: {
    backgroundColor: '#D6D6D6',
    height: 1,
    marginTop: 8,
    width: "100%",
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
    width: "85%",
    height: 45,
    alignSelf: "center",
    marginTop: 10,
  },
  discountprice: {
    fontFamily: "Roboto",
    fontSize: 14,
    marginTop: 11,
    fontWeight: "bold",
    color: "#323232",
  },
  originalprice: {
    fontFamily: "Roboto",
    fontSize: 10,
    marginTop: 15,
    fontWeight: "normal",
    color: "#646464",
    marginLeft: 5,
    textDecorationLine: "line-through",
  },
  category: {
    fontFamily: "Roboto",
    fontSize: 12,
    marginTop: 8,
    fontWeight: "bold",
    color: "#808080",
  },
  specification: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "bold",
    color: "#808080",
  },
  productname: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: "#323232",
  },
  details: {
    marginLeft: 13,
  },
  model: {
    fontFamily: "Lato-Bold",
    fontSize: 12,
    marginTop: 2,
    color: "#646464",
  },
  productbox: {
    width: 100,
    height: 150,
    overflow: "hidden",
    borderRadius: 5,
  },
  product: {
    width: "100%",
    height: "100%",
  },
  productsection: {
    marginTop: 10,
  },
  box: {
    width: "100%",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 15,
    padding: 12,
    paddingLeft: 28,
    borderBottomColor: "rgba(90, 90, 90, 0.3)",
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  checkbox: {
    marginTop: 70,
    marginRight: 20,
  },
  flex: {
    flexDirection: "row",
  },
  flexbutton: {
    flexDirection: "row",
  },
  deleteicon: {
    marginTop: 6,
    marginLeft: 8,
  },
  deletebutton: {
    borderRadius: 5,
    backgroundColor: '#ED5E68',
    height: 35,
    width: 95,
    marginTop: 8,
    marginRight: 10,
    alignSelf: "flex-end",
  },
  deletetext: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 7,
    fontFamily: "Lato-Bold",
    letterSpacing: 0.25,
    marginLeft: 2,
    color: 'white',
  },
  priceheading: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    paddingLeft: 10,
    marginTop: 25,
  },
  amount: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  amountflex: {
    flexDirection: "row",
    marginTop: 17,
    justifyContent: "space-between",
  },
  billheading: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
  },
  Totalheading: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
  },
  price: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
  },
  couponbox: {
    position: "relative",
  },
  inputfield: {
    width: "95%",
    height: 40,
    backgroundColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#969696",
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 60,
  },
  apply: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: "#8FBF00",
    fontWeight: 500,
    position: "absolute",
    zIndex: 1,
    top: 18,
    right: 16,
  },
  pricecontent: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  paymentmethod: {
    marginTop: 10,
    marginBottom: 10,
  },
  visapayment: {
    width: 87,
    height: 26,
    marginTop: 8,
    marginLeft: 4,
  },
  paypalpayment: {
    width: 45,
    height: 37,
    marginTop: 2,
    marginLeft: 15,
  },
  masterpayment: {
    width: 60,
    height: 42,
    marginLeft: 15,
  },
});



