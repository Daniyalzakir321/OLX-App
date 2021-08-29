import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { db, storage, auth } from './firebase';
import firebase from 'firebase/app';
import FOOTER from '../Components/footer';
import FOOTERBOTTOM from '../Components/footerbottom';
import ARROW from '../arrow.svg';
import LOGO from '../images/olx-logo.png';
import { useSelector } from 'react-redux'
import imageToBase64 from 'image-to-base64/browser';
import Swal from 'sweetalert2'

export default function POSTYOURADS(props) {
    const data = useSelector(state => state.user)

    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(res => {
            if (res) {
                setUser(res)
            }
            else {
                setUser(null);
            }
        })
    }, [])

    // console.log("data", data)
    const history = useHistory();

    const swAlert = (text) => {
        Swal.fire({
            title: `${text}`,
            confirmButtonColor: '#2E3235',
            focusConfirm: true,
            confirmButtonText: ' OK ',
        })
    }

    useEffect(() => {
        getLocation()
    }, [])

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState()
    const [imageUploadError, setImageUploadError] = useState(null)
    const [loginError, setLoginError] = useState(null)

    // const [imageUpload, setImageUpload] = useState([])
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')

    const [base64, setBase64] = useState([]);
    const uploadImage = (e) => {
        //   e.preventDefault();
        setImage(e.target.files.length)
        console.log("file", e.target.files.length);
        console.log("file", e.target.files);
        setBase64([])
        let file = e.target.files;
        if (file.length >= 5) {
            setImageUploadError(null)
            for (var i = 0; i < file.length; i++) {
                if (file[0]) {
                    const reader = new FileReader();
                    reader.onload = _handleReaderLoaded
                    reader.readAsBinaryString(file[i])
                }
            }
        }
        else {
            setImageUploadError('Upload upto 5 images')
            setBase64([])
        }
    }

    const _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result;
        setBase64((prevState) => [...prevState, btoa(binaryString)])
    }
    // console.log("==========>>" + base64 + "==========>>")
    // console.log("==========>>" + image + "==========>>")

    // const [im, setIm] = useState()
    // const [img, setImg] = useState([])
    // const uploadImage = (e) => {
    //     e.preventDefault()
    // const file = e.target.files
    // console.log('allfiles==Length=====>', file.length)
    // console.log('allfiles==Length=====>', file)
    // let newImages=[]
    // // if (file.length > 0 && file.length < 4) {
    //     for (var i = 0; i < file.length; i++) {
    //         imageToBase64(file[i])
    //             .then(([res1])  => {
    //                 // console.log('allfiles=======>', res1, "allfiles=======>")
    //                 // console.log('allfiles=======>', res2, "allfiles=======>")
    //                 console.log('allfiles=======>', res1, "allfiles=======>")

    // setIm(res)
    // setImage([...im, res])
    // newImages= res
    // setImg((prevState)=>[...prevState,newImages])

    // newImages= file[i]
    // newImages['Id']=Math.random()
    // setImg((prevState)=>[...prevState,newImages])
    // console.log('allfiles=======>',newImages)
    // console.log('allfiles====img===>',img)
    //                     })
    //                     .catch(e => {
    //                         console.log('ERROR==>', e)
    //                     })
    //             }
    //         // }
    //         // var reader = new FileReader();
    //         // else {
    //         //     alert('Can Not Upload More Then 3 Files')
    //         // }
    // //         const ii=img.map((d)=>{return d})
    // // console.log('allfiles====iii===>',ii)

    // console.log('allfiles====img===>',img)
    // console.log('allfiles=====new==>',newImages)

    // if(file.length>1){
    // arr= file.map(d=> {return (d)})
    // } 

    // imageToBase64(file[0], file[1]) 
    //     .then(res => {
    //         console.log('allfiles=======>',res+"allfiles=======>") ;
    //         // arr.push(res)
    //     })
    //     .catch(e => {
    //         console.log('ERROR==>',e) 
    //     })
    // console.log('allfiles========>', arr)
    // setImageUpload(arr)
    // }
    // console.log('allfiles===', imageUpload)

    // Date Time
    var today = new Date();
    var dateTime = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + "    " +
        today.getHours() + ":" + today.getMinutes();

    //==== Upload Image to Firebase StorageBucket ========
    // const [imagesFS, setImagesFS] = useState([]);
    // const [urls, setUrls] = useState([]);
    // const [progress, setProgress] = useState(0);


    // const uploadImage = (e) => {
    //     e.preventDefault()
    //     for (let i = 0; i < e.target.files.length; i++) {
    //         const newImage = e.target.files[i];
    //         newImage["id"] = Math.random();
    //         setImagesFS((prevState) => [...prevState, newImage]);
    //     }
    // };
    // const handleUpload = (id) => {
    //     const promises = [];
    //     imagesFS.map((image) => {
    //     //   const uploadTask = storage.ref(`${name}-${category}/${image.name}`).put(image);
    //     const uploadTask = storage.ref(`${id}/${image.name}`).put(image);
    //       promises.push(uploadTask);
    //       uploadTask.on(
    //         "state_changed",
    //         (snapshot) => {
    //           const progress = Math.round(
    //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //           );
    //           setProgress(progress);
    //         },
    //         (error) => {
    //           console.log(error);
    //         },
    // async () => {
    //   await storage
    //     .ref("images")
    //     .child(imagesFS.name)
    //     .getDownloadURL()
    //     .then((urls) => {
    //       setUrls((prevState) => [...prevState, urls]);
    //     });
    // }
    //       );
    //     });

    //     Promise.all(promises)
    //       .then(() => alert("All images uploaded"))
    //       .catch((err) => console.log(err));
    //   };

    //   console.log("images: ", imagesFS);
    //   console.log("urls", urls);
    // ===============
    const [loading, setLoading] = useState(null)
    const handleSumit = (e) => {
        e.preventDefault()
        console.log(e)
        setLoading(true)
        // handleUpload()
        if (image >= 5) {
            if (!getLocation() && !lat && !long) {
                swAlert('📍 Enable Browser Location To Post Ad')
                setLoading(null)

            } else {
                db.collection('POST-YOUR-ADS').add({
                    Name: name,
                    Category: category,
                    Price: price,
                    Image: base64,
                    Location: location,
                    Description: description,
                    DateTime: dateTime,
                    Latitude: lat,
                    Longitude: long,
                    UserEmail: (data.UserEmail ? data.UserEmail : user ? user.email : 'Not Registered'),
                    UserName: (data.UserName ? data.UserName : user ? user.displayName : 'Not Registered'),
                    UserPhoto: (data.UserPhoto ? data.UserPhoto : user ? user.photoURL : 'Not Registered'),
                    TimeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                })
                    .then((doc) => {
                        console.log('Summited==', doc.id);
                        setLoading(null)
                        // handleUpload(doc.id)
                        setName('')
                        setCategory('')
                        setPrice('')
                        // setImage('')
                        setLocation('')
                        setDescription('')
                        setBase64([])
                        setLoginError(null)
                        // setImage([])
                        // setImageUpload([])
                        Swal.fire({
                            title: 'Ad Posted Successfully',
                            icon: 'success',
                            confirmButtonColor: '#2E3235',
                        })
                        // history.goBack()
                    })
                    .catch((error) => {
                        console.log(error.message);
                        setLoading(null)
                        if (error.message == "Missing or insufficient permissions.") {
                            setLoginError('⚠️ You Need To Login, To Post  Ad')
                            //   alert('⚠️ ' + 'Login to Post an Ad') 
                        }
                        else {
                            swAlert('⚠️ ' + error.message)
                        }
                    });
            }
        }
        else {
            swAlert('Upload upto 5 images')
            setBase64([])
        }
    }


    getLocation()
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation
                .getCurrentPosition(res => {
                    var crd = res.coords;
                    console.log('Your current position is:');
                    console.log(`Latitude : ${crd.latitude}`);
                    console.log(`Longitude: ${crd.longitude}`);
                    console.log(`More or less ${crd.accuracy} meters.`);
                    setLat(crd.latitude)
                    setLong(crd.longitude)
                }, err => {
                    console.log(`ERROR(${err.code}): ${err.message}`);
                }, {
                    enableHighAccuracy: true,
                    //   timeout: 10000,
                    //   maximumAge: 5
                });
        }

    }

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
                    <br></br>
                    {loginError && <div class="alert alert-danger" role="alert">
                        {loginError}. <Link to="/login-signup" >&nbsp;Login To Continue</Link>
                    </div>
                    }

                    <br></br>

                    <div className="center">
                        <h3 id="h1"><b>POST YOUR AD</b></h3>
                    </div>

                    <div className="container-fluid col-md-10 bg-color-for-ads ">

                        {loading ?
                            <div className="d-flex justify-content-center spins">
                                <div className="spinner-grow  mt-10" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            </div>
                            :
                            <form onSubmit={handleSumit}>
                                <br></br>
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control text-capitalize" id="inputEmail3" placeholder="Item name" value={name} onChange={(e) => { setName(e.target.value) }} required />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Category:</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" value={category} onChange={(e) => { setCategory(e.target.value) }} required >
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
                                        <input type="number" className="form-control text-capitalize" id="inputEmail3" placeholder="Item price in Rs." value={price} onChange={(e) => { setPrice(e.target.value) }} required />
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <label htmlFor="p_file" className="col-sm-2 col-form-label">Images:</label>
                                    <div className="col-sm-10 "  >
                                        <input type="file" accept="image/png, image/jpeg"
                                            //  style={{display:"none"}}
                                            className="form-control-sm  text-capitalize" id="inputEmail3"
                                            placeholder="Upload Image" multiple
                                            onChange={(e) => { uploadImage(e) }} required /><br />
                                        {/* <progress  className="col-sm-3 ml-2"value={progress} max="100" />  */}
                                        {imageUploadError && <div className="text-danger">{imageUploadError}</div>}
                                    </div>
                                </div>

                                {/* <div className="form-group row">
                                <label htmlFor="p_file" className="col-sm-2 col-form-label">Images:</label>
                                    <div className="col-sm-10 "  >
                                        <div class="custom-file">
                                            <input type="file" accept="image/png, image/jpeg" 
                                            class="custom-file-input" id="inputGroupFile03" multiple
                                             onChange={(e) => { uploadImage(e) }} />
                                            <label class="custom-file-label" for="inputGroupFile03">Upload Image</label>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Image:</label>
                                <div className="col-sm-10">
                                    <input type="url" className="form-control" id="inputEmail3" placeholder="Image url"
                                        value={imageUpload} onChange={(e) => { setImageUpload(e.target.value) }} required />
                                </div>
                            </div> */}

                                <div className="form-group row">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Location:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control text-capitalize" id="inputPassword3" placeholder="Location" value={location} onChange={(e) => { setLocation(e.target.value) }} required />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Description:</label>
                                    <div className="col-sm-10">
                                        <textarea class="form-control text-capitalize" id="exampleFormControlTextarea1" rows="3" placeholder="Item description" value={description} onChange={(e) => { setDescription(e.target.value) }} required></textarea>
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"></label>
                                    <div className="col-sm-10">
                                        <Link onClick={() => { history.goBack() }}>
                                            <button type="button" className="btn btn-secondary  POSTADS" >CANCEL</button>
                                        </Link>
                                        <button type="submit" className="btn btn-secondary float-right POSTADS" >POST AD</button>

                                    </div>
                                </div>

                            </form>
                        }
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
            <FOOTER />
            <FOOTERBOTTOM />
        </div >
    )
}




