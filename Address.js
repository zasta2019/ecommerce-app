import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { RadioButton } from 'react-native-paper';
import { useTheme } from 'react-native-paper';


export default function Address(props) {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = React.useState('');
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
      <View>
      <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("Home")}>
            <Image style={styles.back} source={require('./assets/back.png')} />
          </TouchableOpacity>
        <Text style={styles.heading}>Add New Address Details</Text>
   <View>
     <View style={styles.accountcontent}>
        <Text style={styles.textfield}>Flat Number</Text>
        <TextInput style={styles.inputfield}/>
        <Text style={styles.textfield}>Street Name</Text>
        <TextInput style={styles.inputfield} />
        <Text style={styles.textfield}>Landmark</Text>
        <TextInput style={styles.inputfield} />
        <Text style={styles.textfield}>City</Text>
        <TextInput style={styles.inputfield} />
        <Text style={styles.textfield}>State</Text>
        <TextInput style={styles.inputfield}/>
        <Text style={styles.textfield}>Pincode</Text>
        <TextInput style={styles.inputfield} keyboardType = 'numeric' />
        <Text style={styles.textfield}>Phone Number</Text>
        <TextInput style={styles.inputfield} keyboardType = 'numeric' />
        <Text style={styles.textfield}>Select Address Type</Text>
                      <View style={styles.radio}>
                      <RadioButton.Group onValueChange={value => setSelectedValue(value)} value={selectedValue}>
                            <RadioButton.Item label="Home" value="first" labelStyle={{ paddingLeft: 1 , fontFamily:"Lato-Regular", fontSize:14, color:"#323232", }}  style={{ flexDirection: 'row-reverse'}} color="#4CAF50" uncheckedColor="#969696" />
                            <RadioButton.Item label="Office" value="second"  labelStyle={{ paddingLeft: 1 , fontFamily:"Lato-Regular", fontSize:14, color:"#323232", }} style={{ flexDirection: 'row-reverse',marginTop:-10}} color="#4CAF50" uncheckedColor="#969696" />
                            <RadioButton.Item label="Others" value="third"  labelStyle={{ paddingLeft: 1 , fontFamily:"Lato-Regular", fontSize:14, color:"#323232", }} style={{ flexDirection: 'row-reverse',marginTop:-10}} color="#4CAF50" uncheckedColor="#969696" />
                        </RadioButton.Group>
                      </View>
        </View>
     </View>
     <View style={styles.flex}>
      <Pressable style={styles.button}>
      <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.text}>Save</Text>
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
      radio:{
        marginLeft:15,
        marginTop:5,
    },
      flex:{
        flexDirection:"row",
        justifyContent:"space-evenly",
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
});
