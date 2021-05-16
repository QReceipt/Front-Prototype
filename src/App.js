import './App.css';
import Register from "./component/SignUp";
import Main from "./component/Main";
import Detail from "./component/Detail";
import Navigation from "./component/Navigation";
import Map from "./component/Map";
import {HashRouter, Route} from "react-router-dom";
function App() {
  return (
    
    <HashRouter>
      <Navigation className="col-12" id="Nav" />
    <div className="App" id="Body" >
    <Route path="/" exact={true} component={Main}/>
    <Route path="/signup" component={Register}/>
    <Route path="/detail" component={Detail}/>
    <Route path="/map" component={Map}/>
  </div>
  </HashRouter>
  );
}

export default App;