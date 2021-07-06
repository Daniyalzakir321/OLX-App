import React from 'react';
import pagenotfound from '../images/pagenotfound.PNG';
import { Link } from 'react-router-dom';



export default function PAGENOTFOUND() {
    return (
        <div style={{textAlign:'center',fontFamily:'ubuntu', paddingTop:150}}>
            <img src={pagenotfound} />
            <p>Page Not Found &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/">Go To Home Page</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
    )
}
