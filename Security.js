import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Modal } from 'react-native';

export default function Security(props) {
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
              <Image style={styles.success} source={require('./assets/success.png')} />
              <Text style={styles.successtext}>Your Password has been changed</Text>
              <Text style={styles.subtext}>You have reached your maximum prototyping speed</Text>
            </View>
          </View>
        </Modal>
      <View>
      <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("Home")}>
            <Image style={styles.back} source={require('./assets/back.png')} />
          </TouchableOpacity>
        <Text style={styles.heading}>Change Password</Text>
        <View style={styles.accountcontent}>
        <Text style={styles.textfield}>New Password</Text>
        <TextInput secureTextEntry={true} style={styles.inputfield} />
        <Text style={styles.textfield}>Re-type New Password</Text>
        <TextInput secureTextEntry={true} style={styles.inputfield} />
        </View>
        <View style={styles.flex}>
      <Pressable style={styles.button}>
      <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.text} onPress={() => setModalVisible(true)}>Save</Text>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: "white",
        height: "100%",
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
      inputfield: {
        width: 319,
        height: 40,
        backgroundColor: "white",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#969696",
        borderRadius: 5,
        marginLeft: 40,
        marginTop: 7,
        paddingLeft: 10,
      },
      flex:{
        flexDirection:"row",
        justifyContent:"space-evenly",
      },
      textfield: {
        fontFamily: "Lato-Bold",
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 40,
        color: "#323232",
        marginTop: 15,
      },
      accountcontent:{
        marginTop:7,
      },
      button: {
        borderRadius: 5,
        backgroundColor: '#8FBF00',
        width: 140,
        height: 45,
        marginTop: 20,
        alignSelf: "center",
      },
      secondary:{
        borderWidth:1,
        borderColor:"#D4D4D4",
        borderRadius: 5,
        backgroundColor: 'white',
        width: 140,
        height: 45,
        marginTop: 20,
        alignSelf: "center",
      },
      secondarytext:{
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        fontFamily: "Roboto",
        letterSpacing: 0.25,
        color: '#323232',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        fontFamily: "Roboto",
        letterSpacing: 0.25,
        color: 'white',
      },
      buttonclose: {
        width: 30,
        height: 30,
        padding: 7,
        flexDirection: "row",
        alignSelf: "flex-end",
        backgroundColor: "white",
      },
      cancel: {
        width: 16,
        height: 16,
      },
      success: {
        alignSelf: "center",
      },
      successtext: {
        fontFamily: "Lato-Bold",
        fontSize: 18,
        textAlign: "center",
        color: "#4CAF50",
        marginTop: 15,
      },
      subtext: {
        fontFamily: "Roboto",
        fontSize: 14,
        textAlign: "center",
        color: "#808080",
        marginTop: 10,
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
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
});
