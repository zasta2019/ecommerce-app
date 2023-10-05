import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomAlert = ({ visible, title, message, onClose }) => {
  if (!visible) return null;

  return (
    <View style={styles.alertOverlay}>
      <View style={styles.alertBox}>
        <Text style={styles.alertTitle}>{title}</Text>
        <Text style={styles.alertMessage}>{message}</Text>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alertOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  alertBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  alertTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18, // Increase the font size for the title
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  alertMessage: {
    fontFamily: 'Lato-Regular',
    fontSize: 16, // Increase the font size for the message
    color: 'black',
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 15,
  },
  closeButtonText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: 'blue', // You can style the close button as needed
  },
});

export default CustomAlert;
