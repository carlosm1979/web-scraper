import { createStore } from 'redux'
import { scraperReducer } from './scraperReducer'


export const store = createStore(scraperReducer)