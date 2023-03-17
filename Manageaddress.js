import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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
              <AntDesign name="plus" size={18} color="white" style={styles.addicon}/>
                <Text style={styles.text} onPress={() => setModalVisible(true)}>Add</Text>
              </View>
            </TouchableOpacity>
          </Pressable>
           <View style={styles.box}>
            
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
  box: {
    width: "88%",
    height: 150,
    borderRadius: 5,
    alignSelf: "center",
    marginTop:15,
    borderColor: "rgba(90, 90, 90, 0.3)",
    padding: 12,
    borderWidth: 1,
    paddingTop: 15,
    paddingBottom: 10,
  },
  heading: {
    fontFamily: "Roboto",
    fontSize: 20,
    marginTop:66,
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
  addicon:{
    marginTop:8,
    marginLeft:12,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#8FBF00',
    width: 80,
    height: 35,
    marginTop: 20,
    marginRight: 25,
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
});
