import React from 'react'

export const SocialNetworks = () => {
    return (
        <ul className="list-inline text-center d-md-flex align-items-md-center">
            <li className="list-inline-item py-2">
                <a href="https://github.com/Godplex" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger rounded btn-lg">
                    <i className="fa-brands fa-github fa-xl"></i> <span className="d-none d-lg-inline h5">GitHub</span>
                </a>
            </li>
            <li className="list-inline-item py-2">
                <a href="https://gitlab.com/keideriz1x" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger rounded btn-lg">
                    <i className="fa-brands fa-gitlab fa-xl"></i> <span className="d-none d-lg-inline h5">GitLab</span>
                </a>
            </li>
            <li className="list-inline-item py-2">
                <a href="https://www.linkedin.com/in/izix" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger rounded btn-lg">
                    <i className="fa-brands fa-linkedin fa-xl"></i> <span className="d-none d-lg-inline h5">LinkedIn</span>
                </a>
            </li>
        </ul>
    )
}
