
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';


const FirstRoute = () => {

  const theme = useTheme();
  const [selectedValue, setSelectedValue] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
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
                  <RadioButton.Item label="Last 30 days" value="first" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="Last 3 months" value="second" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="2022" value="third" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="2021" value="four" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="2020" value="five" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
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


        <Modal
          animationType="fade"
          transparent={true}
          visible={modal1Visible}
          onRequestClose={() => {
            setModal1Visible(!modal1Visible)
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={styles.buttonclose}
                onPress={() => setModal1Visible(!modal1Visible)}>
                <Image style={styles.cancel} source={require('./assets/cancel.png')} />
              </Pressable>
              <Text style={styles.reviewheading}>Are You Sure ?</Text>
              <Text style={styles.subtextreview}>Do you really want to cancel this order?</Text>
              <View style={styles.deleteflex}>
                <Pressable style={styles.delete}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.deletetext}>Yes</Text>
                  </TouchableOpacity>
                </Pressable>
                <Pressable style={styles.cancelbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.canceltext}>No</Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>


        <Modal
          animationType="fade"
          transparent={true}
          visible={modal2Visible}
          onRequestClose={() => {
            setModal2Visible(!modal2Visible)
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.flexfilter}>
                <Text style={styles.modalheading}>Order Return</Text>
                <Pressable
                  style={styles.buttonclose}
                  onPress={() => setModal2Visible(!modal2Visible)}>
                  <AntDesign name="close" size={24} color="black" style={styles.closeicon} />
                </Pressable>
              </View>
              <View style={styles.hairline}></View>
              <Text style={styles.reasonheading}>Reason for return the product?</Text>
              <View style={styles.textcontent}>
                <TextInput style={styles.textarea} multiline={true} numberOfLines={6} placeholder="Type Your Message here..." />
                <Entypo style={styles.attachment} name="attachment" size={22} color="gray" />
              </View>
              <Pressable style={styles.submitbutton}>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text style={styles.submittext} onPress={() => setModal2Visible(true)}>Send message</Text>
                </TouchableOpacity>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View>
          <Pressable style={styles.button}>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={styles.flexbutton}>
                <Image style={styles.filter} source={require('./assets/filter.png')} />
                <Text style={styles.text} title="Show Modal" onPress={() => setModalVisible(true)}>Filter by Date</Text>
              </View>
            </TouchableOpacity>
          </Pressable>
          <View>
            <View style={styles.box}>
              <View style={styles.flex}>
                <Text>
                  <Text style={styles.order}>Order ID - </Text><Text style={styles.id}>203334596#</Text>
                </Text>
                <View style={styles.statusprocess}>
                  <Text style={styles.processtext}>Processing</Text>
                </View>
              </View>
              <View>
                <Text style={styles.date}>Est Delivery date 3-4 days</Text>
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
              <View style={styles.orderbutton}>
                <Pressable style={styles.detailsbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.detailstext}>Order Details</Text>
                  </TouchableOpacity>
                </Pressable>
                <Pressable style={styles.trackbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.tracktext}>Track Order</Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
              <View style={styles.hairlinebox}></View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.cancelorder} onPress={() => setModal1Visible(true)}>Cancel Order</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.flex}>
                <Text>
                  <Text style={styles.order}>Order ID - </Text><Text style={styles.id}>203334596#</Text>
                </Text>
                <View style={styles.deliverystatus}>
                  <Text style={styles.textdelivery}>Delivered</Text>
                </View>
              </View>
              <View>
                <Text style={styles.date}>Order delivered on july 23, 2022</Text>
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
              <View style={styles.orderbutton}>
                <Pressable style={styles.detailsbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.detailstext}>Order Details</Text>
                  </TouchableOpacity>
                </Pressable>
                <Pressable style={styles.returnbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.returnorder} onPress={() => setModal2Visible(true)}>Return Order</Text>
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

const SecondRoute = () => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modal1Visible, setModal1Visible] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
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
                  <RadioButton.Item label="Last 30 days" value="first" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="Last 3 months" value="second" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="2022" value="third" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="2021" value="four" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="2020" value="five" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
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


        <Modal
          animationType="fade"
          transparent={true}
          visible={modal1Visible}
          onRequestClose={() => {
            setModal1Visible(!modal1Visible)
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={styles.buttonclose}
                onPress={() => setModal1Visible(!modal1Visible)}>
                <Image style={styles.cancel} source={require('./assets/cancel.png')} />
              </Pressable>
              <Text style={styles.reviewheading}>Are You Sure ?</Text>
              <Text style={styles.subtextreview}>Do you really want to cancel this order?</Text>
              <View style={styles.deleteflex}>
                <Pressable style={styles.delete}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.deletetext}>Yes</Text>
                  </TouchableOpacity>
                </Pressable>
                <Pressable style={styles.cancelbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.canceltext}>No</Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <View>
          <Pressable style={styles.button}>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={styles.flexbutton}>
                <Image style={styles.filter} source={require('./assets/filter.png')} />
                <Text style={styles.text} title="Show Modal" onPress={() => setModalVisible(true)}>Filter by Date</Text>
              </View>
            </TouchableOpacity>
          </Pressable>
          <View>
            <View style={styles.box}>
              <View style={styles.flex}>
                <Text>
                  <Text style={styles.order}>Order ID - </Text><Text style={styles.id}>203334596#</Text>
                </Text>
                <View style={styles.outdeliverystatus}>
                  <Text style={styles.textoutdelivery}>Out of Delivery</Text>
                </View>
              </View>
              <View>
                <Text style={styles.date}>Est Delivery date 3-4 days</Text>
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
              <View style={styles.orderbutton}>
                <Pressable style={styles.detailsbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.detailstext}>Order Details</Text>
                  </TouchableOpacity>
                </Pressable>
                <Pressable style={styles.trackbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.tracktext}>Track Order</Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.flex}>
                <Text>
                  <Text style={styles.order}>Order ID - </Text><Text style={styles.id}>203334596#</Text>
                </Text>
                <View style={styles.statusprocess}>
                  <Text style={styles.processtext}>Processing</Text>
                </View>
              </View>
              <View>
                <Text style={styles.date}>Est Delivery date 3-4 days</Text>
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
              <View style={styles.orderbutton}>
                <Pressable style={styles.detailsbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.detailstext}>Order Details</Text>
                  </TouchableOpacity>
                </Pressable>
                <Pressable style={styles.trackbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.tracktext}>Track Order</Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
              <View style={styles.hairlinebox}></View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.cancelorder} onPress={() => setModal1Visible(true)}>Cancel Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const ThirdRoute = () => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
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
                  <RadioButton.Item label="Last 30 days" value="first" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="Last 3 months" value="second" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="2022" value="third" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="2021" value="four" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="2020" value="five" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
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
        <Modal
          animationType="fade"
          transparent={true}
          visible={modal2Visible}
          onRequestClose={() => {
            setModal2Visible(!modal2Visible)
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.flexfilter}>
                <Text style={styles.modalheading}>Order Return</Text>
                <Pressable
                  style={styles.buttonclose}
                  onPress={() => setModal2Visible(!modal2Visible)}>
                  <AntDesign name="close" size={24} color="black" style={styles.closeicon} />
                </Pressable>
              </View>
              <View style={styles.hairline}></View>
              <Text style={styles.reasonheading}>Reason for return the product?</Text>
              <View style={styles.textcontent}>
                <TextInput style={styles.textarea} multiline={true} numberOfLines={6} placeholder="Type Your Message here..." />
                <Entypo style={styles.attachment} name="attachment" size={22} color="gray" />
              </View>
              <Pressable style={styles.submitbutton}>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text style={styles.submittext} onPress={() => setModal2Visible(true)}>Send message</Text>
                </TouchableOpacity>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View>
          <Pressable style={styles.button}>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={styles.flexbutton}>
                <Image style={styles.filter} source={require('./assets/filter.png')} />
                <Text style={styles.text} title="Show Modal" onPress={() => setModalVisible(true)}>Filter by Date</Text>
              </View>
            </TouchableOpacity>
          </Pressable>
          <View>
            <View style={styles.box}>
              <View style={styles.flex}>
                <Text>
                  <Text style={styles.order}>Order ID - </Text><Text style={styles.id}>203334596#</Text>
                </Text>
                <View style={styles.deliverystatus}>
                  <Text style={styles.textdelivery}>Delivered</Text>
                </View>
              </View>
              <View>
                <Text style={styles.date}>Order delivered on july 23, 2022</Text>
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
              <View style={styles.orderbutton}>
                <Pressable style={styles.detailsbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.detailstext}>Order Details</Text>
                  </TouchableOpacity>
                </Pressable>
                <Pressable style={styles.returnbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.returnorder} onPress={() => setModal2Visible(true)}>Return Order</Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.flex}>
                <Text>
                  <Text style={styles.order}>Order ID - </Text><Text style={styles.id}>203334596#</Text>
                </Text>
                <View style={styles.deliverystatus}>
                  <Text style={styles.textdelivery}>Delivered</Text>
                </View>
              </View>
              <View>
                <Text style={styles.date}>Order delivered on july 23, 2022</Text>
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
              <View style={styles.orderbutton}>
                <Pressable style={styles.detailsbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.detailstext}>Order Details</Text>
                  </TouchableOpacity>
                </Pressable>
                <Pressable style={styles.returnbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.returnorder} onPress={() => setModal2Visible(true)}>Return Order</Text>
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

const FourthRoute = () => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
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
                  <RadioButton.Item label="Last 30 days" value="first" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="Last 3 months" value="second" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="2022" value="third" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="2021" value="four" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="2020" value="five" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
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
          <Pressable style={styles.button}>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={styles.flexbutton}>
                <Image style={styles.filter} source={require('./assets/filter.png')} />
                <Text style={styles.text} title="Show Modal" onPress={() => setModalVisible(true)}>Filter by Date</Text>
              </View>
            </TouchableOpacity>
          </Pressable>
          <View>
            <View style={styles.box}>
              <View style={styles.flex}>
                <Text>
                  <Text style={styles.order}>Order ID - </Text><Text style={styles.id}>203334596#</Text>
                </Text>
                <View style={styles.cancelstatus}>
                  <Text style={styles.textcancel}>Cancelled</Text>
                </View>
              </View>
              <View>
                <Text style={styles.date}>Order cancelled on july 23, 2022</Text>
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
              <View style={styles.orderbutton}>
                <Pressable style={styles.detailsbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.detailstext}>Order Details</Text>
                  </TouchableOpacity>
                </Pressable>
                <Pressable style={styles.orderagainbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.orderagain}>Order Again</Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.flex}>
                <Text>
                  <Text style={styles.order}>Order ID - </Text><Text style={styles.id}>203334596#</Text>
                </Text>
                <View style={styles.cancelstatus}>
                  <Text style={styles.textcancel}>Cancelled</Text>
                </View>
              </View>
              <View>
                <Text style={styles.date}>Order cancelled on july 23, 2022</Text>
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
              <View style={styles.orderbutton}>
                <Pressable style={styles.detailsbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.detailstext}>Order Details</Text>
                  </TouchableOpacity>
                </Pressable>
                <Pressable style={styles.orderagainbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.orderagain}>Order Again</Text>
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

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#8FBF00' }}
    style={{ backgroundColor: 'white' }}
    renderLabel={({ route, focused, color }) => (
      <View style={styles.tab}>
        <Text style={[styles.tabText, focused && { color: '#8FBF00' }]}>{route.title}</Text>
      </View>
    )}
  />
);

const Myorder = (props) => {
  const [index, setIndex] = useState(0)

  const [routes] = useState([
    { key: 'first', title: 'All Orders' },
    { key: 'second', title: 'Pending' },
    { key: 'third', title: 'Delivered' },
    { key: 'four', title: 'Cancelled' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    four: FourthRoute,
  });


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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("Home")}>
        <Image style={styles.back} source={require('./assets/back.png')} />
      </TouchableOpacity>
      <Text style={styles.heading}>My Orders</Text>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  texttab: {
    padding: 20,
  },
  tab: {
    marginTop: 20,
    marginBottom: 5,
  },
  tabText: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
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
  textdelivery: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 21,
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: "#4CAF50",
    textAlign: "center",
  },
  deliverystatus: {
    width: 110,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#ECFFED",
    marginLeft: 36,
  },
  textoutdelivery: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 21,
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: "#FFD15B",
    textAlign: "center",
  },
  cancelstatus: {
    width: 110,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#FFEAEA",
    marginLeft: 36,
  },
  textcancel: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 21,
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: "#ED5E68",
    textAlign: "center",
  },
  outdeliverystatus: {
    width: 110,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#FFF9EA",
    marginLeft: 36,
  },
  processtext: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 21,
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: "#323232",
    textAlign: "center",
  },
  statusprocess: {
    width: 110,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#F4F5F7",
    marginLeft: 36,
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
    top: 8,
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
    marginTop: 10,
  },
  hairlinebox: {
    backgroundColor: '#D6D6D6',
    height: 1,
    width: "100%",
    marginTop: 12,
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
  orderbutton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  detailsbutton: {
    borderRadius: 5,
    backgroundColor: '#8FBF00',
    width: 140,
    height: 45,
    marginTop: 20,
    alignSelf: "center",
  },
  trackbutton: {
    borderWidth: 1,
    borderColor: "#2E6CF0",
    borderRadius: 5,
    backgroundColor: 'white',
    width: 140,
    height: 45,
    marginTop: 20,
    alignSelf: "center",
  },
  tracktext: {
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: '#2E6CF0',
  },
  returnbutton: {
    borderWidth: 1,
    borderColor: "#323232",
    borderRadius: 5,
    backgroundColor: 'white',
    width: 140,
    height: 45,
    marginTop: 20,
    alignSelf: "center",
  },
  returnorder: {
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: '#323232',
  },
  orderagainbutton: {
    borderWidth: 1,
    borderColor: "#4CAF50",
    borderRadius: 5,
    backgroundColor: 'white',
    width: 140,
    height: 45,
    marginTop: 20,
    alignSelf: "center",
  },
  orderagain: {
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: '#4CAF50',
  },
  detailstext: {
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: 'white',
  },
  cancelorder: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: "Lato-Bold",
    letterSpacing: 0.25,
    color: "#ED5E68",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  reviewheading: {
    fontFamily: "Lato-Bold",
    fontSize: 20,
    textAlign: "center",
    color: "#ED5E68",
  },
  subtextreview: {
    fontFamily: "Lato-Bold",
    fontSize: 15,
    marginTop: 10,
    textAlign: "center",
    color: "#323232",
  },
  deleteflex: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 12,
  },
  deletetext: {
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
  cancelbutton: {
    borderWidth: 1,
    borderColor: "#D4D4D4",
    borderRadius: 5,
    backgroundColor: 'white',
    width: 140,
    height: 45,
    marginTop: 20,
    alignSelf: "center",
  },
  canceltext: {
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: '#323232',
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
    marginTop: 10,
    position: "absolute",
    right: 17,
  },
  textcontent: {
    position: "relative",
  },
  attachment: {
    position: "absolute",
    bottom: 8,
    right: 25,
  },
  textarea: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#969696",
    borderRadius: 5,
    textAlignVertical: 'top',
    marginTop: 10,
    paddingTop: 10,
    paddingLeft: 10,
  },
  submittext: {
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    letterSpacing: 0.25,
    color: 'white',
  },
  submitbutton: {
    borderRadius: 5,
    backgroundColor: '#8FBF00',
    width: "90%",
    height: 45,
    marginTop: 20,
    marginBottom: 7,
    alignSelf: "center",
  },
  reasonheading: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
    textAlign: "left",
  }
});

export default Myorder;

