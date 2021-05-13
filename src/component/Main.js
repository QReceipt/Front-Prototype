import React from "react";
import Receipt from "./Receipt"
import Navigation from "./Navigation"
import styled from 'styled-components'

let DetailBody = styled.div `
    paDding-top: 90px;
`;

function Main() {

    return (
        <DetailBody className="container-fulid">
            <div className="menu row">
                <Navigation className="col-12" />
            </div>
            <div className="row text-center w-100 p-0 m-0">
                <div className="col-xl-3">
                    <h1 className="Title">영수증 상세보기</h1>
                </div>

                <div className="receipt col-xl-4 col-md-7 align-self-center">
                    <Receipt form="false"/>
                </div>
                </div>
        </DetailBody>
    );
}

export default Main;
