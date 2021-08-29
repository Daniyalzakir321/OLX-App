// import React, { useState } from 'react';
// import NAVBARS from '../user-login/user-login-nav/user-login-nav';
// import CATEGORIES from '../categories';
// import FOOTERTOP from '../footertop';
// import FOOTER from '../footer';
// import FOOTERBOTTOM from '../footerbottom';
// import { useSelector } from 'react-redux'
// import SETTING from '../setting';
// import EDITADS from '../editads';
// import { Link, useParams } from 'react-router-dom'

// export default function USERLOGIN() {
//     const { id } = useParams();

//     console.log("params", id)
//     const data = useSelector(state => state.user)

//     return (
//         <div>
//             <NAVBARS data={data} />
//             <CATEGORIES />
//             <br /><br />

//             {(id == 'setting') ? <SETTING /> : (id == 'edit') ? <EDITADS /> :
//                 <p style={{ textAlign: 'center', fontFamily: 'ubuntu', fontWeight: 'bolder', fontSize: 40 }}>
//                     {(data.UserName) ? <>You Are Successfully Login <br /> {data.UserName}</>
//                         : <><br /><br /> Please Login To Continue</>
//                     }
//                 </p>

//             }            
//             <br /><br />
//             <br /><br />
//             <br /><br />
//             <FOOTERTOP />
//             <FOOTER />
//             <FOOTERBOTTOM />
//         </div>
//     )
// }


// FIREBASE AUTH
import React, { useState,useEffect } from 'react';
import NAVBARS from '../navbar'
import CATEGORIES from '../categories';
import FOOTERTOP from '../footertop';
import FOOTER from '../footer';
import FOOTERBOTTOM from '../footerbottom';
import { useSelector } from 'react-redux'
import SETTING from '../setting';
import EDITADS from '../editads';
import { Link, useParams } from 'react-router-dom'
import { fire, auth } from '../firebase'

export default function USERLOGIN() {
    const { id } = useParams();

    console.log("params", id)
    const data = useSelector(state => state.user)

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
        <div>
            <NAVBARS />
            <CATEGORIES />
            <br /><br />

            {(id == 'setting') ? <SETTING /> : (id == 'edit') ? <EDITADS /> :
                <p style={{ textAlign: 'center', fontFamily: 'ubuntu', fontWeight: 'bolder', fontSize: 40 }}>
                    {(user) ? <>You Are Successfully Login <br /> {user.displayName?user.displayName:user.email}</>
                        : <><br /><br /> Please Login To Continue</>
                    }
                </p>

            }            
            <br /><br />
            <br /><br />
            <br /><br />
            <FOOTERTOP />
            <FOOTER />
            <FOOTERBOTTOM />
        </div>
    )
}