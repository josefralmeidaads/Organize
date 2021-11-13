import { IUserLogged } from "./types";

export const addUserLogged = (userLogged: IUserLogged) => {
  return {
    type: 'ADD_USER_LOGGED',
    payload: {
      userLogged
    }
  }
}