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

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION'

export function todosReducer(state = initialState, action) {
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