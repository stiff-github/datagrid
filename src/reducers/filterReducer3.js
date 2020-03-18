export default (state='', action) => {
  switch(action.type) {
    case 'SET_FILTER3':
      return action.filter3
    default:
      return state
  }
}