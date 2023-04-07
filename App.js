
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
import Product from './components/Product';
import Empty from './components/Empty';
import Newcoupons from './components/Newcoupons';
import Usedcoupons from './components/Usedcoupons';
import Expiredcoupons from './components/Expiredcoupons';
import Main from './components/Main';
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
import Contact from './Contact';
import Manageaddress from './Manageaddress';
import Ordersummary from './Ordersummary';
import Paymentfailed from './Paymentfailed';
import Orderdetails from './Orderdetails';
import Wishlist from './Wishlist';
import Emptycart from './Emptycart';
import Myorder from './Myorder';
import Productlisting from './Productlisting';
import Paymentsuccess from './Paymentsuccess';
import Mycart from './Mycart';
import Productdetails from './Productdetails';
import Payment from './Payment';
import Viewproduct from './Viewproduct';
import Managepayment from './Managepayment';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Viewproduct" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Onboard1" component={Onboard1} />
        <Stack.Screen name="Onboard2" component={Onboard2} />
        <Stack.Screen name="Onboard3" component={Onboard3} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Men" component={Men} />
        <Stack.Screen name="Myorder" component={Myorder} />
        <Stack.Screen name="Women" component={Women} />
        <Stack.Screen name="Mycart" component={Mycart} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Productlisting" component={Productlisting} />
        <Stack.Screen name="Productdetails" component={Productdetails} />
        <Stack.Screen name="Managepayment" component={Managepayment} />
        <Stack.Screen name="Kids" component={Kids} />
        <Stack.Screen name="Viewproduct" component={Viewproduct} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Paymentsuccess" component={Paymentsuccess} />
        <Stack.Screen name="Empty" component={Empty} />
        <Stack.Screen name="Newcoupons" component={Newcoupons} />
        <Stack.Screen name="Usedcoupons" component={Usedcoupons} />
        <Stack.Screen name="Expiredcoupons" component={Expiredcoupons} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Emptycart" component={Emptycart} />
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="Returns" component={Returns} />
        <Stack.Screen name="Coupon" component={Coupon} />
        <Stack.Screen name="Manageaddress" component={Manageaddress} />
        <Stack.Screen name="Orderdetails" component={Orderdetails} />
        <Stack.Screen name="Ordersummary" component={Ordersummary} />
        <Stack.Screen name="Paymentfailed" component={Paymentfailed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
