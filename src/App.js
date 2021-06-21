import './App.css';
import Register from "./component/SignUp";
import Main from "./component/Main";
import Navigation from "./component/Navigation";
import SeeAll from "./component/SeeAll";
import Map from "./component/Map";
import {HashRouter, Route,Link,Switch} from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import Shop from "./component/Shop";
import SwitchUser from "./component/SwitchUser.js";
import Profile from "./component/Profile.js";

axios.defaults.baseURL = "http://mmyu.synology.me:8080/";
axios.defaults.withCredentials = true;

const Navi = styled.div `
  margin : 0;
  padding : 0;
  position:fixed;
  top:0;
  left : 0;
  z-index : 100;
  backgroud-color : #fff;
`;

function App() {
    return (
        <HashRouter>
            <Navi>
                <Navigation className="col-12" id="Nav"/>
            </Navi>
            <div className="App" id="Body">
                <Route path="/" exact={true} component={Main}/>
                <Route path="/signup" component={Register}/>
                <Route path="/list" component={SeeAll}/>
                <Route path="/map" component={Map}/>
                <Route path="/profile" component={Profile} />
                <Route path="/detail" component={SwitchUser}/>
                <Route path="/shop" component={Shop}/>
            </div>
        </HashRouter>
    );
}

export default App;