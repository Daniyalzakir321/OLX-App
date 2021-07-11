import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// Files
// import App from '../App';
// Images
import logo from './olx-logo.png';
import sell from './sell-button.PNG';
import magnifierblack from './magnifier-black.svg';
import magnifierwhite from './magnifier-white.svg';
// import SEARCH from '../user-login-nav../user-login../search';
// import { useSelector } from 'react-redux'
import firebase from 'firebase/app';
// import { fire,db } from '../user-login-nav../user-login/firebase';

export default function NAVBARS({data}) {
//     const data = useSelector(state => state.user)
// console.log("USER=>>>>", data)

    const [serch, setSerch] = useState("")

    const logout = () => {
    firebase.auth().signOut()
    window.location.reload();
    console.log("logout")
  }

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
                            <img src={magnifierwhite} alt="" className="MagnifierImage" />
                        </div>
                    </div>


                    <div className="login Header__Login col-md-1" >
                        {/* <Link to="/login-signup" className="log-link"> */}
                            <div class="dropdown">
                                {(data.UserPhoto)?<img src={data.UserPhoto} data-toggle="dropdown" style={{cursor:'pointer', height:45, borderRadius:50}} /> 
                            :
                            <Link to="/login-signup" className="log-link">
                            <p id="login" >Login</p>
                          </Link>    
                            }
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{marginLeft:-30,marginTop:13, paddingRight:-20}}>
                                    <Link class="dropdown-item" to="/user-login"  >{data.UserName}</Link>
                                    <Link class="dropdown-item" to="/user-login/edit" >Edit</Link>
                                    <Link class="dropdown-item" to="/user-login/setting" >Settings</Link>
                                    <Link class="dropdown-item" to="/" onClick={()=> {logout()}} >Logout</Link>
                                </div>
                            </div>
                        {/* </Link> */}
                    </div>

                    <div className="Header__Sell col-md-1">
                        <Link to="/postyourads" >
                            <img src={sell} alt="" id="sell-img" />
                        </Link>
                    </div>

                </div>

            </div>


            {/* SEARCH PROPS */}
            {/* {serch.length > 0 ?
        <SEARCH serch={serch} />
        : <span ></span>
      } */}


        </div>
    )

}