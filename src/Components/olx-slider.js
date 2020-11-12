import React from 'react';
import '../App.css'
import olxslide from '../images/head.jpg';


class OLXSLIDER extends React.Component {
    render() {
        return (
            <div>
                <div className="olxslide">
                    <img src={olxslide}  className="img-fluid"/>
                </div>
            </div>
        )
    }
}

export default OLXSLIDER;