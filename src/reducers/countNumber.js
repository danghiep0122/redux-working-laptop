const countNumber = (state = 0, action) => {
  switch (action.type) {
    case 'INSCREMENT':
      return state + 1
    case 'DESCREMENT':
      return state - 1
    default:
      return state
  }
}

export default countNumber
