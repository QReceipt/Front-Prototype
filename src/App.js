import './App.css';
import Register from "./component/Register";
import Main from "./component/Main";
import Detail from "./component/Detail";
import {HashRouter, Route} from "react-router-dom";
function App() {
  return (
    
    <HashRouter>
    <div className="App">
    <Route path="/" exact={true} component={Main}/>
    <Route path="/signup" component={Register}/>
    <Route path="/detail" component={Detail}/>
  </div>
  </HashRouter>
  );
}

export default App;