import { combineReducers } from 'redux';
import user from './user/reducer';
import userLogged from './userLogged/reducer';

export default combineReducers({
  user,
  userLogged,
});