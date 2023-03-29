
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={styles.texttab}>
   <Text>First Tab</Text>
  </View>
);

const SecondRoute = () => (
  <View style={styles.texttab}>
    <Text>Second Tab</Text>
  </View>
);

const ThirdRoute = () => (
  <View style={styles.texttab}>
    <Text>Third Tab</Text>
  </View>
);

const FourthRoute = () => (
    <View style={styles.texttab}>
      <Text>Fourth Tab</Text>
    </View>
  );
  

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  four: FourthRoute,
});

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
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'All Orders' },
    { key: 'second', title: 'Pending' },
    { key: 'third', title: 'Delivered' },
    { key: 'four', title: 'Cancelled' },
  ]);


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
    <View style={{ flex: 1,backgroundColor:"white" }}>
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
    padding:20,
  },
  tab:{
    marginTop:20,
    marginBottom:5,
  },
  tabText: {
    fontFamily:"Lato-Bold",
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
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

export default Myorder;

