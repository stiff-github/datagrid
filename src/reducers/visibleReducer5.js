export default (state=true, action) => {
  switch(action.type) {
    case 'SET_VISIBLE5':
      return action.visible5
    default:
      return state
  }
}