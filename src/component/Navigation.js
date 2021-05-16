import React, {useEffect, useState} from "react";
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

let H3 = styled.h3 `
    margin-top:0;
    font-size : 150%;
    margin-bottom:20px;
    padding:0;
`;

function Navigation() {
    const {on, toggle} = useToggle();

    return (
        <NaviBody>
            <button id="menubar" onClick={toggle}>{
                    on
                        ? <Cancled/>
                        : <Hambuger/>
                }</button>
            <Ul>
                <li className="navLi" role="presentation">
                    <Link className="plusFun" to="/">메인</Link>
                </li>
                <li className="navLi" role="presentation">
                    <Link className="plusFun active" to="/Detail">영수증 상세보기</Link>
                </li>
                <li className="navLi" role="presentation"> 
                <Link className="plusFun" to="/list">영수증 모아보기</Link>
                </li>
                <li className="navLi" role="presentation">
                    <Link className="plusFun" to="/signup">회원가입</Link>
                </li>
            </Ul>
        </NaviBody>

    )
}

function useToggle(initialOn = false) {
    const [on, setOn] = useState(initialOn)
    const toggle = () => setOn(!on)
    return {on, toggle}
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
                <li role="presentation"> 
                    <Link className="plusFunS" to="/list">영수증 모아보기</Link>
                </li>
                <li role="presentation">
                    <Link className="plusFunS" to="/signup">회원가입</Link>
                </li>
            </ul>
        </div>
    );

}

function Hambuger() {
    return (
        <div className="buttonBody">
            <div className="hambuger"></div>
            <div className="hambuger"></div>
            <div className="hambuger"></div>
        </div>
    );
}

function Cancled() {
    return (
        <div className="buttonBody">
            <div className="hambuger Cancled_top"></div>
            <div className="hambuger Cancled_bottom"></div>

            <Sidebar/>
        </div>
    )
}

export default Navigation;