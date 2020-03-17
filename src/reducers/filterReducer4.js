export default (state='', action) => {
  switch(action.type) {
    case 'SET_FILTER4':
      return action.filter4
    default:
      return state
  }
}