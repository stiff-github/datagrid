export default (state='', action) => {
  switch(action.type) {
    case 'SET_SORTDOWN1':
      return action.sortDown1
    default:
      return state
  }
}