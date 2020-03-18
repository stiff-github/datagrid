export default (state='', action) => {
  switch(action.type) {
    case 'SET_FILTER7':
      return action.filter7
    default:
      return state
  }
}