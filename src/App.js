import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import {TodoListStore} from './components/TodoList'
import { TodoFilterStore } from './components/TodoFilter';

function App() {
  return (
    <Provider store={store}>
      <TodoListStore />
      <TodoFilterStore />
    </Provider>
  );
}

export default App;
