import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WhyUs = () => {
  return (
    <View>
      <Text style={styles.subheading}>Why Us</Text>
      <View style={styles.backColor}>
        <View style={styles.specification}>
          <View style={styles.specbox}>
            <Image style={styles.specifyimg} source={require('../../assets/cotton.png')} />
            <Text style={styles.specify}>100% Original Products</Text>
          </View>
          <View style={styles.specbox}>
            <Image style={styles.specifyimg} source={require('../../assets/returns.png')} />
            <Text style={styles.specify}>Easy Returns and Refunds</Text>
          </View>
          <View style={styles.specbox}>
            <Image style={styles.specifyimg} source={require('../../assets/card.png')} />
            <Text style={styles.specify}>100% Secure Payment</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subheading: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
  specify: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
    fontWeight: '700',
    color: '#646464',
  },
  specbox: {
    width: 140,
    height: 110,
    padding: 10,
    marginTop: 5,
  },
  backColor: {
    backgroundColor: '#F5FFE8',
    marginTop: 12,
  },
  specification: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  specifyimg: {
    width: 35,
    height: 35,
    alignSelf: 'center',
  },
});

export default WhyUs;
