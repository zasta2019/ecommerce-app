import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Ordersummary(props) {
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
              <Pressable
                style={styles.buttonclose}
                onPress={() => setModalVisible(!modalVisible)}>
                <Image style={styles.cancel} source={require('./assets/cancel.png')} />
              </Pressable>
             
            </View>
          </View>
        </Modal>
        <View>
          <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("Home")}>
            <Image style={styles.back} source={require('./assets/back.png')} />
          </TouchableOpacity>
          <Text style={styles.heading}>Order Summary</Text>
      <View style={{padding:18}}>
      <View style={styles.flexheading}>
            <Text style={styles.detailsheading}>Delivery Address</Text>
            <View style={styles.flexlink}>
            <AntDesign name="plus" size={16} color="#2E6CF0" style={{marginTop:2}}/>
            <Text style={styles.link}>Add New Delivery Address</Text>
            </View>
        </View>
        <View style={styles.box}>
          <View style={styles.flex}>
          <Ionicons name="home-outline" size={22} color="#323232" />
          <Text style={styles.locationheading}>Home</Text>
          </View>
          <Text style={styles.address}>3/450A, xyz road, Colombo</Text>
          <Text style={styles.address}>1234567890</Text>
        </View>
      </View>
      <View style={styles.hairline}></View>
      <View style={{padding:18}}>
      <View style={styles.flexheading}>
            <Text style={styles.detailsheading}>Payment Details</Text>
            <View style={styles.flexlink}>
            <AntDesign name="plus" size={16} color="#2E6CF0" style={{marginTop:2}}/>
            <Text style={styles.link}>Add New Payment Method</Text>
            </View>
        </View>
        <View style={styles.box}>
         
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
  flex: {
    flexDirection: "row",
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
  flexlink:{
    flexDirection:"row",
  },
  flexheading:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:10,
  },
  detailsheading: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color:"#323232",
    fontWeight: "bold",
  },
  address: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color:"#848484",
    fontWeight: 500,
    paddingLeft:25,
    paddingTop:5,
  },
  locationheading:{
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color:"#323232",
    marginTop:3,
    marginLeft:6,
    fontWeight: "bold",
  },
  hairline: {
    backgroundColor: '#D6D6D6',
    height: 1,
    width: "100%",
    marginTop:5,
  }, 
  link: {
    fontFamily: "Roboto",
    fontSize: 14,
    color:"#2E6CF0",
    fontWeight: "bold",
  },
  buttonclose: {
    width: 30,
    height: 30,
    padding: 7,
    flexDirection: "row",
    alignSelf: "flex-end",
    backgroundColor: "white",
  },
  box: {
    width: "100%",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 15,
    borderColor: "rgba(90, 90, 90, 0.3)",
    borderWidth: 1,
    padding:15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
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
});



