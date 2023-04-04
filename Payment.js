import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function Payment(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

    const [expanded, setExpanded] = useState(false);
    const [titleColor, setTitleColor] = useState('black');
  
    const toggleExpand = () => {
      setExpanded(!expanded);
      setTitleColor(expanded ? 'black' : '#4CAF50');
    }
  
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
   <View style={{flex:1}}>
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
                <Text style={styles.modalheading}>Add New Card Details</Text>
                <Pressable
                  style={styles.buttonclose}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <AntDesign name="close" size={24} color="black" style={styles.closeicon} />
                </Pressable>
              </View>
              <View style={styles.hairline}></View>
              <View style={styles.formfield}>
              <TextInput style={styles.inputfield} placeholder="Name of the Card" />
              <TextInput style={styles.inputfield} placeholder="Card Number" />
              <View style={styles.flex}>
              <TextInput style={styles.halfinputfield} placeholder="MM/YY" />
              <TextInput style={[styles.halfinputfield,styles.margin]} placeholder="CVV" />
              </View>
              </View>
              <Pressable style={styles.savebutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.text}>Save Details</Text>
                  </TouchableOpacity>
                </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            setModalVisible1(!modalVisible1)
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View style={styles.flexfilter}>
                <Text style={styles.modalheading}>Add New Paypal Account </Text>
                <Pressable
                  style={styles.buttonclose}
                  onPress={() => setModalVisible1(!modalVisible1)}>
                  <AntDesign name="close" size={24} color="black" style={styles.closeiconpaypal} />
                </Pressable>
              </View>
              <View style={styles.hairline}></View>
              <View style={styles.formfield}>
              <TextInput style={styles.inputfield} placeholder="Paypal Email" />
              <TextInput style={styles.inputfield} placeholder="Password" />
              </View>
              <Pressable style={styles.savebutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.text}>Save Details</Text>
                  </TouchableOpacity>
                </Pressable>
            </View>
          </View>
        </Modal>
      <View>
      <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.navigation.navigate("Home")}>
            <Image style={styles.back} source={require('./assets/back.png')} />
          </TouchableOpacity>
        <Text style={styles.heading}>Add your payment method</Text>
      </View>
   <View style={{padding:10,marginTop:20,}}>

   <View style={styles.accordianbox}>
      <TouchableOpacity activeOpacity={0.6} onPress={toggleExpand}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontFamily:"Lato-Bold", color: titleColor }}>Credit or Debit card</Text>
          <Image
            source={expanded ? require('./assets/up.png') : require('./assets/down.png')}
            style={{ width: 20, height: 20 }}
          />
        </View>
      </TouchableOpacity>
      {expanded && (
        <View style={{ marginTop: 20 }}>
            <View style={styles.hairline}></View>
      <TouchableOpacity activeOpacity={0.6} style={styles.addcardbutton} onPress={() => setModalVisible(true)}>
      <Image style={styles.addcard} source={require('./assets/addcard.jpg')} />
      <Text style={styles.addcardtext}>Add New Card</Text>
      </TouchableOpacity>
        </View>
      )}
    </View>
   </View>
   <View style={{padding:10,}}>
   <View style={styles.accordianbox}>
      <TouchableOpacity activeOpacity={0.6} onPress={toggleExpand}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontFamily:"Lato-Bold", color: titleColor }}>Paypal</Text>
          <Image
            source={expanded ? require('./assets/up.png') : require('./assets/down.png')}
            style={{ width: 20, height: 20 }}
          />
        </View>
      </TouchableOpacity>
      {expanded && (
        <View style={{ marginTop: 20 }}>
            <View style={styles.hairline}></View>
            <Pressable style={styles.paypalbutton}>
                  <TouchableOpacity activeOpacity={0.6} onPress={() => setModalVisible1(true)}>
                  <View style={styles.flex}>
                  <AntDesign name="plus" size={22} color="white" style={{marginTop:8,marginRight:2,}} />
                  <Text style={styles.text}>Add New Paypal Account</Text>
                  </View>
                  </TouchableOpacity>
                </Pressable>
        </View>
      )}
    </View>
   </View>
      </View>
    </ScrollView>
    <View>
    <Pressable style={styles.button}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.text}>Proceed to Payment</Text>
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
    flex:1,
  },
  back: {
    position:"absolute",
    top:20,
    marginLeft: 5,
    width: 70,
    height: 70,
    shadowColor: 'rgba(90, 90, 90, 0.25)',
  },
  addcard: {
    position:"absolute",
    alignSelf:"center",
    width: 80,
    height: 80,
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
  addcardtext: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    marginTop:66,
    marginLeft: 5,
    textAlign: "center",
    color:"#848484",
  },
  accordianbox:{
    padding:20,
    elevation:2,
    borderRadius:5,
  },
  addcardbutton:{
    width:150,
    height:150,
    padding:10,
    elevation:1,
    borderRadius:5,
    marginTop:15,
    backgroundColor:"#EDEDED",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  hairline: {
    backgroundColor: '#D6D6D6',
    height: 1,
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
    marginBottom:10,
  },
  savebutton: {
    borderRadius: 5,
    backgroundColor: '#8FBF00',
    width: "100%",
    height: 45,
    alignSelf: "center",
    marginTop: 12,
    marginBottom:10,
  },
paypalbutton: {
    borderRadius: 5,
    backgroundColor: '#8FBF00',
    width: "95%",
    height: 45,
    alignSelf: "center",
    alignItems:"center",
    marginTop: 12,
    marginBottom:10,
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
  flexfilter: {
    flexDirection: "row",
    padding: 5,
  },
  modalheading: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: "#323232",
  },
  closeicon: {
    position: "absolute",
    left: 140,
  },
  closeiconpaypal: {
    position: "absolute",
    left: 120,
  },
  inputfield: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#969696",
    borderRadius: 5,
    marginTop: 15,
    paddingLeft: 10,
  },
  halfinputfield: {
    width: "48%",
    height: 40,
    backgroundColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#969696",
    borderRadius: 5,
    marginTop: 15,
    paddingLeft: 10,
  },
  margin:{
    marginLeft:15,
  },
  formfield:{
    marginTop:10,
  },
  flex:{
    flexDirection:"row",
  },
});



