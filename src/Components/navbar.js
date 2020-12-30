import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// Files
import App from '../App';
// Images
import logo from '../images/olx-logo.png';
import sell from '../images/sell-button.PNG';
import magnifierblack from '../images/magnifier-black.svg';
import magnifierwhite from '../images/magnifier-white.svg';
import SEARCH from './search'
import {Form} from 'react-bootstrap'


export default function NAVBARS() {

  const [serch, setSerch] = useState("")



  return (
    <div className="fixed-top">

      <div className="container-fluid col-md-12 col-sm-12 head ">
        <div className="row">

          <div className="Header__Logo col-md-1 col-sm-1 ">
            <Link to="/">
              <img src={logo} id="logo" />
            </Link>
          </div>

          <div className="Header__Location col-md-2">
            <div>
              <img src={magnifierblack} alt="" id="mag" />
              </div>
           
              <select className="Header__Select_Outlined" id="">
                <option id="option">Karachi</option>
                <option id="option">Lahore</option>
                <option id="option">Islamabad</option>
                <option id="option">Hyderabad</option>
              </select>
          
          </div>


          <div className="Header__Search col-md-6">
             <form className="Header__Search_Outlined" autoComplete="off"> 
                <input type="text" value={serch} onChange={(e) => { setSerch(e.target.value) }} className="Header__Search_Outlined" placeholder="Find Cars, Mobile Phones and more..." id="search" />
             </form>
              <div className="Header__MagnifierSearch">
                <img src={magnifierwhite} alt="" className="MagnifierImage"/>
              </div>
          </div>


          <div className="login Header__Login col-md-1" >
            <Link to="/login-signup" className="log-link">
              <p id="login" >Login</p>
            </Link>
          </div>

          <div className="Header__Sell col-md-1">
            <Link to="/postyourads" >
              <img src={sell} alt="" id="sell-img" />
            </Link>
          </div>

        </div>

      </div>


      {/* SEARCH PROPS */}
      {serch.length > 0 ?
        <SEARCH serch={serch} />
        : <span ></span>
      }


    </div>
  )

}