import { useFirebaseStore } from "../store/firebase"
import { loginWithGoogle } from "../store/firebase/firebaseSlides"

export const Login = () => {
  const { data } = useFirebaseStore()

  const onLogin = () => {
    loginWithGoogle()
  }
  return (<>
  <button type="button" onClick={onLogin} >Login</button>
  <span>{data.name}</span><span>({data.email})</span>
  </>)
}