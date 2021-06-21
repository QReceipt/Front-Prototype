import React, {useState} from "react";
import styled from 'styled-components';
import './CSS/Receipt.css';
import {isEmail, onLoginAPI} from '../api/User';
import {Link, useHistory} from "react-router-dom";

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

const Td = styled.td `
    font-size:110%;
`;

const Th = styled.td `
    font-size:110%;
`;

function LoginForm({setUser}) {
    return (
        <div className="frame">
            <Login 
            setUser = {setUser}
            />
        </div>
    )
}

function Login({setUser}) {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const history = useHistory();

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
                console.log("SUCCESS");
                setUser("Customer");
                history.push('/list');
            } else {
                console.log(res);
            }

        }
    };

    return <div>
        <Ended className="box row">
            <Text className="col-lg-9 pl-2 my-2">QReceipt</Text>
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
                <dd className="plus w-100">아직 가입을 안했다면?</dd>
                <dt className="w-100"><Link className="plusFun" to="/signup">회원가입</Link></dt>
            </dl>
        </Ended>
    </div>
}

export default LoginForm;
