import React from 'react';
import '../App.css'
import olxslide from '../images/head.jpg';
import olx1 from '../images/olx1.png';
import olx2 from '../images/olx2.png';
import olx3 from '../images/olx3.png';
import {Link} from 'react-router-dom'


class FOOTERTOP extends React.Component {
    render() {
        return (
            <div className="container col-md-12" id="foottop">
            <div className="row">


                <div className="col-md-5 sec-1st-head col">
                <img src={olx1}  className="img-fluid"/>
                </div>



                <div className="col-md-3 sec-2nd-head col">
                <br></br>
                <span className="sec-2nd">TRY THE OLX APP</span>
                <br></br><br></br>
                <span className="sec-2nd-b">Buy,&nbsp;sell&nbsp;and&nbsp;find&nbsp;justabout&nbsp;anything&nbsp;using the&nbsp;app&nbsp;on&nbsp;your&nbsp;mobile.</span>
                </div>



                <div class="vl"></div>



                <div className="col-md-3 sec-3rd-head col ">
                <br></br>
                <br></br>
                <span className="sec-3rd">GET YOUR APP TODAY</span>
                <br></br>
                    <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home">    <img src={olx3}  className="img-fluid i-f" />  </a>              
                    <a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home">  <img src={olx2}  className="img-fluid i-f"/> </a> 
                </div>


            </div>
        </div>
        )
    }
}

export default FOOTERTOP;