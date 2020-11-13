import React from 'react';
// React Router and Route
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import APP from '../App'
import NAVBARS from './navbar';
import OLXSLIDER from './olx-slider';
import CATEGORIES from './categories';
import FOOTERTOP from './footertop';
import FOOTER from './footer';
import FOOTERBOTTOM from './footerbottom';
import ITEMS from './items';
import LOADMORE from './loadmore';
import POSTYOURADS from './postyourads';
import SIGNIN from './login-signup';

class APPROUTER extends React.Component {
    render() {

        return (
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

                </Switch>

            </Router>
        )

    }
}

export default APPROUTER;