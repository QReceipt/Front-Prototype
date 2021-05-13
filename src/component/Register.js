import React from "react";

import "./Register.css"
import Navigation from "./Navigation"

function Register() {
    return (
        <div className="container-fulid">
            <div className="row">
                <Navigation className="col-lg-12"/>
            </div>

        <div className= "mt-5 pt-5">
            <div className="signupframe pt-4 col-9">
                <h1 className="display-4 mt-2 mb-4">SIGNUP</h1>
                <table className="table" id="signuptable">
                    <tr className="d-flex">
                        <td className="col-3">아이디</td>
                        <td className="col-8"><input class="w-100 py-2 px-4 border rounded-pill"></input></td>
                    </tr>
                    <tr className="d-flex">
                        <td className="col-3">비밀번호</td>
                        <td className="col-8"><input type="password" class="w-100 py-2 px-4 border rounded-pill"></input></td>
                    </tr>
                    <tr className="d-flex">
                        <td className="col-3">비밀번호 확인</td>
                        <td className="col-8"><input type="password" class="w-100 py-2 px-4 border rounded-pill"></input></td>
                    </tr>
                    <tr className="d-flex">
                        <td className="col-3">우편번호</td>
                        <td className="col-8"><input class="w-100 py-2 px-4 border rounded-pill"></input></td>
                    </tr>
                    <tr className="d-flex">
                        <td className="col-3">주소</td>
                        <td className="col-8"><input class="w-100 py-2 px-4 border rounded-pill"></input></td>
                    </tr>
                    <tr className="d-flex">
                        <td className="col-3">휴대폰</td>
                        <td className="col-2">
                            <select className="phoneselect w-100 py-2 px-4 border rounded-pill">
                                    <option>010</option>
                                    <option value="01">011</option>
                                    <option value="02">017</option>
                                    <option value="03">070</option>
                                </select>
                        </td>
                        <td className="col-3"><input class="w-100 py-2 px-4 border rounded-pill"></input></td>
                        <td className="col-3"><input class="w-100 py-2 px-4 border rounded-pill"></input></td>
                    </tr>
                    <tfoot className="d-flex">
                        <th className="col-offset-3 col-11 text-right">
                            <input class="btn btn-dark btn-lg rounded-pill" type="button" value="가입"></input>
                        </th>
                    </tfoot>
                </table>
             </div>
        </div>
    </div>
    )
}

export default Register;