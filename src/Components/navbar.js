import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// Files
import App from '../App';
// Images
import logo from '../images/olx-logo.png';
import sell from '../images/sell-button.PNG';
import magnifierblack from '../images/magnifier-black.svg';
import magnifierwhite from '../images/magnifier-white.svg';
import SEARCH from './search'
import { Form } from 'react-bootstrap'
import { fire, auth } from './firebase'
import { useSelector } from 'react-redux'

export default function NAVBARS() {
  const data = useSelector(state => state.user)

  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(res => {
      if (res) {
        // fire.collection('users').doc(user.uid).get().then(snapshot=>{
        //     setUser(snapshot.data().FullName);
        // })
        console.log('====>', res);
        console.log('====>', res.uid);
        setUser(res)
      }
      else {
        setUser(null);
      }
    })
  }, [])
  console.log('====>', user);

  const [serch, setSerch] = useState("")
  const logout = () => {
    fire.auth().signOut()
    // window.location.reload();
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


          {/* <div className="login Header__Login col-md-1" >
            {(!data.UserPhoto) ? <Link to="/login-signup" className="log-link"><p id="login" >Login</p></Link>
              :
              <div class="dropdown">
                {(data.UserPhoto) ? <img src={data.UserPhoto} data-toggle="dropdown" 
                style={{ cursor: 'pointer', height: 45, borderRadius: 50 }} />
                  :
                  <Link to="/login-signup" className="log-link">
                    <p id="login" >Login</p>
                  </Link>
                }
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ marginLeft: -30, marginTop: 13, paddingRight: -20 }}>
                  <Link class="dropdown-item" to="/user-login"  >{data.UserName}</Link>
                  <Link class="dropdown-item" to="/user-login/edit" >Edit</Link>
                  <Link class="dropdown-item" to="/user-login/setting" >Settings</Link>
                  <Link class="dropdown-item" onClick={() => logout()} >Logout</Link>

                </div>
              </div>
            }
          </div> */}

          {/* FIREBASE AUTH */}
          <div className="login Header__Login col-md-1" >
            {(!user) ? <Link to="/login-signup" className="log-link"><p id="login" >Login</p></Link>
              :
              <div class="dropdown">
                {(user) ? <img src={user.photoURL?user.photoURL:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"} data-toggle="dropdown"
                  style={{ cursor: 'pointer', height: 45, borderRadius: 50 }} />
                  :
                  <Link to="/login-signup" className="log-link">
                    <p id="login" >Login</p>
                  </Link>
                }
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ marginLeft: -30, marginTop: 13, paddingRight: -20 }}>
                  <Link class="dropdown-item" to="/user-login"  >{user.displayName?user.displayName:user.email}</Link>
                  <Link class="dropdown-item" to="/user-login/edit" >Edit</Link>
                  <Link class="dropdown-item" to="/user-login/setting" >Settings</Link>
                  <Link class="dropdown-item" onClick={() => logout()} >Logout</Link>

                </div>
              </div>
            }
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