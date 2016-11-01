const INITIAL_STATE = {
  inputOneValue: 0,
  inputTwoValue: 0
}

const inputs = (state = INITIAL_STATE, action) => {
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
      return state
  }
}

export default inputs
