import React from "react";
import './Navigation.css';

function Navigation() {
    return (<div>
        <nav>
            <ul>
                <li role="presentation" className="active">영수증 상세보기</li>
                <li role="presentation">영수증 모아보기</li>
                <li role="presentation">회원가입</li>
            </ul>
        </nav>
    </div>

    )
}

export default Navigation;