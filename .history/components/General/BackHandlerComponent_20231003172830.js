import React from 'react';
import { View, Text, Button } from 'react-native';
import BackHandlerComponent from './BackHandlerComponent';

const MyScreen = ({ navigation }) => {
  const handleCustomBackPress = () => {
    // Custom logic for handling the back button press
    // For example, navigate to another screen or perform an action
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>This is My Screen</Text>
      <BackHandlerComponent onBackPress={handleCustomBackPress} />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default MyScreen;
