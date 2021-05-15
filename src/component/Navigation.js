import React from "react";
import './Navigation.css';
import styled from 'styled-components';
import {Link} from "react-router-dom"

let NaviBody = styled.div `
    padding: 0;
    margin:0;
    position:fixed;
    top:0;
    width : 100%;
`;

let Ul = styled.ul `
    list-style:none;
    text-align : right;
    padding : 25px;
    height:78px;
    top:0;
`;

function Navigation() {
    return (
        <NaviBody>
            <Ul>
                <li className="navLi" role="presentation">
                    <Link className="plusFun" to="/">메인</Link>
                </li>
                <li className="navLi" role="presentation">
                    <Link className="plusFun active" to="/Detail">영수증 상세보기</Link>
                </li>
                <li className="navLi plusFun" role="presentation">영수증 모아보기</li>
                <li className="navLi" role="presentation">
                    <Link className="plusFun" to="/signup">회원가입</Link>
                </li>
            </Ul>
        </NaviBody>

    )
}

export default Navigation;