import React from 'react';
import heart from '../images/heart.svg';
import firebase from './firebase';
import { Link } from 'react-router-dom'



class ITEMS extends React.Component {
    render() {

        let cards = [
            { image: 'https://i.gadgets360cdn.com/large/mi_a3_1565606945266.jpg', price: '590,000', details: 'Marla Commercial Shops for sale', location: 'BAHADURABAD KARACHI', date: '11-14-2020' },
            { image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', price: '590,000', details: 'Marla Commercial Shops for sale', location: 'BAHADURABAD KARACHI', date: '11-14-2020' },
            { image: 'https://images.macrumors.com/t/KOdIjT65nz-SQIWsmFH2g5yDg_o=/1600x0/article-new/2018/06/yahoo-mail-mobile-web-ios.jpg', price: '590,000', details: 'Marla Commercial Shops for sale', location: 'BAHADURABAD KARACHI', date: '11-14-2020' },
            { image: 'https://www.mega.pk/items_images/t_18724.png', price: '590,000', details: 'Marla Commercial Shops for sale', location: 'BAHADURABAD KARACHI', date: '11-14-2020' },
            { image: 'https://cdn.zeebiz.com/sites/default/files/2019/07/31/96521-vivos1.JPG', price: '590,000', details: 'Marla Commercial Shops for sale', location: 'BAHADURABAD KARACHI', date: '11-14-2020' },
            { image: 'https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/main/mobile/mini/hero-img--mobile-mini@2x.fcd250226472.jpg', price: '590,000', details: 'Marla Commercial Shops for sale', location: 'BAHADURABAD KARACHI', date: '11-14-2020' },
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVgznGsWpuDSkVOaWcoKUkYrLm1TPI1TwSzw&usqp=CAU', price: '590,000', details: 'Marla Commercial Shops for sale', location: 'BAHADURABAD KARACHI', date: '11-14-2020' },
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRBQ0Minp48lU3XSiXJPP_xr3uW1xKGlWtXQ&usqp=CAU', price: '590,000', details: 'Marla Commercial Shops for sale', location: 'BAHADURABAD KARACHI', date: '11-14-2020' },
            { image: 'https://photos5.appleinsider.com/gallery/37406-70228-36564-68130-iPhone-12-Dummies-In-Hnad-xl-xl.jpg', price: '590,000', details: 'Marla Commercial Shops for sale', location: 'BAHADURABAD KARACHI', date: '11-14-2020' },
            { image: 'https://images.indianexpress.com/2020/05/iphone-12-jonas-daehnert-759.jpg', price: '590,000', details: 'Marla Commercial Shops for sale', location: 'BAHADURABAD KARACHI', date: '11-14-2020' },

        ]


        return (
            <div>


                <div className=" container-fluid " id="card-align">
                    <p id="items">Fresh recommendations</p>
                    <div className="col-md-12 container-fluid ml-3 ">
                        <div className="row">

                            <ul className="ul-for-card">
                                {cards.map((cards, index) => {

                                    return <li key={index}>
                                        <Link to="/item-details">
                                            <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                                <div id="white-border">
                                                    <img className="card-img-top rounded mx-auto d-block" src={cards.image} alt="Card image cap" />
                                                </div>


                                                <div className="card-body" id="card-body">
                                                    <h5 className="card-title c-title">Rs {cards.price}</h5>
                                                    <p className="card-text c-text"  >{cards.details}</p>
                                                    <div>
                                                        <span className="float-left location">{cards.location}</span>
                                                        <span className="float-right date">{cards.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>



                                })}





                            </ul>


                        </div>
                    </div>



                </div>
            </div>
        )
    }
}

export default ITEMS;