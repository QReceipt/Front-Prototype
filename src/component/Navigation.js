import React from "react";
import './Navigation.css';
import styled from 'styled-components';

let NaviBody = styled.div`
    padding: 0;
    margin:0;
    position:fixed;
    top:0;
    width : 100%;
`;

let Ul = styled.li`
    list-style:none;
    text-align : right;
    padding : 25px;
    height:78px;
    top:0;
`;

function Navigation() {
    return (<NaviBody>
            <Ul>
                <li class="plusFun">영수증 상세보기</li>
                <li class="plusFun">영수증 모아보기</li>
                <li class="plusFun">회원가입</li>
            </Ul>
     </NaviBody>

    )
}

export default Navigation;