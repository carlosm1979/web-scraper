import { useState } from "react";
import { createStore } from "redux";
import { firebaseReducer } from "./firebaseReducer";

export const firebaseStore = createStore(firebaseReducer)

export const useFirebaseStore = () => {
  const [data, setData] = useState({name: '', email: ''}); 

  firebaseStore.subscribe(() => {
    setData(firebaseStore.getState().data)
  })

  return {
    data
  }
}
