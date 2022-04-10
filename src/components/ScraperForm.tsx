import { useState } from "react";
import { store } from "../store";
import { scrapWeb } from "../store/scraperSlides";

export const ScraperForm = () => {
  const [url, setUrl] = useState('');

  const onChange = (e:any) => {
    setUrl(e.target.value);
  }
  const onClick = () => {
    console.warn(url)
    scrapWeb(url)
  }

  return (<div>
    <input type="text" onChange={onChange} placeholder="Url for getting content"></input>
    <button type="button" onClick={onClick} id="get_consent">Get Content</button>
  </div>)
}