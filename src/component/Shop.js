import React, {useState} from "react";
import "./CSS/Shop.css"
import styled from 'styled-components'

let DetailBody = styled.div `
    padding-top:78px;
    margin : 3%;
`;

const Ended = styled.div `
    display:block;
    margin : 0;
    padding : 0;
`;

const Text = styled.div `
    font-size:110%;
`;

const Title = styled.div `
    display:inline;
`;

const Th = styled.td `
    font-size:110%;
    padding:10px;
`;

let Dl = styled.dl `
    font-size:110%;
    paDding-block:3px;
`;

let Dt = styled.dt `
    font-size:110%;
    paDding-bottom:10px;
`;

let Dd = styled.dd `
    font-size : 110%;
`;

function Shop() {
    return (
        <DetailBody className="container-fulid">
            <div className="row text-center w-100 p-0 m-0">
                <div className="col-xl-3">
                    <h1 className="Title">영수증 상세보기</h1>
                </div>
            </div>
            <div className="row mt-0 pt-5">
                <div className="col-xl-4">
                    <div className="frame">
                        <Shopform/>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="frame">
                        <Shopform2/>
                    </div>
                </div>
                <div className="detailOption col-xl-4">
                    <ShopDetail/>
                </div>
            </div>
        </DetailBody>

    );
}

export default Shop;

function Shopform() {
    return (
        <div className="mt-0">
            <Title>
                <h1 id="titleName" className="display-4">펜트하우스</h1>
            </Title>
            <Text>
                영업일자 :
            </Text>
            <Text>
                정산원 :
            </Text>
            <Text>
                개점일시 :
            </Text>
            <Text>
                정산일시 :
            </Text>
            <table className="table">
                <thead className="thead-color">
                    <tr>
                        <Th className="col-9">매출 합계</Th>
                        <Th className="col-3 text-center">
                            <button className="btn btn-dark btn-lg rounded-pill" type="button">더보기</button>
                        </Th>
                    </tr>
                </thead>
                <tbody>
                    <Th className="col-9">총판매액</Th>
                    <Th className="col-3 text-center"></Th>
                    <tr/>
                    <Th className="col-9">총반품액</Th>
                    <Th className="col-3 text-center"></Th>
                </tbody>
                <tfoot>
                    <tr>
                        <Th className="col-9">합계</Th>
                        <Th className="col-3 text-center"></Th>
                    </tr>
                </tfoot>
            </table>
            <table className="table">
                <thead className="thead-color">
                    <tr>
                        <Th className="col-9">결제수단별 매출내역</Th>
                        <Th className="col-3 text-center">
                            <button className="btn btn-dark btn-lg rounded-pill" type="button">더보기</button>
                        </Th>
                    </tr>
                </thead>
                <tbody>
                    <Th className="col-9">총판매액</Th>
                    <Th className="col-3 text-center"></Th>
                    <tr/>
                    <Th className="col-9">총반품액</Th>
                    <Th className="col-3 text-center"></Th>
                </tbody>
                <tfoot>
                    <tr>
                        <Th className="col-9">합계</Th>
                        <Th className="col-3 text-center"></Th>
                    </tr>
                </tfoot>
            </table>
            <table className="table">
                <thead className="thead-color">
                    <tr>
                        <Th className="col-9">매출 합계</Th>
                        <Th className="col-3 text-center">
                            <button className="btn btn-dark btn-lg rounded-pill" type="button">더보기</button>
                        </Th>
                    </tr>
                </thead>
                <tbody>
                    <Th className="col-9">총판매액</Th>
                    <Th className="col-3 text-center"></Th>
                    <tr/>
                    <Th className="col-9">총반품액</Th>
                    <Th className="col-3 text-center"></Th>
                </tbody>
                <tfoot>
                    <tr>
                        <Th className="col-9">합계</Th>
                        <Th className="col-3 text-center"></Th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );

}

function Shopform2() {
    return (
        <div>
            <table id="shoptable" className="table">
                <thead className="thead-color">
                    <tr>
                        <Th className="col-9">현금시재 입력내역</Th>
                        <Th className="col-3 text-center">
                            <button className="btn btn-dark btn-lg rounded-pill" type="button">더보기</button>
                        </Th>
                    </tr>
                </thead>
                <tbody>
                    <Th className="col-9">마감시재액</Th>
                    <Th className="col-3 text-center"></Th>
                    <tr/>
                    <Th className="col-9">현금과부족</Th>
                    <Th className="col-3 text-center"></Th>
                </tbody>
            </table>
            <table id="shoptable" className="table">
                <thead className="thead-color">
                    <tr>
                        <Th className="col-9">현금 정산액</Th>
                        <Th className="col-3 text-center">
                            <button className="btn btn-dark btn-lg rounded-pill" type="button">더보기</button>
                        </Th>
                    </tr>
                </thead>
                <tbody>
                    <Th className="col-9">준 비 금</Th>
                    <Th className="col-3 text-center"></Th>
                    <tr/>
                    <Th className="col-9">현금매출액</Th>
                    <Th className="col-3 text-center"></Th>
                </tbody>
                <tfoot>
                    <tr>
                        <Th className="col-9">현금시재액</Th>
                        <Th className="col-3 text-center"></Th>
                    </tr>
                </tfoot>
            </table>
            <table id="shoptable" className="table">
                <thead className="thead-color">
                    <tr>
                        <Th className="col-9" colSpan="2">신용카드 정산 내역</Th>
                        <Th className="col-3 text-center">
                            <button className="btn btn-dark btn-lg rounded-pill" type="button">더보기</button>
                        </Th>
                    </tr>
                </thead>
                <tbody>
                    <Th className="col-6">카드 승인</Th>
                    <Th className="col-3 text-center"></Th>
                    <Th className="col-3 text-center"></Th>
                    <tr/>
                    <Th className="col-6">총반품액</Th>
                    <Th className="col-3 text-center"></Th>
                    <Th className="col-3 text-center"></Th>
                </tbody>
                <tfoot>
                    <tr>
                        <Th className="col-9" colSpan="2">카드매출</Th>
                        <Th className="col-3 text-center"></Th>
                    </tr>
                </tfoot>
            </table>
            <table id="arrcard" className="table">
                <Th className="col-9">카드사별 매출 내역</Th>
                <Th className="col-3 text-center">
                    <button className="btn btn-dark btn-lg rounded-pill" type="button">더보기</button>
                </Th>
            </table>
            <Ended>
                <Text>
                    결제일시 :
                </Text>
            </Ended>
        </div>

    );

}

function ShopDetail() {
    return (
        <div>
            <Dl>
                <Dt>총판매액</Dt>
                <Dd></Dd>
            </Dl>
            <Dl>
                <Dt>총반품액</Dt>
                <Dd></Dd>
            </Dl>
            <Dl>
                <Dt>총매출액</Dt>
                <Dd></Dd>
            </Dl>
            <Dl>
                <Dt>총할인액</Dt>
                <Dd></Dd>
            </Dl>
            <Dl>
                <Dt>실매출액</Dt>
                <Dd></Dd>
            </Dl>
            <Dl>
                <Dt>면세매출액</Dt>
                <Dd></Dd>
            </Dl>
            <Dl>
                <Dt>부가세액</Dt>
                <Dd></Dd>
            </Dl>
            <Dl>
                <Dt>매출합계</Dt>
                <Dd></Dd>
            </Dl>
        </div>

    );
}