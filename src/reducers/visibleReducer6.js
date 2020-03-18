export default (state=true, action) => {
  switch(action.type) {
    case 'SET_VISIBLE6':
      return action.visible6
    default:
      return state
  }
}