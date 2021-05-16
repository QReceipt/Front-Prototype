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
    margin-inline : 0;
    margin-block : 2%;
    font-size : 400%;
    font-family: 'Cafe24Ohsquare';
`;

let Body = styled.div`
    margin : 0;
    padding : 0;
    text-align : center;
`;

function SignUp() {
    
    return (
        <DetailBody className="container-fulid">
            <Body className="row">
                <Title  className="col-12 display-2">회원가입</Title>
                <LoginForm  className="classBody col-md-4">
                    <Receipt id="Receipt" form="3"/>
                </LoginForm>
            </Body>
        </DetailBody>
    );
}

export default SignUp;
