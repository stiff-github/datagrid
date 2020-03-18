export default (state=true, action) => {
  switch(action.type) {
    case 'SET_VISIBLE7':
      return action.visible7
    default:
      return state
  }
}