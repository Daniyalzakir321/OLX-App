import { LOGIN_USER} from "./action";
import {combineReducers} from 'redux';

const LoginUser = (state = {}, action) => {
  if (action.type == LOGIN_USER) {
    return { ...state, ...action.payload };
  }

  return state;
};

// const addContact = (state = [], action) => {
//   if (action.type == ADD_CONTACT) {
//     return [...state, action.payload];
//   }

//   return state;
// };

const reducer = combineReducers({
  user: LoginUser,
//   constact: addContact
});
export default reducer;