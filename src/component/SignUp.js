import React from "react";
import Reg from "./Register"
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

let Body = styled.div`
    margin : 0;
    padding : 0;
    text-align : center;
`;

function SignUp() {
    return (
        <div>
        <DetailBody className="container-fulid">
            <Body className="row">
                <LoginForm  className="classBody col-md-4">
                    <Reg id="Receipt" form="3"/>
                </LoginForm>
            </Body>
        </DetailBody>
        <Footer />
        </div>
    );
}

export default SignUp;
