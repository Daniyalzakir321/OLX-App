import React from 'react';
import '../App.css'
import { Link } from "react-router-dom";
// Images
import POSTA from '../images/olx-post-ads.png';
import CROSS from '../cross.svg';
// import { auth, provider, db } from './firebase';
import { AUTH, FIREBASE } from './firebase';

class SIGNIN extends React.Component {
    render() {


        // ======== Firebase SignUp ========
        //     const signUp = () => {
        //     var email = document.getElementById("email-auth")
        //     var password = document.getElementById("pass-auth")
        //     // if (email.value == "") {
        //     //     alert("Please Enter Email")
        //     // }
        //     // else if (password.value == "") {
        //     //     alert("Please Enter Password")
        //     // }

        //     FIREBASE.AUTH.createUserWithEmailAndPassword(email.value, password.value)
        //         .then((result) => {
        //             // location.replace('login.html');
        //             email.value = ""
        //             password.value = ""
        //         })
        //         .catch(function (error) {
        //             // Handle Errors here.
        //             var errorMessage = error.message;
        //             console.log(error.message)
        //             alert(error.message)
        //         });
        // }






        // =========Firebase LogIn ========
        // const logIn = () => {
        //     var email = document.getElementById("email-log")
        //     var password = document.getElementById("pass-log")

        //     FIREBASE.AUTH.signInWithEmailAndPassword(email.value, password.value)
        //         .then((result) => {
        //             // location.replace('main.html');
        //             console.log(result)
        //             email.value = ""
        //             password.value = ""
        //         })
        //         .catch(function (error) {
        //             // Handle Errors here.
        //             var errorMessage = error.message;
        //             console.log(error.message)
        //         });

        // }



  
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
                        <input type="email" className="form-control" id="email-log" placeholder="Email" required />
                        <br></br>
                        <input type="password" className="form-control " id="pass-log" placeholder="Password" required />
                        <br></br>
                        <button type="submit" className="btn btn-secondary POSTDS" onClick={""} >LOGIN</button>
                        <br></br>
                        <button type="button" className="btn btn-secondary  POSTDS" onClick={""} >SIGN UP</button>
                        <br></br>
                    </form>
                    <button type="submit" className="btn btn-secondary  POSTDS" >GOOGLE &nbsp;LOGIN</button>
                    <br></br>
                    <br></br>
                </div>



            </div>
        )
    }
}

export default SIGNIN;