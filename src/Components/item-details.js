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
import { db, storage } from './firebase';
import MapContainer from './map';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ITEMDETAILS = () => {

    const [items, setItems] = useState([]);
    const { id, category } = useParams();
    const {Image}=items
    console.log('====================',Image)

    // coverting firebase array to obj in order to render data in front-end
    const obj = Object.assign({},Image)
    // console.log('====================',obj)
    console.log('====================',obj.[0])
       
        const pp=[{
            original: items.Image,
            thumbnail: items.Image,
        }]

        const ot=(d)=>{
            return {
            original: `data:image/jpeg;base64,${obj.[d]}`,
            thumbnail: `data:image/jpeg;base64,${obj.[d]}`,
            }
        }
        const oo=  [
            ot(0),
            ot(1),
            ot(2),
            ot(3),
            ot(4),
      ]
     
        const images = obj.[0]=='h' && obj.[1]=='t' && obj.[3]=='p' && items.Image? pp:oo   
        
        // const oo=  [{
        //     original: `data:image/jpeg;base64,${obj.[0]}`,
        //     thumbnail: `data:image/jpeg;base64,${obj.[0]}`,
        // },
        // {
        //     original: `data:image/jpeg;base64,${obj.[1]}`,
        //     thumbnail: `data:image/jpeg;base64,${obj.[1]}`,
        // },
        // {
        //     original: `data:image/jpeg;base64,${obj.[2]}`,
        //     thumbnail: `data:image/jpeg;base64,${obj.[2]}`,
        // }]
    // const images = [
    //     {
    //       original: obj.[0]=='h'?items.Image:`data:image/jpeg;base64,${obj.[0]}`,
    //       thumbnail: obj.[0]=='h'?items.Image:`data:image/jpeg;base64,${obj.[0]}`,
    //     },
    //   ]

    // const images = [
    //     {
    //       original: items.Image,
    //       thumbnail: items.Image,
    //     },
    //   ];

 
    useEffect(() => {
        // RealTime Update
        db.collection("POST-YOUR-ADS").doc(id).onSnapshot(snapshot => {
            setItems(snapshot.data())
          
            // storage.ref(`${id}/`)
            // .getDownloadURL()
            // .then((res) => {
            //     setI(res)
            // });
                // storage.ref(`${id}/`).listAll().then( function (result){
                //     result.items.forEach( function (res) {
                //       console.log("image reference" + res.toString())
                //         setI(res.toString())
                //     });
                //    }).catch((error)=> {
                //      console.log(error);
                //    });
        })
         
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
    // console.log('Storage==', i)
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
                        <div>
                        <ImageGallery  items={images} 
                        thumbnailPosition='bottom'
                        infinite={false}
                        showPlayButton={false}
                        showIndex={true}
                        // showBullets={true}
                         />
                        </div>
                        
                        {/* <Carousel  autoFocus={true}>
                            <div >
                                <img src={items.Image} className="img-item-details" />
                            </div>
                            <div>
                                <img src={items.Image} className="img-item-details " />
                            </div>
                            <div>
                                <img src={items.Image} className="img-item-details" />
                            </div>
                        </Carousel> */}

                        {/* <img className="img-item-details" src={items.Image} alt="Card image cap" /> */}
                    </div>

                    <div className="col-md-4">
                        <div className="row for-margin">

                            <div className="col-md-12 card-border" >

                                <img className="card-heart" src={heart} alt="heart" />
                                <h5 className="card-title card-price">Rs {items.Price}</h5>
                                <p className="card-text card-details"  >{items.Description}</p>
                                <div>
                                    <span className="float-left card-location" style={{ textTransform: 'uppercase' }}>{items.Location}</span>
                                    <span className="float-right card-date">{items.DateTime}</span>
                                </div>
                            </div>
                            <span>&nbsp;</span>
                            <div className="col-md-12 card-border">
                                <h5 className="card-title Seller-Description">Seller Description</h5>

                                <div className="row">
                                    <img src={DEAR} id="user-img" />
                                    <p className="seller-name">{items.UserName? items.UserName:'Daniyal Zakir'}</p>
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

                            <span>&nbsp;</span>
                            <div className="col-md-12 card-border">
                                <h5 className="card-title Seller-Description">Seller Description</h5>
                                <div>
                                    {/* <MapContainer 
                                    Longitude={items.Longitude}
                                    Latitude={items.Latitude}  
                                     style={{ height: "100%", width: '90%' }} /> */}
                                    <iframe name="gMap" width="100%" height="100%" frameborder="0" 
                                    src={`https://www.google.com/maps/embed/v1/place?q=${items.Latitude},${items.Longitude}&zoom=18&key=AIzaSyDBaX7bQldoyozJraanMGzSEdXx4Qaikb4`} allowfullscreen></iframe>
                                </div>                               
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