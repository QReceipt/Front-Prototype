import React from "react";
import './Navigation.css';
import {Link} from"react-router-dom"

function Navigation() {
    return (<div>
        <nav>
            <ul>
                
                <li role="presentation"><Link to ="/">메인</Link></li>
                <li role="presentation" className="active"><Link to ="/Detail">영수증 상세보기</Link></li>
                <li role="presentation">영수증 모아보기</li>
                <li role="presentation"><Link to ="/signup">회원가입</Link></li>
            </ul>
        </nav>
    </div>

    )
}

export default Navigation;