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

let H3 = styled.h3`
    margin-top:0;
    margin-bottom:20px;
    padding:0;
`;

function Navigation() {
    return (
        <NaviBody>
            <Sidebar/>
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
            <button id="menubar">
                <div className="hambuger"></div>
                <div className="hambuger"></div>
                <div className="hambuger"></div>
            </button>
        </NaviBody>

    )
}

function Sidebar() {
    return (
        <div className="talkbubble">
            <H3>MENU</H3>
            <ul>
                <li role="presentation">
                    <Link className="plusFunS" to="/">메인</Link>
                </li>
                <li role="presentation">
                    <Link className="plusFunS active" to="/Detail">영수증 상세보기</Link>
                </li>
                <li className="navLi plusFunS" role="presentation">영수증 모아보기</li>
                <li role="presentation">
                    <Link className="plusFunS" to="/signup">회원가입</Link>
                </li>
            </ul>
        </div>
    );

}

export default Navigation;