const counter = (state = 0, action) => {
    console.log(action)
    switch(action.type) {
      case 'inc':
        return state + action.payload;
      case 'dec':
        return state - 1;
      default:
        return state;
      }
  }  

export default counter