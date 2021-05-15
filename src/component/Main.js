import React from "react";
import Receipt from "./Receipt"
import "./Main.css"
import styled from 'styled-components'

let DetailBody = styled.div `
    padding-top:78px;
`;

let LoginForm = styled.div `
    margin-inline: auto;
`;

let Title = styled.div `
    margin : 2%;
    font-size : 400%;
`;

let Body = styled.div`
    margin : 0;
    padding : 0;
    text-align : center;
`;

function Main() {
    
    return (
        <DetailBody className="container-fulid">
            <Body>
                <Title className="row">QReceipt</Title>
                <LoginForm  className="classBody row text-center">
                    <Receipt id="Receipt" form="false"/>
                </LoginForm>
            </Body>
        </DetailBody>
    );
}

export default Main;
