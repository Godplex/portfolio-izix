import React from 'react'
import { HobbiesItem } from './HobbiesItem'

export const Hobbies = () => {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center py-5 text-white" id="hobbies">
            <h2 className="text-center">Pasatiempos</h2>
            <div className="container px-5">
                <HobbiesItem />
            </div>
        </section>
    )
}
