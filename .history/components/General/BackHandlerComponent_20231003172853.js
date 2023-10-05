// BackHandlerComponent.js
import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackHandlerComponent = ({ onBackPress }) => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    if (onBackPress) {
      // If a custom back button press function is provided, call it
      onBackPress();
    } else if (navigation.canGoBack()) {
      // If the current screen can go back, navigate back
      navigation.goBack();
    }

    // Return true to indicate that the back button action is handled
    return true;
  };

  useEffect(() => {
    // Add an event listener for the hardware back button press
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    // Clean up the event listener when the component unmounts
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [onBackPress, navigation]);

  return null;
};

export default BackHandlerComponent;
