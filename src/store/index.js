import {createStore, combineReducers} from 'redux'
import { filterReducer } from './filterReducer'
import { todosReducer } from './todosReducer'

const incr = function (state = 0, action) {
  if (action.type === 'incr') {
    return state + 1
  }
  return state
}

const store = createStore(
    combineReducers({
      todos: todosReducer,
      filter: filterReducer,
      incr: incr
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
window.setInterval(() => {
  store.dispatch({type: 'incr'})
}, 1000)

export default store