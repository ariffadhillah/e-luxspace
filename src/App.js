import "assets/css/app.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from "pages/HomePage";
import Details from "pages/Details";
import Cart from "pages/Cart";
import Congralutions from "pages/Congralutions";
import NotFound from "pages/NotFound";

import Provider from 'helper/hooks/useGlobalContext'

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/catagories/:idc" component={Details} />
          <Route path="/categories/:idc/products/:idp" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/congralutions" component={Congralutions} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
