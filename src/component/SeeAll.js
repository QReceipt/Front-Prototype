import React, {useState} from "react";
import "./CSS/SeeAll.css"
import styled from 'styled-components'
import {Link} from "react-router-dom"

let DetailBody = styled.div `
    padding-top:78px;
    margin : 3%;
`;

let Td = styled.td `
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
                        <div className="date-yymm">
                            <h5 className="date-yy">2021</h5>
                            <p className="display-1">4</p>
                        </div>
                    </div>
                </div>

                <div className="receipt col-xl-9">
                    <div className="row">
                        <div className="col-10">
                            <ul className="date-dd">
                                {lists}
                            </ul>
                        </div>
                    </div>
                    <div id="wide"  className="col-12">
                        <table className="receipt_table">
                            <tr className="table-title">
                                <Td>00:00</Td>
                                <Td>주문번호:BOWG009KTK</Td>
                                <Td className="product-price">25,000</Td>
                            </tr>
                            <tr className="table-content">
                                <Td className="shop-name">펜트하우스</Td>
                                <Td>청아예술트로피/대상/서울음대프리패스 외 2건</Td>
                                <Td>
                                    <button className="btn btn-outline-success btn-lg rounded-pill" type="button">
                                        <Link className="btnTypo" to="/Detail">더보기</Link>
                                    </button>
                                </Td>
                            </tr>
                            <tr className="table-title">
                                <Td>00:00</Td>
                                <Td>주문번호:BOWG009KTK</Td>
                                <Td className="product-price">25,000</Td>
                            </tr>
                            <tr className="table-content">
                                <Td className="shop-name">펜트하우스</Td>
                                <Td>청아예술트로피/대상/서울음대프리패스 외 2건</Td>
                                <Td>
                                    <button className="btn btn-outline-success btn-lg rounded-pill" type="button">
                                        <Link className="btnTypo" to="/Detail">더보기</Link>
                                    </button>
                                </Td>
                            </tr>
                            <tr className="table-title">
                                <Td>00:00</Td>
                                <Td>주문번호:BOWG009KTK</Td>
                                <Td className="product-price">25,000</Td>
                            </tr>
                            <tr className="table-content">
                                <Td className="shop-name">펜트하우스</Td>
                                <Td>청아예술트로피/대상/서울음대프리패스 외 2건</Td>
                                <Td>
                                    <button className="btn btn-outline-success btn-lg rounded-pill" type="button">
                                        <Link className="btnTypo" to="/Detail">더보기</Link>
                                    </button>
                                </Td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div id="narrow" className="col-12">
                    <div className="col-12">
                        <div className="Item">
                            <h2 className="shop-name">00:00 펜트하우스</h2>
                            <p>주문번호:BOWG009KTK</p>
                            <p>청아예술트로피/대상/서울음대프리패스 외 2건</p>
                            <div class="subItem">
                                <h2>25000원</h2>
                                <button className="btn btn-outline-success btn-lg rounded-pill" type="button">
                                    <Link className="btnTypo" to="/Detail">더보기</Link>
                                </button>
                            </div>
                        </div>
                        <div className="Item">
                            <h2 className="shop-name">00:00 펜트하우스</h2>
                            <p>주문번호:BOWG009KTK</p>
                            <p>청아예술트로피/대상/서울음대프리패스 외 2건</p>
                            <div class="subItem">
                                <h2>25000원</h2>
                                <button className="btn btn-outline-success btn-lg rounded-pill" type="button">
                                    <Link className="btnTypo" to="/Detail">더보기</Link>
                                </button>
                            </div>
                        </div>
                        <div className="Item">
                            <h2 className="shop-name">00:00 펜트하우스</h2>
                            <p>주문번호:BOWG009KTK</p>
                            <p>청아예술트로피/대상/서울음대프리패스 외 2건</p>
                            <div class="subItem">
                                <h2>25000원</h2>
                                <button className="btn btn-outline-success btn-lg rounded-pill" type="button">
                                    <Link className="btnTypo" to="/Detail">더보기</Link>
                                </button>
                            </div>
                        </div>
                        <div className="Item">
                            <h2 className="shop-name">00:00 펜트하우스</h2>
                            <p>주문번호:BOWG009KTK</p>
                            <p>청아예술트로피/대상/서울음대프리패스 외 2건</p>
                            <div class="subItem">
                                <h2>25000원</h2>
                                <button className="btn btn-outline-success btn-lg rounded-pill" type="button">
                                    <Link className="btnTypo" to="/Detail">더보기</Link>
                                </button>
                            </div>
                        </div>
                        <div className="Item">
                            <h2 className="shop-name">00:00 펜트하우스</h2>
                            <p>주문번호:BOWG009KTK</p>
                            <p>청아예술트로피/대상/서울음대프리패스 외 2건</p>
                            <div class="subItem">
                                <h2>25000원</h2>
                                <button className="btn btn-outline-success btn-lg rounded-pill" type="button">
                                    <Link className="btnTypo" to="/Detail">더보기</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DetailBody>
    );
}

export default SeeAll;