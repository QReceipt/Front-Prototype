import React, {useState} from "react";
import styled from 'styled-components';
import './Receipt.css';
import gps from './Img/gps.png';
import {Link} from "react-router-dom"
import {isEmail, onLoginAPI} from '../api/User';

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
    var componentForm = props.form;

    return (
        <div className="frame">
            {
                componentForm === "1"
                    ? <ReceiptForm/>
                    : (
                        componentForm === "2"
                            ? <LoginForm/>
                            : <Register/>
                    )
            }
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

function LoginForm() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangePw = (e) => {
        setPw(e.target.value);
    }

    //axios 헤더, 베이스 헤더 import 프로미스 객체로 사용 프로미스 객체를 반환했을 때 기다려줌(비동기 처리)
    const onLogin = async () => {
        if (id === "" && pw === "") {
            alert("아이디와 비밀번호를 입력하세요");
        } else if (id !== "" && pw === "") {
            alert("비밀번호를 입력하세요");
        } else if (id === "" && pw !== "") {
            alert("아이디를 입력하세요");
        } else {
            // 이메일 형식 체크
            const checkEmail = isEmail(id);

            if (!checkEmail) {
                alert("아이디 형식이 잘못되었습니다")
            }

            const res = await onLoginAPI(id, pw);

            if (res) {
                console.log(res);
            } else {
                console.log("HELP ME");
            }

        }
    };

    return <div>
        <Ended className="box row">
            <Text className="col-lg-9 pl-0 my-2">QReceipt</Text>
        </Ended>
        <div className="mt-0">
            <h1 className="titleSt display-2 mt-2 display-3">LOGIN</h1>
            <table className="table">
                <thead>
                    <tr>
                        <Th colSpan="2" className="subTitle col-12">로그인하기</Th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Td className="col-3">아이디</Td>
                        <Td className="col-9 text-center">
                            <input
                                onChange={onChangeId}
                                value={id}
                                placeholder="이메일을 입력하세요"
                                className="w-100 py-2 px-4 border rounded-pill"></input>
                        </Td>
                    </tr>
                    <tr>
                        <Td className="col-3">비밀번호</Td>
                        <Td className="col-9 text-center">
                            <input
                                onChange={onChangePw}
                                value={pw}
                                placeholder="비밀번호를 입력하세요"
                                type="password"
                                className="w-100 py-2 px-4 border rounded-pill"></input>
                        </Td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <Th colSpan="2" className="col-12 text-right">
                            <input
                                onClick={onLogin}
                                className="loginBtn btn btn-dark btn-lg rounded-pill"
                                type="button"
                                value="로그인"></input>
                        </Th>
                    </tr>
                </tfoot>
            </table>
        </div>
        <Ended>
            <dl>
                <dd className="plus w-100">간단 조회만 하려면?</dd>
                <dt className="plusFun w-100">전화번호로 찾기</dt>
            </dl>
            <dl>
                <dd className="plus w-100">아직 가입이 안 되어 있다면?</dd>
                <dt className="plusFun w-100">회원가입</dt>
            </dl>
        </Ended>
    </div>
}

function Register() {
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
                                <Td className="col-4">아이디</Td>
                                <Td className="col-8 text-center">
                                    <input className="w-100 py-2 px-4 border rounded-pill"></input>
                                </Td>
                            </tr>
                            <tr>
                                <Td className="col-4">비밀번호</Td>
                                <Td className="col-8 text-center">
                                    <input type="password" className="w-100 py-2 px-4 border rounded-pill"></input>
                                </Td>
                            </tr>
                            <tr>
                                <Td className="col-4">비밀번호 확인</Td>
                                <Td className="col-8 text-center">
                                    <input type="password" className="w-100 py-2 px-4 border rounded-pill"></input>
                                </Td>
                            </tr>
                            <tr>
                                <Td className="col-4">전화번호</Td>
                                <Td className="col-8 text-center">
                                    <input type="tel" className="tel py-2 px-4 border rounded-pill"></input>
                                    <span>
                                        -
                                    </span>
                                    <input type="tel" className="tel py-2 px-4 border rounded-pill"></input>
                                    <span>
                                        -
                                    </span>
                                    <input type="tel" className="tel py-2 px-4 border rounded-pill"></input>
                                </Td>
                            </tr>
                        </tbody>

                    </table>
                    <div className="row">
                        <input
                            className="signUpBtn col-4 btn btn-dark btn-lg rounded-pill"
                            type="button"
                            value="회원가입"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}