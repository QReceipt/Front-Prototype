import React, {useState} from "react";
import styled from 'styled-components';
import './CSS/Receipt.css';
import {isEmail, checkPassword, onRegAPI} from '../api/User';
import {Router} from "react-router";

const Ended = styled.div `
    display:block;
    margin : 0;
    padding : 0;
`;

const Text = styled.div `
    font-size:130%;
    padding:0;
    z-index: 10;
`;

const Title = styled.div `
    display:inline;
`;

const Td = styled.td `
    font-size:120%;
`;

const Th = styled.td `
    font-size:130%;
`;

function Register(props) {
    return (<div className="frame">
        <RegisterForm/>
    </div>)
}

export default Register;

function RegisterForm() {
    const [pw, setPw] = useState("");
    const [pwCheck, setpwCheck] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [add1, setAdd1] = useState("");
    const [add2, setAdd2] = useState("");
    const [phoneNum1, setPhoneNum1] = useState("");
    const [phoneNum2, setPhoneNum2] = useState("");
    const [phoneNum3, setPhoneNum3] = useState("");
    const [userCat, setUserCat] = useState("");

    const onChangePw = (e) => {
        setPw(e.target.value);
    }

    const onpwCheck = (e) => {
        setpwCheck(e.target.value);
    }

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangeAdd1 = (e) => {
        setAdd1(e.target.value);
    }

    const onChangeAdd2 = (e) => {
        setAdd2(e.target.value);
    }

    const onChangePhoneNum1 = (e) => {
        setPhoneNum1(e.target.value);
    }

    const onChangePhoneNum2 = (e) => {
        setPhoneNum2(e.target.value);
    }

    const onChangePhoneNum3 = (e) => {
        setPhoneNum3(e.target.value);
    }

    const onChangeUseCat = (e) => {
        setUserCat(e.target.value);
    }

    const onReg = async () => {
        if (email === "" && pw === "" && name === "" && add1 === "" && add2 === "" && phoneNum1 === "" && phoneNum2 === "" && phoneNum3 === "") {
            alert("?????? ?????? ???????????????");
        } else {
            // ????????? ?????? ??????
            const checkEmail = isEmail(email);
            const Num = phoneNum1 + "-" + phoneNum2 + "-" + phoneNum3;
            const checkPw = checkPassword(pw, pwCheck);

            if (!checkEmail) {
                alert("????????? ????????? ?????????????????????")
            };

            if (checkPw) {
                alert("??????????????? ???????????? ????????? ?????? ????????????.")
            }

            const res = await onRegAPI(pw, name, email, add1, add2, Num, userCat);

            if (res) {
                let moveMain = window.confirm("??????????????? ??????????????????. ?????? ???????????? ?????????????????????????");

                if (moveMain) {
                    window.location.href = "/";
                }
            } else {
                console.log("HELP ME");
            }
        }
    };

    return (
        <div className="container-fulid">
            <Ended className="box row align-self-center">
                <Text className="col-12 pl-0 my-2">QReceipt</Text>
            </Ended>
            <div className="mt-0">
                <h1 className="titleSt display-2 mt-2 display-3">Register</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <Th colSpan="2" className="subTitle col-12">??????????????????</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Td className="col-4">?????????</Td>
                            <Td className="col-8 text-center">
                                <input
                                    onChange={onChangeEmail}
                                    value={email}
                                    type="email"
                                    placeholder="???) chein2021@naver.com"
                                    className="w-100 py-2 px-4 border rounded-pill"></input>
                            </Td>
                        </tr>
                        <tr>
                            <Td className="col-4">??????</Td>
                            <Td className="col-8 text-center">
                                <input
                                    onChange={onChangeName}
                                    value={name}
                                    type="name"
                                    placeholder="???) ?????????"
                                    className="w-100 py-2 px-4 border rounded-pill"></input>
                            </Td>
                        </tr>
                        <tr>
                            <Td className="col-4">????????????</Td>
                            <Td className="col-8 text-center">
                                <input
                                    onChange={onChangePw}
                                    value={pw}
                                    type="password"
                                    className="w-100 py-2 px-4 border rounded-pill"></input>
                            </Td>
                        </tr>
                        <tr>
                            <Td className="col-4">???????????? ??????</Td>
                            <Td className="col-8 text-center">
                                <input
                                    onChange={onpwCheck}
                                    value={pwCheck}
                                    type="password"
                                    className="w-100 py-2 px-4 border rounded-pill"></input>
                            </Td>
                        </tr>
                        <tr>
                            <Td className="col-4">??????</Td>
                            <Td className="col-8 text-center">
                                <input
                                    onChange={onChangeAdd1}
                                    value={add1}
                                    type="address"
                                    placeholder="???, ???, ???, ???"
                                    className="w-100 py-2 px-4 border rounded-pill"/>
                                <input
                                    onChange={onChangeAdd2}
                                    value={add2}
                                    type="address"
                                    placeholder="?????? ??????"
                                    className="w-100 py-2 px-4 border rounded-pill"/>
                            </Td>
                        </tr>
                        <tr>
                            <Td className="col-4">????????????</Td>
                            <Td className="col-8 text-center">
                                <input
                                    onChange={onChangePhoneNum1}
                                    value={phoneNum1}
                                    type="tel"
                                    className="tel py-2 px-4 border rounded-pill"></input>
                                <span>
                                    -
                                </span>
                                <input
                                    onChange={onChangePhoneNum2}
                                    value={phoneNum2}
                                    type="tel"
                                    className="tel py-2 px-4 border rounded-pill"></input>
                                <span>
                                    -
                                </span>
                                <input
                                    onChange={onChangePhoneNum3}
                                    value={phoneNum3}
                                    type="tel"
                                    className="tel py-2 px-4 border rounded-pill"></input>
                            </Td>
                        </tr>
                        <tr>
                            <Td className="col-4">?????? ??????</Td>
                            <Td className="col-8 text-center">
                                <select
                                    onChange={onChangeUseCat}
                                    className="w-100 py-2 px-4 border rounded-pill">
                                    <option value="" disabled selected hidden>????????? ??????????????????</option>
                                    <option value="??????">??????</option>
                                    <option value="??????">??????</option>
                                    <option value="?????????">?????????</option>
                                </select>
                            </Td>
                        </tr>
                    </tbody>

                </table>
                <div className="row">
                    <input
                        onClick={onReg}
                        className="signUpBtn col-4 btn btn-dark btn-lg rounded-pill"
                        type="button"
                        value="????????????"></input>
                </div>
            </div>
        </div>
    )
}