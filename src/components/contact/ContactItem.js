import React from 'react'

export const ContactItem = ({ name, icon, description }) => {
    return (
        <div className="col-lg-4 px-2 py-1 d-flex align-items-strench">
            <div className="card px-4 border-danger w-100">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-2 p-0 text-center">
                            <i className={`${icon} fa-2x text-danger text-center`}></i>
                        </div>
                        <div className="col-10 p-0">
                            <span className="h5 ms-3">
                            {name}
                            </span>
                            <p className="mb-0 ms-3">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
