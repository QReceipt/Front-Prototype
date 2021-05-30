import React from "react";
import Login from "./LoginForm"
import Footer from "./Footer"
import "./CSS/Main.css"
import styled from 'styled-components'

let DetailBody = styled.div `
    padding-block:78px;
    position:relative;
    min-height:100%;
`;

let LoginForm = styled.div `
    margin-inline: auto;
`;

let Title = styled.div `
    margin-inline : 0;
    margin-block : 2%;
    font-size : 360%;
    position :relative;
    z-index:50;
    font-family: 'Cafe24Ohsquare';
`;

let Body = styled.div `
    margin : 0;
    padding : 0;
    text-align : center;
    display:flex;
    justify-content:center;
    align-content:center;
`;

function Main() {
    return (
        <div>
        <DetailBody className="container-fulid">
            <Body className="row">
                <Title className="col-md-12 display-2">QReceipt</Title>
                <LoginForm className="classBody col-lg-4">
                    <Login id="Receipt"/>
                </LoginForm>
            </Body>
        </DetailBody>
        <Footer />
        </div>
    );
}

export default Main;
