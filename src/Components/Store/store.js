
import reducer  from "./reducer";
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
const store = createStore(reducer, applyMiddleware(logger));

export default store;
