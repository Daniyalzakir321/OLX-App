import React from 'react';
import olx1 from '../images/olx1.png';
import heart from '../images/heart.svg';


class ITEMS extends React.Component {
    render() {
        return (
            <div>
                <div className=" container-fluid " id="card-align">
                    <p id="items">Fresh recommendations</p>
                    <div className="col-md-12 container-fluid ">
                        <div className="row">

                            <ul className="ul-for-card">

                                <li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                       <div id="white-border">
                                        <img className="card-img-top" src="https://www.interfacemedia.com/media/2350/img-vr-tilt-brush-website-hero-shot.jpg" alt="Card image cap" />
                                        </div>
                                      
                                      
                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 590,000</h5>
                                            <p className="card-text c-text">Marla Commercial Shops for sale</p>
                                            <div>
                                                <span className="float-left">SARGHODA PUNJAB</span>
                                                <span className="float-right">DATE</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>

                                <li>

<div className="card" style={{ width: '18rem' }}>
    <img className="card-img-top" src="https://media.glassdoor.com/sqll/5350/img-squarelogo.png" alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title c-title">Rs 590,000</h5>
        <p className="card-text c-text">10 marla commercial shops for sale</p>
        <div>
            <span className="float-left">Location</span>
            <span className="float-right">Date</span>
        </div>
    </div>
</div>

</li>


<li>

<div className="card" style={{ width: '18rem' }}>
    <img className="card-img-top" src="https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9" alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title c-title">Rs 590,000</h5>
        <p className="card-text c-text">10 marla commercial shops for sale</p>
        <div>
            <span className="float-left">Location</span>
            <span className="float-right">Date</span>
        </div>
    </div>
</div>

</li>


<li>

<div className="card" style={{ width: '18rem' }}>
    <img className="card-img-top" src={olx1} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title c-title">Rs 590,000</h5>
        <p className="card-text c-text">10 marla commercial shops for sale</p>
        <div>
            <span className="float-left">Location</span>
            <span className="float-right">Date</span>
        </div>
    </div>
</div>

</li>


<li>

<div className="card" style={{ width: '18rem' }}>
    <img className="card-img-top" src={olx1} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title c-title">Rs 590,000</h5>
        <p className="card-text c-text">10 marla commercial shops for sale</p>
        <div>
            <span className="float-left">Location</span>
            <span className="float-right">Date</span>
        </div>
    </div>
</div>

</li>



<li>

<div className="card" style={{ width: '18rem' }}>
    <img className="card-img-top" src={olx1} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title c-title">Rs 590,000</h5>
        <p className="card-text c-text">10 marla commercial shops for sale</p>
        <div>
            <span className="float-left">Location</span>
            <span className="float-right">Date</span>
        </div>
    </div>
</div>

</li>

<li>

<div className="card" style={{ width: '18rem' }}>
    <img className="card-img-top" src={olx1} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title c-title">Rs 590,000</h5>
        <p className="card-text c-text">10 marla commercial shops for sale</p>
        <div>
            <span className="float-left">Location</span>
            <span className="float-right">Date</span>
        </div>
    </div>
</div>

</li>



                            </ul>


                        </div>
                    </div>



                </div>
            </div>
        )
    }
}

export default ITEMS;