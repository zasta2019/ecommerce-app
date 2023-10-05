

import ApiManager from "./api-manager";
import AsyncStorage from '@react-native-community/async-storage';


export const getAllProducts = async () => {
    try {
        const result = await ApiManager('/api/home/getAllProducts', {
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


export const getProductsByCategory = async (categoryId) => {

    const token = await AsyncStorage.getItem('token'); // Retrieve the token from AsyncStorage
    if (!token) {
        throw new Error('Token not found in AsyncStorage'); // Handle the case where the token is not available
    }


    try {
        const result = await ApiManager('/api/getProducts/categoryId?categoryId='+categoryId, {
          method: "GET",
          headers: {
            'content-type': "application/json",
            Authorization: 'Bearer ' + token // Use the retrieved token in the headers

          }
        });
    //  console.log('API Success:', result);
        return result;
      } catch (error) {
        console.log('API Error:', error);
        throw error.response ? error.response.data : error;
      }
      
}