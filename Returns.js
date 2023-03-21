import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

export default function Returns(props) {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);
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
    <ScrollView style={styles.maincontainer}>
      <View>
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
                <Text style={styles.modalheading}>Filter by date</Text>
                <Pressable
                  style={styles.buttonclose}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <AntDesign name="close" size={24} color="black" style={styles.closeicon} />
                </Pressable>
              </View>
              <View style={styles.hairline}></View>
              <View>
                <RadioButton.Group onValueChange={value => setSelectedValue(value)} value={selectedValue}>
                  <RadioButton.Item label="Men Category" value="first" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="Women Category" value="second" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="Kids Category" value="third" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="Women Category" value="four" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="Kids Category" value="five" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
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
                    <Text style={styles.secondarytext}>Clear</Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <View>
          <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("Home")}>
            <Image style={styles.back} source={require('./assets/back.png')} />
          </TouchableOpacity>
          <Text style={styles.heading}>My Returns</Text>
          <Pressable style={styles.button}>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={styles.flexbutton}>
                <Image style={styles.filter} source={require('./assets/filter.png')} />
                <Text style={styles.text} onPress={() => setModalVisible(true)}>Filter by Date</Text>
              </View>
            </TouchableOpacity>
          </Pressable>
          <View>
            <View style={styles.box}>
              <View style={styles.flex}>
                <Text>
                  <Text style={styles.order}>Order ID - </Text><Text style={styles.id}>203334596#</Text>
                </Text>
                <View style={styles.returnstatus}>
                  <Text style={styles.returntext}>Returned</Text>
                </View>
              </View>
              <View>
                <Text style={styles.date}>Order returned on july 23, 2022</Text>
              </View>
              <View style={styles.productsection}>
                <View style={styles.flex}>
                  <View style={styles.productbox}>
                    <Image style={styles.product} source={require('./assets/product.jpg')} />
                  </View>
                  <View style={styles.details}>
                    <Text style={styles.productname}>Nike T-shirt</Text>
                    <Text style={styles.category}>Men T-shirt collections</Text>
                    <Text style={{ marginTop: 6 }}>
                      <Text style={styles.specification}>Size : </Text><Text style={styles.model}> M</Text>
                    </Text>
                    <Text style={{ marginTop: 6 }}>
                      <Text style={styles.specification}>Color : </Text><Text style={styles.model}> Black</Text>
                    </Text>
                    <Text style={{ marginTop: 6 }}>
                      <Text style={styles.specification}>Quantity : </Text><Text style={styles.model}> 3</Text>
                    </Text>
                    <View style={styles.flex}>
                      <Text style={styles.discountprice}>$799</Text>
                      <Text style={styles.originalprice}>$999</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={styles.deliverytext}>Order Delivered on july 22, 2022  </Text>
                </View>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.flex}>
                <Text>
                  <Text style={styles.order}>Order ID - </Text><Text style={styles.id}>203334596#</Text>
                </Text>
                <View style={styles.returnstatus}>
                  <Text style={styles.returntext}>Returned</Text>
                </View>
              </View>
              <View>
                <Text style={styles.date}>Order returned on july 23, 2022</Text>
              </View>
              <View style={styles.productsection}>
                <View style={styles.flex}>
                  <View style={styles.productbox}>
                    <Image style={styles.product} source={require('./assets/product.jpg')} />
                  </View>
                  <View style={styles.details}>
                    <Text style={styles.productname}>Nike T-shirt</Text>
                    <Text style={styles.category}>Men T-shirt collections</Text>
                    <Text style={{ marginTop: 6 }}>
                      <Text style={styles.specification}>Size : </Text><Text style={styles.model}> M</Text>
                    </Text>
                    <Text style={{ marginTop: 6 }}>
                      <Text style={styles.specification}>Color : </Text><Text style={styles.model}> Black</Text>
                    </Text>
                    <Text style={{ marginTop: 6 }}>
                      <Text style={styles.specification}>Quantity : </Text><Text style={styles.model}> 3</Text>
                    </Text>
                    <View style={styles.flex}>
                      <Text style={styles.discountprice}>$799</Text>
                      <Text style={styles.originalprice}>$999</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={styles.deliverytext}>Order Delivered on july 22, 2022  </Text>
                </View>
              </View>
            </View>
          </View>
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
  flexbutton: {
    flexDirection: "row",
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
  flex: {
    flexDirection: "row",
  },
  flexfilter: {
    flexDirection: "row",
    padding: 5,
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
  box: {
    width: "88%",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 15,
    borderColor: "rgba(90, 90, 90, 0.3)",
    padding: 12,
    borderWidth: 1,
    paddingTop: 15,
    paddingBottom: 10,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#8FBF00',
    width: 150,
    height: 35,
    marginTop: 20,
    marginRight: 25,
    alignSelf: "flex-end",
  },
  productsection: {
    marginTop: 18,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: "Lato-Bold",
    letterSpacing: 0.25,
    marginLeft: 5,
    color: 'white',
  },
  order: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: "Lato-Bold",
    letterSpacing: 0.25,
    color: '#323232',
  },
  productbox: {
    width: 100,
    height: 140,
    overflow: "hidden",
    borderRadius: 5,
  },
  product: {
    width: "100%",
    height: "100%",
  },
  id: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: "Lato-Bold",
    letterSpacing: 0.25,
    color: "#2E6CF0",
  },
  buttonflex: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  returntext: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 21,
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: "#ED5E68",
    textAlign: "center",
  },
  deliverytext: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Lato-Bold",
    letterSpacing: 0.18,
    marginTop: 17,
    alignSelf: "flex-end",
    color: "#969696",
  },
  date: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Lato-Bold",
    letterSpacing: 0.18,
    color: "#969696",
  },
  returnstatus: {
    width: 100,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#FFEAEA",
    marginLeft: 44,
  },
  buttonclose: {
    width: 50,
    height: 50,
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "flex-end",
    backgroundColor: "white",
  },
  details: {
    marginLeft: 13,
  },
  filter: {
    width: 14,
    height: 14,
    marginTop: 9,
    marginLeft: 19,
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
  closeicon: {
    position: "absolute",
    left: 225,
    top: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  productname: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: "#323232",
  },
  modalheading: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: "#323232",
    marginTop: 17,
    marginLeft: 10,
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
    marginTop: 5,
    fontWeight: "bold",
    color: "#808080",
  },
  hairline: {
    backgroundColor: '#D6D6D6',
    height: 1,
    width: "100%",
  },
  model: {
    fontFamily: "Lato-Bold",
    fontSize: 12,
    marginTop: 5,
    color: "#646464",
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
});
