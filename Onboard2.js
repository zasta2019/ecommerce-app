import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
  "Lato-Regular": require('./assets/font/Lato-Regular.ttf'),
   "Lato-Bold": require('./assets/font/Lato-Bold.ttf'),
   "PlayfairDisplay-Bold":require('./assets/font/PlayfairDisplay-Bold.ttf')
};

export default class Onboard2 extends React.Component {
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
    <View style={styles.container}>
    <ImageBackground source={require('./assets/screen2.jpg')} resizeMode="cover" style={styles.image}>
    <View style={styles.space}>
    <Text style={styles.heading}>Be the real you {'\n'}with Your wardrobe</Text>
    <Text style={styles.paragraph}>Everyone has unique style, we help you to create your own style because you deserve to shine like a star</Text> 
    <View style={styles.flex}>
     <View style={styles.firstdot}></View>
      <View style={styles.seconddot}></View>
      <View style={styles.thirddot}></View>
    </View>
    </View>
    <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.navigation.navigate("Onboard3")}>
            <Image style={styles.forward} source={require('./assets/back.png')} />
          </TouchableOpacity>
    </ImageBackground>
    <Text style={styles.skip}  onPress={ () => this.props.navigation.navigate("Login")}>Skip</Text>
    
  </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent:"flex-end",
    paddingBottom:25,
  },
  flex:{
    flexDirection:"row",
    marginTop:25,
  },
  heading: {
    color: 'white',
    fontFamily:"PlayfairDisplay-Bold",
    fontSize: 32,
    textAlign: 'left',
    lineHeight:40,
  },
  firstdot:{
    width:11,
    height:11,
    backgroundColor:"#696969",
    borderRadius:20,
  },
  seconddot:{
    width:11,
    height:11,
    backgroundColor:"white",
    borderRadius:20,
    marginLeft:5,
  },
  thirddot:{
    width:11,
    height:11,
    backgroundColor:"#696969",
    borderRadius:20,
    marginLeft:5,
  },
  forward:{
    transform: [{rotate: '180deg'}],
    position:"absolute",
    right:30,
    bottom:2,
    width:70,
    height:70,
  },
  skip:{
    color: 'white',
    fontFamily:"PlayfairDisplay-Bold",
    fontSize: 20,
    position:"absolute",
    top:40,
    right:40,
  },
  space:{
    padding:25,
  },
  paragraph:{
    fontSize:18,
    fontFamily:"Roboto",
    color:"white",
    marginTop:13,
  },
  nextbox:{
    width:50,
    height:50,
    backgroundColor:"white",
    borderRadius:10,
  }
});
