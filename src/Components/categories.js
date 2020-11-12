import React from 'react';
import '../App.css'

class CATEGORIES extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid categories">
                    <a href="#"> <b>ALL CATEGORIES</b> </a>

                    <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown">
                    </button>
                    <div className="dropdown-menu">
                        <h6 className="dropdown-header" style={{fontSize: 15,fontWeight: 500, color: 'black',}}>Vehicles</h6>
                        <a className="dropdown-item" href="#">Tractors & Trailers</a>
                        <a className="dropdown-item" href="#">Boats</a>
                        <a className="dropdown-item" href="#">Other Vehicles</a>
                        <a className="dropdown-item" href="#">Rickshaw & Chingchi</a>
                        <a className="dropdown-item" href="#">Buses, Vans & Trucks</a>
                        <a className="dropdown-item" href="#">Spare Parts</a>
                        <a className="dropdown-item" href="#">Cars Accessories</a>
                        <a className="dropdown-item" href="#">Cars on Installments</a>
                        <a className="dropdown-item" href="#">Cars</a>

                        <h6 className="dropdown-header" style={{fontSize: 15,fontWeight: 500, color: 'black',}}>Mobiles</h6>
                        <a className="dropdown-item" href="#">Mobile Phones</a>
                        <a className="dropdown-item" href="#">Accessories</a>
                        <a className="dropdown-item" href="#">Tablets</a>
                    </div>

                    <a href="#">Mobile Phones </a>
                    <a href="#">Cars </a>
                    <a href="#">Motorcycles </a>
                    <a href="#">TV - Video - Audio </a>
                    <a href="#">Tablets </a>
                    <a href="#">Land & Plots </a>


                </div>
            </div>
        )
    }
}

export default CATEGORIES;