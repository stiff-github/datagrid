export default (state=true, action) => {
  switch(action.type) {
    case 'SET_VISIBLE2':
      return action.visible2
    default:
      return state
  }
}