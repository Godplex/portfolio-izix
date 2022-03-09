import React from 'react'

export const ProjectsItem = ({ img, title, description, repository, demo }) => {
    return (
        <div class="py-1 px-2">
            <div class="card p-3 border-danger mb-3 w-100">
                <div class="img-wrapper">
                    <img src={img} class="card-img-top" alt={title} />
                </div>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <div class="row">
                        <div class="col-6 d-flex justify-content-start">
                            <a href={repository} target="_blank" rel="noopener noreferrer" class="btn btn-outline-danger m-1">
                                Código <span class="btn-label"><i class="fa fa-code"></i></span>
                            </a>
                        </div>
                        <div class="col-6 d-flex justify-content-end">
                            {
                                (demo.length != 0) ? <a href={demo} target="_blank" rel="noopener noreferrer" class="btn btn-outline-danger m-1">
                                    Demo <span class="btn-label"><i class="fa fa-code"></i></span>
                                </a> : ""
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
