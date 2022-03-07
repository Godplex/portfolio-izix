import React from 'react'

export const HobbiesItem = () => {
    return (
        <>
            <div className="col-6 col-md-4 col-lg-2 px-2 px-2 d-flex align-items-strench">
                <div className="card px-2 pt-4 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-solid fa-music fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5">Escuchar música</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 px-2 px-2 d-flex align-items-strench">
                <div className="card px-2 pt-4 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-solid fa-tv fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5">Ver series</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 px-2 px-2 d-flex align-items-strench">
                <div className="card px-2 pt-4 border-danger mt-4 w-100 cardHover">
                    <div className="card-body">
                        <i className="fa-solid fa-gamepad fa-3x text-danger iconHover"></i>
                        <p className="pt-3 h5">Jugar videojuegos</p>
                    </div>
                </div>
            </div>
        </>
    )
}