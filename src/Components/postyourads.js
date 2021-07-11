import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { db } from './firebase';
import firebase from 'firebase/app';
import FOOTER from '../Components/footer';
import FOOTERBOTTOM from '../Components/footerbottom';
import ARROW from '../arrow.svg';
import LOGO from '../images/olx-logo.png';
import { useSelector } from 'react-redux'
import imageToBase64 from 'image-to-base64/browser';


export default function POSTYOURADS(props) {
    const data = useSelector(state => state.user)
    const [userEmail, setUserEmail] = useState('')
    console.log("data", data)
    const history=useHistory();
 
    useEffect(() => {
   if(data.UserEmail){
        setUserEmail(data.UserEmail)
    }
    else{
        setUserEmail("Not Registered")
    }}, [])

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState([])
    const [imageUpload, setImageUpload] = useState([])
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')

    const uploadImage = (e) => {
        e.preventDefault()
        let arr = []
        const file = e.target.files
        console.log('allfiles==Length=====>', file.length)

        if (file.length > 0 && file.length < 4) {
        setImage(e.target.value)
            for (var i = 0; i < file.length; i++) {
                imageToBase64(file[i])
                    .then(res => {
                        console.log('allfiles=======>', res, "allfiles=======>");
                        arr.push(res)
                    })
                    .catch(e => {
                        console.log('ERROR==>', e)
                    })
            }
        }
        else {
            alert('Can Not Upload More Then 3 Files')
        }

        // if(file.length>1){
        // arr= file.map(d=> {return (d)})
        // } 

        // imageToBase64(file[0], file[1]) 
        //     .then(res => {
        //         console.log('allfiles=======>',res+"allfiles=======>") ;
        //         // arr.push(res)
        //     })
        //     .catch(e => {
        //         console.log('ERROR==>',e) 
        //     })
        console.log('allfiles========>', arr)
        setImageUpload(arr)
    }
    console.log('allfiles===', imageUpload)

    // Date Time
    var today = new Date();
    var dateTime = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + "    " +
        today.getHours() + ":" + today.getMinutes();


    const handleSumit = (e) => {
        e.preventDefault()
        console.log(e)

        db.collection('POST-YOUR-ADS').add({
            Name: name,
            Category: category,
            Price: price,
            Image: imageUpload,
            Location: location,
            Description: description,
            DateTime: dateTime,
            Latitude: lat,
            Longitude: long,
            UserEmail: userEmail,
            UserName: (data.UserName),
            UserPhoto:(data.UserPhoto),
            TimeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
            .then(() => {
                console.log('Summited');
                // if(!getLocation() && !lat && !long){
                //     alert('✅ Please Enable Location')
                // }
                // else{
                setName('')
                setCategory('')
                setPrice('')
                setImage('')
                setLocation('')
                setDescription('')
                setImage([])
                setImageUpload([])
                alert('✅ Successfully Posted')
                history.goBack()
                // }
            })
            .catch((error) => {
                console.log(error.message);
                alert('⚠️ ' + error.message)
            });

    }



    getLocation()

    const x = []
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        var latlon = position.coords.latitude + "," + position.coords.longitude;
        var map = `https://maps.googleapis.com/maps/api/staticmap?center=
      "+${latlon}+"&zoom=14&size=400x300&sensor=false&key=AIzaSyAZtQ4fjifW2oL2EV9bkH7DPnVxY8YsXsM`;
        console.log("ll", latlon)
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
    }

    return (
        <div>
            <div className="container-fluid col-md-12 head head-again">
                <div className="row">

                    <Link to="/">
                        <img src={ARROW} id="arrow" />
                    </Link>

                    <div className="col-md-1">

                        <Link to="/">
                            <img src={LOGO} id="logo" />
                        </Link>

                    </div>

                </div>
            </div>

            <div className="container-fluid col-md-12">
                <div className="col">
                    <br></br>    <br></br>

                    <div className="center">
                        <h3 id="h1"><b>POST YOUR AD</b></h3>
                    </div>

                    <div className="container-fluid col-md-10 bg-color-for-ads ">

                        <form onSubmit={handleSumit}>
                            <br></br>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control text-capitalize" id="inputEmail3" placeholder="Item name" value={name} onChange={(e) => { setName(e.target.value) }} required />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Category:</label>
                                <div className="col-sm-10">
                                    <select className="form-control" value={category} onChange={(e) => { setCategory(e.target.value) }} required >
                                        <option>Select item category </option>
                                        <option>Mobile Phones</option>
                                        <option>Cars </option>
                                        <option>Motorcycles </option>
                                        <option>Tablets </option>
                                        <option>TV - Video - Audio </option>
                                        <option>Select item category</option>
                                        <option>Land & Plots </option>
                                    </select>
                                </div>
                            </div>


                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Price:</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control text-capitalize" id="inputEmail3" placeholder="Item price in Rs." value={price} onChange={(e) => { setPrice(e.target.value) }} required />
                                </div>
                            </div>


                            {/* <div className="form-group row">
                                <label htmlFor="p_file" className="col-sm-2 col-form-label">Image:</label>
                                <div className="col-sm-10">
                                    <input type="file" accept="image/png, image/jpeg" className="form-control-sm text-capitalize" id="inputEmail3" placeholder="Image url" multiple
                                        value={image} onChange={(e) => { uploadImage(e) }} required />
                                </div>
                            </div> */}
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Image:</label>
                                <div className="col-sm-10">
                                    <input type="url" className="form-control" id="inputEmail3" placeholder="Image url"
                                        value={imageUpload} onChange={(e) => { setImageUpload(e.target.value) }} required />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Location:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control text-capitalize" id="inputPassword3" placeholder="Location" value={location} onChange={(e) => { setLocation(e.target.value) }} required />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Description:</label>
                                <div className="col-sm-10">
                                    <textarea class="form-control text-capitalize" id="exampleFormControlTextarea1" rows="3" placeholder="Item description" value={description} onChange={(e) => { setDescription(e.target.value) }} required></textarea>
                                </div>
                            </div>


                            <div className="form-group row">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                    <Link onClick={()=>{history.goBack()}}>
                                        <button type="button" className="btn btn-secondary  POSTADS" >CANCEL</button>
                                    </Link>
                                    <button type="submit" className="btn btn-secondary float-right POSTADS" >POST AD</button>

                                </div>
                            </div>

                        </form>

                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
            <FOOTER />
            <FOOTERBOTTOM />
        </div>
    )
}




