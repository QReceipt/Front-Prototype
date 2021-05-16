import React, {useEffect} from "react";
import Receipt from "./Receipt";
import styled from 'styled-components'

let MapBody = styled.div `
    padding-top:78px;
    margin : 3%;
`;

function Map() {
    const {kakao} = window;

    useEffect(()=>{
        const container = document.getElementById("Map");

        const options = {
            center : new kakao.maps.LatLng(33.450701,126.570667),
            level:3
        };

        const map=new kakao.maps.Map(container,options);
    }, []);

    return (
        <MapBody className="container-fulid">
            <div className="row text-center w-100 p-0 m-0">
                <div className="receipt col-xl-4 col-md-12 align-self-center">
                    <Receipt form="1"/>
                </div>

                <div id="Map" className="col-xl-8 col-12"></div>
            </div>
        </MapBody>
    );
}

export default Map;
