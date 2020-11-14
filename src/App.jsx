import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NAVBARS from './Components/navbar';
import OLXSLIDER from './Components/olx-slider';
import CATEGORIES from './Components/categories';
import FOOTERTOP from './Components/footertop';
import FOOTER from './Components/footer';
import FOOTERBOTTOM from './Components/footerbottom';
import ITEMS from './Components/items';
import LOADMORE from './Components/loadmore';
import POSTYOURADS from './Components/postyourads';
import SIGNIN from './Components/login-signup';
import ITEMDETAILS from './Components/item-details';



class APP extends React.Component {
  render() {
    return (
      <div className="overflow-x">
        <Router>
          <Switch>

            <Route exact path="/" component={APP}>
              <NAVBARS />
              <CATEGORIES />
              <OLXSLIDER />
              <ITEMS />
              <LOADMORE />
              <br /><br />
              <br /><br />
              <FOOTERTOP />
              <FOOTER />
              <FOOTERBOTTOM />
            </Route>

            <Route exact path="/login-signup" component={SIGNIN} >
              <SIGNIN />
            </Route>

            <Route exact path="/postyourads" component={POSTYOURADS} >
              <POSTYOURADS />
            </Route>

            <Route exact path="/item-details" component={ITEMDETAILS} >
              <ITEMDETAILS />
            </Route>

          </Switch>

        </Router>

      </div>

    )

  }
}

export default APP;
