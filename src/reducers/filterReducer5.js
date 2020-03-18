export default (state='', action) => {
  switch(action.type) {
    case 'SET_FILTER5':
      return action.filter5
    default:
      return state
  }
}