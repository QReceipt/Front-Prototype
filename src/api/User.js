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

        console.log(res.data);

        return res.data;
    } catch (error) {
        console.log(error.response);
        console.log("ERROR");

        return false;
    }
};

export function isEmail(asValue) {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

export function checkPassword(pw, check) {
    return (
        pw !== check
            ? true
            : false
    );
}

//이거 직업별 유형으로 나누도록 요청하기
export const onRegAPI = async (pw, name, email, add1, add2, phoneNum, userCat) => {
    const headers = {
        headers: {
            'Content-type': 'application/json;'
        }
    }

    const body = {
        "password": pw,
        "fullname": name,
        "email": email,
        "address1": add1,
        "address2": add2,
        "phoneNumber": phoneNum,
        "userCat": userCat
    };

    try {
        const res = await axios.post("user/signup", body, headers);

        console.log(res);

        return res.data;
    } catch (error) {
        console.log(error.response);
        console.log("ERROR");

        return false;
    }
};