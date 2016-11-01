import { combineReducers } from 'redux'
import inputs from './inputs'
import measurements from './measurements'

const tempConverterReducer = combineReducers({
  inputs,
  measurements
})

export default tempConverterReducer
