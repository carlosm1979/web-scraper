import { useState } from "react";
import { createStore } from 'redux'
import { scraperReducer } from './scraperReducer'

export const store = createStore(scraperReducer)

export const useScraperStore = () => {
  const [content, setContent] = useState(''); 

  store.subscribe(() => {
    setContent(store.getState().content)
  })

  return {
    content
  }

}