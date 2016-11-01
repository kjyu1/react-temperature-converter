const INITIAL_STATE = {
  inputOneUnit: 'Kelvin',
  inputTwoUnit: 'Kelvin',
}

const measurements = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGED_MEASUREMENT_1':
      return {
        ...state,
        inputOneUnit: action.inputOneUnit
      }
    case 'CHANGED_MEASUREMENT_2':
      return {
        ...state,
        inputTwoUnit: action.inputTwoUnit
      }
    default:
      return state
  }
}

export default measurements
