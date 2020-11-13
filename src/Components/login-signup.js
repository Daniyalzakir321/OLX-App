import React from 'react';
import '../App.css'
import { Link } from "react-router-dom";
// Images
import ARROW from '../arrow.svg';
import LOGO from '../images/olx-logo.png';
import POSTA from '../images/olx-post-ads.png';
import CROSS from '../cross.svg';

import { Form } from 'react-bootstrap'


class SIGNIN extends React.Component {
    render() {
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
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email" required />
                        <br></br>
                        <input type="password" className="form-control " id="inputEmail3" placeholder="Password" required />
                        <br></br>
                        <button type="submit" className="btn btn-secondary POSTDS" >LOGIN</button>
                        <br></br>
                        <button type="submit" className="btn btn-secondary  POSTDS" >SIGN UP</button>
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