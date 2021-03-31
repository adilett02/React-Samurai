import { combineReducers, createStore } from 'redux';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import userReducer from './usersReducer';
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: userReducer,
});
let store = createStore(reducers);
window.store = store;

export default store;
