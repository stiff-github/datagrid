export default (state=true, action) => {
  switch(action.type) {
    case 'SET_VISIBLE1':
      return action.visible1
    default:
      return state
  }
}