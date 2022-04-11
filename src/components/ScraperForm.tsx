import { useState } from "react";
import { scrapWeb } from "../store/scraperSlides";

export const ScraperForm = () => {
  const [url, setUrl] = useState('');

  const onChange = (e:any) => {
    setUrl(e.target.value);
  }

  const onClick = () => {
    scrapWeb(url)
  }

  return (<>
    <input type="text" onChange={onChange} placeholder="Url for getting content"></input>
    <button type="button" onClick={onClick} id="get_consent">Get Content</button>
  </>)
}