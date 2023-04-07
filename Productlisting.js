import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Product from './components/Product';
import { useEffect } from 'react';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import Checkbox from 'expo-checkbox';


export default function Productlisting(props) {

  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);



  const [activeTab, setActiveTab] = useState('category');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const theme = useTheme();
  const [selectedValue, setSelectedValue] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modal1Visible, setModal1Visible] = useState(false);
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
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.flexfilter}>
                <Text style={styles.modalheading}>Sort</Text>
                <Pressable
                  style={styles.buttonclose}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <AntDesign name="close" size={24} color="black" style={styles.closeicon} />
                </Pressable>
              </View>
              <View style={styles.hairline}></View>
              <View>
                <RadioButton.Group onValueChange={value => setSelectedValue(value)} value={selectedValue}>
                  <RadioButton.Item label="New Arrival" value="first" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="Price (Low to High)" value="second" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="Price (High to Low)" value="third" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="Discount" value="four" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="Best Seller" value="five" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
                  <RadioButton.Item label="High Rating" value="five" labelStyle={{ paddingLeft: 1, fontFamily: "Lato-Regular", fontSize: 16, color: "#323232", }} color="#4CAF50" uncheckedColor="#969696" />
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
              <View style={styles.flexfilter}>
                <Text style={styles.modalheading}>Filter</Text>
                <Pressable
                  style={styles.buttonclose}
                  onPress={() => setModal1Visible(!modal1Visible)}>
                  <AntDesign name="close" size={24} color="black" style={styles.closeicon} />
                </Pressable>
              </View>
              <View style={styles.hairline}></View>
              <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableWithoutFeedback onPress={() => handleTabPress('category')}>
          <View style={[styles.tabItem, activeTab === 'category' && styles.activeTabItem]}>
            <Text style={styles.tabTitle}>Category</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleTabPress('brand')}>
          <View style={[styles.tabItem, activeTab === 'brand' && styles.activeTabItem]}>
            <Text style={styles.tabTitle}>Brand</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleTabPress('price')}>
          <View style={[styles.tabItem, activeTab === 'price' && styles.activeTabItem]}>
            <Text style={styles.tabTitle}>Price</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleTabPress('size')}>
          <View style={[styles.tabItem, activeTab === 'size' && styles.activeTabItem]}>
            <Text style={styles.tabTitle}>Size</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleTabPress('color')}>
          <View style={[styles.tabItem, activeTab === 'color' && styles.activeTabItem]}>
            <Text style={styles.tabTitle}>Color</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.contentContainer}>
        {activeTab === 'category' && (
          <ScrollView>
            <Text style={styles.contentTitle}>Categories</Text>
        <View style={styles.option}>
        <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.checktext}>Full T-shirts</Text>
      </View>
        </View>
        <View style={styles.option}>
        <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked1} onValueChange={setChecked1} />
        <Text style={styles.checktext}>Full T-shirts</Text>
      </View>
        </View>
        <View style={styles.option}>
        <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
        <Text style={styles.checktext}>Full T-shirts</Text>
      </View>
        </View>
          </ScrollView>
        )}
        {activeTab === 'brand' && (
          <ScrollView>
            <Text style={styles.contentTitle}>Brands</Text>
            <View style={styles.option}>
        <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.checktext}>Puma</Text>
      </View>
        </View>
        <View style={styles.option}>
        <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked1} onValueChange={setChecked1} />
        <Text style={styles.checktext}>Nike</Text>
      </View>
        </View>
        <View style={styles.option}>
        <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
        <Text style={styles.checktext}>Allen solly</Text>
      </View>
        </View>
          </ScrollView>
        )}
        {activeTab === 'price' && (
          <ScrollView>
            <Text style={styles.contentTitle}>Price Range</Text>
            <View style={styles.option}>
        <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.checktext}>below 1000</Text>
      </View>
        </View>
        <View style={styles.option}>
        <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked1} onValueChange={setChecked1} />
        <Text style={styles.checktext}>above 2000</Text>
      </View>
        </View>
        <View style={styles.option}>
        <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
        <Text style={styles.checktext}>below 500</Text>
      </View>
        </View>
          </ScrollView>
        )}
           {activeTab === 'size' && (
          <ScrollView>
            <Text style={styles.contentTitle}>Size</Text>
            <View style={styles.option}>
        <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.checktext}>XL</Text>
      </View>
        </View>
        <View style={styles.option}>
        <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked1} onValueChange={setChecked1} />
        <Text style={styles.checktext}>XXL</Text>
      </View>
        </View>
        <View style={styles.option}>
        <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
        <Text style={styles.checktext}>M</Text>
      </View>
        </View>
          </ScrollView>
        )}
           {activeTab === 'color' && (
          <ScrollView>
            <Text style={styles.contentTitle}>Color</Text>
            <View style={styles.option}>
        <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.checktext}>Red</Text>
      </View>
        </View>
        <View style={styles.option}>
        <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked1} onValueChange={setChecked1} />
        <Text style={styles.checktext}>Green</Text>
      </View>
        </View>
        <View style={styles.option}>
        <View style={styles.flex}>
        <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
        <Text style={styles.checktext}>Black</Text>
      </View>
        </View>
          </ScrollView>
        )}
      </View>
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
          <Text style={styles.heading}>Men T-shirt Collection</Text>
          <View style={styles.productlisting}>
         <View style={styles.flexproduct}>
         <Product productname="Nike T-shirts" category="Men T-shirts collection" discount="-30%" discountprice="$799" actualprice="$999" imageSource={require("./assets/product.jpg")}/>
         <Product productname="Puma T-shirts" category="Men T-shirts collection" discount="-50%" discountprice="$599" actualprice="$899" imageSource={require("./assets/menproduct.jpg")}/>
         </View>
         <View style={styles.flexproduct}>
         <Product productname="Nike T-shirts" category="Women T-shirts collection" discount="-30%" discountprice="$799" actualprice="$999" imageSource={require("./assets/w-product.jpg")}/>
         <Product productname="Puma T-shirts" category="Women T-shirts collection" discount="-50%" discountprice="$599" actualprice="$899" imageSource={require("./assets/w-product1.jpg")}/>
         </View>
            <View style={styles.flexproduct}>
         <Product productname="Nike T-shirts" category="Kids T-shirts collection" discount="-30%" discountprice="$799" actualprice="$999" imageSource={require("./assets/k-product.jpg")}/>
         <Product productname="Puma T-shirts" category="Kids T-shirts collection" discount="-50%" discountprice="$599" actualprice="$899" imageSource={require("./assets/k-product2.jpg")}/>
         </View>
        </View> 
        </View>
      </View>
    </ScrollView>
    <View style={styles.fixedbutton}>
       <View>
        <Pressable style={styles.sortbutton}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => setModalVisible(true)}>
         <View style={styles.flexbutton}>
         <Image style={styles.sorticon} source={require('./assets/sort.png')} />
         <Text style={styles.fixedtext}>Sort</Text>
         </View>
          </TouchableOpacity>
        </Pressable>
       </View>
       <View>
        <Pressable style={styles.filterbutton}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => setModal1Visible(true)}>
         <View style={styles.flexbutton}>
         <Image style={styles.filtericon} source={require('./assets/f-icon.png')} />
         <Text style={styles.filtertext}>Filter</Text>
         </View>
          </TouchableOpacity>
        </Pressable>
       </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tabContainer: {
    width: '40%',
    borderRightWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#F5FFE8',
  },
  option:{
    marginTop:14,
  },
  tabItem: {
    padding: 10,
    marginTop:7,
    backgroundColor: '#F5FFE8',
  },
  activeTabItem: {
    backgroundColor: '#fff',
    color:"#323232",
  },
  tabTitle: {
    fontFamily:"Lato-Bold",
    fontSize:16,
    color:"#323232",
    textAlign:"center",
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    marginLeft:10,
  },
  contentTitle: {
    fontFamily:"Lato-Bold",
    fontSize:18,
    marginBottom: 10,
  },
  checktext: {
    marginLeft: 7,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 600,
  },
  maincontainer: {
    backgroundColor: "white",
    height: "100%",
    flex:1,
  },
  flexbutton:{
    flexDirection:"row",
    marginLeft:66,
    marginTop:10,
  },
  sortbutton:{
    width:195,
    borderRightColor:"#D6D6D6",
    borderRightWidth:1,
    height:45,
  },
  sorticon:{
    height:22,
    width:22,
  },
  filtericon:{
    height:18,
    marginTop:2,
    width:18,
  },
  filterbutton:{
    width:"100%",
    height:45,
  },
  fixedtext:{
    fontFamily: "Lato-Bold",
    fontSize: 16,
    marginLeft: 5,
    marginTop:2,
  },
  filtertext:{
    fontFamily: "Lato-Bold",
    fontSize: 16,
    marginLeft: 8,
    marginTop:2,
  },
  fixedbutton:{
    flexDirection:"row",
    width:"100%",
    overflow:"hidden",
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
  productlisting:{
    padding:10,
  },
  flexproduct:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:15,
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
  flexfilter: {
    flexDirection: "row",
    padding: 5,
  },
  modalheading: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: "#323232",
    marginTop: 17,
    marginLeft: 10,
  },
  closeicon: {
    position: "absolute",
    left: 299,
    top: 15,
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
  buttonflex: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  hairline: {
    backgroundColor: '#D6D6D6',
    height: 1,
    marginTop:8,
    width: "100%",
  },
});



