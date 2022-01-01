import {createStore, combineReducers} from 'redux'

console.log('Tutotirel redux')

let id = 2;

const initialState = [
    {
        id:1,
        title: 'Enregistrer le tutoriel',
        completed: false
    },
    {
        id:2,
        title: 'Préparer le tutoriel',
        completed: false
    }
]

const ADD_TODO_ACTION = 'ADD_TODO_ACTION'

function TodoReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO_ACTION: 
            // Une mutation c'est quoi ? -> state.push()
            // Dans les case pour redux on ne peux
            // pas faire de mutation !!!!!!!
            // Il faut que ça soit immutable, donc un nouveau tableau
            return [...state, {id: ++id, completed: false, ...action.payload}]
        default: 
            return state
    }
}

// La payload propriété facultative PEUT être n'importe quel type de valeur. Il représente la charge utile
// de l'action. Toute information sur l'action qui n'est pas le typeou le statut de l'action doit faire 
// partie du payloadchamp. Par convention, si errorest true, la charge utile DEVRAIT être un objet d'erreur

// Payload est une convention de nommage non officielle et acceptée par la communauté ( de facto ) 
// pour la propriété qui contient les données réelles dans un objet d'action Redux 

// Si j'envoie undefined en premier paramètre il prendra la valeur par défault
// const state = TodoReducer(undefined, {})
// const newState = TodoReducer(state, {type: ADD_TODO_ACTION, payload: {title: 'demo'}})
// console.log(state, newState)

// On crée un 'store' qui aura pour reducer, mon TodoReducer
const store = createStore(
  combineReducers({
    todos: TodoReducer,
    // function qui prend en paramètre le state et l'action et qui renvoi le state
    filter: (state = 0, action) => state
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// permet d'ecouter quand il y a de nouveau changement dans le store
store.subscribe(() => console.log((store.getState())))

store.dispatch({type: ADD_TODO_ACTION, payload: {title: 'DEMO'}})
store.dispatch({type: ADD_TODO_ACTION, payload: {title: 'DEMO'}})
store.dispatch({type: ADD_TODO_ACTION, payload: {title: 'DEMO'}})
store.dispatch({type: ADD_TODO_ACTION, payload: {title: 'DEMO'}})









// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
