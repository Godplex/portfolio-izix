import React from 'react'
import { HobbiesItem } from './HobbiesItem'

export const Hobbies = () => {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center py-5 text-white">
            <div className="container">
                <h2 className="text-center">Pasatiempos</h2>
                <div className="row d-flex justify-content-center px-3">
                    <HobbiesItem />
                </div>
            </div>
        </section>
    )
}
