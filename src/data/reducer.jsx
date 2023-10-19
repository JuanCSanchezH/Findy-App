import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'login' || 'updateProfile':
      return {userLogged: action.payload}
    case 'logut': 
      return {userLogged: null}
    default:
      return state
  }
}

const initialState = {
  userLogged:  null, //alamacenar todo el onjeto de usuario
}
const [state, dispatch] = useReducer(reducer, initialState);