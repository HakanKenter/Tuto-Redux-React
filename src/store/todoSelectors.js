// reselect permet d'évioter le 're-rendu'
// elle fait donc une mémorisation pour 
// optimiser les performance de mon application
import {createSelector} from 'reselect'
import { filterSelector } from './filterSelectors'

// C'est un fichier qui va exporter des fonctions
// Ces fonctions là vont permettre de simplifier l'écriture
// lorsque l'on fait un connect
// renvoi les todos
export const todosSelector = ({todos}) => todos

// ça, ça va crée une version mémoriser de notre selecteur 
// premierement on met toute les selecteur qui sont des 
// dépendance à ma fonction
export const filteredTodosSelector = createSelector(
    todosSelector,
    filterSelector,
    // la fonction suivante prendra en paramètre 
    // le resultat de chacun des selecteurs qui ont été défini
    // avant
    // cette fonction suivante ne sera donc re-appeler que si 
    // une des deux valeur au dessus a changer
    (todos, filter) => {
        if (filter === null) {
            return todos
        }
        return todos.filter(todo => todo.completed === filter)
    }
)

/**
export const filteredTodosSelector = ({todos, filter}) => {
    // si filter est égale à null, tu me retourne les todos
    if (filter === null) {
        return todos
    }
    
    // si ce n'est pas égale à null, il faut que tu me retourne les
    // todos, mais ces todos là tu vas les filtrer et il faut que tu les filtres
    // en regardant que todo.completed soit égale à ce qui est demandé au niveau du 
    // filtre
    return todos.filter(todo => todo.completed === filter)
}
*/