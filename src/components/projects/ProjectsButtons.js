import React from 'react'

export const ProjectsButtons = ({ items, activeIndex, show }) => {

    const { id, name } = items;

    const className = (activeIndex === id) ? 'btn btn-outline-danger' : 'btn btn-primary';

    return (
        <li className="select-cat list-inline-item p-2">
            <button onClick={() => { show(id) }} className={className}>
                {name}
            </button>
        </li>
    )
}
