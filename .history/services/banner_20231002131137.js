import ApiManager from "./api-manager";
import AsyncStorage from '@react-native-community/async-storage';


export const getAllBanners = async () => {
    try {
        const token = await AsyncStorage.getItem('token'); // Retrieve the token from AsyncStorage
        if (!token) {
            throw new Error('Token not found in AsyncStorage'); // Handle the case where the token is not available
        }
        const result = await ApiManager('/api/getAllBannerImages' , {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + token // Use the retrieved token in the headers
            }
        });
        return result;
    } catch (error) {
        throw error.response ? error.response.data : error; // Handle the error response or generic error
    }
}