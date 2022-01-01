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
export const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION'
export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION'

export function todosReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO_ACTION: 
            // Une mutation c'est quoi ? -> state.push()
            // Dans les case pour redux on ne peux
            // pas faire de mutation !!!!!!!
            // Il faut que ça soit immutable, donc un nouveau tableau
            return [...state, {id: ++id, completed: false, ...action.payload}]
        case UPDATE_TODO_ACTION:
            // On crée une transformation immutable
            // on rediéfini pas la valeur de la chose 
            // on renvoi autre chose
            // Je parcours l'ensemble de mes todos
            // et je retourne ce qu'on aactuellement 
            // et ce qu'on a dans le payload
            return state.map(todo => {
                // payload représente chacune des mes todos
                // Si l'id du todo (dans le initialState) 
                // est égale à l'id du todo que l'on a selectionner
                if (todo.id === action.payload.id) {
                    return {...todo, ...action.payload}
                } else {
                    return todo
                }
            })
        case DELETE_TODO_ACTION:
            // renvoi le state contenant tout les todo mise à part
            // celui de l'id a supprimer
            return state.filter(todo => todo.id != action.payload)
        default: 
            return state
    }
}

// // La payload propriété facultative PEUT être n'importe quel type de valeur. Il représente la charge utile
// // de l'action. Toute information sur l'action qui n'est pas le typeou le statut de l'action doit faire 
// // partie du payloadchamp. Par convention, si errorest true, la charge utile DEVRAIT être un objet d'erreur

// // Payload est une convention de nommage non officielle et acceptée par la communauté ( de facto ) 
// // pour la propriété qui contient les données réelles dans un objet d'action Redux 