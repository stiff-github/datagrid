export default (state='', action) => {
  switch(action.type) {
    case 'SET_SORTDOWN4':
      return action.sortDown4
    default:
      return state
  }
}