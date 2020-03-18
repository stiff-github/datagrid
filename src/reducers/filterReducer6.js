export default (state='', action) => {
  switch(action.type) {
    case 'SET_FILTER6':
      return action.filter6
    default:
      return state
  }
}