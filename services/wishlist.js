

import ApiManager from "./api-manager";
import AsyncStorage from '@react-native-community/async-storage';


export const addToWishlist = async data => {

    const token = await AsyncStorage.getItem('token'); // Retrieve the token from AsyncStorage
    if (!token) {
        throw new Error('Token not found in AsyncStorage'); // Handle the case where the token is not available
    }

    try {
        const result = await ApiManager('/api/wishlist/addToWishlist', {
          method: "POST",
          headers: {
            'content-type': "application/json",
            Authorization: 'Bearer ' + token // Use the retrieved token in the headers

          },
          data:data
        });
   //     console.log('API Success:', result);
        return result;
      } catch (error) {
        console.log('API Error:', error);
        throw error.response ? error.response.data : error;
      }
      
}

export const removeFromWishlist = async (userId) => {

    const token = await AsyncStorage.getItem('token'); // Retrieve the token from AsyncStorage
    if (!token) {
        throw new Error('Token not found in AsyncStorage'); // Handle the case where the token is not available
    }

    try {
        const result = await ApiManager('api/wishlist/removeWishlist?userId='+userId, {
          method: "POST",
          headers: {
            'content-type': "application/json",
            Authorization: 'Bearer ' + token // Use the retrieved token in the headers

          }
        });
   //     console.log('API Success:', result);
        return result;
      } catch (error) {
        console.log('API Error:', error);
        throw error.response ? error.response.data : error;
      }
      
}

export const viewWishlist = async (userId) => {

    const token = await AsyncStorage.getItem('token'); // Retrieve the token from AsyncStorage
    if (!token) {
        throw new Error('Token not found in AsyncStorage'); // Handle the case where the token is not available
    }


    try {
        const result = await ApiManager('/api/wishlist/viewWishlist?userId='+userId, {
          method: "GET",
          headers: {
            'content-type': "application/json",
          }
        });
   //     console.log('API Success:', result);
        return result;
      } catch (error) {
        console.log('API Error:', error);
        throw error.response ? error.response.data : error;
      }
      
}