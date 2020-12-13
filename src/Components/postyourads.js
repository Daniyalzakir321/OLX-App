import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {db} from './firebase';
import firebase from 'firebase/app';
import FOOTER from '../Components/footer';
import FOOTERBOTTOM from '../Components/footerbottom';
import ARROW from '../arrow.svg';
import LOGO from '../images/olx-logo.png';


export default function POSTYOURADS() {

    // const aa=()=>{
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    // }

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
            Image: image,
            Location: location,
            Description: description,
            DateTime: dateTime,
            TimeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
            .then(() => {
                console.log('Summited');
                setName('')
                setCategory('')
                setPrice('')
                setImage('')
                setLocation('')
                setDescription('')
                alert('✅ Successfully Posted')
            })
            .catch((error) => {
                console.log(error.message);
                alert('⚠️ ' + error.message)
            });

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


                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Image:</label>
                                <div className="col-sm-10">
                                    <input type="url" className="form-control text-capitalize" id="inputEmail3" placeholder="Image url" value={image} onChange={(e) => { setImage(e.target.value) }} required />
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
                                    <Link to="/">
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





