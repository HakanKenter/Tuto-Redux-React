// Va être charger de convertir notre element

import { ADD_TODO_ACTION, DELETE_TODO_ACTION, UPDATE_TODO_ACTION } from "./todosReducer";
import wait from '../wait'

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

// Fonction asynchrone qui permet l'ajout qu'après 2 seconde
// sa va renvoyer une fonction qui va prendre en
// paramètre dispatch et qui fera un traitement particulier
export const addTodoAction = (title) => async (dispatch) => {
    // attend pendant 2 seconde
    await wait(2000)
    // Une fois que tu as fini, je vais faire un dispatch
    // et je vais t'envoyer cette objet là
    dispatch({
        type: ADD_TODO_ACTION,
        payload: {title}
    })

}