import axios from "axios";

baseUrl = "http://localhost:3000/api";

const login = async (credentials) => {
   const response = await axios.post(baseUrl, credentials)
   console.log(`%c${response}`, 'color: yellow');
   return response
}

const register = async (credentials) => {
   const response = await axios.post(baseUrl, credentials)
   console.log(`%c${response}`, 'color: yellow');
   return response

}



export {
   login,
   register
}