import React from 'react'

export const Footer = () => {

    const year = new Date(Date.now()).getFullYear();

    return (
        <div className="copyright-text py-3 text-center text-white bg-dark">
            <p className="h5">Desarrollado por Julián David Rincón Espinosa</p>
            <p className="m-0">{year}</p>
        </div>
    )
}
