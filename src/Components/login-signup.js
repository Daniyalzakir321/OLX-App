import React, { useState } from 'react';
import '../App.css'
import { Link, withRouter, useHistory } from "react-router-dom";
// Images
import POSTA from '../images/olx-post-ads.png';
import CROSS from '../cross.svg';
// Firebase If using authentication you need to export [ FIRE ] from firebase.js
import firebase from 'firebase/app';
import { db, fire } from './firebase';
// // Redux
// import { connect } from 'react-redux';
// import { increment, decrement, reset } from './actionCreators'
import { useDispatch } from 'react-redux';
import * as auth from './Store/action';


export default function SIGNIN() {

    const dispatch = useDispatch()
    const history= useHistory()

    const googleAuthentication = () => {
        // Date Time
        var today = new Date();
        var dateTime = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + "    " +
            today.getHours() + ":" + today.getMinutes();


        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                //   var user = result.user;
                console.log(result.user);
                console.log(result.user.displayName);
                console.log(result.user.email);
                console.log(result.user.photoURL);
                console.log(token);
                
      

                if (result) {
                    db.collection('USER-DATA').doc(result.user.email).set({
                        UserName: result.user.displayName,
                        UserEmail: result.user.email,
                        UserPhoto: result.user.photoURL,
                        UserToken: token,
                        DateTime: dateTime,
                        TimeStamp: firebase.firestore.FieldValue.serverTimestamp()
                    })


                    dispatch(auth.LoginUser({
                        UserName: result.user.displayName,
                        UserEmail: result.user.email,
                        UserPhoto: result.user.photoURL,
                        UserToken: token,
                        DateTime: dateTime,
                    })
                    )

                    history.push('./user-login')


                } //if
                // window.location='/user-login' //=========================
            })
            .catch(function (error) {
                console.log(error.message);
                alert('⚠️ ' + error.message)
            });
    }
    // ====================================================================

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const emailPassSignUP = () => {
        // Date Time
        var today = new Date();
        var dateTime = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + "    " +
            today.getHours() + ":" + today.getMinutes();

        fire.auth().createUserWithEmailAndPassword(email, pass)
            .then((result) => {
                console.log(result, 'SignUp Successfull');
                alert('✅ SignUp Successfull')

                if (result) {
                    db.collection('USER-DATA').doc(result.user.email).set({
                        UserName: result.user.displayName,
                        UserEmail: result.user.email,
                        UserPhoto: result.user.photoURL,
                        UserToken: 'null',
                        DateTime: dateTime,
                        TimeStamp: firebase.firestore.FieldValue.serverTimestamp()
                    })
                }

            })
            .catch(function (error) {
                console.log(error.message)
                alert('⚠️ ' + error.message)
            });
    }

    const emailPassSignIN = () => {
        fire.auth().signInWithEmailAndPassword(email, pass)
            .then((result) => {
                console.log(result, 'SignIn Successfull');
                alert('✅ SignIn Successfull')
                console.log('====================SignUp Successfull');
                //   window.location.replace(<Link to="/login"/>);
            })
            .catch(function (error) {
                console.log(error.message);
                alert('⚠️ ' + error.message)
            });
    }

    // ====================================================================

    return (
        <div>
            <Link to="/">
                <img src={CROSS} id="cross" />
            </Link>
            <br></br>

            <div className=" container-fluid col-md-4" id="login-signup">

                <form>
                    <img src={POSTA} id="pos-ads" />
                    <br></br><br></br><br></br>
                    <br></br>
                    <input type="email" className="form-control" id="email-log" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br></br>
                    <input type="password" className="form-control " id="pass-log" placeholder="Password" required value={pass} onChange={(e) => setPass(e.target.value)} />
                    <br></br>
                    <button type="submit" className="btn btn-secondary POSTDS" disabled={!email} onClick={emailPassSignIN}>LOGIN</button>
                    <br></br>
                    <button type="button" className="btn btn-secondary  POSTDS" disabled={!email} onClick={emailPassSignUP}>SIGN UP</button>
                    <br></br>
                </form>
                <button type="submit" className="btn btn-secondary  POSTDS" onClick={googleAuthentication}>GOOGLE &nbsp;LOGIN</button>
                <br></br>
                <br></br>
            </div>



        </div>
    )
}

