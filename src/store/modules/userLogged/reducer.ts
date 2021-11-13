import { Reducer } from 'redux';
import { IUserLogged } from './types';
import { produce } from 'immer';

const INITIAL_STATE: IUserLogged = {
  id: 0,
  cpf: '',
  senha: '',
  paciente: null,
  psicologo: null,
}

const user: Reducer<IUserLogged> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type){
      case 'ADD_USER_LOGGED': {
        const { userLogged } = action.payload;
        return userLogged;
      }
      default: {
        return draft;
      }
    }
  })
}

export default user;