import { IUserState } from "./types";

export const addUser = (user: IUserState) => {
 return {
   type: 'ADD_USER',
   payload: {
     user,
   }
 }
}