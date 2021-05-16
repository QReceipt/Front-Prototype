import React from "react";
import './SeeAll.css';
import styled from 'styled-components';

let DetailBody = styled.div `
    padding-top:78px;
`;

function SeeAll() {
    var i = 0;
    var lists = [];

    while (i < 9) {
        lists.push(<li className = "date-ddlist">{i + 1}</li>);
        i += 1;
    }
    return (
        <DetailBody>
        <div class="col-lg-3">
            <h1 class="display-4">영수증 모아보기</h1>
        </div>
        <div class="col-lg-12">
        <div class="row">
            <div class="col-lg-2">
                <div class="date-yymm">
                    <h5 class="date-yy">2021</h5>
                    <p class="display-4">4</p>
                </div>
            </div>
            <div class="col-lg-10">
                <ul class="date-dd">
                   {lists}
                </ul>
            </div>
        </div>
    </div>
        <div class ="col-lg-12">
            <table class="receipt_table">
                <tr class = "table-title">
                    <td>00:00</td>
                    <td>주문번호:BOWG009KTK</td>
                    <td class="product-price">25,000</td>
                </tr>
                <tr class = "table-content">
                    <td class="shop-name">펜트하우스</td>
                    <td>청아예술트로피/대상/서울음대프리패스 외 2건</td>
                    <td>
                         <button className="btn btn-dark btn-lg rounded-pill"  type="button">더보기</button>
                    </td>
                </tr>
                <tr class = "table-title">
                    <td>00:00</td>
                    <td>주문번호:BOWG009KTK</td>
                    <td class="product-price">25,000</td>
                </tr>
                <tr class = "table-content">
                    <td class="shop-name">펜트하우스</td>
                    <td>청아예술트로피/대상/서울음대프리패스 외 2건</td>
                    <td>
                         <button className="btn btn-dark btn-lg rounded-pill"  type="button">더보기</button>
                    </td>
                </tr>
                <tr class = "table-title">
                    <td>00:00</td>
                    <td>주문번호:BOWG009KTK</td>
                    <td class="product-price">25,000</td>
                </tr>
                <tr class = "table-content">
                    <td class="shop-name">펜트하우스</td>
                    <td>청아예술트로피/대상/서울음대프리패스 외 2건</td>
                    <td>
                         <button className="btn btn-dark btn-lg rounded-pill"  type="button">더보기</button>
                    </td>
                </tr>
            </table>
        </div>
    </DetailBody>
    )
}

export default SeeAll;



