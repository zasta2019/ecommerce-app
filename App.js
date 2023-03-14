
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './Signup';
import Otp from './Otp';
import Password from './Password';
import Home from './Home';
import Onboard1 from './Onboard1';
import Onboard2 from './Onboard2';
import Onboard3 from './Onboard3';
import Header from './components/Header';
import Product from './components/Product';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import Profile from './Profile';
import Login from './Login';
import Account from './Account';
import Security from './Security';
import Returns from './Returns';
import Coupon from './Coupon';
import Address from './Address';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Account" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Onboard1" component={Onboard1} />
        <Stack.Screen name="Onboard2" component={Onboard2} />
        <Stack.Screen name="Onboard3" component={Onboard3} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Men" component={Men} />
        <Stack.Screen name="Women" component={Women} />
        <Stack.Screen name="Kids" component={Kids} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="Returns" component={Returns} />
        <Stack.Screen name="Coupon" component={Coupon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
