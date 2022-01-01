import {createStore, combineReducers, applyMiddleware} from 'redux'
import { filterReducer } from './filterReducer'
import { todosReducer } from './todosReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(
    combineReducers({
      todos: todosReducer,
      filter: filterReducer,
    }),
    composeWithDevTools(
      applyMiddleware(thunk),
      // other store enhancers if any
    )
)

export default store