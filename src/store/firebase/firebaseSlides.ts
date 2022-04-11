import {  getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

export const loginWithGoogle = () => {
  const auth = getAuth()
  signInWithPopup(auth, new GoogleAuthProvider()).then(result => console.warn(result))
}