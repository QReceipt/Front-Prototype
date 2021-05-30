import React, {useState} from "react";
import Receipt from "./Receipt"
import "./CSS/Detail.css"
import styled from 'styled-components'
import Footer from "./Footer"

let DetailBody = styled.div `
    padding-top:78px;
    margin : 3%;
    min-height:100%;
    position:relative;
    padding-bottom:100px;
`;

let Dl = styled.dl `
    font-size:120%;
    padding-block:3px;
`;

let Dt = styled.dt `
    font-size:120%;
    padding-bottom:10px;
`;

let Dd = styled.dd `
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
    const [selectNum, setSelectNum] = useState(-1);

    let idx = 0;
    let lists = [1, 2, 3, 4, 5];

    return (
        <div className="w-100 h-100 m-0 p-0">
            <DetailBody className="container-fulid mb-0">
                <div className="row text-center w-100 p-0 m-0">
                    <div className="col-xl-3">
                        <h1 className="Title">영수증 상세보기</h1>
                        <ul className="index">
                            {
                                lists.map((item, idx) => (
                                    <button
                                        onClick={() => {
                                            setSelectNum(idx);
                                        }}
                                        style={{
                                            color: `${selectNum === idx
                                                ? 'green'
                                                : '#c0c0c0'}`
                                        }}>{idx + 1}</button>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="receipt col-xl-4 col-md-7 align-self-center">
                        <p>가게의 위치를 보고싶다면 가게명 옆의 아이콘을 클릭해보세요!</p>
                        <Receipt form="1"/>

                    </div>

                    <div className="detailOption col-xl-auto col-md-5">
                        <Dl>
                            <Dt>배달 주소</Dt>
                            <Dd>{address}</Dd>
                        </Dl>
                        <Dl>
                            <Dt>연락처</Dt>
                            <Dd>{phoneNum}</Dd>
                        </Dl>
                        <Dl>
                            <Dt>가게 요청사항</Dt>
                            <Dd>{shopOrder}</Dd>
                        </Dl>
                        <Dl>
                            <Dt>배달 요청사항</Dt>
                            <Dd>{deliveryOrder}</Dd>
                        </Dl>
                        <Dl>
                            <Dt>수저/포크 유무</Dt>
                            <Dd>{spoonCheck}</Dd>
                        </Dl>
                        <Dl>
                            <Dt>원산지 표시</Dt>
                            <dd>{origin}</dd>
                        </Dl>
                    </div>
                </div>
            </DetailBody>
            <Footer/>
        </div>
    );
}

export default Detail;
