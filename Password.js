import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { Modal } from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
  "Lato-Regular": require('./assets/font/Lato-Regular.ttf'),
   "Lato-Bold": require('./assets/font/Lato-Bold.ttf'),
};


export default class Password extends React.Component {
  state = {
    fontsLoaded: false,
    modalVisible: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    const {modalVisible} = this.state;
    if (!this.state.fontsLoaded) {
      return null;
    }
  return (
    <ScrollView style={styles.maincontainer}>
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setState({modalVisible: !modalVisible});
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={styles.buttonclose}
                onPress={() => this.setState({modalVisible: !modalVisible})}>
                <Image style={styles.cancel} source={require('./assets/cancel.png')} />
              </Pressable>
              <Image style={styles.success} source={require('./assets/success.png')} />
              <Text style={styles.successtext}>Your Password has been changed</Text>
              <Text style={styles.subtext}>You have reached your maximum prototyping speed</Text>
              <TouchableOpacity activeOpacity={0.6}>
                <Pressable style={styles.backbutton}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.text} onPress={() => this.props.navigation.navigate("Login")}>Back to SignIn</Text>
                  </TouchableOpacity>
                </Pressable>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.fleximage}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.navigation.navigate("Login")}>
            <Image style={styles.back} source={require('./assets/back.png')} />
          </TouchableOpacity>
          <Image style={styles.rightcircle} source={require('./assets/circle.png')} />
        </View>
        <Text style={styles.forgotheading}>Change Password</Text>
        <View>
          <Text style={styles.textfield}>New Password</Text>
          <TextInput secureTextEntry={true} style={styles.inputfield} />
          <Text style={styles.textfield}>Re-enter New Password</Text>
          <TextInput secureTextEntry={true} style={styles.inputfield} />
        </View>
        <TouchableOpacity activeOpacity={0.6}>
          <Pressable style={styles.button}>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.text} onPress={() => this.setState({modalVisible: true})}>Change Password</Text>
            </TouchableOpacity>
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.resend} onPress={() => this.props.navigation.navigate("Login")}>Back to SignIn</Text>
        </TouchableOpacity>
        <Image style={styles.leftcircle} source={require('./assets/left-circle.png')} />
      </View>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  rightcircle: {
    alignSelf: "flex-end",
    marginTop: 5,
  },
  leftcircle: {
    marginTop: 120,
  },
  otpinput: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
    width: 50,
    height: 50,
    borderRadius: 5,
    textAlign: "center",
    elevation: 5,
    borderRadius: 5,
    backgroundColor: "#F6F5FA",
    marginTop: 20,
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
  textfield: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 40,
    color: "#323232",
    marginTop: 15,
  },
  resend: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2E6CF0",
    marginTop: 15,
  },
  flexinput: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
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
    marginTop: 30,
    alignSelf: "center",
  },
  backbutton: {
    borderRadius: 5,
    backgroundColor: '#8FBF00',
    width: 319,
    height: 45,
    marginTop: 15,
    alignSelf: "center",
  },
  forgotheading: {
    fontFamily: "Roboto",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    position: "relative",
    bottom: 55,
    color: "#323232",
  },
  notfound: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    color: "#808080",
    marginTop: 20,
  },
  otpheading: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#323232",
  },
  numberheading: {
    fontFamily: "Roboto",
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "#808080",
  },
  fleximage: {
    flexDirection: "row",
    marginTop: 24,
    justifyContent: "space-between",
  },
  back: {
    position:"absolute",
    top:20,
    marginLeft: 5,
    width: 70,
    height: 70,
    shadowColor: 'rgba(90, 90, 90, 0.25)',
  },
  maincontainer: {
    backgroundColor: "white",
    height: "100%",
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
