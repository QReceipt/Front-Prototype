import './App.css';
import Register from "./component/SignUp";
import Main from "./component/Main";
import Detail from "./component/Detail";
import Navigation from "./component/Navigation";
import {HashRouter, Route} from "react-router-dom";
function App() {
  return (
    
    <HashRouter>
      <Navigation className="col-12" />
    <div className="App">
    <Route path="/" exact={true} component={Main}/>
    <Route path="/signup" component={Register}/>
    <Route path="/detail" component={Detail}/>
  </div>
  </HashRouter>
  );
}

export default App;