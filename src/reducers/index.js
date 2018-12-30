import { combineReducers } from 'redux'

import person from './person'
import modal from './modal'

const rootReducer = combineReducers({
  person,
  modal,
})

export default rootReducer
