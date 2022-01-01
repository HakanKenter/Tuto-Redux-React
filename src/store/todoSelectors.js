// C'est un fichier qui va exporter des fonctions
// Ces fonctions là vont permettre de simplifier l'écriture
// lorsque l'on fait un connect
// renvoi les todos
export const todosSelector = ({todos}) => todos

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