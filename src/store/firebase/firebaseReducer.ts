const initialState = { data: {
  name: '',
  email: ''
}}

export const firebaseReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case 'firebase/SET_LOGIN_DATA':
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}
