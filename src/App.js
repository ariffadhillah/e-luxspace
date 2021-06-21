import "assets/css/app.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from "pages/HomePage";
import Details from "pages/Details";
import Cart from "pages/Cart";
import Congralutions from "pages/Congralutions";
import NotFound from "pages/NotFound";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

        <Route exact path="/" component={HomePage} />
        <Route path="/catagories/:idc" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/congralutions" component={Congralutions} />
        <Route path="*" component={NotFound} />
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
