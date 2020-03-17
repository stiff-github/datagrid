export default (state='', action) => {
  switch(action.type) {
    case 'SET_FILTER2':
      return action.filter2
    default:
      return state
  }
}