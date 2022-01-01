import React from 'react'
import {connect} from 'react-redux'
import { UPDATE_TODO_ACTION } from '../store/todosReducer'

function TodoItem({todo, onToggle}) {
    return <li>
        <label htmlFor="">
            <input type="checkbox" checked={todo.completed} onChange={() => 
            onToggle(todo)} />
            {todo.title}
        </label>
    </li>
}

export function TodoList({todos, onToggle}) {
    return <ul>
       {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} key={todo.id} />)}
    </ul>
}

// La fonction connect va me permettre d'importer mon store
// elle va renvoyer une fonction à laquelle il faudra passer
// le composant que l'on souhaite décorer
export const TodoListStore = connect(
    // Prend en paramètre l'état de mon store
    // puis retourne un objet
    // avec les différentes choses que je vais envoyer en props
    (state) => ({
        todos: state.todos
    }),
    // fonction qui permet de mapper des dispatchs
    // au niveau de mes props
    // cette fonction prend en paramètre dispatch et 
    // return un objet qui pourra utiliser dispatch
    (dispatch) => ({
        // onToogle est une fonction qui prend en paramètre la todo
        // et fait un dispatch
        // au niveau duquel je passe un objet de type
        // UPDATE_TODO_ACTION
        // et le payload sera notre todo 
        // et le contraire de l'état actuelle de 
        // 'completed' 
        onToggle: todo => dispatch({
            type: UPDATE_TODO_ACTION,
            payload: {...todo, completed: !todo.completed}
        })
    })
)(TodoList)