import React, { useState, useEffect } from 'react';
import heart from '../images/heart.svg';
import { db, fire,auth } from './firebase';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function SETTING() {
    const data = useSelector(state => state.user)

    const [itemData, setItemData] = useState([])

    const [user, setUser] = useState(null);
        useEffect(() => {
          auth.onAuthStateChanged(res => {
            if (res) {
              setUser(res)
            }
            else {
              setUser(null)
            }
          })
        }, [])


    return (

        <div className=" container-fluid " id="card-align">
         <p style={{ textAlign: 'center', fontFamily: 'ubuntu', fontWeight: 'bolder', fontSize: 40, marginTop: -10 }}>
                    {(data.UserName || user) ? <>Settings</>
                        : <>Please Login To Continue</>
                    }
                </p>
        </div>
    )
}
