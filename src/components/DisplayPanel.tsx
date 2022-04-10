import { useState } from "react";
import { store } from "../store";

export const DisplayPanel = () => {
  const [content, setContent] = useState(''); 
  store.subscribe(() => {
    setContent(store.getState().content)
  })

  return (<div>{content}</div>)
}
