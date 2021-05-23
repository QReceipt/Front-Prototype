import axios from 'axios';

export const onReceiptAPI = async () => {
    const headers = {
        headers: {
            'Content-type': 'application/json;'
        }
    }

    try {
        const res = await axios.post("receipt", headers);
        console.log(res)
        return res.data;
    } catch (error) {
        console.log("ERROR");

        return false;
    }
};
