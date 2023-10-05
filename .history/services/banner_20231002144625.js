import ApiManager from "./api-manager";
import AsyncStorage from '@react-native-community/async-storage';


export const getAllBanners = async () => {
    try {
     
        const result = await ApiManager('/api/getAllBannerImages' , {
            method: "GET",
          
        });
        return result;
    } catch (error) {
        throw error.response ? error.response.data : error; // Handle the error response or generic error
    }
}