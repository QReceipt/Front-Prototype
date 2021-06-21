import Detail from "./Detail";
import Shop from "./Shop";
import {Route} from "react-router-dom";

function SwitchUser(user) {
    let userCat = user.userCat;

    return (
        <div className="App" id="Body">
            {
                userCat === null
                    ? <p>not found</p>
                    : (
                        userCat === "Seller"
                            ? <Route path="/detail" component={Shop}/>
                            : <Route path="/detail" component={Detail}/>
                    )
            }
        </div>
    );
}

export default SwitchUser;