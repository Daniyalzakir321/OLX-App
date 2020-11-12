import React from 'react';
import '../App.css'
import olx1 from '../images/olx1.png';
import olx2 from '../images/olx2.png';
import olx3 from '../images/olx3.png';
import facebook from '../images/footer-icons/facebook.svg';
import twitter from '../images/footer-icons/twitter.svg';
import youtube from '../images/footer-icons/youtube.svg';
import instagram from '../images/footer-icons/instagram.svg';



class FOOTER extends React.Component {
    render() {
        return (
            <div >
                <div className="container-fluid col-md-12 FOOTER pt-3 pb-4 p-l5" >
                    <div className="row">
                        <div className="col-md-2 pl-5">
                            <ul className="ul">
                                <h6 className="h6">POPULAR&nbsp;CATEGORIES</h6>
                                <li> <a href="#?">Cars </a></li>
                                <li> <a href="#?">Flats for rent </a></li>
                                <li> <a href="#?">Jobs </a></li>
                                <li> <a href="#?">Mobile Phones </a></li>
                            </ul>
                        </div>


                        <div className="col-md-2  ml-5">
                            <ul className="">
                                <h6 className="h6">TRENDING&nbsp;SEARCHES</h6>
                                <li> <a href="#?">Bikes </a></li>
                                <li> <a href="#?">Watches</a></li>
                                <li> <a href="#?">Books</a></li>
                                <li> <a href="#?">Dogs</a></li>
                            </ul>
                        </div>


                        <div className="col-md-2 ml-5">
                            <ul className="ul">
                                <h6 className="h6">ABOUT US</h6>
                                <li> <a href="#?">About OLX Group </a></li>
                                <li> <a href="#?">OLX Blog </a></li>
                                <li> <a href="#?">Contact Us</a></li>
                                <li> <a href="#?">OLX for Businesses</a></li>
                            </ul>
                        </div>





                        <div className="col-md-2 pl-5">
                            <ul className="ul">
                                <h6 className="h6">OLX</h6>
                                <li> <a href="#?">Help</a></li>
                                <li> <a href="#?">Sitemap</a></li>
                                <li> <a href="#?">Legal&nbsp;&&nbsp;Privacy&nbsp;information</a></li>
                            </ul>
                        </div>



                        <div className="col-md-3 pl-5">
                            <ul className="ul ul-img">
                                <h6 className="h6">FOLLOW US</h6>
                                <div>
                                    <a target="_blank" href="https://www.facebook.com/olxpakistan"><img src={facebook} className="svgicon" /></a>
                                    <a target="_blank" href="https://twitter.com/OLX_Pakistan"><img src={twitter} className="svgicon" /></a>
                                    <a target="_blank" href="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ?sub_confirmation=1"><img src={youtube} className="svgicon" /></a>
                                    <a target="_blank" href="https://www.instagram.com/olx.pakistan/"><img src={instagram} className="svgicon" /></a>
                                </div>
                                <br></br>
                                <div>
                                    <a target="_blank" href="https://apps.apple.com/app/olx-pakistan/id1119081665"> <img src={olx3} className="img-fluid-i-f" /> </a>
                                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.olx.pk"> <img src={olx2} className="img-fluid-i-f" /> </a>
                                </div>
                            </ul>
                        </div>





                    </div>








                </div>
            </div>
        )
    }
}

export default FOOTER;