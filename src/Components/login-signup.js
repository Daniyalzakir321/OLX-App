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
import Swal from 'sweetalert2'



export default function SIGNIN() {

    const dispatch = useDispatch()
    const history = useHistory()

    const swAlert = (text) => {
        Swal.fire({
            title: `${text}`,
            confirmButtonColor: '#2E3235',
            focusConfirm: true,
            confirmButtonText: ' OK ',
        })
    }

    const googleAuthentication = async () => {
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

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'success',
                        title: 'SignIn Successfull'
                    })

                    history.goBack()

                } //if
                // window.location='/user-login' //=========================
            })
            .catch((error) => {
                console.log(error.message);
                swAlert('⚠️ ' + error.message)
            });
    }
    // ====================================================================

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const emailPassSignUP = () => {
        console.log(email.slice(-10))
        // Date Time
        var today = new Date();
        var dateTime = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + "    " +
            today.getHours() + ":" + today.getMinutes();
        if (email.slice(-10) == '@gmail.com' && pass) {
            fire.auth().createUserWithEmailAndPassword(email, pass)
                .then((result) => {
                    console.log(result, 'SignUp Successfull');
                    result.user.sendEmailVerification();
                    // alert('✅ SignUp Successfull')
                    Swal.fire({
                        title: 'SignUp Successfull',
                        text: 'A verification link has been sent to your email account',
                        icon: 'success',
                        confirmButtonColor: '#2E3235',
                        focusConfirm: true,
                        confirmButtonText: ' OK ',
                    })

                    if (result) {
                        db.collection('USER-DATA').doc(result.user.email).set({
                            UserName: result.user.displayName,
                            UserEmail: result.user.email,
                            UserPhoto: result.user.photoURL,
                            UserToken: 'null',
                            DateTime: dateTime,
                            TimeStamp: firebase.firestore.FieldValue.serverTimestamp()
                        })
                        setEmail('')
                        setPass('')
                        fire.auth().signOut();
                    }

                })
                .catch((error) => {
                    console.log(error.message)
                    swAlert('⚠️ ' + error.message)
                });
        }
    }

    const emailPassSignIN = () => {
        if (email.slice(-10) == '@gmail.com' && pass) {
            fire.auth().signInWithEmailAndPassword(email, pass)
                .then((result) => {
                    console.log(result, 'SignIn Successfull');
                    // alert('✅ SignIn Successfull')
                    console.log('SignUp Successfull');

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'success',
                        title: 'LogIn Successfull'
                    })

                    history.goBack()
                    //   window.location.replace(<Link to="/login"/>);
                })
                .catch((error) => {
                    console.log(error.message);
                    // swAlert('⚠️ ' + error.message)
                });
        }
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
                    <input type="email" className="form-control" id="email-log" placeholder="Email" title="example@gmail.com"
                        pattern={`^[a-zA-Z0-9]+@("@")gmail\.com$`} required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br></br>
                    <input type="password" className="form-control " id="pass-log" placeholder="Password" required value={pass} onChange={(e) => setPass(e.target.value)} />
                    <br></br>
                    <button type="submit" className="btn btn-secondary POSTDS" disabled={!email} disabled={!pass} onClick={emailPassSignIN}>LOGIN</button>
                    <br></br>
                    <button type="submit" className="btn btn-secondary  POSTDS" disabled={!email} disabled={!pass} onClick={emailPassSignUP}>SIGN UP</button>
                    <br></br>
                </form>
                <button type="submit" className="btn btn-secondary  POSTDS" onClick={googleAuthentication}>GOOGLE &nbsp;LOGIN</button>
                <br></br>
                <br></br>
            </div>



        </div>
    )
}

