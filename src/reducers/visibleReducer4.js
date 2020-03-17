export default (state=true, action) => {
  switch(action.type) {
    case 'SET_VISIBLE4':
      return action.visible4
    default:
      return state
  }
}