import React, {useState} from "react";
import Receipt from "./Receipt"
import "./SeeAll.css"
import styled from 'styled-components'

let DetailBody = styled.div `
    padding-top:78px;
    margin : 3%;
`;

let Td = styled.td`
    font-size : 100%;
`;

function SeeAll() {
    var i = 0;
    var lists = [];

    while (i < 9) {
        lists.push(<li className="date-ddlist">{i + 1}</li>);
        i += 1;
    }
    return (
        <DetailBody className="container-fulid">
            <div className="row text-center w-100 p-0 m-0">
                <div className="col-xl-3">
                    <h1 className="Title">영수증 모아보기</h1>
                    <div className="col-12">
                        <div class="date-yymm">
                            <h5 class="date-yy">2021</h5>
                            <p class="display-1">4</p>
                        </div>
                    </div>
                </div>

                <div className="receipt col-xl-9">
                    <div className="row">
                        <div class="col-10">
                            <ul class="date-dd">
                                {lists}
                            </ul>
                        </div>
                    </div>
                <div class="col-12">
                    <table class="receipt_table">
                        <tr class="table-title">
                            <Td>00:00</Td>
                            <Td>주문번호:BOWG009KTK</Td>
                            <Td class="product-price">25,000</Td>
                        </tr>
                        <tr class="table-content">
                            <Td class="shop-name">펜트하우스</Td>
                            <Td>청아예술트로피/대상/서울음대프리패스 외 2건</Td>
                            <Td>
                                <button className="btn btn-dark btn-lg rounded-pill" type="button">더보기</button>
                            </Td>
                        </tr>
                        <tr class="table-title">
                            <Td>00:00</Td>
                            <Td>주문번호:BOWG009KTK</Td>
                            <Td class="product-price">25,000</Td>
                        </tr>
                        <tr class="table-content">
                            <Td class="shop-name">펜트하우스</Td>
                            <Td>청아예술트로피/대상/서울음대프리패스 외 2건</Td>
                            <Td>
                                <button className="btn btn-dark btn-lg rounded-pill" type="button">더보기</button>
                            </Td>
                        </tr>
                        <tr class="table-title">
                            <Td>00:00</Td>
                            <Td>주문번호:BOWG009KTK</Td>
                            <Td class="product-price">25,000</Td>
                        </tr>
                        <tr class="table-content">
                            <Td class="shop-name">펜트하우스</Td>
                            <Td>청아예술트로피/대상/서울음대프리패스 외 2건</Td>
                            <Td>
                                <button className="btn btn-dark btn-lg rounded-pill" type="button">더보기</button>
                            </Td>
                        </tr>
                    </table>
                </div></div>
            </div>
        </DetailBody>
    );
}

export default SeeAll;