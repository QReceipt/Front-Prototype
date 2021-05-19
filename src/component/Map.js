import React, {useEffect} from "react";
import Receipt from "./Receipt";
import styled from 'styled-components'
import {Link} from "react-router-dom"

let MapBody = styled.div `
    padding-top:78px;
    margin : 3%;
`;

function Map() {
    useEffect(() => {
        const {kakao} = window;
        const container = document.getElementById("Map");

        const options = {
            center: new kakao
                .maps
                .LatLng(33.450701, 126.570667),
            level: 3
        };

        const map = new kakao
            .maps
            .Map(container, options);
    }, []);

    return (
        <MapBody className="container-fulid">
            <div className="row text-center w-100 p-0 m-0">
                <div className="receipt col-xl-4 col-md-12 align-self-center">
                    <h1 className="Title">가게 지도 보기</h1>
                    <Receipt form="1"/>
                    <Link className="plusFun active" to="/Detail">
                        <input
                            className="backBtn col-4 mt-3 display-3 btn btn-dark btn-lg rounded-pill"
                            type="button"
                            value="이전화면으로 돌아가기"></input>
                    </Link>
                </div>

                <div id="Map" className="col-xl-8 col-12"></div>
            </div>
        </MapBody>
    );
}

export default Map;
