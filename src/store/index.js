import {createStore, combineReducers} from 'redux'
import { todosReducer } from './todosReducer'

export default createStore(
    combineReducers({
      todos: todosReducer,
      // function qui prend en paramètre le state et l'action et qui renvoi le state
      filter: (state = 0, action) => state
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)