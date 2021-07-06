
export const LOGIN_USER = "LOGIN_USER";
// export const ADD_CONTACT = "ADD_CONTACT";
export const LoginUser = userdata =>{
    return {
        type: LOGIN_USER,
        payload: userdata
    }
};
// export const updateConatact = update => ({
//   type: ADD_CONTACT,
//   payload: update
// });