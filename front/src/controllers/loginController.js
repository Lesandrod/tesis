import axios from "axios";

const saveUser = async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/api/signin', data)
        console.log(response);

    } catch (error) {
        console.log(error);
    }


}

export{
    saveUser
}