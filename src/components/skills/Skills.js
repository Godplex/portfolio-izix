import React from 'react'
import { SkillsItem } from './SkillsItem'

export const Skills = () => {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center py-5 text-white">
            <h2 className="text-center">Habilidades</h2>
            <div className="container">
                <div className="row d-flex justify-content-center px-3">
                    <SkillsItem />
                </div>
            </div>
        </section>
    )
}
