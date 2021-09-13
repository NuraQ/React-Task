import { combineReducers } from 'redux'
import { authReducer } from './reducers/userReducer'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  userData: authReducer,
})

export default rootReducer