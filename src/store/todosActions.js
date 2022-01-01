// Va être charger de convertir notre element

import { DELETE_TODO_ACTION, UPDATE_TODO_ACTION } from "./todosReducer";

// en une action qui va pouvoir être dispatché
export const toggleTodoAction = (todo) => ({
    type: UPDATE_TODO_ACTION,
    payload: {...todo, completed: !todo.completed}
})

// fonction qui prend en paramètre la todo que
// l'on souhaite supprimer
export const deleteTodoAction = (todo) => ({
    // le type est la fonctionnalité ou la catégorie à laquelle 
    // appartient cette action
    type: DELETE_TODO_ACTION,
    // la chose spécifique qui s'est produite
    payload: todo.id
})