import React from 'react';
import '../App.css'

class CATEGORIES extends React.Component {
    render() {
        return (
            <div className="">
                <div className="container-fluid categories">
                    <a href="#"> <b>ALL CATEGORIES</b> </a>

                    <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown">
                    </button>
                    <div className="dropdown-menu"  style={{ marginLeft: -110, padding: 20, }}>
                        < div style={{ display: 'flex'}}>
                            < div>

                                <h6 className="dropdown-header" style={{ fontSize: 15, fontWeight: 500, color: 'black', }}>Vehicles</h6>
                                <a className="dropdown-item" href="#">Tractors & Trailers</a>
                                <a className="dropdown-item" href="#">Boats</a>
                                <a className="dropdown-item" href="#">Other Vehicles</a>
                                <a className="dropdown-item" href="#">Rickshaw & Chingchi</a>
                                <a className="dropdown-item" href="#">Buses, Vans & Trucks</a>
                                <a className="dropdown-item" href="#">Spare Parts</a>
                                <a className="dropdown-item" href="#">Cars Accessories</a>
                                <a className="dropdown-item" href="#">Cars on Installments</a>
                                <a className="dropdown-item" href="#">Tractors & Trailers</a>

                                <h6 className="dropdown-header" style={{ fontSize: 15, fontWeight: 500, color: 'black', }}>Mobiles</h6>
                                <a className="dropdown-item" href="#">Mobile Phones</a>
                                <a className="dropdown-item" href="#">Accessories</a>
                                <a className="dropdown-item" href="#">Tablets</a>
                            </div>
                            

                           < div>
                                <h6 className="dropdown-header" style={{ fontSize: 15, fontWeight: 500, color: 'black', }}>Electronics & Home Appliances</h6>
                                <a className="dropdown-item" href="#">Computers & Accessoriess</a>
                                <a className="dropdown-item" href="#">Generators, UPS & Power Solutions</a>
                                <a className="dropdown-item" href="#">Kitchen Appliances</a>
                                <a className="dropdown-item" href="#">Fridges & Freezers</a>
                                <a className="dropdown-item" href="#">AC & Coolers</a>
                                <a className="dropdown-item" href="#">Washing Machines & Dryers</a>
                                <a className="dropdown-item" href="#">Computers & Accessoriess</a>
                                <a className="dropdown-item" href="#">TV - Video - Audio</a>
                                <a className="dropdown-item" href="#">Other Home Appliances</a>

                                <h6 className="dropdown-header" style={{ fontSize: 15, fontWeight: 500, color: 'black', }}>Property for Sale</h6>
                                <a className="dropdown-item" href="#">Land & Plots</a>
                                <a className="dropdown-item" href="#">Apartments & Flats</a>
                                <a className="dropdown-item" href="#">Houses</a>
                            </div>


                            < div>
                                <h6 className="dropdown-header" style={{ fontSize: 15, fontWeight: 500, color: 'black', }}>Animals</h6>
                                <a className="dropdown-item" href="#">Pet Food & Accessories</a>
                                <a className="dropdown-item" href="#">Fish & Aquariums</a>
                                <a className="dropdown-item" href="#">Hens & Aseel</a>
                                <a className="dropdown-item" href="#">Dogs</a>
                                <a className="dropdown-item" href="#">Horses</a>
                                <a className="dropdown-item" href="#">Livestock</a>
                                <a className="dropdown-item" href="#">Birds</a>
                                <a className="dropdown-item" href="#">Horses</a>

                                <a className="dropdown-item" href="#">Other Animals</a>

                                <h6 className="dropdown-header" style={{ fontSize: 15, fontWeight: 500, color: 'black', }}>Bikes</h6>
                                <a className="dropdown-item" href="#">Motorcycles</a>
                                <a className="dropdown-item" href="#">Spare Parts</a>
                                <a className="dropdown-item" href="#">Bicycles</a>
                            </div>

                            < div>
                                <h6 className="dropdown-header" style={{ fontSize: 15, fontWeight: 500, color: 'black', }}>Fashion & Beauty</h6>
                                <a className="dropdown-item" href="#">Accessoriess</a>
                                <a className="dropdown-item" href="#">Clothes</a>
                                <a className="dropdown-item" href="#">Footwear</a>
                                <a className="dropdown-item" href="#">Jewellery</a>
                                <a className="dropdown-item" href="#">AC & Coolers</a>
                                <a className="dropdown-item" href="#">Watches</a>
                                <a className="dropdown-item" href="#">Lawn & Pret</a>
                                <a className="dropdown-item" href="#">Couture</a>
                                <a className="dropdown-item" href="#">Other Fashion</a>

                                <h6 className="dropdown-header" style={{ fontSize: 15, fontWeight: 500, color: 'black', }}>Property for Sale</h6>
                                <a className="dropdown-item" href="#">Land & Plots</a>
                                <a className="dropdown-item" href="#">Apartments & Flats</a>
                                <a className="dropdown-item" href="#">Houses</a>
                            </div>

                            < div>
                                <h6 className="dropdown-header" style={{ fontSize: 15, fontWeight: 500, color: 'black', }}> Services</h6>
                                <a className="dropdown-item" href="#">Education & Classes</a>
                                <a className="dropdown-item" href="#">Computer Repair</a>
                                <a className="dropdown-item" href="#">Travel & Visa</a>
                                <a className="dropdown-item" href="#">Car Rental</a>
                                <a className="dropdown-item" href="#">Drivers & Taxi</a>
                                <a className="dropdown-item" href="#">Web Development</a>
                                <a className="dropdown-item" href="#">Other Services</a>
           
                                <h6 className="dropdown-header" style={{ fontSize: 15, fontWeight: 500, color: 'black', }}>Event Services</h6>
                                <a className="dropdown-item" href="#">Health & Beauty</a>
                                <a className="dropdown-item" href="#">Maids & Domestic Help</a>
                                <a className="dropdown-item" href="#">Movers & Packers</a>
                            </div>

                        </div>
                    </ div>

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