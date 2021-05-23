import './App.css';
import Register from "./component/SignUp";
import Main from "./component/Main";
import Detail from "./component/Detail";
import Navigation from "./component/Navigation";
import SeeAll from "./component/SeeAll";
import Map from "./component/Map";
import {HashRouter, Route} from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

axios.defaults.baseURL = "http://mmyu.synology.me:8000/";
axios.defaults.withCredentials = true;

const Navi = styled.div`
  margin : 0;
  padding : 0;
  z-index : 100;
`;

function App() {
  return (
    
    <HashRouter>
      <Navi>
      <Navigation className="col-12" id="Nav" />
      </Navi>
    <div className="App" id="Body" >
    <Route path="/" exact={true} component={Main}/>
    <Route path="/signup" component={Register}/>
    <Route path="/detail" component={Detail}/>
    <Route path="/list" component={SeeAll}/>
    <Route path="/map" component={Map}/>
  </div>
  </HashRouter>
  );
}

export default App;