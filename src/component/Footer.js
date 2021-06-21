import React from "react";
import styled from "styled-components";

const FooterBody = styled.div`
    position:absolute;
    left:0;
    width:100%;
    height : 100px;
    margin:0;
    padding:2% 2% 0 2%;
    background-color : black;
    color:#fff;
`;

function Footer() {
    return (
        <FooterBody>QReceipt

        </FooterBody>
    );
}

export default Footer;