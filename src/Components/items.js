import React from 'react';
import heart from '../images/heart.svg';
import firebase from './firebase';
import {InputGroup, Button} from 'react-bootstrap'


class ITEMS extends React.Component {
    render() {

        // var a=document.getElementById("a")
        // var b=document.getElementById("b")
        // var c=document.getElementById("c")
        // var d=document.getElementById("d")
        
        // function adding(){
        // firebase.database().ref("Database/"+a.value).set({
        //     Id: a.value,
        //     Name: b.value,
        //     Mail: c.value,
        //     Remarks: d.value
        // })
        // a.value=""
        // b.value=""
        // c.value=""
        // d.value=""
        // }



        return (
            <div>
                {/* <input type="text" id="a"/>
                <input type="text" id="b"/>
                <input type="text" id="c"/>
                <input type="text" id="d"/> 
                <button onClick={adding()}>clivvk</button>  */}
                
                <div className=" container-fluid " id="card-align">
                    <p id="items">Fresh recommendations</p>
                    <div className="col-md-12 container-fluid ml-3 ">
                        <div className="row">

                            <ul className="ul-for-card">

                                <li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                        <div id="white-border">
                                            <img className="card-img-top rounded mx-auto d-block" src="https://i.gadgets360cdn.com/large/mi_a3_1565606945266.jpg" alt="Card image cap" />
                                        </div>


                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 590,000</h5>
                                            <p className="card-text c-text"  >Marlaxdfffffgggggffdgfdgfsssdddddssaaaaa</p>
                                            <div>
                                                <span className="float-left location">SARGHODA PUNJAB</span>
                                                <span className="float-right date">DATE</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>



                                <li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                        <div id="white-border">
                                            <img className="card-img-top" src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Card image cap" />
                                        </div>


                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 590,000</h5>
                                            <p className="card-text c-text">Marla Commercial Shops for sale</p>
                                            <div>
                                                <span className="float-left location">SARGHODA PUNJAB</span>
                                                <span className="float-right date">DATE</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>


                                <li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                        <div id="white-border">
                                            <img className="card-img-top" src="https://images.macrumors.com/t/KOdIjT65nz-SQIWsmFH2g5yDg_o=/1600x0/article-new/2018/06/yahoo-mail-mobile-web-ios.jpg" alt="Card image cap" />
                                        </div>


                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 590,000</h5>
                                            <p className="card-text c-text">Marla Commercial Shops for sale</p>
                                            <div>
                                                <span className="float-left location">SARGHODA PUNJAB</span>
                                                <span className="float-right date">DATE</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>

                                <li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                        <div id="white-border">
                                            <img className="card-img-top" src="https://www.mega.pk/items_images/t_18724.png" alt="Card image cap" />
                                        </div>


                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 590,000</h5>
                                            <p className="card-text c-text">Marla Commercial Shops for sale</p>
                                            <div>
                                                <span className="float-left location">SARGHODA PUNJAB</span>
                                                <span className="float-right date">DATE</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>

                                <li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                        <div id="white-border">
                                            <img className="card-img-top" src="https://cdn.zeebiz.com/sites/default/files/2019/07/31/96521-vivos1.JPG" alt="Card image cap" />
                                        </div>


                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 590,000</h5>
                                            <p className="card-text c-text">Marla Commercial Shops for sale</p>
                                            <div>
                                                <span className="float-left location">SARGHODA PUNJAB</span>
                                                <span className="float-right date">DATE</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>


                                <li >

<div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
   <div id="white-border">
    <img className="card-img-top" src="https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/main/mobile/mini/hero-img--mobile-mini@2x.fcd250226472.jpg" alt="Card image cap" />
    </div>
  
  
    <div className="card-body" id="card-body">
        <h5 className="card-title c-title">Rs 590,000</h5>
        <p className="card-text c-text">Marla Commercial Shops for sale</p>
        <div>
            <span className="float-left location">SARGHODA PUNJAB</span>
            <span className="float-right date">DATE</span>
        </div>
    </div>
</div>

</li>



                             <li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                       <div id="white-border">
                                        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVgznGsWpuDSkVOaWcoKUkYrLm1TPI1TwSzw&usqp=CAU" alt="Card image cap" />
                                        </div>
                                      
                                      
                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 590,000</h5>
                                            <p className="card-text c-text">Marla Commercial Shops for sale</p>
                                            <div>
                                                <span className="float-left location">SARGHODA PUNJAB</span>
                                                <span className="float-right date">DATE</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>


                                <li >

<div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
   <div id="white-border">
    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRBQ0Minp48lU3XSiXJPP_xr3uW1xKGlWtXQ&usqp=CAU" alt="Card image cap" />
    </div>
  
  
    <div className="card-body" id="card-body">
        <h5 className="card-title c-title">Rs 590,000</h5>
        <p className="card-text c-text">Marla Commercial Shops for sale</p>
        <div>
            <span className="float-left location">SARGHODA PUNJAB</span>
            <span className="float-right date">DATE</span>
        </div>
    </div>
</div>

</li>




<li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                       <div id="white-border">
                                        <img className="card-img-top" src="https://cdn.zeebiz.com/sites/default/files/2019/07/31/96521-vivos1.JPG" alt="Card image cap" />
                                        </div>
                                      
                                      
                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 590,000</h5>
                                            <p className="card-text c-text">Marla Commercial Shops for sale</p>
                                            <div>
                                                <span className="float-left location">SARGHODA PUNJAB</span>
                                                <span className="float-right date">DATE</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>




                                <li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                       <div id="white-border">
                                        <img className="card-img-top" src="https://img.pixelz.com/blog/use-smartphone-to-capture-high-quality-product-images/iphone-setup-product-photography-cover.jpg?w=1000" alt="Card image cap" />
                                        </div>
                                      
                                      
                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 590,000</h5>
                                            <p className="card-text c-text">Marla Commercial Shops for sale</p>
                                            <div>
                                                <span className="float-left location">SARGHODA PUNJAB</span>
                                                <span className="float-right date">DATE</span>
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