import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import './Receipt.css';
import gps from './Img/gps.png';
import {Link} from "react-router-dom"
import {onReceiptAPI} from '../api/ReceiptInfo';

const Ended = styled.div `
    display:block;
    margin : 0;
    padding : 0;
`;

const Text = styled.div `
    font-size:130%;
    padding:0;
    z-index: 10;
`;

const Title = styled.div `
    display:inline;
`;

const Td = styled.td `
    font-size:130%;
`;

const Th = styled.td `
    font-size:130%;
`;

function Receipt() {
    const onReg = async () => {
        const res = await onReceiptAPI();

        if (res) {
            console.log(res);
        } else {
            console.log("HELP ME");
        }
    };

    return (
        <div className="frame">
            <ReceiptForm props={onReg}/>
        </div>
    )
}

export default Receipt;

const orderMenu = [
    {
        id: 1,
        menu: "생수",
        cnt: 4,
        won: 5000
    }, {
        id: 2,
        menu: "주단태빌리지 피규어",
        cnt: 1,
        won: 0
    }, {
        id: 3,
        menu: "흰두부",
        cnt: 1,
        won: 2800
    }
]

function sumCnt(item) {
    var sum = 0;

    for (var i = 0; i < item.length; i++) {
        sum += item[i].won;
    }

    return sum;
}

function renderItem(item) {
    return <Menu key={item.id} menu={item.menu} cnt={item.cnt} won={item.won}/>
}

function ReceiptForm(props) {
    return (
        <div>
            <Ended className="box row">
                <Text className="col-lg-9">주문일시 : {props.orderDay}
                    <br/>주문번호 : {props.orderNum}</Text>
            </Ended>
            <div className="mt-0">
                <Title>
                    <h1 id="receiptTitle" className="display-4">{props.offerName}</h1>
                    <Link to="/map"><img id="gpsImg" src={gps} alt='gps'/></Link>
                </Title>
                <Text>공급자등록번호 : {props.offerNum}
                    <br/>
                    대표번호 : {props.offerPhoneNum}
                </Text>
                <table className="table">
                    <thead>
                        <tr>
                            <Th className="col-6">메뉴</Th>
                            <Th className="col-3 text-center">수량</Th>
                            <Th className="col-3 text-center">금액</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderMenu.map(renderItem)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <Th className="col-9" colSpan="2">합계</Th>
                            <Th className="col-3 text-center">{sumCnt(orderMenu)}</Th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <Ended>
                <Text>결제일 : {props.checkDay}
                    <br/>결제유무 : {props.check}
                </Text>
            </Ended>
        </div>
    )
}

function Menu({menu, cnt, won}) {
    return (
        <tr>
            <Td className="col-6">{menu}</Td>
            <Td className="col-3 text-center">{cnt}</Td>
            <Td className="col-3 text-center">{won}</Td>
        </tr>
    )
}