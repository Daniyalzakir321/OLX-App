import React, { useState, useEffect } from 'react';
import heart from '../images/heart.svg';
import { db, fire } from './firebase';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


export default function ITEMS() {


    const [itemData, setItemData] = useState([])

    useEffect(() => {
        // FIREBASE ANALYTICS
        fire.analytics().logEvent({setName:'Home_Screen'})

        db.collection("POST-YOUR-ADS").orderBy('TimeStamp', 'desc').onSnapshot(function (querySnapshot) {
            setItemData(
                querySnapshot.docs.map((doc) => ({
                    Id: doc.id,
                    n: doc.data().Name,
                    // c: doc.data().Category,
                    p: doc.data().Price,
                    i: doc.data().Image,
                    l: doc.data().Location,
                    d: doc.data().Description,
                    dt: doc.data().DateTime,
                    // t: doc.data().TimeStamp,
                }))

            )
        })

    }, [])
    // console.log({ itemData })

    return (
        <div>
    
            <div className=" container-fluid " id="card-align">
                <p id="items">Fresh recommendations</p>
                <div className="col-md-12 container-fluid ml-3 ">
                    <div className="row">
                        {/* =============== */}
                        <ul className="ul-for-card">
                            {itemData.map((iData, index) => {

                                return <li key={index}>
                                    <Link to={{ pathname: "item-details", LinkData: [iData.i, iData.p] }} >
                                        <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                            <div id="white-border">
                                                <img className="card-img-top rounded mx-auto d-block" src={iData.i} alt="Card image cap" />
                                            </div>


                                            <div className="card-body" id="card-body">
                                                <h5 className="card-title c-title">Rs {iData.p}</h5>
                                                <p className="card-text c-text" style={{ textTransform: 'capitalize' }} >{iData.d}</p>
                                                <div>
                                                    <span className="float-left location" style={{ textTransform: 'Uppercase' }}>{iData.l}</span>
                                                    <span className="float-right date">{iData.dt}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            })}

                        </ul>



                    </div>
                </div>


            </div>
        </div>
    )
}


