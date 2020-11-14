import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import FOOTER from '../Components/footer';
import FOOTERBOTTOM from '../Components/footerbottom';
import ARROW from '../arrow.svg';
import LOGO from '../images/olx-logo.png';



class POSTYOURADS extends React.Component {
    render() {

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


                            <form>
                                <br></br>
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputEmail3" placeholder="Item name" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Category:</label>
                                    <div className="col-sm-10">
                                        <select className="form-control">
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
                                        <input type="number" className="form-control" id="inputEmail3" placeholder="Item price in Rs." />
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Image:</label>
                                    <div className="col-sm-10">
                                        <input type="url" className="form-control" id="inputEmail3" placeholder="Image url" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Location:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputPassword3" placeholder="Location" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Description:</label>
                                    <div className="col-sm-10">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Item description"></textarea>
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
}

export default POSTYOURADS;
