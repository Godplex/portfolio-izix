import React from 'react'

export const ProjectsItem = ({ img, title, description, repository, demo }) => {

    const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');

    return (
        <div className="py-1 px-2">
            <div className="card p-3 border-danger mb-3 w-100">
                <div className="img-wrapper">
                    <img src={img} className="card-img-top" alt={title} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="row">
                        <div className="col-6 d-flex justify-content-start">
                            <a href={repository} target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger m-1">
                                <i className="fa fa-code fa-lg"></i> <span className="d-none d-lg-inline h5">Código</span>
                            </a>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            {
                                (regex.test(demo)) 
                                ? <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger m-1">
                                    <span className="d-none d-lg-inline h5">Demo</span> <i className="fa-solid fa-eye fa-lg"></i>
                                </a> 
                                : ""
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
