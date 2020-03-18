export default (state=true, action) => {
  switch(action.type) {
    case 'SET_VISIBLE3':
      return action.visible3
    default:
      return state
  }
}