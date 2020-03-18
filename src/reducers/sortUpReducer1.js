export default (state='', action) => {
  switch(action.type) {
    case 'SET_SORTUP1':
      return action.sortUp1
    default:
      return state
  }
}