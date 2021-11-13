import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { IUserState } from './modules/user/types';
import { IUserLogged } from './modules/userLogged/types';

export interface IState {
  user: IUserState;
  userLogged: IUserLogged;
}

const store = createStore(rootReducer);

export default store;