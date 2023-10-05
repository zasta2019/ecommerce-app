

import ApiManager from "./api-manager";
import AsyncStorage from '@react-native-community/async-storage';


export const getAllBanners = async () => {
    try {
        const result = await ApiManager('/api/home/getAllCategories', {
          method: "GET",
          headers: {
            'content-type': "application/json",
          }
        });
        console.log('API Success:', result);
        return result;
      } catch (error) {
        console.log('API Error:', error);
        throw error.response ? error.response.data : error;
      }
      
}