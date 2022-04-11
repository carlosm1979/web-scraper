import {  getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { firebaseStore } from '.'
import { setLoginData } from './firebaseActions'

export const loginWithGoogle = () => {
  const auth = getAuth()
  signInWithPopup(auth, new GoogleAuthProvider()).then(result => {
    firebaseStore.dispatch(setLoginData({
      name: result.user.displayName,
      email: result.user.email
    })) 
  })
}
