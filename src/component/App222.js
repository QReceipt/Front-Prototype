import React from "react";
import Temp from "./component/Temp"
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import SeeAll from "./component/SeeAll";
import Register from "./component/Register";
import Main from "./component/Main";

function App(){
  return(
    <HashRouter>
      <div className="App">
      <Route path="/" exact={true} component={Main}/>
      <Route path="/list" component={SeeAll}/>
      <Route path="/signup" component={Register}/>
      <Route path="/detail" component={Temp}/>
    </div>
    </HashRouter>
      
  );
}

export default App;
