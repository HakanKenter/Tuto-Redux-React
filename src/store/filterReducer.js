export const UPDATE_FILTER = 'UPDATE_FILTER';

export function filterReducer (state = null, action) {
    switch (action.type) {
        case UPDATE_FILTER:
            // va juste retourner ce qu'il va recevoir en payload (a l'événement click)
            return action.payload
        default:
            return state;
    }
}