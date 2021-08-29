import React, { useState, useEffect } from 'react';
import heart from '../images/heart.svg';
import { db, fire, storage } from './firebase';
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import { Button, ButtonGroup } from 'react-bootstrap'

export default function ITEMS() {


    const [itemData, setItemData] = useState([])
    const [skeletonScreen, setSkeletonScreen] = useState(true)
    const [i, setI] = useState([]);

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
                    // t: doc.data().TimeStamp,
                }))

            )
            setTimeout(() => {
                setSkeletonScreen(false)
            }, 500);

         storage.ref()// .child(imagesFS.name)
        .getDownloadURL()
        .then((res) => {
            setI(res)
        });
        })

    }, [])
    console.log('storage', i )

    return (
        <div>

            <div className=" container-fluid " id="card-align">
                {<p id="items">Fresh recommendations</p>}
                <div className="col-md-12 col-sm-12 container-fluid ">
                    <div className="row">
                        {/* =============== */}
                        <ul className="ul-for-card">
                            {itemData.map((iData, index) => {
                                return <DATA iData={iData} key={index} skeletonScreen={skeletonScreen} />
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}



// ===========================================================================================

function DATA({ iData, skeletonScreen }) {
    console.log('skeletonScreen', skeletonScreen)
    console.log('daaaaa',iData.i);
    console.log('daaaaa',iData.i.length);

    console.log('daaaaad',iData.i[0]);
    console.log('daaaaad',iData.i[0].length);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSkeletonScreen(false)
    //     }, 3000);    
    // },[])


    return (<>
        {skeletonScreen | iData.name
            ?
            <li>
                <div className="card cccc">  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                    <div id="white-border">
                        <Skeleton className="card-img-top rounded mx-auto d-block" />
                    </div>
                    <div className="card-body" id="card-body">
                        <h5 className="card-title c-title"> <Skeleton /></h5>
                        <p className="card-text c-text" style={{ textTransform: 'capitalize' }} ><Skeleton /></p>
                        <div>
                            <span className="float-left location" style={{ textTransform: 'Uppercase' }}><Skeleton height={10} width={50} /></span>
                            <span className="float-right date"><Skeleton height={10} width={80} /></span>
                        </div>
                    </div>
                </div>
            </li>

            :

            <li>
                <Link to={`/item-details/${iData.c}/${iData.Id}`} >

                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                        <div id="white-border">
                        <img className="card-img-top rounded mx-auto d-block" src={iData.i[0]=='h'?iData.i:`data:image/jpeg;base64,${iData.i[0]}`} alt="Card image cap" />
                            {/* <img className="card-img-top rounded mx-auto d-block" src={iData.i} alt="Card image cap" /> */}
  
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
            </li>
        }        {/*   Skeleton Screen                          */}
    </>)
}




