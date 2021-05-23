import React,{useState} from "react";
import Receipt from "./Receipt"
import "./CSS/Detail.css"
import styled from 'styled-components'

let DetailBody = styled.div `
    padding-top:78px;
    margin : 3%;
`;

let Dl = styled.dl`
    font-size:120%;
    padding-block:3px;
`;

let Dt = styled.dt`
    font-size:120%;
    padding-bottom:10px;
`;

let dd = styled.dd`
    font-size : 120%;
`;

function Detail({
    address,
    phoneNum,
    shopOrder,
    deliveryOrder,
    spoonCheck,
    origin
}) {
    var i = 0;
    var lists = [];

    while (i < 5) {
        lists.push(<li className="sideIndex">{i + 1}</li>);
        i += 1;
    }

    return (
        <DetailBody className="container-fulid">
            <div className="row text-center w-100 p-0 m-0">
                <div className="col-xl-3">
                    <h1 className="Title">영수증 상세보기</h1>
                    <ul className="index">
                        {lists}
                    </ul>
                </div>

                <div className="receipt col-xl-4 col-md-7 align-self-center">
                <p>가게의 위치를 보고싶다면 가게명 옆의 아이콘을 클릭해보세요!</p>
                    <Receipt form="1"/>

                </div>

                <div className="detailOption col-xl-auto col-md-5">
                    <Dl>
                        <Dt>배달 주소</Dt>
                        <dd>{address}</dd>
                    </Dl>
                    <Dl>
                        <Dt>연락처</Dt>
                        <dd>{phoneNum}</dd>
                    </Dl>
                    <Dl>
                        <Dt>가게 요청사항</Dt>
                        <dd>{shopOrder}</dd>
                    </Dl>
                    <Dl>
                        <Dt>배달 요청사항</Dt>
                        <dd>{deliveryOrder}</dd>
                    </Dl>
                    <Dl>
                        <Dt>수저/포크 유무</Dt>
                        <dd>{spoonCheck}</dd>
                    </Dl>
                    <Dl>
                        <Dt>원산지 표시</Dt>
                        <dd>{origin}</dd>
                    </Dl>
                </div>
            </div>
        </DetailBody>
    );
}

export default Detail;
