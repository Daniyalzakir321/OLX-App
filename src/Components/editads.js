import heart from '../images/heart.svg';
import { db, fire } from './firebase';
import { useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from "react-router-dom";
import FOOTER from '../Components/footer';
import FOOTERBOTTOM from '../Components/footerbottom';
import ARROW from '../arrow.svg';
import LOGO from '../images/olx-logo.png';
import imageToBase64 from 'image-to-base64/browser';


export default function EDITADS() {
    const data = useSelector(state => state.user)

    const [itemData, setItemData] = useState([])

    useEffect(() => {
        // FIREBASE ANALYTICS
        fire.analytics().logEvent({ setName: 'Home_Screen' })

        db.collection("POST-YOUR-ADS").orderBy('TimeStamp', 'desc').onSnapshot(function (querySnapshot) {
            setItemData(
                querySnapshot.docs.map((doc) => ({
                    Id: doc.id,
                    n: doc.data().Name,
                    c: doc.data().Category,
                    p: doc.data().Price,
                    i: doc.data().Image,
                    l: doc.data().Location,
                    d: doc.data().Description,
                    dt: doc.data().DateTime,
                    email: doc.data().UserEmail,
                    lati: doc.data().Latitude,
                    t: doc.data().TimeStamp,
                }))

            )
        })

    }, [])
    console.log('itemData', data.UserEmail, 'itemData', itemData)

    const Delete = (id) => {
        db.collection('POST-YOUR-ADS').doc(id).delete()
            .then(() => {
                alert('✅ Ad Deleted')
            })
            .catch((error) => {
                console.log(error.message);
                alert('⚠️ This Key Is Not Present In Database', error.message)
            })
    }

    return (

        <div className=" container-fluid " id="card-align">
            <div className="col-md-12 container-fluid ml-3 ">

                <p style={{ textAlign: 'center', fontFamily: 'ubuntu', fontWeight: 'bolder', fontSize: 40, marginTop: -10 }}>
                    {(data.UserName) ? <>Edit Your Ads</>
                        : <>Please Login To Continue</>
                    }
                </p>

                {(data.UserEmail) ? <div className="row">
                    {/* =============== */}
                    <ul className="ul-for-card">
                        {itemData.map((iData, index) => {
                            return <li>{iData.email == data.UserEmail ?<>
                                <Link to={`/edit-your-ads/${iData.Id}`} >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                        <div id="white-border">
                                            <img className="card-img-top rounded mx-auto d-block" src={iData.i} alt="Card image cap" />
                                        </div>
                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs {iData.p} </h5>
                                            <p className="card-text c-text" style={{ textTransform: 'capitalize' }} >{iData.d}</p>
                                            <div>
                                                <span className="float-left location" style={{ textTransform: 'Uppercase' }}>{iData.l}</span>
                                                <span className="float-right date">{iData.dt}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <button type="button" onClick={() => { Delete(iData.Id) }}  className="btn btn-secondary POSTADS withwidth" >DELETE AD</button>
                                </>: <></>}
                            </li>
                        })}
                    </ul>
                </div>
                    : <></>
                }
            </div>
        </div>
    )
}




