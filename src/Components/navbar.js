import React from 'react';
import { Link } from 'react-router-dom'
// Files
import App from '../App';
// Images
import logo from '../images/olx-logo.png';
import sell from '../images/sell-button.PNG';
import magnifierblack from '../images/magnifier-black.svg';
import magnifierwhite from '../images/magnifier-white.svg';



class NAVBARS extends React.Component {
  render() {

    return (
      <div className="fixed-top">

        <div className="container-fluid col-md-12 head ">
          <div className="row ">

            <div className="col-md-1">
               <Link to="/">
                 <img src={logo} id="logo" />
               </Link>
            </div>

            <div className="col-md-2">
              <img src={magnifierblack} alt="" id="magnifierblack" />
              <select className="form-control form-control-lg" id="select">

                <option id="option">Karachi</option>
                <option id="option">Lahore</option>
                <option id="option">Islamabad</option>
                <option id="option">Hyderabad</option>
              </select>
            </div>

            <div className="col-md-7">
              <form className="form-inline" autoComplete="off">
                <input type="text" className="form-control-lg form-control" placeholder="Find Cars, Mobile Phones and more..." name="" id="search" />
                <button type="submit" className="btn btn-dark btn-lg "><img src={magnifierwhite} alt="" /></button>
              </form>
            </div>

            <div className="col-md-1 login" >
              <Link to="/login-signup" className="log-link">
                <p id="login" >Login</p>
              </Link>

            </div>

            <div className="col-md-1">

              <Link to="/postyourads" >
                <img src={sell} alt="" id="sell-img" />
              </Link>

            </div>

          </div>
        </div>




      </div>
    )

  }
}

export default NAVBARS;
