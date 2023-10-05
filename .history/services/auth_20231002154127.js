import ApiManager from "./api-manager";
import AsyncStorage from '@react-native-community/async-storage';


export const user_login = async data =>{
   try {
    console.log(ApiManager);

        const result = await ApiManager('/api/auth/signin',{
            method:"POST",
            headers:{
                'content-type':"application/json",
            },
            data:data
        });
        console.log(result);
        return result;
        
    } catch (error) {
        throw error.response ? error.response.data : error; // Handle the error response or generic error
    }
}


export const user_signup = async data =>{
    try {
 
         const result = await ApiManager('/api/auth/signup',{
             method:"POST",
             headers:{
                 'content-type':"application/json",
             },
             data:data
         });
         return result;
         
     } catch (error) {
         throw error.response ? error.response.data : error; // Handle the error response or generic error
     }
 }


export const getUserByEmail = async (email) => {
    try {
        const token = await AsyncStorage.getItem('token'); // Retrieve the token from AsyncStorage
        if (!token) {
            throw new Error('Token not found in AsyncStorage'); // Handle the case where the token is not available
        }
        const result = await ApiManager('/api/user/getUserByEmail/' + email, {
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



export const resetPassword = async data => {
    try {
        const token = await AsyncStorage.getItem('token'); // Retrieve the token from AsyncStorage
        if (!token) {
            throw new Error('Token not found in AsyncStorage'); // Handle the case where the token is not available
        }
        const result = await ApiManager('/api/user/account/reset-password/finish', {
            method: "POST",
            headers: {
                Authorization: 'Bearer ' + token // Use the retrieved token in the headers
            },
            data:data
        });
        return result;
    } catch (error) {
        throw error.response ? error.response.data : error; // Handle the error response or generic error
    }
}