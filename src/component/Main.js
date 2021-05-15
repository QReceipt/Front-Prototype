import React from "react";
import Receipt from "./Receipt"
import Navigation from "./Navigation"
import "./Main.css"
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
            <div id = "classBody">
                <Title className="row">QReceipt</Title>
                <LoginForm className="row text-center">
                    <Receipt form="false"/>
                </LoginForm>
            </div>
        </DetailBody>
    );
}

export default Main;
