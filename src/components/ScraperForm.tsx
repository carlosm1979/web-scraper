import { useState } from "react";
import { loginWithGoogle } from "../store/firebase/firebaseSlides";
import { scrapWeb } from "../store/scraperSlides";

export const ScraperForm = () => {
  const [url, setUrl] = useState('');

  const onChange = (e:any) => {
    setUrl(e.target.value);
  }

  const onClick = () => {
    scrapWeb(url)
  }

  const onLogin = () => {
    loginWithGoogle()
  }

  return (<>
    <input type="text" onChange={onChange} placeholder="Url for getting content"></input>
    <button type="button" onClick={onClick} >Get Content</button>
    <button type="button" onClick={onLogin} >Login</button>
  </>)
}