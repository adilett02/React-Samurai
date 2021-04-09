import { combineReducers, createStore } from 'redux';
import authReducer from './authReducer';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import userReducer from './usersReducer';
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: userReducer,
  auth: authReducer,
});
let store = createStore(reducers);
window.store = store;

export default store;
