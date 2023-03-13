import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
  "Lato-Regular": require('./assets/font/Lato-Regular.ttf'),
   "Lato-Bold": require('./assets/font/Lato-Bold.ttf'),
   "PlayfairDisplay-Bold":require('./assets/font/PlayfairDisplay-Bold.ttf')
};

export default class Onboard3 extends React.Component {
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
    <ImageBackground source={require('./assets/screen3.jpg')} resizeMode="cover" style={styles.image}>
    <View style={styles.space}>
    <Text style={styles.heading}>Explore Fashion</Text>
    <Text style={styles.paragraph}>Explore the new latest fashion with lower in price and higher in quality</Text> 
    <TouchableOpacity activeOpacity={0.6}>
      <Pressable style={styles.button}>
      <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.text}  onPress={ () => this.props.navigation.navigate("Login")}>Get Started</Text>
        </TouchableOpacity>
      </Pressable>
      </TouchableOpacity>
    </View>
    </ImageBackground>
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
  space:{
    padding:25,
  },
  paragraph:{
    fontSize:18,
    fontFamily:"Roboto",
    color:"white",
    marginTop:13,
  },
  button: {
    borderRadius: 10,
    backgroundColor:'#8FBF00',
    width: 330,
    height: 65,
    marginTop: 23,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: "PlayfairDisplay-Bold",
    letterSpacing: 0.25,
    marginTop:12,
    color: 'white',
  },
});
