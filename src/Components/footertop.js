import React from 'react';
import '../App.css'
import olx1 from '../images/olx1.png';
import olx2 from '../images/olx2.png';
import olx3 from '../images/olx3.png';



class FOOTERTOP extends React.Component {
    render() {
        return (
            <div className="container col-md-12 col-sm-12" id="foottop">
                <div className="row">

                    <div className="col-md-5 col-sm-5 sec-1st-head ">
                        <div>
                            <img src={olx1} className="img" />
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4 sec-2nd-head">
                        <br/><br/>
                        <span className="sec-2nd">TRY THE OLX APP</span>
                        <br/><br/>
                        <span className="sec-2nd-b">Buy,&nbsp;sell&nbsp;and find just about anything using the app on your mobile.</span>
                    </div>

                    <div className="col-md-3 col-sm-3 sec-3rd-head row">
                        <div className="vl">
                        </div>
                        <div>
                            <span className="sec-3rd ">GET YOUR APP TODAY</span>
                            <br/><br/>
                            <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home">    <img src={olx3} className="img-fluid i-f" />  </a>
                            <a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home">  <img src={olx2} className="img-fluid i-f" /> </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default FOOTERTOP;