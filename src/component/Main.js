import React from "react";
import Receipt from "./Receipt"
import Navigation from "./Navigation"
import "./Detail.css"
import styled from 'styled-components'

let DetailBody = styled.div `
    padding-top:78px;
`;

let LoginForm = styled.div `
    width: 32%;
    margin-inline: auto;
    position:absolute;
`;

let Title = styled.div `
    margin : 2%;
    font-size : 400%;
`;

function Main() {
    return (
        <DetailBody className="container-fulid">
            <div className="menu row">
                <Navigation className="col-12"/>
            </div>
            <div>
                <Title className="row">QReceipt</Title>
                <LoginForm className="row text-center w-100">
                    <Receipt form="false"/>
                </LoginForm>
            </div>
        </DetailBody>
    );
}

export default Main;
