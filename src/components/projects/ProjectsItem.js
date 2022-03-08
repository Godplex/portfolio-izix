import { useState } from 'react';

export const ProjectsItem = ({ type, name, desc, img, code, youtube }) => {

    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = youtube.match(regExp);
    const id = (match && match[7].length === 11) && match[7];

    return (
        <div className="px-2">
            <div className={`card px-2 pt-5 border-danger mt-4 w-100 ${type}`}>
                <div className="img-wrapper">
                    <img src={img} className="card-img-top" height="170" style={{ objectFit: 'contain' }} alt={name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {desc}
                    </p>
                    <div className="row">
                        <div className="col-6 d-flex justify-content-start">
                            <a href={code} target="_blank" rel="noopener noreferrer" className="btn btn-labeled btn-outline-danger card-btnMore m-1">
                                <span className="btn-label"><i className="fa fa-code fa-xl"></i></span> Repositorio
                            </a>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <button type="button" className="btn btn-labeled btn-outline-danger card-btnMore m-1">
                                <span className="btn-label"><i class="fa-solid fa-eye fa-xl"></i></span> Ver demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
