import axios from "axios";

baseUrl = "http://localhost:5000/api";

 const login = async (credentials) =>{
    const response = await axios.post(baseUrl,credentials)
 }

 export {
    login
 }