const inputs = (state, action) => {
  switch (action.type) {
    case 'CHANGED_INPUT_1':
      return {
        ...state,
        inputOneValue: action.inputOneValue
      }
    case 'CHANGED_INPUT_2':
      return {
        ...state,
        inputTwoValue: action.inputTwoValue
      }
    default:
      return {
        inputOneValue: 0,
        inputTwoValue: 0
      }
  }
}

export default inputs
