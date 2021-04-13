import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './authReducer';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import userReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk';
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: userReducer,
  auth: authReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
