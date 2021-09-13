import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools(
    // applyMiddleware(...middleware),
    // other store enhancers if any
  ));

export default store