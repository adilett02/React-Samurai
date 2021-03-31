import { combineReducers, createStore } from 'redux';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
});
let store = createStore(reducers);
window.store = store;

export default store;
