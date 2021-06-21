import './App.css';
import Register from "./component/SignUp";
import Main from "./component/Main";
import Navigation from "./component/Navigation";
import SeeAll from "./component/SeeAll";
import Map from "./component/Map";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import Shop from "./component/Shop";
import Detail from "./component/Detail";
import SwitchUser from "./component/SwitchUser.js";
import {useState} from "react";
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
    const [userCat, setUserCat] = useState("a");
    const setUser = (value) =>{
        console.log(value);
        setUserCat(value);
    }

    return (
        <BrowserRouter>
            <Navi>
                <Navigation className="col-12" id="Nav"/>
            </Navi>
            <div className="App" id="Body">
                <Switch>
                    <Route path="/" exact={true} render={()=>(
                        <Main 
                        setUser = {setUser}
                        />
                    )}/>
                    <Route path="/signup" component={Register}/>
                    <Route path="/list" component={SeeAll}/>
                    <Route path="/map" component={Map}/>
                    <Route path="/profile" component={Profile}/> 
                    {
                        userCat === null
                            ? <p>not found</p>
                            : (
                                userCat === "Seller"
                                    ? <Route path="/detail" component={Shop}/>
                                    : <Route path="/detail" component={Detail}/>
                            )
                    }
                    <Route path="/shop" component={Shop}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;