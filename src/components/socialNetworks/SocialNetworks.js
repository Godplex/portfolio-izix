import React from 'react'

export const SocialNetworks = () => {
    return (
        <ul className="list-inline text-center d-sm-flex align-items-sm-center">
            <li className="list-inline-item py-2">
                <a href="https://github.com/Godplex" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger rounded">
                    <i className="fa-brands fa-github fa-xl"></i> <span className="d-none d-lg-inline">GitHub</span>
                </a>
            </li>
            <li className="list-inline-item py-2">
                <a href="https://gitlab.com/keideriz1x" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger rounded">
                    <i className="fa-brands fa-gitlab fa-xl"></i> <span className="d-none d-lg-inline">GitLab</span>
                </a>
            </li>
            <li className="list-inline-item py-2">
                <a href="https://www.linkedin.com/in/izix" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger rounded">
                    <i className="fa-brands fa-linkedin fa-xl"></i> <span className="d-none d-lg-inline">LinkedIn</span>
                </a>
            </li>
            <li className="list-inline-item py-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger rounded">
                    <i className="fa-solid fa-briefcase fa-xl"></i> <span className="d-none d-lg-inline">Currículo</span>
                </a>
            </li>
        </ul>
    )
}
