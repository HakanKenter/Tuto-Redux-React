import {createStore, combineReducers} from 'redux'
import { filterReducer } from './filterReducer'
import { todosReducer } from './todosReducer'

export default createStore(
    combineReducers({
      todos: todosReducer,
      filter: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)