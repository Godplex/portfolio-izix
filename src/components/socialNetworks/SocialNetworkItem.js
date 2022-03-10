import React from 'react'

export const SocialNetworkItem = ({ name, icon, link }) => {
    return (
        <li className="list-inline-item py-2">
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger rounded btn-lg">
                <i className={`${icon} fa-lg`}></i> <span className="d-none d-lg-inline h5">{name}</span>
            </a>
        </li>
    )
}
