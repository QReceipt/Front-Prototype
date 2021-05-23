import React, {useState} from "react";
import styled from 'styled-components';
import './Receipt.css';
import gps from './Img/gps.png';
import {Link} from "react-router-dom"
import {isEmail, checkPassword, onLoginAPI, onRegAPI} from '../api/User';

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
    font-size:130%;
`;

const Th = styled.td `
    font-size:130%;
`;

function Receipt(props) {
    return (
        <div className="frame">
            <ReceiptForm/>
        </div>
    )
}

export default Receipt;

const orderMenu = [
    {
        id: 1,
        menu: "생수",
        cnt: 4,
        won: 5000
    }, {
        id: 2,
        menu: "주단태빌리지 피규어",
        cnt: 1,
        won: 0
    }, {
        id: 3,
        menu: "흰두부",
        cnt: 1,
        won: 2800
    }
]

function sumCnt(item) {
    var sum = 0;

    for (var i = 0; i < item.length; i++) {
        sum += item[i].won;
    }

    return sum;
}

function renderItem(item) {
    return <Menu key={item.id} menu={item.menu} cnt={item.cnt} won={item.won}/>
}

function ReceiptForm(props) {
    return (
        <div>
            <Ended className="box row">
                <Text className="col-lg-9">주문일시 : {props.orderDay}
                    <br/>주문번호 : {props.orderNum}</Text>
            </Ended>
            <div className="mt-0">
                <Title>
                    <h1 id="receiptTitle" className="display-4">{props.offerName}</h1>
                    <Link to="/map"><img id="gpsImg" src={gps} alt='gps'/></Link>
                </Title>
                <Text>공급자등록번호 : {props.offerNum}
                    <br/>
                    대표번호 : {props.offerPhoneNum}
                </Text>
                <table className="table">
                    <thead>
                        <tr>
                            <Th className="col-6">메뉴</Th>
                            <Th className="col-3 text-center">수량</Th>
                            <Th className="col-3 text-center">금액</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderMenu.map(renderItem)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <Th className="col-9" colSpan="2">합계</Th>
                            <Th className="col-3 text-center">{sumCnt(orderMenu)}</Th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <Ended>
                <Text>결제일 : {props.checkDay}
                    <br/>결제유무 : {props.check}
                </Text>
            </Ended>
        </div>
    )
}

function Menu({menu, cnt, won}) {
    return (
        <tr>
            <Td className="col-6">{menu}</Td>
            <Td className="col-3 text-center">{cnt}</Td>
            <Td className="col-3 text-center">{won}</Td>
        </tr>
    )
}

function Register() {
    const [pw, setPw] = useState("");
    const [pwCheck, setpwCheck] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [add1, setAdd1] = useState("");
    const [add2, setAdd2] = useState("");
    const [phoneNum1, setPhoneNum1] = useState("");
    const [phoneNum2, setPhoneNum2] = useState("");
    const [phoneNum3, setPhoneNum3] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
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

    const onChangePhoneNum = () => {
        setPhoneNum(phoneNum1 + "-" + phoneNum2 + "-" + phoneNum3);
    }

    const onChangeUseCat = (e) => {
        setUserCat(e.target.value);
    }

    const onReg = async () => {
        if (email === "" && pw === "" && name === "" && add1 === "" && add2 === "" && phoneNum1 === "" && phoneNum2 === "" && phoneNum3 === "") {
            alert("모든 칸을 체워주세요");
        } else {
            // 이메일 형식 체크
            const checkEmail = isEmail(email);
            const Num = onChangePhoneNum();
            const checkPw = checkPassword(pw, pwCheck);

            if (!checkEmail) {
                alert("이메일 형식이 잘못되었습니다")
            };

            if (checkPw) {
                alert("비밀번호와 비밀번호 확인이 맞지 않습니다.")
            }

            const res = await onRegAPI(pw, name, email, add1, add2, Num, userCat);

            if (res) {
                console.log(res);
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
                <form >
                    <table className="table">
                        <thead>
                            <tr>
                                <Th colSpan="2" className="subTitle col-12">회원가입하기</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Td className="col-4">이메일</Td>
                                <Td className="col-8 text-center">
                                    <input
                                        onChange={onChangeEmail}
                                        value={email}
                                        type="email"
                                        placeholder="예) chein2021@naver.com"
                                        className="w-100 py-2 px-4 border rounded-pill"></input>
                                </Td>
                            </tr>
                            <tr>
                                <Td className="col-4">이름</Td>
                                <Td className="col-8 text-center">
                                    <input
                                        onChange={onChangeName}
                                        value={name}
                                        type="name"
                                        placeholder="예) 이수민"
                                        className="w-100 py-2 px-4 border rounded-pill"></input>
                                </Td>
                            </tr>
                            <tr>
                                <Td className="col-4">비밀번호</Td>
                                <Td className="col-8 text-center">
                                    <input
                                        onChange={onChangePw}
                                        value={pw}
                                        type="password"
                                        className="w-100 py-2 px-4 border rounded-pill"></input>
                                </Td>
                            </tr>
                            <tr>
                                <Td className="col-4">비밀번호 확인</Td>
                                <Td className="col-8 text-center">
                                    <input
                                        onChange={onpwCheck}
                                        value={pwCheck}
                                        type="password"
                                        className="w-100 py-2 px-4 border rounded-pill"></input>
                                </Td>
                            </tr>
                            <tr>
                                <Td className="col-4">주소</Td>
                                <Td className="col-8 text-center">
                                    <input
                                        onChange={onChangeAdd1}
                                        value={add1}
                                        type="address"
                                        placeholder="시, 군, 구, 동"
                                        className="w-100 py-2 px-4 border rounded-pill"/>
                                    <input
                                        onChange={onChangeAdd2}
                                        value={add2}
                                        type="address"
                                        placeholder="상세 주소"
                                        className="w-100 py-2 px-4 border rounded-pill"/>
                                </Td>
                            </tr>
                            <tr>
                                <Td className="col-4">전화번호</Td>
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
                                <Td className="col-4">유형 선택</Td>
                                <Td className="col-8 text-center">
                                    <select
                                        onChange={onChangeUseCat}
                                        value={userCat}
                                        className="w-100 py-2 px-4 border rounded-pill">
                                        <option value="guest">손님</option>
                                        <option value="seller">점주</option>
                                        <option value="deliver">배달원</option>
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
                            value="회원가입"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}