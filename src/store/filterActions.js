import { UPDATE_FILTER } from "./filterReducer";

// fonction qui prend en paramètre l'état du filtre (value)
// et return un objet de type update filter
// et au niveau du payload ça donnera la valeur (null, false ou true)
export const setFilterAction = (value) => ({
    type: UPDATE_FILTER,
    payload: value
})