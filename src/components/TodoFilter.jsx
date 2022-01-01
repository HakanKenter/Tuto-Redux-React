import React from 'react'
import {connect} from 'react-redux'
import { setFilterAction } from '../store/filterActions'
import { filterSelector } from '../store/filterSelectors'

export function TodoFilter ({value, onChange}) {
    return <div>
        <button disabled={value === null} onClick={() => onChange(null)}>Aucun filtre</button>
        <button disabled={value === true} onClick={() => onChange(true)}>Complété</button>
        <button disabled={value === false} onClick={() => onChange(false)}>A faire</button>
    </div>
}

// ici méthode connect qui est la première de base
export const TodoFilterStore = connect(
    state => ({
        // value sera extraite grâce à notre filterSelector
        value: filterSelector(state)
    }),
    // le onChange par compte sera relié a un dispatch
    // au niveau de notre state
    dispatch => ({
        onChange: (value) => dispatch(setFilterAction(value))
    })
)(TodoFilter)