const measurements = (state, action) => {
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
      return {
        inputOneUnit: 'Kelvin',
        inputTwoUnit: 'Kelvin',
      }
  }
}

export default measurements
