import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import user from './user';
import budget from './budget'
import thunk from 'redux-thunk';

const initialState = {};
const middleWare = [thunk];
const composeEnhancers = compose;

const reducer = combineReducers({ user, budget });

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middleWare)));

export const server = 'http://3.90.199.205:8080';
export default store;