import React from 'react';
// Files
import OLXSLIDER from './Components/olx-slider';
import CATEGORIES from './Components/categories';
import FOOTERTOP from './Components/footertop';
import FOOTER from './Components/footer';
import FOOTERBOTTOM from './Components/footerbottom';
import ITEMS from './Components/items';
import LOADMORE from './Components/loadmore';


import './App.css';
// Images
import logo from './images/olx-logo.png';
import sell from './images/sell-button.PNG';
import magnifierblack from './images/magnifier-black.svg';
import magnifierwhite from './images/magnifier-white.svg';




class App extends React.Component {
  render() {

    return (
      <div>

        <div className="container-fluid col-md-12 head">
          <div className="row">

            <div className="col-md-1"> <img src={logo} id="logo" />
            </div>

            <div className="col-md-2">
          
              <select className="form-control form-control-lg">  
              {/* <img src={magnifierblack} alt="" id="magnifierblack"/> */}

                <option>Karachi</option>
                <option>Lahore</option>
                <option>Islamabad</option>
                <option>Hyderabad</option>
              </select>
            </div>

            <div className="col-md-7">
              <form className="form-inline" autoComplete="off">
                <input type="text" className="form-control-lg form-control" placeholder="Find Cars, Mobile Phones and more..." name="" id="search" />
                <button type="submit" className="btn btn-dark btn-lg "><img src={magnifierwhite} alt=""/></button>
         </form>
            </div>

            <div className="col-md-1 login">
              <p id="login">Login</p>
            </div>

            <div className="col-md-1">
              <img src={sell} alt="" id="sell-img" />
            </div>

          </div>
        </div>


        <CATEGORIES/>
        <OLXSLIDER/>
        <ITEMS/>
        <LOADMORE/>
        <br/><br/>
        <br/><br/>
        <FOOTERTOP/>
        <FOOTER/>
        <FOOTERBOTTOM/>

      </div>
    )

  }
}

export default App;
