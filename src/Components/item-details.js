import React, { useEffect, useState } from 'react';
import heart from '../images/heart.svg';
import App from '../App';
import { Link, useParams } from 'react-router-dom'
import NAVBARS from './navbar';
import CATEGORIES from './categories';
import FOOTERTOP from './footertop';
import FOOTER from './footer';
import FOOTERBOTTOM from './footerbottom';
import ITEMS from './items';
import DEAR from '../images/dear.webp';
import PHONE from '../images/phone.svg';
import { db } from './firebase';



const ITEMDETAILS = () => {
    // console.log('Start',LinkData)
    // console.log(LinkData[0])

    const [items, setItems] = useState([]);
    const { id, category } = useParams();

    useEffect(() => {
        // RealTime Update
        db.collection("POST-YOUR-ADS").doc(id).onSnapshot(snapshot => (
            setItems(snapshot.data())
        ))
        // No Real Time Update
        // db.collection("POST-YOUR-ADS").doc(id).get()
        //     .then(function (doc) {
        //         setItems({
        //             //   Id: doc.id,
        //             n: doc.data().Name,
        //             c: doc.data().Category,
        //             p: doc.data().Price,
        //             i: doc.data().Image,
        //             l: doc.data().Location,
        //             d: doc.data().Description,
        //             dt: doc.data().DateTime,
        //         })
        //     })
    }, [])

    // console.log("Params===", id)
    // console.log("Params===", items)
    return (
        <div>
            <NAVBARS />
            <CATEGORIES />
            <br />

            <div className="center">
                <h3 id="h1"><b>ITEM DETAILS</b></h3>
            </div>


            <div className="col-md-11 container">
                <div className="row margin">


                    <div className="col-md-8 image-container card-border margin">
                        <span id="card-featured">FEATURED</span>
                        <img className="img-item-details" src={items.Image} alt="Card image cap" />
                    </div>

                    <div className="col-md-4">
                        <div className="row for-margin">

                            <div className="col-md-12 card-border" >

                                <img className="card-heart" src={heart} alt="heart" />
                                <h5 className="card-title card-price">Rs {items.Price}</h5>
                                <p className="card-text card-details"  >{items.Description}</p>
                                <div>
                                    <span className="float-left card-location" style={{textTransform:'uppercase'}}>{items.Location}</span>
                                    <span className="float-right card-date">{items.DateTime}</span>
                                </div>
                            </div>
                            <span>&nbsp;</span>
                            <div className="col-md-12 card-border">
                                <h5 className="card-title Seller-Description">Seller Description</h5>

                                <div className="row">
                                    <img src={DEAR} id="user-img" />
                                    <p className="seller-name">Daniyal Zakir</p>
                                    <br />
                                    <span className="Member-Since-November">Member Since November</span>

                                </div>
                                <br />
                                <button type="button" className="btn btn-secondary  Chat-With-Seller" >Chat With Seller</button>
                                <br />  <br />
                                <div className="row text-center">
                                    <img src={PHONE} id="phone" />
                                    <p id="phone-number">03** *** ****</p>
                                </div>
                                <br />
                            </div>
                            <br />

                        </div>

                    </div>
                    <span>&nbsp;</span>
                    <div className="col-md-12 card-border des" >
                        <h5 className="card-title card-description">Description</h5>
                        <p>{items.Description}</p>
                        <br /><br />
                    </div>

                </div>
            </div>






            <br /><br />
            <br /><br />
            <FOOTERTOP />
            <FOOTER />
            <FOOTERBOTTOM />
        </div>
    )
    // }
}

export default ITEMDETAILS;