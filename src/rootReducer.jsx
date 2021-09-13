import { combineReducers } from 'redux'
import { authReducer } from './reducers/userReducer'
import { productsReducer } from './reducers/productsReducer'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  userData: authReducer,
  products: productsReducer
})

export default rootReducer