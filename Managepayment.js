import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Managepayment(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

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
              <View style={styles.halfflex}>
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
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            setModalVisible(!modalVisible2)
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={styles.buttonclose}
                onPress={() => setModalVisible2(!modalVisible2)}>
                <Image style={styles.cancel} source={require('./assets/cancel.png')} />
              </Pressable>
              <Text style={styles.reviewheading}>Are You Sure ?</Text>
              <Text style={styles.subtextreview}>Do you really want to delete this Account ?</Text>
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
        <Text style={styles.heading}>Manage payment method</Text>
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
        <View style={styles.flexcard}>
          <View style={styles.positionbox}>
         <View style={styles.cardbox}>  
         <Image style={styles.payimg} source={require('./assets/payment.jpg')} />
                  <View>
                    <Text style={styles.accnumber}>**** **** **** 3252</Text>
                    <Text style={styles.expirydate}>Expires in 10 /19</Text>
                  </View>
        </View>  
        <Pressable style={styles.deletecircle}><MaterialCommunityIcons name="delete-outline" size={22} color="#646464" style={styles.deleteicon} onPress={() => setModalVisible2(true)} /></Pressable>  
        </View>
        <View>
        <TouchableOpacity activeOpacity={0.6} style={styles.addcardbutton} onPress={() => setModalVisible(true)}>
      <Image style={styles.addcard} source={require('./assets/addcard.jpg')} />
      <Text style={styles.addcardtext}>Add New Card</Text>
      </TouchableOpacity>
        </View>
        </View>
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
            <View style={styles.couponbox}>
            <Text style={styles.code}>zastainfotek@gmail.com</Text> 
             <Pressable style={styles.apply}><MaterialCommunityIcons name="delete-outline" size={22} color="#646464" onPress={() => setModalVisible2(true)} /></Pressable> 
            <View style={styles.inputfield}></View>
            </View>
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
  flexcard:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  cardbox:{
    width:160,
    height:150,
    backgroundColor:"white",
    borderWidth:1,
    borderColor:"#969696",
    borderRadius:5,
    padding:10,
    elevation:1,
    marginTop:15,
  },
  payimg: {
    width: 70,
    marginTop: 25,
    height: 20,
  },
  expirydate: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#969696",
    fontWeight: 500,
    paddingTop: 10,
  },
  accnumber: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: "#323232",
    marginTop: 10,
    fontWeight: "bold",
  },
  deleteicon:{
    marginLeft:6,
    marginTop:6,
  },
  deletecircle:{
    width:35,
    height:35,
    borderRadius:50,
    position:"absolute",
    elevation:2,
    right:8,
    top:20,
  },
  positionbox:{
    position:"relative",
  },
  addcardbutton:{
    width:160,
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
    width: "43%",
    height: 40,
    backgroundColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#969696",
    borderRadius: 5,
    marginTop: 15,
    paddingLeft: 10,
  },
  halfflex:{
    flexDirection:"row",
    justifyContent:"space-around",
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
  couponbox:{
    position:"relative",
  },
  inputfield: {
    width: "95%",
    height: 40,
    backgroundColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#969696",
    borderRadius: 5,
    marginTop: 15,
    marginLeft:10,
    paddingBottom:5,
    paddingLeft: 10,
    paddingRight:60,
  },
  apply:{
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: "#ED5E68",
    fontWeight: 500,
    position:"absolute",
    zIndex:1,
    top:25,
    right:16,
  },
  code:{
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: "#808080",
    fontWeight: 500,
    position:"absolute",
    zIndex:1,
    top:26,
    left:16,
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



