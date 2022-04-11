const initialState = { content: ''}

export const scraperReducer = (state = initialState, action: any) => {

  switch(action.type) {
    case 'scraper/SET_CONTENT':
      return {
        ...state,
        content: action.payload
      }
    default:
      return state
  }
}