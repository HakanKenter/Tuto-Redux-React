import React, {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { toggleTodoAction, deleteTodoAction } from '../store/todosActions'
import { todosSelector } from '../store/todoSelectors'

function TodoItem({todo, onToggle, onDelete}) {
    return <li>
        <label htmlFor="">
            <input type="checkbox" checked={todo.completed} onChange={() => 
            onToggle(todo)} />
            {todo.title}
            <button onClick={() => onDelete(todo)}>x</button>
        </label>
    </li>
}

export function TodoList({todos, onToggle, onDelete}) {
    return <ul>
       {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} key={todo.id} onDelete={onDelete} />)}
    </ul>
}

// Mode HOOK
// Deuxième manière de travailler qui va nous permettre de connecter
// un composant à notre store 
export function TodoListStore() {
    // useSelector est un hook (fonction) qui vient de react-redux
    // useDispatch est un hook (fonction) qui vient de react-redux
    const todos = useSelector(todosSelector)
    const dispatch = useDispatch()
    // on utilise useCallback pour ne pas que ce soit regénérer 
    // systematiquement
    const onToggle = useCallback((todo) => {
        dispatch(toggleTodoAction(todo))
    }, [])
    const onDelete = useCallback((todo) => {
        dispatch(deleteTodoAction(todo))
    }, [])
    return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
}


/*
// Mode connect
// Première manière de travailler 
// La fonction connect va me permettre d'importer mon store
// elle va renvoyer une fonction à laquelle il faudra passer
// le composant que l'on souhaite décorer
export const TodoListStore = connect(
    // Prend en paramètre l'état de mon store
    // puis retourne un objet
    // avec les différentes choses que je vais envoyer en props
    (state) => ({
        todos: todosSelectors(state)
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
        onToggle: todo => dispatch(toggleTodoAction(todo))
    })
)(TodoList)
*/