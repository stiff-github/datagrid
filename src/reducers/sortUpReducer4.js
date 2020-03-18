export default (state='', action) => {
  switch(action.type) {
    case 'SET_SORTUP4':
      return action.sortUp4
    default:
      return state
  }
}