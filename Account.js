import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
    "Lato-Regular": require('./assets/font/Lato-Regular.ttf'),
     "Lato-Bold": require('./assets/font/Lato-Bold.ttf'),
  };
  
  export default class Account extends React.Component {
    state = {
      fontsLoaded: false,
    };
  
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this._loadFontsAsync();
    }
  
    render() {
      if (!this.state.fontsLoaded) {
        return null;
      }
  return (
    <ScrollView style={styles.maincontainer}>
      <View>
      <View>
      <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.navigation.navigate("Home")}>
            <Image style={styles.back} source={require('./assets/back.png')} />
          </TouchableOpacity>
        <Text style={styles.heading}>Update My New Details</Text>
        <View style={styles.accountcontent}>
        <Text style={styles.textfield}>First Name</Text>
        <TextInput style={styles.inputfield} />
        <Text style={styles.textfield}>Last Name</Text>
        <TextInput style={styles.inputfield} />
        <Text style={styles.textfield}>E-mail</Text>
        <TextInput style={styles.inputfield} />
        <Text style={styles.textfield}>Phone Number</Text>
        <TextInput style={styles.inputfield} keyboardType = 'numeric' />
        </View>
        <View style={styles.flex}>
      <Pressable style={styles.secondary}>
      <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.secondarytext}>Cancel</Text>
        </TouchableOpacity>
      </Pressable>
      <Pressable style={styles.button}>
      <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.text}>Save</Text>
        </TouchableOpacity>
      </Pressable>
        </View>
      </View>
      </View>
    </ScrollView>
  );
}
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
      flex:{
        flexDirection:"row",
        justifyContent:"space-evenly",
      },
      textfield: {
        fontFamily: "Lato-Regular",
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
});
