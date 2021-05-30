import React from "react";
import Reg from "./Register"
import "./CSS/Main.css"
import styled from 'styled-components'

let DetailBody = styled.div `
    padding-top:78px;
`;

let LoginForm = styled.div `
    margin-inline: auto;
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
                <LoginForm  className="classBody col-md-4">
                    <Reg id="Receipt" form="3"/>
                </LoginForm>
            </Body>
        </DetailBody>
    );
}

export default SignUp;
