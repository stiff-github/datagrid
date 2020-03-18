export default (state='', action) => {
  switch(action.type) {
    case 'SET_FILTER1':
      return action.filter1
    default:
      return state
  }
}