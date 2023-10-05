import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import * as Font from 'expo-font';
import { getAllBanners } from '../services/banner';

let customFonts = {
  "Lato-Regular": require('../assets/font/Lato-Regular.ttf'),
  "Lato-Bold": require('../assets/font/Lato-Bold.ttf'),
};

export default class Banner extends Component {
  state = {
    fontsLoaded: false,
    banners: [], // Initialize banners as an empty array
  };

  async componentDidMount() {
    await this._loadFontsAsync();
    this.getBanners(); // Fetch banners when the component mounts
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  getBanners = async () => {
    try {
      // Fetch banners and set them in the state
      const result = await getAllBanners();
      console.log(result);
      this.setState({ banners: result.data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { fontsLoaded, banners } = this.state;

    if (!fontsLoaded) {
      return null;
    }

    return (
      <ScrollView style={styles.maincontainer}>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {banners.map((banner, index) => (
              <View key={index} style={styles.bannerbox}>
<Image style={styles.banner} source={{ uri: banner.bannerS3Url }} />
              </View>
            ))}
          </ScrollView>
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
  bannerbox: {
    width: 340,
    height: 160,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 22,
    marginLeft: 15,
  },
  banner: {
    width: "100%",
    height: "100%",
  },
  categoryname: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: "#323232",
    marginTop: 8,
    textAlign: "center",
  },
  category: {
    overflow: 'hidden',
    width: 75,
    borderRadius: 50,
    height: 75,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  flexsecond: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 38,
  },
  secondcategory: {
    marginLeft: 42,
  },
  subheading: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
  },
  productlisting: {
    padding: 10,
  },
  flexproduct: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
});
