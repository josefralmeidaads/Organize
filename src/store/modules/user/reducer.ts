import { Reducer } from 'redux';
import { IUserState } from "./types";
import { produce } from 'immer';

const INITIAL_STATE: IUserState = {
  id: 0,
  nome: '',
  senha: '',
  crp: '',
  cpf: '',
  cidade: '',
  estado: '',
  sobreMim: '',
  valor: 0,
}

const user: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type){
      case 'ADD_USER': {
        const { user } = action.payload;
        return user;
      }
      default: {
        return draft;
      }
    }
  })
}

export default user;