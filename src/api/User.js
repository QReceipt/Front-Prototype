import axios from 'axios';

export const onLoginAPI = async (id, pw) => {
    const headers = {
        headers: {
            'Content-type': 'application/json;'
        }
    }

    const body = {
        email: id,
        password: pw
    };

    try {
        const res = await axios.post("user/login", body, headers);
        
        console.log(res);
        
        return res.data;
    } catch (error) {
        console.log(error.response);
        console.log("ERROR");

        return false;
    }
};