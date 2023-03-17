import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Modal } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

export default function Contact(props) {
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
              <Pressable
                style={styles.buttonclose}
                onPress={() => setModalVisible(!modalVisible)}>
                <Image style={styles.cancel} source={require('./assets/cancel.png')} />
              </Pressable>
              <Image style={styles.success} source={require('./assets/success.png')} />
              <Text style={styles.successtext}>Thanks for Contacting Us</Text>
              <Text style={styles.subtext}>our Team will reach you out soon as possible</Text>
            </View>
          </View>
        </Modal>
                <View>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("Home")}>
                        <Image style={styles.back} source={require('./assets/back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.heading}>Contact Us</Text>
                    <View style={styles.accountcontent}>
                        <Text style={styles.textfield}>First Name</Text>
                        <TextInput style={styles.inputfield} />
                        <Text style={styles.textfield}>Last Name</Text>
                        <TextInput style={styles.inputfield} />
                        <Text style={styles.textfield}>E-mail</Text>
                        <TextInput style={styles.inputfield} />
                        <Text style={styles.textfield}>Mobile Number</Text>
                        <TextInput style={styles.inputfield} keyboardType='numeric' />
                        <Text style={styles.textfield}>What Support are you need with?</Text>
                      <View style={styles.radio}>
                      <RadioButton.Group onValueChange={value => setSelectedValue(value)} value={selectedValue}>
                            <RadioButton.Item label="Men Category" value="first" labelStyle={{ paddingLeft: 1 , fontFamily:"Lato-Regular", fontSize:14, color:"#323232", }}  style={{ flexDirection: 'row-reverse'}} color="#4CAF50" uncheckedColor="#969696" />
                            <RadioButton.Item label="Women Category" value="second"  labelStyle={{ paddingLeft: 1 , fontFamily:"Lato-Regular", fontSize:14, color:"#323232", }} style={{ flexDirection: 'row-reverse',marginTop:-10}} color="#4CAF50" uncheckedColor="#969696" />
                            <RadioButton.Item label="Kids Category" value="third"  labelStyle={{ paddingLeft: 1 , fontFamily:"Lato-Regular", fontSize:14, color:"#323232", }} style={{ flexDirection: 'row-reverse',marginTop:-10}} color="#4CAF50" uncheckedColor="#969696" />
                        </RadioButton.Group>
                      </View>
                      <Text style={styles.textfield}>Message</Text>
                      <TextInput style={styles.textarea} multiline={true} numberOfLines={6} placeholder="Type Your Message here..." />
                      <TouchableOpacity activeOpacity={0.6}>
          <Pressable style={styles.button}>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.text} onPress={() => setModalVisible(true)}>Send Message</Text>
            </TouchableOpacity>
          </Pressable>
        </TouchableOpacity>
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
        width: 319,
        height: 45,
        marginTop: 17,
        marginBottom:17,
        alignSelf: "center",
      },
    radio:{
        marginLeft:15,
        marginTop:5,
    },
    buttonclose: {
        width: 30,
        height: 30,
        padding: 7,
        flexDirection: "row",
        alignSelf: "flex-end",
        backgroundColor: "white",
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
    textfield: {
        fontFamily: "Lato-Bold",
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 40,
        color: "#323232",
        marginTop: 15,
    },
    accountcontent: {
        marginTop: 7,
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
    textarea:{
        width: 319,
        backgroundColor: "white",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#969696",
        borderRadius: 5,
        textAlignVertical: 'top',
        marginLeft: 40,
        marginTop: 7,
        paddingTop:10,
        paddingLeft: 10,
    },
});
