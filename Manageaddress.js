import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Manageaddress(props) {
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
              <Text style={styles.reviewheading}>Are You Sure ?</Text>
              <Text style={styles.subtextreview}>Do you really want to delete this address</Text>
              <View style={styles.deleteflex}>
      <Pressable style={styles.delete}>
      <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.deletetext}>Delete</Text>
        </TouchableOpacity>
      </Pressable>
      <Pressable style={styles.cancelbutton}>
      <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.canceltext}>Cancel</Text>
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
          <Text style={styles.heading}>Manage Address</Text>
          <Pressable style={styles.button}>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={styles.flexbutton}>
                <AntDesign name="plus" size={18} color="white" style={styles.addicon} />
                <Text style={styles.text} onPress={() => props.navigation.navigate("Address")}>Add</Text>
              </View>
            </TouchableOpacity>
          </Pressable>
          <View style={{ padding: 18 }}>
            <View style={styles.box}>
              <View style={styles.flex}>
                <Ionicons name="home-outline" size={22} color="#323232" />
                <Text style={styles.locationheading}>Home</Text>
              </View>
              <Text style={styles.address}>3/450A, xyz road, Colombo</Text>
              <Text style={styles.address}>1234567890</Text>
              <View style={styles.buttonflex}>
                <Pressable style={styles.button}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <View style={styles.flexbutton}>
                      <Feather name="edit" size={17} color="white" style={styles.editicon} />
                      <Text style={styles.text}> Edit</Text>
                    </View>
                  </TouchableOpacity>
                </Pressable>
                <Pressable style={styles.deletebutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <View style={styles.flexbutton}>
                      <MaterialCommunityIcons name="delete-outline" size={21} color="white" style={styles.deleteicon} />
                      <Text style={styles.text}  onPress={() => setModalVisible(true)}>Delete</Text>
                    </View>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={{ padding: 18 }}>
            <View style={styles.box}>
              <View style={styles.flex}>
                <Ionicons name="ios-location-outline" size={24} color="#323232" />
                <Text style={styles.locationheading}>Others</Text>
              </View>
              <Text style={styles.address}>3/450A, xyz road, Colombo</Text>
              <Text style={styles.address}>1234567890</Text>
              <View style={styles.buttonflex}>
                <Pressable style={styles.button}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <View style={styles.flexbutton}>
                      <Feather name="edit" size={17} color="white" style={styles.editicon} />
                      <Text style={styles.text}> Edit</Text>
                    </View>
                  </TouchableOpacity>
                </Pressable>
                <Pressable style={styles.deletebutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <View style={styles.flexbutton}>
                      <MaterialCommunityIcons name="delete-outline" size={21} color="white" style={styles.deleteicon} />
                      <Text style={styles.text} onPress={() => setModalVisible(true)}>Delete</Text>
                    </View>
                  </TouchableOpacity>
                </Pressable>
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
  buttonflex: {
    flexDirection: 'row',
    justifyContent: "flex-end",
  },
  box: {
    width: "100%",
    borderRadius: 5,
    alignSelf: "center",
    borderColor: "rgba(90, 90, 90, 0.3)",
    borderWidth: 1,
    padding: 15,
    marginBottom: -10,
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
  address: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: "#848484",
    fontWeight: 500,
    paddingLeft: 27,
    paddingTop: 4,
  },
  locationheading: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: "#323232",
    marginTop: 3,
    marginLeft: 6,
    fontWeight: "bold",
  },
  heading: {
    fontFamily: "Roboto",
    fontSize: 20,
    marginTop: 66,
    marginLeft: 5,
    textAlign: "center",
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
  flexbutton: {
    flexDirection: "row",
  },
  addicon: {
    marginTop: 8,
    marginLeft: 16,
  },
  editicon: {
    marginTop: 8,
    marginLeft: 18,
  },
  deleteicon: {
    marginTop: 6,
    marginLeft: 8,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#8FBF00',
    height: 35,
    width: 85,
    marginTop: 20,
    marginRight: 20,
    alignSelf: "flex-end",
  },
  deletebutton: {
    borderRadius: 5,
    backgroundColor: '#ED5E68',
    height: 35,
    width: 85,
    marginTop: 20,
    marginRight: 20,
    alignSelf: "flex-end",
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 7,
    fontFamily: "Lato-Bold",
    letterSpacing: 0.25,
    marginLeft: 2,
    color: 'white',
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
  reviewheading: {
    fontFamily: "Lato-Bold",
    fontSize: 20,
    textAlign: "center",
    color:"#ED5E68",
  },
  subtextreview: {
    fontFamily: "Lato-Bold",
    fontSize: 15,
    marginTop: 10,
    letterSpacing:0.8,
    textAlign: "center",
    color: "#323232",
  },
  deleteflex:{
    flexDirection:"row",
    justifyContent:"space-evenly",
  },
  deletetext:{
      fontSize: 16,
      lineHeight: 21,
      textAlign: 'center',
      marginTop: 10,
      fontWeight: 'bold',
      fontFamily: "Roboto",
      letterSpacing: 0.25,
      color: 'white',
    },
    delete: {
      borderRadius: 5,
      backgroundColor: '#ED5E68',
      width: 140,
      height: 45,
      marginTop: 20,
      alignSelf: "center",
    },
    cancelbutton:{
      borderWidth:1,
      borderColor:"#D4D4D4",
      borderRadius: 5,
      backgroundColor: 'white',
      width: 140,
      height: 45,
      marginTop: 20,
      alignSelf: "center",
    },
    canceltext:{
      fontSize: 16,
      lineHeight: 21,
      textAlign: 'center',
      marginTop: 10,
      fontWeight: 'bold',
      fontFamily: "Roboto",
      letterSpacing: 0.25,
      color: '#323232',
    },
});
